{% extends 'templates/base.swig' %}


{% block title %}Cumplimiento - Metricas PPagos{% endblock title %}


{% block content %}

    <div class="text-center">
        <h1>Métricas Portal de Pagos</h1>
        <h3>Cumplimiento</h3>
    </div>

    <br>

    <div class="hidden-print">
        {% include 'templates/payment-instructions.swig' %}
    </div>

    {% include 'templates/fulfillment-dates.swig' %}

{% endblock content %}


{% block scripts %}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/i18n/es.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>

    <script src="scripts/cumplimiento.js"></script>

{% endblock scripts %}
