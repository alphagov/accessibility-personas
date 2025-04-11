---
title: Setting up personas on Chromebooks
parent: /setup/index.html
layout: layout
---

Setting up personas on Chromebooks
==================================

You need to create a Google account for each persona first. Be aware that setting up more than one account can be challenging.

When you follow the instructions below to set up a profile you only need to do each action once, unless it explicitly states to do it once per device.


Change settings for all personas
--------------------------------

Remove everything from the shelf/dock except Chrome. This helps people focus on the only app the persona should be using.

Select the following options from the system menu. Go to:

* System settings > Accessibility > Show accessibility options in Quick Settings - this makes it easier to access the accessibility settings
* System settings > System preferences > Power > While inactive and plugged in > Keep display on (once per device) - this makes sense if you put the Chromebooks on display for lots of people to use so you do not need to login again and share any passwords
* System settings > System preferences > Power > Sleep when lid is closed > untick (once per device) - this makes sense if you put the Chromebooks on display as people tend to close the lid and they would need to login again
* System settings > Privacy and security > Lock screen and sign-in > Lock when sleeping or lid is closed > off (once per device) - in addition to the above if you put the Chromebooks on display as people tend to close the lid and they would need to login again
* System settings > Privacy and security > Manage other people > Limit who can sign in > Add use (once per device, can only be done by the owner account once every profile has logged in) - this restricts people adding their own profiles if the Chromebook is on display
* Browser settings > You and Google > Sync and Google services > Manage what you sync > Customise sync > untick 'History', 'Open tabs', 'Saved tab groups', 'Passwords and passkeys', 'Addresses and more', 'Payment methods, offers and addresses using Google Play' - this makes sure no-one accidentally shares their details when the persona is shared on multiple devices
* Browser settings > Autofill and passwords > Google Password Manager > Settings > Offer to save passwords > untick - this makes it less likely that people unintentionally share their passwords, which is especially useful when the devices are on display
* Browser settings > Autofill and passwords > Payment methods > Safe and fill payment methods > untick
* Browser settings > Autofill and passwords > Addresses and more > Safe and fill addresses > untick
* Browser settings > Appearance > Show Home button > tick > Enter custom web address: https://alphagov.github.io/accessibility-personas/[persona]/ - this makes it easier to go back to each persona's page
* Browser settings > On startup > Open a specific page or set of pages > Add a new page > https://alphagov.github.io/accessibility-personas/[persona]/ (Note that the settings are retained, but the pages only open during system start-up.) - this makes sure the persona's page is already showing whenever the Chromebook gets restarted





Claudia
-------

### Simulate Claudia's condition

There is no technical simulation for this persona, but you can use low tech solutions such as simulation glasses.

### Use Claudia's assistive technology

To set up the assistive technology used by Claudia go to the system menu and select:

* Accessibility > Colour inversion
* Accessibility > Full-screen magnifier
* Accessibility > Settings > Display and magnification > Zoom level: 4x (once per device)
* Accessibility > Large mouse cursor
* Accessibility > Highlight text caret
* Accessibility > Highlight mouse cursor
* Accessibility > Highlight object with keyboard focus

This will magnify the screen to 400%, adjust the colours and highlight interactive elements.

### Information and status for Claudia

* [Information about Claudia](../claudia/)
* Status: Tested and iterated multiple times




Ashleigh
--------

### Simulate Ashleigh's condition

To set up the simulation for Ashleigh's condition:

