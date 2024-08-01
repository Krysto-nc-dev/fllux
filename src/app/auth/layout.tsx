
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import { redirect } from "next/navigation"

type props = {
    children: React.ReactNode
}


const Layout = async ({children}: Props) => {

    const user = await currentUser()

    if(user)  redirect("/")
  return (
    <div className="h-screen flex w-full justify-center">
        <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
            <Image src="/images/logo.png" alt="logo" sizes="100vw" width={0} height={0} style={{
                width: '30%',
                height: 'auto',
            }}/>
            {children}
        </div>
        <div className="hidden lg:flex  flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3 ">
            <h2 className="text-gravel md:text-4xl font-bold">
                Bonjour, Je suis Fllux votre assistant de gestion de stocks ! 
            </h2>
            <p className="text-iridium md:text-sm mb-10">
                Fllux  est capable de vous aider à gérer vos stocks, vos commandes et vos fournisseurs.
            </p>
            <Image
            src="/images/app-ui.png"
            alt="app image"
            loading="lazy"
            sizes="30"
            className="absolute shrink-0 !w-[1600px] top-48"
             height={0} width={0}
            />
        </div>
    </div>
  )
}


export default Layout