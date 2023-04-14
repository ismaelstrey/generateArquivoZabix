const TemplateZabbix = (hosts: []) => {
    let data = {
        "zabbix_export": {
            "version": "7.0",
            "host_groups": [
                {
                    "uuid": "6d57fffc14e049e78422343a2c961962",
                    "name": "ATEC"
                },
                {
                    "uuid": "f2481361f99448eea617b7b1d4765566",
                    "name": "Discovered hosts"
                },
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