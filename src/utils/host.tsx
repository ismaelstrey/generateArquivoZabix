import { hostTypeProps } from "../types/xml"

const Host = ({ name, group, model, ssid, tipo, pop, ip, port, port_snmp, version, host_groups, templates }: hostTypeProps) => {
    const obj = {
        "zabbix_export": {
            "version": version,
            "host_groups": [
                host_groups,
            ],
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
                        "notes": `POP: ${pop} - NOME: ${name} - ${ip}:${port} - MODELO: ${model} SSID: ${ssid}`,
                    }
                }
            ]
        }
    }
    return obj
}