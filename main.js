var accordionItems = document.getElementsByClassName('accordion-item');

Array.prototype.forEach.call(accordionItems, function(item) {
    var header = item.getElementsByClassName('accordion-header')[0];
    header.addEventListener('click', function() {
        var content = this.nextElementSibling;
        this.classList.toggle('active');
        content.classList.toggle('show');
    });
});
