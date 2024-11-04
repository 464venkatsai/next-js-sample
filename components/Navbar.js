import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between w-12/12 bg-blue-950 px-10 py-5'>
        <div className="logo font-bold text-xl">
            <span>Facebook</span>
        </div>
        <ul className='flex gap-10 font-sans'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
