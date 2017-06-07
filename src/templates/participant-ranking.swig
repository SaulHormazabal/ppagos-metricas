<div class="page-header">
    <h2>Ranking de participantes</h2>
</div>

<div class="row">

    <div class="col-md-6 co-sm-12">

        <div id="ranking-emisions-creditor-mount" class="panel panel-green">

            <div class="panel-heading">Emisiones pendientes de los acreedores por monto</div>

            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th class="text-center">Ranking</th>
                        <th>Participante</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Porcentaje</th>
                        <th class="text-center text-bold">Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                    <template>
                        <tr>
                            <td class="ranking text-center"></td>
                            <td class="participant"></td>
                            <td class="total text-right"></td>
                            <td class="percentage text-right"></td>
                            <td class="pending text-bold text-right active"></td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </div>

    </div>

    <div class="col-md-6 co-sm-12">

        <div id="ranking-emisions-creditor-quantity" class="panel panel-green">

            <div class="panel-heading">Emisiones pendientes de los acreedores por cantidad</div>

            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th class="text-center">Ranking</th>
                        <th>Participante</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Porcentaje</th>
                        <th class="text-center text-bold">Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                    <template>
                        <tr>
                            <td class="ranking text-center"></td>
                            <td class="participant"></td>
                            <td class="total text-right"></td>
                            <td class="percentage text-right"></td>
                            <td class="pending text-bold text-right active"></td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </div>

    </div>

</div>

<div class="row">

    <div class="col-md-6 co-sm-12">

        {% include 'pagination.swig' %}

    </div>

    <div class="col-md-6 co-sm-12">

        {% include 'pagination.swig' %}

    </div>

</div>

<div class="row">

    <div class="col-md-6 co-sm-12">

        <div id="ranking-acceptances-debtor-mount" class="panel panel-green">

            <div class="panel-heading">Aceptaciones pendientes de los deudores por monto</div>

            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th class="text-center">Ranking</th>
                        <th>Participante</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Porcentaje</th>
                        <th class="text-center text-bold">Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                    <template>
                        <tr>
                            <td class="ranking text-center"></td>
                            <td class="participant"></td>
                            <td class="total text-right"></td>
                            <td class="percentage text-right"></td>
                            <td class="pending text-bold text-right active"></td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </div>

    </div>

    <div class="col-md-6 co-sm-12">

        <div id="ranking-acceptances-debtor-quantity" class="panel panel-green">

            <div class="panel-heading">Aceptaciones pendientes de los deudores por cantidad</div>

            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th class="text-center">Ranking</th>
                        <th>Participante</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Porcentaje</th>
                        <th class="text-center text-bold">Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                    <template>
                        <tr>
                            <td class="ranking text-center"></td>
                            <td class="participant"></td>
                            <td class="total text-right"></td>
                            <td class="percentage text-right"></td>
                            <td class="pending text-bold text-right active"></td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </div>

    </div>

</div>

<div class="row">

    <div class="col-md-6 co-sm-12">

        {% include 'pagination.swig' %}

    </div>

    <div class="col-md-6 co-sm-12">

        {% include 'pagination.swig' %}

    </div>

</div>
