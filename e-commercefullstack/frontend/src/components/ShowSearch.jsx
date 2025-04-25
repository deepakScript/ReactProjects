import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ShowSearch = () => {
    const { search, setSearch, ShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    // Error handling for context
    if (!ShopContext) {
        console.error("ShopContext is not available");
        return null;
    }

    useEffect(() => {
        setVisible(location.pathname === '/collection');
    }, [location.pathname]);

    if (!ShowSearch || !visible) return null;

    return (
        <div className='py-4 pb-7'>
            <div className='text-center'>
                <div className='relative inline-flex items-center w-full max-w-md mx-auto'>
                    <input 
                        type="text" 
                        value={search || ''}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='search here...'
                        className='w-full py-3 pl-4 pr-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200'
                    />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'>
                        <FaSearch className='h-5 w-5' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSearch;