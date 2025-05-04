import React, { useEffect, useRef } from 'react';

const ResumePreview = ({ htmlAndCss }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(htmlAndCss);
      doc.close();
    }
  }, [htmlAndCss]);

  return (
    <div className="w-[210px] h-[297px] border rounded overflow-hidden shadow-md">
      <iframe
        ref={iframeRef}
        title="Resume Preview"
        style={{
          width: '595px',      // Full A4 width in pixels at 72 DPI
          height: '842px',     // Full A4 height
          transform: 'scale(0.45)', // Shrink it visually
          transformOrigin: 'top left',
          pointerEvents: 'none',   // Prevent mouse interaction inside iframe
          border: 'none',
        }}
      />
    </div>
  );
};

export default ResumePreview;
