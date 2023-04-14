import { FC, ReactElement } from "react"
type value = {
    value?: string;
}

const Code = ({ value }: value): ReactElement => {
    // const copyCliboard = () { }
    return (
        <div className={`flex w-[80vw] min-h-[50vh] bg-black`}>
            <pre className="w-full" onClick={() => navigator.clipboard.writeText(JSON.stringify(value, null, 0))}>
                <code className="text-white">
                    {value}
                </code>
            </pre>
        </div>
    )
}

export default Code