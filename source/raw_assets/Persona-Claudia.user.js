// ==UserScript==
// @name         Persona Claudia
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      MIT
// @author       Crown Copyright (Government Digital Service)
// @description  Claudia, a sight impaired screen magnifier user - highlights the mouse pointer
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

/**
 * Highlight the mouse pointer
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

let css = `
#claudia-cursor-circle {
  zoom: 0.25;
  position: fixed;
  width: 100px;
  height: 100px;
  margin-top: -60px;
  margin-left: -60px;
  border: 20px solid rgba(205,0,0,0.7);
  border-radius: 50%;
  box-shadow: 0px 0px 0px 10px rgba(256, 256, 256, .5);
  pointer-events:none;
  z-index: 9999999;
}
`
GM_addStyle(css);

let cursorCircle = null;

function setStyle(element, style) {
  for (var s in style) {
    element.style[s] = style[s];
  }
}

function mousemoveHandler(e) {
  setStyle(cursorCircle, {top: e.clientY + 'px', left: e.clientX + 'px'});
}

(function() {

  'use strict';

  cursorCircle = document.createElement('div');
  cursorCircle.setAttribute('id', 'claudia-cursor-circle');
  document.body.appendChild(cursorCircle);

  document.addEventListener('mousemove', mousemoveHandler);

})();
