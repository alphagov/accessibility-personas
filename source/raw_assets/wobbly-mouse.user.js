// ==UserScript==
// @name         Wobbly mouse
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.1
// @license      ISC
// @author       Metamatrix AB [https://github.com/Metamatrix/web-disability-simulator] and Crown Copyright (Government Digital Service)
// @description  Wobble the cursor to simulate having issues using a mouse
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

const shakeSpeed = 40;
const shakePositionInterval = 250;
const appVersion = navigator.appVersion;

let cursor = null,
  posInterval = null,
  cursorPosX = 0,
  cursorPosY = 0,
  viewportPosX = 0,
  viewportPosY = 0,
  offsetX = 0,
  offsetY = 0,
  css = null,
  clickedElement = null;

function random(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function setStyle(element, style) {
  for (var s in style) {
    element.style[s] = style[s];
  }
}

GM_addStyle('body * {cursor: none !important;}');
GM_addStyle('#wds-parkinsonsCursor { position: absolute !important; z-index: 9999999 !important; width: 21px; height: 21px; pointer-events: none; transition: left 0.05s, top 0.05s; box-sizing: border-box; padding: 0; margin: 0; transform: rotate(-68deg) skew(-30deg, -30deg); }');
GM_addStyle('#wds-parkinsonsCursor::before, #wds-parkinsonsCursor::after { display: block; content: ""; position: absolute; top: -10px; left: -10px; box-sizing: border-box; width: 0; height: 0; border-style: solid; border-bottom-color: transparent; border-left-color: transparent; }');
GM_addStyle('#wds-parkinsonsCursor::before { color: #333; border-width: 10px; } #wds-parkinsonsCursor::after { top: -8px; left: -6px; color: #fff; border-width: 7px; }');
GM_addStyle('#wds-parkinsonsCursor.mac::before { color: #fff; } #wds-parkinsonsCursor.mac::after { color: #333; }');

function mousemoveHandler(e) {
  // Save the position of the fake cursor
  cursorPosX = e.pageX + offsetX;
  cursorPosY = e.pageY + offsetY;

  // Save the viewport position of the fake cursor (position without scroll)
  // We use this later to get the clicked element
  viewportPosX = e.clientX + offsetX;
  viewportPosY = e.clientY + offsetY;

  setStyle(cursor, {left: cursorPosX + 'px', top: cursorPosY + 'px'});
}

function elementClickHandler(e) {

  if(e.target === clickedElement) {
    // Actual mouse clicked element is the same as the element that the fake cursor would click.
    // This is because we triggered the click or that the positions of the mouse and the fake cursor are both over the same element.
    // Do nothing and pass on the click. Reset the clicked element.
    clickedElement = null;
  }
  else {
    // Actual mouse clicked element is NOT the same as the element that the fake cursor would click.
    // Get the element that the fake cursor would click and trigger click on that element.
    e.preventDefault();

    clickedElement = document.elementFromPoint(viewportPosX, viewportPosY);

    if(clickedElement) {
      clickedElement.click();
    }
  }

}

function setOffset() {
  offsetX = random(-shakeSpeed, shakeSpeed);
  offsetY = random(-shakeSpeed, shakeSpeed);
}

(function() {

  'use strict';

  let cursorType = appVersion.includes('Mac') ? 'mac' : 'windows';

  cursor = document.createElement('div');

  cursor.setAttribute('id', 'wds-parkinsonsCursor');

  cursor.classList.add(cursorType);

  document.body.appendChild(cursor);

  document.addEventListener('mousemove', mousemoveHandler);

  document.addEventListener('click', elementClickHandler);

  posInterval = setInterval(setOffset, shakePositionInterval);

})();
