import React from "react";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import "./dropper.css";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderWidth: 2,
  borderRadius: "50%",
  borderColor: "#d0d0d0",
  borderStyle: "dashed",
  backgroundColor: "#ecf0f1",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "200px",
  height: "200px",
  cursor: "pointer",
  marginLeft: "10px",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Dropper = (props) => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <>
      <section className="container">
        <div {...getRootProps({ className: "dropzone", style })}>
          <input {...getInputProps()} />
          <MdCloudUpload className="upload__icon" />
          <p>Click to change photo</p>
        </div>
        <p
          style={{
            color: "#BFBFBF",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Upload JPEG and PNG files only
          <RiErrorWarningFill />
        </p>
      </section>
    </>
  );
};

export default Dropper;
