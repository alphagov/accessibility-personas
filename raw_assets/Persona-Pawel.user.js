// ==UserScript==
// @name         Persona Pawel
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.0
// @license      mixed (MIT, ISC, CC BY-SA)
// @author       Crown Copyright (Government Digital Service), Metamatrix AB, Houshalter and benrwb
// @description  Pawel, an autistic user - has the screen cluttered with various distractions to simulate finding it hard to concentrate, uses soothing colours to reduce potential stress
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

GM_addStyle('html { filter: invert(1) hue-rotate(180deg) sepia(1) !important; } img, video, iframe, .wds-img-element.wds-img-animation-0::before { filter: invert(1) hue-rotate(180deg) !important; }');


/**
 * Beep (used within Distractions)
 * @author Houshalter and benrwb [https://stackoverflow.com/a/29641185]
 * @author Crown Copyright (Government Digital Service)
 * @license CC BY-SA
 */
//if you have another AudioContext class use that one, as some browsers have a limit
const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

//All arguments are optional:

//start of the tone in milliseconds. Default is 0
//duration of the tone in milliseconds. Default is 500
//frequency of the tone in hertz. default is 440
//volume of the tone. Default is 1, off is 0.
//type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
//callback to use on end of tone
function beep(start, duration, frequency, volume, type, callback) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (volume){gainNode.gain.value = volume;}
  if (frequency){oscillator.frequency.value = frequency;}
  if (type){oscillator.type = type;}
  if (callback){oscillator.onended = callback;}

  oscillator.start(audioCtx.currentTime + ((start || 0) / 1000));
  oscillator.stop(audioCtx.currentTime + ((start || 0) / 1000) + ((duration || 500) / 1000));
};


/**
 * Distractions
 * @author Metamatrix AB [https://github.com/Metamatrix/web-disability-simulator]
 * @author Crown Copyright (Government Digital Service)
 * @license ISC
 */

// styles
const css = `
/* "image" */

.wds-img-element {
  display: none !important;
  width: 500px !important;
  height: 300px !important;
  position: fixed !important;
  left: 0 !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  z-index: 10000 !important;
}

.wds-img-element.wds-img-animation-0 {
  display: block !important;
  animation: move 5s infinite !important;
}

.wds-img-element.wds-img-animation-0::before {
  content: "🍔" !important;
  font-size: 300px !important;
  margin-left: 200px !important;
}

@keyframes move {
  from {
    top: -300px;
    left: 0px;
  }
  to {
    top: 500px;
    left: 80%;
  }
}

/* text */

[class^="wds-text-element"] {
  display: none !important;
  position: fixed !important;
  z-index: 10000 !important;
  font-weight: bold !important;
  background-color: white !important;
  padding: 20px !important;
  width: auto !important;
  height: auto !important;
  animation-name: stretch !important;
  animation-duration: 1.5s !important;
}

.wds-text-element-0.wds-text-animation-0 {
  display: block !important;
  color: red !important;
  font-size: 80px !important;
  top: 20% !important;
  left: 40% !important;
}
.wds-text-element-1.wds-text-animation-1 {
  display: block !important;
  color: blue !important;
  font-size: 60px !important;
  top: 40% !important;
  left: 30% !important;
}
.wds-text-element-2.wds-text-animation-2 {
  display: block !important;
  color: green !important;
  font-size: 60px !important;
  top: 30% !important;
  left: 20% !important;
}
.wds-text-element-3.wds-text-animation-3 {
  display: block !important;
  color: purple !important;
  font-size: 50px !important;
  top: 50% !important;
  left: 20% !important;
}
.wds-text-element-4.wds-text-animation-4 {
  display: block !important;
  color: black !important;
  font-size: 50px !important;
  top: 20% !important;
  left: 10% !important;
}

/* animations */

[class^="wds-text-element"],
.wds-img-animation-1,
.wds-heading-animation {
  animation-timing-function: ease-out !important;
  animation-delay: 0s !important;
  animation-direction: alternate !important;
  animation-iteration-count: infinite !important;
  animation-fill-mode: none !important;
  animation-play-state: running !important;
}

.wds-img-animation-1 {
  animation-name: stretch !important;
  animation-duration: 2s !important;
}

@keyframes stretch {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.2);
  }
}

.wds-paragraph-animation {
  animation: flickerAnimation 1.2s infinite !important;
}

@keyframes flickerAnimation {
  0% {
    opacity:1;
  }
  50% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.wds-heading-animation {
  animation-name: smallPulse !important;
  animation-duration: 2s !important;
}

@keyframes smallPulse {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.1);
  }
}
`

