sap.ui.controller("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Controller_Hook.controller.S3_PurchaseOrderDetailsCustom", {

	extHookOnDataReceived: function (P) {
		alert(JSON.stringify(P));
	}

});