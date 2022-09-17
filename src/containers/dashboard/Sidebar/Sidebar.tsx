import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { FaSignOutAlt, FaUsers, FaDashcube } from 'react-icons/fa'

const ICON_SIZE = 20

const BUTTONS = [
    {
        text: 'Dashboard',
        icon: <FaDashcube size={ICON_SIZE} />,
        path: '/dashboard',
    },
    {
        text: 'Users',
        icon: <FaUsers size={ICON_SIZE} />,
        path: '',
    },
    {
        text: 'Sign out',
        onClick: () => signOut(),
        icon: <FaSignOutAlt size={ICON_SIZE} />,
        path: '',
    },
]

const Sidebar = () => {
    const router = useRouter()

    return (
        <aside className="top-0 h-screen w-20 m-0 flex flex-col bg-secondary shadow justify-center">
            <nav>
                <ul>
                    {BUTTONS.map(({ onClick, text, icon, path }) =>
                        <li key={text}>
                            <button
                                onClick={onClick}
                                className={`${router.asPath === path && 'bg-primary'} relative flex items-center justify-center h-12 w-12 mx-auto hover:bg-primary rounded-xl transition-all mt-2`}
                            >
                                {icon}
                            </button>
                            <div className="text-center text-xs">{text}</div>
                        </li>
                    )}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar