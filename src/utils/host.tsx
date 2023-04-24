import { hostBasic } from "../types/xml"

function Host({ device_name, model, ssid, tipo, pop, ip, port, port_snmp = "161", templates = "Backup - Ubnt" }: hostBasic) {
    const obj = {
        "host": `${device_name} - ${pop} - ${tipo}`,
        "name": device_name,
        "templates": [
            {
                "name": templates
            }

        ],
        "groups": [
            {
                "name": templates
            }
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
                    "version": "SNMPV1",
                    "community": "{$SNMP_COMMUNITY_ANTENA}"
                },
                "interface_ref": "if2"
            }
        ],
        inventory: {
            "location": pop,
            "notes": 'POP:' + pop + '- NOME:' + device_name + '-' + ip + '-' + port + '- MODELO: ' + model + 'SSID:' + ssid,
        }
    }

    console.log(obj)
    return obj
}

export default Host