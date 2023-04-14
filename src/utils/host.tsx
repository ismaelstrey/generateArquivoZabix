import { hostBasic, hostsType } from "../types/xml"

function Host({ name, model, ssid, tipo, pop, ip, port, port_snmp = "161", templates = "UBNT / Intelbras" }: hostBasic) {
    const obj = {
        "host": `${name} - ${pop} - ${tipo}`,
        "name": name,
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

    console.log(obj)
    return obj
}

export default Host