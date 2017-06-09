var data = require('./data.js');


var $type = $('#form__type').select2({
    data: [
        {id: 'periods', text: 'Periodo', selected: true},
        {id: 'payment_matrices', text: 'Cuado de pago'},
        {id: 'billing_windows', text: 'Ventana de pago'},
        {id: 'billing_types', text: 'Concepto'},
    ],
});


let periods = ['Todos'].concat(data.periods)
let billing_windows = ['Todos'].concat(data.billing_windows)
let billing_types = ['Todos'].concat(data.billing_types)
let payment_matrices = ['Todos'].concat(data.payment_matrices)


let $filter = $('#form__filter').select2({
    data: periods,
    placeholder: '-----',
});


$type.on('change', function (e) {

    $filter.empty();

    if (e.target.value === 'periods')
        $('label.filter').text('Periodo')

    else if (e.target.value === 'payment_matrices')
        $('label.filter').text('Cuadro de pago')

    else if (e.target.value === 'billing_windows')
        $('label.filter').text('Ventana de pago')

    else if (e.target.value === 'billing_types')
        $('label.filter').text('Concepto de pago')


    $filter.select2({
        data: ['Todos'].concat(data[e.target.value]),
        placeholder: '-----',
    });

    $filter.val('Todos').trigger('change');

});


$('#form__creditor').select2({
    data: ['Todos'].concat(data.participants),
    placeholder: '-----',
});


$('#form__debtor').select2({
    data: ['Todos'].concat(data.participants),
    placeholder: '-----',
});
