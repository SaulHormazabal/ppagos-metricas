{% extends 'templates/base.swig' %}


{% block content %}

    <div class="page-header">
        <h1 class="text-center">Métricas Portal de Pagos</h1>
    </div>

    <div class="row">

        <div class="col-lg-2 col-lg-offset-4 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3 col-xs-10 col-xs-offset-1">

            <a class="btn btn-info col-xs-12" href="cumplimiento.html">

                <i class="fa fa-fw fa-5x fa-handshake-o"></i>
                <i class="fa fa-fw fa-5x fa-money"></i>

                <br>

                Cumplimiento

            </a>

            <p class="col-xs-12"></p>

        </div>

        <div class="col-lg-2 col-sm-4 col-md-3 col-xs-10 col-xs-offset-1">

            <a class="btn btn-info col-xs-12" href="completitud.html">

                <i class="fa fa-fw fa-file-text-o fa-5x"></i>
                <i class="fa fa-fw fa-send fa-5x"></i>

                <br>

                Completitud

            </a>

            <p class="col-xs-12"></p>

        </div>

    </div>

{% endblock content %}
