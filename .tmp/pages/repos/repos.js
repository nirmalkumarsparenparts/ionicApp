import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Repos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ReposPage = (function () {
    function ReposPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReposPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ReposPage Page');
    };
    ReposPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-repos',
                    templateUrl: 'repos.html'
                },] },
    ];
    /** @nocollapse */
    ReposPage.ctorParameters = [
        { type: NavController, },
    ];
    return ReposPage;
}());
//# sourceMappingURL=repos.js.map