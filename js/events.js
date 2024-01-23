/* so You know some html, css and javascript and you want to put it all together to create rich and reactive user experiences but we are missing one key component , the glue that pulls it all together we call that the Document object model, DOM for short.And it gives ur the ablity to Manipulate our page's content with javascript. 

====>>>>>>You obviously know that a web page is just HTML at its most basic level,and the browser is going to load that HTML.. and its going to render it so that users can view the content that we want them to see. but behind the scenes, the browser does a lot more than that . it loads our Html into a set of javascript objects that we can access and we can make changes to our webpage.these objects are called the DOcument Object Model.
===========
we use javascript to access and make changes to the DOM. so the dom gives us access to everything within our html so we can make whatever change we want NOTE that javascript doesnt change your html file but rather the object model

*/
//when we open our console and go to the elements tab,it looks like a source code for our Html but it isnt.this is a representation of the HTML as it is currently loaded within the browser
// show them that when we click on toggle button the className dark is added or removed depending, this is to show that that the element tab is just a representation of our html as it is currently loaded or rendered in our browser
// so with the body tag selected lets go to this other panel,and lets find the properties. so remember i said that the dom is just a set of javascript objects, so everything inside the DOM is an object which basically means that those objects will have properties.And we can see here that with the body selected,these are all of the properties that we have access to but one thing i want you to notice is that the term node is being used in quite a few places .that being that everything in the Dom is considered a node. an element is a node, even just plain text is a node and attributes are nodes

//Now going back to the console by typing 'document',it highlights the whole page because the  document is the currently loaded into the browser
//to access the html we do document.documentElement, you can see its still going to highlight everything but its a little diffferent from the document in the sense that document.documentElement refers to root <html> . it provides a way to manipulate properties of the top level html element while document is the entire HTML DOCUMENT ie both <html> <head> <body> elements

/// so then again going to our html lets say i want to select the first element in the html which is a h1 tag which is inside the body .so i can do that by doing document.body.childNodes (all the nodes which are children of the body). when we open that we see our Nodelist but notice that the first child there is a text and not h1 and you might be wondering where its coming from, well like i said even a text is a node and in our case the whitespace

//different ways to access the h1
document.body.childNodes[1];
document.body.firstChild; //the text between body tag and  the h1 element
document.body.firstChild.nextSibling; //The h1 now; //doing this nested acces is called walking the DOM which is walking from one object to another so we can access yet another object so its kind of difficult to keep walking down a dom tree just to access an element so we nolonger do that rather we have a list of methods that we can use to get or search for certain elements

//Methods for selecting elements in the DOM
// document.getElementById(); //gets an element based on its id and NOTE IDs are unique and there can only be one id in a document
let h1El = document.getElementById("dom");
// so usually whenever we want to retrieve an element its good to store it in a variable so you can easily access it , because you dont want to keep repeating yourself and plus the browser still has to reach into the dom to find that element, so to reduced overworking the browser its good to store our elements in a variable
h1El.childNodes[0].textContent = "This is the modified Document Object Model"; //h1El.firstchild.textContent
//when it comes to changing the styles we do so in two ways one.by modifying what is essentially the style attribute or by using classlist and css classes
h1El.style.color = "green";
//to select for example all the li elements
let list = document.getElementsByTagName("li"); //gives a html collection, different from nodelist .html collection isnt as smart as a nodelist
for (let li of list) {
  li.style.color = "yellow";
  li.style.textDecoration = "none";
  li.childNodes[0].childNodes[0].textContent.style;
}
console.log(list);
let p = document.getElementsByTagName("p");
for (let pElement of p) {
  pElement.style.color = "brown";
}
// document.getElementsByClassName works like getelement by id but for classes

// document.querySelector very vast and can be used to get very specific elements lets say we want to select all the p elements inside a div
let pElementquery = document.querySelectorAll("div p");

for (let pp of pElementquery) {
  pp.style.fontSize = "50px";
}

//CREATING ELEMENTS IN THE DOM
//now you may be wondering when is it important to create elements in the dom and usually a good usecase will be when we are fetching info from an external source lets say a web api
let sectionMain = document.createElement("section");
// document.body.appendChild(sectionMain); //commented it out so we could append it at the bottom of the page cos of order of rendering but can show them how it works first then comment it out
let h4 = document.createElement("h4"); // we have just created this document but its not visible on the page till we add it and we need to be able to display the result in the page we have several ways in which we could add the created element but the most straight forward approach is using the append or appenchild
sectionMain.append(h4);
h4.textContent = "This is a h4 element created by javascript";

