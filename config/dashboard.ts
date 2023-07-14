import { type DashboardConfig } from "types"

export const signedOutDashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Landing",
      href: "#",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Author",
      href: "/author",
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}


export const signedInDashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Author",
      href: "/author",
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}