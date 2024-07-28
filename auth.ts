import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import authConfig from "./auth.config"
import { VerifyUser } from "@/app/actions/auth"
// import { getUser } from "./utils/user"

export const { signIn, signOut, handlers, auth } = NextAuth({
  ...authConfig,

  providers: [

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        try {
          const email: string = credentials.email as string
          const password: string = credentials.password as string

          let user = await VerifyUser(email, password) || { error: true }
          return user

        } catch (error) {
          return { error: true }
        }
      },



    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      
      var protectedPaths = ['/tasks', '/projects'];

      if (protectedPaths.includes(pathname)) {
        return !!(auth?.user?.email)
      }

      return true;
    },

    jwt({ token, user }) {
      if (user) { 
        token._id = user?._id
      }
      return token
    },
    session({ session, token }) {
      session.user._id = token?._id
      return session
    },
  },
  secret:"adfadsfasdfasdf"
})