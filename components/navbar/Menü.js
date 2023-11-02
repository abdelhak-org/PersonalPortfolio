import { useState } from "react"


const Menü = () => {
  const [show, setShow] = useState(false);
    
  return (
    <div
    onClick={()=> setShow(!show)}
    className='w-20 block md:hidden border text-center p-4 text-white fixed top-4 right-4  '>
      open
    </div>
  )
}

export default Menü
