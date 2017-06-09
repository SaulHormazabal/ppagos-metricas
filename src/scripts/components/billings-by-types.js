c3.generate({
    bindto: '#billings-by-types-quantity',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagados',       0.4, 0.6, 0.9, 0.3],
            ['Facturado',     0.3, 0.2, 0.05, 0.65],
            ['Sin facturado', 0.3, 0.2, 0.05, 0.05],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagados',
                'Facturado',
                'Sin facturado',
            ]
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#FF7F0E',
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
            ['Pagados',       2485621, 7654852, 9124412, 1584734],
            ['Facturado',     5987456, 1987456, 1418374, 1584734],
            ['Sin facturado', 4356156, 2345654, 3456789,  456789],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagados',
                'Facturado',
                'Sin facturado',
            ]
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#FF7F0E',
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
