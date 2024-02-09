import React from 'react'

const SubButton = ({label}) => {
  return (
    <div className="text-center  justify-center flex mt-4 ">
      <button className="bg-green-500 rounded-md px-5 py-2 text-md">
        {label}
      </button>
    </div>
  );
}

export default SubButton