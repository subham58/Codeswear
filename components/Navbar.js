import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, RemoveFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className="logo mx-3 my-1">
        <Link href={"/"}><Image width={180} height={50} src="/logo.png" alt="" /></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-4 font-bold md:text-sm'>
          <Link href={"/tshirts"}><li>Tshirts</li></Link>
          <Link href={"/hoodies"}><li>Hoodies</li></Link>
          <Link href={"/stickers"}><li>Stickers</li></Link>
          <Link href={"/mugs"}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5 flex">
        <Link href={'/login'}><MdAccountCircle className='text-xl md:text-2xl mx-2' /></Link>
        <button><AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl' /></button>
      </div>
      <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform ${Object.keys(cart).length != 0 ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-xl text-pink-500'><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">

                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle onClick={() => { RemoveFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' /> <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-pink-500' /></div>
              </div>
            </li>
          })}
        </ol>
        <div className='font-bold my-2'>SubTotal: ₹{subTotal}</div>
        <div className="flex">
          <Link href={'/checkout'}><button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />CheckOut</button></Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar