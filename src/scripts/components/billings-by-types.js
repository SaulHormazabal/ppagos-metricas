
let render = (data) => {

    let $container = $('#billings-by-types');
    let $template = $container.find('template').contents(':first-child');

    for (let row of data.results) {

        let $panel = $template.clone();

        let total = row.paid + row.invoiced + row.unbilled;

        $panel.find('.panel-heading').text(row.name)

        $panel.find('.paid .mount').text('$' + row.paid.toLocaleString().replace(/,/g, '.'))
        $panel.find('.paid .percentage').text((row.paid * 100 / total).toFixed(2) + '%')

        $panel.find('.invoiced .mount').text('$' + row.invoiced.toLocaleString().replace(/,/g, '.'))
        $panel.find('.invoiced .percentage').text((row.invoiced * 100 / total).toFixed(2) + '%')

        $panel.find('.unbilled .mount').text('$' + row.unbilled.toLocaleString().replace(/,/g, '.'))
        $panel.find('.unbilled .percentage').text((row.unbilled * 100 / total).toFixed(2) + '%')
        // $panel.find('.ranking').html(row.ranking)
        // $panel.find('.pending').text(row.pending.toLocaleString().replace(/,/g, '.'))

        $container.append($panel);

        console.log($('#billings-by-types > div:last-child .chart')[0]);

        c3.generate({
            bindto: '#billings-by-types > div:last-child .chart div',
            size: {
                height: 120,
            },
            data: {
                columns: [
                    ['Pagados',       row.paid],
                    ['Facturado',     row.invoiced],
                    ['Sin facturado', row.unbilled],
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
//             ['Pagados',       9456125],
//             ['Facturado',     4562357],
//             ['Sin facturado', 1745123],
//         ],
//         type: 'bar',
//         order: 'asc',
//         groups: [
//             [
//                 'Pagados',
//                 'Facturado',
//                 'Sin facturado',
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
//             ['Pagados',       45123852],
//             ['Facturado',      9465789],
//             ['Sin facturado',  1025420],
//         ],
//         type: 'bar',
//         order: 'asc',
//         groups: [
//             [
//                 'Pagados',
//                 'Facturado',
//                 'Sin facturado',
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
//             ['Pagados',       0.64],
//             ['Facturado',     0.309],
//             ['Sin facturado', 0.1182],
//         ],
//         type: 'bar',
//         order: 'desc',
//         // groups: [
//         //     [
//         //         'Pagados',
//         //         'Facturado',
//         //         'Sin facturado',
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
