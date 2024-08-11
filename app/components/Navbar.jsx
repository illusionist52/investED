import React from 'react'

function Navbar() {
  return (
    <nav className=''>
      <ul className='flex h-[8vh] gap-5 items-center justify-around'>
        <h1 className='text-2xl font-bold '>InvestED</h1>
        <li className='font-medium '>Learning modules</li>
        <li className='font-medium '>Expense tracker</li>
        <li className='font-medium '>Goal Based Recommendations</li>
        <li className='font-medium '>InvestMania</li>
        <div></div>
      </ul>
    </nav>
  )
}

export default Navbar