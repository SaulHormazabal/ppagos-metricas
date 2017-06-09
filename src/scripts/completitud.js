require('./components/payment-instructions.js');


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


// PRUEBA: EVOLUCION 45
// --------------------

var completitud_params = {
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Completas'  , 0.01, 0.03, 0.05, 0.10, 0.15, 0.22, 0.25, 0.26, 0.30, 0.40, 0.45, 0.50, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.60, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70],
            ['Incompletas', 0.99, 0.97, 0.95, 0.90, 0.85, 0.78, 0.75, 0.74, 0.70, 0.60, 0.55, 0.50, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.40, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30, 0.30],
        ],
        type: 'area',
        order: 'asc',
        groups: [
            [
                'Incompletas',
                'Completas',
            ],
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#CCCCCC',
        ],
    },
    padding: {
        left: 35,
        right: 5,
    },
    grid: {
        x: {
            lines: [
                {value: 5, text: 'Deadline', class: 'stroke-red'},
            ],
        },
    },
    axis: {
        x: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        y: {
            padding: {
                top: 0,
            },
            tick: {
                format: d3.format('p'),
            },
        },
    },
};

c3.generate(Object.assign({bindto: '#completitud-acreedores-emisiones'}, completitud_params));
c3.generate(Object.assign({bindto: '#completitud-acreedores-recepciones'}, completitud_params));
c3.generate(Object.assign({bindto: '#completitud-acreedores-aceptaciones'}, completitud_params));
c3.generate(Object.assign({bindto: '#completitud-acreedores-pagos'}, completitud_params));
