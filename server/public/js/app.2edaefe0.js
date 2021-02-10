(function(e){function t(t){for(var r,i,c=t[0],a=t[1],u=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05b9":function(e,t,n){var r=n("6374"),o=function(e,t){this.username=e;var n,o=r(t);try{for(o.s();!(n=o.n()).done;){var s=n.value;this[s.alpha3Code]={flagGame:"false",allGame:"false",capitalGame:"false"}}}catch(i){o.e(i)}finally{o.f()}};e.exports=o},"071b":function(e,t,n){"use strict";n("db27")},"19bd":function(e,t,n){},"207c":function(e,t,n){"use strict";n("6b18")},"215a":function(e,t,n){"use strict";n("8d9c")},"2c6b":function(e,t,n){"use strict";n("c1d5")},"31c9":function(e,t,n){},"3bb2":function(e,t,n){},4044:function(e,t,n){"use strict";n("887b")},"50a4":function(e,t,n){},"50d7":function(e,t,n){"use strict";n("84a5")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return et}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"main-container"}},[n("div",{staticClass:"modeActive",attrs:{id:"nav-container"}},[n("h1",{on:{click:e.returnHomepageClick}},[e._v("GeoQuiz")]),e.currentMode?e._e():n("geo-nav"),e.currentMode?n("swap-mode",{attrs:{currentMode:e.currentMode}}):e._e()],1),n("div",{attrs:{id:"user-instructions-container"}},[n("div",{attrs:{id:"current-user"}},[e.currentUser&&"play"===e.currentMode?n("p",[e._v("Player: "+e._s(e.currentUser.username))]):e._e(),e.currentUser&&"play"===e.currentMode?n("button",{attrs:{id:"change-user-button"},on:{click:function(t){return t.preventDefault(),e.changeUser()}}},[e._v("Change player")]):e._e()]),n("div",{attrs:{id:"instructions-button-container"}},["play"===e.currentMode&&e.currentUser?n("button",{staticClass:"button-instructions",on:{click:function(t){return e.handleClick("instructions")}}},[e._v("Instructions")]):e._e()])]),"instructions"===e.currentMode?n("instructions",{attrs:{currentMode:e.currentMode}}):e._e(),"play"===e.currentMode?n("play-article",{attrs:{currentMode:e.currentMode,allUsers:e.allUsers,countries:e.countries,currentUser:e.currentUser,randomCountry:e.randomCountry,countriesRemaining:e.countriesRemaining,countriesCorrect:e.countriesCorrect,countryListSelected:e.countryListSelected,result:e.result}}):e._e(),"learn"===e.currentMode?n("learn-article",{attrs:{countries:e.countries}}):e._e()],1)},s=[],i=(n("99af"),n("7db0"),n("4160"),n("c975"),n("a434"),n("b0c0"),n("d3b7"),n("159b"),n("b85c")),c=n("2909"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{attrs:{id:"img-and-btn-container"}},[r("div",{attrs:{id:"btn-container"}},[r("button",{on:{click:function(t){return e.handleClick("learn")}}},[e._v("Learn About the Countries of the World!")]),r("button",{on:{click:function(t){return e.handleClick("play")}}},[e._v("Test Your Knowledge!")]),r("div",{attrs:{id:"img-container"}},[e.imageIsHidden?e._e():r("img",{attrs:{id:"world-map",src:n("bd62"),alt:"world_map"}})])])])},u=[],l={name:"geoNav",props:["currentMode"],methods:{handleClick:function(e){et.$emit("mode-changed",e),this.imageIsHidden=!0}},data:function(){return{imageIsHidden:!1}}},d=l,f=(n("8614"),n("2877")),m=Object(f["a"])(d,a,u,!1,null,"b23805ca",null),p=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",["play"===e.currentMode?n("button",{on:{click:function(t){return e.handleClick("learn")}}},[e._v("Swap to Learn")]):e._e(),"learn"===e.currentMode?n("button",{on:{click:function(t){return e.handleClick("play")}}},[e._v("Swap to Play")]):e._e()])},v=[],C={props:["currentMode"],methods:{handleClick:function(e){et.$emit("swap-mode",e)}}},g=C,y=(n("2c6b"),Object(f["a"])(g,h,v,!1,null,"05ebd16f",null)),_=y.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("div",{attrs:{id:"container"}},[n("learn-map",{attrs:{countries:e.countries}}),e.apiSelectedCountry?n("country-detail",{attrs:{selectedCountry:e.apiSelectedCountry}}):e._e(),e.apiSelectedCountry?e._e():n("section",{attrs:{id:"right-side"}},[n("p",[e._v("Instruction: Click on a country to display some information")])])],1)])},U=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"left-side"}},[n("p",{staticClass:"tooltip"},[e._v("Currently hovering: "+e._s(e.tooltip))]),n("svg-pan-zoom",{staticStyle:{width:"100%",height:"80%"},attrs:{zoomEnabled:!0,controlIconsEnabled:!0,fit:!1,center:!0,minZoom:1}},[n("radio-svg-map",{attrs:{"location-class":e.getContinent,map:e.World},on:{mouseenter:e.hoverCountry,click:function(t){return e.getCountryDetails()}},model:{value:e.mapSelectedCountry,callback:function(t){e.mapSelectedCountry=t},expression:"mapSelectedCountry"}})],1)],1)},k=[],$=(n("caad"),n("d81d"),n("2532"),n("75de")),S=n("f244"),x=n("2c0f"),j=n.n(x),O={name:"learn-map",props:["countries"],components:{"radio-svg-map":$["b"],"svg-pan-zoom":j.a},data:function(){return{World:S["a"],mapSelectedCountry:null,apiSelectedCountry:null,tooltip:""}},methods:{getCountryDetails:function(){var e,t=Object(i["a"])(this.countries);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.alpha2Code.toLowerCase()===this.mapSelectedCountry&&(this.apiSelectedCountry=n,et.$emit("learn-country-selected",this.apiSelectedCountry))}}catch(r){t.e(r)}finally{t.f()}},hoverCountry:function(e){var t=e.target.id,n=this.countries.find((function(e){return e.alpha2Code.toLowerCase()===t}));n&&(this.tooltip=n.name)},getContinent:function(e){var t="";if(this.countries.map((function(e){return e.alpha2Code.toLowerCase()})).includes(e.id)){var n=this.countries.find((function(t){return t.alpha2Code.toLowerCase()===e.id}));return t=n.region.toLowerCase(),"americas"===t&&"South America"===n.subregion?"south-america":t}}}},M=O,R=(n("b2a0"),Object(f["a"])(M,w,k,!1,null,"66c1dd60",null)),E=R.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"right-side"}},[n("img",{attrs:{alt:"flag",src:e.selectedCountry.flag}}),n("p",{attrs:{id:"country-name"}},[n("span",[e._v("Name")]),e._v(": "+e._s(e.selectedCountry.name))]),n("p",[n("span",[e._v("Capital")]),e._v(": "+e._s(e.selectedCountry.capital))]),n("p",[n("span",[e._v("Region")]),e._v(": "+e._s(e.selectedCountry.region))]),n("p",[n("span",[e._v("Sub-Region")]),e._v(": "+e._s(e.selectedCountry.subregion))]),n("label",[e._v("Currency(ies) :")]),n("ul",e._l(e.selectedCountry.currencies,(function(t,r){return t.name?n("li",{key:r},[e._v(" "+e._s(t.name)+" ("+e._s(t.symbol)+")")]):e._e()})),0),n("label",[e._v("Time-Zone(s) :")]),n("ul",e._l(e.selectedCountry.timezones,(function(t,r){return n("li",{key:r},[e._v(e._s(t)+" ")])})),0),n("label",[e._v("Language(s):")]),n("ul",e._l(e.selectedCountry.languages,(function(t,r){return n("li",{key:r},[e._v(e._s(t.name))])})),0),n("p",[n("span",[e._v("Demonym")]),e._v(": "+e._s(e.selectedCountry.demonym))])])},I=[],A={name:"country-detail",props:["selectedCountry","timezones"],data:function(){return{}}},H=A,N=(n("e8db"),Object(f["a"])(H,L,I,!1,null,"37755e57",null)),T=N.exports,P={name:"learnArticle",props:["currentMode","countries"],data:function(){return{mapSelectedCountry:null,apiSelectedCountry:null}},components:{"learn-map":E,"country-detail":T},mounted:function(){var e=this;et.$on("learn-country-selected",(function(t){e.apiSelectedCountry=t}))}},D=P,z=(n("8557"),Object(f["a"])(D,b,U,!1,null,"577dce14",null)),F=z.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[e.currentUser?e._e():n("choose-user",{attrs:{currentUser:e.currentUser,allUsers:e.allUsers,countries:e.countries}}),n("div",{attrs:{id:"game-area"}},[e.currentUser?n("map-header",{attrs:{randomCountry:e.randomCountry,countriesRemaining:e.countriesRemaining,correctAnswers:e.countriesCorrect,result:e.result}}):e._e(),e.currentUser?n("play-map",{attrs:{currentUser:e.currentUser,countries:e.countries,correctCountry:e.randomCountry,correctAnswers:e.countriesCorrect,countriesRemaining:e.countriesRemaining,randomCountry:e.randomCountry,result:e.result}}):e._e()],1),e.currentUser?n("list-countries",{attrs:{countriesCorrect:e.countriesCorrect}}):e._e()],1)},B=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"map-section"}},[n("p",{staticClass:"tooltip"},[e._v("Currently hovering: "+e._s(e.tooltip))]),"correct"===e.result?n("div",{staticClass:"player-guess-feedback"},["correct"===e.result?n("p",[e._v("Great job!!")]):e._e(),n("button",{attrs:{id:"next-flag"},on:{click:function(t){t.preventDefault(),e.getRandomCountry(),e.scrollTop()}}},[e._v("Next Flag")]),n("button",{attrs:{id:"details-answers"},on:{click:function(t){return e.scrollBottom()}}},[e._v("Check your answers")])]):e._e(),"incorrect"===e.result?n("div",{staticClass:"player-guess-feedback"},[n("p",[e._v("Incorrect... Try again.")]),n("button",{attrs:{id:"try-again"},on:{click:function(t){return t.preventDefault(),e.tryAgain()}}},[e._v("Try Again")]),n("button",{attrs:{id:"get-hint"},on:{click:function(t){return t.preventDefault(),e.getHint()}}},[e._v("Hint?")])]):e._e(),n("svg-pan-zoom",{staticStyle:{width:"100%",height:"90%"},attrs:{zoomEnabled:!0,controlIconsEnabled:!0,fit:!1,center:!0,minZoom:1}},[n("checkbox-svg-map",{attrs:{"location-class":e.isCorrect,map:e.world},on:{click:e.selectCountry,mouseenter:e.hoverCountry}})],1)],1)},Y=[],q={name:"play-map",props:["countries","correctAnswers","countriesRemaining","currentUser","randomCountry","result"],components:{"checkbox-svg-map":$["a"],"svg-pan-zoom":j.a},data:function(){return{selectedCountries:[],world:S["a"],tooltip:""}},computed:{apiSelectedCountries:function(){var e=this;return this.selectedCountries.map((function(t){return e.countries.find((function(e){return e.alpha2Code.toLowerCase()===t.toLowerCase()}))}))}},methods:{isCorrect:function(e){var t="";if(this.correctAnswers.map((function(e){return e.alpha2Code.toLowerCase()})).includes(e.id)){var n=this.correctAnswers.find((function(t){return t.alpha2Code.toLowerCase()===e.id}));return t=n.region.toLowerCase(),"americas"===t&&"South America"===n.subregion?"correct-south-america":"correct-"+t}},selectCountry:function(e){var t=e.target.id;et.$emit("map-country-selected",t)},hoverCountry:function(e){var t=e.target.id,n=this.countries.find((function(e){return e.alpha2Code.toLowerCase()===t}));n&&(this.tooltip=n.name)},getRandomCountry:function(){et.$emit("change-flag-pressed")},scrollTop:function(){window.scrollTo({top:200,left:100,behavior:"smooth"})},scrollBottom:function(){window.scrollTo({top:1e3,left:100,behavior:"smooth"})},tryAgain:function(){et.$emit("try-again-pressed")},getHint:function(){et.$emit("get-hint-pressed")}}},W=q,Z=(n("50d7"),Object(f["a"])(W,J,Y,!1,null,"bc7390a6",null)),K=Z.exports,Q="api/results/",V={getUsers:function(){return fetch(Q).then((function(e){return e.json()}))},addUser:function(e){return fetch(Q,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},updateUser:function(e){return fetch(Q+e._id,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},deleteUser:function(e){return fetch(Q+e,{method:"DELETE"})}},X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{id:"instructions"}},[e._m(0),n("p",[e._v("You’ll see a flag in the top left of your screen.")]),e._m(1),n("p",[e._v("Keep going until you paint the whole globe!")]),"instructions"===e.currentMode?n("button",{attrs:{id:"back"},on:{click:function(t){return e.handleClick("play")}}},[e._v("Back to the game")]):e._e()])},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("b",[e._v("How to play:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Click a country on the map to make your guess")]),n("li",[e._v("Correct answers will get coloured in!")]),n("li",[e._v("Click 'next flag' to continue playing")]),n("li",[e._v("If you get stuck use the hints")]),n("li",[e._v("You can zoom in on the map to find small countries")])])}],te={name:"instructions",props:["currentMode"],methods:{handleClick:function(e){et.$emit("swap-mode",e)}}},ne=te,re=(n("071b"),Object(f["a"])(ne,X,ee,!1,null,"2cfa3f02",null)),oe=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h2",[e._v("Correct countries:")]),n("ul",e._l(e.countriesCorrect,(function(t,r){return n("li",{key:r,attrs:{id:"countries"}},[n("ul",{staticClass:"mini-country"},[n("li",{staticClass:"mini-flag"},[n("img",{attrs:{src:t.flag,alt:t.name}})]),n("div",{staticClass:"details-country"},[n("li",{staticClass:"mini-name"},[n("b",[e._v(e._s(t.name))])]),n("li",{staticClass:"mini-capital"},[e._v("Capital: "+e._s(t.capital))])])])])})),0)])},ie=[],ce={name:"list-countries",props:["countriesCorrect"]},ae=ce,ue=(n("eb74"),Object(f["a"])(ae,se,ie,!1,null,"0de80232",null)),le=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"centered"}},[n("p",[e._v("Have you played before?")]),n("button",{attrs:{id:"played-before-button"},on:{click:function(t){return e.changeNewUserFormIsHidden(!0)}}},[e._v("Yes")]),n("button",{attrs:{id:"new-user-button"},on:{click:function(t){return e.changeNewUserFormIsHidden(!1)}}},[e._v("No")]),!0===e.newUserFormIsHidden?n("user-select",{attrs:{currentUser:e.currentUser,allUsers:e.allUsers}}):e._e(),!1===e.newUserFormIsHidden?n("user-form",{attrs:{currentUser:e.currentUser,countries:e.countries}}):e._e(),n("div",[e.currentUser?n("p",{attrs:{id:"display-user"}},[e._v("Current user: "+e._s(e.currentUser.username))]):e._e()])],1)},fe=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("title",[e._v("Create new user")]),n("label",{attrs:{for:"username"}},[e._v("Username: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{name:"username",id:"username",type:"text",placeholder:"Enter username",required:""},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("input",{attrs:{type:"submit",name:"submit",value:"Add"}})])])},pe=[],he=n("05b9"),ve=n.n(he),Ce={name:"user-form",props:["countries"],data:function(){return{newUser:null,userName:"",currentUser:null}},methods:{handleSubmit:function(){this.createUser(),et.$emit("add-user",this.currentUser),this.userName=""},createUser:function(){var e=new ve.a(this.userName,this.countries);this.currentUser=e}}},ge=Ce,ye=(n("cbd1"),Object(f["a"])(ge,me,pe,!1,null,"3f6aa5c8",null)),_e=ye.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser,expression:"selectedUser"}],attrs:{name:"username",id:"username"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedUser=t.target.multiple?n:n[0]},e.handleSelect]}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("--Select User--")]),e._l(e.allUsers,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v(e._s(t.username))])}))],2)])},Ue=[],we={name:"user-select",props:["currentUser","allUsers"],data:function(){return{selectedUser:""}},methods:{handleSelect:function(){et.$emit("user-selected",this.selectedUser)}}},ke=we,$e=(n("fde1"),Object(f["a"])(ke,be,Ue,!1,null,"652cb8ec",null)),Se=$e.exports,xe={name:"choose-user",props:["currentUser","allUsers","countries"],components:{"user-form":_e,"user-select":Se},data:function(){return{newUserFormIsHidden:null}},methods:{changeNewUserFormIsHidden:function(e){this.newUserFormIsHidden=e}}},je=xe,Oe=(n("215a"),Object(f["a"])(je,de,fe,!1,null,"c98153bc",null)),Me=Oe.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"map-header"}},[n("div",{attrs:{id:"change-flag-button"}},[e.randomCountry?n("button",{on:{click:function(t){return t.preventDefault(),e.getRandomCountry(e.countriesRemaining)}}},[e._v("Change Flag")]):e._e()]),e.randomCountry?n("flag-to-guess",{attrs:{randomCountry:e.randomCountry}}):e._e(),n("section",{attrs:{id:"hints-container"}},[n("div",{attrs:{id:"hints-header-container"}},[n("h2",{attrs:{id:"hints-header"}},[e._v("Hints")]),n("button",{attrs:{id:"hint-button"},on:{click:function(t){return t.preventDefault(),e.getHint()}}},[e._v("Get Hint")])]),e.hints>0?n("p",{staticClass:"hint"},[e._v(" 1. Its capital is: "+e._s(e.randomCountry.capital))]):e._e(),e.hints>1?n("p",{staticClass:"hint"},[e._v(" 2. It is found in: "+e._s(e.randomCountry.region))]):e._e(),e.hints>2?n("p",{staticClass:"hint"},[e._v(" 3. The country is: "+e._s(e.randomCountry.name))]):e._e(),e.hints>3?n("p",{staticClass:"hint red-text"},[e._v("No more hints available. Use next flag button to skip.")]):e._e()]),n("div",{attrs:{id:"counters"}},[n("div",{attrs:{id:"counters-container"}},[n("div",{attrs:{id:"counter-correct"}},[n("p",{staticClass:"text-correct-answers"},[e._v("Correct answers: ")]),n("p",{staticClass:"num-correct-answers"},[e._v(e._s(e.correctAnswers.length))])]),n("div",{attrs:{id:"counter-remaining"}},[n("p",{staticClass:"text-remaining"},[e._v("Countries Remaining: ")]),n("p",{staticClass:"num-remaining"},[e._v(e._s(e.countriesRemaining.length))])])])])],1)},Ee=[],Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.randomCountry?n("img",{attrs:{src:e.randomCountry.flag,alt:e.randomCountry.name+"flag"}}):e._e()},Ie=[],Ae={name:"flag-to-guess",props:["randomCountry"],data:function(){return{}}},He=Ae,Ne=(n("6696"),Object(f["a"])(He,Le,Ie,!1,null,"5a4a82ac",null)),Te=Ne.exports,Pe={name:"map-header",props:["randomCountry","countriesRemaining","correctAnswers","result"],data:function(){return{hints:0}},mounted:function(){var e=this;et.$on("get-hint-pressed",(function(){e.hints+=1})),et.$on("change-flag-pressed",(function(){e.hints=0})),et.$on("country-correct",(function(){e.hints=0}))},methods:{getRandomCountry:function(e){et.$emit("change-flag-pressed",e)},getHint:function(){this.hints+=1}},components:{"flag-to-guess":Te}},De=Pe,ze=(n("c746"),Object(f["a"])(De,Re,Ee,!1,null,"1765ad9e",null)),Fe=ze.exports,Ge={name:"playArticle",props:["currentMode","countries","allUsers","currentUser","randomCountry","countriesRemaining","countriesCorrect","countryListSelected","result"],components:{"play-map":K,instructions:oe,"list-countries":le,"choose-user":Me,"map-header":Fe},methods:{handleClick:function(e){et.$emit("mode-changed",e)}}},Be=Ge,Je=(n("207c"),Object(f["a"])(Be,G,B,!1,null,"07984566",null)),Ye=Je.exports,qe={name:"App",data:function(){return{currentMode:null,countries:[],allUsers:[],currentUser:null,randomCountry:null,countriesRemaining:[],countriesCorrect:[],countryListSelected:null,result:null}},mounted:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e.countries=t})),this.fetchUsers(),et.$on("mode-changed",(function(t){e.currentMode=t,e.currentUser=null})),et.$on("swap-mode",(function(t){e.currentMode=t})),et.$on("add-user",(function(t){V.addUser(t).then((function(t){return e.currentUser=t})).then((function(){return e.allUsers.push(e.currentUser)})).then((function(){return e.countriesCorrect=[]})).then((function(){return e.countriesRemaining=e.removeImpossibleCountries()})).then((function(){return e.getRandomCountry(e.countriesRemaining)}))})),et.$on("country-correct",(function(t){e.fetchUsers()})),et.$on("map-country-selected",(function(t){var n=e.countries.find((function(e){return e.alpha2Code.toLowerCase()===t}));e.countryListSelected=n,"correct"!=e.result&&e.checkAnswer()})),et.$on("user-selected",(function(t){e.currentUser=t,e.countriesCorrect=[],e.countriesRemaining=e.removeImpossibleCountries(),e.getRandomCountry(e.countriesRemaining),e.setCorrectCountries()})),et.$on("change-flag-pressed",(function(t){e.getRandomCountry(e.countriesRemaining)})),et.$on("try-again-pressed",(function(){e.result=null})),et.$on("request-user-change",(function(t){e.currentUser=null}))},methods:{fetchUsers:function(){var e=this;V.getUsers().then((function(t){return e.allUsers=t}))},returnHomepageClick:function(){this.currentMode=null},changeUser:function(){et.$emit("request-user-change",this.currentUser),this.currentUser=null},getRandomCountry:function(e){this.randomCountry=e[Math.floor(Math.random()*e.length)],this.result=null},checkAnswer:function(){if(this.randomCountry.alpha3Code===this.countryListSelected.alpha3Code){this.countriesCorrect=[].concat(Object(c["a"])(this.countriesCorrect),[this.countryListSelected]);var e=this.countriesRemaining.indexOf(this.countryListSelected);this.countriesRemaining.splice(e,1),this.result="correct",this.currentUser[this.randomCountry.alpha3Code]["flagGame"]="true",V.updateUser(this.currentUser).then((function(e){return et.$emit("country-correct",e)})),this.countryListSelected=null}else this.result="incorrect"},setCorrectCountries:function(){var e,t=Object(i["a"])(this.removeImpossibleCountries());try{for(t.s();!(e=t.n()).done;){var n=e.value;if("true"===this.currentUser[n.alpha3Code]["flagGame"]){var r=this.countriesRemaining.indexOf(n);r>-1&&this.countriesCorrect.push(this.countriesRemaining.splice(r,1)[0])}}}catch(o){t.e(o)}finally{t.f()}},handleClick:function(e){this.currentMode=e},removeImpossibleCountries:function(){var e=this,t=S["a"].locations,n=[];return t.forEach((function(t){e.countries.forEach((function(e){e.alpha2Code.toLowerCase()===t.id&&n.push(e)}))})),n},sortByName:function(e){e.sort((function(e,t){var n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:void 0}))}},components:{"geo-nav":p,"play-article":Ye,"learn-article":F,instructions:oe,"swap-mode":_}},We=qe,Ze=(n("4044"),Object(f["a"])(We,o,s,!1,null,"57260793",null)),Ke=Ze.exports,Qe=n("ecee"),Ve=n("c074"),Xe=n("ad3d");Qe["c"].add(Ve["b"],Ve["a"]),r["a"].component("font-awesome-icon",Xe["a"]),r["a"].config.productionTip=!1;var et=new r["a"];new r["a"]({render:function(e){return e(Ke)}}).$mount("#app")},6669:function(e,t,n){},6696:function(e,t,n){"use strict";n("9efc")},"6b18":function(e,t,n){},"84a5":function(e,t,n){},8557:function(e,t,n){"use strict";n("19bd")},8614:function(e,t,n){"use strict";n("9b16")},"887b":function(e,t,n){},"8d9c":function(e,t,n){},"8fa2":function(e,t,n){},"9b16":function(e,t,n){},"9efc":function(e,t,n){},b2a0:function(e,t,n){"use strict";n("6669")},bd62:function(e,t,n){e.exports=n.p+"img/world_map.668039ef.png"},c1d5:function(e,t,n){},c746:function(e,t,n){"use strict";n("50a4")},cbd1:function(e,t,n){"use strict";n("31c9")},db27:function(e,t,n){},e4a9:function(e,t,n){},e8db:function(e,t,n){"use strict";n("e4a9")},eb74:function(e,t,n){"use strict";n("3bb2")},fde1:function(e,t,n){"use strict";n("8fa2")}});
//# sourceMappingURL=app.2edaefe0.js.map