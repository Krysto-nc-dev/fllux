import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
    return (
        <>
            <h2 className='text-gravel md:text-4xl font-bold'>Créer un compte gratuit</h2>
            <p className='text-iridium md:text-sm'>
                Parlez-nous de vous ! Que faites-vous ? Personnalisons votre expérience pour qu'elle vous convienne le mieux a vos attentes.
            </p>
            <UserTypeCard
            register={register}
            userType={userType}
            setUserType={setUserType}
            title='Je suis un gerant'
            value='owner'
            text='parametrer mon compte pour mon entreprise'
            />
            <UserTypeCard
            register={register}
            userType={userType}
            setUserType={setUserType}
            title='Je suis Etudiant'
            value='student'
            text='loocking to learn about the tool '
            />
        </>
    )
}

export default TypeSelectionForm
