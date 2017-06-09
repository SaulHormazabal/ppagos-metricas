{% extends 'templates/base.swig' %}


{% block title %}Reporte mensual - Metricas PPagos{% endblock title %}


{% block content %}

    <div class="cover">
        <h1>Métricas Portal de Pagos</h1>
        <h3>Reporte mensual</h3>
        <h4 class="visible-print">Marzo de 2017</h4>
    </div>

    <br>

    <div class="row hidden-print">

        <form id="filter" class="col-xs-6" action="">
            <div class="row">

                <div class="col-md-3 col-xs-6">
                    <div class="form-group period">
                        <label class="filter control-label text-center" for="form__period">Periodos</label>
                        <select class="form-control" name="period" id="form__period"></select>
                    </div>
                </div>

            </div>
        </form>

        <div class="col-xs-6 text-right">
            <label for="">&nbsp;</label>
            <br>
            <a href="downloads/reporte.pdf" target="_blank" class="btn btn-default">Descargar</a>
        </div>

    </div>

    {% include 'templates/participant-ranking.swig' %}
    {% include 'templates/billings-vs-payments.swig' %}
    {% include 'templates/billings-by-types.swig' %}

    <img class="hidden" src="images/logo.report.cen.png">

{% endblock content %}


{% block scripts %}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/i18n/es.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>

    <script src="scripts/reporte.js"></script>

{% endblock scripts %}
