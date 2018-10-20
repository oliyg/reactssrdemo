const Hapi = require('hapi')
const Path = require('path')
const routes = require('./routes')
const { host, port } = require('./config')

const server = Hapi.server({ host, port, routes: {
    files: {
        relativeTo: Path.join(__dirname, 'store')
    }
  }
})

server.route(routes)

async function start () {

  await server.register(require('inert'))

  try {
    await server.start()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
  console.log(`server running at ${server.info.uri}`)
}

start()
