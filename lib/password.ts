import bcrypt from "bcrypt";
import { printData } from "./console";

export const saltAndHashpassword = async  (password:string) => {
   try{
    const saltrounds = 10;
    const salt = await bcrypt.genSalt(saltrounds)
    const hashedPassoword = await bcrypt.hash(password,salt);

    return hashedPassoword
   }
   catch(err){
       throw new Error("error occured while hashing password")
   }

};

export const comparePassword = async (plainPassword:string , hashPassword:string) =>{
    try{
        const match = await bcrypt.compare(plainPassword as string, hashPassword as string);
        printData(match)
        printData("Hellol wolrd")

        return match;
    }

    catch(error){
        printData(error)
        printData("Hellol wolrd")
        throw new Error("error occured while comparing  password")
    }
}


