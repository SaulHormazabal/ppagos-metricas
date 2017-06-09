$.fn.select2.defaults.set('theme', 'bootstrap');
$.fn.select2.defaults.set('width', '100%');

$('.pagination a').on('click', function(e) {
    e.preventDefault();

    $(this).parents('.pagination').find('li.active').removeClass('active');
    $(this).parents('li:first').addClass('active');
});

