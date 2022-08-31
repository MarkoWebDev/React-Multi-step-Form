import React from "react";

const SecondForm = ({ formValues, onChange, option }) => {
  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-md  px-24 pt-16 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Other Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            value={formValues.address}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="State"
          >
            City
          </label>
          <select
            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            name="city"
            onChange={onChange}
            value={formValues.city}
          >
            {option.map((state) => {
              return (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </div>{" "}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Zip"
          >
            Zip
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            name="zip"
            value={formValues.zip}
            onChange={onChange}
            placeholder="Zip"
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

export default SecondForm;
