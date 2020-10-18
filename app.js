const firstGroup = document.getElementById('firstgroup');
const addNote = document.getElementById('addnote');
const textBox = document.getElementById('textbox');
const itemLists = document.getElementById('itemlist');
const closeGroup = document.getElementById('close')
const submitBtn = document.getElementById('submit');
const boxContent = document.getElementById('boxvalue')
// console.log(textBox);
window.onload = function(){
    hidegroup();
    // addToNote()
};

function hidegroup() {
    firstGroup.style.display = "none"
}
addNote.addEventListener('click', function () {
    firstGroup.style.display = "block"
})

function addToNote() {
    // textBox.value = textvalue
   
    let li = document.createElement('div')
    li.innerHTML = 
    `<span id="itemss">
    <li>
        <p class="item-name">${boxContent.value}</p>
    </li> 
    <span id="buttongroup">
    <button class="editItem">Edit</button>
    <button class="deleteItem">Delete</button></span>
</span>`
    console.log(boxContent.value);
    itemLists.appendChild(li)
    boxContent.value = "";



    const removeData = document.getElementsByClassName('deleteItem');
    for (let i = 0; i < removeData.length; i++) {
        removeData[i].addEventListener('click', function(e) {
            e.preventDefault()
            console.log("remove", removeData)
            let parent = this.parentElement.parentElement;
            parent.remove()
        })
    };
    
     
    const editData = document.getElementsByClassName('editItem');
    for (let i = 0; i < editData.length; i++) {
        editData[i].addEventListener('click', function () {
            let parent = this.parentElement.parentElement;
            firstGroup.style.display = "block";
            //  console.log(itemName.textContent);
            updatedata()
              parent.remove()
        })
    };
     function updatedata(){
    const itemName = document.getElementsByClassName('item-name')
    for (let i = 0; i < itemName.length; i++) {
        boxContent.value = itemName[i].textContent
    }
};
};

closeGroup.onclick = function () {
    firstGroup.style.display = "none"
};

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    addToNote();
    firstGroup.style.display = "none"
});
