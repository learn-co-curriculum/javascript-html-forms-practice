const items = [
    {
        name: 'apple',
        image: 'images/items/apple.png',
        price: 1.99,
        numberInCart: 0
    },
    {
        name: 'banana',
        image: 'images/items/banana.png',
        price: 0.99,
        numberInCart: 0
    },
    {
        name: 'pineapple',
        image: 'images/items/pineapple.png',
        price: 2.99,
        numberInCart: 0
    }
];

let selectedItem = items[0];
let totalPrice = 0;

function displayItemDetails(){
    const itemNameDiv = document.getElementById('item-name');
    itemNameDiv.textContent = selectedItem.name;

    const itemImage = document.getElementById('item-image');
    itemImage.src = selectedItem.image;
    itemImage.alt = selectedItem.name;

    const itemPriceSpan = document.getElementById('item-price');
    itemPriceSpan.textContent = selectedItem.price;

    const itemNumberInCartSpan = document.getElementById('item-number-in-cart');
    itemNumberInCartSpan.textContent = selectedItem.numberInCart;
}

function addToCart(){
    selectedItem.numberInCart++;
    const itemNumberInCartSpan = document.getElementById('item-number-in-cart');
    itemNumberInCartSpan.textContent = Number(itemNumberInCartSpan.textContent) + 1;

    totalPrice = 0;

    const cartMessageElement = document.getElementById('cart-message');
    cartMessageElement.textContent = "The following items are in your cart:";

    const cartList = document.getElementById('cart-list');
    cartList.textContent = '';

    items.forEach(item => {
        if(item.numberInCart > 0){
            addCartItemMessageToList(item);
        }
    });

    const totalPriceMessageElement = document.getElementById('total-price-message');
    totalPriceMessageElement.textContent = `The total price will be $${totalPrice}`;
}

function addCartItemMessageToList(item){
    const liElement = document.createElement('li');
    liElement.className = 'cart-item-message item';
    liElement.textContent = `${item.numberInCart} ${item.name}(s), which cost $${item.price} each`;

    const cartList = document.getElementById('cart-list');
    cartList.appendChild(liElement);

    totalPrice = (item.price * item.numberInCart) + totalPrice;
}

displayItemDetails();

const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', addToCart);

const itemSelect = document.getElementById('item-select');
itemSelect.addEventListener('change', (event) => {
    selectedItem = items.find(item => {
        return item.name === event.target.value;
    });
    displayItemDetails();
});

function addItemOptionToSelect(item){
    // Write your solution code for Task # 2 here!
}

function handleSubmit(event){
    // Write your solution code for Task # 4 here!
}

// Write your solution code for Task # 1 here!

// Write your solution code for Task # 3 here!