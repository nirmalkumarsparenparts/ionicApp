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
import * as import0 from './user-details';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../providers/github-users';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/badge/badge.ngfactory';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from 'ionic-angular/components/item/item-reorder';
import * as import33 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import34 from 'ionic-angular/components/navbar/navbar';
import * as import35 from 'ionic-angular/components/label/label';
import * as import36 from 'ionic-angular/components/badge/badge';
import * as import37 from 'ionic-angular/components/item/item';
import * as import38 from 'ionic-angular/components/list/list';
import * as import39 from 'ionic-angular/components/content/content';
export var Wrapper_UserDetailsPage = (function () {
    function Wrapper_UserDetailsPage(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.UserDetailsPage(p0, p1, p2);
    }
    Wrapper_UserDetailsPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_UserDetailsPage;
}());
var renderType_UserDetailsPage_Host = null;
var _View_UserDetailsPage_Host0 = (function (_super) {
    __extends(_View_UserDetailsPage_Host0, _super);
    function _View_UserDetailsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UserDetailsPage_Host0, renderType_UserDetailsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UserDetailsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-user-details', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_UserDetailsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._UserDetailsPage_0_4 = new Wrapper_UserDetailsPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.GithubUsers));
        this._appEl_0.initComponent(this._UserDetailsPage_0_4.context, [], compView_0);
        compView_0.create(this._UserDetailsPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_UserDetailsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UserDetailsPage) && (0 === requestNodeIndex))) {
            return this._UserDetailsPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_UserDetailsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserDetailsPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_UserDetailsPage_Host0;
}(import1.AppView));
function viewFactory_UserDetailsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UserDetailsPage_Host === null)) {
        (renderType_UserDetailsPage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_UserDetailsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var UserDetailsPageNgFactory = new import12.ComponentFactory('page-user-details', viewFactory_UserDetailsPage_Host0, import0.UserDetailsPage);
var styles_UserDetailsPage = [];
var renderType_UserDetailsPage = null;
var _View_UserDetailsPage0 = (function (_super) {
    __extends(_View_UserDetailsPage0, _super);
    function _View_UserDetailsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UserDetailsPage0, renderType_UserDetailsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UserDetailsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import13.Wrapper_Header(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import24.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import14.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import25.App), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import15.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, '', null);
        compView_5.create(this._ToolbarTitle_5_4.context, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import3.AppElement(10, null, this, this._el_10);
        var compView_10 = import16.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import16.Wrapper_Content(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import25.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-list', null);
        this._List_12_3 = new import17.Wrapper_List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_12), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_13 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'item item-block');
        this._appEl_14 = new import3.AppElement(14, 12, this, this._el_14);
        var compView_14 = import18.viewFactory_Item0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Item_14_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import32.ItemReorder, null));
        this._ItemContent_14_5 = new import18.Wrapper_ItemContent();
        this._query_Label_14_0 = new import19.QueryList();
        this._query_Button_14_1 = new import19.QueryList();
        this._query_Icon_14_2 = new import19.QueryList();
        this._appEl_14.initComponent(this._Item_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n      ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_16_3 = new import20.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_16), this.renderer, null, null, null, null);
        this._text_17 = this.renderer.createText(this._el_16, 'Followers', null);
        this._text_18 = this.renderer.createText(null, '\n      ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_19, 'item-right', '');
        this._Badge_19_3 = new import21.Wrapper_Badge(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_19), this.renderer);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_14_0.reset([this._Label_16_3.context]);
        this._Item_14_4.context.contentLabel = this._query_Label_14_0.first;
        compView_14.create(this._Item_14_4.context, [
            [],
            [].concat([this._el_16]),
            [].concat([
                this._text_15,
                this._text_18,
                this._text_21
            ]),
            [],
            [].concat([this._el_19])
        ], null);
        this._text_22 = this.renderer.createText(this._el_12, '\n     ', null);
        this._el_23 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'item item-block');
        this._appEl_23 = new import3.AppElement(23, 12, this, this._el_23);
        var compView_23 = import18.viewFactory_Item0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Item_23_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_23), this.renderer, this.parentInjector.get(import32.ItemReorder, null));
        this._ItemContent_23_5 = new import18.Wrapper_ItemContent();
        this._query_Label_23_0 = new import19.QueryList();
        this._query_Button_23_1 = new import19.QueryList();
        this._query_Icon_23_2 = new import19.QueryList();
        this._appEl_23.initComponent(this._Item_23_4.context, [], compView_23);
        this._text_24 = this.renderer.createText(null, '\n      ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_25_3 = new import20.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_25), this.renderer, null, null, null, null);
        this._text_26 = this.renderer.createText(this._el_25, 'Following', null);
        this._text_27 = this.renderer.createText(null, '\n      ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_28, 'item-right', '');
        this._Badge_28_3 = new import21.Wrapper_Badge(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_28), this.renderer);
        this._text_29 = this.renderer.createText(this._el_28, '', null);
        this._text_30 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_23_0.reset([this._Label_25_3.context]);
        this._Item_23_4.context.contentLabel = this._query_Label_23_0.first;
        compView_23.create(this._Item_23_4.context, [
            [],
            [].concat([this._el_25]),
            [].concat([
                this._text_24,
                this._text_27,
                this._text_30
            ]),
            [],
            [].concat([this._el_28])
        ], null);
        this._text_31 = this.renderer.createText(this._el_12, '\n     ', null);
        this._el_32 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'item item-block');
        this._appEl_32 = new import3.AppElement(32, 12, this, this._el_32);
        var compView_32 = import18.viewFactory_Item0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Item_32_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_32), this.renderer, this.parentInjector.get(import32.ItemReorder, null));
        this._ItemContent_32_5 = new import18.Wrapper_ItemContent();
        this._query_Label_32_0 = new import19.QueryList();
        this._query_Button_32_1 = new import19.QueryList();
        this._query_Icon_32_2 = new import19.QueryList();
        this._appEl_32.initComponent(this._Item_32_4.context, [], compView_32);
        this._text_33 = this.renderer.createText(null, '\n      ', null);
        this._el_34 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_34_3 = new import20.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_34), this.renderer, null, null, null, null);
        this._text_35 = this.renderer.createText(this._el_34, 'Repos', null);
        this._text_36 = this.renderer.createText(null, '\n      ', null);
        this._el_37 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_37, 'item-right', '');
        this._Badge_37_3 = new import21.Wrapper_Badge(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_37), this.renderer);
        this._text_38 = this.renderer.createText(this._el_37, '', null);
        this._text_39 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_32_0.reset([this._Label_34_3.context]);
        this._Item_32_4.context.contentLabel = this._query_Label_32_0.first;
        compView_32.create(this._Item_32_4.context, [
            [],
            [].concat([this._el_34]),
            [].concat([
                this._text_33,
                this._text_36,
                this._text_39
            ]),
            [],
            [].concat([this._el_37])
        ], null);
        this._text_40 = this.renderer.createText(this._el_12, '\n     ', null);
        this._el_41 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'item item-block');
        this._appEl_41 = new import3.AppElement(41, 12, this, this._el_41);
        var compView_41 = import18.viewFactory_Item0(this.viewUtils, this.injector(41), this._appEl_41);
        this._Item_41_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_41), this.renderer, this.parentInjector.get(import32.ItemReorder, null));
        this._ItemContent_41_5 = new import18.Wrapper_ItemContent();
        this._query_Label_41_0 = new import19.QueryList();
        this._query_Button_41_1 = new import19.QueryList();
        this._query_Icon_41_2 = new import19.QueryList();
        this._appEl_41.initComponent(this._Item_41_4.context, [], compView_41);
        this._text_42 = this.renderer.createText(null, '\n      ', null);
        this._el_43 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_43_3 = new import20.Wrapper_Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_43), this.renderer, null, null, null, null);
        this._text_44 = this.renderer.createText(this._el_43, 'Gists', null);
        this._text_45 = this.renderer.createText(null, '\n      ', null);
        this._el_46 = this.renderer.createElement(null, 'ion-badge', null);
        this.renderer.setElementAttribute(this._el_46, 'item-right', '');
        this._Badge_46_3 = new import21.Wrapper_Badge(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_46), this.renderer);
        this._text_47 = this.renderer.createText(this._el_46, '', null);
        this._text_48 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_41_0.reset([this._Label_43_3.context]);
        this._Item_41_4.context.contentLabel = this._query_Label_41_0.first;
        compView_41.create(this._Item_41_4.context, [
            [],
            [].concat([this._el_43]),
            [].concat([
                this._text_42,
                this._text_45,
                this._text_48
            ]),
            [],
            [].concat([this._el_46])
        ], null);
        this._text_49 = this.renderer.createText(this._el_12, '\n  ', null);
        this._text_50 = this.renderer.createText(null, '    \n', null);
        compView_10.create(this._Content_10_4.context, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_50
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50
        ], [], []);
        return null;
    };
    _View_UserDetailsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4.context;
        }
        if (((token === import34.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import26.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3.context;
        }
        if (((token === import35.Label) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Label_16_3.context;
        }
        if (((token === import36.Badge) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Badge_19_3.context;
        }
        if (((token === import37.Item) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Item_14_4.context;
        }
        if (((token === import37.ItemContent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._ItemContent_14_5.context;
        }
        if (((token === import35.Label) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._Label_25_3.context;
        }
        if (((token === import36.Badge) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Badge_28_3.context;
        }
        if (((token === import37.Item) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Item_23_4.context;
        }
        if (((token === import37.ItemContent) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._ItemContent_23_5.context;
        }
        if (((token === import35.Label) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._Label_34_3.context;
        }
        if (((token === import36.Badge) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Badge_37_3.context;
        }
        if (((token === import37.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Item_32_4.context;
        }
        if (((token === import37.ItemContent) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._ItemContent_32_5.context;
        }
        if (((token === import35.Label) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Label_43_3.context;
        }
        if (((token === import36.Badge) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Badge_46_3.context;
        }
        if (((token === import37.Item) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Item_41_4.context;
        }
        if (((token === import37.ItemContent) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._ItemContent_41_5.context;
        }
        if (((token === import38.List) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._List_12_3.context;
        }
        if (((token === import39.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._Content_10_4.context;
        }
        return notFoundResult;
    };
    _View_UserDetailsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._ToolbarTitle_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        if (this._Content_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        this._List_12_3.detectChangesInternal(this, this._el_12, throwOnChange);
        if (this._Item_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._ItemContent_14_5.detectChangesInternal(this, this._el_14, throwOnChange);
        this._Label_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        this._Badge_19_3.detectChangesInternal(this, this._el_19, throwOnChange);
        if (this._Item_23_4.detectChangesInternal(this, this._el_23, throwOnChange)) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        this._ItemContent_23_5.detectChangesInternal(this, this._el_23, throwOnChange);
        this._Label_25_3.detectChangesInternal(this, this._el_25, throwOnChange);
        this._Badge_28_3.detectChangesInternal(this, this._el_28, throwOnChange);
        if (this._Item_32_4.detectChangesInternal(this, this._el_32, throwOnChange)) {
            this._appEl_32.componentView.markAsCheckOnce();
        }
        this._ItemContent_32_5.detectChangesInternal(this, this._el_32, throwOnChange);
        this._Label_34_3.detectChangesInternal(this, this._el_34, throwOnChange);
        this._Badge_37_3.detectChangesInternal(this, this._el_37, throwOnChange);
        if (this._Item_41_4.detectChangesInternal(this, this._el_41, throwOnChange)) {
            this._appEl_41.componentView.markAsCheckOnce();
        }
        this._ItemContent_41_5.detectChangesInternal(this, this._el_41, throwOnChange);
        this._Label_43_3.detectChangesInternal(this, this._el_43, throwOnChange);
        this._Badge_46_3.detectChangesInternal(this, this._el_46, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_14_1.dirty) {
                this._query_Button_14_1.reset([]);
                this._Item_14_4.context._buttons = this._query_Button_14_1;
                this._query_Button_14_1.notifyOnChanges();
            }
            if (this._query_Icon_14_2.dirty) {
                this._query_Icon_14_2.reset([]);
                this._Item_14_4.context._icons = this._query_Icon_14_2;
                this._query_Icon_14_2.notifyOnChanges();
            }
            if (this._query_Button_23_1.dirty) {
                this._query_Button_23_1.reset([]);
                this._Item_23_4.context._buttons = this._query_Button_23_1;
                this._query_Button_23_1.notifyOnChanges();
            }
            if (this._query_Icon_23_2.dirty) {
                this._query_Icon_23_2.reset([]);
                this._Item_23_4.context._icons = this._query_Icon_23_2;
                this._query_Icon_23_2.notifyOnChanges();
            }
            if (this._query_Button_32_1.dirty) {
                this._query_Button_32_1.reset([]);
                this._Item_32_4.context._buttons = this._query_Button_32_1;
                this._query_Button_32_1.notifyOnChanges();
            }
            if (this._query_Icon_32_2.dirty) {
                this._query_Icon_32_2.reset([]);
                this._Item_32_4.context._icons = this._query_Icon_32_2;
                this._query_Icon_32_2.notifyOnChanges();
            }
            if (this._query_Button_41_1.dirty) {
                this._query_Button_41_1.reset([]);
                this._Item_41_4.context._buttons = this._query_Button_41_1;
                this._query_Button_41_1.notifyOnChanges();
            }
            if (this._query_Icon_41_2.dirty) {
                this._query_Icon_41_2.reset([]);
                this._Item_41_4.context._icons = this._query_Icon_41_2;
                this._query_Icon_41_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_14_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_23_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_32_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_41_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.login, '\'s details');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_6, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_10_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', ((this.context.user == null) ? null : this.context.user.followers), '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_20, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, '', ((this.context.user == null) ? null : this.context.user.following), '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_29, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import4.interpolate(1, '', ((this.context.user == null) ? null : this.context.user.public_repos), '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_38, currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, '', ((this.context.user == null) ? null : this.context.user.public_gists), '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_47, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_UserDetailsPage0.prototype.destroyInternal = function () {
        this._Content_10_4.context.ngOnDestroy();
    };
    return _View_UserDetailsPage0;
}(import1.AppView));
export function viewFactory_UserDetailsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UserDetailsPage === null)) {
        (renderType_UserDetailsPage = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_UserDetailsPage, {}));
    }
    return new _View_UserDetailsPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=user-details.ngfactory.js.map