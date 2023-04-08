import { useState } from 'react'

export function App() {

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-[#DDDDDD]">
        <div className="w-[31.25rem] h-[12.8125rem] bg-white">
          <div className="p-6 flex flex-col gap-8">
            <h1 className='font-roboto font-bold text-[22px] leading-[22.78px]'>Welcome to CodeLeap network!</h1>
          
            <form className='flex flex-col gap-2'>
              <label htmlFor="username">Please enter your username</label>
              <input 
                type="text" 
                id='username' 
                name='username'
                className='border border-[#777777] rounded-lg outline-none'
              />

              <div className="w-full h-auto mt-2 flex items-center justify-end">
                <button 
                  className='w-[6.9375rem] h-8 text-white bg-[#7695EC] rounded-lg' 
                  type="submit"
                >
                  ENTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
