(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{265:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("There are three status options added by default, however you can add as many as you'd like. Each option has paramenters that define how it will look and work.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("As mentioned above, Soft Delete is meant to "),a("em",[t._v("feel")]),t._v(" like an item has been deleted without permanently removing it from the database. They are hidden from both the App and API responses unless explicitely requested by an Admin "),a("router-link",{attrs:{to:"/api/reference.html#status"}},[t._v("using the "),a("code",[t._v("status")]),t._v(" parameter")]),t._v(". Non-admin users do not have access to soft-deleted items.")],1),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The status interface also enables extended permission options that allow "),a("router-link",{attrs:{to:"/app/admin/permissions.html#status-level"}},[t._v("setting permissions based on an item's status")]),t._v(".")],1),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("The core status interface should work for 90% of use-cases, but you can still take advantage of the functionality with different styling or interactions. To do this you would "),a("router-link",{attrs:{to:"/extensions/interfaces.html"}},[t._v("create a custom interface")]),t._v(" that uses the "),a("code",[t._v("status")]),t._v(" "),a("router-link",{attrs:{to:"/api/admin/field-types.html"}},[t._v("field type")]),t._v(".")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[this._v("#")]),this._v(" Status")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("status")]),this._v(" interface adds soft-delete and workflow capabilities to its parent collection. Let's take a look at how to properly configure it to take full advantage of its power and flexibility.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"status-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-mapping","aria-hidden":"true"}},[this._v("#")]),this._v(" Status Mapping")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("key")])]),t._v(" "),a("td",[t._v("String (Numbers can be used as strings). Each option object is defined by a key, this key is the value that is saved into the database")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("name")])]),t._v(" "),a("td",[t._v("String. The name presented to the user in the App")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("text_color")])]),t._v(" "),a("td",[t._v("Directus Color Name. The text color of the badge on the browse items page")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("background_color")])]),t._v(" "),a("td",[t._v("Directus Color Name. The background color of the badge (or dot if using the Simple Badge option)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("browse_subdued")])]),t._v(" "),a("td",[t._v("Boolean. Subdues (50% opacity) the entire item row on the browse items page")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("browse_badge")])]),t._v(" "),a("td",[t._v("Boolean. Whether to show the badge on the browse items page or not")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("soft_delete")])]),t._v(" "),a("td",[t._v("Boolean. If true, items will not be returned by default in the App or API. Only Admin users have access to soft-deleted items")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"published"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Published"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"text_color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"white"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"background_color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"accent"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"browse_subdued"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"browse_badge"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"soft_delete"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v('"draft"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Draft"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"text_color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"white"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"background_color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"blue-grey-200"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"browse_subdued"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"browse_badge"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"soft_delete"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v('"deleted"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Deleted"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"text_color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"white"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"background_color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"red"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"browse_subdued"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"browse_badge"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"soft_delete"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"soft-delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soft-delete","aria-hidden":"true"}},[this._v("#")]),this._v(" Soft Delete")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workflow","aria-hidden":"true"}},[this._v("#")]),this._v(" Workflow")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"custom-status-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-status-interfaces","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Status Interfaces")])}],!1,null,null,null);n.options.__file="status.md";s.default=n.exports}}]);