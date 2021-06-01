sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"nw/epm/refapps/ext/po/apv/controller/BaseController",
	"nw/epm/refapps/ext/po/apv/controller/ApprovalDialog",
	"sap/ui/core/Fragment"
], function (J, B, A, Fragment) {
	"use strict";
	return sap.ui.controller("nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension.controller.S3_PurchaseOrderDetailsCustom", {
		//    onInit: function () {
		//        this.setModel(new J({ itemListCount: 0 }), "viewProperties");
		//        this.getRouter().getRoute("PurchaseOrderDetails").attachPatternMatched(this.onPOMatched, this);
		//    },
		
			handleShowOrderItems: function(oEvent){
				if (!this.byId("poItemsDialog")){
					Fragment.load({
						id: this.getView().getId(),
						name: 'nw.epm.refapps.ext.po.apv.EPMRA_POAPVExtension.view.Dialog',
						type: "XML",
						controller: this
					}).then(function(oDialog){
						this.getView().addDependent(oDialog);
						oDialog.open();
					}.bind(this));
				} else{
					this.byId("poItemsDialog").open();
				}
			},
			
			handleCancelDialog: function(oEvent){
				this.byId("poItemsDialog").close();
			}
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
		//    onApprovalButtonPressed: function (e) {
		//        if (this.getModel("appProperties").getProperty("/busy")) {
		//            return;
		//        }
		//        if (!this._oSubControllerForApproval) {
		//            this._oSubControllerForApproval = new A(this.getView());
		//        }
		//        this._oSubControllerForApproval.openDialog(e);
		//    },
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