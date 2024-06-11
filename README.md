# Practice - HTML Forms

## Overview

This practice lesson will help you understand how HTML Forms work.

Flatiron Supermarket wants to further improve the functionality of their website. They would like to add a feature that allows users to be able to add a new item to the item list, while maintaining the functionality for their web page that allows users to add items to their cart that they would like to purchase from the supermarket.

## Tools and Resources

It is recommended that you use the Visual Studio Code (VSCode) IDE for this practice lesson.

Useful considerations and terminology:

**Event**: Something a user does on a web page or something that happens on a web page.

**Event handler**: A callback function that executes code in response to an event.

**submit event**: An event that occurs when a user clicks on a `<button>` element or an `<input>` element (whose `type` attribute is set to `submit`) within a `<form>` to submit a form on a web page.

Here are some other useful resources:
- MDN
  - [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
  - [Event reference (Web Events)](https://developer.mozilla.org/en-US/docs/Web/Events)
  - [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
    - [Element: click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
  - [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
    - [HTMLElement: change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

## Instructions

**Fork and clone** this practice lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. There is some starter code provided in `index.js`.

These are your tasks:

1. Iterate over the array stored in the `items` variable using an array iterator method such as `forEach()`. For each of the items in the array stored in the `items` variable, the `addItemOptionToSelect()` function is called and the item is passed in as an argument to the `addItemOptionToSelect()` function.
2. `addItemOptionToSelect(item)`: The `addItemOptionToSelect()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `item` whose value should be an `object` that contains the following keys: `name`, `image`, `price`, and `numberInCart`, when the correct value is passed as an argument into the function. When the `addItemOptionToSelect()` function is called, the following actions should take place:
    - An `<option>` element is created.
    - The `value` attribute for the `<option>` element is set to the value of the `name` key for the `object` stored in the `item` parameter.
    - The `textContent` attribute for the `<option>` element is set to the value of the `name` key for the `object` stored in the `item` parameter.
    - The `<option>` element is appended to the `<select>` element with the id of `item-select`.
3. Add an event listener to the `<form>` element with the id of `new-item-form` that will allow the `<form>` element to listen for a `submit` event and will call the `handleSubmit()` function in response to the `submit` event.
4. `handleSubmit(event)`: The `handleSubmit()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `event` whose value should be a `SubmitEvent` object, when the correct value is passed as an argument into the function. When the `handleSubmit()` function is called, the following actions should take place:
    - The `preventDefault()` method is called on the `SubmitEvent` object to prevent the page from refreshing.
    - An `object` is created and stored into a variable named `newItem`. The `object` contains the following key and value pairs:
      - A key of `name` whose value is the value of the `value` attribute of the `<input>` element with the id of `name-input`.
      - A key of `image` whose value is the value of the `value` attribute of the `<input>` element with the id of `image-input`.
      - A key of `price` whose value is the value of the `value` attribute of the `<input>` element with the id of `price-input`.
    - The `object` referenced by the `newItem` variable is added to the array referenced by the `items` variable.
    - The `addItemOptionToSelect()` function is called and the `object` referenced by the `newItem` variable is passed in as an argument to the `addItemOptionToSelect()` function.

## Solution

```javascript
function addItemOptionToSelect(item){
    const optionElement = document.createElement('option');
    optionElement.value = item.name;
    optionElement.textContent = item.name;

    const itemSelect = document.getElementById('item-select');
    itemSelect.appendChild(optionElement);
}

function handleSubmit(event){
    event.preventDefault();

    const nameInput = document.getElementById('name-input');
    const imageInput = document.getElementById('image-input');
    const priceInput = document.getElementById('price-input');

    const newItem = {
        name: nameInput.value,
        image: imageInput.value,
        price: Number(priceInput.value),
        numberInCart: 0
    };

    items.push(newItem);

    addItemOptionToSelect(newItem);
}

items.forEach(addItemOptionToSelect);

const newItemForm = document.getElementById('new-item-form');
newItemForm.addEventListener('submit', handleSubmit);
```