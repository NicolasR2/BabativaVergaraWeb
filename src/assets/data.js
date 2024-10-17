import { 
    faGavel, 
    faUserTie, 
    faShieldAlt, 
    faComments, 
    faMoneyBillWave, 
    faBalanceScale, 
    faWallet,
    faHandshake
  } from "@fortawesome/free-solid-svg-icons";
  import imgMateo from './/img/ImagenMateo.jpg'
  import imgBogota from './/img/ImagenBogota.jpg'
  import imgSeria from './/img/ImagenSeria.jpg'
  import logoBancoOccidente from './/img/LogoBancoOccidente2.png'
  import logoBancoDavivienda from './/img/LogoDavivienda2.png'
  import logoBancoBancoomeva from './/img/LogoBancoomeva2.png'

export const data = [
    {
        id: 1, title:"Babativa & Vergara", desc:"Abogados por profesion, pero tus amigos, consejeros y aliados por vocacion", imgUrl:imgMateo
    },
    {
        id: 0, title:"Cerca de usted", desc:"Con sede en Bogota D.C, pero con alcance a toda la tierra colombiana", imgUrl:imgBogota
        
    },
    {
        id: 2, title:"Profesionales", desc:"Contamos con años de trayectoria para brindarte la mejor experiencia y servicio", imgUrl:imgSeria
    }
];

export const partners = [

    {
        id:1, title:"Banco Occidente", logo:logoBancoOccidente, url:"https://www.bancodeoccidente.com.co/wps/portal/banco-de-occidente/bancodeoccidente/"
    },
    {
        id:2, title:"Banco Davivienda", logo:logoBancoDavivienda, url:"https://www.davivienda.com/wps/portal/personas/nuevo"
    },
    {
        id:3, title:"Banco Bancoomeva", logo:logoBancoBancoomeva, url:"https://www.bancoomeva.com.co/"
    }
];

export const services1 = [
    {
        id:1, icon:faUserTie, title:"Derecho laboral"
    },
    {
        id:2, icon:faMoneyBillWave, title:"Derecho Tributario"
    },
    {
        id:3, icon:faGavel, title:"Derecho administrativo"
    },
    {
        id:4, icon:faBalanceScale , title:"Derecho Civil,\n Familiar y Comercial"
    }
]

export const services2 = [

    {
        id:0, icon:faShieldAlt, title:"Superintendencias"
    },
    {
        id:1, icon:faComments, title:"Asesorías Jurídicas"
    },
    {
        id:2, icon:faWallet, title:"Administración y Cobro de Cartera"
    },
    {
        id:3, icon:faHandshake, title:"Prevención \ny Resolución de Controversias"
    }

]

export const areas = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {
        
    }
]


