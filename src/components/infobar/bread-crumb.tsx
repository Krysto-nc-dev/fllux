'use client'
import React from 'react'

type Props = {}

const breadCrumb = (props: Props) => {

    // WIP: set up side bar hook for real time chat

  return (
    <div className='flex flex-col'>
        <div className="flex gap-5 items-center">
            <h2 className='text-3xl font-bold capitalize'>Titre</h2>
            
        </div>
        <p>
         modifier les reglages de l'application et le theme de l'application.
        </p>
    </div>
  )
}

export default breadCrumb