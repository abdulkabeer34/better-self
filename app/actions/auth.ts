"use server";

import { comparePassword, saltAndHashpassword } from "@/lib/password";
import dbConnect from "../../lib/dbConnect";
import { signIn, signOut } from "@/auth";
import { isAuthorized } from "@/lib/auth";



export async function getIsAuthorized() {
  return await isAuthorized();
}


export const CreateAccount = async (data: any) => {
  try {
    const connection = await dbConnect();

    const usersData = connection.db().collection("users");

    const password = saltAndHashpassword(data.password);

    var user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password,
    };

    const userExists = await usersData.findOne({ email: user.email });

    if (userExists) {
      return { error: true, message: "this user already exist" };
    }

    await usersData.insertOne(user);


    // await usersData.deleteMany({});


    return { error: false, message: "user signed in successfully" };
  } catch (error) {
    return { error: true, message: "unexpected error" };
  }
};

// export const VerifyUser = async (email: string, password: string) => {
//   const connection = await dbConnect();

//   const usersData = connection.db().collection("users");

//   const userVerified = await usersData.findOne({ email });

//   if (!userVerified) {
//     return null;
//   }

//   const passwordVerified = await comparePassword(
//     password,
//     userVerified.password
//   );
//   if (!passwordVerified) {
//     return null;
//   }

//   var keys = ["_id", "firstName", "lastName", "email"];

//   const data = keys.reduce((obj: { [key: string]: any }, key: any) => {
//            obj[key] = userVerified?.[key];
//            return obj;
//   }, {});
  
//   return data;
// };

export const VerifyUser = async (email: string, password: string) => {
  try {
    const connection = await dbConnect();
    const usersData = connection.db().collection("users");

    console.log('Searching for user with email:', email);

    const userVerified = await usersData.findOne({ email });

    if (!userVerified) {
      console.log('User not found');
      return null;
    }

    console.log('User found:', userVerified);

    // const passwordVerified = await comparePassword(password, userVerified.password);
    // console.log('Password match:', passwordVerified);

    // if (!passwordVerified) {
    //   console.log('Password does not match');
    //   return null;
    // }

    var keys = ["_id", "firstName", "lastName", "email"];

    const data = keys.reduce((obj: { [key: string]: any }, key: any) => {
      obj[key] = userVerified?.[key];
      return obj;
    }, {});

    console.log('User data:', data);

    return data;
  } catch (error) {
    console.error('Error verifying user:', error);
    return null;
  }
};


export const  SignInUser  = async (data:any)=>{
  await signIn("credentials", { ...data });
} 

export const SignOutUser = async ()=>{
  await signOut({redirectTo:"/login"})
}