import React from 'react';

const SubmitButton = ({ isValid, onSubmit }) => {
  return (
    <>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full text-lg font-semibold bg-[#36bc9f] border border-[#36bc9f] hover:opacity-90 py-3 px-4 focus:outline-none rounded-xl focus:ring-2 cursor-pointer transition-colors duration-300 ${
          isValid
            ? ' text-white'
            : 'opacity-50 text-white cursor-pointer'
        }`}
      >
        See My Results
      </button>

      {/* Error Message */}
      {!isValid && (
        <p className="text-xs text-center text-gray-500 mt-2">
          Please fill out all required fields to enable the button.
        </p>
      )}
    </>
  );
};

export default SubmitButton;