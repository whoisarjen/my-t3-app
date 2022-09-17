const TH_CLASSNAME = 'border border-slate-600'
const TD_CLASSNAME = 'border border-slate-700'

const Table = () => {
    return (
        <table className="w-full table-auto border-collapse border text-center ">
            <caption>Monthly savings</caption>
            <thead className="bg-primary">
                <tr>
                    <th className={TH_CLASSNAME}>Company</th>
                    <th className={TH_CLASSNAME}>Contact</th>
                    <th className={TH_CLASSNAME}>Country</th>
                </tr>
            </thead>
            <tbody className="bg-secondary">
                <tr>
                    <td className={TD_CLASSNAME}>Alfreds Futterkiste</td>
                    <td className={TD_CLASSNAME}>Maria Anders</td>
                    <td className={TD_CLASSNAME}>Germany</td>
                </tr>
                <tr>
                    <td className={TD_CLASSNAME}>Centro comercial Moctezuma</td>
                    <td className={TD_CLASSNAME}>Francisco Chang</td>
                    <td className={TD_CLASSNAME}>Mexico</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
