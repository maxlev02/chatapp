import { createServer, Model, RestSerializer } from 'miragejs'
import { Users } from './fixtures'

export function makeServer({ environment = 'test' }) {
  return createServer({
    serializers: {
      application: RestSerializer,
      movie: RestSerializer.extend({
        include: ['castMembers']
      })
    },
    environment,
    models: {
      users: Model
    },
    fixtures: {
      users: Users
    },

    routes() {
      this.namespace = '/api'

      this.post('login', (schema, request) => {
        console.log()
        return {
          result: schema.templates.all().models,
          success: true,
          error: false
        }
      })
    },
    seeds(server) {
      server.loadFixtures('users')
    }
  })
}