//if we take a look at newly the element created in our browser we can notice that the section element created is at the end of the body so thats to say its after the script tag now in this particular case it really doesnt matter what order those elements are as long as the section element is rendered on the browser , however we might want to place it above the script tag cos like we all know, javascript code is executed sequentially and if this script comes before the element you want to manipulate it may not work the way you expect.

/*
so to put the section before the script tag we can do that in several ways. the first would be to get the script element object so we can refernce that and then we can say that i want to insert this section element before the script element
*/
/*
FIRST METHOD

let scriptElement = document.querySelector("script");
document.body.insertBefore(sectionMain, scriptElement);

 */

//
//

//insertBefore method is used to insert a new node before an existing node as a child of a specific parent node. it takes two parameters (the newnode you want to insert, and the node before which the newnode will be inserted )  syntax is parentNode.insertBefore(newNode, referenceNode)

/* The second way to do that is to use another element for example lets say we want the section element to come before or after  our h1 element so in that case we can use the h1 element as a reference SO LET ME COMMENT OUT THE FIRST WAY AND SHOW YOU GUYS THE SECOND WAY */
h1El.insertAdjacentElement("afterend", sectionMain);

/* 
so every element object has a method called the insertAdjacentHTML and we can pass in two arguements,the first is a string that is going to specify where we want to insert the element that we pass as the second arguement.

// the firt string is the BEFOREBEGIN, which is essentially going to insert our element before the h1 elemrnt because as the name suggests we are inserting our element before the h1 begins

// 
the second is the AFTERBEGIN which is going to insert the section element after the opening h1 tag

// 
the third option is thr BEFOREEND, which as might guess is going to place the section element before the end of the ending tag of the h1 element

// 
fourth option is the AFTERREND which is going to insert the section element after the closing tag of the h1 element , in our case that is what we want to do

*/

/////
/////
/*
so lets say we want to create multiple p elements inside the section elements , well it means we have to start creating each p element and insering that into the DOM using append or the appendChild method which can become a tedious process , however there is a simple method for doing that and i will be showing you that to you guys. we do that by creating an array 
 */
const todos = [
  "Do some coding",
  "follow up with my coding challenges",
  "watch some tutorials",
  "Ask ChatGpt for help when confused",
  "repeat step one",
]; //so we use will use this array and we will loop over the array to create our elements and then add them to the document.body. so lets use the forEach loop to achieve that

todos.forEach((text, index) => {
  // added index later so i could use it for modifying classlist
  //so lets say i want to add different classes to the three remaing paragraphs in the todos array
  //Note that we can add multiple class names

  let ptag = document.createElement("p");
  // ptag.innerHTML = `<b> ${text} </b>`;
  ptag.innerHTML = text;
  if (index === 1) {
    ptag.classList.add("ptags", "multiple");
    // remove('class-one', 'class-two')
  } else if (index === 2) {
    ptag.classList.add("ptages");
  } else {
    ptag.classList.add("noptags");
  }
  sectionMain.append(ptag);
});
//NOTE IT IS OUTSIDE HERE BECAUSE IT NEEDS TO BE AFTER WE HAVE APPENDED THE PTAG TO THE SECTION MAIN
document.querySelector(".ptages").classList.replace("ptages", "noptages");

// there used to be some controversy using the innerHTML property cos it wasnt standard but thats not the case anymore so this is perectly fine to do. so what this does is that it just works like your normal html and if we wanted to bolden our text we could do so using the backtick and then the bold tag like shown above.................
// Now there is one other thing i want to point out to you and that is the order in which i did this. if you notice something at the beginning i created the section element and then appended the h4 element to it and then appended the section element in the body element but notice that i had to appeend a new section element after appending these new p tags because as of the time we first appended the p tags havent been created so then after creating and appending them we need to update our browser by appending to the section so we can see these new additions

//REMOVING ELEMENTS FROM THE DOCUMENT
/* There are two ways two ways that we can remove an element  the
 first involves using the parent element. so lets say we ant to remove the last p element that means that we need to use its parent which is the section element so for that we use a method called 'removeChild' and the we just specify the child we want to remove. well in our case its very easy because the element we want to remove is the last child so we can use our section element onc again and we have a property called 'LASTCHILD' that gets the last child node whithin an element  */

sectionMain.removeChild(sectionMain.lastChild);
//One really cool thing about removechild method is that it removes the child,  but returns that child. so we could create a variable called last child for example and this gives us the ability to really do whatever we need to the element. Now if we dont need to do anything with it, great, its gone its no longer in the document but if we need to make a lot of changes to it, then we defininitely nned to store it in some variable

