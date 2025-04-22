import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ShowSearch = () => {
    const {search, setSearch, ShowSearch} = useContext(ShopContext);
    console.log(search);
    
    const [visible, setVisible] = useState(false);
    const location = useLocation();


    useEffect(() => {
        if(location.pathname === '/collection') {
            setVisible(true);
        }else{
            setVisible(false);
        }
    }
    , [location]);

  return ShowSearch && visible ? (
    <div className='py-4 pb-7'>
      <div className='text-center'>
        <div className='inline-flex items-center justify-center
        px-3 py-1.5 rounded-full bg-white overflow-hidden
        w-full'>
            <input type="text" value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search here....'
             />
             <div>
                <FaSearch className='cursor-pointer' />
             </div>
        </div>
      </div>
    </div>
  ): null;
}

export default ShowSearch;
