import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DocsReader() {
  return (
    <div>
      <DocViewer
        documents={[
          {
            uri: "https://res.cloudinary.com/divbski6g/raw/upload/v1704013198/English-course/24-12/docs/personality-adjectives-presentation_88981_eypzpw.pptx",
          },
        ]}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  );
}