let secondLastChild = sectionMain.removeChild(sectionMain.lastChild);
const bg = document.querySelector(".bg");
bg.style.backgroundColor = "green";
bg.append(secondLastChild);

//if you want to remove the second child from the list we can do this
sectionMain.removeChild(sectionMain.children[1]);

//MODIFYING ELEMENT CLASSES
/*
Manipulating the class attribute can be done in two ways 
the first way is to use a property called CLASSNAME.
so to set the className we do somehing like this 
document.body.className = '' but if we already have an existing classname like in our case 'dark' its going to replace the classname with an empty string and thats not what we want so for us to have both class names we can first store the esxisting class name which is dark and then concatenate the new class we want to add 
let myClassName = document.body.className;
document.body.className = myClassName + ' something-else'. this is actually tedious and its the old way of addin classes and this brings us to the modern way which with the use of the classList proprety which gives us a set of methods that we can use to add classes and remove classes, replace a class with another class and also toggle between classes .

///
///
so lets start with toggle which is kind of the easiest. its just adding a class if its not applied and removing a class if its applied 
*/
/*
EVENTS BASICS
Events are just something that happens within the document.most of the time it is initiated by the user doing something such as clicking somewhere or moving the mouse around
There are many types of events but here are three main ones:

MOUSE EVENTS:
click: Occurs when the user clicks on an element.
dblclick: Occurs when the user double-clicks on an element.
mousedown: Occurs when the mouse button is pressed over an element.
mouseup: Occurs when the mouse button is released over an element.
mousemove: Occurs when the mouse pointer is moved.
mouseover: Occurs when the mouse pointer moves over an element.
mouseout: Occurs when the mouse pointer moves out of an element.


KEYBOARD EVENTS:
keydown: Occurs when a key on the keyboard is pressed down.
keyup: Occurs when a key on the keyboard is released.
keypress: Deprecated in favor of keydown and keyup. It used to occur when a key is pressed and released.


FORM EVENTS:
submit: Occurs when a form is submitted.
reset: Occurs when a form is reset.
change: Occurs when the value of an input element changes (e.g., in text input or select elements).
focus: Occurs when an element receives focus.
blur: Occurs when an element loses focus.

there are other events that occur automatically for example, whenever the browser has completely loaded the page, not just the HTML and css  but also any supporting assets like images, and javascript as well and this is called the load event 

before we go on let me stress that the topic of events is very complex and we can spend a lot of time talking about events , however i wont be going in-dept but you will all learn the fundamentals
so back to the load event , we can set up a load event handler by using the window object. 
Now the window object is not part of the document object model, it is actually part of what is called the browser object model or the global window which means the browser model changes between differing browsers. it contains properties and methods that aer global such as alert(), setTimeout(), and location. variables declare globally are added to the window object.

//
whereas the document object represents the HTML documents loaded in the browser.it is a property of the window object and can be accesed as the window.document or simply document.
It provides methods and properties to manipulate the content and structure of the loaded document, such as getElementById(), createElement(), and querySelector().
It allows you to interact with and modify the DOM (Document Object Model).



//
///
/////
/////
In JavaScript, the load event is often set on the window object rather than the document object for historical reasons and to ensure compatibility across different browsers.

The load event is fired when all the resources (like images, stylesheets, scripts) in a web page have finished loading. Placing the load event on the window object ensures that the event is triggered when the entire page, including its resources, is ready.

Here are a few reasons for setting the load event on the window:

Historical Practice:

Older versions of browsers had inconsistencies in how they handled the load event on the document object.
To ensure reliable cross-browser behavior, developers often used the window object to attach the load event.
Global Scope:

The window object is the global object in a browser environment.
Attaching the load event to window allows you to handle the event globally and execute code when the entire page has loaded.
*/
window.onload = function () {};
//==============================================================================
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

const body = document.querySelector("body");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.add("jj");
});

// grandparent.addEventListener("click", (e) => {
//   //   console.log(e);
//   console.log("grandparent 1");
// });

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     console.log("grandparent 1");
//   },
//   { capture: true }
// );

// parent.addEventListener("click", (e) => {
//   //   console.log(e);
//   console.log("parent 1");
// });

// child.addEventListener("click", (e) => {
//   //   console.log(e);
//   console.log("child 1");
// });

// document.addEventListener("click", (e) => {
//   console.log("document 1");
// });
