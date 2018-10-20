const fs = require('fs')

module.exports = [{
  method: 'GET',
  path: '/login',
  options: { state: { parse: true, failAction: 'error' } },
  handler: function (req, h) {
    changeState('true')
    setState(h, true)
    return h.response({ success: true })
  }
}, {
  method: 'GET',
  path: '/logout',
  options: { state: { parse: true, failAction: 'error' } },
  handler: function (req, h) {
    changeState('false')
    setState(h, false)
    return h.response({ success: true })
  }
}, {
  method: 'GET',
  path: '/isLogin',
  handler: function (req, h) {
    return h.response({ success: true, data: { login: JSON.parse(getState()) } })
  }
}, {
  method: 'GET',
  path: '/{filename}',
  handler: function (request, h) {
    return h.file(request.params.filename)
  }
}]

function setState (h, globalLoginStatus) {
  const res = h.response()
  res.state('login', JSON.stringify(globalLoginStatus), {
    strictHeader: true,
    ignoreErrors: true,
    isSecure: false,
    isHttpOnly: true,
    isSameSite: 'Strict',
    encoding: 'none'
  })
}

function changeState (state) {
  fs.writeFileSync('./store/login.json', state, { encoding: 'UTF-8' })
}

function getState () {
  return fs.readFileSync('./store/login.json', { encoding: 'UTF-8' })
}
