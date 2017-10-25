var express = require('express'),
    app = express(),
    path = require('path')


app.use(express.static(path.join(__dirname, './public')))

// Routes
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

if (env == 'production') {
  app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''))
    }
    next();
  });
}

var server = app.listen(process.env.PORT || 3000)
