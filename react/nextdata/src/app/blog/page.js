import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <Link href="/" >Home</Link> <Link href="/about">About</Link> <Link href="/blog">Blog</Link>
        <h1>Hello this Blog Pages</h1>
    </div>
  )
}

export default page