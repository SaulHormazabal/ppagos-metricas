<div class="page-header">
    <h2>Ranking de facturación</h2>
</div>

<div class="row">

    <div class="col-md-6 co-sm-12 col-xs-12">

        <div id="ranking-emisions-creditor-mount" class="panel panel-green">

            <div class="panel-heading">Facturaciones pendientes por monto</div>

            <div class="table-responsive">
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th class="text-center">Nº</th>
                            <th>Participante</th>
                            <th class="text-right">Total</th>
                            <th class="text-right">Porcentaje</th>
                            <th class="text-right text-bold active">Pendiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template>
                            <tr>
                                <td class="ranking text-center"></td>
                                <td class="participant"></td>
                                <td class="text-right total"></td>
                                <td class="text-right percentage"></td>
                                <td class="text-right text-bold active pending"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

        </div>

        {% include 'pagination.swig' %}

    </div>

    <div class="col-md-6 co-sm-12 col-xs-12">

        <div id="ranking-emisions-creditor-quantity" class="panel panel-green">

            <div class="panel-heading">Facturaciones pendientes por cantidad</div>

            <div class="table-responsive">
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th class="text-center">Nº</th>
                            <th>Participante</th>
                            <th class="text-right">Total</th>
                            <th class="text-right">Porcentaje</th>
                            <th class="text-right text-bold active">Pendiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template>
                            <tr>
                                <td class="ranking text-center"></td>
                                <td class="participant"></td>
                                <td class="text-right total"></td>
                                <td class="text-right percentage"></td>
                                <td class="text-right text-bold active pending"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

        </div>

        {% include 'pagination.swig' %}

    </div>

</div>

<div class="page-header">
    <h2>Ranking de pagos</h2>
</div>

<div class="row">

    <div class="col-md-6 co-sm-12 col-xs-12">

        <div id="ranking-acceptances-debtor-mount" class="panel panel-green">

            <div class="panel-heading">Pagos pendientes por monto</div>

            <div class="table-responsive">
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th class="text-center">Nº</th>
                            <th>Participante</th>
                            <th class="text-right">Total</th>
                            <th class="text-right">Porcentaje</th>
                            <th class="text-right text-bold active">Pendiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template>
                            <tr>
                                <td class="ranking text-center"></td>
                                <td class="participant"></td>
                                <td class="text-right total"></td>
                                <td class="text-right percentage"></td>
                                <td class="text-right text-bold active pending"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

        </div>

        {% include 'pagination.swig' %}

    </div>

    <div class="col-md-6 co-sm-12 col-xs-12">

        <div id="ranking-acceptances-debtor-quantity" class="panel panel-green">

            <div class="panel-heading">Pagos pendientes por cantidad</div>

            <div class="table-responsive">
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th class="text-center">Nº</th>
                            <th>Participante</th>
                            <th class="text-right">Total</th>
                            <th class="text-right">Porcentaje</th>
                            <th class="text-right text-bold active">Pendiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template>
                            <tr>
                                <td class="ranking text-center"></td>
                                <td class="participant"></td>
                                <td class="text-right total"></td>
                                <td class="text-right percentage"></td>
                                <td class="text-right text-bold active pending"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

        </div>

        {% include 'pagination.swig' %}

    </div>

</div>
