import { FC, ReactElement, useContext, useEffect, useState } from "react"
import { HostContext } from "../../context/xmlContext"
import { xmlContext, hostBasic } from "../../types/xml"

const Form: FC = ({ value }: any): ReactElement => {
    const { getHost, host } = useContext(HostContext) as unknown as xmlContext;
    const [codigo, setCodigo] = useState<hostBasic[]>([])
    const hadleOnchangeForm = (e: any) => setCodigo(e.target.value)

    useEffect(() => {
        // host && getHost(JSON.parse(codigo))
        // host || codigo && getHost(JSON.parse(codigo))
        // console.log(host)
    }, [])

    return (
        <div className="flex flex-col w-full h-full ">
            {/* <div><NavForm /></div> */}
            <textarea id="" cols={30} rows={20}
                //@ts-ignore
                value={codigo} onChange={(e) => hadleOnchangeForm(e)} className="w-full border rounded-t-lg h-[50vh]"></textarea>

            <button className="bg-red-500 p-4" onClick={() => {
                //@ts-ignore
                getHost(JSON.parse(codigo))
            }
            }>Enviar</button>
        </div>
    )
}


export default Form