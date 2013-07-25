express = require 'express'
app = express()
page = require './page.coffee'

app.use express.static 'public'
app.use express.favicon 'public/favicon.png'

app.get '/', page.render
  
app.listen process.env.PORT