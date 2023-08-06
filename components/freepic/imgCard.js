import Image from "next/image";

const imgCard = ({children}) => {
  return (
     <div
      style={{
      }}
      className="w-full my-1 sm:w-[260px] h-[360px] overflow-hidden bg-black text-blue-600
           border-8 border-pink-400 rounded-md text-center  sm:relative sm:top-24  
           hover:z-10 hover:scale-125  cursor-pointer"
       >
        {children}
    </div>
  )
};

export default imgCard;
