/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './users';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/github-users';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import23 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/components/menu/menu-controller';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from '@angular/forms/src/directives/ng_control';
import * as import34 from 'ionic-angular/gestures/gesture-controller';
import * as import35 from '@angular/core/src/linker/template_ref';
import * as import36 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import37 from 'ionic-angular/components/icon/icon';
import * as import38 from 'ionic-angular/components/button/button';
import * as import39 from 'ionic-angular/components/menu/menu-toggle';
import * as import40 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import41 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import42 from 'ionic-angular/components/navbar/navbar';
import * as import43 from 'ionic-angular/components/searchbar/searchbar';
import * as import44 from '@angular/common/src/directives/ng_for';
import * as import45 from 'ionic-angular/components/list/list';
import * as import46 from 'ionic-angular/components/content/content';
import * as import47 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import48 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import49 from 'ionic-angular/util/form';
import * as import50 from 'ionic-angular/components/item/item-reorder';
import * as import51 from 'ionic-angular/components/avatar/avatar';
import * as import52 from 'ionic-angular/components/item/item';
import * as import53 from '@angular/core/src/security';
export var Wrapper_UsersPage = (function () {
    function Wrapper_UsersPage(p0, p1) {
        this.changed = false;
        this.context = new import0.UsersPage(p0, p1);
    }
    Wrapper_UsersPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_UsersPage;
}());
var renderType_UsersPage_Host = null;
var _View_UsersPage_Host0 = (function (_super) {
    __extends(_View_UsersPage_Host0, _super);
    function _View_UsersPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersPage_Host0, renderType_UsersPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-users', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_UsersPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._UsersPage_0_4 = new Wrapper_UsersPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.GithubUsers));
        this._appEl_0.initComponent(this._UsersPage_0_4.context, [], compView_0);
        compView_0.create(this._UsersPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_UsersPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UsersPage) && (0 === requestNodeIndex))) {
            return this._UsersPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_UsersPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UsersPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_UsersPage_Host0;
}(import1.AppView));
function viewFactory_UsersPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UsersPage_Host === null)) {
        (renderType_UsersPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_UsersPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var UsersPageNgFactory = new import11.ComponentFactory('page-users', viewFactory_UsersPage_Host0, import0.UsersPage);
var styles_UsersPage = [];
var renderType_UsersPage = null;
var _View_UsersPage0 = (function (_super) {
    __extends(_View_UsersPage0, _super);
    function _View_UsersPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersPage0, renderType_UsersPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import27.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import14.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import14.Wrapper_Button('', '', this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import15.Wrapper_MenuToggle(this.parentInjector.get(import28.MenuController), new import25.ElementRef(this._el_4), this.parentInjector.get(import26.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import16.Wrapper_ToolbarItem(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import17.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import18.Wrapper_Icon(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, ' \n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import19.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n      Users\n    ', null);
        compView_9.create(this._ToolbarTitle_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_14, 'padding', '');
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import20.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import20.Wrapper_Content(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import27.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-searchbar', null);
        this._appEl_16 = new import3.AppElement(16, 14, this, this._el_16);
        var compView_16 = import21.viewFactory_Searchbar0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Searchbar_16_4 = new import21.Wrapper_Searchbar(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import33.NgControl, null));
        this._appEl_16.initComponent(this._Searchbar_16_4.context, [], compView_16);
        compView_16.create(this._Searchbar_16_4.context, [], null);
        this._text_17 = this.renderer.createText(null, '\n  ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-list', null);
        this._List_18_3 = new import22.Wrapper_List(this.parentInjector.get(import24.Config), new import25.ElementRef(this._el_18), this.renderer, this.parentInjector.get(import34.GestureController));
        this._text_19 = this.renderer.createText(this._el_18, '\n    ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._appEl_20 = new import3.AppElement(20, 18, this, this._anchor_20);
        this._TemplateRef_20_5 = new import35.TemplateRef_(this._appEl_20, viewFactory_UsersPage1);
        this._NgFor_20_6 = new import23.Wrapper_NgFor(this._appEl_20.vcRef, this._TemplateRef_20_5, this.parentInjector.get(import36.IterableDiffers), this.ref);
        this._text_21 = this.renderer.createText(this._el_18, '\n  ', null);
        this._text_22 = this.renderer.createText(null, '\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_17,
                this._el_18,
                this._text_22
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_16, 'input', this.eventHandler(this._handle_input_16_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_UsersPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import38.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import39.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import40.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import41.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import42.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import29.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import43.Searchbar) && (16 === requestNodeIndex))) {
            return this._Searchbar_16_4.context;
        }
        if (((token === import35.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import44.NgFor) && (20 === requestNodeIndex))) {
            return this._NgFor_20_6.context;
        }
        if (((token === import45.List) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._List_18_3.context;
        }
        if (((token === import46.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_UsersPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_4_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_4_5.detectChangesInternal(this, this._el_4, throwOnChange);
        this._ToolbarItem_4_6.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_6_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        if (this._ToolbarTitle_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Content_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._Searchbar_16_4.detectChangesInternal(this, this._el_16, throwOnChange);
        this._List_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_15 = this.context.users;
        this._NgFor_20_6.check_ngForOf(currVal_15, throwOnChange, false);
        this._NgFor_20_6.detectChangesInternal(this, this._anchor_20, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Searchbar_16_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_14_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._Searchbar_16_4.context.animated;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-animated', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._Searchbar_16_4.context._value;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-has-value', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._Searchbar_16_4.context._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-active', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._Searchbar_16_4.context.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-show-cancel', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._Searchbar_16_4.context._shouldAlignLeft;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-left-aligned', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._Searchbar_16_4.context._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_16, 'searchbar-has-focus', currVal_14);
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_UsersPage0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_UsersPage0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_UsersPage0.prototype._handle_input_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.search($event) !== false);
        return (true && pd_0);
    };
    return _View_UsersPage0;
}(import1.AppView));
export function viewFactory_UsersPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UsersPage === null)) {
        (renderType_UsersPage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_UsersPage, {}));
    }
    return new _View_UsersPage0(viewUtils, parentInjector, declarationEl);
}
var _View_UsersPage1 = (function (_super) {
    __extends(_View_UsersPage1, _super);
    function _View_UsersPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersPage1, renderType_UsersPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import47.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import47.Wrapper_Item(this.parent.parentInjector.get(import49.Form), this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import50.ItemReorder, null));
        this._ItemContent_0_5 = new import47.Wrapper_ItemContent();
        this._query_Label_0_0 = new import17.QueryList();
        this._query_Button_0_1 = new import17.QueryList();
        this._query_Icon_0_2 = new import17.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._text_2 = this.renderer.createText(null, '\n       ', null);
        this._el_3 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_3, 'item-left', '');
        this._Avatar_3_3 = new import48.Wrapper_Avatar();
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'img', null);
        this._text_6 = this.renderer.createText(this._el_3, '\n      ', null);
        this._text_7 = this.renderer.createText(null, '\n      ', null);
        this._el_8 = this.renderer.createElement(null, 'h2', null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(null, '\n      ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_11, 'item-right', '');
        this.renderer.setElementAttribute(this._el_11, 'name', 'arrow-forward');
        this.renderer.setElementAttribute(this._el_11, 'role', 'img');
        this._Icon_11_3 = new import18.Wrapper_Icon(this.parent.parentInjector.get(import24.Config), new import25.ElementRef(this._el_11), this.renderer);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [].concat([this._el_3]),
            [],
            [].concat([
                this._text_1,
                this._text_2,
                this._text_7,
                this._el_8,
                this._text_10,
                this._text_12
            ]),
            [],
            [].concat([this._el_11])
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12
        ], [disposable_0], []);
        return null;
    };
    _View_UsersPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import51.Avatar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Avatar_3_3.context;
        }
        if (((token === import37.Icon) && (11 === requestNodeIndex))) {
            return this._Icon_11_3.context;
        }
        if (((token === import52.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Item_0_4.context;
        }
        if (((token === import52.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_UsersPage1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Avatar_3_3.detectChangesInternal(this, this._el_3, throwOnChange);
        var currVal_3 = 'arrow-forward';
        this._Icon_11_3.check_name(currVal_3, throwOnChange, false);
        this._Icon_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([this._Icon_11_3.context]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this.context.$implicit.avatar_url;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_5, 'src', this.viewUtils.sanitizer.sanitize(import53.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.login, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_9, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Icon_11_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_11, 'hide', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_UsersPage1.prototype.destroyInternal = function () {
        this._Icon_11_3.context.ngOnDestroy();
    };
    _View_UsersPage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.goToDetails(this.context.$implicit.login) !== false);
        return (true && pd_0);
    };
    return _View_UsersPage1;
}(import1.AppView));
function viewFactory_UsersPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_UsersPage1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=users.ngfactory.js.map