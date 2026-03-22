---
title: Windows Terminal settings.json
date: 2020-12-17
description: Paramétrage du terminal windows
cover_image: ./images/default-cheat-sheet.png
date_updated: 2026-03-22T17:19
---
Windows terminal settings.json

Prérequis : installer les fonts supportant les ligatures et glyphes powerline.
https://docs.microsoft.com/en-us/windows/terminal/cascadia-code

Source d'origine : https://www.hanselman.com/blog/how-to-make-a-pretty-prompt-in-windows-terminal-with-powerline-nerd-fonts-cascadia-code-wsl-and-ohmyposh


```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    // You can add more global application settings here.
    // To learn more about global settings, visit https://aka.ms/terminal-global-settings
    // If enabled, selections are automatically copied to your clipboard.
    "copyOnSelect": false,
    // If enabled, formatted data is also copied to your clipboard
    "copyFormatting": false,
    // A profile specifies a command to execute paired with information about how it should look and feel.
    // Each one of them will appear in the 'New Tab' dropdown,
    //   and can be invoked from the commandline with `wt.exe -p xxx`
    // To learn more about profiles, visit https://aka.ms/terminal-profile-settings
    "profiles": {
        "defaults": {
            // Put settings here that you want to apply to all profiles.
        },
        "list": [
            {
                "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
                "hidden": false,
                "name": "PowerShell",
                "source": "Windows.Terminal.PowershellCore",
                "fontFace": "Cascadia Mono PL"
            },
            {
                "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
                "hidden": false,
                "name": "Ubuntu",
                "source": "Windows.Terminal.Wsl",
                "startingDirectory": "\\\\wsl$\\Ubuntu\\home\\marco",
                "icon": "D:\\wsl\\ubuntu\\Assets\\Square44x44Logo.altform-unplated_targetsize-32.png",
                "fontFace": "Cascadia Mono PL"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure",
                "fontFace": "Cascadia Mono PL"
            },
            {
                "guid": "{58ad8b0c-3ef8-5f4d-bc6f-13e4c00f2530}",
                "hidden": false,
                "name": "Debian",
                "source": "Windows.Terminal.Wsl",
                "startingDirectory": "\\\\wsl$\\Debian\\home\\marco",
                "icon": "D:\\wsl\\debian\\Assets\\Square44x44Logo.altform-unplated_targetsize-32.png",
                "fontFace": "Cascadia Mono PL"
            },
            {
                // Make changes here to the powershell.exe profile.
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "name": "Windows PowerShell",
                "commandline": "powershell.exe",
                "hidden": false,
                "fontFace": "Cascadia Mono PL",
                "experimental.retroTerminalEffect": true
            },
            {
                // Make changes here to the cmd.exe profile.
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "name": "Command Prompt",
                "commandline": "cmd.exe",
                "hidden": false,
                "fontFace": "Cascadia Mono PL",
                "experimental.retroTerminalEffect": true
            }
        ]
    },
    // Add custom color schemes to this array.
    // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
    "schemes": [],
    // Add custom actions and keybindings to this array.
    // To unbind a key combination from your defaults.json, set the command to "unbound".
    // To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings
    "actions": [
        // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
        // These two lines additionally bind them to Ctrl+C and Ctrl+V.
        // To learn more about selection, visit https://aka.ms/terminal-selection
        {
            "command": {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        // Press Ctrl+Shift+F to open the search box
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        // Press Alt+Shift+D to open a new pane.
        // - "split": "auto" makes this pane open in the direction that provides the most surface area.
        // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
        // To learn more about panes, visit https://aka.ms/terminal-panes
        {
            "command": {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        }
    ]
}
```
