import { Editor, Plugin } from 'obsidian';

/**
 * Direction for which way the cursor is moving.
 */
enum CursorDirection {
  Above = 'above',
  Below = 'below',
}

/**
 * Provide multi-cursor support in the same way VSCode does it.
 */
export default class MultiCursor extends Plugin {
  async onload() {
    this.addCommand({
      id: 'add-cursor-above',
      name: 'Add a cursor above the current line.',
      editorCallback: (editor: Editor) => this.addCursor(editor, CursorDirection.Above),
    });
    this.addCommand({
      id: 'add-cursor-below',
      name: 'Add a cursor below the current line.',
      editorCallback: (editor: Editor) => this.addCursor(editor, CursorDirection.Below),
    });
  }

  addCursor(editor: Editor, location: string) {
    // Get the current cursors.
    const cursors = editor.listSelections();

    // Get the current cursor location.
    let currentPosition;
    if (location === CursorDirection.Above) {
      currentPosition = cursors.first();
    } else {
      currentPosition = cursors.last();
    }

    // Build out the new cursor location.
    const newLine = currentPosition.anchor.line + (location === CursorDirection.Above ? -1 : 1);
    const newPosition = { line: newLine, ch: currentPosition.anchor.ch };

    // Add the new cursor.
    cursors.push({ anchor: newPosition, head: newPosition });

    // Set the cursors in the editor.
    editor.setSelections(cursors);
  }

  onunload() {}
}
