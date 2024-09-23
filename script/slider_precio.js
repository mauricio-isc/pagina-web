function updateSliderValue(value) { 
    document.getElementById('sliderValue').innerText = `$${value}`;
    filterProductsByPrice(value);
}

function filterProductsByPrice(maxPrice) {
    const productColumns = Array.from(document.querySelectorAll('.col-lg-6, .col-md-6'));
    const productContainer = document.querySelector('.row'); 

    productColumns.forEach(column => {
        const card = column.querySelector('.product-card');
        const price = parseInt(card.getAttribute('data-price'));

        if (price <= maxPrice) {
            column.classList.remove('d-none');
        } else {
            column.classList.add('d-none');
        }
    });

    const exactMatchColumn = productColumns.find(column => {
        const card = column.querySelector('.product-card');
        return parseInt(card.getAttribute('data-price')) === maxPrice;
    });

    if (exactMatchColumn) {
        productContainer.prepend(exactMatchColumn);
        productColumns.forEach(column => {
            if (column !== exactMatchColumn) {
                column.classList.add('d-none'); 
            }
        });
    }
}
