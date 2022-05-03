
function previous() {
  var x = window.location.pathname.split('/')
  var y = x[2]
  var z = y-1
  window.location.replace('https://turkey2098.co.vu/blog/' + z)
}

function next() {
  var x = window.location.pathname.split('/')
  var y = x[2]
  var z = y-y
  var a = (z+(1*y))+1
  window.location.replace('https://turkey2098.co.vu/blog/' + a)
}
