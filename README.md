# Obsidian Multi-cursor

[![ci](https://github.com/benmatselby/obsidian-multi-cursor/actions/workflows/ci.yml/badge.svg)](https://github.com/benmatselby/obsidian-multi-cursor/actions/workflows/ci.yml)

This plugin provides Multi-cursor support, in the same way as Visual Studio Code.

## Installation

~Install the plugin via the community plugins process in Obsidian.~ - Not currently uploaded.

Install the plugin via cloning this repo to `.obsidian/plugins/obsidian-multi-cursor`, and then running `npm install && npm run build`.

Once you have done that, you can define the following hotkeys:

- Multi-cursor: Add a cursor above the current line.
- Multi-cursor: Add a cursor below the current line.

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
  ]
```
