import React from 'react'
import { Next_Logo } from "@/components/logos/next_logo"
import { Tailwind_Logo } from '@/components/logos/tailwind_logo'
import { PS_logo } from '@/components/logos/planetscale_logo'
import { Clerk_Logo } from '@/components/logos/clerk_logo'
import { TS_Logo } from '@/components/logos/typescript_logo'
import { CT3_Logo } from '@/components/logos/ct3_logo'


const aboutPage = () => {
  return (
    <>
    {/* <!-- Icon Blocks --> */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col gap-y-12 max-w-4xl mx-auto">
        <div className="max-w-full">
          <p className="text-2xl sm:text-lg font-bold text-gray-800 dark:text-gray-200">
            Seating Cheart is: 
          </p>
          <p className="text-lg text-indent: 0.125rem text-decoration-line: line-through text-gray-400"> • a revolution in wedding seating chart creation</p>
          <p className="text-lg"> • a mock application and overglorified airtable API wrapper</p>
          <p className="text-lg text-decoration-line: line-through text-gray-400"> • a fully functioning, production ready tool to use for your next event</p>
        </div>
        <div className="max-w-full">
          Inspired by <a className='font-bold text-gray-800 text-decoration-style: dashed' href='https://www.reddit.com/r/Database/comments/13c5xo4/want_to_build_a_simple_no_code_database_search/'>
            this reddit post</a>, I set out to build an airtable hosting tool that allows users to view their seating charts outside of Airtable. Along the way,
            I learned some things...
        </div>
        <div className="max-w-full">
          {/* <!-- Grid --> */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-6 lg:space-y-10">
              {/* <!-- Icon Block --> */}
              <div className="flex">
                <Next_Logo/>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    NextJS and Vercel
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Seating Cheart is powered by NextJS and hosted by the NextJS overlords at Vercel
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <TS_Logo/>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  TypeScript using tRPC and Zod
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Everything is frustratingly type-safe. 
                  From forms to endpoints, Seating Cheart is built for maintainability
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <Tailwind_Logo/> 
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Tailwind, Shadcn-UI, and Preline
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Utility classes, Radix wrappers, and pre-built hero sections make front end extensibility easier. The nav bar is shamelessly stolen from Shadcn&apos;s Taxonomy
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="space-y-6 lg:space-y-10">
              {/* <!-- Icon Block --> */}
              <div className="flex">
                <PS_logo/>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    PlanetScale and Prisma ORM
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                     I&apos;m not a DevOps engineer. I don&apos;t even play one on TV... yet?
                  </p>
                </div>
              </div>

              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <Clerk_Logo/>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Clerk Auth
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Auth is best left to the pros (but if that&apos;s a dealbreaker, I was just trying to go fast I can do it from scratch if needed, I swear)
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex">
                <CT3_Logo/>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Create-T3-App Generated
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Watching Theo&apos;s 3 hour emoji twitter tutorial saved me many times throughout this build process
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
    </div>
    {/* <!-- End Icon Blocks --> */}
</>
  )
}

export default aboutPage