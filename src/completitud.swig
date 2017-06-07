{% extends 'templates/base.swig' %}


{% block title %}Completitud - Metricas PPagos{% endblock title %}


{% block content %}

    <div class="text-center">
        <h1>Métricas Portal de Pagos</h1>
        <h3>Completitud</h3>
    </div>

    <br>

    <div class="hidden-print">
        {% include 'templates/payment-instruction-filters.swig' %}
    </div>

    {% include 'templates/completeness-reporting-information.swig' %}

{% endblock content %}


{% block scripts %}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/i18n/es.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>

    <script src="scripts/completitud.js"></script>
    <script src="scripts/main.js"></script>

{% endblock scripts %}
