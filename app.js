// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
// 导入controller middleware:
const controller = require('./controller')
const rest = require('./rest')
const cors = require('koa-cors');
// 创建一个Koa对象表示web app本身
const app = new Koa()


//解决跨域问题
app.use(cors());
app.use(bodyParser())
app.use(rest.restify())
app.use(controller())
app.use(router.routes())
app.listen(3001)
console.log('app started at port 3001...')