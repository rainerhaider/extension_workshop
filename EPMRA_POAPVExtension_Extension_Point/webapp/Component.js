jQuery.sap.declare("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Extension_Point.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "nw.epm.refapps.ext.po.apv",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/EPMRA_POAPV" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.nw.epm.refapps.ext.po.apv.Component.extend("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Extension_Point.Component", {
	metadata: {
		version: "1.0.0",
		config: {},
		customizing: {
			"sap.ui.viewExtensions": {
				"nw.epm.refapps.ext.po.apv.view.S3_PurchaseOrderDetails": {
					"extensionAfterObjectHeader": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Extension_Point.view.S3_PurchaseOrderDetails_extensionAfterObjectHeaderCustom",
						"type": "XML"
					}
				}
			},
			"sap.ui.viewModifications": {
				"nw.epm.refapps.ext.po.apv.view.S3_PurchaseOrderDetails": {
					"poHeaderForm": {
						"visible": false
					}
				}
			}
		}
	}
});