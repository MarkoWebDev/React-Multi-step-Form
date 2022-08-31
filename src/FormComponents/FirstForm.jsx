import React from "react";

const FirstForm = ({ formValues, onChange }) => {
  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-md  px-24 pt-16 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Person Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="LastName"
          >
            LastName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="LastName"
          ></input>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Form Stepper. All rights reserved.
      </p>
    </div>
  );
};

export default FirstForm;
