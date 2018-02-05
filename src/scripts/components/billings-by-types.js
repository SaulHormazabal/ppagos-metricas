
let render = (data) => {

    let $container = $('#billings-by-types');
    let $template = $container.find('template').contents(':first-child');

    for (let row of data.results) {

        let $panel = $template.clone();


        $panel.find('.panel-heading').text(row.name)

        $panel.find('.paid .mount').text('$' + row.paid.toLocaleString().replace(/,/g, '.'))
        $panel.find('.paid .percentage').text((row.paid * 100 / row.total).toFixed(2) + '%')

        $panel.find('.invoiced .mount').text('$' + row.invoiced.toLocaleString().replace(/,/g, '.'))
        $panel.find('.invoiced .percentage').text((row.invoiced * 100 / row.total).toFixed(2) + '%')

        // $panel.find('.unbilled .mount').text('$' + row.unbilled.toLocaleString().replace(/,/g, '.'))
        // $panel.find('.unbilled .percentage').text((row.unbilled * 100 / row.total).toFixed(2) + '%')

        // $panel.find('.ranking').html(row.ranking)
        // $panel.find('.pending').text(row.pending.toLocaleString().replace(/,/g, '.'))

        $container.append($panel);

        c3.generate({
            bindto: '#billings-by-types > div:last-child .chart div',
            size: {
                height: 120,
            },
            data: {
                columns: [
                    ['Pagadas',       row.paid],
                    ['No pagadas',    row.total - row.paid],
                    ['Facturadas',    row.invoiced],
                    ['No facturadas', row.total - row.invoiced],
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
                ],
            },
            color: {
                pattern: [
                    '#1F77B4',
                    '#DDDDDD',
                    '#FF7F0E',
                    '#DDDDDD',
                ]
            },
            bar: {
                width: {
                    max: 20,
                },
            },
            axis: {
                rotated: true,
                x: {
                    categories:[
                        row.initial.toUpperCase(),
                    ],
                    type: 'category',
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
                }
            }
        });

    }

};

$.getJSON('data/billings-by-types.json', render);


// c3.generate({
//     bindto: '#billings-by-types-amount-itte',
//     size: {
//         height: 180,
//     },
//     data: {
//         columns: [
//             ['Pagadas',       9456125],
//             ['Facturadas',     4562357],
//             ['Sin facturadas', 1745123],
//         ],
//         type: 'bar',
//         order: 'asc',
//         groups: [
//             [
//                 'Pagadas',
//                 'Facturadas',
//                 'Sin facturadas',
//             ]
//         ],
//     },
//     color: {
//         pattern: [
//             '#1F77B4',
//             '#FF7F0E',
//             '#DDDDDD',
//         ]
//     },
//     axis: {
//         rotated: true,
//         x: {
//             categories:[
//                 'ITTE',
//             ],
//             type: 'category'
//         },
//         y: {
//             padding: 10,
//             tick: {
//                 format: d3.format('$s')
//             },
//         }
//     },
//     tooltip: {
//         format: {
//             value: function(value) {
//                 return d3.format('$,3f')(value).replace(/,/g, '.');
//             },
//         }
//     }
// });


// c3.generate({
//     bindto: '#billings-by-types-amount-bp',
//     size: {
//         height: 180,
//     },
//     data: {
//         columns: [
//             ['Pagadas',       45123852],
//             ['Facturadas',      9465789],
//             ['Sin facturadas',  1025420],
//         ],
//         type: 'bar',
//         order: 'asc',
//         groups: [
//             [
//                 'Pagadas',
//                 'Facturadas',
//                 'Sin facturadas',
//             ]
//         ],
//     },
//     color: {
//         pattern: [
//             '#1F77B4',
//             '#FF7F0E',
//             '#DDDDDD',
//         ]
//     },
//     axis: {
//         rotated: true,
//         x: {
//             categories:[
//                 'BP',
//             ],
//             type: 'category'
//         },
//         y: {
//             padding: 10,
//             tick: {
//                 format: d3.format('$s')
//             },
//         }
//     },
//     tooltip: {
//         format: {
//             value: function(value) {
//                 return d3.format('$,3f')(value).replace(/,/g, '.');
//             },
//         }
//     }
// });

// c3.generate({
//     bindto: '#billings-by-types-amount-sscc',
//     size: {
//         height: 180,
//     },
//     data: {
//         columns: [
//             ['Pagadas',       0.64],
//             ['Facturadas',     0.309],
//             ['Sin facturadas', 0.1182],
//         ],
//         type: 'bar',
//         order: 'desc',
//         // groups: [
//         //     [
//         //         'Pagadas',
//         //         'Facturadas',
//         //         'Sin facturadas',
//         //     ]
//         // ],
//     },
//     color: {
//         pattern: [
//             '#1F77B4',
//             '#FF7F0E',
//             '#DDDDDD',
//         ]
//     },
//     // padding: {
//     //     right: 15,
//     // },
//     axis: {
//         rotated: true,
//         x: {
//             categories:[
//                 'SSCC',
//             ],
//             type: 'category'
//         },
//         y: {
//             padding: 10,
//             tick: {
//                 format: d3.format('$s')
//             },
//         }
//     },
//     tooltip: {
//         format: {
//             value: function(value) {
//                 return d3.format('$,3f')(value).replace(/,/g, '.');
//             },
//         }
//     }
// });
