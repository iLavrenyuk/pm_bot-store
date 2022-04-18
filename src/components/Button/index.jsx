import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button className="mt-1 px-6 py-1 bg-amber-400 font-bold rounded-md w-fit" onClick={onClick}>
      {children}
    </button>
  );
};
