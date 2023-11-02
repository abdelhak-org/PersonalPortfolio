import Image from "next/image";

const imgCard = ({children}) => {
  return (
     <div
      className="w-full  sm:w-30 sm:h-60 overflow-hidden mx-auto "
      
       >
        {children}
    </div>
  )
};

export default imgCard;
