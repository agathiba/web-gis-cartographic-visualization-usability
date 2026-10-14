ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2100").setExtent([-167459.926761, 3812465.896021, 1011516.218152, 4625777.254267]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Airports_2 = new ol.format.GeoJSON();
var features_Airports_2 = format_Airports_2.readFeatures(json_Airports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2100'});
var jsonSource_Airports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airports_2.addFeatures(features_Airports_2);
cluster_Airports_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Airports_2
});
var lyr_Airports_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Airports_2, 
                style: style_Airports_2,
                popuplayertitle: 'Airports',
                interactive: true,
                title: '<img src="styles/legend/Airports_2.png" /> Airports'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Airports_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleSatelliteHybrid_1,lyr_Airports_2];
lyr_Airports_2.set('fieldAliases', {'id': 'id', 'link': 'link', 'CODE': 'CODE', });
lyr_Airports_2.set('fieldImages', {'id': 'TextEdit', 'link': 'TextEdit', 'CODE': 'TextEdit', });
lyr_Airports_2.set('fieldLabels', {'id': 'hidden field', 'link': 'inline label - visible with data', 'CODE': 'inline label - always visible', });
lyr_Airports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});