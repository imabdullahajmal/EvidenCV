

function ActionButtons({ onDownload, showDownload }) {
    return (
      <div className="mt-4 flex justify-end">
        {showDownload && (
          <button
            onClick={onDownload}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Download PDF
          </button>
        )}
      </div>
    );
  }
  

  export default ActionButtons