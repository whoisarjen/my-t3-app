import { signIn, signOut, useSession } from "next-auth/react";

const CustomNavbar = () => {
    const { data: session } = useSession();

    return (
        <>
            {session
                ? <button onClick={() => signOut()}>Sign out</button>
                : <button onClick={() => signIn()}>Sign in</button>
            }
        </>
    )
}

export default CustomNavbar;