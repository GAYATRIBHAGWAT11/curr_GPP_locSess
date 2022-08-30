// GET

fetch('https://reqres.in/api/users/2')
.then(res=>{
    if(res.ok){
        console.log('GET request successful');
    }else{
        console.log('GETrequest unsuccessfull');
    }
    return res
})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))

// POST

fetch('https://reqres.in/api/users',{
method:'POST',
headers:{
    'content-type':'application/json'
},
body:JSON.stringify({
    'name':'gayatri bhagwat',
    'id':'11999'
})
})
.then(res=>res.json())
.then(data=>console.log(data))


// DELETE


fetch('https://reqres.in/api/users/2',{
method:'DELETE',
headers:{
    'content-type':'application/json'
},
})
.then(res=>console.log(res))
