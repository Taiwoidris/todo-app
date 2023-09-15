// get all the Ui to js
let form = document.querySelector("form")
let todoInput = document.querySelector("#todoinput")
let todoDate= document.querySelector("#tododate")
let todoList = document.querySelector(".list-group")
let searchTodo = document.querySelector("#searchtodo")
let clearBtn = document.querySelector("#clearbtn")
let welcome = document.getElementById('welcome')







// logout
function logOut() {
    localStorage.removeItem('login')
   


    location.href = 'index.html'

}
//function to load all event listener

loadEventListeners()




document.addEventListener('DOMContentLoaded', getTodosFromLs)
// create loadevent listener function


function loadEventListeners() {
    form.addEventListener('submit', addTodo)

    todoList.addEventListener('click', removeTodo)
    clearBtn.addEventListener('click', clearTodo)
    searchTodo.addEventListener('keyup', filterTodo)

}


// check register user

let regUser = () => {
    let user = localStorage.getItem('login')
    user ? null : location.href = 'register.html'

}

//getTodos from Ls
function getTodosFromLs() {
    regUser()

    let username = localStorage.getItem('username')
    let gender = localStorage.getItem('gender')

    if(gender==="male"){
        ugender= 'Mr  ' + username 
        welcome.innerText = ugender.toUpperCase()
    }else{
        ugender= 'Mrs  ' + username 
        welcome.innerText = ugender.toUpperCase()

    }

    

   




    let todos
    if (localStorage.getItem('todoLs') === null) {
        todos = []

    } else {
        todos = JSON.parse(localStorage.getItem('todoLs'))
    }



    todos.forEach((todolocals) => {
        console.log(todolocals)
        let li = document.createElement('li')
        li.className = 'list-group-item'

        let liText = document.createTextNode(todolocals)

        li.appendChild(liText)


        todoList.appendChild(li)
      
        
        //create a link element and add properties
        let link = document.createElement('a')
        link.className = 'delete-item'
        link.style.cursor = 'pointer'

        link.style.marginLeft = '60%'


        link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(link)


    })




}




// add todo fucntiom
function addTodo(e) {


    if (todoInput.value === '' ) {
        alert('enter todo')
    }else if(todoDate.value== ''){
        alert('enter todo  date')
    } else {
        let li = document.createElement('li')
        li.className = 'list-group-item'

        let liText = document.createTextNode(todoInput.value)

        li.appendChild(liText)
        todoList.appendChild(li)


        // store to localStorage
            let inputtodos = ` ${todoInput.value} |${todoDate.value} `
        storeTodosToLocalStorage(inputtodos)
// date display
let datedisplay= document.createElement('small')
datedisplay.className='date-display'
datedisplay.style.marginLeft ='5%'
datedisplay.innerHTML=`<small>|${todoDate.value}</small>`

  li.appendChild(datedisplay)
        //create a link element and add properties

        let link = document.createElement('a')
        link.className = 'delete-item'
        link.style.cursor = 'pointer'

        link.style.marginLeft = '60%'


        link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(link)

        
        //claer input
        todoInput.value = ''
        todoDate.value= ''


    }
    e.preventDefault()

}

//function for Stor to LS

function storeTodosToLocalStorage(todoin) {
    let todos
    if (localStorage.getItem('todoLs') === null) {
        todos = []

    } else {
        todos = JSON.parse(localStorage.getItem('todoLs'))
    }



    todos.push(todoin)
    localStorage.setItem('todoLs', JSON.stringify(todos))


}







//remove todo

function removeTodo(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("are you sure you want to delete")) {

            e.target.parentElement.parentElement.remove()


            //delete todos from localstorage
            removeFromLocalStorage(e.target.parentElement.parentElement)
        }
    }



    e.preventDefault()



}


// remove todos from ls function

function removeFromLocalStorage(todoitemtoremove) {

    let todos
    //check local storage if empty
    if (localStorage.getItem('todoLs') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todoLs'))
    }
    //loop thru local storage
    todos.forEach(function (todoloop, index) {

        if (todoitemtoremove.textContent === todoloop) {
            todos.splice(index, 1)
        }

    })
    //set localstorage item
    localStorage.setItem('todoLs', JSON.stringify(todos))
}




// clear todo
function clearTodo() {

    // todoList.innerHTML = ''

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }

    //     // function to clear from local storage
    clearFromLS()

}

