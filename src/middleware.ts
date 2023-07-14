import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

    publicRoutes: ["/","/about",'/author','/modaltesting/shadcn_navbar']
  
  });

export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};