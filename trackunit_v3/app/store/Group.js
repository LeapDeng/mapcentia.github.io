/*
 * File: app/store/Group.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Group', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Category',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.Category',
            storeId: 'Group',
            proxy: {
                type: 'jsonp',
                callbackKey: 'jsonp_callback',
                reader: {
                    type: 'json',
                    root: 'groups.list'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonpstoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        this.proxy.url = "http://trackanalyzer.safetrack.dk/api/v1/resource/group/?token=" + window.token;
    }

});