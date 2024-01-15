import { useUploadThing } from "./uploadthing";
import { useRef, useState } from "react";

function App() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const { startUpload } = useUploadThing("profileImage", {
    onClientUploadComplete: (resp) => {
      console.log({ resp });
    },
    onUploadError: (error) => {
      alert(`ERROR! ${error.message}`);
    },
  });

  return (
    <div className="App" style={{ position: "relative" }}>
      <button
        onClick={() => {
          if (fileInputRef.current) fileInputRef.current.click();
        }}
      >
        Select...
      </button>
      <input
        ref={fileInputRef}
        id={"image_upload_input"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          visibility: "hidden",
        }}
        type={"file"}
        accept={".gif,.jpe,.jpg,.jpeg,.svg,.png"}
        onChange={async (e) => {
          if (!e.target.files) return;

          const file = e.target.files[0];
          setFile(file);

          if (file && file.name) {
            const result = await startUpload([file]);
          }
        }}
      />
    </div>
  );
}

export default App;
