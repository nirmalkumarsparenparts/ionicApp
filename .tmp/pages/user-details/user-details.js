import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var UserDetailsPage = (function () {
    function UserDetailsPage(navCtrl, navParams, githubUsers) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.githubUsers = githubUsers;
        this.login = navParams.get('login');
        githubUsers.loadDetails(this.login).subscribe(function (user) {
            _this.user = user;
            console.log(user);
        });
    }
    UserDetailsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-user-details',
                    templateUrl: 'user-details.html'
                },] },
    ];
    /** @nocollapse */
    UserDetailsPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: GithubUsers, },
    ];
    return UserDetailsPage;
}());
//# sourceMappingURL=user-details.js.map