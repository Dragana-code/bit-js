document.addEventListener('DOMContentLoaded', function(){
    selectElements();
})

function selectElements(){
    var list2=document.documentElement.children[1].children[1].firstElementChild;
    addBackgroundColor(list2);

    var selectLiElements=document.getElementsByTagName('li');
    addClass(selectLiElements, 'newBackground');
    
    var list3elements=document.documentElement.children[1].children[2].firstElementChild.children;
    addClass(list3elements, 'bckgroundAndUppercase');
}

function addBackgroundColor(element){
    element.classList.add('addColor');
}

function addClass(elements, className){
    for(var i=0; i<elements.length;i++){
        elements[i].classList.add(className);
    }
}