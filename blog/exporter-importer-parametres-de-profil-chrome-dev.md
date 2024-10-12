---
title: Exporter et importer les paramètres de profil Chrome
date: 2024-09-27T09:49:00
description: J'utilise plusieurs profils dans mon mon navigateur basé sur Chromium. Voici comment je peux exporter des paramètre de l’un vers l’autre
tags:
  - Productivité
  - Chrome
stub: false
draft: false
---

chrome://version/

Trouver l'emplacement du profil : `Profile Path`.


ex. 
```text
# Profil duquel je veux exporter des paramètres
/Users/xxxxx/Library/Application Support/BraveSoftware/Brave-Browser/Profile 12

# Profil vers lequel je veux importer des paramètres
/Users/xxxxx/Library/Application Support/BraveSoftware/Brave-Browser/Profile 7
```

Ouvrir le fichier de préférences : 

C'est un fichier `json` qui s'appelle `Preferences`

Il est formaté sur une seule ligne, ce qui peut le rendre difficile à lire.

Ici, je souhaite récupérer les paramètres d'appareils émulés dans les [outils de développeur Chromium](glossaire/outils-de-developpeur-chromium.md) pour simuler des appareils mobiles.

Fermer chrome sinon les changements seront écrasés

Ouvrir le fichier `Preferences`

Chercher et copier la propriété nommée `custom-emulated-device-list`

La propriété se trouve sous `devtools` > `preferences` > `custom-emulated-device-list`

```json
{
    "devtools": {
    "preferences": {
      "custom-emulated-device-list": "...",
    }
}
```


Coller cette propriété dans le fichier de configuration du profil cible

Le contenu de cette propriété ressemble à ceci : 
```text
"custom-emulated-device-list": "[{\"title\":\"Dinorose\",\"type\":\"unknown\",\"user-agent\":\"\",\"capabilities\":[\"mobile\",\"touch\"],\"screen\":{\"device-pixel-ratio\":0,\"vertical\":{\"width\":1326,\"height\":700},\"horizontal\":{\"width\":700,\"height\":1326}},\"modes\":[{\"title\":\"\",\"orientation\":\"vertical\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}},{\"title\":\"\",\"orientation\":\"horizontal\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}}],\"show-by-default\":true,\"dual-screen\":false,\"foldable-screen\":false,\"show\":\"Always\",\"user-agent-metadata\":{\"brands\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersionList\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersion\":\"\",\"platform\":\"\",\"platformVersion\":\"\",\"architecture\":\"\",\"model\":\"\",\"mobile\":true}},{\"title\":\"sm\",\"type\":\"unknown\",\"user-agent\":\"\",\"capabilities\":[\"mobile\",\"touch\"],\"screen\":{\"device-pixel-ratio\":0,\"vertical\":{\"width\":576,\"height\":700},\"horizontal\":{\"width\":700,\"height\":576}},\"modes\":[{\"title\":\"\",\"orientation\":\"vertical\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}},{\"title\":\"\",\"orientation\":\"horizontal\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}}],\"show-by-default\":true,\"dual-screen\":false,\"foldable-screen\":false,\"show\":\"Default\",\"user-agent-metadata\":{\"brands\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersionList\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersion\":\"\",\"platform\":\"\",\"platformVersion\":\"\",\"architecture\":\"\",\"model\":\"\",\"mobile\":true}},{\"title\":\"md\",\"type\":\"unknown\",\"user-agent\":\"\",\"capabilities\":[\"mobile\",\"touch\"],\"screen\":{\"device-pixel-ratio\":0,\"vertical\":{\"width\":768,\"height\":1000},\"horizontal\":{\"width\":1000,\"height\":768}},\"modes\":[{\"title\":\"\",\"orientation\":\"vertical\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}},{\"title\":\"\",\"orientation\":\"horizontal\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}}],\"show-by-default\":true,\"dual-screen\":false,\"foldable-screen\":false,\"show\":\"Default\",\"user-agent-metadata\":{\"brands\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersionList\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersion\":\"\",\"platform\":\"\",\"platformVersion\":\"\",\"architecture\":\"\",\"model\":\"\",\"mobile\":true}},{\"title\":\"lg\",\"type\":\"unknown\",\"user-agent\":\"\",\"capabilities\":[\"mobile\",\"touch\"],\"screen\":{\"device-pixel-ratio\":0,\"vertical\":{\"width\":992,\"height\":1000},\"horizontal\":{\"width\":1000,\"height\":992}},\"modes\":[{\"title\":\"\",\"orientation\":\"vertical\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}},{\"title\":\"\",\"orientation\":\"horizontal\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}}],\"show-by-default\":true,\"dual-screen\":false,\"foldable-screen\":false,\"show\":\"Always\",\"user-agent-metadata\":{\"brands\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersionList\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersion\":\"\",\"platform\":\"\",\"platformVersion\":\"\",\"architecture\":\"\",\"model\":\"\",\"mobile\":true}},{\"title\":\"xl\",\"type\":\"unknown\",\"user-agent\":\"\",\"capabilities\":[\"mobile\",\"touch\"],\"screen\":{\"device-pixel-ratio\":0,\"vertical\":{\"width\":1280,\"height\":1000},\"horizontal\":{\"width\":1000,\"height\":1280}},\"modes\":[{\"title\":\"\",\"orientation\":\"vertical\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}},{\"title\":\"\",\"orientation\":\"horizontal\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}}],\"show-by-default\":true,\"dual-screen\":false,\"foldable-screen\":false,\"show\":\"Default\",\"user-agent-metadata\":{\"brands\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersionList\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersion\":\"\",\"platform\":\"\",\"platformVersion\":\"\",\"architecture\":\"\",\"model\":\"\",\"mobile\":true}},{\"title\":\"xs\",\"type\":\"unknown\",\"user-agent\":\"\",\"capabilities\":[\"mobile\",\"touch\"],\"screen\":{\"device-pixel-ratio\":0,\"vertical\":{\"width\":320,\"height\":480},\"horizontal\":{\"width\":480,\"height\":320}},\"modes\":[{\"title\":\"\",\"orientation\":\"vertical\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}},{\"title\":\"\",\"orientation\":\"horizontal\",\"insets\":{\"left\":0,\"top\":0,\"right\":0,\"bottom\":0}}],\"show-by-default\":true,\"dual-screen\":false,\"foldable-screen\":false,\"show\":\"Default\",\"user-agent-metadata\":{\"brands\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersionList\":[{\"brand\":\"\",\"version\":\"\"}],\"fullVersion\":\"\",\"platform\":\"\",\"platformVersion\":\"\",\"architecture\":\"\",\"model\":\"\",\"mobile\":true}}]",
```

Ouvrir le navigateur à nouveau

Source : https://stackoverflow.com/a/70905335
