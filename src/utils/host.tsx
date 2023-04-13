import { hostBasic } from "../types/xml"

const Host = async ({ name, group, model, ssid, tipo, pop, ip, port, port_snmp = "161", templates = "radio" }: hostBasic) => {
    const obj = await {
        "hosts": [
            {
                "host": `${name} - ${pop} - ${tipo}`,
                "name": name,
                "templates": [
                    templates,
                ],
                "groups": [
                    group,
                ],
                "interfaces": [
                    {
                        "ip": ip,
                        "interface_ref": "if1"
                    },
                    {
                        "type": "SNMP",
                        "ip": ip,
                        "port": port_snmp,
                        "details": {
                            "community": "{$SNMP_COMMUNITY}"
                        },
                        "interface_ref": "if2"
                    }
                ],
                inventory: {
                    "location": pop,
                    "notes": 'POP:' + pop + '- NOME:' + name + '-' + ip + '-' + port + '- MODELO: ' + model + 'SSID:' + ssid,
                }
            }
        ]
    }

    return obj
}

export default Host