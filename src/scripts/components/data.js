var periods = [
    'Ene15',
    'Feb15',
    'Mar15',
    'Abr15',
    'May15',
    'Jun15',
    'Jul15',
    'Ago15',
    'Sep15',
    'Oct15',
    'Nov15',
    'Dic15',

    'Ene16',
    'Feb16',
    'Mar16',
    'Abr16',
    'May16',
    'Jun16',
    'Jul16',
    'Ago16',
    'Sep16',
    'Oct16',
    'Nov16',
    'Dic16',

    'Ene17',
    'Feb17',
    'Mar17',
    'Abr17',
    'May17',
    'Jun17',
    'Jul17',
    'Ago17',
    'Sep17',
    'Oct17',
    'Nov17',
    'Dic17',
];


var billing_windows = [
    'SIC_[SSCC][Feb17]',
    'SIC_[BP__][Feb17]',
    'SIC_[ITTE][Feb17]',
    'SIC_[TEE][Feb17]',
    'SIC_[SSCC][Ene17]',
    'SIC_[BP__][Ene17]',
    'SIC_[ITTE][Ene17]',
    'SIC_[TEE][Ene17]',
];


var billing_types = [
    'Transferencias Económicas de Energía',
    'Recaudación por Ingresos Tarifarios Troncales de Energía',
    'Balance de Potencia',
    'Servicios Complementarios',
];


var payment_matrices = [
    'SIC_[SSCC][Feb17][L][V01]',
    'SIC_[SSCC][Ene17][L][V01]',
    'SIC_[BP__][Ene17][L][V01]',
    'SIC_[ITTE][Ene17][L][V01]',
    'SIC_[TEE][Ene17][L][V01]',
    'SIC_[SSCC][Feb17][R][V01]',
    'SIC_[BP__][Feb17][L][V01]',
    'SIC_[ITTE][Feb17][L][V01]',
    'SIC_[TEE][Feb17][L][V01]',
];


var participants = [
    'AJTE',
    'Abengoa',
    'Aela',
    'Alba',
    'Amanecer Solar',
    'Andes Generación',
    'Arauco Bioenergía',
    'Barrick Generación',
    'Bellavista',
    'Beneo Orafti',
    'Bio Energía Molina',
    'Biocruz Generación',
    'CELMSA',
    'CGE Distribución',
    'Carbomet',
    'Carrán',
    'Central Hidroeléctrica Rio Mulchén',
    'Chanleufu',
    'Chilectra',
    'Chilquinta',
    'Chungungo',
    'Colbún',
    'Collil',
    'Comasa',
    'Commonplace',
    'Contra',
    'Curileufu',
    'CuzCuz',
    'Dener',
    'Divisadero',
    'Donguil Energía',
    'Dosal',
    'Duke Energy',
    'EBCO Atacama',
    'EDAM LTDA.',
    'EGP del Sur SpA',
    'EMELDA',
    'ERNC I',
    'El Agrio',
    'El Arrayán',
    'El Arroyo',
    'El Boco',
    'El Raso',
    'Elektragen',
    'Eletrans',
    'Eléctrica Caren',
    'Eléctrica El Galpón',
    'Eléctrica Licán',
    'Endesa',
    'Enerbosch',
    'Energía León',
    'Energía Pacífico',
    'Energías del Futuro',
    'Enlasa',
    'Equipos Generación',
    'Eólica La Esperanza',
    'Frontel',
    'GENPAC',
    'GESTEL',
    'GR ARAUCARIA',
    'GR COIGÜE',
    'GR HUINGAN',
    'GR Pan de Azúcar',
    'Generadora Piutel',
    'Generadora Roblería',
    'Gesan',
    'Guacolda',
    'HBS Energía',
    'HBS GNL',
    'HIDROBONITO',
    'HORMIGA SOLAR',
    'HidroMaule',
    'HidroMuchi',
    'Hidroangol',
    'Hidrocallao',
    'Hidroelec',
    'Hidroeléctrica Allipén',
    'Hidroeléctrica Cumpeo',
    'Hidroeléctrica Diuto',
    'Hidroeléctrica Dongo',
    'Hidroeléctrica El Manzano',
    'Hidroeléctrica El Mirador',
    'Hidroeléctrica La Arena',
    'Hidroeléctrica La Confluencia',
    'Hidroeléctrica La Higuera',
    'Hidroeléctrica Puclaro',
    'Hidroeléctrica Rio Huasco',
    'Hidroeléctrica San Andrés',
    'Hidronalcas',
    'Hidropaloma',
    'Huajache',
    'Imelsa',
    'La Montaña 1',
    'Las Flores',
    'Las Pampas',
    'Lleuquereo',
    'Los Espinos',
    'Los Padres Hidro',
    'Los Pinos Bio',
    'Luna',
    'Luz del Norte',
    'Mainco',
    'Molinera Villarrica',
    'Norvind',
    'Nueva Degan',
    'PMGD Bureo',
    'PSF Lomas Coloradas',
    'PSF Pama',
    'Pacific Hydro',
    'Pacific Hydro Chacayes',
    'Parque Eólico Lebu',
    'Parque Eólico Los Cururos',
    'Parque Solar Los Loros',
    'Pehuenche',
    'Pichilonco',
    'Puntilla',
    'Raki',
    'Renovalia Chile Seis, SPA',
    'Renovalia Chile Siete, SPA',
    'Rio Alto SA',
    'Rio Puma',
    'Rucatayo',
    'SGA',
    'STS',
    'SWC',
    'San Andrés',
    'San Juan',
    'Santa Irene',
    'Santa Marta',
    'Sol',
    'Stericycle',
    'Subsole',
    'Sunenergreen (Altos del Paico)',
    'Tamm',
    'Teatinos',
    'Tiltil Solar',
    'Tomaval Generación',
    'Trailelfu',
    'TransChile',
    'Transelec',
    'Ucuquer',
    'Ucuquer Dos',
];


module.exports = {
    periods: periods,
    billing_windows: billing_windows,
    billing_types: billing_types,
    payment_matrices: payment_matrices,
    participants: participants,
}