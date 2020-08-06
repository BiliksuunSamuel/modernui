require('dotenv').config()
const express = require('express');
const path=require('path')
const http=require('http')
const session=require('express-session')
const sessionStore = require('express-mysql-session')
const PORT=process.env.PORT|| 1999

const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const flash=require('connect-flash')
const passport=require('passport')
const socketio=require('socket.io')
const app=express()
const server=http.createServer(app)
const io=socketio(server)
const Route=require('./router/router')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
  secret:'making this my only secrete',
  saveUninitialized:true,
  resave: true,
}))
app.use(flash())
app.use(passport.initialize())

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.set(express.static(path.join(__dirname)))
//including the routing
app.use(Route)

server.listen(PORT,()=>console.log(`server started on ${PORT}`))