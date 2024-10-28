import React from 'react'
import Link from 'next/link'
import ShinyButton from '@/components/ui/shiny-button'

const page = () => {
  return (
    <header className="flex justify-center gap-4 mb-8">
      <Link href="/">
        <ShinyButton variant="outline">About</ShinyButton>
      </Link>
      <Link href="/projects">
        <ShinyButton variant="outline">Projects</ShinyButton>
      </Link>
    </header>
  )
}

export default page
