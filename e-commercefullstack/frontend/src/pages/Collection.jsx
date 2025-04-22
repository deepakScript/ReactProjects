import React, { useContext, useEffect, useState } from 'react'
import ShowSearch from '../components/ShowSearch'
import { ShopContext } from '../context/ShopContext'
import Product from './Product';
import Item from '../components/Item';

const Collection = () => {
  const { products, search, showsearch } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;


  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (search && showsearch) {
      filtered = filtered.filter((Product) =>
        Product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((Product) => category.includes(Product.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((Product) => subCategory.includes(Product.subCategory));
    }

    return filtered;
  }

  const applySorting = (productList) => {
    switch (sortType) {
      case "low":
        return productList.sort((a, b) => a.price - b.price);
      case "high":
        return productList.sort((a, b) => b.price - a.price);
      default:
        return productList
    }
  }


  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered)

    setFilteredProducts(sorted)
    setCurrentPage(1)

  }, [category, subCategory, sortType, products, search, showsearch])


  const getPaginationProducts = () => {
    const startIndex = (currentPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    return filteredProducts.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredProducts.length / itemPerPage)
  return (
    <div className='max-padd-container !px-0'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16 '>
        <div className='min-w-72 bg-primary p-4 pl-6 rounded-xl
        lg:pl-12 rounder-r-xl'>
          <ShowSearch />
          <div className='pl-5 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Men", "Women", "kids"].map((cat) => (
                <label key={cat} className='flex gap-2 medium-14 textgray-500'>
                  <input type="checkbox" value={cat}
                    className='w-3'
                    onChange={(e) => toggleFilter(e.target.value, setCategory)} />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className='pl-5 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Types</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["TopWear", "BottomWear", "FootWear"].map((subCat) => (
                <label key={subCat} className='flex gap-2 medium-14 text-gray-30'>
                  <input type="checkbox" value={subCat}
                    className='w-3'
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory)} />
                  {subCat}
                </label>
              ))}
            </div>
          </div>
          <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Sort By</h5>
            <select onChange={(e) => setSortType(e.target.value)}
              className='border border-slate-900/5 outline-none text-gray-30 medium-14
            h-8 w-full rounded px-2'
              name="" id="">
              <option value="relevent">Relevent</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* right side */}
        <div className='bg-primary p-4 rounded-l-xl '>
          <div className='grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
            {
              getPaginationProducts().length > 0 ? (
                getPaginationProducts().map((product) => (
                  <Item product={product} />
                ))
              ) : (
                <p className='capatalise'>No Products found for selectd filters</p>
              )
            }
          </div>

          {/* paginations */}
          <div>
            <button disabled={currentPage === 1} onClick={() =>
              setCurrentPage((prev) => prev - 1)}
              className={`${currentPage === 1 && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
            >Previous</button>
            {Array.from({ length: totalPages },
              (_, index) => (
                <button key={index + 1} onClick={() =>
                  setCurrentPage(index + 1)
                }
                  className={`${currentPage === index + 1 && "bg-tertiary text-white"} btn-light !py-1 !px-3`}
                >
                  {index + 1}

                </button>
              )
            )}

            <button disabled={currentPage === totalPages} onClick={() =>
              setCurrentPage((prev) => prev + 1)}
              className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
            >Next</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Collection