* install the extension [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open its options, select a cloud provider under "Sync to cloud" and connect to it (once per device)
* open [heavy-blur.user.css](raw_assets/heavy-blur.user.css) in the browser
* when Stylus opens, select the "Install style" button

This will cause heavy blurring in the browser.

### Use Ashleigh's assistive technology

To set up the assistive technology used by Ashleigh go to the system menu and select:

* Accessibility > ChromeVox (once per device)

This will start a screen reader.

### Information and status for Ashleigh

* [Information about Ashleigh](../ashleigh/)
* Status: Tested and iterated once




Ron
---

### Simulate Ron's condition

To set up the simulation for Ron's condition:

* install the extension [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open its options, select a cloud provider under "Sync to cloud" and connect to it (once per device)
* open [light-blur.user.css](raw_assets/light-blur.user.css) in the browser
* when Stylus opens, select the "Install style" button
* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* open chrome://extensions/ and enable 'Developer mode'
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [wobbly-mouse.user.js](raw_assets/wobbly-mouse.user.js) in the browser
* when Tampermonkey opens, select on the "Install" button

This will cause light blurring in the browser and the mouse pointer to wobble.

### Use Ron's assistive technology

None, Ron does not use any assistive technology

### Information and status for Ron

* [Information about Ron](../ron/)
* Status: Tested and iterated multiple times





Chris
-----

### Simulate Chris' condition

To set up the simulation for Chris' condition:

* install the extension [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
* open its options, select a cloud provider under "Sync to cloud" and connect to it (once per device)
* open [remove-cursor.user.css](raw_assets/remove-cursor.user.css) in the browser
* open [monochrome.user.css](raw_assets/monochrome.user.css) in the browser
* when Stylus opens, select the "Install style" button

This will cause the mouse pointer to disappear in the browser and colours to turn grey.

### Use Chris' assistive technology

To set up the assistive technology used by Chris:

* install the extension [Handsfree for Web](https://chrome.google.com/webstore/detail/handsfree-for-web-voice-c/ldfboinpfdahkgnljbkohgimhimmafip) (give permissions once per device)
* when a request to use your microphone pops up, select the "Allow" button (once per device)

Handsfree for Web settings:

* Stop listening after 3 minutes of silence
* Language: English (United Kingdom)

This will start a voice control tool.

### Information and status for Chris

* [Information about Chris](../chris/)
* Status: Tested and iterated once




Pawel
-----

### Simulate Pawel's condition

To set up the simulation for Pawel's condition:

* install the extension [Chrome Sound Effects](https://chrome.google.com/webstore/detail/chrome-sound-effects/oekengelpdnkfopdkkphkmaacfanbnla)
* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* open chrome://extensions/ and enable 'Developer mode'
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [distractions.user.js](raw_assets/distractions.user.js) in the browser
* when Tampermonkey opens, select the "Install" button

This will create distracting animations, images and sounds.

### Use Pawel's assistive technology

To set up the assistive technology used by Pawel:

* install the extension [Midnight Lizard](https://chrome.google.com/webstore/detail/midnight-lizard/pbnndmlekkboofhnbonilimejonapojg) (enable extension and give permissions once per device)

This will adjust the colours in the browser.

### Information and status for Pawel

* [Information about Pawel](../pawel/)
* Status: Tested and iterated multiple times




Simone
------

### Simulate Simone's condition

To set up the simulation for Simone's condition:

* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* open chrome://extensions/ and enable 'Developer mode'
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [scramble-letters.user.js](raw_assets/scramble-letters.user.js) in the browser
* when Tampermonkey opens, select the "Install" button

This will cause the letters in the browser to scramble.

### Use Simone's assistive technology

To set up the assistive technology used by Simone:

* install the extension [Dyslexia Friendly](https://chrome.google.com/webstore/detail/dyslexia-friendly/miepjgfkkommhllbbjaedffcpkncboeo)
* install the extension [nOverlay](https://chrome.google.com/webstore/detail/noverlay/clhfmmanmdkmblpljegdibilonemohdo) (yellow)
* go to the system menu and select: Accessibility > Select-to-Speak (this should not be used while the simulation is running)

This will give web pages a slight yellow tint, change the font and start a text to speech tool.

### Information and status for Simone

* [Information about Simone](../simone/)
* Status: Tested and iterated once




Saleem
------

### Simulate Saleem's condition

To set up the simulation for Saleem's condition:

* install the extension [Clever Mute](https://chrome.google.com/webstore/detail/clever-mute/eadinjjkfelcokdlmoechclnmmmjnpdh)
* install the extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* open chrome://extensions/ and enable 'Developer mode'
* follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105) (once per device)
* open [translate-to-piglatin.user.js](raw_assets/translate-to-piglatin.user.js) in the browser
* when Tampermonkey opens, select the "Install" button

This will translate every text in the browser to Pig Latin.

### Use Saleem's assistive technology

None

### Information and status for Saleem

* [Information about Saleem](../saleem/)
* Status: Tested and iterated once
