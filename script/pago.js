

document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    setTimeout(() => {
        document.getElementById('checkout-form').classList.add('d-none');
        document.getElementById('confirmation-message').classList.remove('d-none');
    }, 2000);
});


document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const cardNumberInput = document.getElementById('card-number');
    const expiryDateInput = document.getElementById('expiry-date');
    const cvvInput = document.getElementById('cvv');

    // Solo permite letras
    nameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    // Formato para el número de tarjeta
    cardNumberInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); 
        if (this.value.length > 16) this.value = this.value.slice(0, 16); 
        this.value = this.value.replace(/(.{4})/g, '$1 ').trim(); 
    });

    expiryDateInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
        if (this.value.length > 4) this.value = this.value.slice(0, 4); 
        if (this.value.length === 2) this.value += '/'; 
    });

    // Validación para el CVV
    cvvInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); 
        if (this.value.length > 3) this.value = this.value.slice(0, 3); 
    });
});
