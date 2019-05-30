---
title: Setting up personas on Chromebooks
parent: /setup/index.html
layout: layout
---

Setting up personas on Chromebooks
==================================

Everything needs to be done only once when setting up the profile, unless it's explicitly stated to do it once per device.


All personas
------------

* Settings > Advanced > Accessibility > Always show accessibility options in the system menu
* Settings > Device > Power > When idle > Keep display on (once per device)
* Settings > Device > Power > Sleep when lid is closed > off (once per device)
* Settings > People > Manage other people > Restrict sign-in to the following users... (once per device, can only be done by owner, i.e. first user to ever log in, and when every profile has logged in at least once)
* Settings > enable Appearance: Show Home button > Enter custom web address: https://alphagov.github.io/accessibility-personas/[persona]/
* Settings > On start-up > Open a specific page or set of pages > Add a new page > https://alphagov.github.io/accessibility-personas/[persona]/ [settings are retained but pages only open at start-up of the laptop, not when just starting the browser]
* Unpin everything from shelf except Chrome





Claudia
-------

* [Info and training](../claudia/)
* Status: Tested and iterated multiple times

### Simulation

None (cannot be done realistically, would be made worse by zoom, but low tech solutions like simulation specs work)

### Tools

Accessibility >

* High contrast mode
* Full-screen magnifier
* Settings > Manage accessibility features > Full-screen zoom level: 4x (once per device)
* Large mouse cursor
* Highlight text caret
* Highlight mouse cursor
* Highlight object with keyboard focus





Ashleigh
--------

* [Info and training](../ashleigh/)
* Status: Tested and iterated once

### Simulation

Install extension: [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

Open [heavy-blur.user.css](raw_assets/heavy-blur.user.css) in the browser; when Stylus opens, click the "Install style" button (once per device)

### Tools

Accessibility > ChromeVox (once per device)





Ron
---

* [Info and training](../ron/)
* Status: Tested and iterated multiple times

### Simulation

Install extension: [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

Open [light-blur.user.css](raw_assets/light-blur.user.css) in the browser; when Stylus opens, click the "Install style" button (once per device)

Install extension: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)

Open [wobbly-mouse.user.js](raw_assets/wobbly-mouse.user.js) in the browser; when Tampermonkey opens, click on the "Install" button

### Tools

None





Chris
-----

* [Info and training](../chris/)
* Status: Not yet tested and iterated

### Simulation

Install extension: [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

Open [remove-cursor.user.css](raw_assets/remove-cursor.user.css) in the browser; when Stylus opens, click the "Install style" button (once per device)

### Tools

Install extension: [Handsfree for Web](https://chrome.google.com/webstore/detail/handsfree-for-web-voice-c/ldfboinpfdahkgnljbkohgimhimmafip) (give permissions once per device)

When request to use your microphone pops up, click "Allow" button (once per device)

Handsfree for Web settings:

* Stop listening after 3 minutes of silence
* Language: English (United Kingdom)





Pawel
-----

* [Info and training](../pawel/)
* Status: Tested and iterated once

### Simulation

Install extension: [Chrome Sound Effects](https://chrome.google.com/webstore/detail/chrome-sound-effects/oekengelpdnkfopdkkphkmaacfanbnla)

Install extension: [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

Open [distractions.user.css](raw_assets/distractions.user.css) in the browser; when Stylus opens, click the "Install style" button (once per device)

Install extension: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)

Open [distractions.user.js](raw_assets/distractions.user.js) in the browser; when Tampermonkey opens, click on the "Install" button

### Tools

Install extension: [Midnight Lizard](https://chrome.google.com/webstore/detail/midnight-lizard/pbnndmlekkboofhnbonilimejonapojg) (enable extension and give permissions once per device)





Simone
------

* [Info and training](../simone/)
* Status: Not yet tested and iterated

### Simulation

Install extension: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)

Open [scramble-letters.user.js](raw_assets/scramble-letters.user.js) in the browser; when Tampermonkey opens, click on the "Install" button

### Tools

Install extensions:

* [OpenDyslexic Font for Chrome](https://chrome.google.com/webstore/detail/opendyslexic-font-for-chr/cdnapgfjopgaggbmfgbiinmmbdcglnam)
* [nOverlay](https://chrome.google.com/webstore/detail/noverlay/clhfmmanmdkmblpljegdibilonemohdo) (yellow)

Accessibility > Select-to-Speak (shouldn't be used while simulation is running)





Saleem
------

* [Info and training](../saleem/)
* Status: Not yet tested and iterated

### Simulation

Install extension: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)

Open [translate-to-piglatin.user.js](raw_assets/translate-to-piglatin.user.js) in the browser; when Tampermonkey opens, click on the "Install" button

### Tools

None
