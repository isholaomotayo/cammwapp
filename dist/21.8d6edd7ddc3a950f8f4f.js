(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1879:function(e,t,r){"use strict";r.r(t);var a=r(134),o=r(47),n=r(535),s=(r(73),r(72),r(94),r(234),r(136),r(5)),l=r.n(s),i=r(10),c=r.n(i),u=r(1901),p=r(851),m=r(580),f=r.n(m),d=r(572),h=r(135),b=r.n(h),y=r(536),w=r(562),E=r(0),g=r(549);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?O(e):t}(this,S(t).call(this,e))).submit=r.submit.bind(O(O(r))),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,c.a.Component),function(e,t,r){t&&_(e.prototype,t),r&&_(e,r)}(t,[{key:"submit",value:function(e){var t=this;e.preventDefault();var r={},a=b.a.findDOMNode(this.refs.password).value;if(!a)return r.error=n.localizeMessage("claim.oauth_to_email.enterPwd","Please enter a password."),void this.setState(r);var o=n.isValidPassword(a,this.props.passwordConfig),s=o.valid,l=o.error;if(s||!l){var i=b.a.findDOMNode(this.refs.passwordconfirm).value;if(!i||a!==i)return r.error=n.localizeMessage("claim.oauth_to_email.pwdNotMatch","Passwords do not match."),void this.setState(r);r.error=null,this.setState(r),Object(w.t)(this.props.currentType,this.props.email,a,function(){Object(g.p)("/",!1,!0)},function(e){t.setState({error:e.message})})}else this.setState({error:l})}},{key:"render",value:function(){var e=null;this.state.error&&(e=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";e&&(t+=" has-error");var r="".concat(this.props.currentType===E.D.SAML_SERVICE?E.D.SAML_SERVICE.toUpperCase():n.toTitleCase(this.props.currentType)," SSO");return c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(y.c,{id:"claim.oauth_to_email.title",defaultMessage:"Switch {type} Account to Email",values:{type:r}})),c.a.createElement("form",{onSubmit:this.submit},c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.oauth_to_email.description",defaultMessage:"Upon changing your account type, you will only be able to login with your email and password."})),c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.oauth_to_email.enterNewPwd",defaultMessage:"Enter a new password for your {site} email account",values:{site:this.props.siteName}})),c.a.createElement("div",{className:t},c.a.createElement("input",{type:"password",className:"form-control",name:"password",ref:"password",placeholder:n.localizeMessage("claim.oauth_to_email.newPwd","New Password"),spellCheck:"false"})),c.a.createElement("div",{className:t},c.a.createElement("input",{type:"password",className:"form-control",name:"passwordconfirm",ref:"passwordconfirm",placeholder:n.localizeMessage("claim.oauth_to_email.confirm","Confirm Password"),spellCheck:"false"})),e,c.a.createElement("button",{type:"submit",className:"btn btn-primary"},c.a.createElement(y.c,{id:"claim.oauth_to_email.switchTo",defaultMessage:"Switch {type} to email and password",values:{type:r}}))))}}]),t}();N.propTypes={currentType:l.a.string,email:l.a.string,siteName:l.a.string,passwordConfig:l.a.object};var j=r(553),M=r(703);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?A(e):t}(this,T(t).call(this,e))).submit=r.submit.bind(A(A(r))),r.preSubmit=r.preSubmit.bind(A(A(r))),r.state={showMfa:!1,password:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,c.a.Component),function(e,t,r){t&&C(e.prototype,t),r&&C(e,r)}(t,[{key:"preSubmit",value:function(e){var t=this;e.preventDefault();var r={},a=b.a.findDOMNode(this.refs.password).value;if(!a)return r.error=n.localizeMessage("claim.email_to_oauth.pwdError","Please enter your password."),void this.setState(r);this.setState({password:a}),r.error=null,this.setState(r),Object(j.f)(this.props.email,function(e){e?t.setState({showMfa:!0}):t.submit(t.props.email,a,"")},function(e){t.setState({error:e.message})})}},{key:"submit",value:function(e,t,r){var a=this;Object(w.k)(e,t,r,this.props.newType,function(e){window.location.href=e.follow_link},function(e){a.setState({error:e.message,showMfa:!1})})}},{key:"render",value:function(){var e=null;this.state.error&&(e=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";e&&(t+=" has-error");var r,a=this.props.newType===E.D.SAML_SERVICE?E.D.SAML_SERVICE.toUpperCase():n.toTitleCase(this.props.newType),o="".concat(a," SSO");return r=this.state.showMfa?c.a.createElement(M.a,{loginId:this.props.email,password:this.state.password,submit:this.submit}):c.a.createElement("form",{onSubmit:this.preSubmit},c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_oauth.ssoType",defaultMessage:"Upon claiming your account, you will only be able to login with {type} SSO",values:{type:a}})),c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_oauth.ssoNote",defaultMessage:"You must already have a valid {type} account",values:{type:a}})),c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_oauth.enterPwd",defaultMessage:"Enter the password for your {site} account",values:{site:this.props.siteName}})),c.a.createElement("div",{className:t},c.a.createElement("input",{type:"password",className:"form-control",name:"password",ref:"password",placeholder:n.localizeMessage("claim.email_to_oauth.pwd","Password"),spellCheck:"false"})),e,c.a.createElement("button",{type:"submit",className:"btn btn-primary"},c.a.createElement(y.c,{id:"claim.email_to_oauth.switchTo",defaultMessage:"Switch account to {uiType}",values:{uiType:o}}))),c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(y.c,{id:"claim.email_to_oauth.title",defaultMessage:"Switch Email/Password Account to {uiType}",values:{uiType:o}})),r)}}]),t}();L.propTypes={newType:l.a.string,email:l.a.string,siteName:l.a.string};r(139);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var U=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?F(e):t}(this,R(t).call(this,e))).submit=r.submit.bind(F(F(r))),r.preSubmit=r.preSubmit.bind(F(F(r))),r.state={passwordError:"",confirmError:"",ldapPasswordError:"",serverError:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,c.a.Component),function(e,t,r){t&&I(e.prototype,t),r&&I(e,r)}(t,[{key:"preSubmit",value:function(e){var t=this;e.preventDefault();var r={passwordError:"",confirmError:"",ldapPasswordError:"",serverError:""},a=this.refs.ldappassword.value;if(!a)return r.ldapPasswordError=n.localizeMessage("claim.ldap_to_email.ldapPasswordError","Please enter your AD/LDAP password."),void this.setState(r);var o=this.refs.password.value;if(!o)return r.passwordError=n.localizeMessage("claim.ldap_to_email.pwdError","Please enter your password."),void this.setState(r);var s=n.isValidPassword(o,this.props.passwordConfig),l=s.valid,i=s.error;if(l||!i){var c=this.refs.passwordconfirm.value;if(!c||o!==c)return r.confirmError=n.localizeMessage("claim.ldap_to_email.pwdNotMatch","Passwords do not match."),void this.setState(r);r.password=o,r.ldapPassword=a,this.setState(r),Object(j.f)(this.props.email,function(e){e?t.setState({showMfa:!0}):t.submit(t.props.email,o,"",a)},function(e){t.setState({error:e.message})})}else this.setState({passwordError:i})}},{key:"submit",value:function(e,t,r,a){var o=this;Object(j.F)(this.props.email,t,r,a||this.state.ldapPassword,function(e){Object(g.p)(e.follow_link,!1,!0)},function(e){if(e.id.startsWith("model.user.is_valid.pwd"))o.setState({passwordError:e.message,showMfa:!1});else switch(e.id){case"ent.ldap.do_login.invalid_password.app_error":o.setState({ldapPasswordError:e.message,showMfa:!1});break;default:o.setState({serverError:e.message,showMfa:!1})}})}},{key:"render",value:function(){var e=null,t="form-group";this.state.serverError&&(e=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.serverError)),t+=" has-error");var r=null,a="form-group";this.state.passwordError&&(r=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.passwordError)),a+=" has-error");var o=null,s="form-group";this.state.ldapPasswordError&&(o=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.ldapPasswordError)),s+=" has-error");var l=null,i="form-group";this.state.confirmError&&(l=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.confirmError)),i+=" has-error");var u,p=n.localizeMessage("claim.ldap_to_email.ldapPwd","AD/LDAP Password");return u=this.state.showMfa?c.a.createElement(M.a,{loginId:this.props.email,password:this.state.password,submit:this.submit}):c.a.createElement("form",{onSubmit:this.preSubmit,className:t},c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.ldap_to_email.email",defaultMessage:"After switching your authentication method, you will use {email} to login. Your AD/LDAP credentials will no longer allow access to Mattermost.",values:{email:this.props.email}})),c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.ldap_to_email.enterLdapPwd",defaultMessage:"{ldapPassword}:",values:{ldapPassword:p}})),c.a.createElement("div",{className:s},c.a.createElement("input",{type:"password",className:"form-control",name:"ldapPassword",ref:"ldappassword",placeholder:p,spellCheck:"false"})),o,c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.ldap_to_email.enterPwd",defaultMessage:"New email login password:"})),c.a.createElement("div",{className:a},c.a.createElement("input",{type:"password",className:"form-control",name:"password",ref:"password",placeholder:n.localizeMessage("claim.ldap_to_email.pwd","Password"),spellCheck:"false"})),r,c.a.createElement("div",{className:i},c.a.createElement("input",{type:"password",className:"form-control",name:"passwordconfirm",ref:"passwordconfirm",placeholder:n.localizeMessage("claim.ldap_to_email.confirm","Confirm Password"),spellCheck:"false"})),l,c.a.createElement("button",{type:"submit",className:"btn btn-primary"},c.a.createElement(y.c,{id:"claim.ldap_to_email.switchTo",defaultMessage:"Switch account to email/password"})),e),c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(y.c,{id:"claim.ldap_to_email.title",defaultMessage:"Switch AD/LDAP Account to Email/Password"})),u)}}]),t}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}U.propTypes={email:l.a.string,passwordConfig:l.a.object};var W=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?J(e):t}(this,Y(t).call(this,e))).submit=r.submit.bind(J(J(r))),r.preSubmit=r.preSubmit.bind(J(J(r))),r.state={passwordError:"",ldapError:"",ldapPasswordError:"",serverError:"",showMfa:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,c.a.Component),function(e,t,r){t&&V(e.prototype,t),r&&V(e,r)}(t,[{key:"preSubmit",value:function(e){var t=this;e.preventDefault();var r={passwordError:"",ldapError:"",ldapPasswordError:"",serverError:""},a=this.refs.emailpassword.value;if(!a)return r.passwordError=n.localizeMessage("claim.email_to_ldap.pwdError","Please enter your password."),void this.setState(r);var o=this.refs.ldapid.value.trim();if(!o)return r.ldapError=n.localizeMessage("claim.email_to_ldap.ldapIdError","Please enter your AD/LDAP ID."),void this.setState(r);var s=this.refs.ldappassword.value;if(!s)return r.ldapPasswordError=n.localizeMessage("claim.email_to_ldap.ldapPasswordError","Please enter your AD/LDAP password."),void this.setState(r);r.password=a,r.ldapId=o,r.ldapPassword=s,this.setState(r),Object(j.f)(this.props.email,function(e){e?t.setState({showMfa:!0}):t.submit(t.props.email,a,"",o,s)},function(e){t.setState({error:e.message})})}},{key:"submit",value:function(e,t,r,a,o){var n=this;Object(w.j)(e,t,r,a||this.state.ldapId,o||this.state.ldapPassword,function(e){Object(g.p)(e.follow_link,!1,!0)},function(e){switch(e.id){case"ent.ldap.do_login.user_not_registered.app_error":case"ent.ldap.do_login.user_filtered.app_error":case"ent.ldap.do_login.matched_to_many_users.app_error":n.setState({ldapError:e.message,showMfa:!1});break;case"ent.ldap.do_login.invalid_password.app_error":n.setState({ldapPasswordError:e.message,showMfa:!1});break;case"api.user.check_user_password.invalid.app_error":n.setState({passwordError:e.message,showMfa:!1});break;default:n.setState({serverError:e.message,showMfa:!1})}})}},{key:"render",value:function(){var e=null,t="form-group";this.state.serverError&&(e=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.serverError)),t+=" has-error");var r=null,a="form-group";this.state.passwordError&&(r=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.passwordError)),a+=" has-error");var o=null,s="form-group";this.state.ldapError&&(o=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.ldapError)),s+=" has-error");var l,i=null,u="form-group";this.state.ldapPasswordError&&(i=c.a.createElement("div",{className:"form-group has-error"},c.a.createElement("label",{className:"control-label"},this.state.ldapPasswordError)),u+=" has-error"),l=this.props.ldapLoginFieldName?this.props.ldapLoginFieldName:n.localizeMessage("claim.email_to_ldap.ldapId","AD/LDAP ID");var p,m=n.localizeMessage("claim.email_to_ldap.ldapPwd","AD/LDAP Password");return p=this.state.showMfa?c.a.createElement(M.a,{loginId:this.props.email,password:this.state.password,submit:this.submit}):c.a.createElement("form",{onSubmit:this.preSubmit,className:t},c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_ldap.ssoType",defaultMessage:"Upon claiming your account, you will only be able to login with AD/LDAP"})),c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_ldap.ssoNote",defaultMessage:"You must already have a valid AD/LDAP account"})),c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_ldap.enterPwd",defaultMessage:"Enter the password for your {site} email account",values:{site:this.props.siteName}})),c.a.createElement("input",{type:"text",style:G.usernameInput,name:"fakeusernameremembered"}),c.a.createElement("div",{className:a},c.a.createElement("input",{type:"password",className:"form-control",name:"emailPassword",ref:"emailpassword",autoComplete:"off",placeholder:n.localizeMessage("claim.email_to_ldap.pwd","Password"),spellCheck:"false"})),r,c.a.createElement("p",null,c.a.createElement(y.c,{id:"claim.email_to_ldap.enterLdapPwd",defaultMessage:"Enter the ID and password for your AD/LDAP account"})),c.a.createElement("div",{className:s},c.a.createElement("input",{type:"text",className:"form-control",name:"ldapId",ref:"ldapid",autoComplete:"off",placeholder:l,spellCheck:"false"})),o,c.a.createElement("div",{className:u},c.a.createElement("input",{type:"password",className:"form-control",name:"ldapPassword",ref:"ldappassword",autoComplete:"off",placeholder:m,spellCheck:"false"})),i,c.a.createElement("button",{type:"submit",className:"btn btn-primary"},c.a.createElement(y.c,{id:"claim.email_to_ldap.switchTo",defaultMessage:"Switch account to AD/LDAP"})),e),c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(y.c,{id:"claim.email_to_ldap.title",defaultMessage:"Switch Email/Password Account to AD/LDAP"})),p)}}]),t}();W.propTypes={email:l.a.string,siteName:l.a.string,ldapLoginFieldName:l.a.string};var G={usernameInput:{display:"none"}};function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Q(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,X(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,c.a.Component),function(e,t,r){t&&K(e.prototype,t),r&&K(e,r)}(t,[{key:"render",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("email"),r=new URLSearchParams(this.props.location.search).get("new_type"),a=new URLSearchParams(this.props.location.search).get("old_type");return c.a.createElement("div",null,c.a.createElement(d.a,null),c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"signup-team__container"},c.a.createElement("img",{className:"signup-team-logo",src:f.a}),c.a.createElement("div",{id:"claim"},c.a.createElement(u.a,null,c.a.createElement(p.a,{path:"".concat(this.props.match.url,"/oauth_to_email"),render:function(r){return c.a.createElement(N,Object.assign({},r,{currentType:a,email:t,siteName:e.props.siteName,passwordConfig:e.props.passwordConfig}))}}),c.a.createElement(p.a,{path:"".concat(this.props.match.url,"/email_to_oauth"),render:function(a){return c.a.createElement(L,Object.assign({},a,{newType:r,email:t,siteName:e.props.siteName}))}}),c.a.createElement(p.a,{path:"".concat(this.props.match.url,"/ldap_to_email"),render:function(r){return c.a.createElement(U,Object.assign({},r,{siteName:e.props.siteName,email:t,passwordConfig:e.props.passwordConfig}))}}),c.a.createElement(p.a,{path:"".concat(this.props.match.url,"/email_to_ldap"),render:function(r){return c.a.createElement(W,Object.assign({},r,{email:t,siteName:e.props.siteName,ldapLoginFieldName:e.props.ldapLoginFieldName}))}}))))))}}]),t}();$.propTypes={location:l.a.object.isRequired,siteName:l.a.string,ldapLoginFieldName:l.a.string,passwordConfig:l.a.object,match:l.a.shape({url:l.a.string.isRequired}).isRequired};t.default=Object(a.connect)(function(e){var t=Object(o.getConfig)(e);return{siteName:t.SiteName,ldapLoginFieldName:t.LdapLoginFieldName,passwordConfig:Object(n.getPasswordConfig)(t)}})($)},572:function(e,t,r){"use strict";r.d(t,"a",function(){return b});r(73),r(72);var a=r(5),o=r.n(a),n=r(10),s=r.n(n),l=r(536),i=r(1064),c=r(535);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,s.a.PureComponent),function(e,t,r){t&&p(e.prototype,t),r&&p(e,r)}(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"signup-header"},s.a.createElement(i.a,{onClick:this.props.onClick,to:this.props.url},s.a.createElement("span",{className:"fa fa-chevron-left",title:Object(c.localizeMessage)("generic_icons.back","Back Icon")}),s.a.createElement(l.c,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}();h(b,"propTypes",{url:o.a.string,onClick:o.a.func}),h(b,"defaultProps",{url:"/"})},580:function(e,t,r){e.exports=r.p+"files/dab14c86297d09799009bbaba4112d0e.png"},703:function(e,t,r){"use strict";r.d(t,"a",function(){return b});r(73),r(72),r(233);var a=r(5),o=r.n(a),n=r(10),s=r.n(n),l=r(536),i=r(535),c=r(616);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(d(d(r=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}(this,m(t).call(this,e)))),"handleChange",function(e){e.preventDefault();var t=e.target.value.trim().replace(/\s/g,"");t!==r.state.token&&r.setState({token:t})}),h(d(d(r)),"handleSubmit",function(e){e.preventDefault();var t={serverError:"",saving:!0};r.setState(t),r.props.submit(r.props.loginId,r.props.password,r.state.token)}),r.state={saving:!1,token:"",serverError:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,s.a.PureComponent),function(e,t,r){t&&p(e.prototype,t),r&&p(e,r)}(t,[{key:"render",value:function(){var e,t="";return this.state.serverError&&(e=s.a.createElement("label",{className:"control-label"},this.state.serverError),t=" has-error"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"signup__email-container"},s.a.createElement("p",null,s.a.createElement(l.c,{id:"login_mfa.enterToken",defaultMessage:"To complete the sign in process, please enter a token from your smartphone's authenticator"})),s.a.createElement("div",{className:"form-group"+t},e),s.a.createElement("div",{className:"form-group"+t},s.a.createElement("input",{type:"text",className:"form-control",name:"token",placeholder:Object(i.localizeMessage)("login_mfa.token","MFA Token"),spellCheck:"false",autoComplete:"off",autoFocus:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement(c.a,{saving:this.state.saving,disabled:this.state.saving,onClick:this.handleSubmit,defaultMessage:Object(i.localizeMessage)("login_mfa.submit","Submit"),savingMessage:Object(i.localizeMessage)("login_mfa.submitting","Submitting...")}))))}}]),t}();h(b,"propTypes",{loginId:o.a.string.isRequired,password:o.a.string.isRequired,submit:o.a.func.isRequired})}}]);
//# sourceMappingURL=21.8d6edd7ddc3a950f8f4f.js.map