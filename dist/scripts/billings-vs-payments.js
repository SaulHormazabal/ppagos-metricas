(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
c3.generate({
    bindto: '#billings-vs-payments-quantity',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagadas', 0.3, 0.6, 0.9],
            ['Facturadas', 0.4, 0.2, 0.05],
            ['Sin facturar', 0.3, 0.2, 0.05],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagadas',
                'Facturadas',
                'Sin facturar',
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
});

c3.generate({
    bindto: '#billings-vs-payments-amount',
    size: {
        height: 180,
    },
    data: {
        columns: [
            ['Pagadas', 2485621, 7654852, 9124412],
            ['Facturadas', 5987456, 1987456, 1418374],
            ['Sin facturar', 2753965, 1584734, 684256],
        ],
        type: 'bar',
        order: 'asc',
        groups: [
            [
                'Pagadas',
                'Facturadas',
                'Sin facturar',
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

},{}]},{},[1]);
