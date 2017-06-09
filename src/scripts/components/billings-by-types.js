c3.generate({
    bindto: '#billings-by-types-quantity',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagados',    0.4, 0.6, 0.9, 0.3],
            ['Pendientes', 0.6, 0.4, 0.1, 0.7],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagados',
                'Pendientes',
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
        rotated: true,
        x: {
            categories:[
                'TEE',
                'ITTE',
                'BP',
                'SSCC',
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
});

c3.generate({
    bindto: '#billings-by-types-amount',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagados', 2485621, 7654852, 9124412, 1584734],
            ['Pendientes', 5987456, 1987456, 1418374, 1584734],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagados',
                'Pendientes',
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
        rotated: true,
        x: {
            categories:[
                'TEE',
                'ITTE',
                'BP',
                'SSCC',
            ],
            type: 'category'
        },
        y: {
            padding: 10,
            tick: {
                // format: d3.format('$')
                // format: d3.format('$.,2f')
                format: d3.format('$s')
                // format: d3.format('.2s')
            },
        }
    },
    tooltip: {
        format: {
            value: function(value) {
                return d3.format('$,3f')(value).replace(/,/g, '.');
            },
            // value: d3.format('$,.3f')(value).replace(/,/g, ' ')
        }
    }
});
