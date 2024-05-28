import React from 'react';

function Konto() {
  return (
    <div className='bg-neutral-800 text-white  w-full mt-4  flex flex-row items-center rounded-b-lg '>
      <img className='size-16 flex flex-col pr-4' src='Frame.svg'></img>
      <div className='flex flex-col'>
        <p className='font-inter font-semibold '>Adam Kowalski</p>
        <p className='font-inter font-medium text-neutral-400'>adamkowalski@gmali.com</p>
      </div>
      <button></button>
    </div>
  );
}

export default Konto;
