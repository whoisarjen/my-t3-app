import Navbar from "@/containers/Layout/Navbar";
import type { AppType } from "next/dist/shared/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const Layout: AppType = ({
    Component,
    pageProps,
}) => {
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signIn(); // Force sign in to hopefully resolve error
        }
    }, [session]);

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}

export default Layout