import { FC, ReactElement, useContext, useEffect, useState } from "react"
import { HostContext } from "../../context/xmlContext"
import { xmlContext, hostBasic } from "../../types/xml"
import generateCsv from "../../utils/generateCsv";

const Form: FC = ({ value }: any): ReactElement => {
    const { getHost, host } = useContext(HostContext) as unknown as xmlContext;
    const [codigo, setCodigo] = useState<hostBasic[]>([])
    const [csv, setCsv] = useState(false)
    const hadleOnchangeForm = (e: any) => setCodigo(e.target.value)


    useEffect(() => {
        // host && getHost(JSON.parse(codigo))
        // host || codigo && getHost(JSON.parse(codigo))
        // console.log(host)
        csv && console.log(generateCsv(codigo))
        // console.log(csv)
        // console.log(typeof (codigo))
    }, [csv])

    return (
        <div className="flex flex-col w-full h-full ">
            {/* <div><NavForm /></div> */}
            {/* <label htmlFor="csv">CSV</label> */}
            <input type="checkbox" id="csv" name="csv" onChange={(() => setCsv(!csv))} />
            <textarea id="" cols={30} rows={20}

                //@ts-ignore
                value={codigo} onChange={(e) => hadleOnchangeForm(e)} className="w-full border rounded-t-lg h-[50vh]"></textarea>

            <button className="bg-red-500 p-4" onClick={() => {
                //@ts-ignore
                !csv ? getHost(JSON.parse(codigo)) : getHost(JSON.parse(generateCsv(codigo)))

            }
            }>Enviar</button>
        </div>
    )
}


export default Form