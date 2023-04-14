import { createContext, FC, ReactElement, useState } from "react";
import Host from "../utils/host";
import { xmlContext, hostType, hostBasic } from "../types/xml";
import TemplateZabbix from "../utils/template";
export const HostContext = createContext<xmlContext[]>([])

const HostProvider: FC<any> = ({ children }): ReactElement => {
    const [host, setHost] = useState<hostType[]>([])
    const getHost = (obj: hostBasic[]) => {
        let lista: [] = []
        obj.map((data: hostBasic) => {
            const { name, model, ssid, tipo, pop, ip, port } = data;

            const dataList = Host({ name, model, ssid, ip, port, pop, tipo })
            lista.push(dataList)
        })
        setHost(TemplateZabbix(lista))
    }
    return (
        <HostContext.Provider value={{ host, getHost }}>
            {children}
        </HostContext.Provider>
    )
}
export default HostProvider