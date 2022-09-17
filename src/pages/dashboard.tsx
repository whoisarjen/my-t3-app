import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

const Dashboard = ({
    session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log('session', session)

    return (
        <div className="p-4">
            <div className="flex justify-center flex-wrap">
                <a tabIndex={0} className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissible popover">Dismissible popover</a>
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    )

    return {
        props: {
            session,
        },
    }
}

export default Dashboard