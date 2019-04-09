$(document).ready(function() {
    // Grabbing the accordion container list item that was clicked on
    $('#accordion_list_container').on('click', 'li.accordion-item', function(
        event
    ) {
        // Setting the list item to the this keyword
        const itemClicked = this;
        /**
         * If there is already the active class we will remove it
         * If the active class is not there then we will add it
         */
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
