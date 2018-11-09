(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1887:function(e,t,r){"use strict";r.r(t);var a=r(134),n=r(3),i=r(47),o=r(102),s=r(535),l=(r(73),r(72),r(92),r(136),r(5)),c=r.n(l),u=r(10),m=r.n(u),p=r(536),f=r(1064),d=r(76),h=r(561),b=r(549),E=r(610),g=r(553),y=r(137),v=r(0),_=r(580),w=r.n(_),S=r(572),N=r(555),O=r(653),k=r(550);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?M(e):t}(this,C(t).call(this,e))).handleSubmit=r.handleSubmit.bind(M(M(r))),r.getInviteInfo=r.getInviteInfo.bind(M(M(r))),r.renderEmailSignup=r.renderEmailSignup.bind(M(M(r))),r.isUserValid=r.isUserValid.bind(M(M(r))),r.state=r.getInviteInfo(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,m.a.Component),function(e,t,r){t&&j(e.prototype,t),r&&j(e,r)}(t,[{key:"componentDidMount",value:function(){Object(h.d)("signup","signup_user_01_welcome")}},{key:"getInviteInfo",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("d"),r=new URLSearchParams(this.props.location.search).get("t"),a=new URLSearchParams(this.props.location.search).get("id"),n="",i="",o="",s="",l=!1;if(r&&r.length>0){var c=JSON.parse(t);n=c.email,i=c.display_name,o=c.name,s=c.id}else a&&a.length>0&&(l=!0,Object(E.c)(a,function(t){t?e.setState({loading:!1,serverError:"",teamDisplayName:t.display_name,teamName:t.name,teamId:t.id}):e.setState({loading:!1})},function(){e.setState({loading:!1,noOpenServerError:!0,serverError:m.a.createElement(p.c,{id:"signup_user_completed.invalid_invite",defaultMessage:"The invite link was invalid.  Please speak with your Administrator to receive an invitation."})})}),t=null,r=null);return{data:t,token:r,email:n,teamDisplayName:i,teamName:o,teamId:s,inviteId:a,loading:l,serverError:"",noOpenServerError:!1}}},{key:"handleSignupSuccess",value:function(e,t){var r=this;Object(h.d)("signup","signup_user_02_complete"),Object(g.w)(t.id,e.password,"",function(){r.state.token>0&&r.props.actions.setGlobalItem(r.state.token,JSON.stringify({usedBefore:!0}));var e=new URLSearchParams(r.props.location.search).get("redirect_to");e?y.a.push(e):b.t()},function(t){"api.user.login.not_verified.app_error"===t.id?y.a.push("/should_verify_email?email="+encodeURIComponent(e.email)+"&teamname="+encodeURIComponent(r.state.teamName)):r.setState({serverError:t.message,isSubmitting:!1})})}},{key:"isUserValid",value:function(){var e=this.refs.email.value.trim();if(!e)return this.setState({nameError:"",emailError:m.a.createElement(p.c,{id:"signup_user_completed.required"}),passwordError:"",serverError:""}),!1;if(!Object(d.isEmail)(e))return this.setState({nameError:"",emailError:m.a.createElement(p.c,{id:"signup_user_completed.validEmail"}),passwordError:"",serverError:""}),!1;var t=this.refs.name.value.trim().toLowerCase();if(!t)return this.setState({nameError:m.a.createElement(p.c,{id:"signup_user_completed.required"}),emailError:"",passwordError:"",serverError:""}),!1;var r=s.isValidUsername(t);if("Cannot use a reserved word as a username."===r)return this.setState({nameError:m.a.createElement(p.c,{id:"signup_user_completed.reserved"}),emailError:"",passwordError:"",serverError:""}),!1;if(r)return this.setState({nameError:m.a.createElement(p.c,{id:"signup_user_completed.usernameLength",values:{min:v.D.MIN_USERNAME_LENGTH,max:v.D.MAX_USERNAME_LENGTH}}),emailError:"",passwordError:"",serverError:""}),!1;var a=this.refs.password.value,n=s.isValidPassword(a,this.props.passwordConfig),i=n.valid,o=n.error;return!(!i&&o)||(this.setState({nameError:"",emailError:"",passwordError:o,serverError:""}),!1)}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),!this.state.isSubmitting&&this.isUserValid()){this.setState({nameError:"",emailError:"",passwordError:"",serverError:"",isSubmitting:!0});var r={email:this.refs.email.value.trim(),username:this.refs.name.value.trim().toLowerCase(),password:this.refs.password.value,allow_marketing:!0};Object(g.g)(r,this.state.token,this.state.inviteId,this.handleSignupSuccess.bind(this,r),function(e){t.setState({serverError:e.message,isSubmitting:!1})})}}},{key:"renderEmailSignup",value:function(){var e=null,t=m.a.createElement("span",{className:"help-block"},m.a.createElement(p.c,{id:"signup_user_completed.emailHelp",defaultMessage:"Valid email required for sign-up"})),r="form-group";this.state.emailError&&(e=m.a.createElement("label",{className:"control-label"},this.state.emailError),t="",r+=" has-error");var a=null,n=m.a.createElement("span",{className:"help-block"},m.a.createElement(p.c,{id:"signup_user_completed.userHelp",defaultMessage:"Username must begin with a letter, and contain between {min} to {max} lowercase characters made up of numbers, letters, and the symbols '.', '-' and '_'",values:{min:v.D.MIN_USERNAME_LENGTH,max:v.D.MAX_USERNAME_LENGTH}})),i="form-group";this.state.nameError&&(a=m.a.createElement("label",{className:"control-label"},this.state.nameError),n="",i+=" has-error");var o=null,s="form-group";this.state.passwordError&&(o=m.a.createElement("label",{className:"control-label"},this.state.passwordError),s+=" has-error");var l=null;this.state.email&&(l=m.a.createElement(k.a,{id:"signup_user_completed.emailIs",defaultMessage:"Your email address is **{email}**. You'll use this address to sign in to {siteName}.",values:{email:this.state.email,siteName:this.props.siteName}}));var c="margin--extra";return this.state.email&&(c="hidden"),m.a.createElement("form",null,m.a.createElement("div",{className:"inner__content"},m.a.createElement("div",{className:c},m.a.createElement("h5",null,m.a.createElement("strong",null,m.a.createElement(p.c,{id:"signup_user_completed.whatis",defaultMessage:"What's your email address?"}))),m.a.createElement("div",{className:r},m.a.createElement("input",{id:"email",type:"email",ref:"email",className:"form-control",defaultValue:this.state.email,placeholder:"",maxLength:"128",autoFocus:!0,spellCheck:"false",autoCapitalize:"off"}),e,t)),l,m.a.createElement("div",{className:"margin--extra"},m.a.createElement("h5",null,m.a.createElement("strong",null,m.a.createElement(p.c,{id:"signup_user_completed.chooseUser",defaultMessage:"Choose your username"}))),m.a.createElement("div",{className:i},m.a.createElement("input",{id:"name",type:"text",ref:"name",className:"form-control",placeholder:"",maxLength:v.D.MAX_USERNAME_LENGTH,spellCheck:"false",autoCapitalize:"off"}),a,n)),m.a.createElement("div",{className:"margin--extra"},m.a.createElement("h5",null,m.a.createElement("strong",null,m.a.createElement(p.c,{id:"signup_user_completed.choosePwd",defaultMessage:"Choose your password"}))),m.a.createElement("div",{className:s},m.a.createElement("input",{id:"password",type:"password",ref:"password",className:"form-control",placeholder:"",maxLength:"128",spellCheck:"false"}),o)),m.a.createElement("p",{className:"margin--extra"},m.a.createElement("button",{id:"createAccountButton",type:"submit",onClick:this.handleSubmit,className:"btn-primary btn",disabled:this.state.isSubmitting},m.a.createElement(p.c,{id:"signup_user_completed.create",defaultMessage:"Create Account"})))))}},{key:"render",value:function(){var e,t=this.props,r=t.customDescriptionText,a=t.enableSignUpWithEmail,n=t.location,i=t.privacyPolicyLink,o=t.siteName,s=t.termsOfServiceLink,l=null;if(this.state.serverError&&(l=m.a.createElement("div",{className:"form-group has-error"},m.a.createElement("label",{className:"control-label"},this.state.serverError))),this.state.loading)return m.a.createElement(N.a,null);if(!a)return null;e=this.renderEmailSignup();var c=null;return!this.state.noOpenServerError&&e&&(c=m.a.createElement("p",null,m.a.createElement(k.a,{id:"create_team.agreement",defaultMessage:"By proceeding to create your account and use {siteName}, you agree to our [Terms of Service]({TermsOfServiceLink}) and [Privacy Policy]({PrivacyPolicyLink}). If you do not agree, you cannot use {siteName}.",values:{siteName:o,TermsOfServiceLink:s,PrivacyPolicyLink:i}}))),this.state.noOpenServerError&&(e=null),m.a.createElement("div",null,m.a.createElement(S.a,null),m.a.createElement("div",{className:"col-sm-12"},m.a.createElement("div",{className:"signup-team__container padding--less"},m.a.createElement("img",{className:"signup-team-logo",src:w.a}),m.a.createElement(O.a,{customDescriptionText:r,siteName:o}),m.a.createElement("h4",{className:"color--light"},m.a.createElement(p.c,{id:"signup_user_completed.lets",defaultMessage:"Let's create your account"})),m.a.createElement("span",{className:"color--light"},m.a.createElement(p.c,{id:"signup_user_completed.haveAccount",defaultMessage:"Already have an account?"})," ",m.a.createElement(f.a,{to:"/login"+n.search},m.a.createElement(p.c,{id:"signup_user_completed.signIn",defaultMessage:"Click here to sign in."}))),e,l,c)))}}]),t}();!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(T,"propTypes",{location:c.a.object,enableSignUpWithEmail:c.a.bool.isRequired,siteName:c.a.string,termsOfServiceLink:c.a.string,privacyPolicyLink:c.a.string,customDescriptionText:c.a.string,passwordConfig:c.a.object,actions:c.a.shape({setGlobalItem:c.a.func.isRequired}).isRequired});t.default=Object(a.connect)(function(e){var t=Object(i.getConfig)(e);return{enableSignUpWithEmail:"true"===t.EnableSignUpWithEmail,siteName:t.SiteName,termsOfServiceLink:t.TermsOfServiceLink,privacyPolicyLink:t.PrivacyPolicyLink,customDescriptionText:t.CustomDescriptionText,passwordConfig:Object(s.getPasswordConfig)(t)}},function(e){return{actions:Object(n.bindActionCreators)({setGlobalItem:o.e},e)}})(T)},572:function(e,t,r){"use strict";r.d(t,"a",function(){return b});r(73),r(72);var a=r(5),n=r.n(a),i=r(10),o=r.n(i),s=r(536),l=r(1064),c=r(535);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.PureComponent),function(e,t,r){t&&m(e.prototype,t),r&&m(e,r)}(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"signup-header"},o.a.createElement(l.a,{onClick:this.props.onClick,to:this.props.url},o.a.createElement("span",{className:"fa fa-chevron-left",title:Object(c.localizeMessage)("generic_icons.back","Back Icon")}),o.a.createElement(s.c,{id:"web.header.back",defaultMessage:"Back"})))}}]),t}();h(b,"propTypes",{url:n.a.string,onClick:n.a.func}),h(b,"defaultProps",{url:"/"})},580:function(e,t,r){e.exports=r.p+"files/dab14c86297d09799009bbaba4112d0e.png"},653:function(e,t,r){"use strict";r.d(t,"a",function(){return d});r(73),r(72);var a=r(5),n=r.n(a),i=r(10),o=r.n(i),s=r(536);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.PureComponent),function(e,t,r){t&&c(e.prototype,t),r&&c(e,r)}(t,[{key:"render",value:function(){var e=this.props,t=e.customDescriptionText,r=e.siteName,a=null;return a=t||o.a.createElement(s.c,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,r),o.a.createElement("h4",{className:"color--light"},a))}}]),t}();f(d,"propTypes",{customDescriptionText:n.a.string,siteName:n.a.string}),f(d,"defaultProps",{siteName:"Mattermost"})}}]);
//# sourceMappingURL=17.b567af7e2f939b542572.js.map