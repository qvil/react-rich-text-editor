import styled from "styled-components";
import { Editor } from "draft-js";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const Preview = styled.div`
  background: papayawhip;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background: white;
  padding: 4px 8px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const EditorStyle = styled.div`
  padding: 16px;
  background: pink;
  /* color: white; */
`;
