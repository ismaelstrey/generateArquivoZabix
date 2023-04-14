import { createContext, FC, ReactElement, useState } from "react";
import Host from "../utils/host";
import { xmlContext, hostType, templateBasic } from "../types/xml";
import TemplateZabbix from "../utils/template";

export const HostContext = createContext<xmlContext[]>([])


const HostProvider: FC<any> = ({ children }): ReactElement => {
    const [host, setHost] = useState<hostType[]>([])
    const [hostAntena, setHostAntena] = useState<templateBasic[]>([])
    const getHost = (obj: []) => {
        let lista = []
        obj.map((data) => {
            const { name, group, model, ssid, tipo, pop, ip, port } = data;
            Host({ name, group, model, ssid, ip, port, pop, tipo }).then((data => lista.push(data)))
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