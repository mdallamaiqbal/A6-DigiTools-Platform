import React from 'react';

const Cart = ({carts,setCarts}) => {
    const totalPrice =carts.reduce((sum,cart)=>sum+cart.price,0)
    const handlePayment =()=>{
        setCarts([])
    }
    const handleDelete=(cart)=>{
      const filtered=carts.filter(item=>item.id !==cart.id)
      setCarts(filtered)
    }
    return (
        <div className='lg:max-w-7xl mx-auto  mt-10 p-10 shadow rounded-2xl flex flex-col gap-4'>
            <h2 className='font-bold text-2xl mb-6'>Your Cart</h2>
            {
                carts.map(cart=> <div className='p-5 flex justify-between items-center bg-[#F2F2F2] rounded-2xl'>
                     <div className='flex gap-4 items-center'>
                        <div className='border border-gray-200 rounded-full w-14 h-14  flex justify-center items-center'>
                       <h3 className='text-3xl'>{cart.icon}</h3>
                       </div>
                       <div>
                          <h3 className='text-xl font-semibold'>{cart.title}</h3>
                          <p className='text-[#627382] font-medium'>${cart.price}</p>
                       </div>
                     </div>
                     <div><button onClick={()=>handleDelete(cart)} className='font-bold text-[#FF3980]'>Remove</button></div>
                     </div>)
            }
            <div className='flex justify-between items-center px-1'>
                <p className='text-[#627382]'>Total:</p>
                <div className='font-bold text-2xl'>${totalPrice}</div>
            </div>
            <div> <button onClick={handlePayment} className='w-full py-4 font-bold rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed to Checkout</button></div>
        </div>
    );
};

export default Cart;