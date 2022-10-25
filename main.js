function addStrikethrough(){
    let arguementItem1 = document.querySelector("li");
    arguementItem1.style.textDecoration = 'line-through';
}


addStrikethrough();

function setImage(id, url){
    let image = document.querySelector("#" + id);
    image.src = url;
    image.style.height = "300px";
}

setImage('image-1', `https://www.cesarsway.com/wp-content/uploads/2019/09/AdobeStock_195276899.jpeg`);

setImage('image-2', `https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg`);

setImage('image-3', `https://cdn.uanews.arizona.edu/s3fs-public/styles/uaqs_large/public/pups.jpg?itok=ZZz5hjcg`);

function removeArguement(){
    let itemToRemove = document.querySelector("li");
    itemToRemove.remove();
}

removeArguement();
removeArguement();

function setFont(size, id){
    let text = document.querySelector("#" + id);
    text.style.fontSize = size+`px`;
}

setFont('24', 'heading');
setFont('24', 'thing-1');

function addElementToList(element){
    let listItem = document.querySelector('#arguments');
    listItem.appendChild(element);
}

let newImage = document.createElement('img');

newImage.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLUSxLKaE4gAQWeMvjfIvLK_qRNpsBYE9-Q&usqp=CAU";

addElementToList(newImage);

function changeImage(imageElement){
    imageElement.style.height = "30px";
}

changeImage(newImage);

function addClass(element){
    element.className = "invisible";
}

let thing1 = document.querySelector("#thing-c");
addClass(thing1);

function newListItem(text){
    let newLI = document.createElement('li');
    newLI.innerText = text;
    return newLI;

}

let listItem = newListItem("Hey there!");
addElementToList(listItem);

function newHeaderItem(size, text){
    let newHI = document.createElement(`h${size}`);
    newHI.innerText = text;
    return newHI;
}

let headerItem = newHeaderItem("3", "Goodbye");
addElementToList(headerItem);

