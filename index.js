// script.js

// Selecting by ID
const mainTitle = document.getElementById('main-title');
console.log(mainTitle.textContent);

// Selecting by class name (returns a NodeList)
const listItems = document.getElementsByClassName('list-item');
listItems.forEach(item => console.log(item.textContent));

// Selecting by tag name (returns a NodeList)
const paragraphs = document.getElementsByTagName('p');
paragraphs.forEach(paragraph => console.log(paragraph.textContent));

// Selecting by CSS selector (returns the first matching element)
const firstBox = document.querySelector('.box');
console.log(firstBox.textContent);

// Selecting multiple elements by CSS selector (returns a NodeList)
const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach(box => console.log(box.textContent));

// Selecting nested elements using a combination of selectors
const boxContent = document.querySelector('.box .box-content');
console.log(boxContent.textContent);

// Modifying elements selected by ID
mainTitle.textContent = 'New Title';

// Modifying elements selected by class name
listItems[0].style.color = 'red';

// Modifying elements selected by tag name
paragraphs[1].classList.add('highlight');

// Modifying elements selected by CSS selector
firstBox.style.border = '2px solid blue';

// Modifying multiple elements selected by CSS selector
allBoxes.forEach(box => box.style.backgroundColor = 'lightgray');

// Event handling on elements selected by ID
mainTitle.addEventListener('click', () => {
    alert('Title clicked!');
});

// Event handling on elements selected by class name
listItems[1].addEventListener('mouseover', () => {
    listItems[1].textContent = 'Mouse over!';
});

// Creating new elements and appending them to the DOM
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph!';
document.body.appendChild(newParagraph);

// Removing elements from the DOM
const secondBox = document.querySelector('.box:nth-child(2)');
secondBox.parentNode.removeChild(secondBox);

// Selecting by attribute
const inputWithType = document.querySelector('input[type="text"]');
console.log(inputWithType.value);

// Selecting the first child of an element
const firstChildOfList = document.querySelector('ul li:first-child');
console.log(firstChildOfList.textContent);

// Selecting the last child of an element
const lastChildOfList = document.querySelector('ul li:last-child');
console.log(lastChildOfList.textContent);

// Selecting even and odd elements
const evenListItems = document.querySelectorAll('ul li:nth-child(even)');
evenListItems.forEach(item => console.log(item.textContent));

const oddListItems = document.querySelectorAll('ul li:nth-child(odd)');
oddListItems.forEach(item => console.log(item.textContent));

// Selecting elements with a specific attribute
const elementsWithClass = document.querySelectorAll('[class]');
elementsWithClass.forEach(element => console.log(element.className));

// Selecting elements with a specific attribute value
const elementsWithAttribute = document.querySelectorAll('[data-info="special"]');
elementsWithAttribute.forEach(element => console.log(element.textContent));

// Selecting direct children
const directChildrenOfList = document.querySelectorAll('ul > li');
directChildrenOfList.forEach(item => console.log(item.textContent));

// Selecting by pseudo-elements (not modifying the DOM)
const firstLineOfParagraph = document.querySelector('p::first-line');
console.log(firstLineOfParagraph.textContent);
