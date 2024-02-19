var wms_layers = [];

var lyr_WhatsAppImage20240215at142655_modifi_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "WhatsApp Image 2024-02-15 at 14.26.55_modifié",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WhatsAppImage20240215at142655_modifi_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-764336.489040, 4025427.752053, -764182.013424, 4025590.883760]
                            })
                        });
var format_RTK_1 = new ol.format.GeoJSON();
var features_RTK_1 = format_RTK_1.readFeatures(json_RTK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTK_1.addFeatures(features_RTK_1);
var lyr_RTK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RTK_1, 
                style: style_RTK_1,
                popuplayertitle: "RTK",
                interactive: true,
                title: '<img src="styles/legend/RTK_1.png" /> RTK'
            });

lyr_WhatsAppImage20240215at142655_modifi_0.setVisible(true);lyr_RTK_1.setVisible(true);
var layersList = [lyr_WhatsAppImage20240215at142655_modifi_0,lyr_RTK_1];
lyr_RTK_1.set('fieldAliases', {'point': 'point', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_RTK_1.set('fieldImages', {'point': '', 'x': '', 'y': '', 'z': '', });
lyr_RTK_1.set('fieldLabels', {'point': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', });
lyr_RTK_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});