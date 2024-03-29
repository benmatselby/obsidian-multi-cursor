# Obsidian Multi-cursor

[![ci](https://github.com/benmatselby/obsidian-multi-cursor/actions/workflows/ci.yml/badge.svg)](https://github.com/benmatselby/obsidian-multi-cursor/actions/workflows/ci.yml)

This plugin provides Multi-cursor support, in the same way as Visual Studio Code.

## Installation

### Release installation

1. Go to the [lastest release](https://github.com/benmatselby/obsidian-multi-cursor/releases/latest)
2. Download `main.js` and `manifest.json`
3. Close Obsidian
4. Browse to the root of your Obsidian Vault
5. Go to the `.obsidian` - It is a hidden folder, so check your operating system setting if you don't see it
6. Go to the `plugins` folder
7. Create a folder named `obsidian-multi-cursor`
8. Copy the two downloaded files `main.js` and `manifest.json`
9. Start Obsidian and activate the plug-in!

### Manual installation

Install the plugin via cloning this repo to `.obsidian/plugins/obsidian-multi-cursor`, and then running `npm install && npm run build`. You will then need to select "Reload app without saving" from the command palette. After the plugin is loaded, you to enable it via the "Community Plugins" section of the settings.

Once you have done that, you can define the following hotkeys:

- Multi-cursor: Add a cursor above the current line.
- Multi-cursor: Add a cursor below the current line.
- Multi-cursor: Add cursors to the end of every line in the selection.
- Multi-cursor: Duplicate the current line to the line above.
- Multi-cursor: Duplicate the current line to the line below.

This will give you the following config in `.obsidian/hotkeys.json` for your vault.

```json
  "obsidian-multi-cursor:add-cursor-above": [
    {
      "modifiers": [
        "Alt",
        "Mod"
      ],
      "key": "ArrowUp"
    }
  ],
  "obsidian-multi-cursor:add-cursor-below": [
    {
      "modifiers": [
        "Alt",
        "Mod"
      ],
      "key": "ArrowDown"
    }
  ],
  "obsidian-multi-cursor:add-cursors-to-selection": [
    {
      "modifiers": [
        "Alt",
        "Shift"
      ],
      "key": "I"
    }
  ],
  "obsidian-multi-cursor:duplicate-line-above": [
    {
      "modifiers": [
        "Alt",
        "Shift"
      ],
      "key": "ArrowUp"
    }
  ],
  "obsidian-multi-cursor:duplicate-line-below": [
    {
      "modifiers": [
        "Alt",
        "Shift"
      ],
      "key": "ArrowDown"
    }
  ]
```
