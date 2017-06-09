require('./components/payment-instructions.js');
require('./components/billings-vs-payments.js');
require('./components/billings-by-types.js');
require('./components/participant-ranking.js');


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
