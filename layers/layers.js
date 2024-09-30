var wms_layers = [];

var format_worldadministrativeboundariescopy_0 = new ol.format.GeoJSON();
var features_worldadministrativeboundariescopy_0 = format_worldadministrativeboundariescopy_0.readFeatures(json_worldadministrativeboundariescopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldadministrativeboundariescopy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldadministrativeboundariescopy_0.addFeatures(features_worldadministrativeboundariescopy_0);
var lyr_worldadministrativeboundariescopy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_worldadministrativeboundariescopy_0, 
                style: style_worldadministrativeboundariescopy_0,
                popuplayertitle: "world-administrative-boundaries copy",
                interactive: false,
                title: '<img src="styles/legend/worldadministrativeboundariescopy_0.png" /> world-administrative-boundaries copy'
            });
var format_final_projects_with_urls109_1 = new ol.format.GeoJSON();
var features_final_projects_with_urls109_1 = format_final_projects_with_urls109_1.readFeatures(json_final_projects_with_urls109_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_projects_with_urls109_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_projects_with_urls109_1.addFeatures(features_final_projects_with_urls109_1);
var lyr_final_projects_with_urls109_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_final_projects_with_urls109_1, 
                style: style_final_projects_with_urls109_1,
                popuplayertitle: "final_projects_with_urls10.9",
                interactive: true,
    title: 'final_projects_with_urls10.9<br />\
    <img src="styles/legend/final_projects_with_urls109_1_0.png" /> 5 - 10,8<br />\
    <img src="styles/legend/final_projects_with_urls109_1_1.png" /> 10,8 - 24<br />\
    <img src="styles/legend/final_projects_with_urls109_1_2.png" /> 24 - 45<br />\
    <img src="styles/legend/final_projects_with_urls109_1_3.png" /> 45 - 67<br />\
    <img src="styles/legend/final_projects_with_urls109_1_4.png" /> 67 - 91,2<br />\
    <img src="styles/legend/final_projects_with_urls109_1_5.png" /> 91,2 - 142<br />\
    <img src="styles/legend/final_projects_with_urls109_1_6.png" /> 142 - 192,8<br />\
    <img src="styles/legend/final_projects_with_urls109_1_7.png" /> 192,8 - 207,7<br />\
    <img src="styles/legend/final_projects_with_urls109_1_8.png" /> 207,7 - 294,5<br />\
    <img src="styles/legend/final_projects_with_urls109_1_9.png" /> 294,5 - 428,7<br />\
    <img src="styles/legend/final_projects_with_urls109_1_10.png" /> 428,7 - 601,7<br />\
    <img src="styles/legend/final_projects_with_urls109_1_11.png" /> 601,7 - 970<br />'
        });
var format_Details_2 = new ol.format.GeoJSON();
var features_Details_2 = format_Details_2.readFeatures(json_Details_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Details_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Details_2.addFeatures(features_Details_2);
var lyr_Details_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Details_2, 
                style: style_Details_2,
                popuplayertitle: "Details",
                interactive: true,
                title: '<img src="styles/legend/Details_2.png" /> Details'
            });

lyr_worldadministrativeboundariescopy_0.setVisible(true);lyr_final_projects_with_urls109_1.setVisible(false);lyr_Details_2.setVisible(true);
var layersList = [lyr_worldadministrativeboundariescopy_0,lyr_final_projects_with_urls109_1,lyr_Details_2];
lyr_worldadministrativeboundariescopy_0.set('fieldAliases', {'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_': 'iso_3166_1_', 'french_shor': 'french_shor', });
lyr_final_projects_with_urls109_1.set('fieldAliases', {});
lyr_Details_2.set('fieldAliases', {'Country:': 'Country:', 'Website:': 'Website:', 'Project:': 'Project:', });
lyr_worldadministrativeboundariescopy_0.set('fieldImages', {'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1_': 'TextEdit', 'french_shor': 'TextEdit', });
lyr_final_projects_with_urls109_1.set('fieldImages', {});
lyr_Details_2.set('fieldImages', {'Country:': 'TextEdit', 'Website:': 'TextEdit', 'Project:': 'TextEdit', });
lyr_worldadministrativeboundariescopy_0.set('fieldLabels', {'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_': 'no label', 'french_shor': 'no label', });
lyr_final_projects_with_urls109_1.set('fieldLabels', {});
lyr_Details_2.set('fieldLabels', {'Country:': 'header label - visible with data', 'Website:': 'header label - visible with data', 'Project:': 'header label - visible with data', });
lyr_Details_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});