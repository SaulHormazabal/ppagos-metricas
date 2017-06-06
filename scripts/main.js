(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var years = [
    2014,
    2015,
    2016,
    2017,
];


var months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
];


var billing_windows = [
    'SIC_[SSCC][Feb17]',
    'SIC_[BP__][Feb17]',
    'SIC_[ITTE][Feb17]',
    'SIC_[TEE][Feb17]',
    'SIC_[SSCC][Ene17]',
    'SIC_[BP__][Ene17]',
    'SIC_[ITTE][Ene17]',
    'SIC_[TEE][Ene17]',
];


var billing_types = [
    'Transferencias Económicas de Energía',
    'Recaudación por Ingresos Tarifarios Troncales de Energía',
    'Balance de Potencia',
    'Servicios Complementarios',
];


var payment_matrices = [
    'SIC_[SSCC][Feb17][L][V01]',
    'SIC_[SSCC][Ene17][L][V01]',
    'SIC_[BP__][Ene17][L][V01]',
    'SIC_[ITTE][Ene17][L][V01]',
    'SIC_[TEE][Ene17][L][V01]',
    'SIC_[SSCC][Feb17][R][V01]',
    'SIC_[BP__][Feb17][L][V01]',
    'SIC_[ITTE][Feb17][L][V01]',
    'SIC_[TEE][Feb17][L][V01]',
];


var participants = [
    'AJTE',
    'Abengoa',
    'Aela',
    'Alba',
    'Amanecer Solar',
    'Andes Generación',
    'Arauco Bioenergía',
    'Barrick Generación',
    'Bellavista',
    'Beneo Orafti',
    'Bio Energía Molina',
    'Biocruz Generación',
    'CELMSA',
    'CGE Distribución',
    'Carbomet',
    'Carrán',
    'Central Hidroeléctrica Rio Mulchén',
    'Chanleufu',
    'Chilectra',
    'Chilquinta',
    'Chungungo',
    'Colbún',
    'Collil',
    'Comasa',
    'Commonplace',
    'Contra',
    'Curileufu',
    'CuzCuz',
    'Dener',
    'Divisadero',
    'Donguil Energía',
    'Dosal',
    'Duke Energy',
    'EBCO Atacama',
    'EDAM LTDA.',
    'EGP del Sur SpA',
    'EMELDA',
    'ERNC I',
    'El Agrio',
    'El Arrayán',
    'El Arroyo',
    'El Boco',
    'El Raso',
    'Elektragen',
    'Eletrans',
    'Eléctrica Caren',
    'Eléctrica El Galpón',
    'Eléctrica Licán',
    'Endesa',
    'Enerbosch',
    'Energía León',
    'Energía Pacífico',
    'Energías del Futuro',
    'Enlasa',
    'Equipos Generación',
    'Eólica La Esperanza',
    'Frontel',
    'GENPAC',
    'GESTEL',
    'GR ARAUCARIA',
    'GR COIGÜE',
    'GR HUINGAN',
    'GR Pan de Azúcar',
    'Generadora Piutel',
    'Generadora Roblería',
    'Gesan',
    'Guacolda',
    'HBS Energía',
    'HBS GNL',
    'HIDROBONITO',
    'HORMIGA SOLAR',
    'HidroMaule',
    'HidroMuchi',
    'Hidroangol',
    'Hidrocallao',
    'Hidroelec',
    'Hidroeléctrica Allipén',
    'Hidroeléctrica Cumpeo',
    'Hidroeléctrica Diuto',
    'Hidroeléctrica Dongo',
    'Hidroeléctrica El Manzano',
    'Hidroeléctrica El Mirador',
    'Hidroeléctrica La Arena',
    'Hidroeléctrica La Confluencia',
    'Hidroeléctrica La Higuera',
    'Hidroeléctrica Puclaro',
    'Hidroeléctrica Rio Huasco',
    'Hidroeléctrica San Andrés',
    'Hidronalcas',
    'Hidropaloma',
    'Huajache',
    'Imelsa',
    'La Montaña 1',
    'Las Flores',
    'Las Pampas',
    'Lleuquereo',
    'Los Espinos',
    'Los Padres Hidro',
    'Los Pinos Bio',
    'Luna',
    'Luz del Norte',
    'Mainco',
    'Molinera Villarrica',
    'Norvind',
    'Nueva Degan',
    'PMGD Bureo',
    'PSF Lomas Coloradas',
    'PSF Pama',
    'Pacific Hydro',
    'Pacific Hydro Chacayes',
    'Parque Eólico Lebu',
    'Parque Eólico Los Cururos',
    'Parque Solar Los Loros',
    'Pehuenche',
    'Pichilonco',
    'Puntilla',
    'Raki',
    'Renovalia Chile Seis, SPA',
    'Renovalia Chile Siete, SPA',
    'Rio Alto SA',
    'Rio Puma',
    'Rucatayo',
    'SGA',
    'STS',
    'SWC',
    'San Andrés',
    'San Juan',
    'Santa Irene',
    'Santa Marta',
    'Sol',
    'Stericycle',
    'Subsole',
    'Sunenergreen (Altos del Paico)',
    'Tamm',
    'Teatinos',
    'Tiltil Solar',
    'Tomaval Generación',
    'Trailelfu',
    'TransChile',
    'Transelec',
    'Ucuquer',
    'Ucuquer Dos',
];


