ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([656546.257633, 7164103.881252, 694231.389969, 7199167.052729]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_testeIFC_1 = new ol.format.GeoJSON();
var features_testeIFC_1 = format_testeIFC_1.readFeatures(json_testeIFC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_testeIFC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_testeIFC_1.addFeatures(features_testeIFC_1);
var lyr_testeIFC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_testeIFC_1, 
                style: style_testeIFC_1,
                popuplayertitle: 'testeIFC',
                interactive: true,
                title: '<img src="styles/legend/testeIFC_1.png" /> testeIFC'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_testeIFC_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_testeIFC_1];
lyr_testeIFC_1.set('fieldAliases', {'fid': 'fid', 'IFC': 'IFC', 'foto1': 'foto1', 'foto2': 'foto2', 'foto3': 'foto3', });
lyr_testeIFC_1.set('fieldImages', {'fid': 'TextEdit', 'IFC': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', });
lyr_testeIFC_1.set('fieldLabels', {'fid': 'no label', 'IFC': 'inline label - always visible', 'foto1': 'header label - always visible', 'foto2': 'header label - always visible', 'foto3': 'header label - always visible', });
lyr_testeIFC_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});