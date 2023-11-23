'use client'

import { useTheme } from "next-themes"
import { useEffect , useState} from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
    const {theme , setTheme } = useTheme();
    const [isClient, setIsClient] = useState(false)
    
    useEffect(()=>{
    
    setIsClient(true)
    
    }, [])
    if(!isClient) { 
      return null
    }
  return (
    <div className="w-12  dark:bg-slate-900 bg-slate-100 px-4 rounded-md py-2
    flex justify-center items-center
    " >
        {
            theme === 'dark' 
            ? <button className=" bg-transparent " onClick={()=>setTheme('light')} ><IoSunny className="text-xl"  />
            </button>
            : <button className="bg-transparent " onClick={()=> setTheme('dark')}> <FaMoon className="text-xl"  />
            </button>
        }
    </div>
  )
}

export default ThemeToggleButton
