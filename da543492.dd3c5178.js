(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(80)),o={slug:"/Installation",title:"Installation"},l={unversionedId:"2_Getting Started/2_1_Installation",id:"2_Getting Started/2_1_Installation",isDocsHomePage:!1,title:"Installation",description:"Requirements",source:"@site/docs/2_Getting Started/2_1_Installation.md",slug:"/Installation",permalink:"/react-native-boilerplate-ts/docs/Installation",editUrl:"https://github.com/vahesaroyan/react-native-boilerplate-ts/edit/master/website-documentation/docs/docs/2_Getting Started/2_1_Installation.md",version:"current",sidebar:"docs",previous:{title:"React Native Boilerplate",permalink:"/react-native-boilerplate-ts/docs/Introduction"},next:{title:"Configuration",permalink:"/react-native-boilerplate-ts/docs/Configuration"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Using the boilerplate",id:"using-the-boilerplate",children:[]},{value:"Running the project",id:"running-the-project",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up."),Object(i.b)("p",null,"You also need to install the dependencies required by React Native:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3"}),"Android development")),Object(i.b)("li",{parentName:"ul"},"for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies"}),"iOS development"))),Object(i.b)("h2",{id:"using-the-boilerplate"},"Using the boilerplate"),Object(i.b)("p",null,"To create a new project using the boilerplate simply run :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npx react-native init MyApp --template @vahesaroyan/react-native-boilerplate\n")),Object(i.b)("h2",{id:"running-the-project"},"Running the project"),Object(i.b)("p",null,"Assuming you have all the requirements installed, you can setup and run the project by running:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn install")," to install the dependencies"),Object(i.b)("li",{parentName:"ul"},"run the following steps for your platform")),Object(i.b)("h3",{id:"android"},"Android"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"only the first time you run the project, you need to generate a debug key with:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cd android/app")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cd ../..")," to come back to the root folder"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn start")," to start the metro bundler, in a dedicated terminal"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn android")," to run the Android application (remember to start a simulator or connect an Android phone)")),Object(i.b)("h3",{id:"ios"},"iOS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cd ios")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pod install")," to install pod dependencies"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cd ..")," to come back to the root folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn start")," to start the metro bundler, in a dedicated terminal"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn ios")," to run the iOS application (remember to start a simulator or connect an iPhone phone)")))}p.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);