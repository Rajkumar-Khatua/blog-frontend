import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const CreatePostPage = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        placeholder: "Write your post here...",
        readOnly: true,
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            ["link", "image", "code-block"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
          ],
        },
      });

      quill.on("text-change", (delta, oldDelta, source) => {
        // Handle text changes if needed
      });
    }
  }, []);

  const handleSave = () => {
    if (quillRef.current) {
      const content = quillRef.current.firstChild.innerHTML;
      // Send 'content' to your backend for storage or further processing
      console.log(content);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Create New Post
      </h2>
      <div className="mb-4" ref={quillRef} style={{ height: "400px" }} />
      <div className="text-center">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full font-bold"
        >
          Save Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostPage;
