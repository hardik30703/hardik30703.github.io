function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Function to add items to the basket
    function addToBasket(productId) {
        const product = document.getElementById(productId);
        const productName = product.querySelector('h2').innerText;
        const productPrice = product.querySelector('p').innerText.replace('£', '');
        const productImage = product.querySelector('img').src;

        const basketItem = {
            id: productId + '-' + new Date().getTime(), // Unique identifier
            name: productName,
            price: parseFloat(productPrice), // Convert price to number
            image: productImage
        };

        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        basket.push(basketItem);
        localStorage.setItem('basket', JSON.stringify(basket));

        console.log('Basket:', basket);

        alert(`${productName} has been added to your basket!`);
    }

    // Function to remove items from the basket
    function removeFromBasket(itemId) {
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        basket = basket.filter(item => item.id !== itemId);
        localStorage.setItem('basket', JSON.stringify(basket));

        console.log('Basket after removal:', basket);

        displayBasketItems();
    }

    // Function to display basket items on the basket page
    function displayBasketItems() {
        const basketItemsContainer = document.getElementById('basket-items');
        const basket = JSON.parse(localStorage.getItem('basket')) || [];

        console.log('Displaying basket items:', basket);

        if (basket.length === 0) {
            basketItemsContainer.innerHTML = '<p>Your basket is empty.</p>';
            return;
        }

        basketItemsContainer.innerHTML = '';
        let totalCost = 0;
        basket.forEach(item => {
            totalCost += item.price;
            const itemElement = document.createElement('div');
            itemElement.classList.add('basket-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>£${item.price}</p>
                <button onclick="removeFromBasket('${item.id}')">Remove</button>
            `;
            basketItemsContainer.appendChild(itemElement);
        });

        const totalCostElement = document.createElement('div');
        totalCostElement.classList.add('total-cost');
        totalCostElement.innerHTML = `<h3>Total Cost: £${totalCost}</h3>`;
        basketItemsContainer.appendChild(totalCostElement);
    }

    // Call displayBasketItems if on the basket page
    if (window.location.pathname.includes('basket.html')) {
        displayBasketItems();
    }

    window.addToBasket = addToBasket;
    window.removeFromBasket = removeFromBasket;
});

