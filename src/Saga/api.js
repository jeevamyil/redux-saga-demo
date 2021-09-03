export function addTodoAPI ({data}) {
    console.log(data,"data from api");
    return fetch(`http://localhost:9999/TODOS/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    
  }
  
  export function deleteTodoAPI (id) {
    return fetch(`http://localhost:9999/TODOS/${id}`, {
      method: 'DELETE',
     
    })
  }

  export function clearTodoAPI () {
   //const data=JSON.stringify();
      
    return fetch(`http://localhost:9999/TODOS`, {
      method: 'DELETE',
    // body:data,
    
    })
    
  }

  export function completeTodoAPI (id) {
    const data=JSON.stringify({status:"completed"});
       
     return fetch(`http://localhost:9999/TODOS/${id}`, {
       method: 'PATCH',
    body:data,
    headers: {
        'Content-Type': 'application/json',
      },
     
     })
     
   }