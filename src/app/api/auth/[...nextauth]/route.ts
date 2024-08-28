import { api } from "@/services/api"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const nextAuthOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials, req) {
                console.log(credentials)
                return api.post('/auth/login', {
                    username: credentials?.email,
                    password: credentials?.password,
                }).then((res) => {
                    const user = res.data;
                    return user;
                }).catch((error) => {
                    return null
                });
            },
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error'
    }, jwt: {
        maxAge: 24 * 60 * 60
    },
    callbacks: {
        async signIn({ account, profile }: any) {
            if (account?.provider === "google") {
                return profile?.email_verified && profile?.email.endsWith("@example.com")
            }
            return true
        },
        async jwt({ token, user }) {
            user && (token.user = user)
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token as any
            return session
        }
    },

}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }