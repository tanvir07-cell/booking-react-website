import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    function getActiveClass(path){
        return location.pathname === path;
    }

  return (
    <div className=' bg-powder-blue-700'>
        <header className='flex justify-between items-center px-4 max-w-[1176px] mx-auto py-4 text-powder-blue-50'>
            <div>
                <h1 className='text-3xl'><span className='text-powder-blue-400 font-bold'>T</span>R | <span className="text-powder-blue-400 font-bold">B</span>
                <span className='relative mx-0 text-center'>O  <svg className='inline mb-2 mx-1 absolute top-[-12%] left-[-1%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="150" height="50">
              <circle cx="10" cy="27" r="8" fill="white" stroke="black" strokeWidth="2" />
              <circle cx="10" cy="27" r="3" fill="black" />
              

              
  {/* <text x="20" y="37" font-family="Arial" font-size="1.875rem" line-height="2.25rem" fill="#F1F9FA" >KING</text> */}
            </svg>
         </span>
           <span className='relative mx-[-3.5%]'>O  <svg className='inline mb-2 mx-1 absolute top-[-12%] left-[-1%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="150" height="50">
              <circle cx="10" cy="27" r="8" fill="white" stroke="black" strokeWidth="2" />
              <circle cx="10" cy="27" r="3" fill="black" />
              

              
  {/* <text x="20" y="37" font-family="Arial" font-size="1.875rem" line-height="2.25rem" fill="#F1F9FA" >KING</text> */}
            </svg>
         </span>
         KING
 
 
</h1>
            </div>

            <div>
                <ul className='flex space-x-6'>
                    <Link to="/" >
                        <li
                        className={`
                        text-xl
                        ${getActiveClass('/') ? 'border-b-2 border-b-powder-blue-200' : ""
                   }
                    `}
                        >Home</li>
                    </Link>
                    <Link to="/offers" >
                        <li className={`
                        text-xl
                        ${getActiveClass('/offers') ? 'border-b-2 border-b-powder-blue-200' : ""
                   }
                    `}>Offers</li>
                    </Link>
                    <Link to="/sign-in">
                        <li 
                        
                        className={`
                        text-xl
                        ${getActiveClass('/sign-in') ? 'border-b-2 border-b-powder-blue-200' : ""
                   }
                    `}
                        >SignIn</li>
                    </Link>
                 
                </ul>
            </div>


        </header>
     
      
    </div>
  )
}

export default Header
