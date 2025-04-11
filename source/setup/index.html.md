---
title: Setting up personas
layout: layout
---

# Setting up personas

Here are instructions on how to set up the personas.

They use the following assistive technology and simulations:

| Persona  | Use their assistive technology                                 | Simulate their condition                  |
| -------- | -------------------------------------------------------------- | ----------------------------------------- |
| Claudia  | Magnified screen, high contrast, highlighted pointer and focus | (none)                                    |
| Ashleigh | Screen reader (not provided!)                                  | Blurred vision                            |
| Ron      | (none)                                                         | Mildly blurred vision, wobbly pointer     |
| Chris    | Voice control (optional)                                       | Disabled mouse or trackpad, grey colours  |
| Pawel    | Soothing colours                                               | Distracting sounds, images and animations |
| Simone   | Tinted background, more readable font, screen ruler            | Scrambled letters                         |
| Saleem   | (none)                                                         | Translated to Pig Latin                   |


## Step 1: Install a userscript manager

The personas work with so-called 'userscripts'. You need to install a userscript manager as a browser extension so you can use them. One such extension is [Tampermonkey](https://www.tampermonkey.net/), which is available for all major browsers and operating systems. But there are [other userscript managers](https://alternativeto.net/software/tampermonkey/) you might be able to use instead.

To install Tampermonkey:

1. select your browser on [Tampermonkey's website](https://www.tampermonkey.net/)
2. follow the link under 'Download' that leads to your browser's add-on page
3. click the main button to install the extension
4. open chrome://extensions/ and enable 'Developer mode'
5. if you use these scripts on multiple devices or profiles using Chromebook or browser profiles, follow the [instructions to allow script syncing](https://tampermonkey.net/faq.php?ext=dhdg#Q105)


## Step 2: Install persona userscripts

To install a persona userscript with Tampermonkey:

1. open the relevant userscript in the browser (see links for different personas in the table below)
2. when Tampermonkey opens, select the "Install" button

| Script                                                          | Additional setup                |
| --------------------------------------------------------------- | ------------------------------- |
| [Persona-Claudia.user.js](raw_assets/Persona-Claudia.user.js)   | (none)                          |
| [Persona-Ashleigh.user.js](raw_assets/Persona-Ashleigh.user.js) | Use a screen reader             |
| [Persona-Ron.user.js](raw_assets/Persona-Ron.user.js)           | (none)                          |
| [Persona-Chris.user.js](raw_assets/Persona-Chris.user.js)       | Optionally, use voice control   |
| [Persona-Pawel.user.js](raw_assets/Persona-Pawel.user.js)       | (none)                          |
| [Persona-Simone.user.js](raw_assets/Persona-Simone.user.js)     | Optionally, use select to speak |
| [Persona-Saleem.user.js](raw_assets/Persona-Saleem.user.js)     | Turn sound off               |


## Step 3: Additional setup

### Use a screen reader for Ashleigh

Ashleigh's userstyle doesn't come with her relevant assistive technology, a screen reader, and is not usable without it.
That means you have to use your own system's screen reader.
For example, on Windows use 'Narrator' or 'NVDA', on macOS use 'VoiceOver' and on ChromeOS use 'ChromeVox'.

Familiarise yourself with the basics of how your screen reader works before you use Ashleigh's persona.
To help with that see these [screen reader shortcuts](https://dequeuniversity.com/screenreaders/).


### Turn sound off for Saleem

Before using Saleem's persona remember to turn the sound off.


## Additional optional setup

Chris's userstyle doesn't come with his relevant assistive technology, a voice control tool, either.
Although using it is optional for Chris, so you can omit this step.
Examples of voice control tools are 'Windows Speech Recognition' on Windows and 'Voice Control' on macOS.

Simone would sometimes use a Select-to-Speak feature.
But as that makes less sense while the letters are scrambled, using your own system's Select-to-Speak feature is optional.


## Setting up personas on Chromebooks

Previous iterations of the persona setup were done on Chromebooks. This can still be done using the userscripts above instead. But if you plan on providing physical devices with easy to switch profiles, follow the following instructions as well.

If you'd like to use personas as different Chromebook or Chrome browser profiles, you need to create a Google account for each persona first. Be aware that setting up more than one account can be challenging.

When you follow the instructions below to set up a profile you only need to do each action once, unless it explicitly states to do it once per device.


### Change settings for each persona

Remove everything from the shelf/dock except Chrome. This helps people focus on the only app the persona should be using.

Select the following options from the system menu. Go to:

* Settings > Advanced > Accessibility > Always show accessibility options in the system menu - this makes it easier to access the accessibility settings
* Settings > Device > Power > When idle > Keep display on (once per device) - this makes sense if you put the Chromebooks on display for lots of people to use so you do not need to login again and share any passwords
* Settings > Device > Power > Sleep when lid is closed > off (once per device) - this makes sense if you put the Chromebooks on display as people tend to close the lid and they would need to login again
* Settings > People > Manage other people > Restrict sign-in to the following users... (once per device, can only be done by the owner account once every profile has logged in) - this restricts people adding their own profiles if the Chromebook is on display
* Settings > People > Sync and Google services > Manage sync > untick 'Sync everything' first and then 'History', 'Open Tabs', 'Password', 'Addresses, phone numbers and more', 'Payment methods and addresses using Google Play' - this makes sure no-one accidentally shares their details when the persona is shared on multiple devices
* Settings > Auto-fill > Passwords > untick 'Offer to save passwords' and 'Auto Sign-in' - this makes it less likely that people unintentionally share their passwords, which is especially useful when the devices are on display
* Settings > Auto-fill > Payment methods > untick 'Save and fill payment methods'
* Settings > Auto-fill > Addresses and more > untick 'Save and fill addresses'
* Settings > enable Appearance: Show Home button > Enter custom web address: https://alphagov.github.io/accessibility-personas/[persona]/ - this makes it easier to go back to each persona's page
* Settings > On start-up > Open a specific page or set of pages > Add a new page > https://alphagov.github.io/accessibility-personas/[persona]/ (Note that the settings are retained, but the pages only open during system start-up.) - this makes sure the persona's page is already showing whenever the Chromebook gets restarted


### Further changes to Claudia's profile

If you are using a Chromebook you don't need to install the userscript but can instead use ChromeOS's own features. To set up the assistive technology used by Claudia go to the system menu and select:

* Accessibility > High contrast mode
* Accessibility > Full-screen magnifier
* Accessibility > Settings > Manage accessibility features > Full-screen zoom level: 4x (once per device)
* Accessibility > Large mouse cursor
* Accessibility > Highlight text caret
* Accessibility > Highlight mouse cursor
* Accessibility > Highlight object with keyboard focus
