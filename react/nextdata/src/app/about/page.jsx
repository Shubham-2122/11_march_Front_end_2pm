'use client';
import Link from 'next/link';
import React, { useState } from 'react'

function page() {
    
    const [count,setcount] = useState(0)
    
  return (
    <div>
        <Link href="/" >Home</Link> <Link href="/about">About</Link> <Link href="/blog">Blog</Link>
        <h1>Hello this About Page</h1>
        <h1>Count : {count}</h1>
    </div>
  )
}

export default page