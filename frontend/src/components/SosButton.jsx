import React from 'react'

const SosButton = () => {

    function handleAmbulanceMessage() {
        setTimeout(() => {
            alert("Your Ambulance is on the way!")
        }, 5000);
    }

  return (
    <div className='h-100 w-100 bg-blue-600 rounded-full absolute bottom-0 m-6 cursor-pointer ' onClick={handleAmbulanceMessage} >
        <p className='text-white p-6 hover:p-7 transition-all' >SOS</p>
    </div>
  )
}

export default SosButton