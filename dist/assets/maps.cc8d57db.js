import{S as e,i as a,s as t,e as s,f as l,q as i,h as n,k as r,j as o,n as p,l as d,p as c,r as m,c as f,m as y,t as u,a as w,d as g}from"./vendor.5504185e.js";const{document:v}=m;function T(e){let a,t,c,m;return{c(){a=s("script"),c=l(),m=s("div"),i(a.src,t="https://maps.googleapis.com/maps/api/js?key=YOUR__KEY_HERE")||n(a,"src","https://maps.googleapis.com/maps/api/js?key=YOUR__KEY_HERE"),n(m,"id","map-canvas"),n(m,"class","relative w-full rounded h-600-px"),n(m,"data-lat","40.748817"),n(m,"data-lng","-73.985428")},m(e,t){r(v.head,a),o(e,c,t),o(e,m,t)},p:p,i:p,o:p,d(e){d(a),e&&d(c),e&&d(m)}}}function h(e){return c((async()=>{let e=window.google,a=document.getElementById("map-canvas"),t=a.getAttribute("data-lat"),s=a.getAttribute("data-lng");const l=new e.maps.LatLng(t,s),i={zoom:12,scrollwheel:!1,center:l,mapTypeId:e.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#ed8936"},{visibility:"on"}]}]};a=new e.maps.Map(a,i);const n=new e.maps.Marker({position:l,map:a,animation:e.maps.Animation.DROP,title:"Hello World!"}),r=new e.maps.InfoWindow({content:'<div class="info-window-content"><h2>Notus Svelte</h2><p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>'});e.maps.event.addListener(n,"click",(function(){r.open(a,n)}))})),[]}class b extends e{constructor(e){super(),a(this,e,h,T,t,{})}}function x(e){let a,t,l,i,c;return i=new b({}),{c(){a=s("div"),t=s("div"),l=s("div"),f(i.$$.fragment),n(l,"class","relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"),n(t,"class","w-full px-4"),n(a,"class","flex flex-wrap")},m(e,s){o(e,a,s),r(a,t),r(t,l),y(i,l,null),c=!0},p:p,i(e){c||(u(i.$$.fragment,e),c=!0)},o(e){w(i.$$.fragment,e),c=!1},d(e){e&&d(a),g(i)}}}class A extends e{constructor(e){super(),a(this,e,null,x,t,{})}}export{A as default};