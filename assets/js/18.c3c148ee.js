(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{258:function(e,t,r){"use strict";r.r(t);var i=r(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("To get Directus working on Apache servers all you need to do is ensure that traffic is routed to the correct files.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://httpd.apache.org/docs/current/mod/mod_rewrite.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("mod_rewrite")]),r("OutboundLink")],1),e._v(" is an Apache module that uses a ruled-based rewriting engine to rewrite requested URLs.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("Apache include "),r("code",[e._v("mod_rewrite")]),e._v(" by default. If that's not the case, how to install it will depends on your system and apache version, and the best option will be to go to the "),r("a",{attrs:{href:"http://httpd.apache.org/docs/trunk/en/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compiling and Installing"),r("OutboundLink")],1),e._v(" section on Apache and tries to compile and install "),r("code",[e._v("mod_rewrite")]),e._v(" individually.")]),e._v(" "),r("p",[e._v("Apache has a tool called "),r("a",{attrs:{href:"https://httpd.apache.org/docs/2.4/programs/apxs.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("apxs")]),r("OutboundLink")],1),e._v(" (APache eXtenSion) for lets you build and install modules this is a good option to install new modules from source.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),r("p",[e._v("Make sure to reload all apache configuration.")]),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._m(20)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"apache-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Apache Setup")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"mod-rewrite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mod-rewrite","aria-hidden":"true"}},[this._v("#")]),this._v(" mod_rewrite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Directus API requires "),t("code",[this._v("mod_rewrite")]),this._v(" to be enabled on Apache, because it uses the URL rewriting to maps all requested URLs to an internal endpoint unless it matches an actual file in the filesystem.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The rewrite rules are include in Directus API inside the "),t("code",[this._v("public")]),this._v(" directory in a "),t("code",[this._v(".htaccess")]),this._v(" file that serve as the front controller for all the endpoints.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-mod-rewrite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-mod-rewrite","aria-hidden":"true"}},[this._v("#")]),this._v(" Install mod_rewrite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enable-mod-rewrite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-mod-rewrite","aria-hidden":"true"}},[this._v("#")]),this._v(" Enable mod_rewrite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There's different way to enable a module after being installed. On ubuntu-based distribution can be enabled using "),t("code",[this._v("a2enmod")]),this._v(" script.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("a2enmod rewrite\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("service apache2 reload\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you are not using a ubuntu-based distribution or "),t("code",[this._v("a2enmod")]),this._v(" is not available in your system, you can go to your apache configuration, on ubuntu-based system are usually located in "),t("code",[this._v("/etc/apache2/conf/httpd.conf")]),this._v(", and add a line to load the rewrite module.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("LoadModule rewrite_module modules/mod_rewrite.so\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("rewrite_module")]),this._v(" is the module name and "),t("code",[this._v("modules/mod_rewrite.so")]),this._v(" is the path where the module file is located. In this case the module file is relative to the "),t("code",[this._v("ServerRoot")]),this._v(" configured in your "),t("code",[this._v("httpd.conf")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"check-if-mod-rewrite-is-enabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-if-mod-rewrite-is-enabled","aria-hidden":"true"}},[this._v("#")]),this._v(" Check if mod_rewrite is enabled")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Using the command line you can execute: "),r("code",[e._v("apachectl -M | grep 'rewrite'")]),e._v(" and it will filter all installed modules that matches "),r("code",[e._v("rewrite")]),e._v(", if "),r("code",[e._v("rewrite_module")]),e._v(" is returned, congratulations you already have installed and enabled "),r("code",[e._v("mod_rewrite")]),e._v(" in your system.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"allowoverride"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allowoverride","aria-hidden":"true"}},[this._v("#")]),this._v(" AllowOverride")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Directus API comes with "),t("code",[this._v(".htaccess")]),this._v(" files for the required configuration. These "),t("code",[this._v(".htaccess")]),this._v(" won't work until the "),t("code",[this._v("AllowOverride")]),this._v(" directive is set within a Directory block.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("Go to your Apache virtual host configuration")]),e._v(" "),r("li",[e._v("Create a "),r("code",[e._v("<Directory>")]),e._v(" block that points to Directus API root")]),e._v(" "),r("li",[e._v("Add "),r("code",[e._v("AllowOverride All")]),e._v(" inside the "),r("code",[e._v("<Directory>")]),e._v(" block to allow all directives in "),r("code",[e._v(".htaccess")]),e._v(" including the "),r("code",[e._v("mod_rewrite")]),e._v(" directives.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Directus "),r("code",[e._v(".htaccess")]),e._v(" actually uses "),r("code",[e._v("FileInfo")]),e._v(" for rewriting and "),r("code",[e._v("Options")]),e._v(" to following symlinks")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<VirtualHost *:80>\n    ServerAdmin admin@example.com\n    ServerName example.com\n    ServerAlias www.example.com\n    DocumentRoot /var/www/directus/public\n    ErrorLog ${APACHE_LOG_DIR}/error.log\n    CustomLog ${APACHE_LOG_DIR}/access.log combined\n\n    <Directory /var/www/directus>\n      AllowOverride All\n    </Directory>\n</VirtualHost>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[t("code",[this._v(".htaccess")]),this._v(" is the default filename for the "),t("code",[this._v("AccessFileName")]),this._v(" directive.")])])}],!1,null,null,null);s.options.__file="setup-apache.md";t.default=s.exports}}]);