express = require 'express'
app = express()
page = require './page.coffee'

app.use express.static 'public'

app.get '/', page.render
  
app.listen process.env.PORT