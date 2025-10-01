import React from 'react';

const SubmitButton = ({ isValid, onSubmit }) => {
  return (
    <>
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full font-medium py-3 px-4 rounded-xl transition-colors duration-300 ${
          isValid
            ? 'bg-[#36bc9f] hover:bg-green-300 text-white'
            : 'bg-green-200 text-white cursor-pointer'
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