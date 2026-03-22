---
title: Attenuate keystrokes noise in OBS Studio
tags:
- Content-Streaming
- How-to
- OBS
date: 2021-12-03T23:00:00Z
cover_image: "/2021-12-04/clean-mechanical-keyboard_w500.jpg"
description: 'Let''s see a way to attenuate the keystrokes noise of a mechanical keyboard
  when streaming with OBS Studio. '

---
I have been streaming a few times lately. I am using a mechanical keyboard which is quite noisy.

Since I mostly do live coding streams I tend to type quite a lot. For now I use the microphone of my webcam. The problem is it catches a lots of ambient noise.

OBS studio allows to add filters to the sources we use.

* Open "Filters" dialog from a microphone source

![In OBS studio after right click on a microphone Source a contextual menu shows up. An arrow points to the 'Filters' option](/2021-12-04/obs64_2021-12-04_17-49-16_286.png "Opening filters for a microphone source")

* Add a "Noise Gate" filter

![The 'Filters' dialog is opened for the microphone source. The '+' button has been clicked. A contextual dialog is visible & the mouse is over the 'Noise Gate' choice.](/2021-12-04/obs64_2021-12-04_17-54-06_414.png "Add a 'Noise Gate' filter.")

* Select the newly created Noise Gate filter and position the following settings
  * Close Threshold : -54.00 dB
  * Open Threshold : -39.00 dB
  * Leave the other settings as defaults

![On the Filters dialog box. The audio filter 'Noise Gate' is selected. Close Threshold is set to -54.00 dB. Open Threshold is set to -39.00 dB.](/2021-12-04/obs64_2021-12-04_17-58-19_544.png "Configuration of the Noise Gate filter")

* Add a "Noise Suppression" filter

![The 'Filters' dialog is opened for the microphone source. The '+' button has been clicked. A contextual dialog is visible & the mouse is over the 'Noise Suppression' choice.](/2021-12-04/obs64_2021-12-04_18-01-07_878.png "Add a 'Noise Gate' filter.")

* Leave the defaults settings (it should be Method : RNNoise)

![The 'Filters' dialog is opened for the microphone source. The 'Noise Suppression' audio filter is selected. The 'Method' setting is set to 'RNNoise'](/2021-12-04/obs64_2021-12-04_18-01-29_414.png)

* Close

And voilà !

Now, the keystrokes should be attenuated when recording with the filtered microphone.
