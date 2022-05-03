
function previous() {
  var x = window.location.pathname.split('/')
  var y = x[2]
  var z = y-1
  window.location.href(z)
}
