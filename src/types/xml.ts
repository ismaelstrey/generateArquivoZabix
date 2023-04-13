export type xmlTypes ={
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
export interface hostType {
  zabbix_export: {
    version: string;
    host_groups: host_groups[];
    hosts: [
      {
        host: string;
        name: string;
        templates: [
          {
            name: string;
          }
        ];
        groups: [
          {
            name: string;
          }
        ];
        interfaces: [
          {
            ip: string;
            interface_ref: string;
          },
          {
            type: string;
            ip: string;
            port: string;
            details: {
              community: string;
            };
            interface_ref: string;
          }
        ];
      }
    ];
  };
}

export type xmlContext = {
  xmlTypes?: [];
  host: hostType;
};
