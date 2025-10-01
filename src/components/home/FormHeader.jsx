import React from 'react';

const FormHeader = () => {
  return (
    <>
      {/* Dark Mode Button */}
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition bg-white text-[rgb(24,59,73)] border-2 border-[rgb(229,231,235)] cursor-pointer"
      >
        Dark Mode
      </button>

      {/* Logo Container */}
      <div
        className="w-full flex justify-center pt-6 pb-2 mt-3 cursor-pointer bg-[rgb(248,244,244)]"
        role="button"
        onClick={() => window.location.reload()}
      >
        <img
          alt="Logo"
          src="/logo-ketoSlim.png"
          className="h-10"
        />
      </div>
    </>
  );
};

export default FormHeader;