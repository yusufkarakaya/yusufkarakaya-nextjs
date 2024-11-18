import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <header className="flex justify-center gap-4 mb-8">
      <Link href="/">
        <Button variant="outline">About</Button>
      </Link>
      -
      <Link href="/projects">
        <Button variant="outline">Projects</Button>
      </Link>
    </header>
  )
}

export default page
