var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var vectorSource = new ol.source.Vector();
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});
var format_UA_Ghent_GreenAreas_0 = new ol.format.GeoJSON();
var features_UA_Ghent_GreenAreas_0 = format_UA_Ghent_GreenAreas_0.readFeatures(json_UA_Ghent_GreenAreas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UA_Ghent_GreenAreas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UA_Ghent_GreenAreas_0.addFeatures(features_UA_Ghent_GreenAreas_0);var lyr_UA_Ghent_GreenAreas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UA_Ghent_GreenAreas_0, 
                style: style_UA_Ghent_GreenAreas_0,
                title: '<img src="styles/legend/UA_Ghent_GreenAreas_0.png" /> UA_Ghent_GreenAreas'
            });var format_UA_Ghent_GreenAreas_CPoi_1 = new ol.format.GeoJSON();
var features_UA_Ghent_GreenAreas_CPoi_1 = format_UA_Ghent_GreenAreas_CPoi_1.readFeatures(json_UA_Ghent_GreenAreas_CPoi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UA_Ghent_GreenAreas_CPoi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UA_Ghent_GreenAreas_CPoi_1.addFeatures(features_UA_Ghent_GreenAreas_CPoi_1);var lyr_UA_Ghent_GreenAreas_CPoi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UA_Ghent_GreenAreas_CPoi_1, 
                style: style_UA_Ghent_GreenAreas_CPoi_1,
                title: '<img src="styles/legend/UA_Ghent_GreenAreas_CPoi_1.png" /> UA_Ghent_GreenAreas_CPoi'
            });

lyr_UA_Ghent_GreenAreas_0.setVisible(true);lyr_UA_Ghent_GreenAreas_CPoi_1.setVisible(true);
var layersList = [baseLayer,lyr_UA_Ghent_GreenAreas_0,lyr_UA_Ghent_GreenAreas_CPoi_1, vectorLayer];
lyr_UA_Ghent_GreenAreas_0.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'CITIES': 'CITIES', 'FUA_OR_CIT': 'FUA_OR_CIT', 'CODE2012': 'CODE2012', 'ITEM2012': 'ITEM2012', 'PROD_DATE': 'PROD_DATE', 'IDENT': 'IDENT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_UA_Ghent_GreenAreas_CPoi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTRY': 'COUNTRY', 'CITIES': 'CITIES', 'FUA_OR_CIT': 'FUA_OR_CIT', 'CODE2012': 'CODE2012', 'ITEM2012': 'ITEM2012', 'PROD_DATE': 'PROD_DATE', 'IDENT': 'IDENT', 'PERIMETER': 'PERIMETER', 'AREA': 'AREA', 'Shape_Leng': 'Shape_Leng', 'PAYS': 'PAYS', 'LUZ_OR_CIT': 'LUZ_OR_CIT', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_UA_Ghent_GreenAreas_0.set('fieldImages', {'COUNTRY': 'TextEdit', 'CITIES': 'TextEdit', 'FUA_OR_CIT': 'TextEdit', 'CODE2012': 'TextEdit', 'ITEM2012': 'TextEdit', 'PROD_DATE': 'TextEdit', 'IDENT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UA_Ghent_GreenAreas_CPoi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COUNTRY': 'TextEdit', 'CITIES': 'TextEdit', 'FUA_OR_CIT': 'TextEdit', 'CODE2012': 'TextEdit', 'ITEM2012': 'TextEdit', 'PROD_DATE': 'TextEdit', 'IDENT': 'TextEdit', 'PERIMETER': 'TextEdit', 'AREA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'PAYS': 'TextEdit', 'LUZ_OR_CIT': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UA_Ghent_GreenAreas_0.set('fieldLabels', {'COUNTRY': 'no label', 'CITIES': 'no label', 'FUA_OR_CIT': 'no label', 'CODE2012': 'no label', 'ITEM2012': 'no label', 'PROD_DATE': 'no label', 'IDENT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_UA_Ghent_GreenAreas_CPoi_1.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTRY': 'no label', 'CITIES': 'no label', 'FUA_OR_CIT': 'no label', 'CODE2012': 'no label', 'ITEM2012': 'no label', 'PROD_DATE': 'no label', 'IDENT': 'no label', 'PERIMETER': 'no label', 'AREA': 'no label', 'Shape_Leng': 'no label', 'PAYS': 'no label', 'LUZ_OR_CIT': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_UA_Ghent_GreenAreas_CPoi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});