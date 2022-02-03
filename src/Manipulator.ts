import { Editor, EditorSelection, EditorSelectionOrCaret } from 'obsidian';
import { CursorDirection } from './CursorDirection';

/**
 * Manipulator is responsible for manipulating the cursors.
 */
export default class Manipulator {
  /**
   * Add a cursor either above or below the current location.
   */
  public addCursor(editor: Editor, location: string) {
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
    if (newLine < 0) {
      return;
    }
    const newChar = Math.min(currentPosition.anchor.ch, editor.getLine(newLine).length);
    const newPosition = { line: newLine, ch: newChar };

    // Add the new cursor.
    cursors.push({ anchor: newPosition, head: newPosition });

    // Set the cursors in the editor.
    editor.setSelections(cursors);
  }

  /**
   * Add cursors to all lines in the selection.
   */
  public addCursorsToSelection(editor: Editor) {
    // Get the selection made in the editor
    const selections = editor.listSelections();

    // Create positions for a cursor on each line
    const cursors: EditorSelectionOrCaret[] = [];
    selections.forEach((line) => {
      cursors.push(...this.getCursorPointsForSelection(editor, line));
    });

    // Set the cursors in the editor.
    editor.setSelections(cursors);
  }

  /**
   * Generate cursor locations given a editor selection object.
   */
  private getCursorPointsForSelection(
    editor: Editor,
    selection: EditorSelection,
  ): EditorSelectionOrCaret[] {
    if (selection.anchor.line == selection.head.line) {
      const point = { line: selection.head.line, ch: editor.getLine(selection.head.line).length };
      return [{ anchor: point, head: point }];
    }

    if (selection.anchor.line < selection.head.line) {
      const points = [];
      for (let i = selection.anchor.line; i <= selection.head.line; i++) {
        const point = { line: i, ch: editor.getLine(i).length };
        points.push({ anchor: point, head: point });
      }
      return points;
    }

    if (selection.head.line < selection.anchor.line) {
      const points = [];
      for (let i = selection.head.line; i <= selection.anchor.line; i++) {
        const point = { line: i, ch: editor.getLine(i).length };
        points.push({ anchor: point, head: point });
      }
      return points;
    }

    return;
  }
}
