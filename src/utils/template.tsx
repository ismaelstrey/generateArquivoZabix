import { hostsType } from "../types/xml"

const TemplateZabbix = (hosts: hostsType) => {
    let data = {
        "zabbix_export": {
            "version": "7.0",
            "host_groups": [

                {
                    "uuid": "e66f21ee0cae484d8a56ef49e091058a",
                    "name": "UBNT / Intelbras"
                }
            ],
            "hosts": hosts
        }
    }

    return data
}

export default TemplateZabbix