//dom elements to apply animations on
const h2 = "h2";
const p = "p";
const img = "img";

//dom elements to be created
const imgEl_0 = ".wds-img-element";
const textEl_0 = ".wds-text-element-0";
const textEl_1 = ".wds-text-element-1";
const textEl_2 = ".wds-text-element-2";
const textEl_3 = ".wds-text-element-3";
const textEl_4 = ".wds-text-element-4";

//classes for css animations
const paragraphAnimation = "wds-paragraph-animation";
const headingAnimation = "wds-heading-animation";
const imgAnimation_0 = "wds-img-animation-0";
const imgAnimation_1 = "wds-img-animation-1";
const textAnimation_0 = "wds-text-animation-0";
const textAnimation_1 = "wds-text-animation-1";
const textAnimation_2 = "wds-text-animation-2";
const textAnimation_3 = "wds-text-animation-3";
const textAnimation_4 = "wds-text-animation-4";

(function() {

  'use strict';

  GM_addStyle(css);

  function createElement(element, classname, textNode) {
    const el = document.createElement(element);
    el.setAttribute('class', classname);
    document.body.appendChild(el);
    if(textNode){
      el.appendChild(document.createTextNode(textNode));
    }
  }

  createElement('div', 'wds-img-element');

  function createTextElements(text, index) {
    createElement('span', `wds-text-element-${index}`, text);
  }

  const texts = ['Did I eat lunch?',
    'I have to get back to work soon...',
    'The ventilation sounds a lot today. bzzzzzz',
    'Should I answer that text message?',
    'Must concentrate, must concentrate, must concentrate'];

  texts.forEach(createTextElements);


  function addClass(element, classname) {
    const el = document.querySelectorAll(element);

    for (let i = 0; i < el.length; i++) {
      el[i].classList.toggle(classname);
    }

  }

  function removeClass(element, classname) {
    const el = document.querySelectorAll(element);

    for (let i = 0; i < el.length; i++) {
      el[i].classList.remove(classname);
    }

  }

  //add and remove animation classes, then loop

  function loopAnimations(){

    setTimeout(() => {
      addClass(p, paragraphAnimation);
      addClass(imgEl_0, imgAnimation_0);
      addClass(img, imgAnimation_1);
      addClass(h2, headingAnimation);
    }, 500);

    setTimeout(() => {
      removeClass(imgEl_0, imgAnimation_0);
      addClass(textEl_0 , textAnimation_0);
      beep(0, 200, 523.3, 0.3, 'triangle');
      beep(200, 200, 587.3, 0.3, 'triangle');
      beep(400, 200, 554.4, 0.3, 'triangle');
      beep(600, 200, 659.3, 0.3, 'triangle');
      beep(800, 200, 622.3, 0.3, 'triangle');
      beep(1000, 200, 740.0, 0.3, 'triangle');
      beep(1200, 200, 698.5, 0.3, 'triangle');
      beep(1400, 200, 830.6, 0.3, 'triangle');
      beep(1600, 200, 784.0, 0.3, 'triangle');
      beep(1800, 200, 932.3, 0.3, 'triangle');
      beep(2000, 200, 880.0, 0.3, 'triangle');
      beep(2200, 200, 1047, 0.3, 'triangle');
      beep(2400, 200, 987.8, 0.3, 'triangle');
    }, 5000);

    setTimeout(() => {
      removeClass(textEl_0, textAnimation_0);
      addClass(textEl_1, textAnimation_1);
    }, 12000);

    setTimeout(() => {
      removeClass(textEl_1, textAnimation_1);
      addClass(textEl_2, textAnimation_2);
      beep(0, 5000, 220, 0.3, 'sawtooth');
    }, 20000);

    setTimeout(() => {
      removeClass(textEl_2, textAnimation_2);
      addClass(textEl_3, textAnimation_3);
      beep(0, 500, 440, 0.5, 'sine');
      beep(1000, 500, 440, 0.5, 'sine');
      beep(2000, 500, 440, 0.5, 'sine');
      beep(3000, 500, 440, 0.5, 'sine');
    }, 26000);

    setTimeout(() => {
      removeClass(textEl_3, textAnimation_3);
      addClass(textEl_4, textAnimation_4);
    }, 32000);

    setTimeout(() => {
      removeClass(textEl_4, textAnimation_4);
      removeClass(p, paragraphAnimation);
      removeClass(img, imgAnimation_1);
      removeClass(h2, headingAnimation);
      loopAnimations();
    }, 38000);

  }
  loopAnimations();

})();
