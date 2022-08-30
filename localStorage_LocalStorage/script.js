//  session storage=> data is persisted only for the perticular session , as soon as i claose the window, alll data will gone-->
//  local storage is same as session storage but the advantage is it doesnt clr itself, even if we close the tab or shut down laptop and again restart it the dtata is still persisted over there inn browser -->
// local storage have higher memory capacity than session storage 



// key value pair in local storage
localStorage.setItem('name','gayatri')
// localStorage.clear()=> empty local storage


let impArary=['adarak','pyaz','bhimdi']
localStorage.setItem('sabzi', JSON.stringify(impArary))

// we cant arrays in local storage
// localStorage.remove('name')




let name=localStorage.getItem('name')
console.log(name);

name=JSON.parse(localStorage.getItem('sabzi'))
console.log(name);


// to clear localstorage and session storage
sessionStorage.clear()
localStorage.clear()