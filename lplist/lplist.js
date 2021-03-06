var cowi_lp = (function () {
    var columns = [
        {
            "header": "Plannr",
            "dataIndex": "plannr",
            "type": "varchar",
            "typeObj": null
        },
        {
            "header": "Plannavn",
            "dataIndex": "plannavn",
            "type": "varchar",
            "typeObj": null
        },
        {
            "header": "Anvendelse",
            "dataIndex": "anvgen",
            "type": "varchar",
            "typeObj": null
        },
        {
            "header": "Zonestatus",
            "dataIndex": "zonestatus",
            "type": "varchar",
            "typeObj": null
        },
        {
            "header": "Planstatus",
            "dataIndex": "planstatus",
            "type": "varchar",
            "typeObj": null
        }
    ];
    var styleMap = new OpenLayers.StyleMap({
        "default": new OpenLayers.Style(
            {
                fillColor: "#ffffff",
                fillOpacity: 0.0,
                strokeColor: "#0000aa",
                strokeWidth: 2,
                graphicZIndex: 3
            }
        ),
        "select": new OpenLayers.Style(
            {
                fillColor: "#0000ff",
                fillOpacity: 0.3,
                strokeColor: "#0000aa",
                graphicZIndex: 2
            }
        )
    });
    var selectControl = {
        onSelect: function (feature) {
            $("#start").show();
            irowid = feature.attributes.irowid;
        },
        onUnselect: function () {
            $("#start").hide();
        }
    };
    var loadMessage = Ext.MessageBox;
    var init_list = function (conf) {
        var host, grid, cloud = new mygeocloud_ol.map("map", "dk");
        host = !conf.dbHost ? "http://plandk2.mapcentia.com" : conf.dbHost;
        loadMessage.show({ msg: 'Henter lokalplaner...',
            progressText: 'Henter...', width: 300, wait: true, waitConfig: {interval: 200} });
        var store = new mygeocloud_ol.geoJsonStore("dk", {styleMap: styleMap});
        try {
            cloud.addOSM();
        } catch (e) {

        }

        cloud.addGeoJsonStore(store);
        store.sql = "select planid,komnr,objektkode,plantype,plannr,plannavn,anvendelsegenerel as anvgen,anvspec,datoforsl,planstatus,zonestatus,the_geom from planer.lokalplan_vedtaget where komnr=" + conf.komnr + " union select planid,komnr,objektkode,plantype,plannr,plannavn,anvendelsegenerel as anvgen,anvspec,datoforsl,planstatus,zonestatus,the_geom from planer.lokalplan_forslag where komnr=" + conf.komnr + " order by planid desc";
        store.load();
        store.onLoad = function () {
            cloud.zoomToExtentOfgeoJsonStore(store);
            grid = new mygeocloud_ol.grid("grid", store, {
                columns: columns,
                selectControl: selectControl,
                listeners: {
                    rowdblclick: function () {
                    }
                }
            });
            loadMessage.hide();
            $("#zoom").on("click",
                function () {
                    grid.grid.getSelectionModel().each(function (rec) {
                        var feature = rec.get('feature');
                        cloud.map.zoomToExtent(feature.geometry.getBounds());
                    });
                }
            );
            $("#look").on("click",
                function () {
                    var feature;
                    grid.grid.getSelectionModel().each(function (rec) {
                        feature = rec.get('feature');
                    });
                    var link = host + "/apps/custom/planurl/public/index.php/api/v1/url/" + conf.db + "/" + conf.table + "/" + feature.attributes.planid;
                    var record = grid.grid.getSelectionModel().getSelected();
                    window.open(link);
                }
            );
        };
        addAttribution = function () {
            for (var i = 0; i < cloud.map.layers.length; i++) {
                if (cloud.map.layers[i].isBaseLayer === true) {
                    //cloud.map.layers[i].attribution = "Copyright KMS, COWI, Odder Kommune - kort og data er kun vejledende";
                }
            }
        };
        addAttribution();
        cloud.map.addControl(new OpenLayers.Control.Attribution());
    };
    return {
        init_list: init_list
    };
})();

