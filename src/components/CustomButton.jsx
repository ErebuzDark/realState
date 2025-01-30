import React from 'react';

const CustomButton = ({ btnTitle, btnAction }) => {
  return (
    <button onClick={btnAction} type="submit" className="hidden md:block bg-[#343434] hover:bg-slate-900 text-white py-1 px-6 rounded-full cursor-pointer">
      {btnTitle}
    </button>
  );
};

export default CustomButton;
