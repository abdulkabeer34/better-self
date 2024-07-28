"use server";

import { auth } from "@/auth";

export const isAuthorized = async () =>{
    const session  = await auth();

    return !!session?.user?.email

}