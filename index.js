var express = require('express'),
    app = express(),
    path = require('path')


app.use(express.static(path.join(__dirname, './public')))

// Routes
app.use('/', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})


var server = app.listen(process.env.PORT || 3000)
