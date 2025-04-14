// ==UserScript==
// @name         Persona Simone
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      MIT
// @author       Crown Copyright (Government Digital Service), Victor Widell and Andrew Kennedy, Braille Institute of America
// @description  Simone, a dyslexic user - letters are scrambled within words to simulate some form of dyslexia, a tinted background, a special font and a ruler is used to help read better
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

/**
 * Change the font to a more readable font
 * @author Crown Copyright (Government Digital Service)
 * @author Braille Institute of America, Inc.
 * @license OFL (for the font)
 * @license MIT (for the code)
 */

const fontCss = `
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
  font-family: "Atkinson Hyperlegible", sans-serif !important;
}
`

GM_addStyle(fontCss);


/**
 * Add tint
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

const tintCss = `
body::before {
  content: "";
  display: block;
  position: fixed;
  background-color: rgba(255, 165, 0, 25%);
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  z-index: 9999999;
  pointer-events: none;
}
`

GM_addStyle(tintCss);


/**
 * Add ruler
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */


const rulerCss = `
#simone-ruler {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(102,102,102,0.5);
  pointer-events: none;
  width: 100%;
  height: 30px;
  margin-top:-20px;
  border: solid rgba(255,255,255,0.5);
  border-width: 5px 0;
  z-index: 9999999;
}
`

GM_addStyle(rulerCss);

let ruler = null;

function setStyle(element, style) {
  for (let s in style) {
    element.style[s] = style[s];
  }
}

function mousemoveHandler(e) {
  setStyle(ruler, {top: e.clientY + 'px'});
}


(function() {

  'use strict';

  ruler = document.createElement('div');
  ruler.setAttribute('id', 'simone-ruler');
  document.body.appendChild(ruler);

  document.addEventListener('mousemove', mousemoveHandler);

})();


/**
 * Scramble letters
 * @author Victor Widell and Andrew Kennedy [https://github.com/geon/geon.github.com/pull/3]
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

(function () {

  'use strict';

  // general-purpose tree walker
  // @source: https://gist.github.com/Sphinxxxx/ed372d176c5c2c1fd9ea1d8d6801989b
  // @author: Andreas Borgen and Gavin Kistner
  function walkNodeTree(root, options) {
    options = options || {};

    const inspect = options.inspect || (n => true),
          collect = options.collect || (n => true);
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ALL,
      {
        acceptNode: function(node) {
          if(!inspect(node)) { return NodeFilter.FILTER_REJECT; }
          if(!collect(node)) { return NodeFilter.FILTER_SKIP; }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = []; let n;
    while(n = walker.nextNode()) {
      options.callback && options.callback(n);
      nodes.push(n);
    }

    return nodes;
  }

  // create a list of text nodes to be messed up
  const textNodes = walkNodeTree(document.body, {
    inspect: n => !['STYLE', 'SCRIPT'].includes(n.nodeName),
    collect: n => (n.nodeType === Node.TEXT_NODE)
  });

  var iterateFunction = function () {
    for (var i = 0; i < textNodes.length; i++) {
      textNodes[i].nodeValue = messUpWords(textNodes[i].nodeValue);
    }
    window.requestAnimationFrame(iterateFunction);
  }

  // iterate over each text node and mess up their values
  window.requestAnimationFrame(iterateFunction);

  // parse words out of a string and mess them up
  function messUpWords(str) {
    let messedUpText = '';

    // iterate through each word and scramble it
    const re = /\w+/g;
    let word;
    while ((word = re.exec(str)) != null) {
      // include any special characters before the word
      messedUpText += str.slice(messedUpText.length, word.index);
      // scramble the word
      messedUpText += scrambleWord(word[0]);
    }
    // include any special characters after the word
    messedUpText += str.slice(messedUpText.length, str.length);

    return messedUpText;
  }

  // scramble the word, being sure to always keep the first and last letters
  // in-tact. this is important so the text can still be read.
  function scrambleWord(word) {
    let scrambledWord = '';

    // if it's a small word or ~randomness~, don't scramble it
    if (word.length < 3 || Math.random() > 1 / 10) {
      return word;
    }

    const a = getRandomInt(1, word.length - 1);
    const b = getRandomInt(a, word.length - 1);

    scrambledWord += word.slice(0, a);
    scrambledWord += word.slice(a, b).split('').reverse().join('');
    scrambledWord += word.slice(b, word.length);

    return scrambledWord;
  }

  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

})();
