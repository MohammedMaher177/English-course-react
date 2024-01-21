import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DocsReader() {
  return (
    <div>
      <DocViewer
        documents={[
          {
            uri: "https://collection.cloudinary.com/divbski6g/ed49afd711e65c1840b9799a1f2ded7b",
          },
        ]}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  );
}
