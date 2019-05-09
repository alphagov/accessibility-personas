---
title: Setting up personas on Chromebooks
parent: /setup/index.html
layout: layout
---

Setting up personas on Chromebooks
==================================

When you’re setting up a profile you only do each action once, unless it explicitly states to do it once per device.


Change settings for all personas
--------------------------------

Remove everything from the shelf/dock except Chrome.

Select the following options from the system menu. Go to:

* Settings > Advanced > Accessibility > Always show accessibility options in the system menu
* Settings > Device > Power > When idle > Keep display on (once per device)
* Settings > Device > Power > Sleep when lid is closed > off (once per device)
* Settings > People > Manage other people > Restrict sign-in to the following users... (once per device, can only be done by the owner account once every profile has logged in)
* Settings > enable Appearance: Show Home button > Enter custom web address: https://alphagov.github.io/accessibility-personas/[persona]/
* Settings > On start-up > Open a specific page or set of pages > Add a new page > https://alphagov.github.io/accessibility-personas/[persona]/ (Note that the settings are retained, but the pages only open during system start-up.)





Claudia
-------

### Simulate Claudia's condition

There is no technical simulation for this persona, but you can use low tech solutions such as simulation glasses.

### Use Claudia's assistive technology

To set up the assistive technology used by Claudia go to the system menu and select:

* Accessibility > High contrast mode
* Accessibility > Full-screen magnifier
* Accessibility > Settings > Manage accessibility features > Full-screen zoom level: 4x (once per device)
* Accessibility > Large mouse cursor
* Accessibility > Highlight text caret
* Accessibility > Highlight mouse cursor
* Accessibility > Highlight object with keyboard focus

### Information and status

* [Information about Claudia](../claudia/)
* Status: Tested and iterated multiple times




Ashleigh
--------

### Simulate Ashleigh's condition

To set up the simulation for Ashleigh's condition:

* install the extension [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open [heavy-blur.user.css](raw_assets/heavy-blur.user.css) in the browser (once per device)
* when Stylus opens, select the "Install style" button (once per device)

### Use Ashleigh's assistive technology

To set up the assistive technology used by Claudia go to the system menu and select:

* Accessibility > ChromeVox (once per device)

### Information and status

* [Information about Ashleigh](../ashleigh/)
* Status: Tested and iterated once




Ron
---

### Simulate Ron's condition

To set up the simulation for Ron's condition:

* install the extension [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open [light-blur.user.css](raw_assets/light-blur.user.css) in the browser (once per device)
* when Stylus opens, select the "Install style" button (once per device)
* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [wobbly-mouse.user.js](raw_assets/wobbly-mouse.user.js) in the browser
* when Tampermonkey opens, select on the "Install" button

### Use Ron's assistive technology

None, Ron doesn't use any assistive technology

### Information and status

* [Information about Ron](../ron/)
* Status: Tested and iterated multiple times





Chris
-----

### Simulate Chris' condition

To set up the simulation for Chris' condition:

* install the extension [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open [remove-cursor.user.css](raw_assets/remove-cursor.user.css) in the browser (once per device)
* when Stylus opens, select the "Install style" button (once per device)

### Use Chris' assistive technology

To set up the assistive technology used by Chris:

* install the extension [Handsfree for Web](https://chrome.google.com/webstore/detail/handsfree-for-web-voice-c/ldfboinpfdahkgnljbkohgimhimmafip) (give permissions once per device)
* when a request to use your microphone pops up, select the "Allow" button (once per device)

Handsfree for Web settings:

* Stop listening after 3 minutes of silence
* Language: English (United Kingdom)

### Information and status

* [Information about Chris](../chris/)
* Status: Tested and iterated once




Pawel
-----

### Simulate Pawel's condition

To set up the simulation for Pawel's condition:

* install the extension [Chrome Sound Effects](https://chrome.google.com/webstore/detail/chrome-sound-effects/oekengelpdnkfopdkkphkmaacfanbnla)
* nstall extension: [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open [distractions.user.css](raw_assets/distractions.user.css) in the browser (once per device)
* when Stylus opens, select the "Install style" button (once per device)
* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [distractions.user.js](raw_assets/distractions.user.js) in the browser
* when Tampermonkey opens, select the "Install" button

### Use Pawel's assistive technology

To set up the assistive technology used by Pawel:

* install the extension [Midnight Lizard](https://chrome.google.com/webstore/detail/midnight-lizard/pbnndmlekkboofhnbonilimejonapojg) (enable extension and give permissions once per device)

### Information and status

* [Information about Pawel](../pawel/)
* Status: Tested and iterated multiple times




Simone
------

### Simulate Simone's condition

To set up the simulation for Simone's condition:

* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [scramble-letters.user.js](raw_assets/scramble-letters.user.js) in the browser
* when Tampermonkey opens, select the "Install" button

### Use Simone's assistive technology

To set up the assistive technology used by Simone:

* install the extension [OpenDyslexic Font for Chrome](https://chrome.google.com/webstore/detail/opendyslexic-font-for-chr/cdnapgfjopgaggbmfgbiinmmbdcglnam)
* install the extension [nOverlay](https://chrome.google.com/webstore/detail/noverlay/clhfmmanmdkmblpljegdibilonemohdo) (yellow)
* go to the system menu and select: Accessibility > Select-to-Speak (this shouldn't be used while the simulation is running)

### Information and status

* [Information about Simone](../simone/)
* Status: Tested and iterated once




Saleem
------

### Simulate Saleem's condition

To set up the simulation for Saleem's condition:

* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [translate-to-piglatin.user.js](raw_assets/translate-to-piglatin.user.js) in the browser
* when Tampermonkey opens, select the "Install" button

### Use Saleem's assistive technology

None

### Information and status

* [Information about Saleem](../saleem/)
* Status: Tested and iterated once

