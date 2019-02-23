const hosts = {
  development: {
    client: 'http://0.0.0.0:7324',
    server: 'http://0.0.0.0:8080'
  },
  production: {
    client: 'https://node-tree-client.herokuapp.com',
    server: 'https://node-tree-server.herokuapp.com'
  }
}

const env = {
  [hosts.development.client]: 'development',
  [hosts.production.client]: 'production'
}[window.location.origin]

const host = hosts[env]

export default host
