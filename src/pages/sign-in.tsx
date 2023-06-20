import { SignIn } from "@clerk/nextjs";

import { useUser } from '@clerk/clerk-react'

function ExtractUser() : string {
  const { isSignedIn, user } = useUser();
  if(!isSignedIn || !user.username) {
    return "No User";
  }
  return `${user.username}`
}



const SignInPage = () => (
  <>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" 
    
    redirectUrl={`/user/[${ExtractUser()}]`}
    />
  </>
  );


export default SignInPage;