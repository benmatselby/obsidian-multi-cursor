import { Editor, MarkdownView, Plugin } from "obsidian";

/**
 * Provide multi-cursor support in the same way VSCode does it.
 */
export default class MultiCursor extends Plugin {
  async onload() {
    // This adds a simple command that can be triggered anywhere
    this.addCommand({
      id: "add-cursor-above",
      name: "Add a cursor above the current line.",
      editorCallback: (editor: Editor, view: MarkdownView) => {
        // Get the current cursors.
        const cursors = editor.listSelections();

        // Get the current cursor location.
        const currentPosition = editor.getCursor();

        // Build out the new cursor location.
        const newPosition = { line: currentPosition.line - 1, ch: currentPosition.ch };

        // Add the new cursor.
        cursors.push({ anchor: newPosition, head: newPosition });

        // Set the cursors in the editor.
        editor.setSelections(cursors);
      },
    });
  }

  onunload() {}
}
