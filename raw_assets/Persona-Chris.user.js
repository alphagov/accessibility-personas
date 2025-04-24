// ==UserScript==
// @name         Persona Chris
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.1
// @license      MIT
// @author       Crown Copyright (Government Digital Service)
// @description  Chris, a user with rheumatoid arthritis - the pointer is removed to make it harder to use the mouse or touchpad, colours are removed to simulate some form of colour vision deficiency, could also be used with a voice control tool
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

/**
 * Remove the cursor to make it harder to use the mouse or touchpad
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

GM_addStyle('* { cursor: none !important; pointer-events: none !important; }');


/**
 * Remove colours and make everything monochrome to simulate some form of colour vision deficiency
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

GM_addStyle('html { filter: grayscale(1) !important; }');
