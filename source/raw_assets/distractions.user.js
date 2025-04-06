// ==UserScript==
// @name         Distractions
// @namespace    https://github.com/alphagov/accessibility-personas
// @version      1.0.1
// @license      ISC
// @author       Metamatrix AB [https://github.com/Metamatrix/web-disability-simulator] and Crown Copyright (Government Digital Service)
// @description  Clutter the screen with various distractions to simulate finding it hard to concentrate
// @homepageURL  https://alphagov.github.io/accessibility-personas/
// @include      *
// @grant        GM_addStyle
// @nocompat     Chrome
// ==/UserScript==

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
    }, 5000);

    setTimeout(() => {
        removeClass(textEl_0, textAnimation_0);
        addClass(textEl_1, textAnimation_1);
    }, 12000);

    setTimeout(() => {
        removeClass(textEl_1, textAnimation_1);
        addClass(textEl_2, textAnimation_2);
    }, 20000);

    setTimeout(() => {
        removeClass(textEl_2, textAnimation_2);
        addClass(textEl_3, textAnimation_3);
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
