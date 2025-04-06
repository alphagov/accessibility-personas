// ==UserScript==
// @name         Wobbly mouse
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
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

GM_addStyle('* {cursor: none !important;}');
GM_addStyle('#wds-parkinsonsCursor {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAVCAMAAABBhy+7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA+VBMVEUAAAAAAAD7+/sAAAD09PQAAAAAAAD09PTz8/PS0tJqampubm5+fn6np6cAAAD19fXw8PD39/cJCQkAAAAAAAAAAAAAAAD19fWzs7OgoKDX19cAAAD+/v6ysrIAAAAICAj29vb09PQAAAAAAADFxcUAAAAAAADR0dH8/Py2trYAAAAAAAAAAABRUVH29vb39/fJycni4uLp6emjo6MHBwcAAAAAAAAAAAD////T09MUFBTS0tIAAAAXFxfb29sbGxseHh4aGhrr6+vv7+/39/c5OTni4uIKCgqurq5BQUFmZmZDQ0PQ0NDW1tY9PT1tbW2np6cgICCioqIFyGmYAAAAOHRSTlMAAooIjg4QiH6dTUpBMQT92N4bFBILA/t4aU0B+3AgIt6zBQ1lGwqE/CMGCQcp9txCpsJpJQ8iGe73bXgAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAArUlEQVQY003P1xKCMBRFUaKCvSuWWFFsYG9Rr1jA3v3/jzGMwOS8rac9h0MuxDFzEw9rnixYC2S5YiwQYE0Ja82xSdhoXsSQ2ocYOrZo26Zlk1vY7XXdINSUh+MJzv5AMBSOUF6isSvc4olkKi1SZrK5O8AjLyKEOaFQLJUrT3hVJTNUq8sNofmGT6uNKTu8gtVu72v0B2YXi5hDqeFoPJk6txR5NuclbBOpyh8/ou0enbQh1QcAAAAASUVORK5CYII=");');
GM_addStyle('#wds-parkinsonsCursor {position: absolute !important;z-index: 9999999 !important;width: 21px;height: 21px;pointer-events: none;background-repeat: no-repeat;transition: left 0.05s, top 0.05s;}');

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
