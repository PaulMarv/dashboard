import React from 'react'

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-riht h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Settings
          </p>
          <button 
            type='button' 
            onClick={() => {}}
            style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
            >

          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings