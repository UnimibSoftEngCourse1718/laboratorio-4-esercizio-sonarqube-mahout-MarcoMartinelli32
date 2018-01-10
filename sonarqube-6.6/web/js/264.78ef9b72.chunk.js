webpackJsonp([264],{2108:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=(n.n(a),n(30)),o=n.n(i),r=n(2302),u=n(2301),s=n(2153),l=n(2196),c=n(252),p=n(2),d=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!0},e.handleChangeGate=function(t,a){var i=e.state.allGates;return(t||a)&&i?(a?n.i(s.a)(a,e.props.component.key):n.i(s.b)(t,e.props.component.key)).then(function(){if(e.mounted)if(n.i(l.a)(n.i(p.translate)("project_quality_gate.successfully_updated")),a){var t=i.find(function(t){return t.id===a});t&&e.setState({gate:t})}else e.setState({gate:void 0})}):Promise.resolve()},e}return d(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchQualityGates():n.i(c.default)()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.checkPermissions=function(){var t=this.props.component.configuration;return!(!t||!t.showQualityGates)},e.prototype.fetchQualityGates=function(){var t=this;this.setState({loading:!0}),Promise.all([n.i(s.c)(),n.i(s.d)(this.props.component.key)]).then(function(e){var n=e[0],a=e[1];t.mounted&&t.setState({allGates:n,gate:a,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},e.prototype.render=function(){if(!this.checkPermissions())return null;var t=this.state,e=t.allGates,i=t.gate,s=t.loading;return a.createElement("div",{id:"project-quality-gate",className:"page page-limited"},a.createElement(o.a,{title:n.i(p.translate)("project_quality_gate.page")}),a.createElement(r.a,null),s?a.createElement("i",{className:"spinner"}):e&&a.createElement(u.a,{allGates:e,gate:i,onChange:this.handleChangeGate}))},e}(a.PureComponent);e.default=f},2153:function(t,e,n){"use strict";function a(){return n.i(v.getJSON)("/api/qualitygates/app").catch(q.a)}function i(){return n.i(v.getJSON)("/api/qualitygates/list").then(function(t){return t.qualitygates.map(function(e){return O({},e,{id:e.id,isDefault:e.id===t.default})})},q.a)}function o(t){return n.i(v.getJSON)("/api/qualitygates/show",{id:t}).catch(q.a)}function r(t){return n.i(v.postJSON)("/api/qualitygates/create",{name:t})}function u(t){return n.i(v.post)("/api/qualitygates/destroy",{id:t})}function s(t,e){return n.i(v.post)("/api/qualitygates/rename",{id:t,name:e})}function l(t,e){return n.i(v.postJSON)("/api/qualitygates/copy",{id:t,name:e})}function c(t){return n.i(v.post)("/api/qualitygates/set_as_default",{id:t}).catch(q.a)}function p(t){return n.i(v.post)("/api/qualitygates/unset_default",{id:t}).catch(q.a)}function d(t,e){return n.i(v.postJSON)("/api/qualitygates/create_condition",O({},e,{gateId:t}))}function f(t){return n.i(v.postJSON)("/api/qualitygates/update_condition",t)}function g(t){return n.i(v.post)("/api/qualitygates/delete_condition",{id:t})}function h(t){return n.i(v.getJSON)("/api/qualitygates/get_by_project",{project:t}).then(function(t){return t.qualityGate&&{id:t.qualityGate.id,isDefault:t.qualityGate.default,name:t.qualityGate.name}})}function y(t,e){return n.i(v.post)("/api/qualitygates/select",{gateId:t,projectKey:e}).catch(q.a)}function m(t,e){return n.i(v.post)("/api/qualitygates/deselect",{gateId:t,projectKey:e}).catch(q.a)}function _(t){return n.i(v.getJSON)("/api/qualitygates/application_status",{application:t})}e.o=a,e.c=i,e.f=o,e.p=r,e.l=u,e.n=s,e.m=l,e.h=c,e.g=p,e.i=d,e.j=f,e.k=g,e.d=h,e.a=y,e.b=m,e.e=_;var v=n(22),q=n(61),O=this&&this.__assign||Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}},2196:function(t,e,n){"use strict";function a(t){n.i(i.default)().dispatch(o.d(t))}e.a=a;var i=n(78),o=n(36)},2301:function(t,e,n){"use strict";var a=n(0),i=(n.n(a),n(60)),o=(n.n(i),n(4)),r=(n.n(o),n(2)),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loading:!1},e.stopLoading=function(){e.mounted&&e.setState({loading:!1})},e.handleChange=function(t){var n=e.props.gate,a=null==n&&null!=t.value,i=null!=n&&null==t.value,o=null!=n&&n.id!==Number(t.value);(a||i||o)&&(e.setState({loading:!0}),e.props.onChange(n&&n.id,Number(t.value)).then(e.stopLoading,e.stopLoading))},e.renderGateName=function(t){return t.isDefault?a.createElement("span",null,a.createElement("strong",null,n.i(r.translate)("default")),": ",t.label):a.createElement("span",null,t.label)},e}return u(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.renderSelect=function(){var t=this.props,e=t.gate,u=t.allGates,s=u.map(function(t){return{value:String(t.id),label:t.name,isDefault:t.isDefault}});return n.i(o.some)(u,function(t){return t.isDefault})||s.unshift({value:"",label:n.i(r.translate)("none")}),a.createElement(i,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderGateName,options:s,placeholder:n.i(r.translate)("none"),style:{width:300},value:e&&String(e.id),valueRenderer:this.renderGateName})},e.prototype.render=function(){return a.createElement("div",null,this.renderSelect(),this.state.loading&&a.createElement("i",{className:"spinner spacer-left"}))},e}(a.PureComponent);e.a=s},2302:function(t,e,n){"use strict";function a(){return i.createElement("header",{className:"page-header"},i.createElement("h1",{className:"page-title"},n.i(o.translate)("project_quality_gate.page")),i.createElement("div",{className:"page-description"},n.i(o.translate)("project_quality_gate.page.description")))}e.a=a;var i=n(0),o=(n.n(i),n(2))}});
//# sourceMappingURL=264.78ef9b72.chunk.js.map