'use client'

import useSideBar from "@/context/use-sidebar"
import { cn } from "@/lib/utils"
import MaxMenu from "./maximized-menu"
import { MinMenu } from "./minimized-menu"

type Props = {

  domains: 
  | {
    id: string
    name: string
    icon: string
  } []
  | null 
  | undefined
}

const Sidebar = ({domains} : Props) => {

  const {expand , onExpand, page , onSignOut} = useSideBar()
  return (
   
    <div className={cn(
      `bg-cram h-full w-[60px] fill-mode-forewards fixed md:relative`, 
      expand === undefined && '',
      expand === true ? 'animate-open-sidebar' : expand === false && 'animate-close-sidebar'
    )}>
      {expand ?  (
        <MaxMenu
         domains={domains}
         current={page!}
         onExpand={onExpand}
         onSignOut={onSignOut}
        />
      ) : 
      
       <MinMenu
        onShrink={onExpand}
        onSignOut={onSignOut}
        domains= {domains}
        current= {!page}
       />
      }

    </div>

  )
}

export default Sidebar