---
title: Tentative de contribution à Fossify SMS
date: 2024-09-27T20:14:00
description: "Ce soir c'est HackSxb ! Et j'ai envie de bidouiller ! Objectif : ajouter une fonctionnalité de copie de plusieurs sms en même temps dans l'application Fossify Messages sur Android."
tags:
  - Logiciel-libre
  - Open-source
  - Android
  - Bidouillage
  - Onboarding
---

[HackSxb](https://www.hacksxb.com/), c’est la communauté de développeurs et makers à Strasbourg portée par [Alsace Digitale](https://www.alsacedigitale.org/). 

Mais c'est quoi [Fossify Messages](https://github.com/FossifyOrg/Messages)?

C'est un application android (anciennement la suite d'applications "Simple").
C'est un [logiciel libre](/glossaire/logiciel-libre).

https://github.com/FossifyOrg

## Installation de Android Studio

Je suis toutes les configurations par défaut.

## Récupérer le code source

https://github.com/FossifyOrg/Messages
Je vais créer un [fork](/glossaire/fork) pour pouvoir faire mes modifications tranquillement dans mon coin.

```shell
git clone git@github.com:marc-bouvier/fork-fossify-messages.git
```

## Regardons un peu comment c'est fait

Le dépôt contient un [guide de contribution](https://github.com/marc-bouvier/fork-fossify-messages/blob/master/CONTRIBUTING.md).
Il renvoie vers [une FAQ](https://github.com/FossifyOrg/General-Discussion#how-do-i-suggest-an-improvement-ask-a-question-or-report-an-issue) qui explique comment suggérer des améliorations et des style de code à suivre.
Voici quelques caractéristiques que j'ai notées sur le projet :

|                             |               |
|-----------------------------|---------------|
| Langage de programmation    | Kotlin 1.9.21 |
| Build                       | Gradle 8.2.1  |
| JDK                         | 17            |
| License                     | GPL 3.0       |
| Optimisation et Obfuscation | Proguard      |
| Build & Release             | Fastlane      |
| Style de code basique       | .editorconfig |

## Ouvrir le projet dans Android Studio

Quand j'ouvre le projet sur Android studio, Gradle synchronise le projet.
Il va principalement s'occuper de charger les dépendances.

Je pense aussi que Android Studio va installer automatiquement Kotlin en version appropriée.

Android Studio me suggère de mettre à jour AGP (Android Gradle plugin).

Je vais attendre que le projet soit indexé avant de faire quoi que ce soit.

Je ne vais pas mettre à jour AGP car il ne s'agit pas de mon projet.
La mise à jour semble vouloir augmenter la version de Gradle au passage.

## Arborescence du projet

```text
.  
├── app  
│   ├── schemas  
│   │   └── org.fossify.messages.databases.MessagesDatabase  
│   └── src  
│       ├── debug  
│       │   └── res  
│       │       └── values  
│       ├── foss  
│       │   └── res  
│       │       └── values  
│       ├── main  
│       │   ├── kotlin  
│       │   │   └── org  
│       │   │       └── fossify  
│       │   │           └── messages  
│       │   │               ├── activities  
│       │   │               ├── adapters  
│       │   │               ├── databases  
│       │   │               ├── dialogs  
│       │   │               ├── extensions  
│       │   │               │   └── gson  
│       │   │               ├── helpers  
│       │   │               ├── interfaces  
│       │   │               ├── messaging  
│       │   │               ├── models  
│       │   │               ├── receivers  
│       │   │               └── services  
│       │   └── res  
│       │       ├── drawable  
│       │       ├── drawable-hdpi  
│       │       ├── drawable-mdpi  
│       │       ├── drawable-xhdpi  
│       │       ├── drawable-xxhdpi  
│       │       ├── drawable-xxxhdpi  
│       │       ├── layout  
│       │       ├── menu  
│       │       ├── mipmap-anydpi-v26  
│       │       ├── mipmap-hdpi  
│       │       ├── mipmap-mdpi  
│       │       ├── mipmap-xhdpi  
│       │       ├── mipmap-xxhdpi  
│       │       ├── mipmap-xxxhdpi  
│       │       ├── values  
│       │       ├── values-ar  
│       │       ├── values-az  
│       │       ├── values-b+es+419  
│       │       ├── values-be  
│       │       ├── values-bg  
│       │       ├── values-bn  
│       │       ├── values-bn-rBD  
│       │       ├── values-br  
│       │       ├── values-bs  
│       │       ├── values-ca  
│       │       ├── values-ckb  
│       │       ├── values-cr  
│       │       ├── values-cs  
│       │       ├── values-cy  
│       │       ├── values-da  
│       │       ├── values-de  
│       │       ├── values-el  
│       │       ├── values-en-rGB  
│       │       ├── values-en-rIN  
│       │       ├── values-eo  
│       │       ├── values-es  
│       │       ├── values-es-rUS  
│       │       ├── values-et  
│       │       ├── values-eu  
│       │       ├── values-fa  
│       │       ├── values-fi  
│       │       ├── values-fil  
│       │       ├── values-fr  
│       │       ├── values-gl  
│       │       ├── values-hi  
│       │       ├── values-hr  
│       │       ├── values-hu  
│       │       ├── values-ia  
│       │       ├── values-in  
│       │       ├── values-is  
│       │       ├── values-it  
│       │       ├── values-iw  
│       │       ├── values-ja  
│       │       ├── values-kn  
│       │       ├── values-ko  
│       │       ├── values-kr  
│       │       ├── values-lt  
│       │       ├── values-ltg  
│       │       ├── values-lv  
│       │       ├── values-mk  
│       │       ├── values-ml  
│       │       ├── values-ms  
│       │       ├── values-my  
│       │       ├── values-nb-rNO  
│       │       ├── values-ne  
│       │       ├── values-nl  
│       │       ├── values-nn  
│       │       ├── values-or  
│       │       ├── values-pa  
│       │       ├── values-pa-rPK  
│       │       ├── values-pl  
│       │       ├── values-pt  
│       │       ├── values-pt-rBR  
│       │       ├── values-pt-rPT  
│       │       ├── values-ro  
│       │       ├── values-ru  
│       │       ├── values-sat  
│       │       ├── values-si  
│       │       ├── values-sk  
│       │       ├── values-sl  
│       │       ├── values-sr  
│       │       ├── values-sv  
│       │       ├── values-ta  
│       │       ├── values-te  
│       │       ├── values-th  
│       │       ├── values-tr  
│       │       ├── values-uk  
│       │       ├── values-vi  
│       │       ├── values-zgh  
│       │       ├── values-zh-rCN  
│       │       ├── values-zh-rHK  
│       │       ├── values-zh-rTW  
│       │       └── xml  
│       └── prepaid  
│           └── res  
│               └── values  
├── fastlane  
│   └── metadata  
│       └── android  
│           ├── az-AZ  
│           │   └── changelogs  
│           ├── bg  
│           ├── ca  
│           │   └── changelogs  
│           ├── cs-CZ  
│           │   └── changelogs  
│           ├── da-DK  
│           │   └── changelogs  
│           ├── de-DE  
│           │   └── changelogs  
│           ├── en-US  
│           │   ├── changelogs  
│           │   └── images  
│           │       └── phoneScreenshots  
│           ├── es-ES  
│           │   └── changelogs  
│           ├── et  
│           │   └── changelogs  
│           ├── eu-ES  
│           │   └── changelogs  
│           ├── fi-FI  
│           │   └── changelogs  
│           ├── gl-ES  
│           │   └── changelogs  
│           ├── hi-IN  
│           │   └── changelogs  
│           ├── hi@hinglish  
│           ├── hr  
│           │   └── changelogs  
│           ├── hu-HU  
│           │   └── changelogs  
│           ├── id  
│           │   └── changelogs  
│           ├── it-IT  
│           │   └── changelogs  
│           ├── ko-KR  
│           ├── nl-NL  
│           │   └── changelogs  
│           ├── pl-PL  
│           ├── pt  
│           ├── ro  
│           │   └── changelogs  
│           ├── ru-RU  
│           │   └── changelogs  
│           ├── tr-TR  
│           │   └── changelogs  
│           ├── uk  
│           │   └── changelogs  
│           └── zh-TW  
│               └── changelogs  
├── gradle  
│   └── wrapper  
└── graphics  
  
182 directories

```

## Connecter mon téléphone à Android Studio

J'ai branché mon téléphone à mon ordinateur en USB.

Je dois ajouter mon téléphone dans Android Studio pour pouvoir lancer l'application dessus.

Ca se passe dans le "Device Manager".

- Select remote devices

Je ne vois rien.

Il faut que j'aille sur mon téléphone.
Une notification est apparue.
Elle m'indique que le téléphone est connecté en USB.
Je tap sur la notification.

En fait, je n'avais pas [activé le débogage USB](https://www.frandroid.com/comment-faire/tutoriaux/229753_questcequelemodedebogageusb) dans les options de développeur de mon téléphone.

Voila chose faite. J'autorise mon téléphone à se connecter à mon ordinateur.

Mon téléphone est maintenant listé dans le Device Manager de Android Studio.

## Lancer l'application sur mon téléphone

La configuration Gradle a automatiquement configuré un lanceur qui s'appelle
`app` .

Apres m'être assuré que l'appareil cible sélectionné est bien mon téléphone, je lance l'application.

Le build s'exécute avec Gradle.

Les dépendances se téléchargent

```text
Executing tasks: [:app:assembleCoreDebug] in project /Users/marco/sources/Experimentations/fork-fossify-messages

> Task :app:createCoreDebugVariantModel
> Task :app:preBuild UP-TO-DATE
> Task :app:preCoreDebugBuild UP-TO-DATE
> Task :app:mergeCoreDebugNativeDebugMetadata NO-SOURCE
> Task :app:checkKotlinGradlePluginConfigurationErrors
> Task :app:generateCoreDebugResValues
> Task :app:generateCoreDebugResources
> Task :app:dataBindingMergeDependencyArtifactsCoreDebug

> Task :app:mergeCoreDebugResources
...

> Task :app:packageCoreDebugResources
> Task :app:generateCoreDebugBuildConfig
> Task :app:mapCoreDebugSourceSetPaths
> Task :app:createCoreDebugCompatibleScreenManifests
> Task :app:parseCoreDebugLocalResources
> Task :app:extractDeepLinksCoreDebug
> Task :app:checkCoreDebugAarMetadata
> Task :app:dataBindingGenBaseClassesCoreDebug

> Task :app:processCoreDebugMainManifest
/Users/marco/sources/Experimentations/fork-fossify-messages/app/src/main/AndroidManifest.xml Warning:
  uses-permission#com.samsung.android.providers.context.permission.WRITE_USE_APP_FEATURE_SURVEY was tagged at AndroidManifest.xml:0 to remove other declarations but no other declaration present

> Task :app:processCoreDebugManifest
...
> Task :app:javaPreCompileCoreDebug
> Task :app:mergeCoreDebugShaders
> Task :app:compileCoreDebugShaders NO-SOURCE
> Task :app:generateCoreDebugAssets UP-TO-DATE
> Task :app:mergeCoreDebugAssets
> Task :app:compressCoreDebugAssets
> Task :app:desugarCoreDebugFileDependencies
> Task :app:mergeCoreDebugJniLibFolders
> Task :app:checkCoreDebugDuplicateClasses
> Task :app:mergeCoreDebugNativeLibs NO-SOURCE
> Task :app:processCoreDebugManifestForPackage
> Task :app:mergeExtDexCoreDebug
> Task :app:stripCoreDebugDebugSymbols NO-SOURCE
> Task :app:mergeLibDexCoreDebug
> Task :app:validateSigningCoreDebug
> Task :app:writeCoreDebugAppMetadata
> Task :app:writeCoreDebugSigningConfigVersions
Download https://dl.google.com/dl/android/maven2/com/android/tools/build/aapt2/8.2.2-10154469/aapt2-8.2.2-10154469.pom, took 199 ms
Download https://dl.google.com/dl/android/maven2/com/android/tools/build/aapt2/8.2.2-10154469/aapt2-8.2.2-10154469-osx.jar, took 454 ms
> Task :app:processCoreDebugResources
> Task :app:kspCoreDebugKotlin

> Task :app:compileCoreDebugKotlin 
...
> Task :app:compileCoreDebugJavaWithJavac
> Task :app:dexBuilderCoreDebug
> Task :app:mergeCoreDebugGlobalSynthetics
> Task :app:processCoreDebugJavaRes
> Task :app:mergeProjectDexCoreDebug
> Task :app:mergeCoreDebugJavaResource
> Task :app:packageCoreDebug
> Task :app:createCoreDebugApkListingFileRedirect
> Task :app:assembleCoreDebug

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.2.1/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 2m 25s
39 actionable tasks: 39 executed

Build Analyzer results available


```

Le build est en succès !

Sur mon téléphone, l'application se lance.
Mon téléphone me propose de l'utiliser comme application de sms par défaut.
C'est plutôt bon signe.

Je vais décliner la proposition.
Après tout je vais surtout faire du bricolage aujourd'hui.

## Premier problème!

Si le build s'est déroulé sans problème, l'application se ferme dès que je la lance...

Je vais devoir fouiller dans les traces.

J'ouvre la fenêtre LogCat dans Android Studio.
J'ai l'impression que je vais pouvoir récupérer des traces.

```text
2024-09-27 20:57:19.494  2920-2920  ActivityThread          org.fossify.messages.debug           W  handleWindowVisibility: no activity for token android.os.BinderProxy@2f52920
2024-09-27 20:57:19.624  2920-2920  ActivityThread          org.fossify.messages.debug           W  handleWindowVisibility: no activity for token android.os.BinderProxy@d72826f
2024-09-27 20:57:20.229  2920-2974  AdrenoGLES              org.fossify.messages.debug           I  QUALCOMM build                   : 26a45fe, Ia11ce2d146
                                                                                                    Build Date                       : 09/08/20
                                                                                                    OpenGL ES Shader Compiler Version: EV031.27.05.07
                                                                                                    Local Branch                     : 
                                                                                                    Remote Branch                    : refs/tags/AU_LINUX_ANDROID_LA.UM.8.6.2.R1.10.00.00.537.071
                                                                                                    Remote Branch                    : NONE
                                                                                                    Reconstruct Branch               : NOTHING
2024-09-27 20:57:20.229  2920-2974  AdrenoGLES              org.fossify.messages.debug           I  Build Config                     : S L 8.0.12 AArch64
2024-09-27 20:57:20.247  2920-2974  AdrenoGLES              org.fossify.messages.debug           I  PFP: 0x005ff113, ME: 0x005ff066


```

Par défaut, LogCat semble filtrer les traces au nom de package de mon application.
Ce filtre est nommé `package:mine`

Je vais essayer de retirer ce filtre pour voir plus de traces.
Je risque par contre d'avoir des traces parasites d'autres applications qui tournent sur mon téléphone.

```text

2024-09-27 21:02:34.480   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:34.487  1392-3444  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:34.487  1392-3444  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:34.487  1392-3444  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:34.490   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:34.492 28421-28421 BoundBrokerSvc          com.google.android.gms               D  onBind: Intent { act=com.google.android.gms.safetynet.service.START pkg=com.google.android.gms }
2024-09-27 21:02:34.492 28421-28421 BoundBrokerSvc          com.google.android.gms               D  Loading bound service for intent: Intent { act=com.google.android.gms.safetynet.service.START pkg=com.google.android.gms }
2024-09-27 21:02:34.502  1392-3444  autorun_as              system_server                        W  would not route here, but innnnnnnnnnnnnnnnnnn
2024-09-27 21:02:34.890  1392-1475  twfx-3                  system_server                        D  captureDown pointer 0 down pointerIndex=0 trackingIndex=0
2024-09-27 21:02:34.891  1392-1475  twfx-3                  system_server                        D  captureDown pointer 0 down x=266.6297 y=1022.29004
2024-09-27 21:02:34.931  1392-1475  WindowManager           system_server                        E  mShortcutPointListener : onUpOrCancel
2024-09-27 21:02:34.944  1392-3444  ActivityTaskManager     system_server                        I  START u0 {act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=org.fossify.messages.debug/org.fossify.messages.activities.SplashActivity.Green bnds=[80,942][604,1050]} from uid 10210
2024-09-27 21:02:34.946  1392-3444  mmblock                 system_server                        D  AMS isTargetMMCall:GAME_PIP_SUPPORT_CALLING_BLOCK off
2024-09-27 21:02:34.950   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.iop@2.0::IIop/default in either framework or device manifest.
2024-09-27 21:02:34.950   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_spill_nr_run not supported
2024-09-27 21:02:34.950   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 11]
2024-09-27 21:02:34.950   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_restrict_cluster_spill not supported
2024-09-27 21:02:34.950   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 13]
2024-09-27 21:02:34.951   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_spill_nr_run not supported
2024-09-27 21:02:34.951   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 11]
2024-09-27 21:02:34.951   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_restrict_cluster_spill not supported
2024-09-27 21:02:34.951   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 13]
2024-09-27 21:02:34.959  1392-3444  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:34.960  1392-3444  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:34.960  1392-3444  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:34.960  1392-3444  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:34.962  1392-3444  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=org.fossify.messages.debug  actName=org.fossify.messages.activities.SplashActivity.Green
2024-09-27 21:02:34.962  1392-3444  HmctActivityMonitor     system_server                        D  getActiveConfigs, size = 34
2024-09-27 21:02:34.963  1392-3444  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0
2024-09-27 21:02:34.963  1392-3444  HmctActivityMonitor     system_server                        W  coolLaunchApp = org.fossify.messages.debug
2024-09-27 21:02:34.963  1392-3444  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: last package=bitpit.launcher type=0
2024-09-27 21:02:34.963  1392-3444  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0mGameModeExitPending=false
2024-09-27 21:02:34.963  1392-3444  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: coolLaunchApp is clear
2024-09-27 21:02:34.963  1392-3444  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:34.963  1392-3444  ActivityTrigger         system_server                        D  ActivityTrigger activityPauseTrigger 
2024-09-27 21:02:34.964  1392-3444  PowerManagerService     system_server                        D  acquireWakeLockInternal: lock=252660408, flags=0x1, tag="*launch*", ws=WorkSource{10366}, uid=1000, pid=1392
2024-09-27 21:02:34.972  1392-3398  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:34.973  1392-3398  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=org.fossify.messages.debug  actName=org.fossify.messages.activities.SplashActivity.Green
2024-09-27 21:02:34.973  1392-3398  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:34.974  1392-3398  ActivityTaskManager     system_server                        I  The Process org.fossify.messages.debug Already Exists in BG. So sending its PID: 2920
2024-09-27 21:02:34.977  1392-3398  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:34.977  1392-3398  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:34.977  1392-3398  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:34.977  2920-2920  ActivityThread          org.fossify.messages.debug           W  handleWindowVisibility: no activity for token android.os.BinderProxy@20d4f5c
2024-09-27 21:02:35.004   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:35.010  1392-3398  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:35.010  1392-3398  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:35.010  1392-3398  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:35.012   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:35.013 28421-28421 BoundBrokerSvc          com.google.android.gms               D  onBind: Intent { act=com.google.android.gms.measurement.START pkg=com.google.android.gms }
2024-09-27 21:02:35.013 28421-28421 BoundBrokerSvc          com.google.android.gms               D  Loading bound service for intent: Intent { act=com.google.android.gms.measurement.START pkg=com.google.android.gms }
2024-09-27 21:02:35.015  1392-3398  ActivityTaskManager     system_server                        I  START u0 {cmp=org.fossify.messages.debug/org.fossify.messages.activities.MainActivity} from uid 10366
2024-09-27 21:02:35.016  1392-3398  mmblock                 system_server                        D  AMS isTargetMMCall:GAME_PIP_SUPPORT_CALLING_BLOCK off
2024-09-27 21:02:35.017   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_spill_nr_run not supported
2024-09-27 21:02:35.017   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 11]
2024-09-27 21:02:35.017   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_restrict_cluster_spill not supported
2024-09-27 21:02:35.017   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 13]
2024-09-27 21:02:35.019  1392-3398  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:35.019  1392-3398  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:35.019  1392-3398  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:35.020  1392-3398  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:35.021  1392-3398  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=org.fossify.messages.debug  actName=org.fossify.messages.activities.MainActivity
2024-09-27 21:02:35.022  1392-3398  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:35.022  1392-3398  ActivityTrigger         system_server                        D  ActivityTrigger activityPauseTrigger 
2024-09-27 21:02:35.023  1392-3398  PowerManagerService     system_server                        D  acquireWakeLockInternal: lock=252660408, flags=0x1, tag="*launch*", ws=WorkSource{10366}, uid=1000, pid=1392
2024-09-27 21:02:35.053  1392-3444  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:35.054  1392-3444  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=org.fossify.messages.debug  actName=org.fossify.messages.activities.MainActivity
2024-09-27 21:02:35.055  1392-3444  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:35.055  1392-3444  ActivityTaskManager     system_server                        I  The Process org.fossify.messages.debug Already Exists in BG. So sending its PID: 2920
2024-09-27 21:02:35.059  1392-3444  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:35.059  1392-3444  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:35.059  1392-3444  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:35.070  2920-2920  ActivityThread          org.fossify.messages.debug           W  handleWindowVisibility: no activity for token android.os.BinderProxy@5028ddb
2024-09-27 21:02:35.070   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:35.086 19743-4990  NetworkScheduler        com.google.android.gms.persistent    W  Error inserting flex_time=1533000 job_id=-1 period=3068000 source=16 requires_charging=0 preferred_network_type=1 target_class=com.google.android.gms.measurement.PackageMeasurementTaskService user_id=0 target_package=com.google.android.gms tag=Measurement.PackageMeasurementTaskService.UPLOAD_TASK_TAG task_type=0 required_idleness_state=0 service_kind=0 source_version=243633000 persistence_level=1 preferred_charging_state=1 required_network_type=0 runtime=1727463755083 retry_strategy={"maximum_backoff_seconds":{"3600":0},"initial_backoff_seconds":{"30":0},"retry_policy":{"0":0}} last_runtime=0 [CONTEXT service_id=218 ]
                                                                                                    android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: pending_ops.tag, pending_ops.target_class, pending_ops.target_package, pending_ops.user_id (code 2067 SQLITE_CONSTRAINT_UNIQUE)
                                                                                                      at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)
                                                                                                      at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:879)
                                                                                                      at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:790)
                                                                                                      at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:88)
                                                                                                      at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1599)
                                                                                                      at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1494)
                                                                                                      at cppt.d(:com.google.android.gms@243633013@24.36.33 (100400-675378931):729)
                                                                                                      at cpnf.n(:com.google.android.gms@243633013@24.36.33 (100400-675378931):29)
                                                                                                      at cpnf.u(:com.google.android.gms@243633013@24.36.33 (100400-675378931):360)
                                                                                                      at cpnf.h(:com.google.android.gms@243633013@24.36.33 (100400-675378931):51)
                                                                                                      at cphz.run(:com.google.android.gms@243633013@24.36.33 (100400-675378931):72)
                                                                                                      at anps.c(:com.google.android.gms@243633013@24.36.33 (100400-675378931):50)
                                                                                                      at anps.run(:com.google.android.gms@243633013@24.36.33 (100400-675378931):76)
                                                                                                      at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
                                                                                                      at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
                                                                                                      at anvd.run(:com.google.android.gms@243633013@24.36.33 (100400-675378931):8)
                                                                                                      at java.lang.Thread.run(Thread.java:919)
2024-09-27 21:02:35.284  1392-3398  ActivityTaskManager     system_server                        I  START u0 {act=android.app.role.action.REQUEST_ROLE pkg=com.google.android.permissioncontroller cmp=com.google.android.permissioncontroller/com.android.packageinstaller.role.ui.RequestRoleActivity (has extras)} from uid 10366
2024-09-27 21:02:35.285  1392-3398  mmblock                 system_server                        D  AMS isTargetMMCall:GAME_PIP_SUPPORT_CALLING_BLOCK off
2024-09-27 21:02:35.285   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_spill_nr_run not supported
2024-09-27 21:02:35.285   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 11]
2024-09-27 21:02:35.285   648-692   ANDR-PERF-OPTSHANDLER   ven...qti.hardware.perf@2.0-service  E  Perflock resource /proc/sys/kernel/sched_restrict_cluster_spill not supported
2024-09-27 21:02:35.285   648-692   ANDR-PERF-RESOURCEQS    ven...qti.hardware.perf@2.0-service  E  Failed to apply optimization [3, 13]
2024-09-27 21:02:35.288  1392-3398  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:35.288  1392-3398  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:35.288  1392-3398  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:35.288  1392-3398  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=com.google.android.permissioncontroller  actName=com.android.packageinstaller.role.ui.RequestRoleActivity
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        D  getActiveConfigs, size = 34
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        W  coolLaunchApp = com.google.android.permissioncontroller
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: last package=org.fossify.messages.debug type=0
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0mGameModeExitPending=false
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: coolLaunchApp is clear
2024-09-27 21:02:35.290  1392-3398  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:35.290  1392-3398  ActivityTrigger         system_server                        D  ActivityTrigger activityPauseTrigger 
2024-09-27 21:02:35.291  1392-3398  PowerManagerService     system_server                        D  acquireWakeLockInternal: lock=252660408, flags=0x1, tag="*launch*", ws=WorkSource{10063}, uid=1000, pid=1392
2024-09-27 21:02:35.329  2034-2434  SmsApplication          com.android.phone                    W  Package com.facebook.orca lacks required manifest declarations to be a default sms app:  mPackageName: com.facebook.orca mSmsReceiverClass: com.facebook.messaging.carriermessaging.receiver.SmsReceivedMetaReceiver mMmsReceiverClass: com.facebook.messaging.carriermessaging.receiver.MmsReceivedMetaReceiver mRespondViaMessageClass: null mSendToClass: null mSmsAppChangedClass: com.facebook.carriermessaging.receiver.defaultapp.DefaultSmsAppBroadcastReceiver mProviderChangedReceiverClass: null mSimFullReceiverClass: null mUid: 10175
2024-09-27 21:02:35.330  2034-28882 SmsApplication          com.android.phone                    W  Package com.facebook.orca lacks required manifest declarations to be a default sms app:  mPackageName: com.facebook.orca mSmsReceiverClass: com.facebook.messaging.carriermessaging.receiver.SmsReceivedMetaReceiver mMmsReceiverClass: com.facebook.messaging.carriermessaging.receiver.MmsReceivedMetaReceiver mRespondViaMessageClass: null mSendToClass: null mSmsAppChangedClass: com.facebook.carriermessaging.receiver.defaultapp.DefaultSmsAppBroadcastReceiver mProviderChangedReceiverClass: null mSimFullReceiverClass: null mUid: 10175
2024-09-27 21:02:35.345  1392-3444  WindowManager           system_server                        E  App trying to use insecure INPUT_FEATURE_NO_INPUT_CHANNEL flag. Ignoring
2024-09-27 21:02:35.354  1392-3444  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:35.356  1392-3444  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=com.google.android.permissioncontroller  actName=com.android.packageinstaller.role.ui.RequestRoleActivity
2024-09-27 21:02:35.356  1392-3444  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:35.356  1392-3444  ActivityTaskManager     system_server                        I  The Process com.google.android.permissioncontroller Already Exists in BG. So sending its PID: 4077
2024-09-27 21:02:35.358  4077-4077  ActivityThread          com....android.permissioncontroller  W  handleWindowVisibility: no activity for token android.os.BinderProxy@57ab034
2024-09-27 21:02:35.359  1392-3444  CompatibilityInfo       system_server                        D  mCompatibilityFlags - 0
2024-09-27 21:02:35.359  1392-3444  CompatibilityInfo       system_server                        D  applicationDensity - 320
2024-09-27 21:02:35.359  1392-3444  CompatibilityInfo       system_server                        D  applicationScale - 1.0
2024-09-27 21:02:35.376  4077-4077  RequestRoleActivity     com....android.permissioncontroller  W  Application is denied always for role, role: android.app.role.SMS, package: org.fossify.messages.debug
2024-09-27 21:02:35.376  4077-4077  RequestRoleFragment     com....android.permissioncontroller  V  Role request result requestingUid=10366 requestingPackageName=org.fossify.messages.debug roleName=android.app.role.SMS qualifyingCount=-1 currentUid=-1 currentPackageName=null grantedAnotherUid=-1 grantedAnotherPackageName=null result=4
2024-09-27 21:02:35.385  1392-3444  ActivityTrigger         system_server                        D  ActivityTrigger activityPauseTrigger 
2024-09-27 21:02:35.385  1392-3444  PowerManagerService     system_server                        D  acquireWakeLockInternal: lock=252660408, flags=0x1, tag="*launch*", ws=WorkSource{10063}, uid=1000, pid=1392
2024-09-27 21:02:35.395  1392-8260  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:35.396  1392-8260  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=org.fossify.messages.debug  actName=org.fossify.messages.activities.MainActivity
2024-09-27 21:02:35.396  1392-8260  HmctActivityMonitor     system_server                        D  getActiveConfigs, size = 34
2024-09-27 21:02:35.396  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0
2024-09-27 21:02:35.397  1392-8260  HmctActivityMonitor     system_server                        W  coolLaunchApp = com.google.android.permissioncontroller
2024-09-27 21:02:35.397  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: last package=com.google.android.permissioncontroller type=0
2024-09-27 21:02:35.397  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0mGameModeExitPending=false
2024-09-27 21:02:35.397  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: coolLaunchApp is clear
2024-09-27 21:02:35.397  1392-8260  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:35.453  2920-2974  AdrenoGLES              org.fossify.messages.debug           I  QUALCOMM build                   : 26a45fe, Ia11ce2d146
                                                                                                    Build Date                       : 09/08/20
                                                                                                    OpenGL ES Shader Compiler Version: EV031.27.05.07
                                                                                                    Local Branch                     : 
                                                                                                    Remote Branch                    : refs/tags/AU_LINUX_ANDROID_LA.UM.8.6.2.R1.10.00.00.537.071
                                                                                                    Remote Branch                    : NONE
                                                                                                    Reconstruct Branch               : NOTHING
2024-09-27 21:02:35.453  2920-2974  AdrenoGLES              org.fossify.messages.debug           I  Build Config                     : S L 8.0.12 AArch64
2024-09-27 21:02:35.460  2920-2974  AdrenoGLES              org.fossify.messages.debug           I  PFP: 0x005ff113, ME: 0x005ff066
2024-09-27 21:02:35.520   739-1165  libnav                  mm-pp-dpps                           E  CablComputeBacklightLevel(): UpdateType = DifferentSceneUpdate
2024-09-27 21:02:35.521  1828-1840  ndroid.systemu          com.android.systemui                 I  NativeAlloc concurrent copying GC freed 31181(1846KB) AllocSpace objects, 18(360KB) LOS objects, 66% free, 6109KB/17MB, paused 161us total 131.323ms
2024-09-27 21:02:35.524   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.iop@2.0::IIop/default in either framework or device manifest.
2024-09-27 21:02:35.525  1392-1489  ActivityTaskManager     system_server                        I  Displayed com.google.android.permissioncontroller/com.android.packageinstaller.role.ui.RequestRoleActivity: +574ms
2024-09-27 21:02:35.525   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.iop@2.0::IIop/default in either framework or device manifest.
2024-09-27 21:02:35.534  1392-8260  ActivityTrigger         system_server                        D  ActivityTrigger activityPauseTrigger 
2024-09-27 21:02:35.535  1392-8260  PowerManagerService     system_server                        D  acquireWakeLockInternal: lock=252660408, flags=0x1, tag="*launch*", ws=WorkSource{10366}, uid=1000, pid=1392
2024-09-27 21:02:35.558  1392-8260  HmctActivityMonitor     system_server                        I  mModeExitPendingPackages = [com.tencent.mobileqq, com.tencent.tim, com.android.camera2, com.hmct.hsmemo, com.tencent.mm, com.hmct.screen.record, android, com.android.packageinstaller]
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        I  activityResumeTrigger pkgName=bitpit.launcher  actName=bitpit.launcher.ui.HomeActivity
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        D  getActiveConfigs, size = 34
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        W  coolLaunchApp = com.google.android.permissioncontroller
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: last package=org.fossify.messages.debug type=0
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: package name= type=0mGameModeExitPending=false
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        D  appLaunchTriggerEvent: coolLaunchApp is clear
2024-09-27 21:02:35.560  1392-8260  HmctActivityMonitor     system_server                        I  resumeTriggerEvent: no activityconfig found
2024-09-27 21:02:35.564   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.iop@2.0::IIop/default in either framework or device manifest.
2024-09-27 21:02:35.565  1392-3548  ANDR-PERF-JNI           system_server                        E  UXEngine Trigger - Returning null
2024-09-27 21:02:35.603   739-1165  libnav                  mm-pp-dpps                           E  CablComputeBacklightLevel(): UpdateType = DifferentSceneUpdate
2024-09-27 21:02:35.603  1392-3444  InputMetho...gerService system_server                        V  startInputOrWindowGainedFocusInternalLocked: reason=WINDOW_FOCUS_GAIN_REPORT_ONLY client=android.os.BinderProxy@2ab6c91 inputContext=null missingMethods= attribute=null startInputFlags=VIEW_HAS_FOCUS|FIRST_WINDOW_FOCUS_GAIN softInputMode=STATE_ALWAYS_HIDDEN|ADJUST_RESIZE windowFlags=#81910100 unverifiedTargetSdkVersion=34
2024-09-27 21:02:35.603  1392-3444  InputMetho...gerService system_server                        V  IME PreRendering MASTER flag: false, LowRam: false
2024-09-27 21:02:35.603  1392-3444  InputMetho...gerService system_server                        W  Window already focused, ignoring focus gain of: com.android.internal.view.IInputMethodClient$Stub$Proxy@df602fe attribute=null, token = android.os.BinderProxy@3f69fce
2024-09-27 21:02:35.612  1392-3444  PowerManagerService     system_server                        D  releaseWakeLockInternal: lock=252660408 [*launch*], flags=0x0, total_time=648ms
2024-09-27 21:02:35.794  4666-4732  chromium                com.android.chrome                   W  [WARNING:ev_root_ca_metadata.cc(119)] Not implemented
2024-09-27 21:02:36.081  1392-8260  ActivityTaskManager     system_server                        D  loadUserRecentsLocked(), return.
2024-09-27 21:02:36.136   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:36.140   465-465   hwservicemanager        hwservicemanager                     I  getTransport: Cannot find entry vendor.qti.hardware.servicetracker@1.0::IServicetracker/default in either framework or device manifest.
2024-09-27 21:02:36.150   550-550   Zygote                  pid-550                              D  Forked child process 5000
2024-09-27 21:02:36.153  1392-1491  ZygoteProcess           system_server                        W  Got error connecting to zygote, retrying. msg= Connection refused
2024-09-27 21:02:36.356  1392-1491  chatty                  system_server                        I  uid=1000(system) ActivityManager identical 4 lines
2024-09-27 21:02:36.406  1392-1491  ZygoteProcess           system_server                        W  Got error connecting to zygote, retrying. msg= Connection refused
2024-09-27 21:02:36.468  1392-1491  AppZygote               system_server                        I  Starting application preload.
2024-09-27 21:02:36.504  5000-5000  AppZygoteInit           pid-5000                             I  Beginning application preload for com.android.chrome
2024-09-27 21:02:36.502  5000-5000  d.chrome_zygote         pid-5000                             W  type=1400 audit(0.0:37193): avc: denied { getattr } for path="/data/data/com.android.chrome" dev="mmcblk0p66" ino=768765 scontext=u:r:app_zygote:s0:c512,c768 tcontext=u:object_r:app_data_file:s0:c120,c256,c512,c768 tclass=dir permissive=0


```

## A l'aide

Je vais essayer de chercher de l'aide.

Aparemment il y a un fil Télégram.

Mais quand je l'ouvre, je ne vois aucun message.

## Essayons autre chose

Je vais me résigner à utiliser un émulateur.
J'aurais bien aimé utiliser mon téléphone.

Dans l'émulateur, l'application se lance.

On va continuer là dessus.

On m'a d'ailleurs très justement fait remarquer que je prends peut être ds risques à bidouiller la base de données et les SMS sur mon propre téléphone.

Il est probable que la base de données soit en conflit avec celle de l'application que j'ai aussi installée depuis le store de mon téléphone.

```txt


Error inserting flex_time=1159000 job_id=-1 period=2319000 source=16 requires_charging=0 preferred_network_type=1 target_class=com.google.android.gms.measurement.PackageMeasurementTaskService user_id=0 target_package=com.google.android.gms tag=Measurement.PackageMeasurementTaskService.UPLOAD_TASK_TAG task_type=0 required_idleness_state=0 service_kind=0 source_version=243633000 persistence_level=1 preferred_charging_state=1 required_network_type=0 runtime=1727464129471 retry_strategy={"maximum_backoff_seconds":{"3600":0},"initial_backoff_seconds":{"30":0},"retry_policy":{"0":0}} last_runtime=0 [CONTEXT service_id=218 ]  
android.database.sqlite.SQLiteConstraintException: UNIQUE constraint failed: pending_ops.tag, pending_ops.target_class, pending_ops.target_package, pending_ops.user_id (code 2067 SQLITE_CONSTRAINT_UNIQUE)  
at android.database.sqlite.SQLiteConnection.nativeExecuteForLastInsertedRowId(Native Method)  
at android.database.sqlite.SQLiteConnection.executeForLastInsertedRowId(SQLiteConnection.java:879)  
at android.database.sqlite.SQLiteSession.executeForLastInsertedRowId(SQLiteSession.java:790)  
at android.database.sqlite.SQLiteStatement.executeInsert(SQLiteStatement.java:88)  
at android.database.sqlite.SQLiteDatabase.insertWithOnConflict(SQLiteDatabase.java:1599)  
at android.database.sqlite.SQLiteDatabase.insertOrThrow(SQLiteDatabase.java:1494)  
at cppt.d(:com.google.android.gms@243633013@24.36.33 (100400-675378931):729)  
at cpnf.n(:com.google.android.gms@243633013@24.36.33 (100400-675378931):29)  
at cpnf.u(:com.google.android.gms@243633013@24.36.33 (100400-675378931):360)  
at cpnf.h(:com.google.android.gms@243633013@24.36.33 (100400-675378931):51)  
at cphz.run(:com.google.android.gms@243633013@24.36.33 (100400-675378931):72)  
at anps.c(:com.google.android.gms@243633013@24.36.33 (100400-675378931):50)  
at anps.run(:com.google.android.gms@243633013@24.36.33 (100400-675378931):76)  
at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)  
at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)  
at anvd.run(:com.google.android.gms@243633013@24.36.33 (100400-675378931):8)

```

## Premier retour.

Je suis un peu dérouté par ma difficulté à démarrer sur le projet.

Je n'ai pas trouvé

## Ok l'application tourne dans l'émulateur

J'ai besoin de simuler le fait que j'ai reçu des SMS dans le téléphone.

Car pour le moment, il n'y a aucun message que je puisse copier.

Est-ce que je peux bricoler les données dans l'émulateur?

J'espère.

OUI !

Dans le sous-menu de l'émulateur depuis le Device Manager, je peux ouvrir une vue "Open in Device Explorer".

Je peux voir le système de fichiers de la machine virtuelle.

Finalement je peux envoyer des messages à un numéro de téléphone bidon.

Même si ça ne les envoie pas vraiment, ça me permet d'avoir des messages que je peux sélectionner.

J'en ai 2.

![L'application est lancée dans l'émulateur. On voit 2 messages envoyés.](/public/img/fossify-bidouille-01-2-messages.png)

Quand je passe en mode sélection.

Avec 1 message sélectionné, je peux partager et copier le message dans le presse-papier.

![Application dans l'émulateur. Le premier message est sélectionné. L'option de copie dans le presse papier est visible.](/public/img/fossify-bidouille-02-selection-1-message.png)

Quand j'ai 2 messages, je ne peux plus copier ou partager.

![Application dans l'émulateur. Les 2 messages sont sélectionnés. L'option de copie dans le presse papier absente.](/public/img/fossify-bidouille-03-selection-2-messages.png)

## Regardons le code !

J'ai mon environnement en place et un jeu de données minimal.

Je peux maintenant regarder le code.

Je fais une recherche de mots clés dans le projet pour voir si je peux trouver rapidement la fonctionnalité que je cherche.

Tentons avec le mot clé "clipboard" et filtrant les fichiers ".kt"

Après quelques tentative, je pense avoir trouvé un point de repère intéressant.

C'est une fonction qui s'appelle `isOneItemSelected()`.

On la trouvé appelée dans le fichier `ConversationsAdapter.kt`.

En voici un extrait :

```kotlin
class ConversationsAdapter(
    activity: SimpleActivity, recyclerView: MyRecyclerView, onRefresh: () -> Unit, itemClick: (Any) -> Unit
) : BaseConversationsAdapter(activity, recyclerView, onRefresh, itemClick) {
    override fun getActionMenuId() = R.menu.cab_conversations

    override fun prepareActionMode(menu: Menu) {
        val selectedItems = getSelectedItems()
        val isSingleSelection = isOneItemSelected()
        val selectedConversation = selectedItems.firstOrNull() ?: return
        val isGroupConversation = selectedConversation.isGroupConversation
        val archiveAvailable = activity.config.isArchiveAvailable
        // ...
  }
  // ...
}
```

## Bidouillons !

Le code responsable de la copie de messages semble être le suivant :
J'ai l'impression que cette fonction porte un nom qui ne correspond pas tout à fait à ce qu'elle fait.

```kotlin
private fun copyNumberToClipboard() {  
    val conversation = getSelectedItems().firstOrNull() ?: return  
    activity.copyToClipboard(conversation.phoneNumber)  
    finishActMode()  
}

```

Quand je regarde le contenu de la fonction
`activity.copyToClipboard(...)`
Je me rends compte que c'est une fonction qui est présente dans un module commun :
`org.fossify.commons`

```kotlin

fun Context.copyToClipboard(text: String) {  
    val clip = ClipData.newPlainText(getString(R.string.fossify_commons), text)  
    (getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager).setPrimaryClip(clip)  
    val toastText = String.format(getString(R.string.value_copied_to_clipboard_show), text)  
    toast(toastText)  
}
```

## Debugger pour voir les données

Je vais ajouter un point d'arrêt sur

```kotlin
private fun copyNumberToClipboard() {  
    val conversation = getSelectedItems().firstOrNull() ?: return  
    activity.copyToClipboard(conversation.phoneNumber)  // 🔴 mon point d'arrêt
    finishActMode()  
}

```

Quand je lance l'app et que je copie 1 seul message, le point d'arrêt ne se déclenche pas.
J'ai du me tromper d'endroit.

## Cherchons dans les composants graphiques

Je me rends compte que je peux voir les éléments d'interface dans la section "ressources".

`app/src/main/res`

Peut-être aurai-je un peu plus de chance en regardant ce fichier :

`app/src/main/res/layout/activity_thread.xml`

Dedans, j'y trouve des éléments graphiques:

- `thread_messages_list`

Fausse route.

## Enfin trouvé !

En suivant la piste des threads.
Je tombe sur l'activité `ThreadActivity.kt`

Dans celle-ci, je trouve ce code :

```kotlin
override fun prepareActionMode(menu: Menu) {  
    val isOneItemSelected = isOneItemSelected()  
    val selectedItem = getSelectedItems().firstOrNull() as? Message  
    val hasText = selectedItem?.body != null && selectedItem.body != ""  
    menu.apply {  
        findItem(R.id.cab_copy_to_clipboard).isVisible = isOneItemSelected && hasText  
        findItem(R.id.cab_save_as).isVisible = isOneItemSelected && selectedItem?.attachment?.attachments?.size == 1  
        findItem(R.id.cab_share).isVisible = isOneItemSelected && hasText  
        findItem(R.id.cab_forward_message).isVisible = isOneItemSelected  
        findItem(R.id.cab_select_text).isVisible = isOneItemSelected && hasText  
        findItem(R.id.cab_properties).isVisible = isOneItemSelected  
        findItem(R.id.cab_restore).isVisible = isRecycleBin  
    }  
}
```

Puis ce code :

```kotlin

private fun copyToClipboard() {  
    val firstItem = getSelectedItems().firstOrNull() as? Message ?: return  // 🔴
    activity.copyToClipboard(firstItem.body)  
}
```

Le point d'arrêt se déclenche quand j'effectue l'action !

## Bidouillons vraiment !

Avertissement : Ce code n'est pas propre, c'est pour prouver qu'on peut le faire facilement.

Désactivons le test qui cache l'icône de copie d'un message quand seulement 1 message est sélectionné.

```diff
  
class ThreadAdapter(  
    activity: SimpleActivity,  
    recyclerView: MyRecyclerView,  
    itemClick: (Any) -> Unit,  
    val isRecycleBin: Boolean,  
    val deleteMessages: (messages: List<Message>, toRecycleBin: Boolean, fromRecycleBin: Boolean) -> Unit  
) : MyRecyclerViewListAdapter<ThreadItem>(activity, recyclerView, ThreadItemDiffCallback(), itemClick) {  
    private var fontSize = activity.getTextSize()  
  
    @SuppressLint("MissingPermission")  
    private val hasMultipleSIMCards = (activity.subscriptionManagerCompat().activeSubscriptionInfoList?.size ?: 0) > 1  
    private val maxChatBubbleWidth = activity.usableScreenSize.x * 0.8f  
  
    init {  
        setupDragListener(true)  
        setHasStableIds(true)  
    }  
  
    override fun getActionMenuId() = R.menu.cab_thread  
  
    override fun prepareActionMode(menu: Menu) {  
        val isOneItemSelected = isOneItemSelected()  
        val selectedItem = getSelectedItems().firstOrNull() as? Message  
        val hasText = selectedItem?.body != null && selectedItem.body != ""  
        menu.apply {  
-            findItem(R.id.cab_copy_to_clipboard).isVisible = isOneItemSelected && hasText
+            findItem(R.id.cab_copy_to_clipboard).isVisible =  hasText  
            findItem(R.id.cab_save_as).isVisible = isOneItemSelected && selectedItem?.attachment?.attachments?.size == 1  
            findItem(R.id.cab_share).isVisible = isOneItemSelected && hasText  
            findItem(R.id.cab_forward_message).isVisible = isOneItemSelected  
            findItem(R.id.cab_select_text).isVisible = isOneItemSelected && hasText  
            findItem(R.id.cab_properties).isVisible = isOneItemSelected  
            findItem(R.id.cab_restore).isVisible = isRecycleBin  
        }
```

C'est crade, mais je peux vérifier que c'est pas trop compliqué de copier le contenu de plusieurs messages :

```diff
private fun copyToClipboard() {  
-      val firstItem = getSelectedItems().firstOrNull() as? Message ?: return  
-      activity.copyToClipboard(firstItem.body)}
+      val allSelectedItems = getSelectedItems()  as? List<Message>  
+      val allBodies: String = allSelectedItems  
+         ?.map { it.body }  
+         ?.joinToString(separator = "\n")?:""  
+     activity.copyToClipboard(allBodies)  
```

Quand je sélectionne plusieurs messages, les contenus de tous les messages sont copiés dans le presse-papier.

![Application dans l'émulateur. Les 2 messages sont sélectionnés. L'option de copie dans le presse papier est visible. Une infobulle indique le contenu copié dans le presse-papier. C'est la concaténation des 2 messages !](/public/img/fossify-bidouille-04-2-messages-copies.png)

## Récapitulatif

Au final, la fonctionnalité que je veux faire semble pouvoir être faite en modifiant un seul fichier.

```text
.
└── app
    └── src
        └── main
            └── kotlin
                └── org
                    └── fossify
                        └── messages
                            └── activities
                                └── ThreadActivity.kt
```

Pour récapituler:

- Aucun problème pour installer Android Studio
- Penser à activer le mode développeur et le débogage USB
- Onboarding du projet
- Sur mon téléphone : échec (mais c'est peut-être pas plus mal, j'évite de tout casser sur mon téléphone)
- J'ai appris à lire les traces de mon téléphone avec LogCat qui est intégré à Android Studio
- Sur un émulateur
    - On peut regarder les fichiers d'une machine émulée avec "Device Explorer"
    - On peut lancer l'application en mode Debug et déclencher des points d'arrêt
- J'ai essayé plusieurs stratégies pour trouver la fonctionnalité dans le code
    - recherche par mot clés
    - recherche depuis les interfaces
- Quand j'ai trouvé l'endroit où se trouve la fonctionnalité que je souhaite modifier, tout devient plus simple ;

J'ai pris des chemins de traverse pour arriver au résultat de mon expérimentation.
Pourtant j'ai appris plein de choses au passage.
Pour moins de 5 lignes de code à potentiellement changé, j'ai passé quelques heures.
Ce n'est pas du temps perdu selon-moi.

Cet exemple montre que derrière quelques lignes de code il y a souvent :

- des recherches
- des hésitations
- des tentatives
- des erreurs
- des contournements

Je trouve dommage qu'on perde ces traces.
Cet article rappelle qu'il est parfois important de conserver certaines trace du chemin qui nous a amené à prendre des décisions.
C'est le sujet d'un prochain article en cours de rédaction sur le sujet de [l'archéologie du code](/glossaire/archeologie-du-code).

Je vais m'arrêter pour aujourd’hui.
