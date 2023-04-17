export type xmlTypes = {
    host: hostType[];
}
export interface hostTypeProps {
    name: string;
    group: [
        {
            name: string;
        }
    ];
    model: string;
    ssid: string;
    tipo: string;
    pop: string;
    ip: string;
    port: string;
    port_snmp: string;
    version: string;
    host_groups: [
        {
            uuid: string;
            name: string;
        }
    ];
    templates: [
        {
            name: string;
        }
    ];
}

export interface host_groups {
    uuid?: string;
    name: string;
}

export interface hostGroupType {
    name: string;
}

export interface hostTemplatesType {
    name: string;
}

export type zabbixExportType = {
    version: string;
    host_groups: host_groups[];
    hosts: hostsType[];
}

export type hostsType =
    {
        host: string;
        name: string;
        templates: hostTemplatesType[];
        groups: hostGroupType[];
        interfaces: interfceType[];
    }

export type hostType = {
    zabbix_export: zabbixExportType;
}

export type interfceType = [
    {
        ip: string;
        interface_ref?: string;
    },
    {
        type: string;
        ip: string;
        port: string;
        details?: {
            community?: string;
        };
        interface_ref?: string;
    }
]


export type xmlContext = {
    // xmlTypes?: hostType[];
    host: hostType[];
    getHost?: () => void;
};


export type hostBasic = {
    device_name: string;
    model: string;
    ssid: string;
    tipo: string;
    pop: string;
    ip: string;
    port: string;
    port_snmp?: string;
    version?: string;
    host_groups?: string;
    templates?: string;

}
export type templateBasic = {
    port_snmp: string; version: string; host_groups: string; templates: string;
}