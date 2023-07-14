import Link from "next/link"
import { notFound } from "next/navigation"

import { signedInDashboardConfig as initialSignedInDashboardConfig, signedOutDashboardConfig } from "@/config/dashboard"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/ui/mainNav"
import { SiteFooter } from "@/components/ui/site-footer"
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import Hero from "@/components/ui/hero"
import { type DashboardConfig } from "@/types"
import { useEffect, useState } from "react"

interface DashboardLayoutProps {
  children?: React.ReactNode
}


export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { user } = useUser();
  const [signedInDashboardConfig, setSignedInDashboardConfig] = useState<DashboardConfig>(initialSignedInDashboardConfig);

  useEffect(() => {
    const updatedMainNav = [...signedInDashboardConfig.mainNav];
    if (user) {
      updatedMainNav.unshift({ title: "Dashboard", href: `/user/${user.id}/dashboard` });

      
    }
    setSignedInDashboardConfig(prevConfig => ({
      ...prevConfig,
      mainNav: updatedMainNav,
    }));
  }, [user]);


  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          
          <SignedIn>
            {/* Mount the UserButton component */}
            
            <MainNav items={signedInDashboardConfig.mainNav} />
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <MainNav items={signedOutDashboardConfig.mainNav} />
            <div className='flex row padding space-x-2'>
              <nav>
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Sign In
                </Link>
              </nav>
              <nav>
                <Link
                  href="/sign-up"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Sign Up
                </Link>
              </nav>
            </div>
          </SignedOut>
        </div>
      </header>


      <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
          <SignedOut>
            <Hero/>
          </SignedOut>
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}
