import React, { useState } from "react";
import styled from "styled-components";
import { Editor, EditorState, RichUtils } from "draft-js";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Preview = styled.div`
  background: papayawhip;
`;

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState("Text");

  const onChange = editorState => setEditorState(editorState);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <Container>
      <Editor
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
      />
      <Preview>{text}</Preview>
    </Container>
  );
};

export default MyEditor;
