import React from "react";
import dropzone from "@/components/dropzone";

function Report() {
  return (
    <>
      <div className="">
        <div className="flex justify-between p-10">
          <div>
            <h1 className="mb-5 font-semibold">Organization Name</h1>
            <input
              type="text"
              placeholder="Enter Organization Name"
              className="h-10"
            />
          </div>
          <div>
            <h1 className="mb-5 font-semibold">Date</h1>
            <input type="date" />
          </div>
          <div>
            <h1 className="mb-5 font-semibold">Report Title</h1>
            <input
              type="text"
              placeholder="Enter Report Title"
              className="p-[6px]"
            />
          </div>
          <div>
            <h1 className="mb-5 font-semibold">Reported By</h1>
            <input
              type="text"
              placeholder="Reporting Officer"
              className="p-2"
            />
          </div>
        </div>

        <div className="p-10">
          <h1 className="mb-5 font-semibold">Executive Summary</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className=" w-full p-2 bg-gray-100 border-gray-300"
          ></textarea>
        </div>

        <div className="p-10">
          <h1 className="mb-5 font-semibold">Introduction</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className=" w-full p-2 bg-gray-100 border-gray-300"
          ></textarea>
        </div>
      </div>

      <dropzone />
    </>
  );
}

export default Report;
