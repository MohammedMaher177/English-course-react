import React from "react";
import PDFIcon from "../Icons/PDFIcon.jsx";

const DocsReader = () => {
  return (
    <div>
      <PDFIcon />
      <div className="col-md-4 col-sm-12 col-xs-12 text-right wow fadeInRight animated animated">
        <a target="_blank" href="#">
          Technical_Task.pdf
        </a>
        <span>23.09 MB</span>
      </div>
    </div>
  );
};

export default DocsReader;