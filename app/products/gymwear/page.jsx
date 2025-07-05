'use client';
import React, { useState, useEffect } from 'react';
import { IoFilterOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaRegEye } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import instance from '@/utils/instance';
import Spinner from '@/components/Spinner';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

const priceRanges = [
  { minValue: 0, maxValue: 10000, label: 'All Prices', id: 'all' },
  { minValue: 0, maxValue: 1000, label: 'Under ₹1000', id: '0-1000' },
  { minValue: 1000, maxValue: 2000, label: '₹1000 - ₹2000', id: '1000-2000' },
  { minValue: 2000, maxValue: 10000, label: 'Above ₹2000', id: '2000+' },
];

const GymwearPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [filters, setFilters] = useState({
    color: '',
    size: '',
    minPrice: 0,
    maxPrice: 10000,
    sortBy: 'popular',
  });
  const [merchandiseColors, setMerchandiseColors] = useState([]);
  const [activeParams, setActiveParams] = useState({});

  const fetchMerchandiseColors = async () => {
    try {
      const response = await instance.get('/merchandise/merchandise-color/');
      const colors = response?.data?.results || [];
      setMerchandiseColors(colors);
    } catch (error) {
      console.error('Error fetching merchandise colors:', error);
      setMerchandiseColors([]); // Set empty array on error
    }
  };

  useEffect(() => {
    fetchMerchandiseColors();
  }, []);

  const fetchMerchandise = async (params) => {
    try {
      setLoading(true);
      setError(null);

      const response = params
        ? await instance.get('/merchandise/merchandise/', { params })
        : await instance.get('/merchandise/merchandise/');

      const results = response?.data?.results || [];
      setLoading(false);
      return results;
    } catch (error) {
      console.error('Error fetching merchandise:', error);
      setError('Failed to load products. Please try again later.');
      setLoading(false);
      return [];
    }
  };

  const getMerchandise = async (params) => {
    const data = await fetchMerchandise(params);
    const products = Array.isArray(data) ? data : [];
    setProducts(products);
    setFilteredProducts(products);
    // Reset to first page when new data is loaded
    setCurrentPage(1);
  };

  useEffect(() => {
    getMerchandise();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Filter and sort products
  const applyFilters = () => {
    const params = {};

    // Add color filters to params
    if (filters.color) {
      params.color = filters.color;
    }

    // Add size filters to params
    if (filters.size) {
      params.size = filters.size;
    }

    if (filters.priceRange) {
      const priceRange = priceRanges.find((range) => range.id === filters.priceRange);
      if (priceRange) {
        params.price_min = priceRange.minValue;
        params.price_max = priceRange.maxValue;
      }
    }

    // Add sorting to params
    if (filters.sortBy) {
      params.sortBy = filters.sortBy;
    }

    // Call getMerchandise with the updated params
    setActiveParams(params);
    getMerchandise(params);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[80vh] bg-[#f0f2f4] w-full'>
        <Spinner loading={loading} size={48} color='#000000' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center h-[80vh] bg-[#f0f2f4] w-full px-4'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-red-600 mb-4'>Oops! Something went wrong</h2>
          <p className='text-gray-600 mb-6'>{error}</p>
          <button
            onClick={() => {
              setError(null);
              getMerchandise();
            }}
            className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors'
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen relative bg-[#f0f2f4] flex flex-col items-center overflow-hidden px-4 md:px-8'>
      <div className=' z-0 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]'></div>

      {/* Header Section */}
      <div className='mb-8 w-full z-30'>
        <h1 className='text-4xl font-bold mb-2 text-black'>Hydroshark Gymwear</h1>
        <p className='text-gray-600'>Premium fitness apparel for peak performance</p>
      </div>

      {/* Filters and Products Container */}
      <div className='flex flex-col w-full md:flex-row gap-8 z-30  '>
        {/* Filters Sidebar */}
        <div className='md:w-1/4 z-40 '>
          <div className='bg-white border border-gray-400 p-4 rounded-lg shadow-sm '>
            <div className='flex items-center gap-2 mb-4'>
              <IoFilterOutline className='text-xl text-black' />
              <h2 className='text-xl font-semibold text-black'>Filters</h2>
            </div>

            {/* Price Filter */}
            <div className='mb-6 z-40'>
              <h3 className='font-medium mb-2 text-black'>Price Range</h3>
              <select
                className='w-full bg-white text-black p-2 rounded border border-gray-400'
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Filter */}
            <div className='mb-6'>
              <h3 className='font-medium mb-2 text-black'>Size</h3>
              <div className='flex flex-wrap gap-2'>
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-1 border text-black ${
                      filters.size === size ? 'border-blue-600' : 'border-gray-400'
                    }`}
                    onClick={() => {
                      setFilters({ ...filters, size: size });
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            {merchandiseColors && merchandiseColors.length > 0 && (
              <div className='mb-6'>
                <h3 className='font-medium mb-2 text-black'>Color</h3>
                <div className='flex flex-wrap gap-2'>
                  {merchandiseColors.map((color) => (
                    <button
                      key={color?.id || Math.random()}
                      className={`w-6 h-6 rounded-full border-2 ${
                        filters.color === color?.id ? 'border-blue-600' : 'border-gray-400'
                      }`}
                      style={{ backgroundColor: color?.color_code || '#cccccc' }}
                      onClick={() => {
                        setFilters({ ...filters, color: color?.id });
                      }}
                      title={color?.name || 'Color'}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Clear Filters Button */}
            {Object.keys(activeParams).length > 0 && (
              <div className='mt-4'>
                <button
                  className='w-full bg-black text-white p-2 rounded'
                  onClick={() => {
                    setFilters({ color: '', size: '', priceRange: 'all', sortBy: 'popular' });
                    setActiveParams({});
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className='md:w-3/4 mb-12'>
          {/* Sort Options */}
          {/* <div className='flex justify-between items-center mb-6'>
            <p className='text-gray-600'>{filteredProducts.length} Products</p>
            <select
              className='bg-white border text-black border-gray-400 p-2 rounded'
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            >
              <option value='popular'>Most Popular</option>
              <option value='newest'>Newest</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
            </select>
          </div> */}

          {/* Products Grid */}
          {currentProducts.length === 0 ? (
            <div className='text-center py-12'>
              <div className='mb-4'>
                <PiShoppingCartSimpleFill className='text-6xl text-gray-400 mx-auto mb-4' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-black'>No Products Found</h3>
              <p className='text-gray-600 mb-4'>
                {Object.keys(activeParams).length > 0
                  ? 'No products match your current filters. Try adjusting your search criteria.'
                  : 'No products are currently available. Check back later for new arrivals!'}
              </p>
              {Object.keys(activeParams).length > 0 && (
                <button
                  onClick={() => {
                    setFilters({ color: '', size: '', priceRange: 'all', sortBy: 'popular' });
                    setActiveParams({});
                  }}
                  className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors'
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : loading ? (
            <div className='flex justify-center items-center h-[80vh] w-full'>
              <Spinner loading={loading} size={48} color='#000000' />
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[60vh]'>
              {currentProducts.map((product) => (
                <Link href={`/products/gymwear/${product.slug}`} key={product.id}>
                  <div className='bg-white border border-gray-400 rounded-lg overflow-hidden hover:shadow-lg transition-all group'>
                    <div className='relative'>
                      <div className='relative h-64 w-full overflow-hidden bg-gray-100'>
                        {product?.product_primary_image?.image?.cloudfront ? (
                          <Image
                            src={product.product_primary_image.image.cloudfront}
                            alt={product?.product_title || 'Product Image'}
                            fill
                            className='object-contain transform transition-transform z-20 duration-300 group-hover:scale-110'
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className='flex items-center justify-center h-full bg-gray-200'>
                            <span className='text-gray-500'>No Image Available</span>
                          </div>
                        )}
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>

                        <div className='absolute w-full h-full z-0'>
                          <Image
                            src={process.env.NEXT_PUBLIC_API_URL + '/bgasset21.png'}
                            fill
                            className='opacity-60'
                            style={{ objectFit: 'cover' }}
                            alt='Background'
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                      {/* Quick Options Overlay */}
                      <div className='absolute right-2 top-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button className='p-2 bg-white rounded-full shadow-md hover:bg-gray-100'>
                          <PiShoppingCartSimpleFill className='w-5 h-5 text-black' />
                        </button>
                      </div>
                    </div>
                    <div className='px-4 py-2'>
                      <h3 className='font-semibold mt-2 text-black'>
                        {product?.product_title || 'Product Name Not Available'}
                      </h3>

                      <div className='flex items-center mt-2 gap-2'>
                        {product?.product_sections?.[0] ? (
                          <>
                            <span className='text-lg font-bold text-black'>
                              ₹
                              {product.product_sections[0].discounted_amount ||
                                product.product_sections[0].price ||
                                'N/A'}
                            </span>
                            {product.product_sections[0].discount_percentage > 0 && (
                              <>
                                <span className='text-red-500 line-through ml-2'>
                                  ₹{product.product_sections[0].price}
                                </span>
                                <span className='text-green-500 ml-2'>
                                  ({product.product_sections[0].discount_percentage}% off)
                                </span>
                              </>
                            )}
                          </>
                        ) : (
                          <span className='text-lg font-bold text-gray-500'>Price Not Available</span>
                        )}
                      </div>
                    </div>
                    <div className='w-full border-t border-gray-400 py-2 px-4'>
                      <p className='text-sm text-gray-600 mb-1'>Available Sizes:</p>
                      <div className='flex gap-1'>
                        {product?.product_sections &&
                        Array.isArray(product.product_sections) &&
                        product.product_sections.length > 0 ? (
                          product.product_sections.map((item) => (
                            <span
                              key={item?.id || Math.random()}
                              className='text-xs border text-black border-gray-400 px-2 py-1 rounded'
                            >
                              {item?.size || 'N/A'}
                            </span>
                          ))
                        ) : (
                          <span className='text-xs text-gray-500'>No sizes available</span>
                        )}
                      </div>
                    </div>
                    {/* <div className='w-full border-t border-gray-400 py-2 px-4'>
                      <p className='text-sm text-gray-600 mb-1'>Available Colors:</p>
                      <div className='flex gap-1'>
                        {product.product_sections[0].colors.map((item) => (
                          <div
                            key={item.id}
                            className='w-6 h-6 rounded-full border-2 border-gray-400'
                            style={{ backgroundColor: item.product_color.color_code }}
                          />
                        ))}
                      </div>
                    </div> */}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className='mt-8 flex justify-center items-center gap-2'>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${
                  currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:bg-gray-100'
                }`}
              >
                <IoIosArrowBack className='text-xl' />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === index + 1 ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${
                  currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:bg-gray-100'
                }`}
              >
                <IoIosArrowForward className='text-xl' />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GymwearPage;
