jQuery.sap.declare("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Extensibility_Pane.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "nw.epm.refapps.ext.po.apv",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/EPMRA_POAPV" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.nw.epm.refapps.ext.po.apv.Component.extend("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Extensibility_Pane.Component", {
	metadata: {
		version: "1.0.0",
		config: {},
		customizing: {
			"sap.ui.viewModifications": {
				"nw.epm.refapps.ext.po.apv.view.S2_PurchaseOrders": {
					"itemCountStatus": {
						"visible": false
					}
				},
				"nw.epm.refapps.ext.po.apv.view.S3_PurchaseOrderDetails": {
					"changedAtStatus": {
						"visible": false
					},
					"shareButton": {
						"visible": false
					}
				}
			}
		}
	}
});