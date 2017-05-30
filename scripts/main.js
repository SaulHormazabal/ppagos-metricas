// PAGINATION
// -------------------------------

$('.pagination a').on('click', function(e) {
    e.preventDefault();

    $(this).parents('.pagination').find('li.active').removeClass('active');
    $(this).parents('li:first').addClass('active');
});


// SELECT2
// -------------------------------

$.fn.select2.defaults.set('theme', 'bootstrap');
$.fn.select2.defaults.set('width', '100%');

var year_periods = years.map((year) => {
    return {id: year, text: year};
});


var month_periods = years.reduce((stream, year) => {
    year = year.toString().substr(2);

    for (let month of months)
        stream.push({id: month + year, text: month + year});

    return stream;

}, []);


var $type = $('#form__type').select2({
    data: [
        {id: 'year', text: 'año'},
        {id: 'month', text: 'mes', selected: true},
        {id: 'other', text: 'otro'},
    ],
});


var $period = $('#form__period').select2({
    data: month_periods,
    placeholder: '-----',
});

$period.val('Feb17').trigger('change');

$type.on('change', function (e) {

    $period.empty();

    if (e.target.value === 'year')
        $period.select2({
            data: year_periods,
            multiple: false,
            placeholder: '-----',
        });

    else if (e.target.value === 'month')
        $period.select2({
            data: month_periods,
            multiple: false,
            placeholder: '-----',
        });

    else if (e.target.value === 'other')
        $period.select2({
            data: month_periods,
            multiple: true,
            placeholder: '-----',
        });

    $period.val(null).trigger('change');

});


$('#form__billing-window').select2({
    data: ['Todos'].concat(billing_windows),
    placeholder: '-----',
});


$('#form__billing-type').select2({
    data: ['Todos'].concat(billing_types),
    placeholder: '-----',
});

$('#form__payment-matrix').select2({
    data: ['Todos'].concat(payment_matrices),
    placeholder: '-----',
});


$('#form__creditor').select2({
    data: ['Todos'].concat(participants),
    placeholder: '-----',
});


$('#form__debtor').select2({
    data: ['Todos'].concat(participants),
    placeholder: '-----',
});
