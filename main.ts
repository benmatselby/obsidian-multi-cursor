import { Editor, Plugin } from 'obsidian';
import { CursorDirection } from 'src/CursorDirection';
import Manipulator from 'src/Manipulator';

/**
 * Provide multi-cursor support in the same way VSCode does it.
 */
export default class MultiCursor extends Plugin {
  async onload() {
    const manipulator = new Manipulator();
    this.addCommand({
      id: 'add-cursor-above',
      name: 'Add a cursor above the current line.',
      editorCallback: (editor: Editor) => manipulator.addCursor(editor, CursorDirection.Above),
    });

    this.addCommand({
      id: 'add-cursor-below',
      name: 'Add a cursor below the current line.',
      editorCallback: (editor: Editor) => manipulator.addCursor(editor, CursorDirection.Below),
    });

    this.addCommand({
      id: 'add-cursors-to-selection',
      name: 'Add cursors to the end of every line in the selection.',
      editorCallback: (editor: Editor) => manipulator.addCursorsToSelection(editor),
    });
  }

  onunload() {}
}
