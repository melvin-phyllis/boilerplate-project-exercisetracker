import express from "express"
import GetAllusers from "../controllers/GetAllusers.js"
import Getlog from "../controllers/Getlog.js"
import Newexercie from "../controllers/Newexercie.js"
import Newuser from "../controllers/Newuser.js"


const routes = express.Router()

routes.post('/users', Newuser)

routes.post("/users/:_id/exercises", Newexercie)

routes.get("/users", GetAllusers)

routes.get("/users/:_id/logs", Getlog)

export default routes
