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

</div>
