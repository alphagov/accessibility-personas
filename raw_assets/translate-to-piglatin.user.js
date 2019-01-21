// ==UserScript==
// @name         Translate to Pig Latin
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0
// @license      MIT
// @author       Chazona Baum [https://codepen.io/chznbaum/pen/GNNwJZ] and Crown Copyright (Government Digital Service)
// @description  Translate everything on the page into Pig Latin to simulate English as a second language
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        none
// @nocompat     Chrome
// ==/UserScript==

(function() {
  'use strict';

  function translateWord(str) {
    var wordArray = str.split('');
    var vowels = 'AaEeIiOoUu';
    var consonant;

    for (var i = 0; i < wordArray.length; i++) {
      var wordStartsWithVowel = vowels.includes(wordArray[0]);
      var wordStartsWithVowelOrY = wordStartsWithVowel || 'Yy'.includes(wordArray[0]);

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
    var originalString = str;
    var originalArray = originalString.split(' ');
    var translatedArray = originalArray.map(function(word) {
      word = translateWord(word);

      for (var i = 0; i < word.length; i++) {
        if (!word[i].match(/[a-z]/i) && (i < word.length)) {
          var punctuation = word[i];
          var punctuatedWordArray = word.split('');
          var removedPunctuation = punctuatedWordArray.splice(i, 1);
          if (i === 0) {
            word = punctuation + punctuatedWordArray.join('');
          } else if (i !== 0) {
            word = punctuatedWordArray.join('') + punctuation;
          }
        }

        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
          word = word.toLowerCase();
          var firstLetter = word.slice(0, 1);
          var capLetter = firstLetter.toUpperCase();
          word = word.replace(firstLetter, capLetter);
        }
      }
      return word;
    });
    return translatedArray.join(' ');
  }

  function translatePage() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) {
        walker.currentNode.nodeValue = translatePhrase(walker.currentNode.nodeValue);
      }
    }
  }

  translatePage();

})();
