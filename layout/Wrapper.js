import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="max-w-screen h-full md:w-[50%] md:h-full  text-center relative pt-8 mx-auto md:border md:border-transparent md: border-r-slate-400    text-white  flex flex-col justify-between items-center md:flex-row">
      {children}
    </div>
  )
}

export default Wrapper
