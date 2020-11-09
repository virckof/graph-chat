(self.webpackChunkGraphChat=self.webpackChunkGraphChat||[]).push([[313],{3010:e=>{function t(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}e.exports=t,t.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},t.prototype.reset=function(){this.attempts=0},t.prototype.setMin=function(e){this.ms=e},t.prototype.setMax=function(e){this.max=e},t.prototype.setJitter=function(e){this.jitter=e}},6729:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n="~";function i(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,i,o,s){if("function"!=typeof i)throw new TypeError("The listener must be a function");var a=new r(i,o||e,s),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function a(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(n=!1)),a.prototype.eventNames=function(){var e,i,r=[];if(0===this._eventsCount)return r;for(i in e=this._events)t.call(e,i)&&r.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},a.prototype.listeners=function(e){var t=n?n+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,o=i.length,s=new Array(o);r<o;r++)s[r]=i[r].fn;return s},a.prototype.listenerCount=function(e){var t=n?n+e:e,i=this._events[t];return i?i.fn?1:i.length:0},a.prototype.emit=function(e,t,i,r,o,s){var a=n?n+e:e;if(!this._events[a])return!1;var c,u,l=this._events[a],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,i),!0;case 4:return l.fn.call(l.context,t,i,r),!0;case 5:return l.fn.call(l.context,t,i,r,o),!0;case 6:return l.fn.call(l.context,t,i,r,o,s),!0}for(u=1,c=new Array(f-1);u<f;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var p,d=l.length;for(u=0;u<d;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),f){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,i);break;case 4:l[u].fn.call(l[u].context,t,i,r);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];l[u].fn.apply(l[u].context,c)}}return!0},a.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,i,r){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return s(this,o),this;var a=this._events[o];if(a.fn)a.fn!==t||r&&!a.once||i&&a.context!==i||s(this,o);else{for(var c=0,u=[],l=a.length;c<l;c++)(a[c].fn!==t||r&&!a[c].once||i&&a[c].context!==i)&&u.push(a[c]);u.length?this._events[o]=1===u.length?u[0]:u:s(this,o)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&s(this,t)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},972:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prototype.toJSON;"function"==typeof t||(0,i.default)(0),e.prototype.inspect=t,r.default&&(e.prototype[r.default]=t)};var i=o(n(7706)),r=o(n(8554));function o(e){return e&&e.__esModule?e:{default:e}}},8002:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return s(e,[])};var i,r=(i=n(8554))&&i.__esModule?i:{default:i};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){switch(o(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var n=[].concat(t,[e]),i=function(e){var t=e[String(r.default)];return"function"==typeof t?t:"function"==typeof e.inspect?e.inspect:void 0}(e);if(void 0!==i){var o=i.call(e);if(o!==e)return"string"==typeof o?o:s(o,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";for(var n=Math.min(10,e.length),i=e.length-n,r=[],o=0;o<n;++o)r.push(s(e[o],t));return 1===i?r.push("... 1 more item"):i>1&&r.push("... ".concat(i," more items")),"["+r.join(", ")+"]"}(e,n);return function(e,t){var n=Object.keys(e);return 0===n.length?"{}":t.length>2?"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){var n=e.constructor.name;if("string"==typeof n&&""!==n)return n}return t}(e)+"]":"{ "+n.map((function(n){return n+": "+s(e[n],t)})).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}},7706:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}},8554:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;t.default=n},1807:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNode=function(e){return null!=e&&"string"==typeof e.kind},t.Token=t.Location=void 0;var i,r=(i=n(972))&&i.__esModule?i:{default:i},o=function(){function e(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}return e.prototype.toJSON=function(){return{start:this.start,end:this.end}},e}();t.Location=o,(0,r.default)(o);var s=function(){function e(e,t,n,i,r,o,s){this.kind=e,this.start=t,this.end=n,this.line=i,this.column=r,this.value=s,this.prev=o,this.next=null}return e.prototype.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},e}();t.Token=s,(0,r.default)(s)},849:(e,t)=>{"use strict";function n(e){for(var t=0;t<e.length;++t)if(" "!==e[t]&&"\t"!==e[t])return!1;return!0}function i(e){for(var t,n=!0,i=!0,r=0,o=null,s=0;s<e.length;++s)switch(e.charCodeAt(s)){case 13:10===e.charCodeAt(s+1)&&++s;case 10:n=!1,i=!0,r=0;break;case 9:case 32:++r;break;default:i&&!n&&(null===o||r<o)&&(o=r),i=!1}return null!==(t=o)&&void 0!==t?t:0}Object.defineProperty(t,"__esModule",{value:!0}),t.dedentBlockStringValue=function(e){var t=e.split(/\r\n|[\n\r]/g),r=i(e);if(0!==r)for(var o=1;o<t.length;o++)t[o]=t[o].slice(r);for(var s=0;s<t.length&&n(t[s]);)++s;for(var a=t.length;a>s&&n(t[a-1]);)--a;return t.slice(s,a).join("\n")},t.getBlockStringIndentation=i,t.printBlockString=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=-1===e.indexOf("\n"),r=" "===e[0]||"\t"===e[0],o='"'===e[e.length-1],s="\\"===e[e.length-1],a=!i||o||s||n,c="";return!a||i&&r||(c+="\n"+t),c+=t?e.replace(/\n/g,"\n"+t):e,a&&(c+="\n"),'"""'+c.replace(/"""/g,'\\"""')+'"""'}},2828:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Kind=void 0;var n=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"});t.Kind=n},3033:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.print=function(e){return(0,i.visit)(e,{leave:o})};var i=n(285),r=n(849),o={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return a(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,n=e.name,i=u("(",a(e.variableDefinitions,", "),")"),r=a(e.directives," "),o=e.selectionSet;return n||r||i||"query"!==t?a([t,a([n,i]),r,o]," "):o},VariableDefinition:function(e){var t=e.variable,n=e.type,i=e.defaultValue,r=e.directives;return t+": "+n+u(" = ",i)+u(" ",a(r," "))},SelectionSet:function(e){return c(e.selections)},Field:function(e){var t=e.alias,n=e.name,i=e.arguments,r=e.directives,o=e.selectionSet,s=u("",t,": ")+n,c=s+u("(",a(i,", "),")");return c.length>80&&(c=s+u("(\n",l(a(i,"\n")),"\n)")),a([c,a(r," "),o]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+u(" ",a(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,n=e.directives,i=e.selectionSet;return a(["...",u("on ",t),a(n," "),i]," ")},FragmentDefinition:function(e){var t=e.name,n=e.typeCondition,i=e.variableDefinitions,r=e.directives,o=e.selectionSet;return"fragment ".concat(t).concat(u("(",a(i,", "),")")," ")+"on ".concat(n," ").concat(u("",a(r," ")," "))+o},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var n=e.value;return e.block?(0,r.printBlockString)(n,"description"===t?"":"  "):JSON.stringify(n)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+a(e.values,", ")+"]"},ObjectValue:function(e){return"{"+a(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+u("(",a(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:s((function(e){var t=e.directives,n=e.operationTypes;return a(["schema",a(t," "),c(n)]," ")})),OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:s((function(e){return a(["scalar",e.name,a(e.directives," ")]," ")})),ObjectTypeDefinition:s((function(e){var t=e.name,n=e.interfaces,i=e.directives,r=e.fields;return a(["type",t,u("implements ",a(n," & ")),a(i," "),c(r)]," ")})),FieldDefinition:s((function(e){var t=e.name,n=e.arguments,i=e.type,r=e.directives;return t+(p(n)?u("(\n",l(a(n,"\n")),"\n)"):u("(",a(n,", "),")"))+": "+i+u(" ",a(r," "))})),InputValueDefinition:s((function(e){var t=e.name,n=e.type,i=e.defaultValue,r=e.directives;return a([t+": "+n,u("= ",i),a(r," ")]," ")})),InterfaceTypeDefinition:s((function(e){var t=e.name,n=e.interfaces,i=e.directives,r=e.fields;return a(["interface",t,u("implements ",a(n," & ")),a(i," "),c(r)]," ")})),UnionTypeDefinition:s((function(e){var t=e.name,n=e.directives,i=e.types;return a(["union",t,a(n," "),i&&0!==i.length?"= "+a(i," | "):""]," ")})),EnumTypeDefinition:s((function(e){var t=e.name,n=e.directives,i=e.values;return a(["enum",t,a(n," "),c(i)]," ")})),EnumValueDefinition:s((function(e){return a([e.name,a(e.directives," ")]," ")})),InputObjectTypeDefinition:s((function(e){var t=e.name,n=e.directives,i=e.fields;return a(["input",t,a(n," "),c(i)]," ")})),DirectiveDefinition:s((function(e){var t=e.name,n=e.arguments,i=e.repeatable,r=e.locations;return"directive @"+t+(p(n)?u("(\n",l(a(n,"\n")),"\n)"):u("(",a(n,", "),")"))+(i?" repeatable":"")+" on "+a(r," | ")})),SchemaExtension:function(e){var t=e.directives,n=e.operationTypes;return a(["extend schema",a(t," "),c(n)]," ")},ScalarTypeExtension:function(e){return a(["extend scalar",e.name,a(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,n=e.interfaces,i=e.directives,r=e.fields;return a(["extend type",t,u("implements ",a(n," & ")),a(i," "),c(r)]," ")},InterfaceTypeExtension:function(e){var t=e.name,n=e.interfaces,i=e.directives,r=e.fields;return a(["extend interface",t,u("implements ",a(n," & ")),a(i," "),c(r)]," ")},UnionTypeExtension:function(e){var t=e.name,n=e.directives,i=e.types;return a(["extend union",t,a(n," "),i&&0!==i.length?"= "+a(i," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,n=e.directives,i=e.values;return a(["extend enum",t,a(n," "),c(i)]," ")},InputObjectTypeExtension:function(e){var t=e.name,n=e.directives,i=e.fields;return a(["extend input",t,a(n," "),c(i)]," ")}};function s(e){return function(t){return a([t.description,e(t)],"\n")}}function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(t=null==e?void 0:e.filter((function(e){return e})).join(n))&&void 0!==t?t:""}function c(e){return u("{\n",l(a(e,"\n")),"\n}")}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return null!=t&&""!==t?e+t+n:""}function l(e){return u("  ",e.replace(/\n/g,"\n  "))}function f(e){return-1!==e.indexOf("\n")}function p(e){return null!=e&&e.some(f)}},285:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.visit=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,i=void 0,u=Array.isArray(e),l=[e],f=-1,p=[],d=void 0,h=void 0,v=void 0,y=[],m=[],T=e;do{var E=++f===l.length,I=E&&0!==p.length;if(E){if(h=0===m.length?void 0:y[y.length-1],d=v,v=m.pop(),I){if(u)d=d.slice();else{for(var _={},b=0,O=Object.keys(d);b<O.length;b++){var g=O[b];_[g]=d[g]}d=_}for(var N=0,S=0;S<p.length;S++){var C=p[S][0],w=p[S][1];u&&(C-=N),u&&null===w?(d.splice(C,1),N++):d[C]=w}}f=i.index,l=i.keys,p=i.edits,u=i.inArray,i=i.prev}else{if(h=v?u?f:l[f]:void 0,null==(d=v?v[h]:T))continue;v&&y.push(h)}var A,M=void 0;if(!Array.isArray(d)){if(!(0,o.isNode)(d))throw new Error("Invalid AST Node: ".concat((0,r.default)(d),"."));var D=c(t,d.kind,E);if(D){if((M=D.call(t,d,h,v,y,m))===a)break;if(!1===M){if(!E){y.pop();continue}}else if(void 0!==M&&(p.push([h,M]),!E)){if(!(0,o.isNode)(M)){y.pop();continue}d=M}}}void 0===M&&I&&p.push([h,d]),E?y.pop():(i={inArray:u,index:f,keys:l,edits:p,prev:i},l=(u=Array.isArray(d))?d:null!==(A=n[d.kind])&&void 0!==A?A:[],f=-1,p=[],v&&m.push(v),v=d)}while(void 0!==i);return 0!==p.length&&(T=p[p.length-1][1]),T},t.visitInParallel=function(e){var t=new Array(e.length);return{enter:function(n){for(var i=0;i<e.length;i++)if(null==t[i]){var r=c(e[i],n.kind,!1);if(r){var o=r.apply(e[i],arguments);if(!1===o)t[i]=n;else if(o===a)t[i]=a;else if(void 0!==o)return o}}},leave:function(n){for(var i=0;i<e.length;i++)if(null==t[i]){var r=c(e[i],n.kind,!0);if(r){var o=r.apply(e[i],arguments);if(o===a)t[i]=a;else if(void 0!==o&&!1!==o)return o}}else t[i]===n&&(t[i]=null)}}},t.getVisitFn=c,t.BREAK=t.QueryDocumentKeys=void 0;var i,r=(i=n(8002))&&i.__esModule?i:{default:i},o=n(1807),s={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]};t.QueryDocumentKeys=s;var a=Object.freeze({});function c(e,t,n){var i=e[t];if(i){if(!n&&"function"==typeof i)return i;var r=n?i.leave:i.enter;if("function"==typeof r)return r}else{var o=n?e.leave:e.enter;if(o){if("function"==typeof o)return o;var s=o[t];if("function"==typeof s)return s}}}t.BREAK=a},9535:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperationAST=function(e,t){for(var n=null,r=0,o=e.definitions;r<o.length;r++){var s,a=o[r];if(a.kind===i.Kind.OPERATION_DEFINITION)if(null==t){if(n)return null;n=a}else if((null===(s=a.name)||void 0===s?void 0:s.value)===t)return a}return n};var i=n(2828)},5313:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var i=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)i[r]=o[s];return i};Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionClient=void 0;var a=void 0!==n.g?n.g:"undefined"!=typeof window?window:{},c=a.WebSocket||a.MozWebSocket,u=n(3010),l=n(6729),f=n(9277),p=n(5905),d=n(3033),h=n(9535),v=n(7121),y=n(2892),m=n(2639),T=n(4322),E=function(){function e(e,t,n,i){var r=t||{},o=r.connectionCallback,s=void 0===o?void 0:o,a=r.connectionParams,f=void 0===a?{}:a,p=r.minTimeout,d=void 0===p?m.MIN_WS_TIMEOUT:p,h=r.timeout,v=void 0===h?m.WS_TIMEOUT:h,T=r.reconnect,E=void 0!==T&&T,I=r.reconnectionAttempts,_=void 0===I?1/0:I,b=r.lazy,O=void 0!==b&&b,g=r.inactivityTimeout,N=void 0===g?0:g,S=r.wsOptionArguments,C=void 0===S?[]:S;if(this.wsImpl=n||c,!this.wsImpl)throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");this.wsProtocols=i||y.GRAPHQL_WS,this.connectionCallback=s,this.url=e,this.operations={},this.nextOperationId=0,this.minWsTimeout=d,this.wsTimeout=v,this.unsentMessagesQueue=[],this.reconnect=E,this.reconnecting=!1,this.reconnectionAttempts=_,this.lazy=!!O,this.inactivityTimeout=N,this.closedByUser=!1,this.backoff=new u({jitter:.5}),this.eventEmitter=new l.EventEmitter,this.middlewares=[],this.client=null,this.maxConnectTimeGenerator=this.createMaxConnectTimeGenerator(),this.connectionParams=this.getConnectionParams(f),this.wsOptionArguments=C,this.lazy||this.connect()}return Object.defineProperty(e.prototype,"status",{get:function(){return null===this.client?this.wsImpl.CLOSED:this.client.readyState},enumerable:!1,configurable:!0}),e.prototype.close=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0),this.clearInactivityTimeout(),null!==this.client&&(this.closedByUser=t,e&&(this.clearCheckConnectionInterval(),this.clearMaxConnectTimeout(),this.clearTryReconnectTimeout(),this.unsubscribeAll(),this.sendMessage(void 0,T.default.GQL_CONNECTION_TERMINATE,null)),this.client.close(),this.client.onopen=null,this.client.onclose=null,this.client.onerror=null,this.client.onmessage=null,this.client=null,this.eventEmitter.emit("disconnected"),e||this.tryReconnect())},e.prototype.request=function(e){var t,n,i=this.getObserver.bind(this),r=this.executeOperation.bind(this),o=this.unsubscribe.bind(this);return this.clearInactivityTimeout(),(t={})[v.default]=function(){return this},t.subscribe=function(t,s,a){var c=i(t,s,a);return n=r(e,(function(e,t){null===e&&null===t?c.complete&&c.complete():e?c.error&&c.error(e[0]):c.next&&c.next(t)})),{unsubscribe:function(){n&&(o(n),n=null)}}},t},e.prototype.on=function(e,t,n){var i=this.eventEmitter.on(e,t,n);return function(){i.off(e,t,n)}},e.prototype.onConnected=function(e,t){return this.on("connected",e,t)},e.prototype.onConnecting=function(e,t){return this.on("connecting",e,t)},e.prototype.onDisconnected=function(e,t){return this.on("disconnected",e,t)},e.prototype.onReconnected=function(e,t){return this.on("reconnected",e,t)},e.prototype.onReconnecting=function(e,t){return this.on("reconnecting",e,t)},e.prototype.onError=function(e,t){return this.on("error",e,t)},e.prototype.unsubscribeAll=function(){var e=this;Object.keys(this.operations).forEach((function(t){e.unsubscribe(t)}))},e.prototype.applyMiddlewares=function(e){var t=this;return new Promise((function(n,i){var r,o,a;r=s(t.middlewares),o=t,(a=function(t){if(t)i(t);else if(r.length>0){var s=r.shift();s&&s.applyMiddleware.apply(o,[e,a])}else n(e)})()}))},e.prototype.use=function(e){var t=this;return e.map((function(e){if("function"!=typeof e.applyMiddleware)throw new Error("Middleware must implement the applyMiddleware function.");t.middlewares.push(e)})),this},e.prototype.getConnectionParams=function(e){return function(){return new Promise((function(t,n){if("function"==typeof e)try{return t(e.call(null))}catch(e){return n(e)}t(e)}))}},e.prototype.executeOperation=function(e,t){var n=this;null===this.client&&this.connect();var i=this.generateOperationId();return this.operations[i]={options:e,handler:t},this.applyMiddlewares(e).then((function(e){n.checkOperationOptions(e,t),n.operations[i]&&(n.operations[i]={options:e,handler:t},n.sendMessage(i,T.default.GQL_START,e))})).catch((function(e){n.unsubscribe(i),t(n.formatErrors(e))})),i},e.prototype.getObserver=function(e,t,n){return"function"==typeof e?{next:function(t){return e(t)},error:function(e){return t&&t(e)},complete:function(){return n&&n()}}:e},e.prototype.createMaxConnectTimeGenerator=function(){var e=this.minWsTimeout,t=this.wsTimeout;return new u({min:e,max:t,factor:1.2})},e.prototype.clearCheckConnectionInterval=function(){this.checkConnectionIntervalId&&(clearInterval(this.checkConnectionIntervalId),this.checkConnectionIntervalId=null)},e.prototype.clearMaxConnectTimeout=function(){this.maxConnectTimeoutId&&(clearTimeout(this.maxConnectTimeoutId),this.maxConnectTimeoutId=null)},e.prototype.clearTryReconnectTimeout=function(){this.tryReconnectTimeoutId&&(clearTimeout(this.tryReconnectTimeoutId),this.tryReconnectTimeoutId=null)},e.prototype.clearInactivityTimeout=function(){this.inactivityTimeoutId&&(clearTimeout(this.inactivityTimeoutId),this.inactivityTimeoutId=null)},e.prototype.setInactivityTimeout=function(){var e=this;this.inactivityTimeout>0&&0===Object.keys(this.operations).length&&(this.inactivityTimeoutId=setTimeout((function(){0===Object.keys(e.operations).length&&e.close()}),this.inactivityTimeout))},e.prototype.checkOperationOptions=function(e,t){var n=e.query,i=e.variables,r=e.operationName;if(!n)throw new Error("Must provide a query.");if(!t)throw new Error("Must provide an handler.");if(!f.default(n)&&!h.getOperationAST(n,r)||r&&!f.default(r)||i&&!p.default(i))throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")},e.prototype.buildMessage=function(e,t,n){return{id:e,type:t,payload:n&&n.query?i(i({},n),{query:"string"==typeof n.query?n.query:d.print(n.query)}):n}},e.prototype.formatErrors=function(e){return Array.isArray(e)?e:e&&e.errors?this.formatErrors(e.errors):e&&e.message?[e]:[{name:"FormatedError",message:"Unknown error",originalError:e}]},e.prototype.sendMessage=function(e,t,n){this.sendMessageRaw(this.buildMessage(e,t,n))},e.prototype.sendMessageRaw=function(e){switch(this.status){case this.wsImpl.OPEN:var t=JSON.stringify(e);try{JSON.parse(t)}catch(t){this.eventEmitter.emit("error",new Error("Message must be JSON-serializable. Got: "+e))}this.client.send(t);break;case this.wsImpl.CONNECTING:this.unsentMessagesQueue.push(e);break;default:this.reconnecting||this.eventEmitter.emit("error",new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: "+JSON.stringify(e)))}},e.prototype.generateOperationId=function(){return String(++this.nextOperationId)},e.prototype.tryReconnect=function(){var e=this;if(this.reconnect&&!(this.backoff.attempts>=this.reconnectionAttempts)){this.reconnecting||(Object.keys(this.operations).forEach((function(t){e.unsentMessagesQueue.push(e.buildMessage(t,T.default.GQL_START,e.operations[t].options))})),this.reconnecting=!0),this.clearTryReconnectTimeout();var t=this.backoff.duration();this.tryReconnectTimeoutId=setTimeout((function(){e.connect()}),t)}},e.prototype.flushUnsentMessagesQueue=function(){var e=this;this.unsentMessagesQueue.forEach((function(t){e.sendMessageRaw(t)})),this.unsentMessagesQueue=[]},e.prototype.checkConnection=function(){this.wasKeepAliveReceived?this.wasKeepAliveReceived=!1:this.reconnecting||this.close(!1,!0)},e.prototype.checkMaxConnectTimeout=function(){var e=this;this.clearMaxConnectTimeout(),this.maxConnectTimeoutId=setTimeout((function(){e.status!==e.wsImpl.OPEN&&(e.reconnecting=!0,e.close(!1,!0))}),this.maxConnectTimeGenerator.duration())},e.prototype.connect=function(){var e,t=this;this.client=new((e=this.wsImpl).bind.apply(e,s([void 0,this.url,this.wsProtocols],this.wsOptionArguments))),this.checkMaxConnectTimeout(),this.client.onopen=function(){return r(t,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:if(this.status!==this.wsImpl.OPEN)return[3,4];this.clearMaxConnectTimeout(),this.closedByUser=!1,this.eventEmitter.emit(this.reconnecting?"reconnecting":"connecting"),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.connectionParams()];case 2:return e=n.sent(),this.sendMessage(void 0,T.default.GQL_CONNECTION_INIT,e),this.flushUnsentMessagesQueue(),[3,4];case 3:return t=n.sent(),this.sendMessage(void 0,T.default.GQL_CONNECTION_ERROR,t),this.flushUnsentMessagesQueue(),[3,4];case 4:return[2]}}))}))},this.client.onclose=function(){t.closedByUser||t.close(!1,!1)},this.client.onerror=function(e){t.eventEmitter.emit("error",e)},this.client.onmessage=function(e){var n=e.data;t.processReceivedData(n)}},e.prototype.processReceivedData=function(e){var t,n;try{n=(t=JSON.parse(e)).id}catch(t){throw new Error("Message must be JSON-parseable. Got: "+e)}if(-1===[T.default.GQL_DATA,T.default.GQL_COMPLETE,T.default.GQL_ERROR].indexOf(t.type)||this.operations[n])switch(t.type){case T.default.GQL_CONNECTION_ERROR:this.connectionCallback&&this.connectionCallback(t.payload);break;case T.default.GQL_CONNECTION_ACK:this.eventEmitter.emit(this.reconnecting?"reconnected":"connected",t.payload),this.reconnecting=!1,this.backoff.reset(),this.maxConnectTimeGenerator.reset(),this.connectionCallback&&this.connectionCallback();break;case T.default.GQL_COMPLETE:var r=this.operations[n].handler;delete this.operations[n],r.call(this,null,null);break;case T.default.GQL_ERROR:this.operations[n].handler(this.formatErrors(t.payload),null),delete this.operations[n];break;case T.default.GQL_DATA:var o=t.payload.errors?i(i({},t.payload),{errors:this.formatErrors(t.payload.errors)}):t.payload;this.operations[n].handler(null,o);break;case T.default.GQL_CONNECTION_KEEP_ALIVE:var s=void 0===this.wasKeepAliveReceived;this.wasKeepAliveReceived=!0,s&&this.checkConnection(),this.checkConnectionIntervalId&&(clearInterval(this.checkConnectionIntervalId),this.checkConnection()),this.checkConnectionIntervalId=setInterval(this.checkConnection.bind(this),this.wsTimeout);break;default:throw new Error("Invalid message type!")}else this.unsubscribe(n)},e.prototype.unsubscribe=function(e){this.operations[e]&&(delete this.operations[e],this.setInactivityTimeout(),this.sendMessage(e,T.default.GQL_STOP,void 0))},e}();t.SubscriptionClient=E},2639:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WS_TIMEOUT=t.MIN_WS_TIMEOUT=void 0,t.MIN_WS_TIMEOUT=1e3,t.WS_TIMEOUT=3e4},4322:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){throw new Error("Static Class")}return e.GQL_CONNECTION_INIT="connection_init",e.GQL_CONNECTION_ACK="connection_ack",e.GQL_CONNECTION_ERROR="connection_error",e.GQL_CONNECTION_KEEP_ALIVE="ka",e.GQL_CONNECTION_TERMINATE="connection_terminate",e.GQL_START="start",e.GQL_DATA="data",e.GQL_ERROR="error",e.GQL_COMPLETE="complete",e.GQL_STOP="stop",e.SUBSCRIPTION_START="subscription_start",e.SUBSCRIPTION_DATA="subscription_data",e.SUBSCRIPTION_SUCCESS="subscription_success",e.SUBSCRIPTION_FAIL="subscription_fail",e.SUBSCRIPTION_END="subscription_end",e.INIT="init",e.INIT_SUCCESS="init_success",e.INIT_FAIL="init_fail",e.KEEP_ALIVE="keepalive",e}();t.default=n},2892:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GRAPHQL_SUBSCRIPTIONS=t.GRAPHQL_WS=void 0,t.GRAPHQL_WS="graphql-ws",t.GRAPHQL_SUBSCRIPTIONS="graphql-subscriptions"},5905:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null!==e&&"object"==typeof e}},9277:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"==typeof e}},7121:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i}),e=n.hmd(e);const i=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e)}}]);