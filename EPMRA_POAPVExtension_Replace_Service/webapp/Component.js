jQuery.sap.declare("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Replace_Service.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "nw.epm.refapps.ext.po.apv",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/EPMRA_POAPV" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.nw.epm.refapps.ext.po.apv.Component.extend("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Replace_Service.Component", {
	metadata: {
		version: "1.0.0",
		config: {
			"serviceConfig": {
				"name": "EPM_REF_APPS_PO_APV_SRV",
				"serviceUrl": "/sap/opu/odata/sap/ZODATAPREP_SRV/"
			}
		},
		customizing: {}
	}
});