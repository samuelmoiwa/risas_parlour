import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import location_icon from '../assets/location_icon.svg'
import user_icon from '../assets/user_icon.svg'
import shopping_bag from '../assets/shopping_bag_icon.svg'
import logo from '../assets/logo_no_background.png'
import heart_icon from '../assets/heart_icon.svg'

const TopNavBar = () => {
  return (
    <div className='pb-6 bg-yellow-300 flex  flex-col items-center w-full'>

        <div className='sm:w-10/12 w-full flex sm:flex-row flex-col sm:justify-between mt-4 px-2 sm:p-0'>
            <div className='flex flex-start text-gray-800 sm:mb-0 mb-4 '>
                welcome to Risa's Palour
            </div>

            <div className='flex flex-row gap-3'>
                <NavLink className='flex flex-row text-gray-800'>
                    <img
                        className="block h-6 w-6"
                        src={location_icon}
                        alt="Your Company"
                    />
                    <p>Store Locator</p>
                </NavLink>
                <NavLink className='flex flex-row text-gray-800 border-x border-gray-500 px-3'>
                    <img
                        className="block h-6 w-6"
                        src={shopping_bag}
                        alt="Your Company"
                    />
                    <p>Shop</p>
                </NavLink>
                <NavLink className='flex flex-row text-gray-800'>
                    <img
                        className="block h-6 w-6"
                        src={user_icon}
                        alt="Your Company"
                    />
                    <p>My Account</p>
                </NavLink>
            </div>
        </div>

        <div className='sm:w-10/12 w-full flex sm:flex-row flex-col sm:justify-between items-center mt-8'>
          <NavLink className='flex flex-row px-3'>
              <img
                  className="block h-12 w-auto"
                  src={logo}
                  alt="Your Company"
              />
          </NavLink>

          <div className='flex flex-row items-center justify-center w-full pr-16'>
            <SearchBar />
          </div>

          <div className=' flex flex-row gap-8 sm:mt-0 mt-4'>
            <NavLink className='flex flex-row text-gray-800'>
              <img
                  className="block sm:h-8 sm:w-8 h-6 w-6"
                  src={heart_icon}
                  alt="Your Company"
              />
            </NavLink>

            <NavLink className='flex flex-row text-gray-800'>
              <img
                  className="block sm:h-8 sm:w-8 h-6 w-6"
                  src={user_icon}
                  alt="Your Company"
              />
            </NavLink>

            <NavLink className='flex flex-row text-gray-800'>
              <img
                  className="block sm:h-8 sm:w-8 h-6 w-6"
                  src={shopping_bag}
                  alt="Your Company"
              />
            </NavLink>
          </div>

        </div>

    </div>
  )
}

export default TopNavBar
