import withAuth from "next-auth/middleware"

export default withAuth({
    callbacks: {
        authorized: ({ req }) => !!req.cookies.get('next-auth.session-token')
    },
})

export const config = {
    matcher: [
        "/dashboard",
    ]
}
