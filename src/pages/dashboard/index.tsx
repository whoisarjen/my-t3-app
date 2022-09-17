import Table from "@/components/Table/Table"
import Sidebar from "@/containers/dashboard/Sidebar"

const Dashboard = () => {
    return (
        <main className="flex flex-auto">
            <Sidebar />
            <article className="w-full flex items-center justify-center">
                <Table />
            </article>
        </main>
    )
}

export default Dashboard