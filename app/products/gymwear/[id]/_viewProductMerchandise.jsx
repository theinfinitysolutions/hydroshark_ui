'use client';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/utils/store';
import Image from 'next/image';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { IoMdStar } from 'react-icons/io';
import { FaWind } from 'react-icons/fa6';
import { TbStretching } from 'react-icons/tb';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { PiCoinsFill } from 'react-icons/pi';
import Spinner from '@/components/Spinner';
import instance from '@/utils/instance';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

// Dummy data for ratings
const ratings = [
  { title: '5 stars', value: 5, rating: 125 },
  { title: '4 stars', value: 4, rating: 25 },
  { title: '3 stars', value: 3, rating: 10 },
  { title: '2 stars', value: 2, rating: 20 },
  { title: '1 stars', value: 1, rating: 40 },
];

// Updated reviews data with more detailed reviews
const reviews = [
  {
    name: 'John D.',
    rating: 5,
    description:
      "The fabric quality is exceptional, and the fit is perfect. I've been using it for both gym sessions and casual wear. The moisture-wicking feature really works well during intense workouts, and the material stays fresh even after multiple washes.",
  },
  {
    name: 'Sarah M.',
    rating: 4,
    description:
      "Love the design and comfort level of this product. The breathable fabric makes it perfect for high-intensity training. The only minor issue is that the sleeves are slightly longer than expected, but it doesn't affect the overall performance.",
  },
  {
    name: 'Mike R.',
    rating: 5,
    description:
      "Best workout gear I've purchased in years! The anti-odor technology actually works, and the material feels premium. I've been wearing it for both weightlifting and cardio sessions. Definitely worth the investment.",
  },
  {
    name: 'Emma K.',
    rating: 4,
    description:
      'Really impressed with the quality and durability. After three months of regular use, it still looks new. The ventilation is great, and the fit is true to size. The price point is justified by the premium quality.',
  },
  {
    name: 'David L.',
    rating: 5,
    description:
      'Perfect blend of style and functionality. The material is lightweight yet durable, and the design is modern. I particularly appreciate the attention to detail in stitching and the overall construction quality.',
  },
];

// Recommended products data
const recommendedProducts = [
  {
    id: 2,
    product_title: 'Elite Performance Tank',
    slug: 'elite-performance-tank',
    selling_price: 999.0,
    mrp: 1499.0,
    discount: 33.33,
    image: '/hoodiesample1.png',
    rating: 4.6,
  },
  {
    id: 3,
    product_title: 'Pro Training Shorts',
    slug: 'pro-training-shorts',
    selling_price: 1299.0,
    mrp: 1799.0,
    discount: 27.79,
    image: '/hoodiesample2.png',
    rating: 4.8,
  },
  {
    id: 4,
    product_title: 'Compression Leggings',
    slug: 'compression-leggings',
    selling_price: 1599.0,
    mrp: 2199.0,
    discount: 27.28,
    image: '/hoodiesample3.png',
    rating: 4.7,
  },
  {
    id: 5,
    product_title: 'Training Joggers',
    slug: 'training-joggers',
    selling_price: 1799.0,
    mrp: 2499.0,
    discount: 28.01,
    image: '/hoodiesample.png',
    rating: 4.9,
  },
];

// Updated product sections with more sizes
const updatedProductSections = [
  {
    id: 1,
    section_title: 'XS',
    size: 'XS',
    chest_measurement: '36',
    price: 2499.0,
    discounted_amount: 1799.0,
    hydroshark_points_on_purchase: 25,
    in_stock: true,
    colors: [
      { color_name: 'Black', color_code: '#000000', in_stock: true },
      { color_name: 'Navy', color_code: '#000080', in_stock: true },
      { color_name: 'Grey', color_code: '#808080', in_stock: true },
      { color_name: 'Olive', color_code: '#556B2F', in_stock: true },
      { color_name: 'Maroon', color_code: '#800000', in_stock: true },
    ],
  },

  {
    id: 2,
    section_title: 'S',
    size: 'S',
    chest_measurement: '38',
    price: 2499.0,
    discounted_amount: 1799.0,
    hydroshark_points_on_purchase: 25,
    in_stock: true,
    colors: [
      { color_name: 'Black', color_code: '#000000', in_stock: true },
      { color_name: 'Navy', color_code: '#000080', in_stock: true },
      { color_name: 'Grey', color_code: '#808080', in_stock: true },
      { color_name: 'Olive', color_code: '#556B2F', in_stock: true },
      { color_name: 'Maroon', color_code: '#800000', in_stock: true },
    ],
  },
  // Add more sizes...
];

// Update the dummyProduct with new sections
const dummyProduct = {
  id: 1,
  product_title: 'Performance Training Hoodie',
  slug: 'performance-training-hoodie',
  sku: 'GTM001',
  product_description:
    'Premium quality training hoodie designed for maximum comfort and performance. Features moisture-wicking fabric and ergonomic fit.',
  mrp: 2499.0,
  selling_price: 1799.0,
  discount: 28.01,
  rating: 4.7,
  weight: '400g',
  hydroshark_points_accepted: true,
  product_images: [
    { image: { cloudfront: '/hoodiesample.png' }, is_primary: true },
    { image: { cloudfront: '/hoodiesample1.png' } },
    { image: { cloudfront: '/hoodiesample2.png' } },
  ],
  product_sections: updatedProductSections,
};

const ViewProductMerchandise = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { addToCart, cart, setCartSidebar } = useStore();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getProductById = (id) => {
    setLoading(true);
    instance
      .get(`/merchandise/merchandise/slug/${id}/`)
      .then((res) => {
        console.log('products', res.data);
        setSelectedProduct(res.data);
        setCurrentImage(res.data.product_primary_image.image.cloudfront);
        // Set initial section and color if available
        if (res.data.product_sections && res.data.product_sections.length > 0) {
          setSelectedSection(res.data.product_sections[0]);
          if (res.data.product_sections[0].colors && res.data.product_sections[0].colors.length > 0) {
            setSelectedColor(res.data.product_sections[0].colors[0].product_color.id);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log('err', err);
      });
  };

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id]);

  const addToCartHandler = (item) => {
    if (!selectedSection || !selectedColor) {
      setError(true);
      setErrorMessage('Please select a size and color');
      return;
    }

    setError(false);
    setErrorMessage('');

    const cartItem = {
      id: selectedSection.id,
      product_title: selectedProduct.product_title,
      image: selectedProduct.product_primary_image.image.cloudfront,
      section: selectedSection,
      color: selectedColor,
      product_quantity: 1,
      selling_price: selectedSection.discounted_amount,
      product_type: 'merchandise',
      size: selectedSection.size,
    };

    if (cart.length > 0) {
      const found = cart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.section.id === selectedSection.id &&
          cartItem.color.id === selectedColor.id
      );

      if (found) {
        const updatedCart = cart.map((cartItem) => {
          if (
            cartItem.id === item.id &&
            cartItem.section.id === selectedSection.id &&
            cartItem.color.id === selectedColor.id
          ) {
            return { ...cartItem, product_quantity: cartItem.product_quantity + 1 };
          }
          return cartItem;
        });
        addToCart(updatedCart);
      } else {
        addToCart([...cart, cartItem]);
      }
    } else {
      addToCart([cartItem]);
    }
    setCartSidebar({ show: true });
  };

  if (loading || !selectedProduct) {
    return (
      <div className='w-full h-[80vh] bg-[#f0f2f4] flex justify-center items-center'>
        <Spinner loading={loading} size={48} color='#000000' />
      </div>
    );
  }

  return (
    <div className='bg-[#f0f2f4] w-full min-h-screen relative overflow-y-scroll flex flex-col items-start'>
      {/* Main Product Section */}
      <div className='w-full h-[90vh] relative flex flex-col items-start'>
        {/* Back Button */}
        <div className='absolute right-4 top-4 z-20'>
          <button onClick={() => router.back()} className='flex items-center gap-x-2'>
            <IoIosArrowRoundBack className='text-black lg:text-white text-3xl' />
            <p className='text-black lg:text-white mt-1'>Back</p>
          </button>
        </div>

        {/* Product Display */}
        <div className='flex flex-col lg:flex-row justify-between items-center h-full w-full'>
          {/* Left Section - Product Images */}
          <div className='w-full lg:w-7/12 h-[60vh] lg:h-full flex flex-col bg-[#f0f2f4] items-center justify-center relative'>
            <div className='absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]'></div>

            {/* Main Product Image */}
            <div className='flex h-[45vh] lg:h-[55vh] w-full relative'>
              <Image
                src={currentImage}
                alt={selectedProduct.product_title}
                fill
                style={{ objectFit: 'contain' }}
                className='object-contain scale-110'
              />
            </div>

            {/* Thumbnail Images */}
            {selectedProduct.product_images && selectedProduct.product_images.length > 0 && (
              <div className='absolute left-4 top-[52.5vh] lg:top-4 px-2 py-2 lg:py-4 rounded-xl bg-gray-300 flex flex-row lg:flex-col items-center lg:items-start gap-x-6 lg:gap-x-0 gap-y-[2.5vh]'>
                {selectedProduct.product_images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(image.image.cloudfront)}
                    className={`w-[5vh] h-[5vh] relative rounded-full border-2 overflow-hidden ${
                      currentImage === image.image.cloudfront ? 'border-white' : 'border-gray-400'
                    }`}
                  >
                    <Image
                      src={image.image.cloudfront}
                      alt={`Product view ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Section - Product Details */}
          <div className='w-full lg:w-5/12 h-full py-8 lg:py-0 bg-[#181818] relative flex flex-col items-start pl-8 pr-[5vw] justify-center'>
            {/* Product Title and Description */}
            <div className='flex flex-col items-start'>
              <p className='text-white text-sm'>HYDROSHARK</p>
              <h1 className='text-[3rem] leading-[3rem] my-0 lg:mt-4 font-[500] text-white'>
                {selectedProduct.product_title}
              </h1>
              <h2 className='text-[1rem] text-white lg:mt-4'>{selectedProduct.product_description}</h2>
            </div>

            {/* Size Selection */}
            <div className='flex flex-col w-full items-start mt-[5vh]'>
              <p className='text-white mb-2'>Size</p>
              <div className='flex gap-x-4'>
                {selectedProduct.product_sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section)}
                    className={`px-6 py-2 border ${
                      selectedSection.id === section.id ? 'bg-white text-black' : 'border-white text-white'
                    }`}
                  >
                    {section.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className='flex flex-col w-full items-start mt-4'>
              <p className='text-white mb-2'>Color</p>
              <div className='flex flex-wrap gap-3'>
                {selectedSection.colors.map((color) => (
                  <button
                    key={color.color_name}
                    onClick={() => setSelectedColor(color.product_color.id)}
                    className={`w-10 h-10 rounded-full border-2 relative ${
                      selectedColor === color.product_color.id ? ' border-white  ' : 'border-gray-400'
                    }`}
                    style={{ backgroundColor: color.product_color.color_code }}
                  >
                    {selectedColor === color.product_color.id && (
                      <span className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white'>
                        {color.product_color.color_name}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price and Points */}
            <div className='flex flex-col lg:flex-row items-start lg:items-center lg:justify-between w-full mt-12'>
              {parseInt(selectedSection.discount) > 0 ? (
                <div className='flex items-center gap-x-2'>
                  <p className='text-red-400 text-lg line-through'>₹{selectedSection.price}/-</p>
                  <p className='text-white text-lg'>₹{selectedSection.discounted_amount}/- </p>
                </div>
              ) : (
                <div className='flex items-center gap-x-2'>
                  <p className='text-white text-lg'>₹{selectedSection.discounted_amount}/- </p>
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCartHandler(selectedProduct)}
              className='mt-8 w-8/12 py-3 bg-black text-white border border-white hover:bg-white hover:text-black transition-colors'
            >
              Add to Cart
            </button>

            {error && <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>}

            {/* Product Features */}
            <div className='absolute bottom-4 w-full left-0 flex justify-center lg:justify-start gap-x-8 px-8'>
              <div className='flex items-center'>
                <FaWind className='text-white text-lg' />
                <p className='text-sm text-white ml-2'>Breathable Fabric</p>
              </div>
              <div className='flex items-center'>
                <TbStretching className='text-white text-lg' />
                <p className='text-sm text-white ml-2'>No Shrinkage</p>
              </div>
              <div className='flex items-center'>
                <MdOutlineHealthAndSafety className='text-white text-lg' />
                <p className='text-sm text-white ml-2'>Anti Odour</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className='w-full bg-[#181818] px-[7.5vw] py-[5vh]'>
        <div className='flex flex-col items-start w-full'>
          <h2 className='text-2xl text-white font-semibold mb-8'>Ratings and Reviews</h2>

          {/* Rating Bars */}
          <div className='flex flex-col w-full mb-12'>
            {ratings.map((rating, index) => (
              <div key={index} className='flex items-center w-full mb-2'>
                <div className='w-9/12 lg:w-[30vw] h-3 bg-black rounded-full border border-white'>
                  <div style={{ width: `${rating.rating / 2}%` }} className='h-full bg-white rounded-full' />
                </div>
                <p className='text-white ml-4'>{rating.title}</p>
              </div>
            ))}
          </div>

          {/* Reviews List */}
          <div className='w-full'>
            {reviews.map((review, index) => (
              <div key={index} className='flex flex-col lg:flex-row mb-8 pb-8 border-b border-gray-700'>
                <div className='lg:w-1/4'>
                  <div className='flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
                      <span className='text-black font-semibold'>{review.name[0]}</span>
                    </div>
                    <p className='text-white ml-3'>{review.name}</p>
                  </div>
                  <div className='flex mt-2'>
                    {[...Array(review.rating)].map((_, i) => (
                      <IoMdStar key={i} className='text-white' />
                    ))}
                  </div>
                </div>
                <div className='lg:w-3/4 mt-4 lg:mt-0'>
                  <p className='text-white'>{review.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      {/* <div className='w-full bg-[#f0f2f4] px-[7.5vw] py-[5vh]'>
        <h2 className='text-2xl font-semibold mb-8 text-black'>Recommended Gymwear</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {recommendedProducts.map((product) => (
            <Link href={`/products/gymwear/${product.id}`} key={product.id}>
              <div className='bg-white border border-gray-400 rounded-lg overflow-hidden hover:shadow-lg transition-all group'>
                <div className='relative h-64 w-full overflow-hidden'>
                  <Image
                    src={product.image}
                    alt={product.product_title}
                    fill
                    className='object-contain transform transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
                </div>
                <div className='p-4'>
                  <h3 className='font-semibold text-black'>{product.product_title}</h3>
                  <div className='flex items-center gap-2 mt-2'>
                    <div className='flex items-center'>
                      <FaStar className='text-yellow-400' />
                      <span className='ml-1 text-sm text-black'>{product.rating}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 mt-2'>
                    <span className='text-lg font-bold text-black'>₹{product.selling_price}</span>
                    <span className='text-gray-500 line-through'>₹{product.mrp}</span>
                    <span className='text-green-600'>{product.discount}% OFF</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ViewProductMerchandise;
