/*
 RaphaelLayer, a JavaScript library for overlaying Raphael objects onto Leaflet interactive maps. http://dynmeth.github.com/RaphaelLayer
 (c) 2012-2013, David Howell, Dynamic Methods Pty Ltd

 Version 0.1.3
 */

(function () {
    var a, b;
    typeof exports != "undefined" ? a = exports : (a = {}, b = window.R, a.noConflict = function () {
        return window.R = b, a
    }, window.R = a), a.version = "0.1.3", a.Layer = L.Class.extend({includes: L.Mixin.Events, initialize: function (a) {
    }, onAdd: function (a) {
        this._map = a, this._map._initRaphaelRoot(), this._paper = this._map._paper, this._set = this._paper.set(), a.on("viewreset", this.projectLatLngs, this), this.projectLatLngs()
    }, onRemove: function (a) {
        a.off("viewreset", this.projectLatLngs, this), this._map = null, this._set.forEach(function (a) {
            a.remove()
        }, this), this._set.clear()
    }, projectLatLngs: function () {
    }, animate: function (a, b, c, d) {
        return this._set.animate(a, b, c, d), this
    }, hover: function (a, b, c, d) {
        return this._set.hover(a, b, c, d), this
    }, attr: function (a, b) {
        return this._set.attr(a, b), this
    }}), L.Map.include({_initRaphaelRoot: function () {
        this._raphaelRoot || (this._raphaelRoot = this._panes.overlayPane, this._paper = Raphael(this._raphaelRoot), this.on("moveend", this._updateRaphaelViewport), this._updateRaphaelViewport())
    }, _updateRaphaelViewport: function () {
        var a = .02, b = this.getSize(), c = L.DomUtil.getPosition(this._mapPane), d = c.multiplyBy(-1)._subtract(b.multiplyBy(a)), e = d.add(b.multiplyBy(1 + a * 2)), f = e.x - d.x, g = e.y - d.y, h = this._raphaelRoot, i = this._panes.overlayPane;
        this._paper.setSize(f, g), L.DomUtil.setPosition(h, d), h.setAttribute("width", f), h.setAttribute("height", g), this._paper.setViewBox(d.x, d.y, f, g, !1)
    }}), a.Marker = a.Layer.extend({initialize: function (b, c, d, e) {
        a.Layer.prototype.initialize.call(this, e), this._latlng = b, this._pathString = typeof c == "string" ? c : "M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z", this._attr = typeof c == "object" ? c : d ? d : {fill: "#000"}
    }, projectLatLngs: function () {
        this._path && this._path.remove();
        var a = this._map.latLngToLayerPoint(this._latlng), b = Raphael.pathBBox(this._pathString);
        this._path = this._paper.path(this._pathString).attr(this._attr).translate(a.x - 1.05 * b.width, a.y - 1.15 * b.height).toFront(), this._set.push(this._path)
    }}), a.Pulse = a.Layer.extend({initialize: function (b, c, d, e, f) {
        a.Layer.prototype.initialize.call(this, f), this._latlng = b, this._radius = typeof c == "number" ? c : 6, this._attr = typeof c == "object" ? c : typeof d == "object" ? d : {fill: "#30a3ec", stroke: "#30a3ec"}, this._pulseAttr = typeof c == "object" ? d : typeof e == "object" ? e : {"stroke-width": 3, stroke: this._attr.stroke}, this._repeat = 3
    }, onRemove: function (b) {
        a.Layer.prototype.onRemove.call(this, b), this._marker && this._marker.remove(), this._pulse && this._pulse.remove()
    }, projectLatLngs: function () {
        this._marker && this._marker.remove(), this._pulse && this._pulse.remove();
        var a = this._map.latLngToLayerPoint(this._latlng);
        this._marker = this._paper.circle(a.x, a.y, this._radius).attr(this._attr), this._pulse = this._paper.circle(a.x, a.y, this._radius).attr(this._pulseAttr);
        var b = Raphael.animation({"0%": {transform: "s0.3", opacity: 1}, "100%": {transform: "s3.0", opacity: 0, easing: "<"}}, 1e3);
        this._pulse.animate(b.repeat(this._repeat))
    }}), a.Polyline = a.Layer.extend({initialize: function (b, c, d) {
        a.Layer.prototype.initialize.call(this, d), this._latlngs = b, this._attr = c || {fill: "#000", stroke: "#000"}
    }, projectLatLngs: function () {
        this._set.clear(), this._path && this._path.remove(), this._path = this._paper.path(this.getPathString()).attr(this._attr).toBack(), this._set.push(this._path)
    }, getPathString: function () {
        for (var a = 0, b = this._latlngs.length, c = ""; a < b; a++) {
            var d = this._map.latLngToLayerPoint(this._latlngs[a]);
            c += (a ? "L" : "M") + d.x + " " + d.y
        }
        return c
    }}), a.Polygon = a.Layer.extend({initialize: function (b, c, d) {
        a.Layer.prototype.initialize.call(this, d), b.length == 1 && b[0]instanceof Array && (b = b[0]), this._latlngs = b, this._attr = c || {fill: "rgba(255, 0, 0, 0.5)", stroke: "#f00", "stroke-width": 2}
    }, projectLatLngs: function () {
        this._path && this._path.remove(), this._path = this._paper.path(this.getPathString()).attr(this._attr).toBack(), this._set.push(this._path)
    }, getPathString: function () {
        for (var a = 0, b = this._latlngs.length, c = ""; a < b; a++) {
            var d = this._map.latLngToLayerPoint(this._latlngs[a]);
            c += (a ? "L" : "M") + d.x + " " + d.y
        }
        return c += "Z", c
    }}), a.PolygonGlow = a.Layer.extend({initialize: function (b, c, d) {
        a.Layer.prototype.initialize.call(this, d), this._latlngs = b, this._attr = c || {fill: "rgba(255, 0, 0, 1)", stroke: "#f00", "stroke-width": 3}
    }, onRemove: function (b) {
        a.Layer.prototype.onRemove.call(this, b), this._path && this._path.remove()
    }, projectLatLngs: function () {
        this._path && this._path.remove(), this._path = this._paper.path(this.getPathString()).attr(this._attr).toBack();
        var a = this._path, b = function () {
            a.animate({"fill-opacity": .25}, 1e3, "<", c)
        }, c = function () {
            a.animate({"fill-opacity": 1}, 1e3, "<", b)
        };
        c()
    }, getPathString: function () {
        for (var a = 0, b = this._latlngs.length, c = ""; a < b; a++) {
            var d = this._map.latLngToLayerPoint(this._latlngs[a]);
            c += (a ? "L" : "M") + d.x + " " + d.y
        }
        return c += "Z", c
    }}), a.Bezier = a.Layer.extend({initialize: function (b, c, d) {
        a.Layer.prototype.initialize.call(this, d), this._latlngs = b, this._attr = c
    }, projectLatLngs: function () {
        this._path && this._path.remove();
        var a = this._map.latLngToLayerPoint(this._latlngs[0]), b = this._map.latLngToLayerPoint(this._latlngs[1]), c = this.getControlPoint(a, b);
        this._path = this._paper.path("M" + a.x + " " + a.y + "Q" + c.x + " " + c.y + " " + b.x + " " + b.y).attr(this._attr).toBack(), this._set.push(this._path)
    }, getControlPoint: function (a, b) {
        var c = {x: 0, y: 0};
        c.x = a.x + (b.x - [a.x]) / 2, c.y = a.y + (b.y - [a.y]) / 2;
        var d = 0;
        return this.closeTo(a.x, b.x) && !this.closeTo(a.y, b.y) ? (d = (a.x - b.x) * 1 + 15 * (a.x < b.x ? -1 : 1), c.x = Math.max(a.x, b.x) + d) : (d = (b.y - a.y) * 1.5 + 15 * (a.y < b.y ? 1 : -1), c.y = Math.min(a.y, b.y) + d), c
    }, closeTo: function (a, b) {
        var c = 15;
        return a - b > -c && a - b < c
    }}), a.BezierAnim = a.Layer.extend({initialize: function (b, c, d, e) {
        a.Layer.prototype.initialize.call(this, e), this._latlngs = b, this._attr = c, this._cb = d
    }, onRemove: function (b) {
        a.Layer.prototype.onRemove.call(this, b), this._path && this._path.remove(), this._sub && this._sub.remove()
    }, projectLatLngs: function () {
        this._path && this._path.remove(), this._sub && this._sub.remove();
        var a = this, b = this._map.latLngToLayerPoint(this._latlngs[0]), c = this._map.latLngToLayerPoint(this._latlngs[1]), d = this.getControlPoint(b, c), e = "M" + b.x + " " + b.y + "Q" + d.x + " " + d.y + " " + c.x + " " + c.y, f = this._paper.path(e).hide();
        this._paper.customAttributes.alongBezier = function (a) {
            var b = this.data("reverse"), c = this.data("pathLength");
            return{path: this.data("bezierPath").getSubpath(b ? (1 - a) * c : 0, b ? c : a * c)}
        };
        var g = this._sub = this._paper.path().data("bezierPath", f).data("pathLength", f.getTotalLength()).data("reverse", !1).attr({stroke: "#f00", alongBezier: 0, "stroke-width": 3});
        g.stop().animate({alongBezier: 1}, 500, function () {
            a._cb(), g.data("reverse", !0), g.stop().animate({alongBezier: 0}, 500, function () {
                g.remove()
            })
        })
    }, getControlPoint: function (a, b) {
        var c = {x: 0, y: 0};
        c.x = a.x + (b.x - [a.x]) / 2, c.y = a.y + (b.y - [a.y]) / 2;
        var d = 0;
        return this.closeTo(a.x, b.x) && !this.closeTo(a.y, b.y) ? (d = (a.x - b.x) * 1 + 15 * (a.x < b.x ? -1 : 1), c.x = Math.max(a.x, b.x) + d) : (d = (b.y - a.y) * 1.5 + 15 * (a.y < b.y ? 1 : -1), c.y = Math.min(a.y, b.y) + d), c
    }, closeTo: function (a, b) {
        var c = 15;
        return a - b > -c && a - b < c
    }}), a.FeatureGroup = L.FeatureGroup.extend({initialize: function (a, b) {
        L.FeatureGroup.prototype.initialize.call(this, a, b)
    }, animate: function (a, b, c, d) {
        this.eachLayer(function (e) {
            e.animate(a, b, c, d)
        })
    }, onAdd: function (a) {
        L.FeatureGroup.prototype.onAdd.call(this, a), this._set = this._map._paper.set();
        for (i in this._layers)this._set.push(this._layers[i]._set)
    }, hover: function (a, b, c, d) {
        return this.eachLayer(function (e) {
            e.hover(a, b, c, d)
        }), this
    }, attr: function (a, b) {
        return this.eachLayer(function (c) {
            c.attr(a, b)
        }), this
    }}), function () {
        function b(b) {
            return a.FeatureGroup.extend({initialize: function (a, b) {
                this._layers = {}, this._options = b, this.setLatLngs(a)
            }, setLatLngs: function (a) {
                var c = 0, d = a.length;
                this.eachLayer(function (b) {
                    c < d ? b.setLatLngs(a[c++]) : this.removeLayer(b)
                }, this);
                while (c < d)this.addLayer(new b(a[c++], this._options));
                return this
            }})
        }

        a.MultiPolyline = b(a.Polyline), a.MultiPolygon = b(a.Polygon)
    }(), a.GeoJSON = a.FeatureGroup.extend({initialize: function (a, b) {
        L.Util.setOptions(this, b), this._geojson = a, this._layers = {}, a && this.addGeoJSON(a)
    }, addGeoJSON: function (b) {
        var c = b.features, d, e;
        if (c) {
            for (d = 0, e = c.length; d < e; d++)this.addGeoJSON(c[d]);
            return
        }
        var f = b.type === "Feature", g = f ? b.geometry : b, h = a.GeoJSON.geometryToLayer(g, this.options.pointToLayer);
        this.fire("featureparse", {layer: h, properties: b.properties, geometryType: g.type, bbox: b.bbox, id: b.id, geometry: b.geometry}), this.addLayer(h)
    }}), L.Util.extend(a.GeoJSON, {geometryToLayer: function (b, c) {
        var d = b.coordinates, e = [], f, g, h, i, j;
        switch (b.type) {
            case"Point":
                return f = this.coordsToLatLng(d), c ? c(f) : new a.Marker(f);
            case"MultiPoint":
                for (h = 0, i = d.length; h < i; h++)f = this.coordsToLatLng(d[h]), j = c ? c(f) : new a.Marker(f), e.push(j);
                return new a.FeatureGroup(e);
            case"LineString":
                return g = this.coordsToLatLngs(d), new a.Polyline(g);
            case"Polygon":
                return g = this.coordsToLatLngs(d, 1), new a.Polygon(g);
            case"MultiLineString":
                return g = this.coordsToLatLngs(d, 1), new a.MultiPolyline(g);
            case"MultiPolygon":
                return g = this.coordsToLatLngs(d, 2), new a.MultiPolygon(g);
            case"GeometryCollection":
                for (h = 0, i = b.geometries.length; h < i; h++)j = this.geometryToLayer(b.geometries[h], c), e.push(j);
                return new a.FeatureGroup(e);
            default:
                throw Error("Invalid GeoJSON object.")
        }
    }, coordsToLatLng: function (a, b) {
        var c = parseFloat(a[b ? 0 : 1]), d = parseFloat(a[b ? 1 : 0]);
        return new L.LatLng(c, d, !0)
    }, coordsToLatLngs: function (a, b, c) {
        var d, e = [], f, g;
        for (f = 0, g = a.length; f < g; f++)d = b ? this.coordsToLatLngs(a[f], b - 1, c) : this.coordsToLatLng(a[f], c), e.push(d);
        return e
    }})
})();