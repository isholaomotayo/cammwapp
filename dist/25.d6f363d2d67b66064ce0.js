(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1884:function(e,t,n){"use strict";n.r(t);n(24),n(20),n(237);var r=n(134),o=n(3),a=n(1902),i=n(574),s=n(621),c=n(47),l=n(236),u=n(232),f=n(538),m=(n(73),n(72),n(92),n(5)),p=n.n(m),d=n(10),y=n.n(d),b=n(536),h=n(1064),v=n(12),g=n(549),E=n(610),_=n(844),O=n(138),T=n(535),S=n(580),w=n.n(S),j=n(639),N=n(572),P=n(555),C=n(640),k=n(653),A=n(1052),M=n(1048);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,H(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,y.a.PureComponent),function(e,t,n){t&&I(e.prototype,t),n&&I(e,n)}(t,[{key:"render",value:function(){return y.a.createElement("span",this.props,y.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 20 20",style:G,role:"icon","aria-label":Object(T.localizeMessage)("generic_icons.info","Info Icon")},y.a.createElement("g",{transform:"matrix(1.17647,0,0,1.17647,-1.55431e-15,-1.00573e-14)"},y.a.createElement("path",{d:"M8.5,0C3.797,0 0,3.797 0,8.5C0,13.203 3.797,17 8.5,17C13.203,17 17,13.203 17,8.5C17,3.797 13.203,0 8.5,0ZM10,8.5C10,7.672 9.328,7 8.5,7C7.672,7 7,7.672 7,8.5L7,12.45C7,13.278 7.672,13.95 8.5,13.95C9.328,13.95 10,13.278 10,12.45L10,8.5ZM8.5,3C9.328,3 10,3.672 10,4.5C10,5.328 9.328,6 8.5,6C7.672,6 7,5.328 7,4.5C7,3.672 7.672,3 8.5,3Z"}))))}}]),t}(),G={fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:1.41421};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return W(B(B(n=function(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?B(e):t}(this,(e=z(t)).call.apply(e,[this].concat(o))))),"handleTeamClick",function(e){e.preventDefault(),n.props.onTeamClick(n.props.team)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,y.a.PureComponent),function(e,t,n){t&&U(e.prototype,t),n&&U(e,n)}(t,[{key:"render",value:function(){var e;e=this.props.loading?y.a.createElement("span",{className:"fa fa-refresh fa-spin right signup-team__icon",title:T.localizeMessage("generic_icons.loading","Loading Icon")}):y.a.createElement("span",{className:"fa fa-angle-right right signup-team__icon",title:T.localizeMessage("select_team.join.icon","Join Team Icon")});var t="",n="";return this.props.team.description&&(t=y.a.createElement(A.a,{id:"team-description__tooltip"},this.props.team.description),n=y.a.createElement(M.a,{trigger:["hover","focus","click"],delayShow:1e3,placement:"top",overlay:t,ref:"descriptionOverlay",rootClose:!0,container:this},y.a.createElement(L,{className:"icon icon--info"}))),y.a.createElement("div",{className:"signup-team-dir"},n,y.a.createElement("a",{href:"#",id:T.createSafeId(this.props.team.display_name),onClick:this.handleTeamClick},y.a.createElement("span",{className:"signup-team-dir__name"},this.props.team.display_name),e))}}]),t}();function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}W(F,"propTypes",{team:p.a.object.isRequired,onTeamClick:p.a.func.isRequired,loading:p.a.bool.isRequired});var $=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(Q(Q(n=function(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?Q(e):t}(this,K(t).call(this,e)))),"loadPoliciesIntoState",function(e){var t="true"===Object(_.a)("enableTeamCreation",e);n.setState({enableTeamCreation:t,loaded:!0})}),X(Q(Q(n)),"handleTeamClick",function(e){n.setState({loadingTeamId:e.id}),Object(E.a)("",e.invite_id,function(){n.props.history.push("/".concat(e.name,"/channels/town-square"))},function(e){n.setState({error:e,loadingTeamId:""})})}),X(Q(Q(n)),"handleLogoutClick",function(e){e.preventDefault(),Object(g.p)("/login")}),X(Q(Q(n)),"clearError",function(e){e.preventDefault(),n.setState({error:null})}),n.state={loadingTeamId:"",error:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,y.a.Component),function(e,t,n){t&&Z(e.prototype,t),n&&Z(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.actions.getTeams(0,200)}},{key:"UNSAFE_componentWillMount",value:function(){var e=this.props,t=e.actions,n=e.roles;t.loadRolesIfNeeded([v.General.SYSTEM_ADMIN_ROLE,v.General.SYSTEM_USER_ROLE]),n.system_admin&&n.system_user&&this.loadPoliciesIntoState(n)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){!this.state.loaded&&e.roles.system_admin&&e.roles.system_user&&this.loadPoliciesIntoState(e.roles)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.currentUserRoles,o=n.customDescriptionText,a=n.isMemberOfTeam,i=n.joinableTeams,s=n.siteName,c=this.state.enableTeamCreation,l=T.isSystemAdmin(r);if(this.state.loadingTeamId)e=y.a.createElement(P.a,null);else if(this.state.error)e=y.a.createElement("div",{className:"signup__content"},y.a.createElement("div",{className:"form-group has-error"},y.a.createElement("label",{className:"control-label"},this.state.error.message)));else{var u=[];i.forEach(function(e){u.push(y.a.createElement(F,{key:"team_"+e.name,team:e,onTeamClick:t.handleTeamClick,loading:t.state.loadingTeamId===e.id}))}),0===u.length&&(c||l)?u=y.a.createElement("div",{className:"signup-team-dir-err"},y.a.createElement("div",null,y.a.createElement(b.c,{id:"signup_team.no_open_teams_canCreate",defaultMessage:"No teams are available to join. Please create a new team or ask your administrator for an invite."}))):0===u.length&&(u=y.a.createElement("div",{className:"signup-team-dir-err"},y.a.createElement("div",null,y.a.createElement(C.a,{permissions:[v.Permissions.CREATE_TEAM]},y.a.createElement(b.c,{id:"signup_team.no_open_teams_canCreate",defaultMessage:"No teams are available to join. Please create a new team or ask your administrator for an invite."})),y.a.createElement(C.a,{permissions:[v.Permissions.CREATE_TEAM],invert:!0},y.a.createElement(b.c,{id:"signup_team.no_open_teams",defaultMessage:"No teams are available to join. Please ask your administrator for an invite."}))))),e=y.a.createElement("div",{className:"signup__content"},y.a.createElement("h4",null,y.a.createElement(b.c,{id:"signup_team.join_open",defaultMessage:"Teams you can join: "})),y.a.createElement("div",{className:"signup-team-all"},u))}var f=null;l&&!c&&(f=y.a.createElement("div",null,y.a.createElement(b.c,{id:"login.createTeamAdminOnly",defaultMessage:"This option is only available for System Administrators, and does not show up for other users."})));var m,p,d=y.a.createElement(C.a,{permissions:[v.Permissions.CREATE_TEAM]},y.a.createElement("div",{className:"margin--extra"},y.a.createElement(h.a,{to:"/create_team",className:"signup-team-login"},y.a.createElement(b.c,{id:"login.createTeam",defaultMessage:"Create a new team"}))),f);return O.n()||(m=y.a.createElement(C.a,{permissions:[v.Permissions.MANAGE_SYSTEM]},y.a.createElement("div",{className:"margin--extra hidden-xs"},y.a.createElement(h.a,{to:"/admin_console",className:"signup-team-login"},y.a.createElement(b.c,{id:"signup_team_system_console",defaultMessage:"Go to System Console"}))))),p=this.state.error?y.a.createElement(N.a,{onClick:this.clearError}):a?y.a.createElement(N.a,null):y.a.createElement("div",{className:"signup-header"},y.a.createElement("a",{href:"#",onClick:this.handleLogoutClick},y.a.createElement("span",{className:"fa fa-chevron-left",title:T.localizeMessage("generic_icons.logout","Logout Icon")}),y.a.createElement(b.c,{id:"web.header.logout",defaultMessage:"Logout"}))),y.a.createElement("div",null,y.a.createElement(j.a,null),p,y.a.createElement("div",{className:"col-sm-12"},y.a.createElement("div",{className:"signup-team__container"},y.a.createElement("img",{className:"signup-team-logo",src:w.a}),y.a.createElement(k.a,{customDescriptionText:o,siteName:s}),e,d,m)))}}]),t}();X($,"propTypes",{currentUserRoles:p.a.string,customDescriptionText:p.a.string,isMemberOfTeam:p.a.bool.isRequired,joinableTeams:p.a.array,roles:p.a.object.isRequired,siteName:p.a.string,actions:p.a.shape({getTeams:p.a.func.isRequired,loadRolesIfNeeded:p.a.func.isRequired}).isRequired});t.default=Object(a.a)(Object(r.connect)(function(e){var t=Object(c.getConfig)(e),n=Object(f.getCurrentUser)(e),r=Object.values(Object(u.getTeamMemberships)(e));return{currentUserRoles:n.roles||"",customDescriptionText:t.CustomDescriptionText,roles:Object(l.getRoles)(e),enableTeamCreation:"true"===t.EnableTeamCreation,isMemberOfTeam:r&&r.length>0,joinableTeams:Object(u.getSortedJoinableTeams)(e,n.locale),siteName:t.SiteName}},function(e){return{actions:Object(o.bindActionCreators)({getTeams:i.getTeams,loadRolesIfNeeded:s.loadRolesIfNeeded},e)}})($))},572:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(73),n(72);var r=n(5),o=n.n(r),a=n(10),i=n.n(a),s=n(536),c=n(1064),l=n(535);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i.a.PureComponent),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"signup-header"},i.a.createElement(c.a,{onClick:this.props.onClick,to:this.props.url},i.a.createElement("span",{className:"fa fa-chevron-left",title:Object(l.localizeMessage)("generic_icons.back","Back Icon")}),i.a.createElement(s.c,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}();y(b,"propTypes",{url:o.a.string,onClick:o.a.func}),y(b,"defaultProps",{url:"/"})},580:function(e,t,n){e.exports=n.p+"files/b4b638e8c6672039f00a5f07cfed24d4.png"},653:function(e,t,n){"use strict";n.d(t,"a",function(){return d});n(73),n(72);var r=n(5),o=n.n(r),a=n(10),i=n.n(a),s=n(536);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.a.PureComponent),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.customDescriptionText,n=e.siteName,r=null;return r=t||i.a.createElement(s.c,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,n),i.a.createElement("h4",{className:"color--light"},r))}}]),t}();p(d,"propTypes",{customDescriptionText:o.a.string,siteName:o.a.string}),p(d,"defaultProps",{siteName:"Mattermost"})},844:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return l});n(99),n(96),n(93),n(237),n(140),n(142),n(73),n(72),n(97),n(147),n(249),n(20),n(25),n(24);var r=n(12),o=regeneratorRuntime.mark(u);function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s={enableTeamCreation:{true:[{roleName:"system_user",permission:r.Permissions.CREATE_TEAM,shouldHave:!0}],false:[{roleName:"system_user",permission:r.Permissions.CREATE_TEAM,shouldHave:!1}]},editOthersPosts:{true:[{roleName:"system_admin",permission:r.Permissions.EDIT_OTHERS_POSTS,shouldHave:!0},{roleName:"team_admin",permission:r.Permissions.EDIT_OTHERS_POSTS,shouldHave:!0}],false:[{roleName:"team_admin",permission:r.Permissions.EDIT_OTHERS_POSTS,shouldHave:!1},{roleName:"system_admin",permission:r.Permissions.EDIT_OTHERS_POSTS,shouldHave:!1}]},enableOnlyAdminIntegrations:{true:[{roleName:"team_user",permission:r.Permissions.MANAGE_WEBHOOKS,shouldHave:!1},{roleName:"team_user",permission:r.Permissions.MANAGE_SLASH_COMMANDS,shouldHave:!1},{roleName:"system_user",permission:r.Permissions.MANAGE_OAUTH,shouldHave:!1}],false:[{roleName:"team_user",permission:r.Permissions.MANAGE_WEBHOOKS,shouldHave:!0},{roleName:"team_user",permission:r.Permissions.MANAGE_SLASH_COMMANDS,shouldHave:!0},{roleName:"system_user",permission:r.Permissions.MANAGE_OAUTH,shouldHave:!0}]}};function c(e,t){var n=JSON.parse(JSON.stringify(t));return function(e){var t=function(){var e=[];return Object.values(s).forEach(function(t){Object.values(t).forEach(function(t){var n=t.map(function(e){return e.roleName});e=e.concat(n)})}),a(new Set(e.map(function(e){return e})))}();Object.keys(e).forEach(function(n){t.includes(n)||delete e[n]})}(n),Object.keys(s).forEach(function(t){var r=e[t];r&&function(e,t,n){var r=s[e][t];if(void 0===r)throw new Error("Value '".concat(t,"' not present in MAPPING for key '").concat(e,"'."));r.forEach(function(e){var t=n[e.roleName];e.shouldHave?function(e,t){t.permissions.includes(e)||t.permissions.push(e)}(e.permission,t):function(e,t){var n=t.permissions.indexOf(e);-1!==n&&t.permissions.splice(n,1)}(e.permission,t)})}(t,r,n)}),Object.entries(n).forEach(function(e){var r=i(e,2),o=r[0],s=r[1],c=new Set(t[o].permissions),l=new Set(s.permissions),u=a(l).filter(function(e){return!c.has(e)});c.size===l.size&&0===u.length&&delete n[o]}),n}function l(e,t){var n=!0,r=!1,o=void 0;try{for(var a,i=u(s[e],t)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;if(c.allConditionsAreMet)return c.value}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}throw new Error("No matching mapping value found for key '".concat(e,"' with the given roles."))}function u(e,t){var n,r,a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:o.t0=regeneratorRuntime.keys(e);case 1:if((o.t1=o.t0()).done){o.next=10;break}if(n=o.t1.value,!e.hasOwnProperty(n)){o.next=8;break}return r=e[n],a=r.some(function(e){var n=t[e.roleName];return e.shouldHave&&!n.permissions.includes(e.permission)||!e.shouldHave&&n.permissions.includes(e.permission)}),o.next=8,{value:n,allConditionsAreMet:!a};case 8:o.next=1;break;case 10:case"end":return o.stop()}},o,this)}}}]);
//# sourceMappingURL=25.d6f363d2d67b66064ce0.js.map