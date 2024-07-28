"use client"

import { SignOutUser } from '@/app/actions/auth'
import { signOut } from '@/auth'
import { isAuthorized } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {


  return (
    <div className='cursor-pointer' onClick={async ()=> await SignOutUser()}>Sign Out</div>
  )
}

export default page