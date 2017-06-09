require('./components/base.js');
require('./components/billings-vs-payments.js');
require('./components/billings-by-types.js');
require('./components/participant-ranking.js');


console.log($.getJSON);


$.getJSON('data/periods.json', function (data) {

    console.log(data);

    $('#form__period').select2({
        data: data.results,
        placeholder: '-----',
    });

});
