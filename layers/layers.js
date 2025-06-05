var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SriLankaDistricts_1 = new ol.format.GeoJSON();
var features_SriLankaDistricts_1 = format_SriLankaDistricts_1.readFeatures(json_SriLankaDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SriLankaDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaDistricts_1.addFeatures(features_SriLankaDistricts_1);
var lyr_SriLankaDistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaDistricts_1, 
                style: style_SriLankaDistricts_1,
                popuplayertitle: 'Sri Lanka Districts',
                interactive: true,
                title: '<img src="styles/legend/SriLankaDistricts_1.png" /> Sri Lanka Districts'
            });
var format_SriLankaRoads_2 = new ol.format.GeoJSON();
var features_SriLankaRoads_2 = format_SriLankaRoads_2.readFeatures(json_SriLankaRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SriLankaRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaRoads_2.addFeatures(features_SriLankaRoads_2);
var lyr_SriLankaRoads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaRoads_2, 
                style: style_SriLankaRoads_2,
                popuplayertitle: 'Sri Lanka Roads',
                interactive: false,
                title: '<img src="styles/legend/SriLankaRoads_2.png" /> Sri Lanka Roads'
            });
var format_SriLankaWaterways_3 = new ol.format.GeoJSON();
var features_SriLankaWaterways_3 = format_SriLankaWaterways_3.readFeatures(json_SriLankaWaterways_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SriLankaWaterways_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaWaterways_3.addFeatures(features_SriLankaWaterways_3);
var lyr_SriLankaWaterways_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaWaterways_3, 
                style: style_SriLankaWaterways_3,
                popuplayertitle: 'Sri Lanka Waterways',
                interactive: false,
                title: '<img src="styles/legend/SriLankaWaterways_3.png" /> Sri Lanka Waterways'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_SriLankaDistricts_1.setVisible(true);lyr_SriLankaRoads_2.setVisible(true);lyr_SriLankaWaterways_3.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_SriLankaDistricts_1,lyr_SriLankaRoads_2,lyr_SriLankaWaterways_3];
lyr_SriLankaDistricts_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_SriLankaRoads_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_si': 'name_si', 'name_ta': 'name_ta', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_SriLankaWaterways_3.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_si': 'name_si', 'name_ta': 'name_ta', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_SriLankaDistricts_1.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', });
lyr_SriLankaRoads_2.set('fieldImages', {'name': '', 'name_en': '', 'highway': '', 'surface': '', 'smoothness': '', 'width': '', 'lanes': '', 'oneway': '', 'bridge': '', 'layer': '', 'source': '', 'name_si': '', 'name_ta': '', 'osm_id': '', 'osm_type': '', });
lyr_SriLankaWaterways_3.set('fieldImages', {'name': '', 'name_en': '', 'waterway': '', 'covered': '', 'width': '', 'depth': '', 'layer': '', 'blockage': '', 'tunnel': '', 'natural': '', 'water': '', 'source': '', 'name_si': '', 'name_ta': '', 'osm_id': '', 'osm_type': '', });
lyr_SriLankaDistricts_1.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_SriLankaRoads_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_si': 'no label', 'name_ta': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_SriLankaWaterways_3.set('fieldLabels', {'name': 'inline label - always visible', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_si': 'no label', 'name_ta': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_SriLankaWaterways_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});