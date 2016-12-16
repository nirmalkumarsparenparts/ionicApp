import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var GithubUsers = (function () {
    function GithubUsers(http) {
        this.http = http;
        this.githubApiUrl = 'https://api.github.com';
    }
    // Load all github users
    GithubUsers.prototype.load = function () {
        return this.http.get(this.githubApiUrl + "/users")
            .map(function (res) { return res.json(); });
    };
    GithubUsers.prototype.loadDetails = function (login) {
        return this.http.get(this.githubApiUrl + "/users/" + login)
            .map(function (res) { return (res.json()); });
    };
    GithubUsers.prototype.searchUsers = function (searchParam) {
        return this.http.get(this.githubApiUrl + "/search/users?q=" + searchParam)
            .map(function (res) { return (res.json().items); });
    };
    GithubUsers.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GithubUsers.ctorParameters = [
        { type: Http, },
    ];
    return GithubUsers;
}());
//# sourceMappingURL=github-users.js.map