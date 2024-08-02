
import React from 'react'
import BreadCrumb from './bread-crumb';
import { Card } from '../ui/card';
import { Headphones, Star, Trash } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className='flex w-full justify-between items-center'>
        <BreadCrumb/>
        <div className='flex gap-3 items-center'>
               <div>
                <Card className=' rounded-xl flex gap-3 py-3 px-4 text-ghost '>
                    <Trash/>
                    <Star/>

                </Card>
               </div>
               <Avatar >
                <AvatarFallback>
                    <Headphones/>
                    </AvatarFallback> 
               </Avatar>
               <Avatar >
            <AvatarImage 
            src='https://github.com/shadcn.png'
            alt='@shdcn'
            />
            <AvatarFallback>CN</AvatarFallback>
               </Avatar>
        </div>
    </div>

  )
}

export default InfoBar