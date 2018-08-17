require('request-promise')({
    uri:'http://localhost:3000/restart',
    method:'POST',
    body:JSON.stringify({
        data:'sdfsdfsdfsf'
    })
}) ; 