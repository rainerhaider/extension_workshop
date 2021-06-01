sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"nw/epm/refapps/ext/po/apv/controller/BaseController",
	"nw/epm/refapps/ext/po/apv/controller/ApprovalDialog",
	"sap/m/MessageBox"
], function (J, B, A,MessageBox) {
	"use strict";
	return sap.ui.controller("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension_Extend_Controller.controller.S3_PurchaseOrderDetailsCustom", {
		//    onInit: function () {
		//        this.setModel(new J({ itemListCount: 0 }), "viewProperties");
		//        this.getRouter().getRoute("PurchaseOrderDetails").attachPatternMatched(this.onPOMatched, this);
		//    },
		//    onPOMatched: function (e) {
		//        var p = decodeURIComponent(e.getParameter("arguments").POId);
		//        this.getModel("appProperties").setProperty("/currentPOId", p);
		//        this._bindView("/PurchaseOrders('" + p + "')");
		//    },
		//    _bindView: function (p) {
		//        var a = this.getModel("appProperties"), o = function (e) {
		//                var P = this.getModel().getObject(e.getSource().getPath());
		//                this.getEventBus().publish("nw.epm.refapps.ext.po.apv", "dataLoaded", { purchaseOrder: P });
		//                if (P === undefined) {
		//                    return;
		//                }
		//                this.getModel("viewProperties").setProperty("/saveAsTileTitle", this.getResourceBundle().getText("xtit.saveAsTileTitle", [P.POId]));
		//                if (this.extHookOnDataReceived) {
		//                    this.extHookOnDataReceived(P);
		//                }
		//            }.bind(this);
		//        this.getView().bindElement({
		//            events: {
		//                change: o,
		//                dataRequested: function () {
		//                    a.setProperty("/busy", true);
		//                },
		//                dataReceived: function () {
		//                    a.setProperty("/busy", false);
		//                }
		//            },
		//            path: p,
		//            parameters: { select: "POId,OrderedByName,SupplierName,GrossAmount,CurrencyCode,ChangedAt,DeliveryDateEarliest,LaterDelivDateExist,DeliveryAddress,ItemCount" }
		//        });
		//    },
		//    onUpdateFinished: function (e) {
		//        this.getModel("viewProperties").setProperty("/itemListCount", e.getParameter("total"));
		//    },
		    onApprovalButtonPressed: function (e) {
		        MessageBox.success("Purchase Order approved");
		    },
		//    onShareButtonPressed: function (e) {
		//        var s = this.getView().byId("shareSheet");
		//        jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), s);
		//        s.openBy(e.getSource());
		//    },
		//    onShareEmailPressed: function () {
		//        var p = this.getView().getBindingContext().getObject(), r = this.getModel("i18n").getResourceBundle(), s = r.getText("xtit.emailSubject", [p.POId]), c = r.getText("xtit.emailContent", [
		//                p.POId,
		//                p.SupplierName
		//            ]);
		//        sap.m.URLHelper.triggerEmail(null, s, c);
		//    }
	});
});