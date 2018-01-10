webpackJsonp([246],{2129:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=a.n(r),l=a(30),c=a.n(l),u=a(2426),d=a(2),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"componentDidMount",value:function(){a.i(u.a)(this.refs.container,this.props.component)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(c.a,{title:a.i(d.translate)("custom_measures.page")}),o.a.createElement("div",{ref:"container"}))}}]),t}(o.a.PureComponent);t.default=h},2191:function(e,t,a){"use strict";var n=a(4),s=(a.n(n),a(18)),i=a.n(s);t.a=i.a.Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/metrics"},sync:function(e,t,s){var r=s||{};return"create"===e&&a.i(n.defaults)(r,{url:this.urlRoot()+"/create",type:"POST",data:a.i(n.pick)(t.toJSON(),"key","name","description","domain","type")}),"update"===e&&a.i(n.defaults)(r,{url:this.urlRoot()+"/update",type:"POST",data:a.i(n.pick)(t.toJSON(),"id","key","name","description","domain","type")}),"delete"===e&&a.i(n.defaults)(r,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),i.a.ajax(r)}})},2209:function(e,t,a){"use strict";var n=a(18),s=a.n(n),i=a(2191);t.a=s.a.Collection.extend({model:i.a,url:function(){return window.baseUrl+"/api/metrics/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.metrics},fetch:function(e){var t=Object.assign({data:{}},e);return this.q=t.data.q,t.data.isCustom=!0,s.a.Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})},2235:function(e,t,a){"use strict";var n=a(4),s=(a.n(n),a(18)),i=a.n(s);t.a=i.a.Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/custom_measures"},sync:function(e,t,s){var r=s||{};return"create"===e&&a.i(n.defaults)(r,{url:this.urlRoot()+"/create",type:"POST",data:a.i(n.pick)(t.toJSON(),"metricId","value","description","projectId")}),"update"===e&&a.i(n.defaults)(r,{url:this.urlRoot()+"/update",type:"POST",data:a.i(n.pick)(t.toJSON(),"id","value","description")}),"delete"===e&&a.i(n.defaults)(r,{url:this.urlRoot()+"/delete",type:"POST",data:{id:this.id}}),i.a.ajax(r)}})},2236:function(e,t,a){"use strict";var n=a(43),s=a(2209),i=a(2663),r=a.n(i);t.a=n.a.extend({template:r.a,initialize:function(){this.metrics=new s.a,this.listenTo(this.metrics,"reset",this.render),this.metrics.fetch({reset:!0})},onRender:function(){n.a.prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-custom-measure-metric").select2({width:"250px",minimumResultsForSearch:20})},onDestroy:function(){n.a.prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){n.a.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},getAvailableMetrics:function(){var e=this.collection.getTakenMetrics();return this.metrics.toJSON().filter(function(t){return-1===e.indexOf(t.id)})},serializeData:function(){var e=this.getAvailableMetrics(),t=!this.model;return Object.assign({},n.a.prototype.serializeData.apply(this,arguments),{metrics:e,canCreateMetric:!t||e.length>0})}})},2422:function(e,t,a){"use strict";var n=a(2235),s=a(2236);t.a=s.a.extend({sendRequest:function(){var e=this,t=new n.a({metricId:this.$("#create-custom-measure-metric").val(),value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val(),projectId:this.options.projectId});return this.disableForm(),t.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},2423:function(e,t,a){"use strict";var n=a(4),s=(a.n(n),a(18)),i=a.n(s),r=a(2235);t.a=i.a.Collection.extend({model:r.a,initialize:function(e){this.projectId=e.projectId},url:function(){return window.baseUrl+"/api/custom_measures/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.customMeasures},fetch:function(e){var t=Object.assign({data:{}},e);return this.q=t.data.q,t.data.projectId=this.projectId,i.a.Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps},getTakenMetrics:function(){var e=this.map(function(e){return e.get("metric").id});return a.i(n.uniq)(e)}})},2424:function(e,t,a){"use strict";var n=a(43),s=a(2662),i=a.n(s);t.a=n.a.extend({template:i.a,onFormSubmit:function(){n.a.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this,t=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){t.refresh(),e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},2425:function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=a(2422),r=a(2664),o=a.n(r);t.a=s.a.ItemView.extend({template:o.a,events:{"click #custom-measures-create":"onCreateClick"},onCreateClick:function(e){e.preventDefault(),this.createCustomMeasure()},createCustomMeasure:function(){new i.a({collection:this.collection,projectId:this.options.projectId}).render()}})},2426:function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=a(2427),r=a(2423),o=a(2425),l=a(2430),c=a(2428),u=new s.a.Application,d=function(e,t){this.layout=new i.a({el:e}),this.layout.render(),this.customMeasures=new r.a({projectId:t.id}),this.headerView=new o.a({collection:this.customMeasures,projectId:t.id}),this.layout.headerRegion.show(this.headerView),this.listView=new l.a({collection:this.customMeasures}),this.layout.listRegion.show(this.listView),this.listFooterView=new c.a({collection:this.customMeasures}),this.layout.listFooterRegion.show(this.listFooterView),this.customMeasures.fetch()};u.on("start",function(e){d.call(u,e.el,e.component)}),t.a=function(e,t){u.start({el:e,component:t})}},2427:function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=a(2665),r=a.n(i);t.a=s.a.LayoutView.extend({template:r.a,regions:{headerRegion:"#custom-measures-header",listRegion:"#custom-measures-list",listFooterRegion:"#custom-measures-list-footer"}})},2428:function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=a(2666),r=a.n(i);t.a=s.a.ItemView.extend({template:r.a,collectionEvents:{all:"render"},events:{"click #custom-measures-fetch-more":"onMoreClick"},onMoreClick:function(e){e.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return Object.assign({},s.a.ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})},2429:function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=a(2431),r=a(2424),o=a(2667),l=a.n(o);t.a=s.a.ItemView.extend({tagName:"tr",template:l.a,events:{"click .js-custom-measure-update":"onUpdateClick","click .js-custom-measure-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(e){e.preventDefault(),this.updateCustomMeasure()},onDeleteClick:function(e){e.preventDefault(),this.deleteCustomMeasure()},updateCustomMeasure:function(){new i.a({model:this.model,collection:this.model.collection}).render()},deleteCustomMeasure:function(){new r.a({model:this.model}).render()}})},2430:function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=a(2429),r=a(2668),o=a.n(r);t.a=s.a.CompositeView.extend({template:o.a,childView:i.a,childViewContainer:"tbody"})},2431:function(e,t,a){"use strict";var n=a(2236);t.a=n.a.extend({sendRequest:function(){var e=this;return this.model.set({value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},2662:function(e,t,a){function n(e){return e&&(e.__esModule?e.default:e)}var s=a(5);e.exports=(s.default||s).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,i){var r,o=this.escapeExpression;return'<form id="delete-custom-measure-form">\n  <div class="modal-head">\n    <h2>'+o(n(a(1)).call(e,"custom_measures.delete_custom_measure",{name:"t",hash:{},data:i}))+'</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    '+o(n(a(42)).call(e,"custom_measures.delete_custom_measure.confirmation",null!=(r=null!=e?e.metric:e)?r.name:r,{name:"tp",hash:{},data:i}))+'\n  </div>\n  <div class="modal-foot">\n    <button id="delete-custom-measure-submit" class="button-red">'+o(n(a(1)).call(e,"delete",{name:"t",hash:{},data:i}))+'</button>\n    <a href="#" class="js-modal-close" id="delete-custom-measure-cancel">'+o(n(a(1)).call(e,"cancel",{name:"t",hash:{},data:i}))+"</a>\n  </div>\n</form>\n"},useData:!0})},2663:function(e,t,a){function n(e){return e&&(e.__esModule?e.default:e)}var s=a(5);e.exports=(s.default||s).template({1:function(e,t,s,i){return(0,this.escapeExpression)(n(a(1)).call(e,"custom_measures.update_custom_measure",{name:"t",hash:{},data:i}))},3:function(e,t,s,i){return(0,this.escapeExpression)(n(a(1)).call(e,"custom_measures.create_custom_measure",{name:"t",hash:{},data:i}))},5:function(e,t,a,n,s){var i,r="";return i=t.if.call(e,null!=e?e.canCreateMetric:e,{name:"if",hash:{},fn:this.program(6,n,s),inverse:this.program(10,n,s),data:n}),null!=i&&(r+=i),r},6:function(e,t,s,i,r){var o,l=this.escapeExpression,c='        <div class="modal-field">\n          <label for="create-custom-measure-metric">'+l(n(a(1)).call(e,"custom_measures.metric",{name:"t",hash:{},data:i}))+'<em class="mandatory">*</em></label>\n          <select id="create-custom-measure-metric" name="metric" required>\n';return o=t.each.call(e,null!=e?e.metrics:e,{name:"each",hash:{},fn:this.program(7,i,r),inverse:this.noop,data:i}),null!=o&&(c+=o),c+"          </select>\n        </div>\n"},7:function(e,t,s,i,r){var o,l=this.lambda,c=this.escapeExpression,u='              <option value="'+c(l(null!=e?e.id:e,e))+'" ';return o=n(a(14)).call(e,null!=e?e.id:e,null!=(o=null!=r[1]?r[1].metric:r[1])?o.id:o,{name:"eq",hash:{},fn:this.program(8,i,r),inverse:this.noop,data:i}),null!=o&&(u+=o),u+">"+c(l(null!=e?e.name:e,e))+"</option>\n"},8:function(e,t,a,n){return"selected"},10:function(e,t,s,i){return'        <div class="alert alert-warning">'+(0,this.escapeExpression)(n(a(1)).call(e,"custom_measures.all_metrics_taken",{name:"t",hash:{},data:i}))+"</div>\n"},12:function(e,t,a,n){return"disabled"},14:function(e,t,s,i){return(0,this.escapeExpression)(n(a(1)).call(e,"update_verb",{name:"t",hash:{},data:i}))},16:function(e,t,s,i){return(0,this.escapeExpression)(n(a(1)).call(e,"create",{name:"t",hash:{},data:i}))},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,i,r){var o,l=this.escapeExpression,c=this.lambda,u='<form id="create-custom-measure-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return o=t.if.call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,i,r),inverse:this.program(3,i,r),data:i}),null!=o&&(u+=o),u+='</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n\n',o=t.unless.call(e,null!=e?e.id:e,{name:"unless",hash:{},fn:this.program(5,i,r),inverse:this.noop,data:i}),null!=o&&(u+=o),u+='\n    <div class="modal-field">\n      <label for="create-custom-measure-value">'+l(n(a(1)).call(e,"value",{name:"t",hash:{},data:i}))+'<em class="mandatory">*</em></label>\n      <input id="create-custom-measure-value" name="value" type="text" maxlength="200" required value="'+l(c(null!=e?e.value:e,e))+'">\n    </div>\n\n    <div class="modal-field">\n      <label for="create-custom-measure-description">'+l(n(a(1)).call(e,"description",{name:"t",hash:{},data:i}))+'</label>\n      <textarea id="create-custom-measure-description" name="description">'+l(c(null!=e?e.description:e,e))+'</textarea>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-custom-measure-submit" ',o=t.unless.call(e,null!=e?e.canCreateMetric:e,{name:"unless",hash:{},fn:this.program(12,i,r),inverse:this.noop,data:i}),null!=o&&(u+=o),u+=">\n      ",o=t.if.call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(14,i,r),inverse:this.program(16,i,r),data:i}),null!=o&&(u+=o),u+'\n    </button>\n    <a href="#" class="js-modal-close" id="create-custom-measure-cancel">'+l(n(a(1)).call(e,"cancel",{name:"t",hash:{},data:i}))+"</a>\n  </div>\n</form>\n"},useData:!0,useDepths:!0})},2664:function(e,t,a){function n(e){return e&&(e.__esModule?e.default:e)}var s=a(5);e.exports=(s.default||s).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,i){var r=this.escapeExpression;return'<header class="page-header">\n  <h1 class="page-title">'+r(n(a(1)).call(e,"custom_measures.page",{name:"t",hash:{},data:i}))+'</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="custom-measures-create">'+r(n(a(1)).call(e,"create",{name:"t",hash:{},data:i}))+'</button>\n    </div>\n  </div>\n  <p class="page-description">'+r(n(a(1)).call(e,"custom_measures.page.description",{name:"t",hash:{},data:i}))+"</p>\n</header>\n"},useData:!0})},2665:function(e,t,a){var n=a(5);e.exports=(n.default||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,n){return'<div class="page page-limited">\n  <div id="custom-measures-header"></div>\n  <div id="custom-measures-list"></div>\n  <div id="custom-measures-list-footer"></div>\n</div>\n'},useData:!0})},2666:function(e,t,a){function n(e){return e&&(e.__esModule?e.default:e)}var s=a(5);e.exports=(s.default||s).template({1:function(e,t,s,i){return'    <a id="custom-measures-fetch-more" class="spacer-left" href="#">'+(0,this.escapeExpression)(n(a(1)).call(e,"show_more",{name:"t",hash:{},data:i}))+"</a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,i){var r,o=this.escapeExpression,l='<footer class="spacer-top note text-center">\n  '+o(n(a(42)).call(e,"x_of_y_shown",null!=e?e.count:e,null!=e?e.total:e,{name:"tp",hash:{},data:i}))+"\n";return r=t.if.call(e,null!=e?e.more:e,{name:"if",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=r&&(l+=r),l+"</footer>\n"},useData:!0})},2667:function(e,t,a){function n(e){return e&&(e.__esModule?e.default:e)}var s=a(5);e.exports=(s.default||s).template({1:function(e,t,s,i){var r=this.escapeExpression;return'      <span class="js-custom-measure-pending badge badge-warning spacer-left"\n            title="'+r(n(a(1)).call(e,"custom_measures.pending_tooltip",{name:"t",hash:{},data:i}))+'"\n            data-toggle="tooltip" data-placement="bottom">'+r(n(a(1)).call(e,"custom_measures.pending",{name:"t",hash:{},data:i}))+"</span>\n"},3:function(e,t,s,i){var r=this.escapeExpression;return"    "+r(n(a(1)).call(e,"updated_on",{name:"t",hash:{},data:i}))+' <span class="js-custom-measure-created-at">'+r(n(a(384)).call(e,null!=e?e.updatedAt:e,{name:"d",hash:{},data:i}))+"</span>\n"},5:function(e,t,a,n){var s,i="";return s=t.if.call(e,null!=e?e.createdAt:e,{name:"if",hash:{},fn:this.program(6,n),inverse:this.program(8,n),data:n}),null!=s&&(i+=s),i},6:function(e,t,s,i){var r=this.escapeExpression;return"      "+r(n(a(1)).call(e,"created_on",{name:"t",hash:{},data:i}))+' <span class="js-custom-measure-created-at">'+r(n(a(384)).call(e,null!=e?e.createdAt:e,{name:"d",hash:{},data:i}))+"</span>\n"},8:function(e,t,s,i){return"      "+(0,this.escapeExpression)(n(a(1)).call(e,"created",{name:"t",hash:{},data:i}))+" \n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,i){var r,o=this.lambda,l=this.escapeExpression,c='<td class="nowrap">\n  <div>\n    <span class="js-custom-measure-metric-name">'+l(o(null!=(r=null!=e?e.metric:e)?r.name:r,e))+"</span>\n";return r=t.if.call(e,null!=e?e.pending:e,{name:"if",hash:{},fn:this.program(1,i),inverse:this.noop,data:i}),null!=r&&(c+=r),c+='  </div>\n  <span class="js-custom-measure-domain note">'+l(o(null!=(r=null!=e?e.metric:e)?r.domain:r,e))+'</span>\n</td>\n\n<td class="nowrap">\n  <strong class="js-custom-measure-value">'+l(n(a(117)).call(e,null!=e?e.value:e,null!=(r=null!=e?e.metric:e)?r.type:r,{name:"formatMeasure",hash:{},data:i}))+'</strong>\n</td>\n\n<td class="">\n  <span class="js-custom-measure-description">'+l(o(null!=e?e.description:e,e))+'</span>\n</td>\n\n<td class="">\n',r=t.if.call(e,null!=e?e.updatedAt:e,{name:"if",hash:{},fn:this.program(3,i),inverse:this.program(5,i),data:i}),null!=r&&(c+=r),c+"  "+l(n(a(1)).call(e,"by_",{name:"t",hash:{},data:i}))+' <span class="js-custom-measure-user">'+l(o(null!=(r=null!=e?e.user:e)?r.name:r,e))+'</span>\n</td>\n\n<td class="thin nowrap">\n  <a class="js-custom-measure-update icon-edit" title="Update" data-toggle="tooltip" href="#"></a>\n  <a class="js-custom-measure-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</td>\n'},useData:!0})},2668:function(e,t,a){function n(e){return e&&(e.__esModule?e.default:e)}var s=a(5);e.exports=(s.default||s).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,i){var r=this.escapeExpression;return'<table class="data zebra">\n  <thead>\n  <tr>\n    <th>'+r(n(a(1)).call(e,"custom_measures.metric",{name:"t",hash:{},data:i}))+"</th>\n    <th>"+r(n(a(1)).call(e,"value",{name:"t",hash:{},data:i}))+"</th>\n    <th>"+r(n(a(1)).call(e,"description",{name:"t",hash:{},data:i}))+"</th>\n    <th>"+r(n(a(1)).call(e,"date",{name:"t",hash:{},data:i}))+"</th>\n    <th>&nbsp;</th>\n  </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n"},useData:!0})}});
//# sourceMappingURL=246.99346a66.chunk.js.map