module.exports = {
    years: years,
    months: months,
    billing_windows: billing_windows,
    billing_types: billing_types,
    payment_matrices: payment_matrices,
    participants: participants,
}

},{}],2:[function(require,module,exports){
var data = require('./data.babel');


// PAGINATION
// -------------------------------

$('.pagination a').on('click', function(e) {
    e.preventDefault();

    $(this).parents('.pagination').find('li.active').removeClass('active');
    $(this).parents('li:first').addClass('active');
});


// SELECT2
// -------------------------------

$.fn.select2.defaults.set('theme', 'bootstrap');
$.fn.select2.defaults.set('width', '100%');

var year_periods = data.years.map((year) => {
    return {id: year, text: year};
});


var month_periods = data.years.reduce((stream, year) => {
    year = year.toString().substr(2);

    for (let month of data.months)
        stream.push({id: month + year, text: month + year});

    return stream;

}, []);


var $type = $('#form__type').select2({
    data: [
        {id: 'year', text: 'año'},
        {id: 'month', text: 'mes', selected: true},
        {id: 'other', text: 'otro'},
    ],
});


var $period = $('#form__period').select2({
    data: month_periods,
    placeholder: '-----',
});

$period.val('Feb17').trigger('change');

$type.on('change', function (e) {

    $period.empty();

    if (e.target.value === 'year')
        $period.select2({
            data: year_periods,
            multiple: false,
            placeholder: '-----',
        });

    else if (e.target.value === 'month')
        $period.select2({
            data: month_periods,
            multiple: false,
            placeholder: '-----',
        });

    else if (e.target.value === 'other')
        $period.select2({
            data: month_periods,
            multiple: true,
            placeholder: '-----',
        });

    $period.val(null).trigger('change');

});


$('#form__billing-window').select2({
    data: ['Todos'].concat(data.billing_windows),
    placeholder: '-----',
});


$('#form__billing-type').select2({
    data: ['Todos'].concat(data.billing_types),
    placeholder: '-----',
});

$('#form__payment-matrix').select2({
    data: ['Todos'].concat(data.payment_matrices),
    placeholder: '-----',
});


$('#form__creditor').select2({
    data: ['Todos'].concat(data.participants),
    placeholder: '-----',
});


$('#form__debtor').select2({
    data: ['Todos'].concat(data.participants),
    placeholder: '-----',
});

},{"./data.babel":1}]},{},[2]);
