fs = require 'fs'
jade = require 'jade'

exports.render = (req, res) ->
  fs.readFile './page.jade', (err, file) ->
    result = jade.compile file
    date = new Date 2012, 5, 6
    curr = new Date();
    diff = curr - date
    res.end result
      sec: Math.floor((diff/1000) % 60)
      min: Math.floor((diff/1000/60) % 60)
      hou: Math.floor((diff/1000/60/60) % 24)
      day: Math.abs(curr.getDate() - date.getDate())
      mon: Math.abs(curr.getMonth() - date.getMonth())
      yea: curr.getFullYear() - date.getFullYear()
      dat: date