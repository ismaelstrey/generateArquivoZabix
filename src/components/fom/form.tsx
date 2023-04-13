import { FC, ReactElement, useContext, useState } from "react"
import { HostContext } from "../../context/xmlContext"
import { xmlContext, hostBasic } from "../../types/xml"

const Form: FC = ({ value }: any): ReactElement => {
    const { getHost } = useContext(HostContext) as unknown as xmlContext;
    const [codigo, setCodigo] = useState<hostBasic[]>([])
    const hadleOnchangeForm = (e: any) => setCodigo(e.target.value)

    return (
        <div className="flex w-full h-full">
            <textarea id="" cols={30} rows={20} value={codigo} onChange={(e) => hadleOnchangeForm(e)} className="w-full border"></textarea>
            <button className="bg-red-500 p-4" onClick={() => getHost(JSON.parse(codigo))}>Enviar</button>
        </div>
    )
}


export default Form