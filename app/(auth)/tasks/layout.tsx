import { getIsAuthorized } from '@/app/actions/auth'
import { isAuthorized } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout = async ({children}:{children:ReactNode}) => {
    if( !(await getIsAuthorized())){
        redirect("/login")
    }
    
  return (
    <div>{children}</div>
  )
}
export default layout