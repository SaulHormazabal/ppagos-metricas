{% extends 'templates/base.swig' %}


{% block title %}Reporte mensual - Metricas PPagos{% endblock title %}


{% block content %}

    <div class="text-center">
        <h1>Métricas Portal de Pagos</h1>
        <h3>Reporte mensual</h3>
    </div>

    <br>

    <div class="hidden-print">

        <form id="filter" action="">
            <div class="row">

                <div class="col-md-3 col-xs-6">
                    <div class="form-group period">
                        <label class="filter control-label text-center" for="form__period">Periodos</label>
                        <select class="form-control" name="period" id="form__period"></select>
                    </div>
                </div>

            </div>
        </form>

    </div>

    {% include 'templates/participant-ranking.swig' %}
    {% include 'templates/billings-vs-payments.swig' %}
    {% include 'templates/billings-by-types.swig' %}

{% endblock content %}


{% block scripts %}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/i18n/es.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>

    <script src="scripts/reporte.js"></script>

{% endblock scripts %}
