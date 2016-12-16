import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';
export var UsersPage = (function () {
    function UsersPage(navCtrl, githubUsers) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.githubUsers = githubUsers;
        githubUsers.load().subscribe(function (users) {
            _this.users = users;
            _this.originalUsers = users;
        });
        githubUsers
            .searchUsers('scotch').subscribe(function (users) {
            console.log(users);
        });
    }
    UsersPage.prototype.goToDetails = function (login) {
        this.navCtrl.push(UserDetailsPage, { login: login });
    };
    UsersPage.prototype.search = function (searchEvent) {
        var _this = this;
        var term = searchEvent.target.value;
        // We will only perform the search if we have 3 or more characters
        if (term.trim() === '' || term.trim().length < 3) {
            // Load cached users
            this.users = this.originalUsers;
        }
        else {
            // Get the searched users from github
            this.githubUsers.searchUsers(term).subscribe(function (users) {
                _this.users = users;
            });
        }
    };
    UsersPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-users',
                    templateUrl: 'users.html'
                },] },
    ];
    /** @nocollapse */
    UsersPage.ctorParameters = [
        { type: NavController, },
        { type: GithubUsers, },
    ];
    return UsersPage;
}());
//# sourceMappingURL=users.js.map