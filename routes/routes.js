import express from "express"
import GetAllusers from "../controllers/GetAllusers.js"
import Newexercie from "../controllers/Newexercie.js"
import Newlog from "../controllers/Newlog.js"
import Newuser from "../controllers/Newuser.js"


const routes = express.Router()

routes.post('/users', Newuser)

routes.post("/users/:_id/exercises", Newexercie)

routes.get("/users", GetAllusers)

routes.get("/users/:_id/logs", Newlog)

export default routes
