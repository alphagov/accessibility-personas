// ==UserScript==
// @name         Persona Saleem
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      MIT
// @author       Chazona Baum and Crown Copyright (Government Digital Service)
// @description  Saleem, a profoundly deaf user - everything on the page is translated into Pig Latin to simulate English as a second language
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

/**
 * Display a reminder
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */

const css = `
  html::before {
    content: "Remember to turn off your sound";
    display: block;
    padding: 2px 0 4px;
    background-color: #eee;
    color: #333;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
}
`

GM_addStyle(css);


/**
 * Translate to Pig Latin
 * @author Chazona Baum [https://codepen.io/chznbaum/pen/GNNwJZ]
 * @author Crown Copyright (Government Digital Service)
 * @license MIT
 */


(function () {
  'use strict';

  function translateWord(str) {
    const wordArray = str.split('');
    const vowels = 'AaEeIiOoUu';
    let consonant;

    for (let i = 0; i < wordArray.length; i++) {
      const wordStartsWithVowel = vowels.includes(wordArray[0]);
      const wordStartsWithVowelOrY = wordStartsWithVowel || 'Yy'.includes(wordArray[0]);

      if (wordStartsWithVowel) {
        str = wordArray.join('');
        if (i === 0) {
          str = str + 'way';
        } else {
          str = str + 'ay';
        }
        return str;
      } else if (i !== 0 && wordStartsWithVowelOrY) {
        str = wordArray.join('');
        str = str + 'ay';
        return str;
      } else {
        consonant = wordArray.shift();
        wordArray.push(consonant);
      }
    }
    return str;
  }

  function translatePhrase(str) {
    const originalString = str;
    const originalArray = originalString.split(' ');
    const translatedArray = originalArray.map(function (word) {
      word = translateWord(word);

      for (let i = 0; i < word.length; i++) {
        if (!word[i].match(/[a-z]/i) && (i < word.length)) {
          const punctuation = word[i];
          const punctuatedWordArray = word.split('');
          punctuatedWordArray.splice(i, 1);
          if (i === 0) {
            word = punctuation + punctuatedWordArray.join('');
          } else if (i !== 0) {
            word = punctuatedWordArray.join('') + punctuation;
          }
        }

        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
          word = word.toLowerCase();
          const firstLetter = word.slice(0, 1);
          const capLetter = firstLetter.toUpperCase();
          word = word.replace(firstLetter, capLetter);
        }
      }
      return word;
    });
    return translatedArray.join(' ');
  }

  function translatePage() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    while (walker.nextNode()) {
      const elem = walker.currentNode.parentElement.nodeName;
      if (walker.currentNode.nodeValue.trim() && elem !== 'SCRIPT' && elem !== 'STYLE') {
        walker.currentNode.nodeValue = translatePhrase(walker.currentNode.nodeValue);
      }
    }
  }

  translatePage();

})();
