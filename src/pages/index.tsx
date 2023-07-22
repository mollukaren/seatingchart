/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { type NextPage } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, Youtube } from 'lucide-react'

const Home: NextPage = () => {
  
  return (
    <div className="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */} 
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">💒 Wedding Seating Charts Are <span className="text-red-700 text-center">Hard</span> 😡</h1>
          <h1 className="mt-16 block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl dark:text-white" >Seating Cheart Makes Viewing Them <span className="text-blue-600 text-center">Easy</span></h1>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"> </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Sign up, log in, or watch the video to learn more.</p>

          {/*  Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
          <SignedOut>
            <Button asChild>
              <Link href="/sign-up">Sign Up 
                <ChevronRight />
              </Link>            
            </Button>
            <Button asChild>
              <Link href="/sign-up">Log In
                <ChevronRight />
              </Link>            
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild>
              <Link href="/dashboard">Dashboard 
                <ChevronRight />
              </Link>
            </Button>
          </SignedIn>
            <Button variant="outline" asChild>
            <a className='flex justify-content: space-between' href="https://youtu.be/IlZnMKYy7aw" target="_blank">
              <Youtube /> &nbsp;&nbsp;Video Walkthrough
            </a>
            </Button>
          </div>
          {/*  End Buttons */}
        </div>
        {/*  End Col */}

        <div className="relative ml-4">
          <img className="hidden w-full rounded-md md:block" src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=550" alt="Wedding Table Hero"/>
          <div className="absolute inset-0 -z-[1] bg--to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

          
        </div>
        {/*  End Col */}
      </div>
      {/*  End Grid */}
    </div>
  )
};

export default Home;
