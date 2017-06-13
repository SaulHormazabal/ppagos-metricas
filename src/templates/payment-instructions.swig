<div class="page-header">
    <h2>Instrucciones de Pago</h2>
</div>

<p>
    <b>Métricas para las instrucciones de pago correspondiente a:</b>
</p>

<form id="filter" action="">
    <div class="row">

        <div class="col-md-3 col-xs-6">
            <div class="form-group">
                <label class="control-label text-center" for="form__type">Tipo</label>
                <select class="form-control" name="type" id="form__type"></select>
            </div>
        </div>

        <div class="col-md-3 col-xs-6">
            <div class="form-group period">
                <label class="filter control-label text-center" for="form__filter">Periodos</label>
                <select class="form-control" name="filter" id="form__filter"></select>
            </div>
        </div>

        <div class="col-md-3 col-xs-6">
            <div class="form-group">
                <label class="control-label text-center" for="form__creditor">Acreedor</label>
                <select class="form-control" name="creditor" id="form__creditor"></select>
            </div>
        </div>

        <div class="col-md-3 col-xs-6">
            <div class="form-group">
                <label class="control-label text-center" for="form__debtor">Deudor</label>
                <select class="form-control" name="debtor" id="form__debtor"></select>
            </div>
        </div>

    </div>
</form>

<div class="panel panel-green">
    <div class="panel-heading">Lista de instrucciones de pago</div>
    <div class="table-responsive">
        <table class="table table-condensed table-hover">
            <thead>
                <tr>
                    <th class="text-center"><input type="checkbox" checked></th>
                    <th>Concepto</th>
                    <th class="text-center">Cuadro de pago</th>
                    <th class="text-center">Acreedor</th>
                    <th class="text-center">Deudor</th>
                    <th class="text-center">Monto</th>
                    <th class="text-center">Publicación</th>
                    <th class="text-center">Fecha Máxima de Pago</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center"><input type="checkbox" checked></td>
                    <td>Recaudación por Ingresos Tarifarios Troncales de Energía</td>
                    <td class="text-center text-nowrap">SIC_[ITTE][Ene17][L][V01]</td>
                    <td class="text-center">Transelec</td>
                    <td class="text-center">Luz del Norte</td>
                    <td class="text-right">$147.070.879</td>
                    <td class="text-center">05/04/2017</td>
                    <td class="text-center">23/03/2017</td>
                </tr>
                <tr>
                    <td class="text-center"><input type="checkbox" checked></td>
                    <td>Balance de Potencia</td>
                    <td class="text-center text-nowrap">SIC_[SSCC][Feb17][L][V01]</td>
                    <td class="text-center">Luz del Norte</td>
                    <td class="text-center">Endesa</td>
                    <td class="text-right">$81.394.094</td>
                    <td class="text-center">05/04/2017</td>
                    <td class="text-center">23/03/2017</td>
                </tr>
                <tr>
                    <td class="text-center"><input type="checkbox" checked></td>
                    <td>Transferencias Económicas de Energía</td>
                    <td class="text-center text-nowrap">SIC_[ITTE][Ene17][L][V01]</td>
                    <td class="text-center">Hidroeléctrica La Confluencia</td>
                    <td class="text-center">Luz del Norte</td>
                    <td class="text-right">$12.189.456</td>
                    <td class="text-center">05/04/2017</td>
                    <td class="text-center">23/03/2017</td>
                </tr>
                <tr>
                    <td class="text-center"><input type="checkbox" checked></td>
                    <td>Balance de Potencia</td>
                    <td class="text-center text-nowrap">SIC_[SSCC][Feb17][R][V01]</td>
                    <td class="text-center">Luz del Norte</td>
                    <td class="text-center">Transelec</td>
                    <td class="text-right">$11.704.128</td>
                    <td class="text-center">05/04/2017</td>
                    <td class="text-center">23/03/2017</td>
                </tr>
                <tr>
                    <td class="text-center"><input type="checkbox" checked></td>
                    <td>Balance de Potencia</td>
                    <td class="text-center text-nowrap">SIC_[ITTE][Ene17][L][V01]</td>
                    <td class="text-center">Luz del Norte</td>
                    <td class="text-center">Aela</td>
                    <td class="text-right">$8.965.897</td>
                    <td class="text-center">05/04/2017</td>
                    <td class="text-center">23/03/2017</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

{% include 'pagination.swig' %}
