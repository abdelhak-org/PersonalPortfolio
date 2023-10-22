import React ,{useState} from 'react'
import { dancingScript, oswald }  from "../../utils/fonts";

const TextInput = ({label , type , placeholder ,onSubmit   }) => {
  const [state, setState] = useState("");
    onSubmit={onSubmit}
  return (
       <div className="w-full h-fit px-8  my-8">
            <label 
              style={{
                fontFamily: dancingScript.style.fontFamily,
              }}
              className=" text-center text-xl my-8 "
            >
              {label}
            </label>
            <input
              onChange={(e) => setState(e.target.value)}
              
              style={{
                fontFamily: oswald.style.fontFamily,
              }}
              className="py-2 px-2 w-full border text-gray-800 tracking-wide
               border-blue-300 rounded-md outline-0"
              type={type}
              name={label}
              placeholder= {placeholder}
            />
          </div>
  )
}

export default TextInput
