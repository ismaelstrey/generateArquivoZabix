import { FC, ReactElement } from "react"
type value = {
    value?: string;
}

const Code = ({ value }: value): ReactElement => {
    return (
        <div className="flex w-[80vw] bg-black">
            <pre className="bg-red-500">
                <code className="bg-red-500">
                    {value}
                </code>
            </pre>
        </div>
    )
}

export default Code