import React from "react";
import CKEditor from "ckeditor4-react";

const MyCKEditor = () => {
  return (
    <div>
      <h2>CKEditor</h2>

      <CKEditor data="<p>Hello from CKEditor 4!</p>" />
    </div>
  );
};

export default MyCKEditor;
