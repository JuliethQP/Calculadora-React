(this["webpackJsonpcalculator-project"]=this["webpackJsonpcalculator-project"]||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_estilos_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),_estilos_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_estilos_css__WEBPACK_IMPORTED_MODULE_5__),Calculadora=function(_React$Component){Object(C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculadora,_React$Component);var _super=Object(C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculadora);function Calculadora(props){var _this;return Object(C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculadora),_this=_super.call(this,props),_this.Cero=function(){_this.state.numeros.push(_this.state.cero),console.log(_this.state.numeros),_this.pintar()},_this.Uno=function(){_this.state.numeros.push(_this.state.uno),_this.pintar()},_this.Dos=function(){_this.state.numeros.push(_this.state.dos),_this.pintar()},_this.Tres=function(){_this.state.numeros.push(_this.state.tres),_this.pintar()},_this.Cuatro=function(){_this.state.numeros.push(_this.state.cuatro),_this.pintar()},_this.Cinco=function(){_this.state.numeros.push(_this.state.cinco),_this.pintar()},_this.Seis=function(){_this.state.numeros.push(_this.state.seis),_this.pintar()},_this.Siete=function(){_this.state.numeros.push(_this.state.siete),_this.pintar()},_this.Ocho=function(){_this.state.numeros.push(_this.state.ocho),_this.pintar()},_this.Nueve=function(){_this.state.numeros.push(_this.state.nueve),_this.pintar()},_this.sumar=function(){_this.state.numeros.push("+"),_this.pintar()},_this.restar=function(){_this.state.numeros.push("-"),_this.pintar()},_this.multiplicar=function(){_this.state.numeros.push("*"),_this.pintar()},_this.dividir=function(){_this.state.numeros.push("/"),_this.pintar()},_this.Punto=function(){_this.state.numeros.push("."),_this.pintar()},_this.Igual=function(){for(var i=0;i<_this.state.numeros.length;i++)_this.state.numeros==Number&&(console.log("hola"),_this.state.numeros[i]=parseInt(_this.state.numeros[i]));_this.setState({resultado:eval(_this.state.numeros.join(""))})},_this.pintar=function(){_this.setState({letras:_this.state.numeros.join("")}),console.log(_this.state.letras)},_this.cleaner=function(){return _this.setState({resultado:0,numeros:[],letras:0})},_this.state={cero:0,uno:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6,siete:7,ocho:8,nueve:9,numeros:[],num:0,array:[],resultado:0,letras:[0]},_this}return Object(C_Users_Julieth_Quinchia_Documents_AcademiaGeek_Retos_FCC_react_calculator_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculadora,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"card container justify-content-center contenedor "},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"card container  pantalla letras mt-2"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4",{className:"text-black"},this.state.resultado),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,"  ",react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4",{className:"text-black"},this.state.letras," ")," ")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container mx-0 ml-3 mt-3"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"btn-toolbar ",role:"toolbar","aria-label":"Toolbar with button groups"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{class:"btn-group mr-2",role:"group","aria-label":"First group"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1",onClick:this.Cero}," ",this.state.cero," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1",onClick:this.Uno}," ",this.state.uno," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1",onClick:this.Dos}," ",this.state.dos," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1",onClick:this.Tres}," ",this.state.tres," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn  btn-light mx-1 my-1  ",width:"150",onClick:this.multiplicar}," * "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1 ",onClick:this.sumar}," + "))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{class:"btn-toolbar  ",role:"toolbar","aria-label":"Toolbar with button groups"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{class:"btn-group",role:"group","aria-label":"First group"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn  btn-light mx-1 my-1",onClick:this.Cuatro}," ",this.state.cuatro," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn  btn-light mx-1 my-1",onClick:this.Cinco}," ",this.state.cinco," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn  btn-light mx-1 my-1 ",onClick:this.Seis}," ",this.state.seis," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1",onClick:this.Siete}," ",this.state.siete," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn  btn-light mx-1 my-1  ",onClick:this.restar},"- "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn  btn-light mx-1 my-1",onClick:this.dividir}," /  "))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{class:"btn-toolbar ",role:"toolbar","aria-label":"Toolbar with button groups"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{class:"btn-group",role:"group","aria-label":"First group"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn  btn-light mx-1 my-1",onClick:this.Ocho}," ",this.state.ocho," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn  btn-light mx-1 my-1",onClick:this.Nueve}," ",this.state.nueve," "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn-light mx-1 my-1",onClick:this.Punto}," . "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn  btn-light mx-2 my-1",onClick:this.Igual}," = "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{type:"button",class:"btn btn  btn-light mx-1 my-1 btn-block",onClick:this.cleaner}," AC ")))))}}]),Calculadora}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculadora},,,,,function(t,_,e){t.exports=e(15)},,,,,function(t,_,e){},function(t,_,e){},function(t,_,e){"use strict";e.r(_);var a=e(0),s=e.n(a),n=e(2),r=e.n(n),o=(e(13),e(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2ced9f5a.chunk.js.map