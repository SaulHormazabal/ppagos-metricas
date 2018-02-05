require('./components/base.js');
require('./components/payment-instructions.js');


// CUMPLIMIENTO DE FECHAS
// -----------------------

c3.generate({
    bindto: '#cumplimiento-acreedor',
    size: {
        height: 220,
    },
    data: {
        columns: [
            [
                'Cumplidos',
                0.6923,
                0.1111,
                0.625,
                // 0.25,
            ],
            [
                'Incumplidos',
                0.3076,
                0.8888,
                0.375,
                // 0.75,
            ],
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
            '#00a4b2',
            '#DDDDDD',
        ]
    },
    padding: {
        right: 5,
        left: 35,
    },
    bar: {
        width: {
            max: 92,
        },
    },
    axis: {
        x: {
            categories:[
                'Facturación',
                'Pagos',
                'Cierre',
                // 'Pagos',
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
            '#00a4b2',
            '#DDDDDD',
        ]
    },
    padding: {
        right: 5,
        left: 35,
    },
    bar: {
        width: {
            max: 92,
        },
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
