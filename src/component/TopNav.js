import React from "react";

const TopNav = () => {
  
  return (
    <div className="min-h-full">
      <nav className="bg-white border-b">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
            </div>
            <div className="hidden md:block m-auto text-center ">
              <div className="flex items-baseline space-x-4 m-auto text-center ">
                <a href="#" className="text-gray-800 font-xl font-bold px-3 py-2 m-auto text-center"
                   aria-current="page">
                  Blogd
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    
    </div>
  )
}

export default TopNav
