import { Router } from './routes'
import {
  ExpressHttpServerAdapter,
  MongooseDatabaseAdapter,
  env,
} from './infra/adapters'

const mongooseDatabaseAdapter = new MongooseDatabaseAdapter(env)
const httpServer = new ExpressHttpServerAdapter()
const router = new Router(httpServer)

mongooseDatabaseAdapter.init()
router.init()
router.httpServer.listen(3333, (port) => console.log(`Server listening on port: ${port}`))
