document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Bransoletka kolorowa',
            price: 10.00,
            shipping: 2.00,
            description: 'Description of Product 1',
            image: 'path/to/image1.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20.00,
            shipping: 3.00,
            description: 'Description of Product 2',
            image: 'path/to/image2.jpg'
        }
        // Add more products as needed
    ];

    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');
    const detailsContent = document.getElementById('details-content');
    const backButton = document.getElementById('back-button');

    function showProductList() {
        productList.classList.remove('hidden');
        productDetails.classList.add('hidden');
    }

    function showProductDetails(product) {
        productList.classList.add('hidden');
        productDetails.classList.remove('hidden');
        detailsContent.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <p>Price: zł${product.price.toFixed(2)}</p>
            <p>Shipping: zł${product.shipping.toFixed(2)}</p>
        `;
    }

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: zł${product.price.toFixed(2)}</p>
            <p>Shipping: zł${product.shipping.toFixed(2)}</p>
        `;
        productItem.addEventListener('click', () => showProductDetails(product));
        productList.appendChild(productItem);
    });

    backButton.addEventListener('click', showProductList);
});