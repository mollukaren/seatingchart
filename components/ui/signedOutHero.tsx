import { SignedOut } from '@clerk/nextjs'
import React from 'react'
import Hero from './hero'

const signedOutHero = () => {
  return (
    <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <SignedOut>
            <Hero/>
          </SignedOut>
        </main>
      </div>
  )
}

export default signedOutHero