import React from 'react'
import Link from 'next/link'
import { BiLockAlt } from 'react-icons/bi'

const Login = () => {
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img className='mx-auto h-12 w-auto' src="/codeswearcircle.png" alt="Workflow" />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or
            <Link href="/signup" className='font-medium text-pink-600 hover:text-pink-500'> Signup</Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' action="#" method='POST'>
          <input type="hidden" name='remember' value="true" />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label For="email-address" className='sr-only'>Email address</label>
              <input type="email" name="email" id="email-address" autoComplete='email' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm' placeholder='Email address' />
            </div>
            <div>
              <label For="password" className='sr-only'>Password</label>
              <input type="password" name="password" id="password" autoComplete='current-password' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm' placeholder='Password' />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input type="checkbox" id='remember-me' name='remember-me' typeof='checkbox' className='h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded' />
              <label For="remember-me" className='ml-2 block text-sm text-gray-900'>Remember me</label>
            </div>
            <div className='text-sm'>
              <Link href="/forgot" className='font-medium text-pink-600 hover:text-pink-500'>Forgot your password</Link>
            </div>
          </div>

          <div>
            <button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'><BiLockAlt /></span>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login