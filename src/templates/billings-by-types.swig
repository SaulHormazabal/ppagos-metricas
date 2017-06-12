<div class="page-header">
    <h2>Facturaciones por concepto</h2>
</div>

<div id="billings-by-types" class="row">

    <template id="template-billing-type">

        <div class="col-md-12 col-lg-6">

            <div class="panel panel-green">

                <div class="panel-heading"></div>

                <div class="panel-body row">

                    <div class="chart col-xs-12 col-sm-7 col-md-7 col-lg-7">
                        <div></div>
                    </div>

                    <div class="detail col-xs-12 col-sm-5 col-md-5 col-lg-5">
                        <table class="table table-condensed">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-right">Monto</th>
                                    <th class="text-right">Porcentaje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="paid">
                                    <td><span class="color-blue">◼</span> Pagado</td>
                                    <td class="text-number mount"></td>
                                    <td class="text-number percentage"></td>
                                </tr>
                                <tr class="invoiced">
                                    <td><span class="color-orange">◼</span> Facturado</td>
                                    <td class="text-number mount"></td>
                                    <td class="text-number percentage"></td>
                                </tr>
                                <tr class="unbilled">
                                    <td><span class="color-grey">◼</span> Sin facturar</td>
                                    <td class="text-number mount"></td>
                                    <td class="text-number percentage"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </div>

    </template>
{#
    <div class="col-md-12 col-lg-6">

        <div class="panel panel-green">

            <div class="panel-heading">Transferencias Económicas de Energía</div>

            <div class="panel-body row">

                <div class="chart col-xs-12 col-sm-7 col-md-7 col-lg-7">
                    <div id="billings-by-types-amount-tee"></div>
                </div>

                <div class="detail col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-right">Monto</th>
                                <th class="text-right">Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="color-blue">◼</span> Pagado</td>
                                <td class="text-number">$9.456.125</td>
                                <td class="text-number" data-raw="64.05024382594901">64.05%</td>
                            </tr>
                            <tr>
                                <td><span class="color-orange">◼</span> Facturado</td>
                                <td class="text-number">$4.562.357</td>
                                <td class="text-number" data-raw="30.902730058139593">30.90%</td>
                            </tr>
                            <tr>
                                <td><span class="color-grey">◼</span> Sin facturar</td>
                                <td class="text-number">$1.745.123</td>
                                <td class="text-number" data-raw="0.1182043952002238">11.82%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>

    <div class="col-md-12 col-lg-6">

        <div class="panel panel-green">

            <div class="panel-heading">Recaudación por Ingresos Tarifarios Troncales de Energía</div>

            <div class="panel-body row">

                <div class="chart col-xs-12 col-sm-7 col-md-7 col-lg-7">
                    <div id="billings-by-types-amount-itte"></div>
                </div>

                <div class="detail col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-right">Monto</th>
                                <th class="text-right">Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="color-blue">◼</span> Pagado</td>
                                <td class="text-number">$9.456.125</td>
                                <td class="text-number" data-raw="64.05024382594901">64.05%</td>
                            </tr>
                            <tr>
                                <td><span class="color-orange">◼</span> Facturado</td>
                                <td class="text-number">$4.562.357</td>
                                <td class="text-number" data-raw="30.902730058139593">30.90%</td>
                            </tr>
                            <tr>
                                <td><span class="color-grey">◼</span> Sin facturar</td>
                                <td class="text-number">$1.745.123</td>
                                <td class="text-number" data-raw="0.1182043952002238">11.82%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>

    <div class="col-md-12 col-lg-6">

        <div class="panel panel-green">

            <div class="panel-heading">Balance de Potencia</div>

            <div class="panel-body row">

                <div class="chart col-xs-12 col-sm-7 col-md-7 col-lg-7">
                    <div id="billings-by-types-amount-bp"></div>
                </div>

                <div class="detail col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-right">Monto</th>
                                <th class="text-right">Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="color-blue">◼</span> Pagado</td>
                                <td class="text-number">$9.456.125</td>
                                <td class="text-number" data-raw="64.05024382594901">64.05%</td>
                            </tr>
                            <tr>
                                <td><span class="color-orange">◼</span> Facturado</td>
                                <td class="text-number">$4.562.357</td>
                                <td class="text-number" data-raw="30.902730058139593">30.90%</td>
                            </tr>
                            <tr>
                                <td><span class="color-grey">◼</span> Sin facturar</td>
                                <td class="text-number">$1.745.123</td>
                                <td class="text-number" data-raw="0.1182043952002238">11.82%</td>
                            </tr>
                        </tbody>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>

    <div class="col-md-12 col-lg-6">

        <div class="panel panel-green">

            <div class="panel-heading">Servicios Complementarios</div>

            <div class="panel-body row">

                <div class="chart col-xs-12 col-sm-7 col-md-7 col-lg-7">
                    <div id="billings-by-types-amount-sscc"></div>
                </div>

                <div class="detail col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-right">Monto</th>
                                <th class="text-right">Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="color-blue">◼</span> Pagado</td>
                                <td class="text-number">$9.456.125</td>
                                <td class="text-number" data-raw="64.05024382594901">64.05%</td>
                            </tr>
                            <tr>
                                <td><span class="color-orange">◼</span> Facturado</td>
                                <td class="text-number">$4.562.357</td>
                                <td class="text-number" data-raw="30.902730058139593">30.90%</td>
                            </tr>
                            <tr>
                                <td><span class="color-grey">◼</span> Sin facturar</td>
                                <td class="text-number">$1.745.123</td>
                                <td class="text-number" data-raw="0.1182043952002238">11.82%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>
 #}
</div>
