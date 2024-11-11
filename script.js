document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Clicked:', this.textContent);
    });
}); 