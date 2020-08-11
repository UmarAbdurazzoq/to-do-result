;
(


  async function () {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(data)

    for (let info of data) {
      const newUl = document.createElement('UL')
      const liId = document.createElement('LI')
      const liTitle = document.createElement('LI')
      const liCompleted = document.createElement('LI')
      
      liId.textContent = `User id: ${info.id}`   
      liTitle.textContent = `Title: ${info.title}`  
      liCompleted.textContent = `Completed: ${info.completed}`
     
     console.log(info.completed)
     if (info.completed === false){
       newUl.classList.add('red')
     } else {newUl.classList.add('green')}
      
      users.appendChild(newUl)
      newUl.appendChild(liId)
      newUl.appendChild(liTitle)
      newUl.appendChild(liCompleted)
      
      
      
     
    }

  }

)()