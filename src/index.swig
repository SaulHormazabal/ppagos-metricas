{% extends 'templates/base.swig' %}


{% block styles %}

    <style>
        .btn {
            padding: 2rem 0;
        }
    </style>

{% endblock styles %}


{% block content %}

    <div class="page-header">
        <h1 class="text-center">Métricas Portal de Pagos</h1>
    </div>

    <div class="row">

        <div class="col-lg-2 col-lg-offset-3 col-md-4 col-sm-4 col-xs-10 col-xs-offset-1 col-sm-offset-0">

            <a class="btn btn-info col-xs-12" href="cumplimiento.html">

                <i class="fa fa-fw fa-5x fa-handshake-o"></i>
                <i class="fa fa-fw fa-5x fa-money"></i>

                <hr>

                Cumplimiento

            </a>

            <p class="col-xs-12"></p>

        </div>

        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-10 col-xs-offset-1 col-sm-offset-0">

            <a class="btn btn-info col-xs-12" href="completitud.html">

                <i class="fa fa-fw fa-file-text-o fa-5x"></i>
                <i class="fa fa-fw fa-send fa-5x"></i>

                <hr>

                Completitud

            </a>

            <p class="col-xs-12"></p>

        </div>

        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-10 col-xs-offset-1 col-sm-offset-0">

            <a class="btn btn-info col-xs-12" href="reporte.html">

                <i class="fa fa-fw fa-calendar-check-o fa-5x"></i>
                <i class="fa fa-fw fa-balance-scale fa-5x"></i>

                <hr>

                Reporte mensual

            </a>

            <p class="col-xs-12"></p>

        </div>

    </div>

{% endblock content %}
