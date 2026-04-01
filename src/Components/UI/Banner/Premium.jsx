import React from 'react';

const Premium = ({setShowTab,carts}) => {
    return (
        <div className='container mx-auto text-center mt-20'>
            <h3 className='font-extrabold text-5xl mb-4'>Premium Digital Tools</h3>
            <p className='text-[#627382] max-w-lg mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
         {/* name of each tab group should be unique */}
          <div className="tabs tabs-box bg-[#FFF] shadow rounded-2xl mt-10 justify-center max-w-72 mx-auto">
          <input onClick={()=>setShowTab('tools')} type="radio" name="my_tabs_1" className="tab w-32 rounded-3xl font-bold checked:text-white text-lg checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA]" aria-label="Products" defaultChecked />
          <input onClick={()=>setShowTab('cart')} type="radio" name="my_tabs_1" className="tab w-32 rounded-3xl font-bold checked:text-white text-lg checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA]" aria-label={`Cart (${carts.length})`} />
          </div>
        </div>
    );
};

export default Premium;