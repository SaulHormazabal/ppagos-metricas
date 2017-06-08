(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let render_mount_table = function(selector, data) {

    let $panel = $(selector);
    let $tbody = $panel.find('tbody');

    for (let row of data.results) {
        let $tr = $tbody.find('template').contents('tr').clone();

        $tr.find('.participant').text(row.participant.name)
        $tr.find('.total').text('$' + row.total.toLocaleString().replace(/,/g, '.'))
        $tr.find('.ranking').html(row.ranking)
        $tr.find('.percentage').text((row.pending * 100 / row.total).toFixed(2) + '%')
        $tr.find('.pending').text('$' + row.pending.toLocaleString().replace(/,/g, '.'))

        $tbody.append($tr);

    }

}

let render_quantity_table = function(selector, data) {

    let $panel = $(selector);
    let $tbody = $panel.find('tbody');

    for (let row of data.results) {
        let $tr = $tbody.find('template').contents('tr').clone();

        $tr.find('.participant').text(row.participant.name)
        $tr.find('.total').text(row.total.toLocaleString().replace(/,/g, '.'))
        $tr.find('.ranking').html(row.ranking)
        $tr.find('.percentage').text((row.pending * 100 / row.total).toFixed(2) + '%')
        $tr.find('.pending').text(row.pending.toLocaleString().replace(/,/g, '.'))

        $tbody.append($tr);

    }

}

$.getJSON('data/ranking-emisions-creditor-mount.json', render_mount_table.bind(this, '#ranking-emisions-creditor-mount'));
$.getJSON('data/ranking-emisions-creditor-quantity.json', render_quantity_table.bind(this, '#ranking-emisions-creditor-quantity'));

$.getJSON('data/ranking-acceptances-debtor-mount.json', render_mount_table.bind(this, '#ranking-acceptances-debtor-mount'));
$.getJSON('data/ranking-acceptances-debtor-quantity.json', render_quantity_table.bind(this, '#ranking-acceptances-debtor-quantity'));

},{}]},{},[1]);
