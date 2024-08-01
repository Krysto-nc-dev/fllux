'use client'

import { useAuthContextHook } from '@/context/use-auth-context'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'
import StudentForm from './student-form' // Assurez-vous que ce chemin est correct
import OtpForm from './otp-form' // Assurez-vous que ce chemin est correct
import OwnerForm from './owner-form' // Assurez-vous que ce chemin est correct

type Props = {}

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()
  const { currentStep } = useAuthContextHook()
  const [onOtp, setOnOtp] = useState<string>('')
  const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

  setValue('otp', onOtp)

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm register={register} errors={errors} userType={onUserType} setUserType={setOnUserType} />
      )
    case 2:
      return (
       
          <div></div>
      )
    case 3:
      return (
          <div></div>
       
      )
    default:
      return (
        <div></div>
      )
  }
}

export default RegistrationFormStep
