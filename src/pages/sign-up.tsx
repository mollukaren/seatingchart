import { SignUp } from "@clerk/nextjs";

import { useUser } from '@clerk/clerk-react'



function ExtractUser() : string {
  const { isSignedIn, user } = useUser();
  if(!isSignedIn || !user.username) {
    return "No User";
  }

  return `${user.username}`
}

const SignUpPage = () => (

  <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" 

  redirectUrl={`/user/[${ExtractUser()}]`}/>

  );


export default SignUpPage;