// //clear from LS Function Implementation
function clearFromLS() {
    localStorage.removeItem('todoLs')
}

//saerch todo

function filterTodo(e) {
    let search = e.target.value.toLowerCase()
    let listTodos = document.querySelectorAll(".list-group-item")
    listTodos.forEach((todo) => {
        const todoContent = todo.firstChild.textContent
        if (todoContent.toLowerCase().indexOf(search) != -1) {
            todo.style.display = 'block'

        } else {
            todo.style.display = 'none'
        }
    })


}

















// document.addEventListener("DOMContentLoaded", getTodosFromLS)
// //create load event lister functions
// function loadEventListeners() {
//     //submit event
//     form.addEventListener('submit', addTodo)
//     //delete todos
//     todoList.addEventListener('click', removeTodo)
//     //clear all todo
//     clearBtn.addEventListener('click',
//         clearTodos)
//     //search todos
//     searchTodo.addEventListener('keyup', filterTodo)


// }

// function getTodosFromLS(e) {

//     let todos
//     if (localStorage.getItem('todosLS') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todosLS'))
//     }

//     todos.forEach(function (todolocals) {

//         //create li element
//         let li = document.createElement('li')
//         //add class to it
//         li.className = "list-group-item"
//         //create a textnode 
//         let litodo = document.createTextNode(todolocals)
//         //append textnode to li
//         li.appendChild(litodo)

//         //append li to ul
//         todoList.appendChild(li)
//         // create link item

//         let link = document.createElement('a')
//         //add class
//         link.className = 'delete-item'
//         link.style.cursor = "pointer"
//         link.style.marginLeft = "60%"

//         link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
//         li.appendChild(link)


//     })
// }



// //add todo

// function addTodo(e) {

//     if (todoInput.value === '') {
//         alert('enter something')

//     } else {
//         //create li element
//         let li = document.createElement('li')
//         //add class to it
//         li.className = "list-group-item"
//         //create a textnode 
//         let litodo = document.createTextNode(todoInput.value)
//         //append textnode to li
//         li.appendChild(litodo)

//         //append li to ul
//         todoList.appendChild(li)
//         //store todo in to Local Storage
//         storeTodosToLocalStorage(todoInput.value)

//         // create link item

//         let link = document.createElement('a')
//         //add class
//         link.className = 'delete-item'
//         link.style.cursor = "pointer"
//         link.style.marginLeft = "60%"

//         link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
//         li.appendChild(link)





//         //empty the input
//         todoInput.value = ''


//         console.log(li)


//     }


//     e.preventDefault()
// }
// //remove todo

// function removeTodo(e) {
//     if (e.target.parentElement.classList.contains('delete-item')) {
//         if (confirm("are you sure you want to delete")) {
//             e.target.parentElement.parentElement.remove()
//             //delete from locals Storage
//             removeFromLocalStorage(e.target.parentElement.parentElement)
//         }
//     }
// }
// //function to remove item from local storage

// function removeFromLocalStorage(todoitemtoremove) {

//     let todos
//     //check local storage if empty
//     if (localStorage.getItem('todosLS') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todosLS'))
//     }
//     //loop thru local storage
//     todos.forEach(function (todoloop, index) {
//         if (todoitemtoremove.textContent === todoloop) {
//             todos.splice(index, 1)
//         }

//     })
//     //set localstorage item
//     localStorage.setItem('todosLS', JSON.stringify(todos))
// }




// //clear todos

// function clearTodos() {
//     // todoList.innerHTML = ''
//     while (todoList.firstChild)
//         todoList.removeChild(todoList.firstChild)

//     // function to clear from local storage
//     clearFromLS()

// }

// //clear from LS Function Implementation
// function clearFromLS() {
//     localStorage.clear()
// }

// //searchtodos

// function filterTodo(e) {

//     let search = e.target.value.toLowerCase()
//     let listTodos = document.querySelectorAll(".list-group-item")

//     listTodos.forEach(function (todo) {

//         const todoContent = todo.firstChild.textContent
//         if (todoContent.toLowerCase().indexOf(search) != -1) {
//             todo.style.display = 'block'

//         } else {
//             todo.style.display = 'none'

//         }

//     })
// }

// //store todo to LS

// function storeTodosToLocalStorage(todoin) {
//     let todos
//     if (localStorage.getItem('todosLS') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todosLS'))
//     }
//     todos.push(todoin)
//     localStorage.setItem('todosLS', JSON.stringify(todos))

// }