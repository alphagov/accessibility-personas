// ==UserScript==
// @name         Persona Claudia
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      MIT
// @author       Crown Copyright (Government Digital Service)
// @description  Claudia, a sight impaired screen magnifier user - magnifies the screen, changes colours to increase contrast, highlights the mouse pointer
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

/**
 * Invert colours
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

GM_addStyle('html, img, video, iframe { filter: invert(1) hue-rotate(180deg) !important; }');


/**
 * Zoom in 400% and widen the page
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

GM_addStyle('body { zoom: 4 !important; min-width: 200vh !important; }');


/**
 * Make focus more prominent
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

GM_addStyle('*:focus { outline: 5px solid #c00 !important; }');


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
