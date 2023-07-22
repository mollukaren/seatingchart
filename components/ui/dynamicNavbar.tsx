import Link from "next/link"
import { dashboardConfig } from "@/config/dashboard"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/ui/mainNav"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import { type DashboardConfig } from "@/types"
import { useEffect, useState } from "react"

export default function DashboardLayout() {
  const { user } = useUser();
  const [signedInDashboardConfig, setSignedInDashboardConfig] = useState<DashboardConfig>(dashboardConfig);

  useEffect(() => {
    const updatedMainNav = [...signedInDashboardConfig.mainNav];
    if (user) {
      updatedMainNav.unshift({ title: "Dashboard", href: '/dashboard' });      
    }
    setSignedInDashboardConfig(prevConfig => ({
      ...prevConfig,
      mainNav: updatedMainNav,
    }));
  }, [user]);


  return (
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          
          <SignedIn>
            {/* Mount the UserButton component */}
            
            <MainNav items={signedInDashboardConfig.mainNav} />
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <MainNav items={dashboardConfig.mainNav} />
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
  )
}
