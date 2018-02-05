c3.generate({
    bindto: '#billings-vs-payments-quantity',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagadas', 0.3, 0.6, 0.9],
            ['No pagadas', 0.7, 0.4, 0.1],
            ['Facturadas', 0.7, 0.8, 0.95],
            ['No facturadas', 0.3, 0.2, 0.05],
            ['Cerradas', 0.25, 0.55, 0.75],
            ['No cerradas', 0.75, 0.45, 0.25],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagadas',
                'No pagadas',
            ],
            [
                'Facturadas',
                'No facturadas',
            ],
            [
                'Cerradas',
                'No cerradas',
            ],
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#EEEEEE',
            '#FF7F0E',
            '#EEEEEE',
            '#2CA02C',
            '#EEEEEE',
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
    legend: {
        hide: [
            'No pagadas',
            'No facturadas',
            'No cerradas',
        ],
    },
    tooltip: {
        format: {
            value: function(value) {return (value * 100).toFixed(2) + '%'},
        }
    }
});

var total_amount = 11227042;

c3.generate({
    bindto: '#billings-vs-payments-amount',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagadas', 2485621, 7654852, 9124412],
            ['No pagadas', total_amount - 2485621, total_amount - 7654852, total_amount - 9124412],
            ['Facturadas', 1987456, 3987456, 6418374],
            ['No facturadas', total_amount - 1987456, total_amount - 3987456, total_amount - 6418374],
            ['Cerradas', 1124412, 2485621, 3654852],
            ['No cerradas', total_amount - 1124412, total_amount - 2485621, total_amount - 3654852],
        ],
        type: 'bar',
        order: null,
        groups: [
            [
                'Pagadas',
                'No pagadas',
            ],
            [
                'Facturadas',
                'No facturadas',
            ],
            [
                'No cerradas',
                'Cerradas',
            ],
        ],
    },
    color: {
        pattern: [
            '#1F77B4',
            '#EEEEEE',
            '#FF7F0E',
            '#EEEEEE',
            '#2CA02C',
            '#EEEEEE',
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
                format: d3.format('$s')
            },
        }
    },
    legend: {
        hide: [
            'No pagadas',
            'No facturadas',
            'No cerradas',
        ],
    },
    tooltip: {
        format: {
            value: function(value) {
                return d3.format('$,3f')(value).replace(/,/g, '.');
            },
        },
    }
});
