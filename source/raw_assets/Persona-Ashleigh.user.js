// ==UserScript==
// @name         Persona Ashleigh
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      MIT
// @author       Crown Copyright (Government Digital Service)
// @description  Ashleigh, a severely sight impaired screenreader user - the screen is heavily blurred to simulate some form of blindness, must use a screen reader in addition to the script
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

/**
 * Blur the screen heavily
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

let css = `
  body {
    filter: blur(7px) contrast(70%);
  }
}
`

GM_addStyle(css);
