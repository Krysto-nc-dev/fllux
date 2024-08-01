



import OTPInput from '@/components/otp'

import React from 'react'
// Assurez-vous que le chemin et le nom sont corrects

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>
onOTP: string
}

const OTPForm = ({ onOTP, setOTP }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Entrez le code OTP</h2>
      <p className="text-iridium md:text-sm">
        Entrez le mot de passe à usage unique qui a été envoyé à votre e-mail.
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput
      otp={onOTP}
      setOtp={setOTP}
        />
      </div>
    </>
  )
}

export default OTPForm
