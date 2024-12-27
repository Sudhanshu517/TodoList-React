import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 bg-blue-600 p-2 text-white mb-4">
      <div className="logo font-bold text-2xl mx-5">iTask</div>
      <ul className="flex gap-8 mx-5">
        <li className="hover:text-xl text-lg">Home</li>
        <li className="hover:text-xl text-lg">Your Tasks</li>
      </ul>
    </div>
  )
}

export default Navbar
