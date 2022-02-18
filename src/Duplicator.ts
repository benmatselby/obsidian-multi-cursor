import { Editor } from 'obsidian';
import { CursorDirection } from './CursorDirection';

/**
 * Duplicator is responsible for duplicating lines.
 */
export default class Duplicator {
  /**
   * Duplicate the current line either above or below the current location.
   */
  public duplicateLine(editor: Editor, location: string) {
    // Get the current cursors.
    const cursors = editor.listSelections();

    // Get the current cursor location.
    let currentPosition;
    if (location === CursorDirection.Above) {
      currentPosition = cursors.first();
    } else {
      currentPosition = cursors.last();
    }

    // Build out the new line.
    const newLine = currentPosition.anchor.line + (location === CursorDirection.Above ? -1 : 1);

    // Return if we are at the beginning of the document.
    if (newLine < 0) {
      return;
    }

    // Return if we are at the end of the document.
    if (newLine >= editor.lineCount()) {
      return;
    }

    // Introduce the new content.
    if (location === CursorDirection.Above) {
      editor.setLine(
        newLine,
        editor.getLine(currentPosition.head.line - 1) +
          '\n' +
          editor.getLine(currentPosition.head.line),
      );
    } else {
      editor.setLine(
        newLine,
        editor.getLine(currentPosition.head.line) +
          '\n' +
          editor.getLine(currentPosition.head.line + 1),
      );
    }
  }
}
