import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    console.log('session', session)
    return (
        <>
            {session
                ? <button onClick={() => signOut()}>Logout</button>
                : <button onClick={() => signIn()}>Login</button>
            }
        </>
    )
}

export default Navbar;