(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){},32:function(e,a,t){e.exports=t(63)},40:function(e,a,t){},41:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(30),s=t.n(i),o=(t(40),[{image:"./assets/header-image-camera.jpg",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"./public/assets/camera-back.png",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"./assets/dome.png",caption:"C\xe1mara tipo Domo",description:"C\xe1mara de seguridad en forma semiesf\xe9rica para una vista panor\xe1mica"},{image:"./assets/gavin.png",caption:"Gavinete",description:"Dispositivo de seguridad para controlar acceso y proteger objetos de valor"},{image:"./assets/lacer.png",caption:"Barreras perimetrales",description:"Sistema de seguridad para prevenir acceso no autorizado"},{image:"./assets/card-segurtec.png",caption:"SegurTec",description:"Empresa de seguridad que ofrece soluciones de seguridad para hogares, empresas y propiedades"},{image:"./assets/connection.png",caption:"Nuestro esquema",description:" Diagrama que muestra la interconexi\xf3n de los componentes del sistema de seguridad"}]),c=(t(41),t(3)),l=(t(24),[{linkTo:"/index",caption:"Inicio"},{linkTo:"/about",caption:"Sobre Nosotros"},{linkTo:"/services",caption:"Servicios"}]),d=t(13),m=function(e){var a=e.linkto,t=e.caption;return r.a.createElement("li",{className:"nav-item  span-lg-12 span-xl-3 mt-3 mx-lg-2"},r.a.createElement(d.a,{activeclassname:"active",to:a,className:"nav-link text-center text-danger border rounded"},t))},u=t(31),p=t.n(u),g=(t(53),function(e){var a=e.isOpen,t=e.closeModal,i=Object(n.useState)(""),s=Object(c.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)(""),m=Object(c.a)(d,2),u=m[0],g=m[1],f=Object(n.useState)(""),E=Object(c.a)(f,2),v=E[0],h=E[1];return r.a.createElement(p.a,{className:"",isOpen:a,onRequestClose:t},r.a.createElement("div",{className:"modal-container w-100 h-100"},r.a.createElement("div",{className:"w-100 h-100"},r.a.createElement("div",{className:"modal-content w-100 h-100"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},r.a.createElement("span",null,"\xd7")),r.a.createElement("h2",{className:"modal-title"},"Cont\xe1ctenos")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Email:",o),console.log("Subject:",u),console.log("Message:",v),t()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",className:"form-control",value:o,onChange:function(e){l(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"subject"},"Asunto"),r.a.createElement("input",{type:"text",id:"subject",className:"form-control",value:u,onChange:function(e){g(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Mensaje"),r.a.createElement("textarea",{id:"message",className:"form-control",value:v,onChange:function(e){h(e.target.value)},required:!0})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Enviar"))))))}),f=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],i=a[1];return console.log("TopNav again"),r.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top"},r.a.createElement("div",{className:"container-fluid justify-content-center align-items-center"},r.a.createElement("ul",{className:"navbar-nav d-flex container-fluid justify-content-center"},l.map(function(e,a){var t=e.linkTo,n=e.caption;return r.a.createElement(m,{key:a,linkto:t,caption:n})}),r.a.createElement("button",{activeclassname:"active",className:"nav-link text-center text-danger border rounded",onClick:function(){i(!0)}},"Contacto"),r.a.createElement(g,{isOpen:t,closeModal:function(){i(!1)}}))))},E=(t(54),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"offcanvas offcanvas-start  sidebar-container  bg-light",id:"demo"},r.a.createElement("div",{className:"sidebar-header offcanvas-header row"},r.a.createElement("img",{className:"sidebar-logo",src:"./assets/logo01.png",alt:"App logo"}),r.a.createElement("button",{type:"button",className:"btn-close text-reset text-center col-12","data-bs-dismiss":"offcanvas"})),r.a.createElement("div",{className:"sidebar-items offcanvas-body "},r.a.createElement(f,null))))}),v=function(){var e=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){var e=function(){return r(window.innerWidth<1e3)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}();return console.log("Header again"),r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"company-img",src:"".concat(o[1].image),alt:"Company Logo"}),r.a.createElement("div",{className:"header-overlay"},r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:"header-texts"},r.a.createElement("span",{className:"header-text header-text-1"},"Suministro"),r.a.createElement("span",{className:"header-text header-text-2"},"Instalaci\xf3n"),r.a.createElement("span",{className:"header-text header-text-3"},"Mantenimiento")),r.a.createElement("h3",{className:"header-subtitle"},"NO DEJES QUE"," ",r.a.createElement("b",{className:"bold-text"},"LA INSEGURIDAD TE PREOCUPE")),r.a.createElement("h3",{className:"header-title"},r.a.createElement("b",{className:"bold-text"},"DEJANOS PROTEGER")," LO QUE M\xc1S TE IMPORTA"),r.a.createElement("p",{className:"header-description"},"Proteja su hogar o negocio con nuestros servicios \xa1Cont\xe1ctenos hoy mismo!"))),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"row navbar-container"},r.a.createElement("div",{className:"col text-end"},r.a.createElement("button",{className:"fa fa-bars btn text-danger",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#demo"})))):r.a.createElement("div",{className:"navbar-container"},r.a.createElement(f,null))))},h=function(){return console.log("Footer again"),r.a.createElement("div",{className:"footer bg-light rounded-1 border-top border-danger p-4 "},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h2",{className:"m-3 text-danger p-4 text-center "},"SegurTec S.U.R.L"),r.a.createElement("h3",{className:"text-center text-dark-emphasis"},"2023 Todos los derechos resevados"),r.a.createElement("p",{className:"text-center text-text-primary-emphasis"},"elnps"),r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100089365910937",className:"fa fa-facebook"}),r.a.createElement("a",{href:"#",className:"fa fa-twitter border"}),r.a.createElement("a",{href:"#",className:"fa fa-instagram"})))},b=t(1),y=function(){var e=Object(n.useState)({width:window.innerWidth,height:window.innerHeight}),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t},N=(t(55),function(e){var a=e.slides,t=e.interval,i=e.transition,s=e.captionPosition,o=e.alt,l=e.onError,d=Object(n.useState)(0),m=Object(c.a)(d,2),u=m[0],p=m[1],g=y();Object(n.useEffect)(function(){var e=setInterval(function(){p(function(e){return(e+1)%a.length})},t);return function(){return clearInterval(e)}},[t,a.length]);var f=g.width<375?{width:"100%",height:"75px"}:g.width>=375&&g.width<576?{width:"100%",height:"125px"}:g.width>=576&&g.width<992?{width:"100%",height:"200px"}:g.width>=992&&g.width<1200?{width:"100%",height:"250px"}:{width:"100%",height:"350px"},E=f.width,v=f.height;return r.a.createElement("div",{className:"slideshow mt-1 ",style:{width:E,height:v,position:"relative",overflow:"hidden"}},a.map(function(e,a){return r.a.createElement("img",{className:"",key:a,src:"".concat("",".").concat(e.image),alt:e.alt||o,style:{position:"absolute",top:0,left:0,opacity:u===a?1:0,transition:i,objectFit:"cover",width:E,height:v},onError:l})}),r.a.createElement("div",{className:"caption",style:{position:"absolute",bottom:"top"===s?"auto":0,top:"top"===s?0:"auto",left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",padding:"10px",textAlign:"center"}},a.map(function(e,a){return r.a.createElement("span",{key:a,className:"dot ".concat(u===a?"current":""),onClick:function(){return p(a)}})})),r.a.createElement("nav",{className:"prev",onClick:function(){p(function(e){return(e-1+a.length)%a.length})}},"\u276e"),r.a.createElement("nav",{className:"next",onClick:function(){p(function(e){return(e+1)%a.length})}},"\u276f"))});N.defaultProps={interval:3e3,transition:"opacity 1s ease-in-out",captionPosition:"bottom",width:"100%",height:"500px",onError:function(){}};var x=N,w=[{id:"",category:"",price:"",offerPrice:"",stocked:!1,inOffer:!1,image:"public/assets/products/toner-27-black.jpg",name:"",model:"",description:""},{id:"",category:"",price:"0.00",stocked:!0,image:"/assets/dome.png",name:"Domo exterior",model:"",description:"C\xe1mara de seguridad en forma semiesf\xe9rica para una vista panor\xe1mica"},{id:"",category:"",price:"0.00",stocked:!0,image:"/assets/camera-back.png",name:"C\xe1mara exterior",model:"",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{id:"",category:"",price:"0.00",stocked:!0,image:"/assets/dome.png",name:"Domo exterior",model:"",description:"C\xe1mara de seguridad en forma semiesf\xe9rica para una vista panor\xe1mica"},{id:"",category:"",price:"0.00",stocked:!0,image:"/assets/camera-back.png",name:"C\xe1mara exterior",model:"",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{id:"",category:"",price:"0.00",stocked:!0,image:"/assets/dome.png",name:"Domo exterior",model:"",description:"C\xe1mara de seguridad en forma semiesf\xe9rica para una vista panor\xe1mica"}],C={slides:[{image:"/assets/ADS/cardSegurtec.png",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/cabledivisor.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/fisheye.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/generador.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/glandulas.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/secure-home.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/probadores.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"},{image:"/assets/ADS/spy.jpg",id:"",price:"0.00",caption:"C\xe1mara exterior",description:"C\xe1mara de seguridad dise\xf1ada para resistir las condiciones clim\xe1ticas y para monitorear \xe1reas exteriores"}],interval:5e3,transition:"opacity 1s ease-in-out",captionPosition:"bottom",width:"100%",height:"100px",alt:w.caption,onError:function(){console.log("Error")}},S=function(){return console.log("All app again"),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(x,C),r.a.createElement(b.a,null),r.a.createElement("footer",null,r.a.createElement(h,null)))},j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Error Page"),r.a.createElement("p",null,"Oops! Something went wrong."))},O=(t(56),t(57),function(e){var a=e.Items,t=e.ItemTitle,n=e.ItemDescription;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item-header-container container-fluid-xl stiky-top-0 h-5 rounded-xl-5 pt-5"},r.a.createElement("section",{className:" item-header container-fluid p-4 bg-danger",key:"header"},r.a.createElement("div",{className:"item-overlay"},r.a.createElement("h1",{className:"item-title text-light "},t)),r.a.createElement("div",{className:"item-content"},r.a.createElement("h2",{className:"item-subtitle text-light fs-1"},n)))),r.a.createElement("div",{className:"row bg-light justify-content-center"},a.map(function(e,a){var t=e.image,n=e.caption,i=e.description;return r.a.createElement("section",{key:a,className:"item-section text-center rounded col-10 col-xl-5 p-5 m-3 animate__bounce"},r.a.createElement("div",{className:"item-item"},r.a.createElement("div",{className:"item-item-link mb-4 justify-content-center"},r.a.createElement("i",{className:"".concat(t," text-center"),"aria-hidden":"true"}),r.a.createElement("h1",{className:"text-danger h1"},n),r.a.createElement("p",{className:"text-secondary h4"},i)),r.a.createElement("button",{className:"btn btn-outline-danger services-btn"},"VER DETALLES")))})))}),k=(t(58),t(29),function(e){var a=e.items,t=Object(n.useState)(null),i=Object(c.a)(t,2),s=i[0],o=i[1];return r.a.createElement(r.a.Fragment,null,a.map(function(e,a){var t=e.caption,n=e.description;return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"accordion row d-flex align-items-center p-2 ".concat(s===a?"active":""),onClick:function(){return function(e){o(function(a){return a===e?null:e})}(a)}},r.a.createElement("p",{className:"text-left text-danger fs-2 col-11"},t),r.a.createElement("i",{className:" col-1 ".concat(s===a?" fa-solid fa-arrow-up fa-bounce fa-xl text-danger":"fa-solid fa-arrow-down fa-xl ")})),r.a.createElement("div",{className:"panel text-center animate__animated animate__backInLeft p-3 ".concat(s===a&&"accordion-active")},r.a.createElement("p",{className:"text-body fs-3"},n)),r.a.createElement("hr",null))}))}),z=t(65),q=t(66),I=t(67),A=(t(59),function(e){var a=e.number,t=e.caption,n=e.description;return r.a.createElement("div",{className:"item-container row px-5"},r.a.createElement("div",{className:"col-4 d-flex flex-column align-items-center"},r.a.createElement("div",{className:"road-number  circle h1"},a),r.a.createElement("div",{className:"road-line bg-danger rounded-5 h-100"})),r.a.createElement("div",{className:"contenido col-8 pt-3"},r.a.createElement("h2",{className:"item-caption"},t),r.a.createElement("p",{className:"item-description"},n)))}),T=function(e){var a=e.Items;e.image;return r.a.createElement(z.a,null,r.a.createElement(q.a,null,r.a.createElement("h1",{className:"road-container text-center p-x-4"},"Comprometidos con la excelencia"),r.a.createElement(I.a,{md:6},r.a.createElement("div",{className:"roadmap"},a.map(function(e,a){var t=e.caption,n=e.description;return r.a.createElement(A,{key:a,number:a+1,caption:t,description:n})}))),r.a.createElement(I.a,{md:6},r.a.createElement("div",{className:"roadmap-right h-100 p-5"},r.a.createElement("img",{className:"img-fluid",src:"./assets/Photos/camera-01.jpg",alt:"Imagen"})))))},L=[{image:"fa fa-camera",caption:"NUESTRA MISI\xd3N",description:"Fomentar y fortalecer la cultura de seguridad en los hogares, comercios, industrias e instituciones, con sistemas y servicios de seguridad electr\xf3nica integrales certificados por las entidades gubernamentales pertinentes y apoyados en nuestro personal altamente calificado y profesional."},{image:"fa fa-superpowers",caption:"NUESTRA VISI\xd3N",description:"Ser una de las empresas no estatales l\xedderes en innovaci\xf3n de sistemas y servicios integrales en seguridad y automatizaci\xf3n a nivel nacional, as\xed como introducir el uso de energ\xedas renovables y la actualizaci\xf3n de sistemas de infraestructura de redes de datos y comunicaciones dentro de nuestra cartera de negocios. Venta de equipos, partes y piezas electr\xf3nicas y de telecomunicaciones, as\xed como las reparaciones integrales de ordenadores y equipos perif\xe9ricos."},{image:"./assets/logo01.png",caption:"Comprometidos con la excelencia",description:"Trabajamos estrechamente con cada uno de nuestros clientes para entender sus necesidades y proporcionar soluciones de seguridad personalizadas y efectivas. Creemos en un enfoque consultivo, donde nos convertimos en sus socios de confianza en la protecci\xf3n de sus activos m\xe1s valiosos."}],D=[{image:"fa fa-camera",caption:"TECNOL\xd3GICA",description:"Integrar soluciones creativas con tecnolog\xeda de vanguardia para proteger tu negocio y hogar, satisfaciendo las necesidades de seguridad de nuestros clientes."},{image:"fa fa-superpowers",caption:"MERCADO",description:"Estar presente en todas las zonas del pa\xeds, ofreciendo servicios de seguridad confiables y de calidad para cada comunidad."},{image:"fa fa-superpowers",caption:"INFRAESTRUCTURA",description:"Mantener una infraestructura avanzada en sistemas de seguridad, adaptada a las necesidades y demandas en constante evoluci\xf3n de las empresas y los hogares."},{image:"fa fa-superpowers",caption:"PERSONAL",description:"Desarrollar a nuestro equipo de forma integral y continua, brindando felicidad y calidad en nuestro trabajo, fomentando un sentido de pertenencia y lealtad hacia nuestros clientes y logrando la acreditaci\xf3n total por las entidades reguladoras del estado."},{image:"fa fa-superpowers",caption:"FINANZAS",description:"Consolidar la rentabilidad y la estabilidad financiera, actuando con estricto cumplimiento de la ley y las normas que nos rigen, para brindar tranquilidad y confianza a nuestros clientes."}],R=[{image:"fa fa-camera",caption:"Suministro",description:"Proveemos una amplia gama de equipos y dispositivos de seguridad, como c\xe1maras de vigilancia, sistemas de alarma, sistemas de control de acceso, detectores de incendios, entre otros. La empresa se encarga de ofrecer soluciones adaptadas a las necesidades espec\xedficas de cada cliente, brindando productos de calidad y tecnolog\xeda avanzada para garantizar la seguridad de sus propiedades."},{image:"fa fa-superpowers",caption:"Instalaci\xf3n",description:"La instalaci\xf3n de sistemas de seguridad implica la implementaci\xf3n profesional de los equipos suministrados en las instalaciones del cliente. Los t\xe9cnicos capacitados se encargan de realizar la instalaci\xf3n de manera eficiente y segura, asegurando que todos los componentes est\xe9n correctamente conectados, configurados y funcionando de manera \xf3ptima. Se brinda especial atenci\xf3n a la ubicaci\xf3n estrat\xe9gica de las c\xe1maras, sensores y otros dispositivos para maximizar la cobertura y la efectividad del sistema de seguridad."},{image:"fa fa-american-sign-language-interpreting",caption:"Reconstrucci\xf3n",description:"En caso de que los sistemas de seguridad existentes est\xe9n da\xf1ados o se hayan vuelto obsoletos, el servicio de reconstrucci\xf3n se encarga de restaurar o modernizar dichos sistemas. Esto puede implicar la reparaci\xf3n de equipos defectuosos, la actualizaci\xf3n de componentes o la migraci\xf3n hacia soluciones m\xe1s avanzadas. La empresa de seguridad eval\xfaa y diagnostica los sistemas existentes para determinar la mejor manera de reconstruirlos, garantizando as\xed un funcionamiento \xf3ptimo y una mayor seguridad."}],P=function(){return console.log("Abouts again"),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{Items:R}),r.a.createElement(O,{Items:L,ItemTitle:"SegurTec",ItemDescription:"Acerca de Nosotros"}),r.a.createElement(k,{items:D}))},F=function(){return console.log("Offers again"),r.a.createElement("div",{className:"static-offer"},r.a.createElement("div",{className:"static-offer_top"},r.a.createElement("h1",null)),r.a.createElement("div",{className:"static-offer_middle"},r.a.createElement("div",{className:"static-offer_middle__left"},r.a.createElement("h2",null," TE OFRECEMOS")),r.a.createElement("div",{className:"static-offer_middle__right"},r.a.createElement("div",{className:"circle"},r.a.createElement("h1",{className:"circle-h1"},"KIT 100% CERTIFICADO")))),r.a.createElement("div",{className:"static-offer_bottom"},r.a.createElement("div",null,r.a.createElement("img",{src:o[0].image}),r.a.createElement("p",null,"C\xe1maras de Seguridad")),r.a.createElement("div",null,r.a.createElement("img",{src:o[3].image}),r.a.createElement("p",null,"Barreras perimetrales")),r.a.createElement("div",null,r.a.createElement("img",{src:o[2].image}),r.a.createElement("p",null,"Alarmas")),r.a.createElement("div",null,r.a.createElement("img",{src:o[1].image}),r.a.createElement("p",null,"Video Porteros"))))},M=function(){return console.log("MyModalComponent"),r.a.createElement("div",null,r.a.createElement("div",{className:"modal",id:"myModal"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title"},"Contactenos"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",{className:""},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo nemo laboriosam autem mollitia. Tenetur tempore, similique alias, reiciendis odio debitis nihil id labore excepturi rem aliquam voluptatum molestias veniam!")),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal"},"Cerrar"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal"},"Enviar"))))))},_=[{image:"fa fa-camera",caption:"Suministro",description:"Proveemos una amplia gama de equipos y dispositivos de seguridad, como c\xe1maras de vigilancia, sistemas de alarma, sistemas de control de acceso, detectores de incendios, entre otros. La empresa se encarga de ofrecer soluciones adaptadas a las necesidades espec\xedficas de cada cliente, brindando productos de calidad y tecnolog\xeda avanzada para garantizar la seguridad de sus propiedades."},{image:"fa fa-superpowers",caption:"Instalaci\xf3n",description:"La instalaci\xf3n de sistemas de seguridad implica la implementaci\xf3n profesional de los equipos suministrados en las instalaciones del cliente. Los t\xe9cnicos capacitados se encargan de realizar la instalaci\xf3n de manera eficiente y segura, asegurando que todos los componentes est\xe9n correctamente conectados, configurados y funcionando de manera \xf3ptima. Se brinda especial atenci\xf3n a la ubicaci\xf3n estrat\xe9gica de las c\xe1maras, sensores y otros dispositivos para maximizar la cobertura y la efectividad del sistema de seguridad."},{image:"fa fa-american-sign-language-interpreting",caption:"Reconstrucci\xf3n",description:"En caso de que los sistemas de seguridad existentes est\xe9n da\xf1ados o se hayan vuelto obsoletos, el servicio de reconstrucci\xf3n se encarga de restaurar o modernizar dichos sistemas. Esto puede implicar la reparaci\xf3n de equipos defectuosos, la actualizaci\xf3n de componentes o la migraci\xf3n hacia soluciones m\xe1s avanzadas. La empresa de seguridad eval\xfaa y diagnostica los sistemas existentes para determinar la mejor manera de reconstruirlos, garantizando as\xed un funcionamiento \xf3ptimo y una mayor seguridad."},{image:"fa fa-wrench",caption:"Ajuste y configuraci\xf3n",description:"El ajuste y configuraci\xf3n de sistemas de seguridad implica personalizar los par\xe1metros y las opciones de configuraci\xf3n de acuerdo a las necesidades espec\xedficas de cada cliente. Esto incluye la configuraci\xf3n de zonas de detecci\xf3n, horarios de activaci\xf3n, notificaciones, niveles de sensibilidad, entre otros ajustes seg\xfan los requerimientos particulares. La empresa de seguridad se asegura de que los sistemas est\xe9n adecuadamente configurados para brindar una protecci\xf3n \xf3ptima y adaptarse a las circunstancias espec\xedficas de cada instalaci\xf3n."},{image:"fa fa-wrench",caption:"Mantenimiento",description:"El servicio de mantenimiento de sistemas de seguridad se ocupa de la supervisi\xf3n regular, el mantenimiento preventivo y correctivo de los equipos y dispositivos de seguridad. Esto incluye la inspecci\xf3n peri\xf3dica, limpieza, pruebas de funcionamiento, reemplazo de bater\xedas, actualizaci\xf3n de firmware y soluci\xf3n de cualquier problema t\xe9cnico que pueda surgir. El objetivo es asegurar que los sistemas est\xe9n siempre en \xf3ptimas condiciones de funcionamiento y listos para responder eficazmente en caso de una situaci\xf3n de seguridad."},{image:"fa fa-wrench",caption:"Puesta en marcha",description:"La puesta en marcha implica realizar pruebas exhaustivas y verificar que todos los componentes del sistema de seguridad est\xe9n funcionando correctamente. Los t\xe9cnicos especializados realizan pruebas de integraci\xf3n, pruebas de conexi\xf3n, verificaci\xf3n de alarmas y pruebas de respuesta para garantizar que todo el sistema est\xe9 operativo y preparado para su implementaci\xf3n completa. La puesta en marcha tambi\xe9n puede incluir la capacitaci\xf3n b\xe1sica del personal del cliente sobre el uso y la operaci\xf3n del sistema de seguridad."},{image:"fa fa-wrench",caption:"Consultor\xeda de seguridad",description:"Ofrecemos servicios de consultor\xeda de seguridad para evaluar los riesgos y vulnerabilidades en las instalaciones de nuestros clientes. Nuestros expertos analizan detalladamente los entornos y proporcionan recomendaciones personalizadas para fortalecer la seguridad. Evaluamos los sistemas existentes, identificamos \xe1reas de mejora y desarrollamos estrategias para proteger las propiedades y los activos de nuestros clientes de manera efectiva."},{image:"fa fa-wrench",caption:"Control de acceso y gesti\xf3n de visitantes",description:"Implementamos sistemas de control de acceso y gesti\xf3n de visitantes para garantizar la seguridad en las instalaciones de nuestros clientes. Utilizamos tecnolog\xedas avanzadas, como tarjetas de identificaci\xf3n, lectores biom\xe9tricos y sistemas de registro de visitantes, para controlar y rastrear el acceso a \xe1reas restringidas. Esto ayuda a prevenir el acceso no autorizado y a mantener un registro preciso de las personas que ingresan y salen de las instalaciones."},{image:"fa fa-wrench",caption:"Capacitaci\xf3n en seguridad",description:"Ofrecemos programas de capacitaci\xf3n en seguridad para el personal de nuestros clientes. Nuestra capacitaci\xf3n aborda temas como la prevenci\xf3n de robos, la respuesta a emergencias, el manejo de situaciones de riesgo y la conciencia sobre la seguridad. Nuestros instructores altamente capacitados brindan conocimientos pr\xe1cticos y consejos para fomentar una cultura de seguridad en el lugar de trabajo y equipar a los empleados con las habilidades necesarias para actuar de manera segura en diversas situaciones."}],U=(t(61),function(){return console.log("Services"),r.a.createElement(O,{Items:_,ItemTitle:"SERVICIOS",ItemDescription:"Servicios que ofrecemos"})}),B=function(){console.log("Body again");return r.a.createElement("div",{className:" mt-xl-5"},r.a.createElement(M,null),r.a.createElement("div",{className:"card card1 text-center mx-2 my-0"}),r.a.createElement("div",{className:"card card2"},r.a.createElement(P,null)),r.a.createElement("div",{className:"card card3"},r.a.createElement(U,null)),r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"Articulo 2"),r.a.createElement("h5",null,"Titulo descripcion, ABR 21, 2023"),r.a.createElement("img",{src:o[5].image,alt:o[5].caption}),r.a.createElement("p",null,"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.")),r.a.createElement("div",{className:"card"},r.a.createElement(F,null)))},G=(t(62),function(e){var a=e.slides,t=e.interval,i=e.transition,s=e.captionPosition,o=e.width,l=e.height,d=e.alt,m=e.onError;console.log("Slideshow again");var u=Object(n.useState)(0),p=Object(c.a)(u,2),g=p[0],f=p[1];Object(n.useEffect)(function(){var e=setInterval(function(){f(function(e){return(e+1)%a.length})},t);return function(){return clearInterval(e)}},[t,a.length]);var E=a[g];return r.a.createElement("div",{className:"slideshow mt-4",style:{width:o,height:l,position:"relative",overflow:"hidden"}},a.map(function(e,a){return r.a.createElement("img",{key:a,src:"".concat("",".").concat(e.image),alt:e.alt||d,style:{position:"absolute",top:0,left:0,opacity:g===a?1:0,transition:i,objectFit:"cover",width:"100%",height:"100%"},onError:m})}),r.a.createElement("div",{className:"caption",style:{position:"absolute",bottom:"top"===s?"auto":0,top:"top"===s?0:"auto",left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",padding:"10px",textAlign:"center"}},r.a.createElement("h2",null,E.caption),r.a.createElement("p",null,E.description)))});G.defaultProps={interval:3e3,transition:"opacity 1s ease-in-out",captionPosition:"bottom",width:"100%",height:"500px",onError:function(){}};var V=G,J=function(e){var a=e.filterText,t=e.inStockOnly,n=e.onFilterTextChange,i=e.onInStockOnlyChange;return r.a.createElement("form",{className:"d-flex flex-column"},r.a.createElement("input",{className:"form form-control text-center rounded-5 bg-light",type:"text",value:a,placeholder:"Buscar...",onChange:function(e){return n(e.target.value)}}),r.a.createElement("label",null,r.a.createElement("div",{className:"d-flex align-item-center justify-content-end"},r.a.createElement("input",{className:"me-2",type:"checkbox",checked:t,onChange:function(e){return i(e.target.checked)}})," ",r.a.createElement("p",{className:"m-0 p-0"},"Mostrar solo productos en stock"))))},H=function(e){var a=e.product,t=a.model,n=a.stocked?a.name:r.a.createElement("span",{style:{color:"red"}},a.name);return r.a.createElement("tr",{className:"product-row border rounded-5 mt-1 "},r.a.createElement("td",{className:"product-name "},n),r.a.createElement("td",{className:"product-model "},t),r.a.createElement("td",{className:"product-price d-flex w-100 justify-content-end text-success"},a.price))},W=function(e){var a=e.category;return r.a.createElement("tr",{className:"w-100 text-center text-primary"},r.a.createElement("th",{colSpan:"2",className:""},a))},Q=function(e){var a=e.products,t=e.filterText,n=e.inStockOnly,i=[],s=null;return a.forEach(function(e){-1!==e.name.toLowerCase().indexOf(t.toLowerCase())&&(n&&!e.stocked||(e.category!==s&&i.push(r.a.createElement(W,{category:e.category,key:e.category})),i.push(r.a.createElement(H,{product:e,key:e.id})),s=e.category))}),r.a.createElement("table",{className:"w-100"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"bg-light w-100"},r.a.createElement("th",{className:"w-30 text-center text-danger"},"Producto"),r.a.createElement("th",{className:"w-30 text-center text-danger"},"Modelo"),r.a.createElement("th",{className:"w-3o text-center text-success"},"Precio"))),r.a.createElement("tbody",{key:a.id},i))},K=function(e){var a=e.products,t=Object(n.useState)(""),i=Object(c.a)(t,2),s=i[0],o=i[1],l=Object(n.useState)(!1),d=Object(c.a)(l,2),m=d[0],u=d[1];return r.a.createElement("div",{className:"main"},r.a.createElement(J,{filterText:s,inStockOnly:m,onFilterTextChange:o,onInStockOnlyChange:u}),r.a.createElement(Q,{products:a,filterText:s,inStockOnly:m}))},Z=function(){console.log("Aside again");var e=function(e){var a=e.method,t=e.url;console.log("fetch fetching");var r=Object(n.useState)({data:null,loading:!0,error:null}),i=Object(c.a)(r,2),s=i[0],o=i[1];return Object(n.useEffect)(function(){o({data:null,loading:!0,error:null}),fetch(t,{method:a}).then(function(e){return e.json()}).then(function(e){o({loading:!1,error:!1,data:e})}).catch(function(e){console.log(e),o({loading:!1,error:!0,data:null})})},[t]),s}({method:"GET",url:"https://segurtec-backend-production.up.railway.app/api/v1/products/"}),a=e.loading,t=e.data,i=e.error;console.log(i);var s={slides:w,interval:3e3,transition:"opacity 1s ease-in-out",captionPosition:"bottom",width:"auto",height:"350px",alt:w.caption,onError:function(){console.log("Error")}};return r.a.createElement("div",null,r.a.createElement("div",{className:"card card-offer mt-4"},r.a.createElement("h2",{className:"text-center text-danger"},"Ofertas"),r.a.createElement(V,s)),r.a.createElement("div",{className:"card"}),r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"text-center"},"\xdaltimos productos"),a?r.a.createElement("h4",{className:"alert alert-info text-center"},"Cargando productos"):i?r.a.createElement("h4",{className:"alert alert-danger text-center"},"Se ha producido un error al cargar los productos"):0===t.length?r.a.createElement("h4",{className:"alert alert-danger text-center"},"No hay productos disponibles"):r.a.createElement(K,{products:t})),r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,"S\xedguenos"),r.a.createElement("p",null,"Suministro \ud83d\uded2, Reparaci\xf3n \ud83d\ude91, Mantenimientos, sistemas de seguridad \ud83d\udcf9\ud83d\udea8, equipos de oficina \ud83d\udda8\ufe0f\ud83d\udda5\ufe0f\u2328\ufe0f\ud83d\uddb1\ufe0f\ud83d\udcbb, redes de datos, entre otros \ud83d\udc4d."," ")))},X=function(){return r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"body2 col-12 col-xl-8"},r.a.createElement(B,null)),r.a.createElement("div",{className:"aside2 col-12 col-xl-4"},r.a.createElement(Z,null)))},Y=Object(d.b)([{path:"/",element:r.a.createElement(S,null),errorElement:r.a.createElement(j,null),children:[{path:"/index",element:r.a.createElement(X,null)},{path:"/about",element:r.a.createElement(P,null)},{path:"/services",element:r.a.createElement(U,null)},{path:"/contact",element:r.a.createElement(M,null)}]}],{basename:"/SegurtecSURL"}),$=function(){return r.a.createElement(d.a,{to:"/"})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(b.c,{router:Y},r.a.createElement($,null)))}},[[32,1,2]]]);
//# sourceMappingURL=main.6389ef27.chunk.js.map