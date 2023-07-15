import { api } from "~/utils/api";
import { type AppType } from "next/app";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SiteFooter } from "@/components/ui/site-footer";
import DashboardLayout from "@/components/ui/dynamicNavbar";
import { ThemeProvider } from "@/components/theme-provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (

    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col space-y-6">
          <DashboardLayout/>
          <Component {...pageProps} />
          <SiteFooter className="border-t" />
        </div>
      </ThemeProvider>
    </ClerkProvider>
    
  );
};

export default api.withTRPC(MyApp);
