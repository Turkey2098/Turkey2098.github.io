var x=parseInt(location.pathname.split('/')[2])

function next(){
location.href='/blog/'+(x+1)
}

function previous(){
location.href='/blog/'+(x-1)
}