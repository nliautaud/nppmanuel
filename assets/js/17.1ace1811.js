(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{335:function(e,t,r){"use strict";r.r(t);var n=r(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"syntaxe-des-motifs-de-remplacement"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntaxe-des-motifs-de-remplacement","aria-hidden":"true"}},[e._v("#")]),e._v(" Syntaxe des motifs de remplacement")]),r("p",[e._v("Dans un motif de remplacement, tout caractère se désigne lui-même.")]),r("p",[e._v("Par exemple, en remplacant "),r("code",[e._v("o")]),e._v(" par "),r("code",[e._v(".tomate.")]),e._v(" dans "),r("code",[e._v("bonjour")]),e._v(", on obtiendra :")]),r("pre",[r("code",[e._v("b.tomate.nj.tomate.ur\n")])]),r("p",[e._v("Le motif de remplacement permet de faire référence à certains éléments "),r("em",[e._v("capturés")]),e._v(" par le motif de recherche, ce qui donne au remplacement toute la puissance des expressions régulières. N'importe quel chiffre entre zéro et neuf, échappé, désigne le résultat d'un groupe du motif de recherche. C'est pour cela qu'on parle de "),r("em",[e._v("parenthèses capturantes")]),e._v(".")]),r("pre",[r("code",[e._v("\\0 \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9\n")])]),r("p",[e._v("Le premier, "),r("code",[e._v("\\0")]),e._v(", correspond au motif lui-même, entier, et les suivants aux sous-motifs. Les sous-motifs sont numérotés par ordre de parenthèse ouvrante.")]),r("p",[e._v("Par exemple, dans le motif de recherche "),r("code",[e._v("(a(bc))(de)")]),e._v(", "),r("code",[e._v("\\0")]),e._v(" correspond à "),r("code",[e._v("abcde")]),e._v(", "),r("code",[e._v("\\1")]),e._v(" désigne "),r("code",[e._v("abc")]),e._v(", "),r("code",[e._v("\\2")]),e._v(" désigne "),r("code",[e._v("bc")]),e._v(" et "),r("code",[e._v("\\3")]),e._v(" désigne "),r("code",[e._v("de")]),e._v(".")])])}],!1,null,null,null);t.default=s.exports}}]);