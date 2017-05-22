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



$('#form__creditor').select2({
    data: ['Todos'].concat(participants),
    placeholder: '-----',
});



$('#form__debtor').select2({
    data: ['Todos'].concat(participants),
    placeholder: '-----',
});



// CIERRE DE INSTRUCCIONES DE PAGO
// -------------------------------

var cierres_params = {
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Cerrados', 0.6, 0.7, 0.8],
            ['Abiertos', 0.4, 0.3, 0.2],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Cerrados',
                'Abiertos',
            ]
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#DDDDDD',
        ]
    },
    padding: {
        right: 15,
    },
    axis: {
        x: {
            categories:[
                '15 días',
                '30 días',
                '45 días'
            ],
            type: 'category'
        },
        y: {
            padding: 10,
            tick: {
                format: d3.format('p')
            },
        }
    },
    tooltip: {
        format: {
            value: function(value) {return (value * 100).toFixed(2) + '%'},
        }
    }
};

c3.generate(Object.assign({bindto: '#cierres-trans'}, cierres_params));
c3.generate(Object.assign({bindto: '#cierres-recaudacion'}, cierres_params));
c3.generate(Object.assign({bindto: '#cierres-balance'}, cierres_params));
c3.generate(Object.assign({bindto: '#cierres-servicios'}, cierres_params));


// COMPLETITUD DEL PROCESO
// -----------------------


c3.generate({
    bindto: '#completitud-acreedores',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Emisiones', 50, 45, 5],
            ['Recepciones', 5, 20, 40],
            ['Aceptaciones', 20, 40, 50],
            ['Pagos', 10, 35, 50],
        ],
        type: 'bar',
    },
    color: {
        pattern: [
            '#FF7F0E',
            '#2CA02C',
            '#D62728',
            '#9467BD',
        ]
    },
    padding: {
        right: 15,
    },
    axis: {
        x: {
            categories:['15 días', '30 días', '45 días'],
            type: 'category'
        }
    }
});


c3.generate({
    bindto: '#completitud-deudores',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Recepciones', 5, 20, 40],
            ['Aceptaciones', 20, 40, 50],
            ['Pagos', 10, 35, 50],
        ],
        type: 'bar',
    },
    color: {
        pattern: [
            '#FF7F0E',
            '#2CA02C',
            '#D62728',
            '#9467BD',
        ]
    },
    padding: {
        right: 15,
    },
    axis: {
        x: {
            categories:['15 días', '30 días', '45 días'],
            type: 'category'
        }
    }
});


// CUMPLIMIENTO DE FECHAS
// -----------------------


c3.generate({
    bindto: '#cumplimiento-acreedor',
    size: {
        height: 220,
    },
    data: {
        columns: [
            ['Cumplidos', 0.6923, 0.1111, 0.625, 0.25],
            ['Incumplidos', 0.3076, 0.8888, 0.375, 0.75],
        ],
        type: 'bar',
        order: 'desc',
        groups: [
            [
                'Cumplidos',
                'Incumplidos',
            ]
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#DDDDDD',
        ]
    },
    padding: {
        right: 5,
        left: 35,
    },
    axis: {
        x: {
            categories:[
                'Emisión',
                'Recepción',
                'Aceptación',
                'Pagos',
            ],
            type: 'category'
        },
        y: {
            padding: 10,
            tick: {
                format: d3.format('p')
            },
        },
    },
    tooltip: {
        format: {
            value: function(value) {return (value * 100).toFixed(2) + '%';},
        }
    }
});


c3.generate({
    bindto: '#cumplimiento-deudor',
    size: {
        height: 220,
    },
    data: {
        columns: [
            ['Cumplidos', 0.625, 0.25],
            ['Incumplidos', 0.375, 0.75],
        ],
        type: 'bar',
        order: 'desc',
        groups: [
            [
                'Cumplidos',
                'Incumplidos',
            ]
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#DDDDDD',
        ]
    },
    padding: {
        right: 5,
        left: 35,
    },
    axis: {
        x: {
            categories:[
                'Aceptación',
                'Pagos',
            ],
            type: 'category'
        },
        y: {
            padding: 10,
            tick: {
                format: d3.format('p')
            },
        },
    },
    tooltip: {
        format: {
            value: function(value) {return (value * 100).toFixed(2) + '%';},
        }
    }
});
