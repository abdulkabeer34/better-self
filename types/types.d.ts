import { ObjectId } from 'mongodb';
import { type DefaultSession } from 'next-auth';

console.log("INSIDE TYPES.D.TS");

declare module "next-auth" {
    interface User {
        _id?: string | ObjectId,
    }

    interface Session {
        user: {
            _id?: string | ObjectId,
        } & DefaultSession["user"]
    }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        _id?: string | ObjectId,
    }
}