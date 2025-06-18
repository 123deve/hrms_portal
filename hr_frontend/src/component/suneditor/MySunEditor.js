import { Card, Row,Button } from "antd";
import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const MySunEditor = ({  initialTempVar = [] ,onCancel}) => {
 // const [templateName, setTemplateName] = useState(initialTemplateName);
  const [tempVar] = useState(initialTempVar);

  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };
  //const handleCreate = () => {};
  
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Card className="m-0">
      <Row>
        <SunEditor
          setOptions={{
            buttonList: [
              ["font", "fontSize", "formatBlock"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["align", "horizontalRule", "list", "table"],
              ["fontColor", "hiliteColor"],
              ["undo", "redo"],
              ["removeFormat"],
              ["link", "image","video"],
              ["preview", "fullScreen"]
            ],
          }}
          getSunEditorInstance={getSunEditorInstance}
          height="30vh"
        />
      </Row>
      <Row>
        {tempVar?.map((variable, index) => (
          <span className="m-10" key={index}>
            {variable}
          </span>
        ))}
      </Row>
      <Button 
      size="large"
      onClick={handleCancel}
      className="mt-2 md:mt-0"
      >Cancel</Button>
      <Button 
      size="large"
      type="primary"
      className="mt-4 md:ml-6 ml-4"
      >Save Response</Button>
    </Card>
  );
};
export default MySunEditor;
