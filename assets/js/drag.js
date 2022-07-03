const dropContainer = document.querySelectorAll('.box-container');
const list = document.querySelectorAll('.drag');
const body = document.querySelector('body');

for(let i = 0; i < list.length; i++)
{
    list[i].setAttribute('draggable', 'true');
}


document.addEventListener('DOMContentLoaded', function(e){

    //Itera os <li> e adiciona o evento de arrastar
    list.forEach((items)=>{
        items.addEventListener('dragstart', handleDragStart);
        items.addEventListener('dragend', handleDragEnd);
    })

    dropContainer.forEach((items) => {
        items.addEventListener('dragover', handleDragOver);
        items.addEventListener('drop', handleDropEvent);
    })
})

function handleDragStart(e){
  
    e.dataTransfer.setData('text/plain', e.target.id);
    
    setTimeout(() => {
        this.style.cssText = 'opacity: 0.4';
    }, 0);
}

function handleDragEnd()
{
    this.style.cssText = 'opacity: 1';
}

function handleDragOver(e)
{   
    e.preventDefault();
}

function handleDropEvent(e)
{
    e.stopPropagation();
    const id = e.dataTransfer.getData('text/plain');
    const element = document.getElementById(id);
    this.children.item(0).appendChild(element);
}