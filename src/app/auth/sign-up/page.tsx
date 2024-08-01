
import SignUpFormprovider from "@/components/forms/sign-up/form-provider"
import RegistrationFormStep from "@/components/forms/sign-up/registration-step"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

type props = {
   
}


const SignUp =  (props: Props) => {


  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">

        <SignUpFormprovider>
          <div className="flex flex-col gap-3">
           <RegistrationFormStep></RegistrationFormStep>
          </div>
        </SignUpFormprovider>
        
      </div>
    </div>
  )
}


export default SignUp