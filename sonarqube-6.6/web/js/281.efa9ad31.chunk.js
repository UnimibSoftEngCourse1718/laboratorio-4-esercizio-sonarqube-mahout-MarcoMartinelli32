webpackJsonp([281],{2110:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=(o.n(r),o(6)),n=(o.n(i),o(397)),s=o(248),c=o(53),d=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),u=this&&this.__assign||Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++){e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},h=function(t){function e(e){var o=t.call(this,e)||this;return o.state={},o}return d(e,t),e.prototype.componentDidMount=function(){this.defineIfShouldBeRedirected()},e.prototype.componentDidUpdate=function(t){t.location!==this.props.location?this.defineIfShouldBeRedirected():!0===this.state.shouldBeRedirected?this.context.router.replace(u({},this.props.location,{pathname:"/projects/favorite"})):null!=this.state.shouldForceSorting&&this.context.router.replace(u({},this.props.location,{query:u({},this.props.location.query,{sort:this.state.shouldForceSorting})}))},e.prototype.defineIfShouldBeRedirected=function(){var t=this;Object.keys(this.props.location.query).length>0?this.setState({shouldBeRedirected:!1,shouldForceSorting:void 0}):this.context.currentUser.isLoggedIn?o.i(s.m)()?this.setState({shouldBeRedirected:!0,shouldForceSorting:void 0}):o.i(s.n)()?this.setState({shouldBeRedirected:!1,shouldForceSorting:void 0}):(this.setState({shouldBeRedirected:void 0,shouldForceSorting:void 0}),o.i(c.w)({filter:"isFavorite",ps:1}).then(function(e){t.setState({shouldBeRedirected:e.paging.total>0,shouldForceSorting:void 0})})):this.props.location.query&&this.props.location.query.sort?this.setState({shouldBeRedirected:!1,shouldForceSorting:void 0}):this.setState({shouldBeRedirected:!1,shouldForceSorting:"-analysis_date"})},e.prototype.render=function(){var t=this.state,e=t.shouldBeRedirected,o=t.shouldForceSorting;return null==e||!0===e||null!=o?null:r.createElement(n.a,{isFavorite:!1,location:this.props.location})},e.contextTypes={currentUser:i.object.isRequired,router:i.object.isRequired},e}(r.PureComponent);e.default=h}});
//# sourceMappingURL=281.efa9ad31.chunk.js.map