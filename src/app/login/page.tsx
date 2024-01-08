
import SignInForm from '@/components/form/SignInForm'
import GoogleButton from '@/components/misc/GoogleButton'
import MSButton from '@/components/misc/MSButton'
import React, { useState, SyntheticEvent } from 'react'

type LoginProps = {
  csrfToken?: string
}

const Login = async (props: LoginProps) => {

  return (
    <>
      <div className='mt-10 flex h-screen flex-1 flex-col justify-center px-6 py-20 lg:px-8'>
        <SignInForm />
      </div>
    </>
  )
}

export default Login
