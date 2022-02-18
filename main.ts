import { Editor, Plugin } from 'obsidian';
import { CursorDirection } from 'src/CursorDirection';
import Duplicator from 'src/Duplicator';
import Manipulator from 'src/Manipulator';

/**
 * Provide multi-cursor support in the same way VSCode does it.
 */
export default class MultiCursor extends Plugin {
  async onload() {
    const manipulator = new Manipulator();
    const duplicator = new Duplicator();
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

    this.addCommand({
      id: 'duplicate-line-above',
      name: 'Duplicate the current line to the line above.',
      editorCallback: (editor: Editor) => duplicator.duplicateLine(editor, CursorDirection.Above),
    });

    this.addCommand({
      id: 'duplicate-line-below',
      name: 'Duplicate the current line to the line below.',
      editorCallback: (editor: Editor) => duplicator.duplicateLine(editor, CursorDirection.Below),
    });
  }

  onunload() {}
}
