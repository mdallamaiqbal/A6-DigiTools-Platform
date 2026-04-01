import React, { use} from 'react';
import ToolsCard from './ToolsCard';

const Tools = ({digiToolsPromise,carts,setCarts}) => {
   const digiTools=use(digiToolsPromise);
    
    return (
        <div className='lg:max-w-7xl mx-auto flex justify-center mt-10'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
            {
              digiTools.map((digiTool,index)=> <ToolsCard key={index} digiTool={digiTool} carts={carts} setCarts={setCarts} />  )
            }
           </div>
        </div>
    );
};

export default Tools;