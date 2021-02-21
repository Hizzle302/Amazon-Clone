// I want to make a card with a product number & a price & an image

const table = document.getElementsByClassName('table')[0];
console.log(table);

function createCard(number) {
    const card = document.createElement('div');
    card.className = "card";

    const productNumber = document.createElement('div');
    productNumber.innerText = number;

    const productPrice = document.createElement('div');
    productPrice.innerText = number;

    card.append(productNumber);
    card.append(productPrice);

    return card;
}

table.appendChild(createCard(12.99));