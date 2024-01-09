import{i as ze,u as Fe,_ as Le}from"./Select.1mpADbTq.js";import{k as Me,ae as Be,af as we,d as Ae,ah as Ue,ai as Re,r as Ce,aj as Pe,o as xe,N as Ne,a1 as je,G as Ee,aM as qe,al as He,b as ve,c as Ke,e as We,aa as $e,ac as Ve,n as Qe,aN as Je,aO as Ge,aP as Ze,m as Ye,aE as Xe,aD as Ie,a9 as be,w as et,aB as me,aC as tt,f as Se,aQ as Te,aH as rt}from"./entry.hc5Hziep.js";const nt={...ze,form:"form-textarea",default:{size:"sm",color:"white",variant:"outline"}},he=Be(we.ui.strategy,we.ui.textarea,nt),it=Ae({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(f){return Object.keys(he.size).includes(f)}},color:{type:String,default:()=>he.default.color,validator(f){return[...we.ui.colors,...Object.keys(he.color)].includes(f)}},variant:{type:String,default:()=>he.default.variant,validator(f){return[...Object.keys(he.variant),...Object.values(he.color).flatMap(R=>Object.keys(R))].includes(f)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(f,{emit:R}){const{ui:D,attrs:c}=Ue("textarea",Re(f,"ui"),he,Re(f,"class")),{emitFormBlur:ee,emitFormInput:ie,inputId:B,color:ae,size:l,name:U}=Fe(f,he),k=Ce(Pe({},f.modelModifiers,{trim:!1,lazy:!1,number:!1})),T=Ce(null),K=()=>{var _;f.autofocus&&((_=T.value)==null||_.focus())},P=()=>{if(f.autoresize){if(!T.value)return;T.value.rows=f.rows;const _=window.getComputedStyle(T.value),te=parseInt(_.paddingTop),ue=parseInt(_.paddingBottom),re=te+ue,g=parseInt(_.lineHeight),{scrollHeight:t}=T.value,e=(t-re)/g;e>f.rows&&(T.value.rows=e)}},N=_=>{k.value.trim&&(_=_.trim()),k.value.number&&(_=Je(_)),R("update:modelValue",_),ie()},V=_=>{P(),k.value.lazy||N(_.target.value)},W=_=>{const te=_.target.value;k.value.lazy&&N(te),k.value.trim&&(_.target.value=te.trim())},$=_=>{R("blur",_),ee()};xe(()=>{setTimeout(()=>{K()},f.autofocusDelay)}),Ne(()=>f.modelValue,()=>{je(P)}),xe(()=>{setTimeout(()=>{K(),P()},100)});const ye=Ee(()=>{var te,ue;const _=((ue=(te=D.value.color)==null?void 0:te[ae.value])==null?void 0:ue[f.variant])||D.value.variant[f.variant];return qe(He(D.value.base,D.value.form,D.value.rounded,D.value.placeholder,D.value.size[l.value],f.padded?D.value.padding[l.value]:"p-0",_==null?void 0:_.replaceAll("{color}",ae.value),!f.resize&&"resize-none"),f.textareaClass)});return{ui:D,attrs:c,name:U,inputId:B,textarea:T,textareaClass:ye,onInput:V,onChange:W,onBlur:$}}}),at=["id","value","name","rows","required","disabled","placeholder"];function st(f,R,D,c,ee,ie){return ve(),Ke("div",{class:Qe(f.ui.wrapper)},[We("textarea",$e({id:f.inputId,ref:"textarea",value:f.modelValue,name:f.name,rows:f.rows,required:f.required,disabled:f.disabled,placeholder:f.placeholder,class:f.textareaClass},f.attrs,{onInput:R[0]||(R[0]=(...B)=>f.onInput&&f.onInput(...B)),onBlur:R[1]||(R[1]=(...B)=>f.onBlur&&f.onBlur(...B)),onChange:R[2]||(R[2]=(...B)=>f.onChange&&f.onChange(...B))}),null,16,at),Ve(f.$slots,"default")],2)}const ot=Me(it,[["render",st]]);var De={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(f,R){(function(D,c){f.exports=c()})(Ge,function D(){var c=typeof self<"u"?self:typeof window<"u"?window:c!==void 0?c:{},ee=!c.document&&!!c.postMessage,ie=c.IS_PAPA_WORKER||!1,B={},ae=0,l={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(g(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!g(e.transform)&&e.transform,e.worker&&l.WORKERS_SUPPORTED){var n=function(){if(!l.WORKERS_SUPPORTED)return!1;var d=(L=c.URL||c.webkitURL||null,E=D.toString(),l.BLOB_URL||(l.BLOB_URL=L.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",E,")();"],{type:"text/javascript"})))),h=new c.Worker(d),L,E;return h.onmessage=ye,h.id=ae++,B[h.id]=h}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=g(e.step),e.chunk=g(e.chunk),e.complete=g(e.complete),e.error=g(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var a=null;return l.NODE_STREAM_INPUT,typeof t=="string"?(t=function(d){return d.charCodeAt(0)===65279?d.slice(1):d}(t),a=e.download?new T(e):new P(e)):t.readable===!0&&g(t.read)&&g(t.on)?a=new N(e):(c.File&&t instanceof File||t instanceof Object)&&(a=new K(e)),a.stream(t)},unparse:function(t,e){var r=!1,n=!0,a=",",d=`\r
`,h='"',L=h+h,E=!1,s=null,x=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||l.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(a=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(E=e.skipEmptyLines),typeof e.newline=="string"&&(d=e.newline),typeof e.quoteChar=="string"&&(h=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");s=e.columns}e.escapeChar!==void 0&&(L=e.escapeChar+h),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(x=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(W(h),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return Y(null,t,E);if(typeof t[0]=="object")return Y(s||Object.keys(t[0]),t,E)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||s),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),Y(t.fields||[],t.data||[],E);throw new Error("Unable to serialize unrecognized input");function Y(i,b,q){var O="";typeof i=="string"&&(i=JSON.parse(i)),typeof b=="string"&&(b=JSON.parse(b));var M=Array.isArray(i)&&0<i.length,z=!Array.isArray(b[0]);if(M&&n){for(var F=0;F<i.length;F++)0<F&&(O+=a),O+=j(i[F],F);0<b.length&&(O+=d)}for(var o=0;o<b.length;o++){var p=M?i.length:b[o].length,w=!1,A=M?Object.keys(b[o]).length===0:b[o].length===0;if(q&&!M&&(w=q==="greedy"?b[o].join("").trim()==="":b[o].length===1&&b[o][0].length===0),q==="greedy"&&M){for(var v=[],H=0;H<p;H++){var I=z?i[H]:H;v.push(b[o][I])}w=v.join("").trim()===""}if(!w){for(var y=0;y<p;y++){0<y&&!A&&(O+=a);var X=M&&z?i[y]:y;O+=j(b[o][X],y)}o<b.length-1&&(!q||0<p&&!A)&&(O+=d)}}return O}function j(i,b){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var q=!1;x&&typeof i=="string"&&x.test(i)&&(i="'"+i,q=!0);var O=i.toString().replace(u,L);return(q=q||r===!0||typeof r=="function"&&r(i,b)||Array.isArray(r)&&r[b]||function(M,z){for(var F=0;F<z.length;F++)if(-1<M.indexOf(z[F]))return!0;return!1}(O,l.BAD_DELIMITERS)||-1<O.indexOf(a)||O.charAt(0)===" "||O.charAt(O.length-1)===" ")?h+O+h:O}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!ee&&!!c.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=$,l.ParserHandle=V,l.NetworkStreamer=T,l.FileStreamer=K,l.StringStreamer=P,l.ReadableStreamStreamer=N,c.jQuery){var U=c.jQuery;U.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(d){if(!(U(this).prop("tagName").toUpperCase()==="INPUT"&&U(this).attr("type").toLowerCase()==="file"&&c.FileReader)||!this.files||this.files.length===0)return!0;for(var h=0;h<this.files.length;h++)r.push({file:this.files[h],inputElem:this,instanceConfig:U.extend({},e)})}),n(),this;function n(){if(r.length!==0){var d,h,L,E,s=r[0];if(g(t.before)){var x=t.before(s.file,s.inputElem);if(typeof x=="object"){if(x.action==="abort")return d="AbortError",h=s.file,L=s.inputElem,E=x.reason,void(g(t.error)&&t.error({name:d},h,L,E));if(x.action==="skip")return void a();typeof x.config=="object"&&(s.instanceConfig=U.extend(s.instanceConfig,x.config))}else if(x==="skip")return void a()}var u=s.instanceConfig.complete;s.instanceConfig.complete=function(Y){g(u)&&u(Y,s.file,s.inputElem),a()},l.parse(s.file,s.instanceConfig)}else g(t.complete)&&t.complete()}function a(){r.splice(0,1),n()}}}function k(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=ue(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new V(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&g(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var d=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var h=d.meta.cursor;this._finished||(this._partialLine=a.substring(h-this._baseIndex),this._baseIndex=h),d&&d.data&&(this._rowCount+=d.data.length);var L=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(ie)c.postMessage({results:d,workerId:l.WORKER_ID,finished:L});else if(g(this._config.chunk)&&!r){if(this._config.chunk(d,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);d=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(d.data),this._completeResults.errors=this._completeResults.errors.concat(d.errors),this._completeResults.meta=d.meta),this._completed||!L||!g(this._config.complete)||d&&d.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),L||d&&d.meta.paused||this._nextChunk(),d}this._halted=!0},this._sendError=function(e){g(this._config.error)?this._config.error(e):ie&&this._config.error&&c.postMessage({workerId:l.WORKER_ID,error:e,finished:!1})}}function T(t){var e;(t=t||{}).chunkSize||(t.chunkSize=l.RemoteChunkSize),k.call(this,t),this._nextChunk=ee?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),ee||(e.onload=re(this._chunkLoaded,this),e.onerror=re(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!ee),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var a=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+a)}try{e.send(this._config.downloadRequestBody)}catch(d){this._chunkError(d.message)}ee&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function K(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=l.LocalChunkSize),k.call(this,t);var n=typeof FileReader<"u";this.stream=function(a){this._input=a,r=a.slice||a.webkitSlice||a.mozSlice,n?((e=new FileReader).onload=re(this._chunkLoaded,this),e.onerror=re(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var d=Math.min(this._start+this._config.chunkSize,this._input.size);a=r.call(a,this._start,d)}var h=e.readAsText(a,this._config.encoding);n||this._chunkLoaded({target:{result:h}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(e.error)}}function P(t){var e;k.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function N(t){k.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){k.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){k.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(a){this._input=a,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=re(function(a){try{e.push(typeof a=="string"?a:a.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(d){this._streamError(d)}},this),this._streamError=re(function(a){this._streamCleanUp(),this._sendError(a)},this),this._streamEnd=re(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=re(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function V(t){var e,r,n,a=Math.pow(2,53),d=-a,h=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,L=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,E=this,s=0,x=0,u=!1,Y=!1,j=[],i={data:[],errors:[],meta:{}};if(g(t.step)){var b=t.step;t.step=function(o){if(i=o,M())O();else{if(O(),i.data.length===0)return;s+=o.data.length,t.preview&&s>t.preview?r.abort():(i.data=i.data[0],b(i,E))}}}function q(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function O(){return i&&n&&(F("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!q(o)})),M()&&function(){if(!i)return;function o(w,A){g(t.transformHeader)&&(w=t.transformHeader(w,A)),j.push(w)}if(Array.isArray(i.data[0])){for(var p=0;M()&&p<i.data.length;p++)i.data[p].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(w,A){var v,H=t.header?{}:[];for(v=0;v<w.length;v++){var I=v,y=w[v];t.header&&(I=v>=j.length?"__parsed_extra":j[v]),t.transform&&(y=t.transform(y,I)),y=z(I,y),I==="__parsed_extra"?(H[I]=H[I]||[],H[I].push(y)):H[I]=y}return t.header&&(v>j.length?F("FieldMismatch","TooManyFields","Too many fields: expected "+j.length+" fields but parsed "+v,x+A):v<j.length&&F("FieldMismatch","TooFewFields","Too few fields: expected "+j.length+" fields but parsed "+v,x+A)),H}var p=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),p=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=j),x+=p,i}()}function M(){return t.header&&j.length===0}function z(o,p){return w=o,t.dynamicTypingFunction&&t.dynamicTyping[w]===void 0&&(t.dynamicTyping[w]=t.dynamicTypingFunction(w)),(t.dynamicTyping[w]||t.dynamicTyping)===!0?p==="true"||p==="TRUE"||p!=="false"&&p!=="FALSE"&&(function(A){if(h.test(A)){var v=parseFloat(A);if(d<v&&v<a)return!0}return!1}(p)?parseFloat(p):L.test(p)?new Date(p):p===""?null:p):p;var w}function F(o,p,w,A){var v={type:o,code:p,message:w};A!==void 0&&(v.row=A),i.errors.push(v)}this.parse=function(o,p,w){var A=t.quoteChar||'"';if(t.newline||(t.newline=function(I,y){I=I.substring(0,1048576);var X=new RegExp(W(y)+"([^]*?)"+W(y),"gm"),Q=(I=I.replace(X,"")).split("\r"),ne=I.split(`
`),se=1<ne.length&&ne[0].length<Q[0].length;if(Q.length===1||se)return`
`;for(var J=0,C=0;C<Q.length;C++)Q[C][0]===`
`&&J++;return J>=Q.length/2?`\r
`:"\r"}(o,A)),n=!1,t.delimiter)g(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var v=function(I,y,X,Q,ne){var se,J,C,S;ne=ne||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ce=0;ce<ne.length;ce++){var m=ne[ce],ge=0,oe=0,pe=0;C=void 0;for(var le=new $({comments:Q,delimiter:m,newline:y,preview:10}).parse(I),de=0;de<le.data.length;de++)if(X&&q(le.data[de]))pe++;else{var fe=le.data[de].length;oe+=fe,C!==void 0?0<fe&&(ge+=Math.abs(fe-C),C=fe):C=fe}0<le.data.length&&(oe/=le.data.length-pe),(J===void 0||ge<=J)&&(S===void 0||S<oe)&&1.99<oe&&(J=ge,se=m,S=oe)}return{successful:!!(t.delimiter=se),bestDelimiter:se}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);v.successful?t.delimiter=v.bestDelimiter:(n=!0,t.delimiter=l.DefaultDelimiter),i.meta.delimiter=t.delimiter}var H=ue(t);return t.preview&&t.header&&H.preview++,e=o,r=new $(H),i=r.parse(e,p,w),O(),u?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=g(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){E.streamer._halted?(u=!1,E.streamer.parseChunk(e,!0)):setTimeout(E.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,r.abort(),i.meta.aborted=!0,g(t.complete)&&t.complete(i),e=""}}function W(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $(t){var e,r=(t=t||{}).delimiter,n=t.newline,a=t.comments,d=t.step,h=t.preview,L=t.fastMode,E=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(E=t.escapeChar),(typeof r!="string"||-1<l.BAD_DELIMITERS.indexOf(r))&&(r=","),a===r)throw new Error("Comment character same as delimiter");a===!0?a="#":(typeof a!="string"||-1<l.BAD_DELIMITERS.indexOf(a))&&(a=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var s=0,x=!1;this.parse=function(u,Y,j){if(typeof u!="string")throw new Error("Input must be a string");var i=u.length,b=r.length,q=n.length,O=a.length,M=g(d),z=[],F=[],o=[],p=s=0;if(!u)return G();if(t.header&&!Y){var w=u.split(n)[0].split(r),A=[],v={},H=!1;for(var I in w){var y=w[I];g(t.transformHeader)&&(y=t.transformHeader(y,I));var X=y,Q=v[y]||0;for(0<Q&&(H=!0,X=y+"_"+Q),v[y]=Q+1;A.includes(X);)X=X+"_"+Q;A.push(X)}if(H){var ne=u.split(n);ne[0]=A.join(r),u=ne.join(n)}}if(L||L!==!1&&u.indexOf(e)===-1){for(var se=u.split(n),J=0;J<se.length;J++){if(o=se[J],s+=o.length,J!==se.length-1)s+=n.length;else if(j)return G();if(!a||o.substring(0,O)!==a){if(M){if(z=[],pe(o.split(r)),_e(),x)return G()}else pe(o.split(r));if(h&&h<=J)return z=z.slice(0,h),G(!0)}}return G()}for(var C=u.indexOf(r,s),S=u.indexOf(n,s),ce=new RegExp(W(E)+W(e),"g"),m=u.indexOf(e,s);;)if(u[s]!==e)if(a&&o.length===0&&u.substring(s,s+O)===a){if(S===-1)return G();s=S+q,S=u.indexOf(n,s),C=u.indexOf(r,s)}else if(C!==-1&&(C<S||S===-1))o.push(u.substring(s,C)),s=C+b,C=u.indexOf(r,s);else{if(S===-1)break;if(o.push(u.substring(s,S)),fe(S+q),M&&(_e(),x))return G();if(h&&z.length>=h)return G(!0)}else for(m=s,s++;;){if((m=u.indexOf(e,m+1))===-1)return j||F.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:z.length,index:s}),de();if(m===i-1)return de(u.substring(s,m).replace(ce,e));if(e!==E||u[m+1]!==E){if(e===E||m===0||u[m-1]!==E){C!==-1&&C<m+1&&(C=u.indexOf(r,m+1)),S!==-1&&S<m+1&&(S=u.indexOf(n,m+1));var ge=le(S===-1?C:Math.min(C,S));if(u.substr(m+1+ge,b)===r){o.push(u.substring(s,m).replace(ce,e)),u[s=m+1+ge+b]!==e&&(m=u.indexOf(e,s)),C=u.indexOf(r,s),S=u.indexOf(n,s);break}var oe=le(S);if(u.substring(m+1+oe,m+1+oe+q)===n){if(o.push(u.substring(s,m).replace(ce,e)),fe(m+1+oe+q),C=u.indexOf(r,s),m=u.indexOf(e,s),M&&(_e(),x))return G();if(h&&z.length>=h)return G(!0);break}F.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:z.length,index:s}),m++}}else m++}return de();function pe(Z){z.push(Z),p=s}function le(Z){var Oe=0;if(Z!==-1){var ke=u.substring(m+1,Z);ke&&ke.trim()===""&&(Oe=ke.length)}return Oe}function de(Z){return j||(Z===void 0&&(Z=u.substring(s)),o.push(Z),s=i,pe(o),M&&_e()),G()}function fe(Z){s=Z,pe(o),o=[],S=u.indexOf(n,s)}function G(Z){return{data:z,errors:F,meta:{delimiter:r,linebreak:n,aborted:x,truncated:!!Z,cursor:p+(Y||0)}}}function _e(){d(G()),z=[],F=[]}},this.abort=function(){x=!0},this.getCharIndex=function(){return s}}function ye(t){var e=t.data,r=B[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var a={abort:function(){n=!0,_(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:te,resume:te};if(g(r.userStep)){for(var d=0;d<e.results.data.length&&(r.userStep({data:e.results.data[d],errors:e.results.errors,meta:e.results.meta},a),!n);d++);delete e.results}else g(r.userChunk)&&(r.userChunk(e.results,a,e.file),delete e.results)}e.finished&&!n&&_(e.workerId,e.results)}function _(t,e){var r=B[t];g(r.userComplete)&&r.userComplete(e),r.terminate(),delete B[t]}function te(){throw new Error("Not implemented.")}function ue(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=ue(t[r]);return e}function re(t,e){return function(){t.apply(e,arguments)}}function g(t){return typeof t=="function"}return ie&&(c.onmessage=function(t){var e=t.data;if(l.WORKER_ID===void 0&&e&&(l.WORKER_ID=e.workerId),typeof e.input=="string")c.postMessage({workerId:l.WORKER_ID,results:l.parse(e.input,e.config),finished:!0});else if(c.File&&e.input instanceof File||e.input instanceof Object){var r=l.parse(e.input,e.config);r&&c.postMessage({workerId:l.WORKER_ID,results:r,finished:!0})}}),(T.prototype=Object.create(k.prototype)).constructor=T,(K.prototype=Object.create(k.prototype)).constructor=K,(P.prototype=Object.create(P.prototype)).constructor=P,(N.prototype=Object.create(k.prototype)).constructor=N,l})})(De);var ut=De.exports;const lt=Ze(ut),ht=Ae({__name:"convert",async setup(f){let R,D;if(Ye().public.site_env!=="preview")throw Xe({statusCode:404,statusMessage:"Page not found",fatal:!0});const c=Ce(""),{data:ee}=([R,D]=Ie(()=>Te("/api/meta.yml","$dg4wxn2PdN")),R=await R,D(),R),{data:ie}=([R,D]=Ie(()=>Te("/api/meta.csv","$5926l9L6wT")),R=await R,D(),R),B=Ee(()=>{var U;return ie.value?(U=lt.parse(ie.value))==null?void 0:U.data:void 0}),ae=Ee(()=>{if(!B.value)return;const U=B.value[0].map(k=>k.trim());return B.value.slice(1).reduce((k,T)=>{const K=U.reduce((N,V,W)=>{var $;return V&&(N[V]=($=T[W])==null?void 0:$.trim()),N},{}),{ID:P}=K;return P&&(delete K.ID,k.set(P,K)),k},new Map)});function l(U){return ee.value.replace(/^( *)([^\n{]+){([^:}]+):?([^}]+)?}.*\n/gm,(k,T,K,P,N)=>{const[V,W]=P.split("|");let $=ae.value.get(U)[V]||W&&ae.value.get(U)[W];if(!$)return"";if(N)switch(N){case"Boolean":$="true";break;case"Array":$=["",...$.split(/, ?/)].join(`
`+T+"  - ");break}return T+K+$+`
`}).replace(/^ {2}.+?:\n(?= {2}\S)/gm,"").replace(/^ {4}.+?:\n(?= {4}\S)/gm,"")}return(U,k)=>{const T=Le,K=ot,P=rt;return ve(),be(P,{class:"mt-4"},{default:et(()=>{var N;return[(N=me(ae))!=null&&N.size?(ve(),be(T,{key:0,modelValue:me(c),"onUpdate:modelValue":k[0]||(k[0]=V=>tt(c)?c.value=V:null),options:[...me(ae).keys()].sort((V,W)=>V.localeCompare(W)),placeholder:"ID",class:"mt-8"},null,8,["modelValue","options"])):Se("",!0),me(c)?(ve(),be(K,{key:1,"model-value":l(me(c)),autoresize:"",class:"mt-8"},null,8,["model-value"])):Se("",!0)]}),_:1})}}});export{ht as default};
