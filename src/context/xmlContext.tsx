import { createContext, FC, useEffect, useState } from "react";
import Host from "../utils/host";
import { xmlContext,hostType } from "../types/xml";
export const HostContext = createContext<xmlContext[]>([])

const HostProvider: FC<any> = ({ children }) => {
    const [host,setHost]=useState<hostType[]>([])
const {name, group, model, ssid, tipo, pop, ip, port, port_snmp, version, host_groups, templates} = {name:"ismael", group:[{name:"ismael"},{name:"jaque"}], model:"Airgrid", ssid:"morroMicoCentro", tipo:"AP", pop:"MICO", ip:"192.168.0.25", port:"8080", port_snmp:"162", version:"7.0", host_groups:[{name:"admin"},{name:"matriz"}], templates:[{name:"ubiquit"},{name:"radio"}]}
const cria:any = async ()=> await Host({name, group, model, ssid, tipo, pop, ip, port, port_snmp, version, host_groups, templates}).then((data=> setHost([data])))

    useEffect(() => {
cria()

    }, [])
    return (
        <HostContext.Provider value={{host}}>
            {children}
        </HostContext.Provider>
    )
}
export default HostProvider