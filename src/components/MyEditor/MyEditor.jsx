import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import {
  Container,
  Preview,
  ButtonGroup,
  Button,
  EditorStyle
} from "./MyEditor.style";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState("Preview");

  const onChange = editorState => setEditorState(editorState);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={handleBoldClick}>Bold</Button>
      </ButtonGroup>
      <EditorStyle>
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          placeholder="Typing here"
        />
      </EditorStyle>
      <Preview>{text}</Preview>
    </Container>
  );
};

export default MyEditor;
