(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{269:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The Directus API core codebase is written in PHP.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"https://github.com/directus/api/blob/master/composer.json",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("composer.json")]),e("OutboundLink")],1),t._v(" file for all dependencies.")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("There are two types of tests: testing the API http response (actual requests) and code testing using PHPUnit.")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The migration files are created using "),e("a",{attrs:{href:"https://phinx.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Phinx"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Each migration file represents a table.")]),t._v(" "),t._m(6),t._v(" "),e("p",[e("strong",[t._v("Seeders")]),t._v(" are a way to insert data into tables. Read "),e("a",{attrs:{href:"http://docs.phinx.org/en/latest/seeding.html#creating-a-new-seed-class",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Create Seeding"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Each seeder represents the default data for some tables.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),e("p",[t._v("The seeder ran after the migrations when database install command is executed.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("Documentation is generated using "),e("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),e("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"core-codebase-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-codebase-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Core Codebase Overview")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("/bin")]),t._v(" – All Directus-specific script files used on the command line (eg: running tests or installing)")]),t._v(" "),e("li",[e("code",[t._v("/config")]),t._v(" – Database configuration")]),t._v(" "),e("li",[e("code",[t._v("/logs")]),t._v(" – Error and access logs")]),t._v(" "),e("li",[e("a",{attrs:{href:"#migrations-and-seeders"}},[e("code",[t._v("/migrations")])]),t._v(" Database migrations and seeders used in version upgrades")]),t._v(" "),e("li",[e("code",[t._v("/public")]),t._v(" – The entry point of the API (index.php) and public files (assets, uploads, and extensions)")]),t._v(" "),e("li",[e("a",{attrs:{href:"#core"}},[e("code",[t._v("/src")])]),t._v(" – The main Directus API codebase\n"),e("ul",[e("li",[e("code",[t._v("/core/Directus")]),t._v(" – Core libraries")]),t._v(" "),e("li",[e("code",[t._v("/endpoints")]),t._v(" – Endpoint controllers")]),t._v(" "),e("li",[e("code",[t._v("/helpers")]),t._v(" – Function helpers")]),t._v(" "),e("li",[e("code",[t._v("/mail")]),t._v(" – Email templates")]),t._v(" "),e("li",[e("code",[t._v("/services")]),t._v(" – Business logic (service-layer)")]),t._v(" "),e("li",[e("a",{attrs:{href:"#schema"}},[e("code",[t._v("/schema.sql")])]),t._v(" – The empty database boilerplate")]),t._v(" "),e("li",[e("code",[t._v("/web.php")]),t._v(" The http/web entry-point bootstrap")])])]),t._v(" "),e("li",[e("code",[t._v("/tests")]),t._v(" Response and code tests")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencies")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Tests")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"migrations-and-seeders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrations-and-seeders","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrations and Seeders")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Migrations")]),this._v(" are a way to define a database schema programmatically, making it easier to make and apply changes.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To create a new migration file use the following command: "),s("code",[this._v("vendor/bin/phinx create MyNewMigration -c config/migrations.php")]),this._v(", it will create a new migration in the format "),s("code",[this._v("YYYYMMDDHHMMSS_my_new_migration.php")]),this._v(", where the first 14 characters are replaced with the current timestamp down to the second.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To create a new seeding file use the following command: "),s("code",[this._v("php vendor/bin/phinx seed:create UsersSeeder")]),this._v(", it will create a new file in "),s("code",[this._v("migrations/db/seeds")]),this._v(" named "),s("code",[this._v("UsersSeeder.php")]),this._v(" with the similar template shown below:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{attrs:{class:"token php language-php"}},[e("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{attrs:{class:"token package"}},[t._v("Phinx"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Seed"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractSeed")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("UsersSeeder")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("AbstractSeed")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Run Method.\n     *\n     * Write your database seeder using this method.\n     *\n     * More information on writing seeders is available here:\n     * http://docs.phinx.org/en/latest/seeding.html\n     */")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("run")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The example below show how to insert data into the "),s("code",[this._v("directus_users")]),this._v(" table.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{attrs:{class:"token php language-php"}},[e("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{attrs:{class:"token package"}},[t._v("Phinx"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Seed"),e("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractSeed")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("UsersSeeder")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("AbstractSeed")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("run")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v("    "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin@example.com'")]),t._v("\n            "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v("    "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user@example.com'")]),t._v("\n            "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{attrs:{class:"token variable"}},[t._v("$posts")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token variable"}},[t._v("$this")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("table")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'directus_users'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{attrs:{class:"token variable"}},[t._v("$posts")]),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("insert")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token variable"}},[t._v("$data")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),e("span",{attrs:{class:"token operator"}},[t._v("-")]),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token function"}},[t._v("save")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Schema")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("schema.sql")]),this._v(" is a MySQL database dump. There's no automatic way of creating this, but it's an manual export of the tables and rows created by the migrations and seeders on installation.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Documentation")])}],!1,null,null,null);n.options.__file="codebase-overview.md";s.default=n.exports}}]);