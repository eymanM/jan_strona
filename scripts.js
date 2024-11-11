document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Bransoletka kolorowa',
            price: 4.00,
            shipping: 6.00,
            description: 'Bransoletka srebrno biała z perłami co 9 koralików.',
            image: './bransoletka1.jpg'
        },
        {
            id: 2,
            name: 'Bransoletka żółto-różowa',
            price: 3.50,
            shipping: 6.00,
            description: 'Bransoletka żółto różowa z buźką na środku.',
            image: './bransoletka_zolto_rozowa.jpg'
        },        {
            id: 3,
            name: 'Bransoletka czerwono-złota',
            price: 4.00,
            shipping: 6.00,
            description: 'Bransoletka czerwono-złota z większym koralem z mieszanymi kolorami.❤.',
            image: './IMG_6800.JPG'
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
            <img src="${product.image}" alt="${product.name}" style="width: 500px">
            <p>${product.description}</p>
            <p>Cena: ${product.price.toFixed(2)} zł</p>
            <p>Dostawa: ${product.shipping.toFixed(2)} zł</p>
        `;
    }

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Cena: ${product.price.toFixed(2)} zł</p>
            <p>Dostawa: ${product.shipping.toFixed(2)} zł</p>
        `;
        productItem.addEventListener('click', () => showProductDetails(product));
        productList.appendChild(productItem);
    });

    backButton.addEventListener('click', showProductList);
});
