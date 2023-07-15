import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

    publicRoutes: ["/","/about",'/author','/modaltesting/shadcn_navbar',"/sign-in","/sign-up"]
  
  });

export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};