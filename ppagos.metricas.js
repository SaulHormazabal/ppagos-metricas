var $datepicker = $('#filter .input-group.date')

$datepicker.datepicker({
    language: 'es',
    daysOfWeekHighlighted: '1,2,3,4,5',
    autoclose: true,
    format: 'yyyy-mm-dd',
});

$datepicker.datepicker('setDate', new Date());


// CIERRE DE INSTRUCCIONES DE PAGO
// -------------------------------

var cierres_params = {
    size: {
        height: 160,
    },
    data: {
        columns: [
            ['Cerrados', 0.6, 0.7, 0.8],
            ['Abiertos', 0.4, 0.3, 0.2],
        ],
        type: 'bar',
        labels: {
            // format: d3.format('p'),
            format: function(value) {return (value * 100).toFixed(2) + '%'},
        },
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
        height: 160,
    },
    data: {
        columns: [
            ['Emisiones', 50, 45, 5],
            ['Recepciones', 5, 20, 40],
            ['Aceptaciones', 20, 40, 50],
            ['Pagos', 10, 35, 50],
        ],
        type: 'bar',
        labels: true,
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
        height: 160,
    },
    data: {
        columns: [
            ['Recepciones', 5, 20, 40],
            ['Aceptaciones', 20, 40, 50],
            ['Pagos', 10, 35, 50],
        ],
        type: 'bar',
        labels: true,
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
    bindto: '#cumplimiento',
    size: {
        height: 160,
    },
    data: {
        columns: [
            // ['Cumplidos', 45, 5, 25, 10],
            ['Cumplidos', 0.6923, 0.1111, 0.625, 0.25],
            // ['Incumplidos', 20, 40, 15, 30],
            ['Incumplidos', 0.3076, 0.8888, 0.375, 0.75],
        ],
        type: 'bar',
        labels: {
            // format: d3.format('p'),
            format: function(value) {return (value * 100).toFixed(2) + '%'},
        },
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
    axis: {
        x: {
            categories:[
                'Emisiones',
                'Recepciones',
                'Aceptaciones',
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
