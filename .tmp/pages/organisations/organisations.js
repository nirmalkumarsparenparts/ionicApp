import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Organisations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var OrganisationsPage = (function () {
    function OrganisationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    OrganisationsPage.prototype.ionViewDidLoad = function () {
        console.log('Hello OrganisationsPage Page');
    };
    OrganisationsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-organisations',
                    templateUrl: 'organisations.html'
                },] },
    ];
    /** @nocollapse */
    OrganisationsPage.ctorParameters = [
        { type: NavController, },
    ];
    return OrganisationsPage;
}());
//# sourceMappingURL=organisations.js.map