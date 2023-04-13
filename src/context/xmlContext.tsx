import { createContext, FC, ReactElement, useEffect, useState } from "react";
import Host from "../utils/host";
import { xmlContext, hostType, templateBasic } from "../types/xml";
export const HostContext = createContext<xmlContext[]>([])
import antenas from "../../antenas.json"

const HostProvider: FC<any> = ({ children }): ReactElement => {
    const [host, setHost] = useState<hostType[]>([])
    const [hostAntena, setHostAntena] = useState<templateBasic[]>([])


    const getHost = (obj: []) => {
        let array = []
        obj.map((data) => {
            const { name, group, model, ssid, tipo, pop, ip, port } = data;
            Host({ name, group, model, ssid, ip, port, pop, tipo }).then((data => array.push(data)))

        })
        setHost(array)
        console.log(host)
    }
    useEffect(() => {
        // getHost(antenas)
    }, [])
    return (
        <HostContext.Provider value={{ host, getHost }}>
            {children}
        </HostContext.Provider>
    )
}
export default HostProvider