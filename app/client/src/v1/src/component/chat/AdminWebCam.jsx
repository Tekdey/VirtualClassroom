import React from 'react'
import PropType from "prop-types"

const AdminWebCam = () => {
  return (
    <div className='flex flex-col items-center m-3'>
        <div className='bg-red-500 h-32 w-32'>
            {/* wbc flux */}
        </div>
    </div>
  )
}

AdminWebCam.PropType = {
    name: PropType.string
}

export default AdminWebCam