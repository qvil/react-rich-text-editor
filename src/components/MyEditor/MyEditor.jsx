import React, { useState } from "react";
import { EditorState, RichUtils, convertFromRaw, convertToRaw } from "draft-js";
import Editor from "draft-js-plugins-editor";
import createImagePlugin from "draft-js-image-plugin";
import {
  Container,
  Preview,
  ButtonGroup,
  Button,
  EditorStyle
} from "./MyEditor.style";

const imagePlugin = createImagePlugin();
const initialState = {
  entityMap: {
    "0": {
      type: "IMAGE",
      mutability: "IMMUTABLE",
      data: {
        src: "//ddragon.leagueoflegends.com/cdn/9.10.1/img/champion/Braum.png"
      }
    }
  },
  blocks: [
    {
      key: "9gm3s",
      text:
        "You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "ov7r",
      text: " ",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ],
      data: {}
    },
    {
      key: "e23a8",
      text: "See advanced examples further down …",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};

const MyEditor = () => {
  const [editorState, setEditorState] = useState(
    localStorage.editorState
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(localStorage.editorState))
        )
      : EditorState.createWithContent(convertFromRaw(initialState))
  );
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

  const handleSave = () => {
    const ContentState = convertToRaw(editorState.getCurrentContent());

    localStorage.editorState = JSON.stringify(ContentState);
  };

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={handleBoldClick}>Bold</Button>
        <Button onClick={handleSave}>Save</Button>
      </ButtonGroup>
      <EditorStyle>
        <Editor
          editorState={editorState}
          plugins={[imagePlugin]}
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
