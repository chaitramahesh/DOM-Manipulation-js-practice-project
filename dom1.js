
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

// form submit event. 
form.addEventListener('submit', addItems);
// delete event
itemList.addEventListener('click', removeItems);
// filter event
filter.addEventListener('keyup', filterItems);

// addItems function
function addItems(e){
    e.preventDefault();
    // get input value
    let newItem = document.getElementById('item').value ;
    // create new li element
    let li = document.createElement('li')
    // add class
    li.className = "list-group-item";
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button element
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button element to li
    li.appendChild(deleteBtn);
    // append li to Ul-list/item-list
    itemList.appendChild(li);
}

// removeItems function
function removeItems(e) {
    if(e.target.classList.contains('delete')){
    if(confirm("Are You Sure")){
        console.log(itemList.removeChild(e.target.parentElement));
    }
  }
}

// filterItem function
function filterItems(e){
    // convert text to lowercase
   let text = e.target.value.toLowerCase()
    // get items list 
   let items = itemList.getElementsByTagName('li')
   // convert list to an array
  Array.from(items).forEach(function(item){
           let itemName =  item.firstChild.textContent.toLowerCase();
            if(itemName.indexOf(text) !== -1){
                item.style.display = 'block';
            }
            else { item.style.display = 'none'}
         });
  }