import { FC, ReactElement } from "react"
type value = {
    value?: string;
}
const Code = ({ value }: value): ReactElement => {
    return (
        <div className={`flex w-[80vw] max-h-full min-h-[50vh] bg-black`}>
            <pre className="w-full" onClick={() => navigator.clipboard.writeText(JSON.stringify(value, null, 0))}>
                <textarea cols={30} rows={100} readOnly value={value} className="w-full border rounded-t-lg h-screen bg-black text-white"></textarea>
            </pre>
        </div>
    )
}
export default Code