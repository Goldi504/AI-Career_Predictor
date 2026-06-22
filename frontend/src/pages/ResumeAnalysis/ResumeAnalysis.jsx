import { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  uploadResume,
} from "../../api/resumeApi";

const ResumeAnalysis = () => {

  const [file,setFile] =
  useState(null);

  const [loading,setLoading] =
  useState(false);

  const [result,setResult] =
  useState(null);

  const onDrop = (
    acceptedFiles
  ) => {

    setFile(
      acceptedFiles[0]
    );

  };

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop,
    accept:{
      "application/pdf":[
        ".pdf"
      ]
    }
  });

  const handleUpload =
  async()=>{

    if(!file){

      toast.error(
        "Select resume"
      );

      return;
    }

    try{

      setLoading(true);

      const formData =
      new FormData();

      formData.append(
        "resume",
        file
      );

      const res =
      await uploadResume(
        formData
      );

      setResult(
        res.data
      );

      toast.success(
        res.message
      );

    }catch(error){

      toast.error(
        error.response?.data
        ?.message ||
        "Upload failed"
      );

    }finally{

      setLoading(false);

    }

  };

  return (

    <DashboardLayout>

      <div
      className="
      max-w-5xl
      mx-auto
      "
      >

        <div
        className="
        mb-8
        "
        >

          <h1
          className="
          text-4xl
          font-bold
          "
          >
            Resume Analysis
          </h1>

          <p
          className="
          text-slate-400
          mt-2
          "
          >
            Upload your resume and
            analyze skills.
          </p>

        </div>

        {/* Upload Card */}

        <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        "
        >

          <div

          {...getRootProps()}

          className="
          border-2
          border-dashed
          border-indigo-500
          rounded-3xl
          p-16
          text-center
          cursor-pointer
          "
          >

            <input
            {...getInputProps()}
            />

            <h3
            className="
            text-2xl
            font-semibold
            "
            >
              Drag & Drop Resume
            </h3>

            <p
            className="
            text-slate-400
            mt-2
            "
            >
              PDF only
            </p>

            {
              file &&
              (
                <p
                className="
                mt-4
                text-green-400
                "
                >
                  {
                    file.name
                  }
                </p>
              )
            }

          </div>

          <button

          onClick={
            handleUpload
          }

          className="
          mt-6
          w-full
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          "
          >

            {
              loading
              ?
              "Uploading..."
              :
              "Upload Resume"
            }

          </button>

        </div>

        {/* Results */}

        {
          result &&
          (
            <div
            className="
            mt-8
            grid
            md:grid-cols-2
            gap-6
            "
            >

              <div
              className="
              bg-slate-900
              p-6
              rounded-3xl
              "
              >

                <h3>
                  Resume Uploaded
                </h3>

                <p
                className="
                text-green-400
                mt-2
                "
                >
                  Success
                </p>

              </div>

              <div
              className="
              bg-slate-900
              p-6
              rounded-3xl
              "
              >

                <h3>
                  Resume URL
                </h3>

                <p
                className="
                mt-2
                break-all
                "
                >
                  {
                    result.resumeUrl
                  }
                </p>

              </div>

            </div>
          )
        }

      </div>

    </DashboardLayout>

  );
};

export default ResumeAnalysis;