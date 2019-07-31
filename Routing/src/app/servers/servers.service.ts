export class ServersService {
  servers = [
    {
      id: 1,
      name: 'Production Server',
      status: 'Online'
    },
    {
      id: 2,
      name: 'Dev Server',
      status: 'Online'
    },
    {
      id: 3,
      name: 'Test Server',
      status: 'Offline'
    }
  ];

  // Get all servers
  getServers() {
    return this.servers;
  }

  // Get a server
  getServer(id: number) {
    const server = this.servers.find((e) => e.id === id);
    return server;
  }

  // Update a server
  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find((e) => e.id === id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
