import React, { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';
const ToolsCard = ({digiTool,carts,setCarts}) => {
    const [addCart,setAddCart]=useState(false);
    const handleAddCart=()=>{
      setAddCart(true)
      const cartFind=carts.find(item=>item.id === digiTool.id);
      if(cartFind){
        toast.error(`${digiTool.title} Already Add`)
         return
      }
      setCarts([...carts,digiTool])
      toast.success(`${digiTool.title} Added To Cart`)
    }
    return (
        <div>
            <div  className='max-w-96 bg-[#FFF] shadow pt-5 pb-4 px-6 rounded-3xl transform hover:scale-105 transition  duration-500 '>
                <div className='flex justify-end'>
                <h4 className={`flex justify-center items-center
                   ${
                    digiTool.tagType === 'Best seller'
                    ? "bg-[#FEF3C6] text-[#BB4D00]"
                    :digiTool.tagType === 'Popular'
                    ? "bg-[#E1E7FF] text-[#9514FA]"
                    :digiTool.tagType ==='New'
                    ? "bg-[#DBFCE7] text-[#0A883E]"
                    : "bg-[#DBFCE7] text-[#0A883E]"
                   }
                  px-4 py-2 rounded-full`}>{digiTool.tag}</h4>
                </div>
                <div className='space-y-3'>
                <div className='border border-gray-200 rounded-full w-14 h-14  flex justify-center items-center'>
                 <h3 className='text-3xl'>{digiTool.icon}</h3>
                </div>
                <h3 className='font-bold text-2xl'>{digiTool.title}</h3>
                <p className='text-[#627382]'>{digiTool.description}</p>
                <p className='font-bold text-2xl'>${digiTool.price} <span className='text-base text-[#627382]'>/{digiTool.month}</span></p>
                <ul>
                <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> {digiTool.features[0]}</li>
                <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/>{digiTool.features[1]}</li>
                <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/>{digiTool.features[2]}</li>
                </ul>
                </div>
                
               <button onClick={handleAddCart} className='btn w-full rounded-3xl mt-4 mb-8 bg-linear-to-r
              from-[#4F39F6] to-[#9514FA] py-4 text-white'>{addCart ? 'Added to cart ' : 'Buy Now' }</button></div>
             
        </div>
    );
};

export default ToolsCard;