import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";

function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Editor
      editorState={editorState}
      onChange={editorState => setEditorState(editorState)}
    />
  );
}

ReactDOM.render(<MyEditor />, document.getElementById("root"));
