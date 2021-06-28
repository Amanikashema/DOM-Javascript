let form = document.getElementById('addForm')
let itemList = document.querySelector('#items')
let filter = document.getElementById('filter')

form.addEventListener("submit", addItem)

// Delete Event
itemList.addEventListener('click',removeItem)

// filter
filter.addEventListener('keyup',filterItems)

// Add item
function addItem(e){
    e.preventDefault()

    //  Get input value
    let newItem = document.getElementById('item').value
    
    // create new li element
    let li = document.createElement('li')
    //  add class
    li.className = 'list-group-item'
    // add text node with input value
    li.appendChild(document.createTextNode(newItem))

    // Create delete button element\
    let deleteBtn = document.createElement('button')

    // add classess to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    // append button to li
    li.appendChild(deleteBtn)

    // append li to list
    itemList.appendChild(li)

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// function to filter
function filterItems(e){
    // convert text to lower case
    let text = e.target.value.toLowerCase()
    // get lis
    let items = itemList.getElementsByTagName('li')
    // convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }
        else{
          item.style.display = 'none'  
        }
    })
}


