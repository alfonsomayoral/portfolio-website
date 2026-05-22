const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/KTX2Loader.DxCkVlRj.js","_astro/index.Brfk6Bdo.js","_astro/ScrollTrigger.6qCihK2t.js","_astro/router.B-sij-_X.js","_astro/visitedNews.BmN7K1ri.js"])))=>i.map(i=>d[i]);
import{g as Je}from"./index.Brfk6Bdo.js";import{S as Si}from"./ScrollTrigger.6qCihK2t.js";import{n as ad}from"./router.B-sij-_X.js";import{g as ld}from"./visitedNews.BmN7K1ri.js";const Oe={HOMEPAGE:"Homepage",TRADING:"Trading",CAPITAL:"Capital",MARITIME:"Maritime",FORT_ENERGY:"FortEnergy",WHO_WE_ARE:"WhoWeAre"},en=[Oe.HOMEPAGE,Oe.TRADING,Oe.CAPITAL,Oe.MARITIME,Oe.FORT_ENERGY],ln={[Oe.HOMEPAGE]:{HERO:"Hero",TOP_CHAPTERS:"TopChapters",WHO_WE_ARE:"WhoWeAre",WHAT_WE_DO:"WhatWeDo",GLOBAL_CONNECTIVITY:"GlobalConnectivity",SUSTAINABILITY:"Sustainability",SOLUTIONS:"Solutions",EQUALITY:"Equality",SOCIAL:"Social"},[Oe.TRADING]:{HERO:"Hero",TRADING_CHAPTER:"TradingChapter",OIL:"Oil",METALS:"Metals"},[Oe.CAPITAL]:{HERO:"Hero",CAPITAL_CHAPTER:"CapitalChapter"},[Oe.MARITIME]:{HERO:"Hero",MARITIME_CHAPTER:"MaritimeChapter"},[Oe.FORT_ENERGY]:{HERO:"Hero",FORT_ENERGY_CHAPTER:"FortEnergyChapter"},[Oe.WHO_WE_ARE]:{CORE_VALUES:"CoreValues",TEAM:"Team",DRIVING_FORCES:"DrivingForces"}},cd={textures:{noise:{path:"/assets/textures/noise.webp"},perlinNoise:{path:"/assets/textures/perlinNoise.webp"},noiseNormal:{path:"/assets/textures/noise-solid-normal.webp"},rockNormal:{path:"/assets/textures/rock_normal.webp"},voronoi:{path:"/assets/textures/voronoi.webp"}},envMaps:{envMap:{path:"/assets/textures/envmap-min.exr"}},models:{mountains:{path:"/assets/models/mountains.glb"}}},Fl={[Oe.HOMEPAGE]:{textures:{homepageLightmap:{path:"/assets/textures/homepage/homepage-lightmap.webp"},snowRockMix:{path:"/assets/textures/snowRockMix.webp"},snow:{path:"/assets/textures/homepage/snow_diffuse.webp"},snowyRock:{path:"/assets/textures/rock_diffuse.webp"}},envMaps:{},models:{homepage:{path:"/assets/models/homepage/Homepage.glb"}}},[Oe.TRADING]:{textures:{snow:{path:"/assets/textures/homepage/snow_diffuse.webp"},rock:{path:"/assets/textures/rock_diffuse.webp"},snowRockMix:{path:"/assets/textures/snowRockMix.webp"},tradingLightmap:{path:"/assets/textures/trading/trading-lightmap.webp"}},envMaps:{},models:{}},[Oe.CAPITAL]:{textures:{capitalLightmap:{path:"/assets/textures/capital/capital-lightmap.webp"},snowRockMix:{path:"/assets/textures/snowRockMix.webp"},grass:{path:"/assets/textures/grass_diffuse.webp"},snow:{path:"/assets/textures/homepage/snow_diffuse.webp"}},envMaps:{},models:{capital:{path:"/assets/models/capital/capital-min.glb"}}},[Oe.MARITIME]:{textures:{maritimeLightmap:{path:"/assets/textures/maritime/maritime-lightmap.webp"},grass:{path:"/assets/textures/grass_diffuse.webp"},rock:{path:"/assets/textures/rock_diffuse.webp"},waterNormal:{path:"/assets/textures/maritime/water-normal.webp"}},envMaps:{},models:{maritime:{path:"/assets/models/maritime/maritime.glb"}}},[Oe.FORT_ENERGY]:{textures:{},envMaps:{},models:{fortEnergy:{path:"/assets/models/fort-energy/fort-energy.glb"}}},[Oe.WHO_WE_ARE]:{textures:{},envMaps:{},models:{}}},ud={[Oe.HOMEPAGE]:{[ln[Oe.HOMEPAGE].HERO]:{textures:{},envMaps:{},models:{}},[ln[Oe.HOMEPAGE].TOP_CHAPTERS]:{textures:{},envMaps:{},models:{topChapters:{path:"/assets/models/homepage/TopChapters.glb"}}},[ln[Oe.HOMEPAGE].WHO_WE_ARE]:{textures:{},envMaps:{},models:{}},[ln[Oe.HOMEPAGE].WHAT_WE_DO]:{textures:{},envMaps:{},models:{whatWeDo:{path:"/assets/models/homepage/WhatWeDo.glb"}}},[ln[Oe.HOMEPAGE].GLOBAL_CONNECTIVITY]:{textures:{},envMaps:{},models:{earth:{path:"/assets/models/homepage/earth-min.glb",ktx2:!0}}},[ln[Oe.HOMEPAGE].SUSTAINABILITY]:{textures:{},envMaps:{},models:{sustainability:{path:"/assets/models/homepage/Sustainability-min.glb",ktx2:!0}}}},[Oe.TRADING]:{[ln[Oe.TRADING].HERO]:{textures:{},envMaps:{},models:{raycaster:{path:"/assets/models/trading/raycaster.glb"}}},[ln[Oe.TRADING].OIL]:{textures:{},models:{oilMetals:{path:"/assets/models/trading/oil-metals.glb"}},envMaps:{}},[ln[Oe.TRADING].METALS]:{textures:{},models:{oilMetals:{path:"/assets/models/trading/oil-metals.glb"}},envMaps:{}}},[Oe.MARITIME]:{[ln[Oe.MARITIME].MARITIME_CHAPTER]:{envMaps:{},textures:{},models:{boat:{path:"/assets/models/maritime/boat.glb"}}}},[Oe.CAPITAL]:{[ln[Oe.CAPITAL].CAPITAL_CHAPTER]:{envMaps:{},textures:{},models:{grassModel:{path:"/assets/models/capital/grass-min.glb"}}}},[Oe.FORT_ENERGY]:{[ln[Oe.FORT_ENERGY].FORT_ENERGY_CHAPTER]:{envMaps:{},models:{energyChapter:{path:"/assets/models/fort-energy/energy-chapter.glb"}},textures:{}}}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="169",hd=0,Ol=1,dd=2,wu=1,fd=2,qn=3,hn=0,rn=1,nn=2,yi=0,os=1,Ti=2,Bl=3,kl=4,Du=5,Li=100,pd=101,md=102,gd=103,vd=104,_d=200,xd=201,yd=202,Md=203,pa=204,ma=205,Sd=206,Td=207,Ed=208,bd=209,wd=210,Dd=211,Ad=212,Cd=213,Rd=214,ga=0,va=1,_a=2,ds=3,xa=4,ya=5,Ma=6,Sa=7,Au=0,Pd=1,Ud=2,Mi=0,Ld=1,Nd=2,Id=3,Fd=4,Od=5,Bd=6,kd=7,Vl="attached",Vd="detached",Cu=300,Fi=301,fs=302,to=303,no=304,nr=306,mt=1e3,En=1001,io=1002,kt=1003,Ru=1004,Ws=1005,Rt=1006,qr=1007,Pn=1008,ii=1009,Pu=1010,Uu=1011,Js=1012,ll=1013,Oi=1014,Zt=1015,Qn=1016,cl=1017,ul=1018,ps=1020,Lu=35902,Nu=1021,Iu=1022,un=1023,Fu=1024,Ou=1025,as=1026,ms=1027,fo=1028,hl=1029,Bu=1030,dl=1031,fl=1033,jr=33776,$r=33777,Kr=33778,Zr=33779,Ta=35840,Ea=35841,ba=35842,wa=35843,Da=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,Ua=37810,La=37811,Na=37812,Ia=37813,Fa=37814,Oa=37815,Ba=37816,ka=37817,Va=37818,za=37819,Ha=37820,Ga=37821,Jr=36492,Wa=36494,Xa=36495,ku=36283,Ya=36284,qa=36285,ja=36286,Qs=2300,er=2301,Mo=2302,zl=2400,Hl=2401,Gl=2402,zd=2500,Hd=0,Vu=1,$a=2,Gd=3200,Wd=3201,zu=0,Xd=1,Kn="",Kt="srgb",Pt="srgb-linear",pl="display-p3",po="display-p3-linear",so="linear",Mt="srgb",ro="rec709",oo="p3",Hi=7680,Wl=519,Yd=512,qd=513,jd=514,Hu=515,$d=516,Kd=517,Zd=518,Jd=519,Ka=35044,Xl="300 es",ei=2e3,ao=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Ys=Math.PI/180,gs=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function Qd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ef(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function tf(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function nf(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function of(i,e){return i+Math.floor(Math.random()*(e-i+1))}function af(i,e){return i+Math.random()*(e-i)}function lf(i){return i*(.5-Math.random())}function cf(i){i!==void 0&&(Yl=i);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uf(i){return i*Ys}function hf(i){return i*gs}function df(i){return(i&i-1)===0&&i!==0}function ff(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gf={DEG2RAD:Ys,RAD2DEG:gs,generateUUID:bn,clamp:Ut,euclideanModulo:ml,mapLinear:Qd,inverseLerp:ef,lerp:qs,damp:tf,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:of,randFloat:af,randFloatSpread:lf,seededRandom:cf,degToRad:uf,radToDeg:hf,isPowerOfTwo:df,ceilPowerOfTwo:ff,floorPowerOfTwo:pf,setQuaternionFromProperEuler:mf,normalize:_t,denormalize:Sn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],v=n[8],x=s[0],g=s[3],m=s[6],b=s[1],S=s[4],C=s[7],F=s[2],U=s[5],P=s[8];return r[0]=o*x+a*b+l*F,r[3]=o*g+a*S+l*U,r[6]=o*m+a*C+l*P,r[1]=c*x+u*b+h*F,r[4]=c*g+u*S+h*U,r[7]=c*m+u*C+h*P,r[2]=d*x+p*b+v*F,r[5]=d*g+p*S+v*U,r[8]=d*m+p*C+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,v=t*h+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new qe;function Gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){const i=tr("canvas");return i.style.display="block",i}const ql={};function Qr(i){i in ql||(ql[i]=!0,console.warn(i))}function _f(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function xf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jl=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$l=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Pt]:{transfer:so,primaries:ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:Mt,primaries:ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[po]:{transfer:so,primaries:oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($l),fromReference:i=>i.applyMatrix3(jl)},[pl]:{transfer:Mt,primaries:oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($l),fromReference:i=>i.applyMatrix3(jl).convertLinearToSRGB()}},Mf=new Set([Pt,po]),pt={enabled:!0,_workingColorSpace:Pt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Us[e].toReference,s=Us[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Us[i].primaries},getTransfer:function(i){return i===Kn?so:Us[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Us[e].luminanceCoefficients)}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class Sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=tr("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eo(s[o].image)):r.push(Eo(s[o]))}else r=Eo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;class Dt extends Ss{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=En,s=En,r=Rt,o=Pn,a=un,l=ii,c=Dt.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=bn(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mt:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mt:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Cu;Dt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,C=(p+1)/2,F=(m+1)/2,U=(u+d)/4,P=(h+x)/4,V=(v+g)/4;return S>C&&S>F?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=U/n,r=P/n):C>F?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=U/s,r=V/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=P/r,s=V/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-v)*(g-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-v)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bf extends Ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends bf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xu extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wf extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==v){let g=1-a;const m=l*d+c*p+u*v+h*x,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const F=Math.sqrt(S),U=Math.atan2(F,m*b);g=Math.sin(g*U)/F,a=Math.sin(a*U)/F}const C=a*b;if(l=l*g+d*C,c=c*g+p*C,u=u*g+v*C,h=h*g+x*C,g===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-a*p,e[t+2]=c*v+u*p+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new L,Kl=new Ei;class ri{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),gr.subVectors(this.max,Ls),Wi.subVectors(e.a,Ls),Xi.subVectors(e.b,Ls),Yi.subVectors(e.c,Ls),ci.subVectors(Xi,Wi),ui.subVectors(Yi,Xi),bi.subVectors(Wi,Yi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-bi.z,bi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,bi.z,0,-bi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-bi.y,bi.x,0];return!wo(t,Wi,Xi,Yi,gr)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Wi,Xi,Yi,gr))?!1:(vr.crossVectors(ci,ui),t=[vr.x,vr.y,vr.z],wo(t,Wi,Xi,Yi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,mr=new ri,Wi=new L,Xi=new L,Yi=new L,ci=new L,ui=new L,bi=new L,Ls=new L,gr=new L,vr=new L,wi=new L;function wo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Df=new ri,Ns=new L,Do=new L;class Fn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Do)),this.expandByPoint(Ns.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new L,Ao=new L,_r=new L,hi=new L,Co=new L,xr=new L,Ro=new L;class ir{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ao.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Ao);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=hi.dot(this.direction),l=-hi.dot(_r),c=hi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ao).addScaledVector(_r,d),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){Co.subVectors(t,e),xr.subVectors(n,e),Ro.crossVectors(Co,xr);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(xr.crossVectors(hi,xr));if(l<0)return null;const c=a*this.direction.dot(Co.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(Ro);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,v,x,g){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,v,x,g)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,v,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=v,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Cf)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),di.crossVectors(n,on),di.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),di.crossVectors(n,on)),di.normalize(),yr.crossVectors(on,di),s[0]=di.x,s[4]=yr.x,s[8]=on.x,s[1]=di.y,s[5]=yr.y,s[9]=on.y,s[2]=di.z,s[6]=yr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],v=n[2],x=n[6],g=n[10],m=n[14],b=n[3],S=n[7],C=n[11],F=n[15],U=s[0],P=s[4],V=s[8],te=s[12],y=s[1],A=s[5],Z=s[9],K=s[13],ee=s[2],le=s[6],z=s[10],se=s[14],$=s[3],W=s[7],ye=s[11],Me=s[15];return r[0]=o*U+a*y+l*ee+c*$,r[4]=o*P+a*A+l*le+c*W,r[8]=o*V+a*Z+l*z+c*ye,r[12]=o*te+a*K+l*se+c*Me,r[1]=u*U+h*y+d*ee+p*$,r[5]=u*P+h*A+d*le+p*W,r[9]=u*V+h*Z+d*z+p*ye,r[13]=u*te+h*K+d*se+p*Me,r[2]=v*U+x*y+g*ee+m*$,r[6]=v*P+x*A+g*le+m*W,r[10]=v*V+x*Z+g*z+m*ye,r[14]=v*te+x*K+g*se+m*Me,r[3]=b*U+S*y+C*ee+F*$,r[7]=b*P+S*A+C*le+F*W,r[11]=b*V+S*Z+C*z+F*ye,r[15]=b*te+S*K+C*se+F*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],g=e[11],m=e[15];return v*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+g*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],g=e[14],m=e[15],b=h*g*c-x*d*c+x*l*p-a*g*p-h*l*m+a*d*m,S=v*d*c-u*g*c-v*l*p+o*g*p+u*l*m-o*d*m,C=u*x*c-v*h*c+v*a*p-o*x*p-u*a*m+o*h*m,F=v*h*l-u*x*l-v*a*d+o*x*d+u*a*g-o*h*g,U=t*b+n*S+s*C+r*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/U;return e[0]=b*P,e[1]=(x*d*r-h*g*r-x*s*p+n*g*p+h*s*m-n*d*m)*P,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*m+n*l*m)*P,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*P,e[4]=S*P,e[5]=(u*g*r-v*d*r+v*s*p-t*g*p-u*s*m+t*d*m)*P,e[6]=(v*l*r-o*g*r-v*s*c+t*g*c+o*s*m-t*l*m)*P,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*P,e[8]=C*P,e[9]=(v*h*r-u*x*r-v*n*p+t*x*p+u*n*m-t*h*m)*P,e[10]=(o*x*r-v*a*r+v*n*c-t*x*c-o*n*m+t*a*m)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*P,e[12]=F*P,e[13]=(u*x*s-v*h*s+v*n*d-t*x*d-u*n*g+t*h*g)*P,e[14]=(v*a*s-o*x*s-v*n*l+t*x*l+o*n*g-t*a*g)*P,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,v=r*h,x=o*u,g=o*h,m=a*h,b=l*c,S=l*u,C=l*h,F=n.x,U=n.y,P=n.z;return s[0]=(1-(x+m))*F,s[1]=(p+C)*F,s[2]=(v-S)*F,s[3]=0,s[4]=(p-C)*U,s[5]=(1-(d+m))*U,s[6]=(g+b)*U,s[7]=0,s[8]=(v+S)*P,s[9]=(g-b)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ei){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,v;if(a===ei)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ao)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ei){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,p=(n+s)*u;let v,x;if(a===ei)v=(o+r)*h,x=-2*h;else if(a===ao)v=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new L,_n=new Ye,Af=new L(0,0,0),Cf=new L(1,1,1),di=new L,yr=new L,on=new L,Zl=new Ye,Jl=new Ei;class Yt{constructor(e=0,t=0,n=0,s=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rf=0;const Ql=new L,ji=new Ei,Gn=new Ye,Mr=new L,Is=new L,Pf=new L,Uf=new Ei,ec=new L(1,0,0),tc=new L(0,1,0),nc=new L(0,0,1),ic={type:"added"},Lf={type:"removed"},$i={type:"childadded",child:null},Po={type:"childremoved",child:null};class at extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new L,t=new Yt,n=new Ei,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Is,Mr,this.up):Gn.lookAt(Mr,Is,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Gn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}at.DEFAULT_UP=new L(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new L,Wn=new L,Uo=new L,Xn=new L,Ki=new L,Zi=new L,sc=new L,Lo=new L,No=new L,Io=new L,Fo=new gt,Oo=new gt,Bo=new gt;class Tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),Wn.subVectors(n,t),Uo.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Wn),l=xn.dot(Uo),c=Wn.dot(Wn),u=Wn.dot(Uo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fo,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(Bo,r.z),o}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Wn.subVectors(e,t),xn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,n),Zi.subVectors(r,n),Lo.subVectors(e,n);const l=Ki.dot(Lo),c=Zi.dot(Lo);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,s);const u=Ki.dot(No),h=Zi.dot(No);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ki,o);Io.subVectors(e,r);const p=Ki.dot(Io),v=Zi.dot(Io);if(v>=0&&p<=v)return t.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Zi,a);const g=u*v-p*h;if(g<=0&&h-u>=0&&p-v>=0)return sc.subVectors(r,s),a=(h-u)/(h-u+(p-v)),t.copy(s).addScaledVector(sc,a);const m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Ki,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=ml(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ko(o,r,e+1/3),this.g=ko(o,r,e),this.b=ko(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return pt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ut(Wt.r*255,0,255))*65536+Math.round(Ut(Wt.g*255,0,255))*256+Math.round(Ut(Wt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kt){pt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Sr);const n=qs(fi.h,Sr.h,t),s=qs(fi.s,Sr.s,t),r=qs(fi.l,Sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ce;ce.NAMES=Yu;let Nf=0;class Ln extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=os,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zn=If();function If(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ff(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ut(i,-65504,65504),Zn.floatView[0]=i;const e=Zn.uint32View[0],t=e>>23&511;return Zn.baseTable[t]+((e&8388607)>>Zn.shiftTable[t])}function Of(i){const e=i>>10;return Zn.uint32View[0]=Zn.mantissaTable[Zn.offsetTable[e]+(i&1023)]+Zn.exponentTable[e],Zn.floatView[0]}const rc={toHalfFloat:Ff,fromHalfFloat:Of},Ct=new L,Tr=new me;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class qu extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ju extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bf=0;const dn=new Ye,Vo=new at,Ji=new L,an=new ri,Fs=new ri,It=new L;class Qt extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?ju:qu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(an.min,Fs.min),an.expandByPoint(It),It.addVectors(an.max,Fs.max),an.expandByPoint(It)):(an.expandByPoint(Fs.min),an.expandByPoint(Fs.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),It.add(Ji)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<n.count;V++)a[V]=new L,l[V]=new L;const c=new L,u=new L,h=new L,d=new me,p=new me,v=new me,x=new L,g=new L;function m(V,te,y){c.fromBufferAttribute(n,V),u.fromBufferAttribute(n,te),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,V),p.fromBufferAttribute(r,te),v.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(d),v.sub(d);const A=1/(p.x*v.y-v.x*p.y);isFinite(A)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(A),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(A),a[V].add(x),a[te].add(x),a[y].add(x),l[V].add(g),l[te].add(g),l[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,te=b.length;V<te;++V){const y=b[V],A=y.start,Z=y.count;for(let K=A,ee=A+Z;K<ee;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const S=new L,C=new L,F=new L,U=new L;function P(V){F.fromBufferAttribute(s,V),U.copy(F);const te=a[V];S.copy(te),S.sub(F.multiplyScalar(F.dot(te))).normalize(),C.crossVectors(U,te);const A=C.dot(l[V])<0?-1:1;o.setXYZW(V,S.x,S.y,S.z,A)}for(let V=0,te=b.length;V<te;++V){const y=b[V],A=y.start,Z=y.count;for(let K=A,ee=A+Z;K<ee;K+=3)P(e.getX(K+0)),P(e.getX(K+1)),P(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let m=0;m<u;m++)d[v++]=c[p++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new Ye,Di=new ir,Er=new Fn,ac=new L,br=new L,wr=new L,Dr=new L,zo=new L,Ar=new L,lc=new L,Cr=new L;class Tt extends at{constructor(e=new Qt,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(zo.fromBufferAttribute(h,e),o?Ar.addScaledVector(zo,u):Ar.addScaledVector(zo.sub(t),u))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Er.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Er,ac)===null||Di.origin.distanceToSquared(ac)>(e.far-e.near)**2))&&(oc.copy(r).invert(),Di.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=o[g.materialIndex],b=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let C=b,F=S;C<F;C+=3){const U=a.getX(C),P=a.getX(C+1),V=a.getX(C+2);s=Rr(this,m,e,n,c,u,h,U,P,V),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){const b=a.getX(g),S=a.getX(g+1),C=a.getX(g+2);s=Rr(this,o,e,n,c,u,h,b,S,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=o[g.materialIndex],b=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let C=b,F=S;C<F;C+=3){const U=C,P=C+1,V=C+2;s=Rr(this,m,e,n,c,u,h,U,P,V),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){const b=g,S=g+1,C=g+2;s=Rr(this,o,e,n,c,u,h,b,S,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function kf(i,e,t,n,s,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===hn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Rr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,br),i.getVertexPosition(l,wr),i.getVertexPosition(c,Dr);const u=kf(i,e,t,n,br,wr,Dr,lc);if(u){const h=new L;Tn.getBarycoord(lc,br,wr,Dr,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,h,new me)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,h,new me)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(br,wr,Dr,d.normal),u.face=d,u.barycoord=h}return u}class sr extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function v(x,g,m,b,S,C,F,U,P,V,te){const y=C/P,A=F/V,Z=C/2,K=F/2,ee=U/2,le=P+1,z=V+1;let se=0,$=0;const W=new L;for(let ye=0;ye<z;ye++){const Me=ye*A-K;for(let Fe=0;Fe<le;Fe++){const ke=Fe*y-Z;W[x]=ke*b,W[g]=Me*S,W[m]=ee,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[m]=U>0?1:-1,u.push(W.x,W.y,W.z),h.push(Fe/P),h.push(1-ye/V),se+=1}}for(let ye=0;ye<V;ye++)for(let Me=0;Me<P;Me++){const Fe=d+Me+le*ye,ke=d+Me+le*(ye+1),Q=d+(Me+1)+le*(ye+1),ne=d+(Me+1)+le*ye;l.push(Fe,ke,ne),l.push(ke,Q,ne),$+=6}a.addGroup(p,$,te),p+=$,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function Vf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const zf={clone:vs,merge:$t};var Hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ot extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new L,cc=new me,uc=new me;class Ft extends Ku{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,es=1;class Wf extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(Qi,es,e,t);s.layers=this.layers,this.add(s);const r=new Ft(Qi,es,e,t);r.layers=this.layers,this.add(r);const o=new Ft(Qi,es,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Qi,es,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Qi,es,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Zu extends Dt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xf extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sr(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:yi});r.uniforms.tEquirect.value=t;const o=new Tt(s,r),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Rt),new Wf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ho=new L,Yf=new L,qf=new qe;class xi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ho.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Fn,Pr=new L;class vl{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],v=s[9],x=s[10],g=s[11],m=s[12],b=s[13],S=s[14],C=s[15];if(n[0].setComponents(l-r,d-c,g-p,C-m).normalize(),n[1].setComponents(l+r,d+c,g+p,C+m).normalize(),n[2].setComponents(l+o,d+u,g+v,C+b).normalize(),n[3].setComponents(l-o,d-u,g-v,C-b).normalize(),n[4].setComponents(l-a,d-h,g-x,C-S).normalize(),t===ei)n[5].setComponents(l+a,d+h,g+x,C+S).normalize();else if(t===ao)n[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Pr.x=s.normal.x>0?e.max.x:e.min.x,Pr.y=s.normal.y>0?e.max.y:e.min.y,Pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ju(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jf(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class oi extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],v=[],x=[],g=[];for(let m=0;m<u;m++){const b=m*d-o;for(let S=0;S<c;S++){const C=S*h-r;v.push(C,-b,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const S=b+c*m,C=b+c*(m+1),F=b+1+c*(m+1),U=b+1+c*m;p.push(S,C,U),p.push(C,F,U)}this.setIndex(p),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:$f,alphahash_pars_fragment:Kf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:Qf,alphatest_pars_fragment:ep,aomap_fragment:tp,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:up,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:vp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ep,colorspace_fragment:bp,colorspace_pars_fragment:wp,envmap_fragment:Dp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Pp,fog_vertex:Up,fog_pars_vertex:Lp,fog_fragment:Np,fog_pars_fragment:Ip,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:kp,lights_pars_begin:Vp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:Yp,lights_physical_pars_fragment:qp,lights_fragment_begin:jp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:om,morphinstance_vertex:am,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:um,morphtarget_vertex:hm,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Mm,opaque_fragment:Sm,packing:Tm,premultiplied_alpha_fragment:Em,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Dm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Um,shadowmask_pars_fragment:Lm,skinbase_vertex:Nm,skinning_pars_vertex:Im,skinning_vertex:Fm,skinnormal_vertex:Om,specularmap_fragment:Bm,specularmap_pars_fragment:km,tonemapping_fragment:Vm,tonemapping_pars_fragment:zm,transmission_fragment:Hm,transmission_pars_fragment:Gm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:Ym,worldpos_vertex:qm,background_vert:jm,background_frag:$m,backgroundCube_vert:Km,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Qm,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:og,linedashed_frag:ag,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:ug,meshlambert_frag:hg,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:vg,meshphysical_vert:_g,meshphysical_frag:xg,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:Sg,points_frag:Tg,shadow_vert:Eg,shadow_frag:bg,sprite_vert:wg,sprite_frag:Dg},Te={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Rn={basic:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ce(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ce(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([Te.points,Te.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([Te.common,Te.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([Te.sprite,Te.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:$t([Te.common,Te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:$t([Te.lights,Te.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Rn.physical={uniforms:$t([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ur={r:0,b:0,g:0},Ci=new Yt,Ag=new Ye;function Cg(i,e,t,n,s,r,o){const a=new ce(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function v(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1;const C=v(b);C===null?m(a,l):C&&C.isColor&&(m(C,1),S=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,S){const C=v(S);C&&(C.isCubeTexture||C.mapping===nr)?(u===void 0&&(u=new Tt(new sr(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:vs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ci.copy(S.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Ci)),u.material.toneMapped=pt.getTransfer(C.colorSpace)!==Mt,(h!==C||d!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Tt(new oi(2,2),new ot({name:"BackgroundMaterial",uniforms:vs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=pt.getTransfer(C.colorSpace)!==Mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(Ur,$u(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:g}}function Rg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,A,Z,K,ee){let le=!1;const z=h(K,Z,A);r!==z&&(r=z,c(r.object)),le=p(y,K,Z,ee),le&&v(y,K,Z,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,C(y,A,Z,K),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,A,Z){const K=Z.wireframe===!0;let ee=n[y.id];ee===void 0&&(ee={},n[y.id]=ee);let le=ee[A.id];le===void 0&&(le={},ee[A.id]=le);let z=le[K];return z===void 0&&(z=d(l()),le[K]=z),z}function d(y){const A=[],Z=[],K=[];for(let ee=0;ee<t;ee++)A[ee]=0,Z[ee]=0,K[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:Z,attributeDivisors:K,object:y,attributes:{},index:null}}function p(y,A,Z,K){const ee=r.attributes,le=A.attributes;let z=0;const se=Z.getAttributes();for(const $ in se)if(se[$].location>=0){const ye=ee[$];let Me=le[$];if(Me===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),ye===void 0||ye.attribute!==Me||Me&&ye.data!==Me.data)return!0;z++}return r.attributesNum!==z||r.index!==K}function v(y,A,Z,K){const ee={},le=A.attributes;let z=0;const se=Z.getAttributes();for(const $ in se)if(se[$].location>=0){let ye=le[$];ye===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor));const Me={};Me.attribute=ye,ye&&ye.data&&(Me.data=ye.data),ee[$]=Me,z++}r.attributes=ee,r.attributesNum=z,r.index=K}function x(){const y=r.newAttributes;for(let A=0,Z=y.length;A<Z;A++)y[A]=0}function g(y){m(y,0)}function m(y,A){const Z=r.newAttributes,K=r.enabledAttributes,ee=r.attributeDivisors;Z[y]=1,K[y]===0&&(i.enableVertexAttribArray(y),K[y]=1),ee[y]!==A&&(i.vertexAttribDivisor(y,A),ee[y]=A)}function b(){const y=r.newAttributes,A=r.enabledAttributes;for(let Z=0,K=A.length;Z<K;Z++)A[Z]!==y[Z]&&(i.disableVertexAttribArray(Z),A[Z]=0)}function S(y,A,Z,K,ee,le,z){z===!0?i.vertexAttribIPointer(y,A,Z,ee,le):i.vertexAttribPointer(y,A,Z,K,ee,le)}function C(y,A,Z,K){x();const ee=K.attributes,le=Z.getAttributes(),z=A.defaultAttributeValues;for(const se in le){const $=le[se];if($.location>=0){let W=ee[se];if(W===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const ye=W.normalized,Me=W.itemSize,Fe=e.get(W);if(Fe===void 0)continue;const ke=Fe.buffer,Q=Fe.type,ne=Fe.bytesPerElement,pe=Q===i.INT||Q===i.UNSIGNED_INT||W.gpuType===ll;if(W.isInterleavedBufferAttribute){const _e=W.data,Be=_e.stride,Ve=W.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<$.locationSize;ze++)m($.location+ze,_e.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<$.locationSize;ze++)g($.location+ze);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ze=0;ze<$.locationSize;ze++)S($.location+ze,Me/$.locationSize,Q,ye,Be*ne,(Ve+Me/$.locationSize*ze)*ne,pe)}else{if(W.isInstancedBufferAttribute){for(let _e=0;_e<$.locationSize;_e++)m($.location+_e,W.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let _e=0;_e<$.locationSize;_e++)g($.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let _e=0;_e<$.locationSize;_e++)S($.location+_e,Me/$.locationSize,Q,ye,Me*ne,Me/$.locationSize*_e*ne,pe)}}else if(z!==void 0){const ye=z[se];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv($.location,ye);break;case 3:i.vertexAttrib3fv($.location,ye);break;case 4:i.vertexAttrib4fv($.location,ye);break;default:i.vertexAttrib1fv($.location,ye)}}}}b()}function F(){V();for(const y in n){const A=n[y];for(const Z in A){const K=A[Z];for(const ee in K)u(K[ee].object),delete K[ee];delete A[Z]}delete n[y]}}function U(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const Z in A){const K=A[Z];for(const ee in K)u(K[ee].object),delete K[ee];delete A[Z]}delete n[y.id]}function P(y){for(const A in n){const Z=n[A];if(Z[y.id]===void 0)continue;const K=Z[y.id];for(const ee in K)u(K[ee].object),delete K[ee];delete Z[y.id]}}function V(){te(),o=!0,r!==s&&(r=s,c(r.object))}function te(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:te,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Pg(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x];for(let x=0;x<d.length;x++)t.update(v,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ug(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const V=P===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ii&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zt&&!V)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:C,vertexTextures:F,maxSamples:U}}function Lg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new xi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const b=r?0:n,S=b*4;let C=m.clippingState||null;l.value=C,C=u(v,d,S,p);for(let F=0;F!==S;++F)C[F]=t[F];m.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,v){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const m=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,C=p;S!==x;++S,C+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(g,C),g[C+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Ng(i){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Fi:a===no&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class mo extends Ku{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,hc=[.125,.215,.35,.446,.526,.582],Ni=20,Go=new mo,dc=new ce;let Wo=null,Xo=0,Yo=0,qo=!1;const Ui=(1+Math.sqrt(5))/2,ts=1/Ui,fc=[new L(-Ui,ts,0),new L(Ui,ts,0),new L(-ts,0,Ui),new L(ts,0,Ui),new L(0,Ui,-ts),new L(0,Ui,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,Yo),this._renderer.xr.enabled=qo,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Qn,format:un,colorSpace:Pt,depthBuffer:!1},s=pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(r)),this._blurMaterial=Fg(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,n,s){const a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(dc),u.toneMapping=Mi,u.autoClear=!1;const p=new Ii({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Tt(new sr,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(dc),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Lr(s,b*S,m>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fc[(s-r-1)%fc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),x=r/v,g=isFinite(r)?1+Math.floor(u*x):Ni;g>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ni}`);const m=[];let b=0;for(let P=0;P<Ni;++P){const V=P/x,te=Math.exp(-V*V/2);m.push(te),P===0?b+=te:P<g&&(b+=2*te)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const C=this._sizeLods[s],F=3*C*(s>S-is?s-S+is:0),U=4*(this._cubeSize-C);Lr(t,F,U,3*C,2*C),l.setRenderTarget(t),l.render(h,Go)}}function Ig(i){const e=[],t=[],n=[];let s=i;const r=i-is+1+hc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-is?l=hc[o-i+is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,g=2,m=1,b=new Float32Array(x*v*p),S=new Float32Array(g*v*p),C=new Float32Array(m*v*p);for(let U=0;U<p;U++){const P=U%3*2/3-1,V=U>2?0:-1,te=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];b.set(te,x*v*U),S.set(d,g*v*U);const y=[U,U,U,U,U,U];C.set(y,m*v*U)}const F=new Qt;F.setAttribute("position",new Ot(b,x)),F.setAttribute("uv",new Ot(S,g)),F.setAttribute("faceIndex",new Ot(C,m)),e.push(F),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pc(i,e,t){const n=new si(i,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fg(i,e,t){const n=new Float32Array(Ni),s=new L(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function mc(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function gc(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Og(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===to||l===no,u=l===Fi||l===fs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Za(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Za(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let S=0,C=b.length;S<C;S+=3){const F=b[S+0],U=b[S+1],P=b[S+2];d.push(F,U,U,P,P,F)}}else if(v!==void 0){const b=v.array;x=v.version;for(let S=0,C=b.length/3-1;S<C;S+=3){const F=S+0,U=S+1,P=S+2;d.push(F,U,U,P,P,F)}}else return;const g=new(Gu(d)?ju:qu)(d,1);g.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Vg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,d*o,v),t.update(p,n,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,v);let g=0;for(let m=0;m<v;m++)g+=p[m];t.update(g,n,1)}function h(d,p,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,v);let m=0;for(let b=0;b<v;b++)m+=p[b];for(let b=0;b<x.length;b++)t.update(m,n,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,e,t){const n=new WeakMap,s=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let te=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",te)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),v===!0&&(S=2),x===!0&&(S=3);let C=a.attributes.position.count*S,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const U=new Float32Array(C*F*4*h),P=new Xu(U,C,F,h);P.type=Zt,P.needsUpdate=!0;const V=S*4;for(let y=0;y<h;y++){const A=g[y],Z=m[y],K=b[y],ee=C*F*4*y;for(let le=0;le<A.count;le++){const z=le*V;p===!0&&(s.fromBufferAttribute(A,le),U[ee+z+0]=s.x,U[ee+z+1]=s.y,U[ee+z+2]=s.z,U[ee+z+3]=0),v===!0&&(s.fromBufferAttribute(Z,le),U[ee+z+4]=s.x,U[ee+z+5]=s.y,U[ee+z+6]=s.z,U[ee+z+7]=0),x===!0&&(s.fromBufferAttribute(K,le),U[ee+z+8]=s.x,U[ee+z+9]=s.y,U[ee+z+10]=s.z,U[ee+z+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new me(C,F)},n.set(a,d),a.addEventListener("dispose",te)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Qu extends Dt{constructor(e,t,n,s,r,o,a,l,c,u=as){if(u!==as&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===as&&(n=Oi),n===void 0&&u===ms&&(n=ps),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eh=new Dt,vc=new Qu(1,1),th=new Xu,nh=new wf,ih=new Zu,_c=[],xc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),Nt(t,n)}}function $g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),Nt(t,n)}}function Kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),Nt(t,n)}}function Zg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=Hu,r=vc):r=eh,t.setTexture2D(e||r,s)}function ov(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nh,s)}function av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ih,s)}function lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||th,s)}function cv(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return Yg;case 35666:return qg;case 35674:return jg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,e){i.uniform1fv(this.addr,e)}function hv(i,e){const t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function dv(i,e){const t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function fv(i,e){const t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function pv(i,e){const t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mv(i,e){const t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gv(i,e){const t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function xv(i,e){i.uniform3iv(this.addr,e)}function yv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function Sv(i,e){i.uniform2uiv(this.addr,e)}function Tv(i,e){i.uniform3uiv(this.addr,e)}function Ev(i,e){i.uniform4uiv(this.addr,e)}function bv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||eh,r[o])}function wv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nh,r[o])}function Dv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ih,r[o])}function Av(i,e,t){const n=this.cache,s=e.length,r=go(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||th,r[o])}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Av}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}}class Pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}}class Uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Tc(i,e){i.seq.push(e),i.map[e.id]=e}function Lv(i,e,t){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),o=jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tc(t,c===void 0?new Rv(a,i,e):new Pv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Uv(a),Tc(t,h)),t=h}}}class eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Lv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ec(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Nv=37297;let Iv=0;function Fv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ov(i){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i);let n;switch(e===t?n="":e===oo&&t===ro?n="LinearDisplayP3ToLinearSRGB":e===ro&&t===oo&&(n="LinearSRGBToLinearDisplayP3"),i){case Pt:case po:return[n,"LinearTransferOETF"];case Kt:case pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fv(i.getShaderSource(e),o)}else return s}function Bv(i,e){const t=Ov(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kv(i,e){let t;switch(e){case Ld:t="Linear";break;case Nd:t="Reinhard";break;case Id:t="Cineon";break;case Fd:t="ACESFilmic";break;case Bd:t="AgX";break;case kd:t="Neutral";break;case Od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new L;function Vv(){pt.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Hv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xs(i){return i!==""}function wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(Wv,Yv)}const Xv=new Map;function Yv(i,e){let t=Ze[e];if(t===void 0){const n=Xv.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(qv,jv)}function jv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $v(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case fs:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function Jv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Ud:e="ENVMAP_BLENDING_ADD";break}return e}function Qv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$v(t),c=Kv(t),u=Zv(t),h=Jv(t),d=Qv(t),p=zv(t),v=Hv(r),x=s.createProgram();let g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(g=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Mi?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Ja(o),o=wc(o,t),o=Dc(o,t),a=Ja(a),a=wc(a,t),a=Dc(a,t),o=Ac(o),a=Ac(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=b+g+o,C=b+m+a,F=Ec(s,s.VERTEX_SHADER,S),U=Ec(s,s.FRAGMENT_SHADER,C);s.attachShader(x,F),s.attachShader(x,U),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(A){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(x).trim(),K=s.getShaderInfoLog(F).trim(),ee=s.getShaderInfoLog(U).trim();let le=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,F,U);else{const se=bc(s,F,"vertex"),$=bc(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Z+`
`+se+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(K===""||ee==="")&&(z=!1);z&&(A.diagnostics={runnable:le,programLog:Z,vertexShader:{log:K,prefix:g},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(F),s.deleteShader(U),V=new eo(s,x),te=Gv(s,x)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let te;this.getAttributes=function(){return te===void 0&&P(this),te};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Nv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=U,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i0(e),t.set(e,n)),n}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function s0(i,e,t,n,s,r,o){const a=new gl,l=new n0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,A,Z,K,ee){const le=K.fog,z=ee.geometry,se=y.isMeshStandardMaterial?K.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||se),W=$&&$.mapping===nr?$.image.height:null,ye=x[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const Me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Fe=Me!==void 0?Me.length:0;let ke=0;z.morphAttributes.position!==void 0&&(ke=1),z.morphAttributes.normal!==void 0&&(ke=2),z.morphAttributes.color!==void 0&&(ke=3);let Q,ne,pe,_e;if(ye){const Ht=Rn[ye];Q=Ht.vertexShader,ne=Ht.fragmentShader}else Q=y.vertexShader,ne=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const Be=i.getRenderTarget(),Ve=ee.isInstancedMesh===!0,ze=ee.isBatchedMesh===!0,ht=!!y.map,et=!!y.matcap,O=!!$,Vt=!!y.aoMap,tt=!!y.lightMap,dt=!!y.bumpMap,Ge=!!y.normalMap,yt=!!y.displacementMap,Xe=!!y.emissiveMap,R=!!y.metalnessMap,w=!!y.roughnessMap,Y=y.anisotropy>0,oe=y.clearcoat>0,fe=y.dispersion>0,re=y.iridescence>0,Ne=y.sheen>0,Ee=y.transmission>0,Ae=Y&&!!y.anisotropyMap,nt=oe&&!!y.clearcoatMap,xe=oe&&!!y.clearcoatNormalMap,Pe=oe&&!!y.clearcoatRoughnessMap,We=re&&!!y.iridescenceMap,Ie=re&&!!y.iridescenceThicknessMap,Se=Ne&&!!y.sheenColorMap,it=Ne&&!!y.sheenRoughnessMap,He=!!y.specularMap,Ke=!!y.specularColorMap,B=!!y.specularIntensityMap,we=Ee&&!!y.transmissionMap,k=Ee&&!!y.thicknessMap,ae=!!y.gradientMap,be=!!y.alphaMap,De=y.alphaTest>0,lt=!!y.alphaHash,Et=!!y.extensions;let zt=Mi;y.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(zt=i.toneMapping);const ft={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:ne,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:ze,batchingColor:ze&&ee._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&ee.instanceColor!==null,instancingMorph:Ve&&ee.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Pt,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:et,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:W,aoMap:Vt,lightMap:tt,bumpMap:dt,normalMap:Ge,displacementMap:p&&yt,emissiveMap:Xe,normalMapObjectSpace:Ge&&y.normalMapType===Xd,normalMapTangentSpace:Ge&&y.normalMapType===zu,metalnessMap:R,roughnessMap:w,anisotropy:Y,anisotropyMap:Ae,clearcoat:oe,clearcoatMap:nt,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,dispersion:fe,iridescence:re,iridescenceMap:We,iridescenceThicknessMap:Ie,sheen:Ne,sheenColorMap:Se,sheenRoughnessMap:it,specularMap:He,specularColorMap:Ke,specularIntensityMap:B,transmission:Ee,transmissionMap:we,thicknessMap:k,gradientMap:ae,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:be,alphaTest:De,alphaHash:lt,combine:y.combine,mapUv:ht&&g(y.map.channel),aoMapUv:Vt&&g(y.aoMap.channel),lightMapUv:tt&&g(y.lightMap.channel),bumpMapUv:dt&&g(y.bumpMap.channel),normalMapUv:Ge&&g(y.normalMap.channel),displacementMapUv:yt&&g(y.displacementMap.channel),emissiveMapUv:Xe&&g(y.emissiveMap.channel),metalnessMapUv:R&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:Ae&&g(y.anisotropyMap.channel),clearcoatMapUv:nt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:it&&g(y.sheenRoughnessMap.channel),specularMapUv:He&&g(y.specularMap.channel),specularColorMapUv:Ke&&g(y.specularColorMap.channel),specularIntensityMapUv:B&&g(y.specularIntensityMap.channel),transmissionMapUv:we&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:be&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ge||Y),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!z.attributes.uv&&(ht||be),fog:!!le,useFog:y.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:ke,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function b(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Z in y.defines)A.push(Z),A.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(S(A,y),C(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function S(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function C(y,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),y.push(a.mask)}function F(y){const A=x[y.type];let Z;if(A){const K=Rn[A];Z=zf.clone(K.uniforms)}else Z=y.uniforms;return Z}function U(y,A){let Z;for(let K=0,ee=u.length;K<ee;K++){const le=u[K];if(le.cacheKey===A){Z=le,++Z.usedTimes;break}}return Z===void 0&&(Z=new e0(i,A,y,r),u.push(Z)),Z}function P(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function V(y){l.remove(y)}function te(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:F,acquireProgram:U,releaseProgram:P,releaseShaderCache:V,programs:u,dispose:te}}function r0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function o0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,v,x,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,p,v,x,g){const m=o(h,d,p,v,x,g);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(h,d,p,v,x,g){const m=o(h,d,p,v,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||o0),n.length>1&&n.sort(d||Rc),s.length>1&&s.sort(d||Rc)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function a0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Pc,i.set(n,[o])):s>=r.length?(o=new Pc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function l0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ce};break;case"SpotLight":t={position:new L,direction:new L,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function c0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let u0=0;function h0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d0(i){const e=new l0,t=c0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Ye,o=new Ye;function a(c){let u=0,h=0,d=0;for(let te=0;te<9;te++)n.probe[te].set(0,0,0);let p=0,v=0,x=0,g=0,m=0,b=0,S=0,C=0,F=0,U=0,P=0;c.sort(h0);for(let te=0,y=c.length;te<y;te++){const A=c[te],Z=A.color,K=A.intensity,ee=A.distance,le=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=Z.r*K,h+=Z.g*K,d+=Z.b*K;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],K);P++}else if(A.isDirectionalLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const se=A.shadow,$=t.get(A);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=le,n.directionalShadowMatrix[p]=A.shadow.matrix,b++}n.directional[p]=z,p++}else if(A.isSpotLight){const z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(Z).multiplyScalar(K),z.distance=ee,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[x]=z;const se=A.shadow;if(A.map&&(n.spotLightMap[F]=A.map,F++,se.updateMatrices(A),A.castShadow&&U++),n.spotLightMatrix[x]=se.matrix,A.castShadow){const $=t.get(A);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=le,C++}x++}else if(A.isRectAreaLight){const z=e.get(A);z.color.copy(Z).multiplyScalar(K),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=z,g++}else if(A.isPointLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const se=A.shadow,$=t.get(A);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,$.shadowCameraNear=se.camera.near,$.shadowCameraFar=se.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=le,n.pointShadowMatrix[v]=A.shadow.matrix,S++}n.point[v]=z,v++}else if(A.isHemisphereLight){const z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(K),z.groundColor.copy(A.groundColor).multiplyScalar(K),n.hemi[m]=z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const V=n.hash;(V.directionalLength!==p||V.pointLength!==v||V.spotLength!==x||V.rectAreaLength!==g||V.hemiLength!==m||V.numDirectionalShadows!==b||V.numPointShadows!==S||V.numSpotShadows!==C||V.numSpotMaps!==F||V.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=C+F-U,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,V.directionalLength=p,V.pointLength=v,V.spotLength=x,V.rectAreaLength=g,V.hemiLength=m,V.numDirectionalShadows=b,V.numPointShadows=S,V.numSpotShadows=C,V.numSpotMaps=F,V.numLightProbes=P,n.version=u0++)}function l(c,u){let h=0,d=0,p=0,v=0,x=0;const g=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const S=c[m];if(S.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),h++}else if(S.isSpotLight){const C=n.spot[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const C=n.rectArea[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const C=n.point[d];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const C=n.hemi[x];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Uc(i){const e=new d0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function f0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Uc(i),e.set(s,[a])):r>=o.length?(a=new Uc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class p0 extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m0 extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _0(i,e,t){let n=new vl;const s=new me,r=new me,o=new gt,a=new p0({depthPacking:Wd}),l=new m0,c={},u=t.maxTextureSize,h={[hn]:rn,[rn]:hn,[nn]:nn},d=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:g0,fragmentShader:v0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Qt;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tt(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let m=this.type;this.render=function(U,P,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;const te=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(yi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=m!==qn&&this.type===qn,ee=m===qn&&this.type!==qn;for(let le=0,z=U.length;le<z;le++){const se=U[le],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const W=$.getFrameExtents();if(s.multiply(W),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,$.mapSize.y=r.y)),$.map===null||K===!0||ee===!0){const Me=this.type!==qn?{minFilter:kt,magFilter:kt}:{};$.map!==null&&$.map.dispose(),$.map=new si(s.x,s.y,Me),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ye=$.getViewportCount();for(let Me=0;Me<ye;Me++){const Fe=$.getViewport(Me);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),Z.viewport(o),$.updateMatrices(se,Me),n=$.getFrustum(),C(P,V,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===qn&&b($,V),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(te,y,A)};function b(U,P){const V=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(P,null,V,d,x,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(P,null,V,p,x,null)}function S(U,P,V,te){let y=null;const A=V.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(A!==void 0)y=A;else if(y=V.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Z=y.uuid,K=P.uuid;let ee=c[Z];ee===void 0&&(ee={},c[Z]=ee);let le=ee[K];le===void 0&&(le=y.clone(),ee[K]=le,P.addEventListener("dispose",F)),y=le}if(y.visible=P.visible,y.wireframe=P.wireframe,te===qn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Z=i.properties.get(y);Z.light=V}return y}function C(U,P,V,te,y){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&y===qn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,U.matrixWorld);const K=e.update(U),ee=U.material;if(Array.isArray(ee)){const le=K.groups;for(let z=0,se=le.length;z<se;z++){const $=le[z],W=ee[$.materialIndex];if(W&&W.visible){const ye=S(U,W,te,y);U.onBeforeShadow(i,U,P,V,K,ye,$),i.renderBufferDirect(V,null,K,ye,U,$),U.onAfterShadow(i,U,P,V,K,ye,$)}}}else if(ee.visible){const le=S(U,ee,te,y);U.onBeforeShadow(i,U,P,V,K,le,null),i.renderBufferDirect(V,null,K,le,U,null),U.onAfterShadow(i,U,P,V,K,le,null)}}const Z=U.children;for(let K=0,ee=Z.length;K<ee;K++)C(Z[K],P,V,te,y)}function F(U){U.target.removeEventListener("dispose",F);for(const V in c){const te=c[V],y=U.target.uuid;y in te&&(te[y].dispose(),delete te[y])}}}const x0={[ga]:va,[_a]:Ma,[xa]:Sa,[ds]:ya,[va]:ga,[Ma]:_a,[Sa]:xa,[ya]:ds};function y0(i){function e(){let B=!1;const we=new gt;let k=null;const ae=new gt(0,0,0,0);return{setMask:function(be){k!==be&&!B&&(i.colorMask(be,be,be,be),k=be)},setLocked:function(be){B=be},setClear:function(be,De,lt,Et,zt){zt===!0&&(be*=Et,De*=Et,lt*=Et),we.set(be,De,lt,Et),ae.equals(we)===!1&&(i.clearColor(be,De,lt,Et),ae.copy(we))},reset:function(){B=!1,k=null,ae.set(-1,0,0,0)}}}function t(){let B=!1,we=!1,k=null,ae=null,be=null;return{setReversed:function(De){we=De},setTest:function(De){De?pe(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(De){k!==De&&!B&&(i.depthMask(De),k=De)},setFunc:function(De){if(we&&(De=x0[De]),ae!==De){switch(De){case ga:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=De}},setLocked:function(De){B=De},setClear:function(De){be!==De&&(i.clearDepth(De),be=De)},reset:function(){B=!1,k=null,ae=null,be=null}}}function n(){let B=!1,we=null,k=null,ae=null,be=null,De=null,lt=null,Et=null,zt=null;return{setTest:function(ft){B||(ft?pe(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ft){we!==ft&&!B&&(i.stencilMask(ft),we=ft)},setFunc:function(ft,Ht,mn){(k!==ft||ae!==Ht||be!==mn)&&(i.stencilFunc(ft,Ht,mn),k=ft,ae=Ht,be=mn)},setOp:function(ft,Ht,mn){(De!==ft||lt!==Ht||Et!==mn)&&(i.stencilOp(ft,Ht,mn),De=ft,lt=Ht,Et=mn)},setLocked:function(ft){B=ft},setClear:function(ft){zt!==ft&&(i.clearStencil(ft),zt=ft)},reset:function(){B=!1,we=null,k=null,ae=null,be=null,De=null,lt=null,Et=null,zt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,v=!1,x=null,g=null,m=null,b=null,S=null,C=null,F=null,U=new ce(0,0,0),P=0,V=!1,te=null,y=null,A=null,Z=null,K=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,z=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(se)[1]),le=z>=1):se.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),le=z>=2);let $=null,W={};const ye=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Fe=new gt().fromArray(ye),ke=new gt().fromArray(Me);function Q(B,we,k,ae){const be=new Uint8Array(4),De=i.createTexture();i.bindTexture(B,De),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<k;lt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(we+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return De}const ne={};ne[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),r.setFunc(ds),tt(!1),dt(Ol),pe(i.CULL_FACE),O(yi);function pe(B){c[B]!==!0&&(i.enable(B),c[B]=!0)}function _e(B){c[B]!==!1&&(i.disable(B),c[B]=!1)}function Be(B,we){return u[B]!==we?(i.bindFramebuffer(B,we),u[B]=we,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ve(B,we){let k=d,ae=!1;if(B){k=h.get(we),k===void 0&&(k=[],h.set(we,k));const be=B.textures;if(k.length!==be.length||k[0]!==i.COLOR_ATTACHMENT0){for(let De=0,lt=be.length;De<lt;De++)k[De]=i.COLOR_ATTACHMENT0+De;k.length=be.length,ae=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,ae=!0);ae&&i.drawBuffers(k)}function ze(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const ht={[Li]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};ht[gd]=i.MIN,ht[vd]=i.MAX;const et={[_d]:i.ZERO,[xd]:i.ONE,[yd]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[wd]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Dd]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,we,k,ae,be,De,lt,Et,zt,ft){if(B===yi){v===!0&&(_e(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),B!==Du){if(B!==x||ft!==V){if((g!==Li||S!==Li)&&(i.blendEquation(i.FUNC_ADD),g=Li,S=Li),ft)switch(B){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,b=null,C=null,F=null,U.set(0,0,0),P=0,x=B,V=ft}return}be=be||we,De=De||k,lt=lt||ae,(we!==g||be!==S)&&(i.blendEquationSeparate(ht[we],ht[be]),g=we,S=be),(k!==m||ae!==b||De!==C||lt!==F)&&(i.blendFuncSeparate(et[k],et[ae],et[De],et[lt]),m=k,b=ae,C=De,F=lt),(Et.equals(U)===!1||zt!==P)&&(i.blendColor(Et.r,Et.g,Et.b,zt),U.copy(Et),P=zt),x=B,V=!1}function Vt(B,we){B.side===nn?_e(i.CULL_FACE):pe(i.CULL_FACE);let k=B.side===rn;we&&(k=!k),tt(k),B.blending===os&&B.transparent===!1?O(yi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const ae=B.stencilWrite;o.setTest(ae),ae&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),yt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(B){te!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),te=B)}function dt(B){B!==hd?(pe(i.CULL_FACE),B!==y&&(B===Ol?i.cullFace(i.BACK):B===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),y=B}function Ge(B){B!==A&&(le&&i.lineWidth(B),A=B)}function yt(B,we,k){B?(pe(i.POLYGON_OFFSET_FILL),(Z!==we||K!==k)&&(i.polygonOffset(we,k),Z=we,K=k)):_e(i.POLYGON_OFFSET_FILL)}function Xe(B){B?pe(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+ee-1),$!==B&&(i.activeTexture(B),$=B)}function w(B,we,k){k===void 0&&($===null?k=i.TEXTURE0+ee-1:k=$);let ae=W[k];ae===void 0&&(ae={type:void 0,texture:void 0},W[k]=ae),(ae.type!==B||ae.texture!==we)&&($!==k&&(i.activeTexture(k),$=k),i.bindTexture(B,we||ne[B]),ae.type=B,ae.texture=we)}function Y(){const B=W[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){Fe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Fe.copy(B))}function Se(B){ke.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ke.copy(B))}function it(B,we){let k=l.get(we);k===void 0&&(k=new WeakMap,l.set(we,k));let ae=k.get(B);ae===void 0&&(ae=i.getUniformBlockIndex(we,B.name),k.set(B,ae))}function He(B,we){const ae=l.get(we).get(B);a.get(we)!==ae&&(i.uniformBlockBinding(we,ae,B.__bindingPointIndex),a.set(we,ae))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,W={},u={},h=new WeakMap,d=[],p=null,v=!1,x=null,g=null,m=null,b=null,S=null,C=null,F=null,U=new ce(0,0,0),P=0,V=!1,te=null,y=null,A=null,Z=null,K=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pe,disable:_e,bindFramebuffer:Be,drawBuffers:Ve,useProgram:ze,setBlending:O,setMaterial:Vt,setFlipSided:tt,setCullFace:dt,setLineWidth:Ge,setPolygonOffset:yt,setScissorTest:Xe,activeTexture:R,bindTexture:w,unbindTexture:Y,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Pe,texImage3D:We,updateUBOMapping:it,uniformBlockBinding:He,texStorage2D:nt,texStorage3D:xe,texSubImage2D:re,texSubImage3D:Ne,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ae,scissor:Ie,viewport:Se,reset:Ke}}function Lc(i,e,t,n){const s=M0(n);switch(t){case Nu:return i*e;case Fu:return i*e;case Ou:return i*e*2;case fo:return i*e/s.components*s.byteLength;case hl:return i*e/s.components*s.byteLength;case Bu:return i*e*2/s.components*s.byteLength;case dl:return i*e*2/s.components*s.byteLength;case Iu:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case fl:return i*e*4/s.components*s.byteLength;case jr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(e,8)/4;case Ta:case ba:return Math.max(i,8)*Math.max(e,8)/2;case Da:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jr:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ku:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(i){switch(i){case ii:case Pu:return{byteLength:1,components:1};case Js:case Uu:case Qn:return{byteLength:2,components:1};case cl:case ul:return{byteLength:2,components:4};case Oi:case ll:case Zt:return{byteLength:4,components:1};case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function S0(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return p?new OffscreenCanvas(R,w):tr("canvas")}function x(R,w,Y){let oe=1;const fe=Xe(R);if((fe.width>Y||fe.height>Y)&&(oe=Y/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(oe*fe.width),Ne=Math.floor(oe*fe.height);h===void 0&&(h=v(re,Ne));const Ee=w?v(re,Ne):h;return Ee.width=re,Ee.height=Ne,Ee.getContext("2d").drawImage(R,0,0,re,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+re+"x"+Ne+")."),Ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==kt&&R.minFilter!==Rt}function m(R){i.generateMipmap(R)}function b(R,w,Y,oe,fe=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=w;if(w===i.RED&&(Y===i.FLOAT&&(re=i.R32F),Y===i.HALF_FLOAT&&(re=i.R16F),Y===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(re=i.R8UI),Y===i.UNSIGNED_SHORT&&(re=i.R16UI),Y===i.UNSIGNED_INT&&(re=i.R32UI),Y===i.BYTE&&(re=i.R8I),Y===i.SHORT&&(re=i.R16I),Y===i.INT&&(re=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(re=i.RG32F),Y===i.HALF_FLOAT&&(re=i.RG16F),Y===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(re=i.RG8UI),Y===i.UNSIGNED_SHORT&&(re=i.RG16UI),Y===i.UNSIGNED_INT&&(re=i.RG32UI),Y===i.BYTE&&(re=i.RG8I),Y===i.SHORT&&(re=i.RG16I),Y===i.INT&&(re=i.RG32I)),w===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(re=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(re=i.RGB16UI),Y===i.UNSIGNED_INT&&(re=i.RGB32UI),Y===i.BYTE&&(re=i.RGB8I),Y===i.SHORT&&(re=i.RGB16I),Y===i.INT&&(re=i.RGB32I)),w===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),Y===i.UNSIGNED_INT&&(re=i.RGBA32UI),Y===i.BYTE&&(re=i.RGBA8I),Y===i.SHORT&&(re=i.RGBA16I),Y===i.INT&&(re=i.RGBA32I)),w===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),w===i.RGBA){const Ne=fe?so:pt.getTransfer(oe);Y===i.FLOAT&&(re=i.RGBA32F),Y===i.HALF_FLOAT&&(re=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(re=Ne===Mt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(R,w){let Y;return R?w===null||w===Oi||w===ps?Y=i.DEPTH24_STENCIL8:w===Zt?Y=i.DEPTH32F_STENCIL8:w===Js&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Oi||w===ps?Y=i.DEPTH_COMPONENT24:w===Zt?Y=i.DEPTH_COMPONENT32F:w===Js&&(Y=i.DEPTH_COMPONENT16),Y}function C(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==Rt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function F(R){const w=R.target;w.removeEventListener("dispose",F),P(w),w.isVideoTexture&&u.delete(w)}function U(R){const w=R.target;w.removeEventListener("dispose",U),te(w)}function P(R){const w=n.get(R);if(w.__webglInit===void 0)return;const Y=R.source,oe=d.get(Y);if(oe){const fe=oe[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&V(R),Object.keys(oe).length===0&&d.delete(Y)}n.remove(R)}function V(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const Y=R.source,oe=d.get(Y);delete oe[w.__cacheKey],o.memory.textures--}function te(R){const w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let fe=0;fe<w.__webglFramebuffer[oe].length;fe++)i.deleteFramebuffer(w.__webglFramebuffer[oe][fe]);else i.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[oe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=R.textures;for(let oe=0,fe=Y.length;oe<fe;oe++){const re=n.get(Y[oe]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(Y[oe])}n.remove(R)}let y=0;function A(){y=0}function Z(){const R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function K(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function ee(R,w){const Y=n.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,R,w);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function le(R,w){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){ke(Y,R,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function z(R,w){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){ke(Y,R,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function se(R,w){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Q(Y,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}const $={[mt]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},W={[kt]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},ye={[Yd]:i.NEVER,[Jd]:i.ALWAYS,[qd]:i.LESS,[Hu]:i.LEQUAL,[jd]:i.EQUAL,[Zd]:i.GEQUAL,[$d]:i.GREATER,[Kd]:i.NOTEQUAL};function Me(R,w){if(w.type===Zt&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rt||w.magFilter===qr||w.magFilter===Ws||w.magFilter===Pn||w.minFilter===Rt||w.minFilter===qr||w.minFilter===Ws||w.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,W[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,W[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kt||w.minFilter!==Ws&&w.minFilter!==Pn||w.type===Zt&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(R,w){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",F));const oe=w.source;let fe=d.get(oe);fe===void 0&&(fe={},d.set(oe,fe));const re=K(w);if(re!==R.__cacheKey){fe[re]===void 0&&(fe[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),fe[re].usedTimes++;const Ne=fe[R.__cacheKey];Ne!==void 0&&(fe[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&V(w)),R.__cacheKey=re,R.__webglTexture=fe[re].texture}return Y}function ke(R,w,Y){let oe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=i.TEXTURE_3D);const fe=Fe(R,w),re=w.source;t.bindTexture(oe,R.__webglTexture,i.TEXTURE0+Y);const Ne=n.get(re);if(re.version!==Ne.__version||fe===!0){t.activeTexture(i.TEXTURE0+Y);const Ee=pt.getPrimaries(pt.workingColorSpace),Ae=w.colorSpace===Kn?null:pt.getPrimaries(w.colorSpace),nt=w.colorSpace===Kn||Ee===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let xe=x(w.image,!1,s.maxTextureSize);xe=yt(w,xe);const Pe=r.convert(w.format,w.colorSpace),We=r.convert(w.type);let Ie=b(w.internalFormat,Pe,We,w.colorSpace,w.isVideoTexture);Me(oe,w);let Se;const it=w.mipmaps,He=w.isVideoTexture!==!0,Ke=Ne.__version===void 0||fe===!0,B=re.dataReady,we=C(w,xe);if(w.isDepthTexture)Ie=S(w.format===ms,w.type),Ke&&(He?t.texStorage2D(i.TEXTURE_2D,1,Ie,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Pe,We,null));else if(w.isDataTexture)if(it.length>0){He&&Ke&&t.texStorage2D(i.TEXTURE_2D,we,Ie,it[0].width,it[0].height);for(let k=0,ae=it.length;k<ae;k++)Se=it[k],He?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Se.width,Se.height,Pe,We,Se.data):t.texImage2D(i.TEXTURE_2D,k,Ie,Se.width,Se.height,0,Pe,We,Se.data);w.generateMipmaps=!1}else He?(Ke&&t.texStorage2D(i.TEXTURE_2D,we,Ie,xe.width,xe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,Pe,We,xe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Pe,We,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ie,it[0].width,it[0].height,xe.depth);for(let k=0,ae=it.length;k<ae;k++)if(Se=it[k],w.format!==un)if(Pe!==null)if(He){if(B)if(w.layerUpdates.size>0){const be=Lc(Se.width,Se.height,w.format,w.type);for(const De of w.layerUpdates){const lt=Se.data.subarray(De*be/Se.data.BYTES_PER_ELEMENT,(De+1)*be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,De,Se.width,Se.height,1,Pe,lt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Se.width,Se.height,xe.depth,Pe,Se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Ie,Se.width,Se.height,xe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Se.width,Se.height,xe.depth,Pe,We,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Ie,Se.width,Se.height,xe.depth,0,Pe,We,Se.data)}else{He&&Ke&&t.texStorage2D(i.TEXTURE_2D,we,Ie,it[0].width,it[0].height);for(let k=0,ae=it.length;k<ae;k++)Se=it[k],w.format!==un?Pe!==null?He?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Se.width,Se.height,Pe,We,Se.data):t.texImage2D(i.TEXTURE_2D,k,Ie,Se.width,Se.height,0,Pe,We,Se.data)}else if(w.isDataArrayTexture)if(He){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ie,xe.width,xe.height,xe.depth),B)if(w.layerUpdates.size>0){const k=Lc(xe.width,xe.height,w.format,w.type);for(const ae of w.layerUpdates){const be=xe.data.subarray(ae*k/xe.data.BYTES_PER_ELEMENT,(ae+1)*k/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,xe.width,xe.height,1,Pe,We,be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Pe,We,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,Pe,We,xe.data);else if(w.isData3DTexture)He?(Ke&&t.texStorage3D(i.TEXTURE_3D,we,Ie,xe.width,xe.height,xe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Pe,We,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,Pe,We,xe.data);else if(w.isFramebufferTexture){if(Ke)if(He)t.texStorage2D(i.TEXTURE_2D,we,Ie,xe.width,xe.height);else{let k=xe.width,ae=xe.height;for(let be=0;be<we;be++)t.texImage2D(i.TEXTURE_2D,be,Ie,k,ae,0,Pe,We,null),k>>=1,ae>>=1}}else if(it.length>0){if(He&&Ke){const k=Xe(it[0]);t.texStorage2D(i.TEXTURE_2D,we,Ie,k.width,k.height)}for(let k=0,ae=it.length;k<ae;k++)Se=it[k],He?B&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Pe,We,Se):t.texImage2D(i.TEXTURE_2D,k,Ie,Pe,We,Se);w.generateMipmaps=!1}else if(He){if(Ke){const k=Xe(xe);t.texStorage2D(i.TEXTURE_2D,we,Ie,k.width,k.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,We,xe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Pe,We,xe);g(w)&&m(oe),Ne.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,Y){if(w.image.length!==6)return;const oe=Fe(R,w),fe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);const re=n.get(fe);if(fe.version!==re.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);const Ne=pt.getPrimaries(pt.workingColorSpace),Ee=w.colorSpace===Kn?null:pt.getPrimaries(w.colorSpace),Ae=w.colorSpace===Kn||Ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const nt=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let ae=0;ae<6;ae++)!nt&&!xe?Pe[ae]=x(w.image[ae],!0,s.maxCubemapSize):Pe[ae]=xe?w.image[ae].image:w.image[ae],Pe[ae]=yt(w,Pe[ae]);const We=Pe[0],Ie=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),it=b(w.internalFormat,Ie,Se,w.colorSpace),He=w.isVideoTexture!==!0,Ke=re.__version===void 0||oe===!0,B=fe.dataReady;let we=C(w,We);Me(i.TEXTURE_CUBE_MAP,w);let k;if(nt){He&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,it,We.width,We.height);for(let ae=0;ae<6;ae++){k=Pe[ae].mipmaps;for(let be=0;be<k.length;be++){const De=k[be];w.format!==un?Ie!==null?He?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,it,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,0,0,De.width,De.height,Ie,Se,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be,it,De.width,De.height,0,Ie,Se,De.data)}}}else{if(k=w.mipmaps,He&&Ke){k.length>0&&we++;const ae=Xe(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,it,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(xe){He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe[ae].width,Pe[ae].height,Ie,Se,Pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,it,Pe[ae].width,Pe[ae].height,0,Ie,Se,Pe[ae].data);for(let be=0;be<k.length;be++){const lt=k[be].image[ae].image;He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,0,0,lt.width,lt.height,Ie,Se,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,it,lt.width,lt.height,0,Ie,Se,lt.data)}}else{He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,Se,Pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,it,Ie,Se,Pe[ae]);for(let be=0;be<k.length;be++){const De=k[be];He?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,0,0,Ie,Se,De.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be+1,it,Ie,Se,De.image[ae])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),re.__version=fe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ne(R,w,Y,oe,fe,re){const Ne=r.convert(Y.format,Y.colorSpace),Ee=r.convert(Y.type),Ae=b(Y.internalFormat,Ne,Ee,Y.colorSpace);if(!n.get(w).__hasExternalTextures){const xe=Math.max(1,w.width>>re),Pe=Math.max(1,w.height>>re);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,re,Ae,xe,Pe,w.depth,0,Ne,Ee,null):t.texImage2D(fe,re,Ae,xe,Pe,0,Ne,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),dt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,fe,n.get(Y).__webglTexture,0,tt(w)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,fe,n.get(Y).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(R,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const oe=w.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,re=S(w.stencilBuffer,fe),Ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=tt(w);dt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,re,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,R)}else{const oe=w.textures;for(let fe=0;fe<oe.length;fe++){const re=oe[fe],Ne=r.convert(re.format,re.colorSpace),Ee=r.convert(re.type),Ae=b(re.internalFormat,Ne,Ee,re.colorSpace),nt=tt(w);Y&&dt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ae,w.width,w.height):dt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const oe=n.get(w.depthTexture).__webglTexture,fe=tt(w);if(w.depthTexture.format===as)dt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(w.depthTexture.format===ms)dt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Be(R){const w=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const oe=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=oe}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");_e(w.__webglFramebuffer,R)}else if(Y){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=i.createRenderbuffer(),pe(w.__webglDepthbuffer[oe],R,!1);else{const fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),pe(w.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(R,w,Y){const oe=n.get(R);w!==void 0&&ne(oe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Be(R)}function ze(R){const w=R.texture,Y=n.get(R),oe=n.get(w);R.addEventListener("dispose",U);const fe=R.textures,re=R.isWebGLCubeRenderTarget===!0,Ne=fe.length>1;if(Ne||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=w.version,o.memory.textures++),re){Y.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Ee]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Y.__webglFramebuffer[Ee][Ae]=i.createFramebuffer()}else Y.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)Y.__webglFramebuffer[Ee]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let Ee=0,Ae=fe.length;Ee<Ae;Ee++){const nt=n.get(fe[Ee]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&dt(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<fe.length;Ee++){const Ae=fe[Ee];Y.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);const nt=r.convert(Ae.format,Ae.colorSpace),xe=r.convert(Ae.type),Pe=b(Ae.internalFormat,nt,xe,Ae.colorSpace,R.isXRRenderTarget===!0),We=tt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Me(i.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)ne(Y.__webglFramebuffer[Ee][Ae],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae);else ne(Y.__webglFramebuffer[Ee],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);g(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Ee=0,Ae=fe.length;Ee<Ae;Ee++){const nt=fe[Ee],xe=n.get(nt);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),Me(i.TEXTURE_2D,nt),ne(Y.__webglFramebuffer,R,nt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),g(nt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),Me(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)ne(Y.__webglFramebuffer[Ae],R,w,i.COLOR_ATTACHMENT0,Ee,Ae);else ne(Y.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,Ee,0);g(w)&&m(Ee),t.unbindTexture()}R.depthBuffer&&Be(R)}function ht(R){const w=R.textures;for(let Y=0,oe=w.length;Y<oe;Y++){const fe=w[Y];if(g(fe)){const re=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(fe).__webglTexture;t.bindTexture(re,Ne),m(re),t.unbindTexture()}}}const et=[],O=[];function Vt(R){if(R.samples>0){if(dt(R)===!1){const w=R.textures,Y=R.width,oe=R.height;let fe=i.COLOR_BUFFER_BIT;const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(R),Ee=w.length>1;if(Ee)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);const nt=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,fe,i.NEAREST),l===!0&&(et.length=0,O.length=0,et.push(i.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(re),O.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);const nt=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function tt(R){return Math.min(s.maxSamples,R.samples)}function dt(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ge(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function yt(R,w){const Y=R.colorSpace,oe=R.format,fe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Pt&&Y!==Kn&&(pt.getTransfer(Y)===Mt?(oe!==un||fe!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=A,this.setTexture2D=ee,this.setTexture2DArray=le,this.setTexture3D=z,this.setTextureCube=se,this.rebindTextures=Ve,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=dt}function T0(i,e){function t(n,s=Kn){let r;const o=pt.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return i.BYTE;if(n===Uu)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Zt)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Iu)return i.RGB;if(n===un)return i.RGBA;if(n===Fu)return i.LUMINANCE;if(n===Ou)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Bu)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===jr||n===$r||n===Kr||n===Zr)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ea||n===ba||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Aa||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Aa)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Pa||n===Ua||n===La||n===Na||n===Ia||n===Fa||n===Oa||n===Ba||n===ka||n===Va||n===za||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ku||n===Ya||n===qa||n===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class E0 extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ti extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ot({vertexShader:w0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C0 extends Ss{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const x=new A0,g=t.getContextAttributes();let m=null,b=null;const S=[],C=[],F=new me;let U=null;const P=new Ft;P.layers.enable(1),P.viewport=new gt;const V=new Ft;V.layers.enable(2),V.viewport=new gt;const te=[P,V],y=new E0;y.layers.enable(1),y.layers.enable(2);let A=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=S[Q];return ne===void 0&&(ne=new $o,S[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=S[Q];return ne===void 0&&(ne=new $o,S[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=S[Q];return ne===void 0&&(ne=new $o,S[Q]=ne),ne.getHandSpace()};function K(Q){const ne=C.indexOf(Q.inputSource);if(ne===-1)return;const pe=S[ne];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,c||o),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",le);for(let Q=0;Q<S.length;Q++){const ne=C[Q];ne!==null&&(C[Q]=null,S[Q].disconnect(ne))}A=null,Z=null,x.reset(),e.setRenderTarget(m),p=null,d=null,h=null,s=null,b=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",le),g.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new si(p.framebufferWidth,p.framebufferHeight,{format:un,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,pe=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?ms:as,pe=g.stencil?ps:Oi);const Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:un,type:ii,depthTexture:new Qu(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function le(Q){for(let ne=0;ne<Q.removed.length;ne++){const pe=Q.removed[ne],_e=C.indexOf(pe);_e>=0&&(C[_e]=null,S[_e].disconnect(pe))}for(let ne=0;ne<Q.added.length;ne++){const pe=Q.added[ne];let _e=C.indexOf(pe);if(_e===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=C.length){C.push(pe),_e=Ve;break}else if(C[Ve]===null){C[Ve]=pe,_e=Ve;break}if(_e===-1)break}const Be=S[_e];Be&&Be.connect(pe)}}const z=new L,se=new L;function $(Q,ne,pe){z.setFromMatrixPosition(ne.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);const _e=z.distanceTo(se),Be=ne.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,ze=Be[14]/(Be[10]-1),ht=Be[14]/(Be[10]+1),et=(Be[9]+1)/Be[5],O=(Be[9]-1)/Be[5],Vt=(Be[8]-1)/Be[0],tt=(Ve[8]+1)/Ve[0],dt=ze*Vt,Ge=ze*tt,yt=_e/(-Vt+tt),Xe=yt*-Vt;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xe),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Be[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=ze+yt,w=ht+yt,Y=dt-Xe,oe=Ge+(_e-Xe),fe=et*ht/w*R,re=O*ht/w*R;Q.projectionMatrix.makePerspective(Y,oe,fe,re,R,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function W(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,pe=Q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),y.near=V.near=P.near=ne,y.far=V.far=P.far=pe,(A!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,Z=y.far);const _e=Q.parent,Be=y.cameras;W(y,_e);for(let Ve=0;Ve<Be.length;Ve++)W(Be[Ve],_e);Be.length===2?$(y,P,V):y.projectionMatrix.copy(P.projectionMatrix),ye(Q,y,_e)};function ye(Q,ne,pe){pe===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=gs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Me=null;function Fe(Q,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let _e=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let Ve=0;Ve<pe.length;Ve++){const ze=pe[Ve];let ht=null;if(p!==null)ht=p.getViewport(ze);else{const O=h.getViewSubImage(d,ze);ht=O.viewport,Ve===0&&(e.setRenderTargetTextures(b,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(b))}let et=te[Ve];et===void 0&&(et=new Ft,et.layers.enable(Ve),et.viewport=new gt,te[Ve]=et),et.matrix.fromArray(ze.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ze.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ht.x,ht.y,ht.width,ht.height),Ve===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(et)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ve=h.getDepthInformation(pe[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,s.renderState)}}for(let pe=0;pe<S.length;pe++){const _e=C[pe],Be=S[pe];_e!==null&&Be!==void 0&&Be.update(_e,ne,c||o)}Me&&Me(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const ke=new Ju;ke.setAnimationLoop(Fe),this.setAnimationLoop=function(Q){Me=Q},this.dispose=function(){}}}const Ri=new Yt,R0=new Ye;function P0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,$u(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,S,C){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,C)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=e.get(m),S=b.envMap,C=b.envMapRotation;S&&(g.envMap.value=S,Ri.copy(C),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(R0.makeRotationFromEuler(Ri)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const C=S.program;n.uniformBlockBinding(b,C)}function c(b,S){let C=s[b.id];C===void 0&&(v(b),C=u(b),s[b.id]=C,b.addEventListener("dispose",g));const F=S.program;n.updateUBOMapping(b,F);const U=e.render.frame;r[b.id]!==U&&(d(b),r[b.id]=U)}function u(b){const S=h();b.__bindingPointIndex=S;const C=i.createBuffer(),F=b.__size,U=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,F,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,C),C}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],C=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let U=0,P=C.length;U<P;U++){const V=Array.isArray(C[U])?C[U]:[C[U]];for(let te=0,y=V.length;te<y;te++){const A=V[te];if(p(A,U,te,F)===!0){const Z=A.__offset,K=Array.isArray(A.value)?A.value:[A.value];let ee=0;for(let le=0;le<K.length;le++){const z=K[le],se=x(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,Z+ee,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,ee),ee+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,S,C,F){const U=b.value,P=S+"_"+C;if(F[P]===void 0)return typeof U=="number"||typeof U=="boolean"?F[P]=U:F[P]=U.clone(),!0;{const V=F[P];if(typeof U=="number"||typeof U=="boolean"){if(V!==U)return F[P]=U,!0}else if(V.equals(U)===!1)return V.copy(U),!0}return!1}function v(b){const S=b.uniforms;let C=0;const F=16;for(let P=0,V=S.length;P<V;P++){const te=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,A=te.length;y<A;y++){const Z=te[y],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let ee=0,le=K.length;ee<le;ee++){const z=K[ee],se=x(z),$=C%F,W=$%se.boundary,ye=$+W;C+=W,ye!==0&&F-ye<se.storage&&(C+=F-ye),Z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=C,C+=se.storage}}}const U=C%F;return U>0&&(C+=F-U),b.__size=C,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){const S=b.target;S.removeEventListener("dispose",g);const C=o.indexOf(S.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class L0{constructor(e={}){const{canvas:t=vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Mi,this.toneMappingExposure=1;const S=this;let C=!1,F=0,U=0,P=null,V=-1,te=null;const y=new gt,A=new gt;let Z=null;const K=new ce(0);let ee=0,le=t.width,z=t.height,se=1,$=null,W=null;const ye=new gt(0,0,le,z),Me=new gt(0,0,le,z);let Fe=!1;const ke=new vl;let Q=!1,ne=!1;const pe=new Ye,_e=new Ye,Be=new L,Ve=new gt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function et(){return P===null?se:1}let O=n;function Vt(D,f){return t.getContext(D,f)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",De,!1),O===null){const f="webgl2";if(O=Vt(f,D),O===null)throw Vt(f)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let tt,dt,Ge,yt,Xe,R,w,Y,oe,fe,re,Ne,Ee,Ae,nt,xe,Pe,We,Ie,Se,it,He,Ke,B;function we(){tt=new Bg(O),tt.init(),He=new T0(O,tt),dt=new Ug(O,tt,e,He),Ge=new y0(O),dt.reverseDepthBuffer&&Ge.buffers.depth.setReversed(!0),yt=new zg(O),Xe=new r0,R=new S0(O,tt,Ge,Xe,dt,He,yt),w=new Ng(S),Y=new Og(S),oe=new jf(O),Ke=new Rg(O,oe),fe=new kg(O,oe,yt,Ke),re=new Gg(O,fe,oe,yt),Ie=new Hg(O,dt,R),xe=new Lg(Xe),Ne=new s0(S,w,Y,tt,dt,Ke,xe),Ee=new P0(S,Xe),Ae=new a0,nt=new f0(tt),We=new Cg(S,w,Y,Ge,re,d,l),Pe=new _0(S,re,dt),B=new U0(O,yt,dt,Ge),Se=new Pg(O,tt,yt),it=new Vg(O,tt,yt),yt.programs=Ne.programs,S.capabilities=dt,S.extensions=tt,S.properties=Xe,S.renderLists=Ae,S.shadowMap=Pe,S.state=Ge,S.info=yt}we();const k=new C0(S,O);this.xr=k,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=tt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=tt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(D){D!==void 0&&(se=D,this.setSize(le,z,!1))},this.getSize=function(D){return D.set(le,z)},this.setSize=function(D,f,_=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=D,z=f,t.width=Math.floor(D*se),t.height=Math.floor(f*se),_===!0&&(t.style.width=D+"px",t.style.height=f+"px"),this.setViewport(0,0,D,f)},this.getDrawingBufferSize=function(D){return D.set(le*se,z*se).floor()},this.setDrawingBufferSize=function(D,f,_){le=D,z=f,se=_,t.width=Math.floor(D*_),t.height=Math.floor(f*_),this.setViewport(0,0,D,f)},this.getCurrentViewport=function(D){return D.copy(y)},this.getViewport=function(D){return D.copy(ye)},this.setViewport=function(D,f,_,M){D.isVector4?ye.set(D.x,D.y,D.z,D.w):ye.set(D,f,_,M),Ge.viewport(y.copy(ye).multiplyScalar(se).round())},this.getScissor=function(D){return D.copy(Me)},this.setScissor=function(D,f,_,M){D.isVector4?Me.set(D.x,D.y,D.z,D.w):Me.set(D,f,_,M),Ge.scissor(A.copy(Me).multiplyScalar(se).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(D){Ge.setScissorTest(Fe=D)},this.setOpaqueSort=function(D){$=D},this.setTransparentSort=function(D){W=D},this.getClearColor=function(D){return D.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(D=!0,f=!0,_=!0){let M=0;if(D){let T=!1;if(P!==null){const I=P.texture.format;T=I===fl||I===dl||I===hl}if(T){const I=P.texture.type,N=I===ii||I===Oi||I===Js||I===ps||I===cl||I===ul,H=We.getClearColor(),J=We.getClearAlpha(),q=H.r,j=H.g,G=H.b;N?(p[0]=q,p[1]=j,p[2]=G,p[3]=J,O.clearBufferuiv(O.COLOR,0,p)):(v[0]=q,v[1]=j,v[2]=G,v[3]=J,O.clearBufferiv(O.COLOR,0,v))}else M|=O.COLOR_BUFFER_BIT}f&&(M|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),_&&(M|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ae.dispose(),nt.dispose(),Xe.dispose(),w.dispose(),Y.dispose(),re.dispose(),Ke.dispose(),B.dispose(),Ne.dispose(),k.dispose(),k.removeEventListener("sessionstart",lr),k.removeEventListener("sessionend",cr),kn.stop()};function ae(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=yt.autoReset,f=Pe.enabled,_=Pe.autoUpdate,M=Pe.needsUpdate,T=Pe.type;we(),yt.autoReset=D,Pe.enabled=f,Pe.autoUpdate=_,Pe.needsUpdate=M,Pe.type=T}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const f=D.target;f.removeEventListener("dispose",lt),Et(f)}function Et(D){zt(D),Xe.remove(D)}function zt(D){const f=Xe.get(D).programs;f!==void 0&&(f.forEach(function(_){Ne.releaseProgram(_)}),D.isShaderMaterial&&Ne.releaseShaderCache(D))}this.renderBufferDirect=function(D,f,_,M,T,I){f===null&&(f=ze);const N=T.isMesh&&T.matrixWorld.determinant()<0,H=fr(D,f,_,M,T);Ge.setMaterial(M,N);let J=_.index,q=1;if(M.wireframe===!0){if(J=fe.getWireframeAttribute(_),J===void 0)return;q=2}const j=_.drawRange,G=_.attributes.position;let ue=j.start*q,ge=(j.start+j.count)*q;I!==null&&(ue=Math.max(ue,I.start*q),ge=Math.min(ge,(I.start+I.count)*q)),J!==null?(ue=Math.max(ue,0),ge=Math.min(ge,J.count)):G!=null&&(ue=Math.max(ue,0),ge=Math.min(ge,G.count));const ve=ge-ue;if(ve<0||ve===1/0)return;Ke.setup(T,M,H,_,J);let Ce,de=Se;if(J!==null&&(Ce=oe.get(J),de=it,de.setIndex(Ce)),T.isMesh)M.wireframe===!0?(Ge.setLineWidth(M.wireframeLinewidth*et()),de.setMode(O.LINES)):de.setMode(O.TRIANGLES);else if(T.isLine){let ie=M.linewidth;ie===void 0&&(ie=1),Ge.setLineWidth(ie*et()),T.isLineSegments?de.setMode(O.LINES):T.isLineLoop?de.setMode(O.LINE_LOOP):de.setMode(O.LINE_STRIP)}else T.isPoints?de.setMode(O.POINTS):T.isSprite&&de.setMode(O.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)de.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))de.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const ie=T._multiDrawStarts,Ue=T._multiDrawCounts,Le=T._multiDrawCount,ct=J?oe.get(J).bytesPerElement:1,At=Xe.get(M).currentProgram.getUniforms();for(let Qe=0;Qe<Le;Qe++)At.setValue(O,"_gl_DrawID",Qe),de.render(ie[Qe]/ct,Ue[Qe])}else if(T.isInstancedMesh)de.renderInstances(ue,ve,T.count);else if(_.isInstancedBufferGeometry){const ie=_._maxInstanceCount!==void 0?_._maxInstanceCount:1/0,Ue=Math.min(_.instanceCount,ie);de.renderInstances(ue,ve,Ue)}else de.render(ue,ve)};function ft(D,f,_){D.transparent===!0&&D.side===nn&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,zi(D,f,_),D.side=hn,D.needsUpdate=!0,zi(D,f,_),D.side=nn):zi(D,f,_)}this.compile=function(D,f,_=null){_===null&&(_=D),g=nt.get(_),g.init(f),b.push(g),_.traverseVisible(function(T){T.isLight&&T.layers.test(f.layers)&&(g.pushLight(T),T.castShadow&&g.pushShadow(T))}),D!==_&&D.traverseVisible(function(T){T.isLight&&T.layers.test(f.layers)&&(g.pushLight(T),T.castShadow&&g.pushShadow(T))}),g.setupLights();const M=new Set;return D.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const I=T.material;if(I)if(Array.isArray(I))for(let N=0;N<I.length;N++){const H=I[N];ft(H,_,T),M.add(H)}else ft(I,_,T),M.add(I)}),b.pop(),g=null,M},this.compileAsync=function(D,f,_=null){const M=this.compile(D,f,_);return new Promise(T=>{function I(){if(M.forEach(function(N){Xe.get(N).currentProgram.isReady()&&M.delete(N)}),M.size===0){T(D);return}setTimeout(I,10)}tt.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let Ht=null;function mn(D){Ht&&Ht(D)}function lr(){kn.stop()}function cr(){kn.start()}const kn=new Ju;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(D){Ht=D,k.setAnimationLoop(D),D===null?kn.stop():kn.start()},k.addEventListener("sessionstart",lr),k.addEventListener("sessionend",cr),this.render=function(D,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(f),f=k.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,f,P),g=nt.get(D,b.length),g.init(f),b.push(g),_e.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),ke.setFromProjectionMatrix(_e),ne=this.localClippingEnabled,Q=xe.init(this.clippingPlanes,ne),x=Ae.get(D,m.length),x.init(),m.push(x),k.enabled===!0&&k.isPresenting===!0){const I=S.xr.getDepthSensingMesh();I!==null&&Cs(I,f,-1/0,S.sortObjects)}Cs(D,f,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort($,W),ht=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,ht&&We.addToRenderList(x,D),this.info.render.frame++,Q===!0&&xe.beginShadows();const _=g.state.shadowsArray;Pe.render(_,D,f),Q===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const M=x.opaque,T=x.transmissive;if(g.setupLights(),f.isArrayCamera){const I=f.cameras;if(T.length>0)for(let N=0,H=I.length;N<H;N++){const J=I[N];Rs(M,T,D,J)}ht&&We.render(D);for(let N=0,H=I.length;N<H;N++){const J=I[N];ur(x,D,J,J.viewport)}}else T.length>0&&Rs(M,T,D,f),ht&&We.render(D),ur(x,D,f);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(S,D,f),Ke.resetDefaultState(),V=-1,te=null,b.pop(),b.length>0?(g=b[b.length-1],Q===!0&&xe.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Cs(D,f,_,M){if(D.visible===!1)return;if(D.layers.test(f.layers)){if(D.isGroup)_=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(f);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ke.intersectsSprite(D)){M&&Ve.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_e);const N=re.update(D),H=D.material;H.visible&&x.push(D,N,H,_,Ve.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ke.intersectsObject(D))){const N=re.update(D),H=D.material;if(M&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ve.copy(D.boundingSphere.center)):(N.boundingSphere===null&&N.computeBoundingSphere(),Ve.copy(N.boundingSphere.center)),Ve.applyMatrix4(D.matrixWorld).applyMatrix4(_e)),Array.isArray(H)){const J=N.groups;for(let q=0,j=J.length;q<j;q++){const G=J[q],ue=H[G.materialIndex];ue&&ue.visible&&x.push(D,N,ue,_,Ve.z,G)}}else H.visible&&x.push(D,N,H,_,Ve.z,null)}}const I=D.children;for(let N=0,H=I.length;N<H;N++)Cs(I[N],f,_,M)}function ur(D,f,_,M){const T=D.opaque,I=D.transmissive,N=D.transparent;g.setupLightsView(_),Q===!0&&xe.setGlobalState(S.clippingPlanes,_),M&&Ge.viewport(y.copy(M)),T.length>0&&Vi(T,f,_),I.length>0&&Vi(I,f,_),N.length>0&&Vi(N,f,_),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Rs(D,f,_,M){if((_.isScene===!0?_.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[M.id]===void 0&&(g.state.transmissionRenderTarget[M.id]=new si(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Qn:ii,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const I=g.state.transmissionRenderTarget[M.id],N=M.viewport||y;I.setSize(N.z,N.w);const H=S.getRenderTarget();S.setRenderTarget(I),S.getClearColor(K),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),ht&&We.render(_);const J=S.toneMapping;S.toneMapping=Mi;const q=M.viewport;if(M.viewport!==void 0&&(M.viewport=void 0),g.setupLightsView(M),Q===!0&&xe.setGlobalState(S.clippingPlanes,M),Vi(D,_,M),R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I),tt.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let G=0,ue=f.length;G<ue;G++){const ge=f[G],ve=ge.object,Ce=ge.geometry,de=ge.material,ie=ge.group;if(de.side===nn&&ve.layers.test(M.layers)){const Ue=de.side;de.side=rn,de.needsUpdate=!0,hr(ve,_,M,Ce,de,ie),de.side=Ue,de.needsUpdate=!0,j=!0}}j===!0&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I))}S.setRenderTarget(H),S.setClearColor(K,ee),q!==void 0&&(M.viewport=q),S.toneMapping=J}function Vi(D,f,_){const M=f.isScene===!0?f.overrideMaterial:null;for(let T=0,I=D.length;T<I;T++){const N=D[T],H=N.object,J=N.geometry,q=M===null?N.material:M,j=N.group;H.layers.test(_.layers)&&hr(H,f,_,J,q,j)}}function hr(D,f,_,M,T,I){D.onBeforeRender(S,f,_,M,T,I),D.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),T.onBeforeRender(S,f,_,M,D,I),T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,S.renderBufferDirect(_,f,M,T,D,I),T.side=hn,T.needsUpdate=!0,S.renderBufferDirect(_,f,M,T,D,I),T.side=nn):S.renderBufferDirect(_,f,M,T,D,I),D.onAfterRender(S,f,_,M,T,I)}function zi(D,f,_){f.isScene!==!0&&(f=ze);const M=Xe.get(D),T=g.state.lights,I=g.state.shadowsArray,N=T.state.version,H=Ne.getParameters(D,T.state,I,f,_),J=Ne.getProgramCacheKey(H);let q=M.programs;M.environment=D.isMeshStandardMaterial?f.environment:null,M.fog=f.fog,M.envMap=(D.isMeshStandardMaterial?Y:w).get(D.envMap||M.environment),M.envMapRotation=M.environment!==null&&D.envMap===null?f.environmentRotation:D.envMapRotation,q===void 0&&(D.addEventListener("dispose",lt),q=new Map,M.programs=q);let j=q.get(J);if(j!==void 0){if(M.currentProgram===j&&M.lightsStateVersion===N)return Ps(D,H),j}else H.uniforms=Ne.getUniforms(D),D.onBeforeCompile(H,S),j=Ne.acquireProgram(H,J),q.set(J,j),M.uniforms=H.uniforms;const G=M.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(G.clippingPlanes=xe.uniform),Ps(D,H),M.needsLights=Vn(D),M.lightsStateVersion=N,M.needsLights&&(G.ambientLightColor.value=T.state.ambient,G.lightProbe.value=T.state.probe,G.directionalLights.value=T.state.directional,G.directionalLightShadows.value=T.state.directionalShadow,G.spotLights.value=T.state.spot,G.spotLightShadows.value=T.state.spotShadow,G.rectAreaLights.value=T.state.rectArea,G.ltc_1.value=T.state.rectAreaLTC1,G.ltc_2.value=T.state.rectAreaLTC2,G.pointLights.value=T.state.point,G.pointLightShadows.value=T.state.pointShadow,G.hemisphereLights.value=T.state.hemi,G.directionalShadowMap.value=T.state.directionalShadowMap,G.directionalShadowMatrix.value=T.state.directionalShadowMatrix,G.spotShadowMap.value=T.state.spotShadowMap,G.spotLightMatrix.value=T.state.spotLightMatrix,G.spotLightMap.value=T.state.spotLightMap,G.pointShadowMap.value=T.state.pointShadowMap,G.pointShadowMatrix.value=T.state.pointShadowMatrix),M.currentProgram=j,M.uniformsList=null,j}function dr(D){if(D.uniformsList===null){const f=D.currentProgram.getUniforms();D.uniformsList=eo.seqWithValue(f.seq,D.uniforms)}return D.uniformsList}function Ps(D,f){const _=Xe.get(D);_.outputColorSpace=f.outputColorSpace,_.batching=f.batching,_.batchingColor=f.batchingColor,_.instancing=f.instancing,_.instancingColor=f.instancingColor,_.instancingMorph=f.instancingMorph,_.skinning=f.skinning,_.morphTargets=f.morphTargets,_.morphNormals=f.morphNormals,_.morphColors=f.morphColors,_.morphTargetsCount=f.morphTargetsCount,_.numClippingPlanes=f.numClippingPlanes,_.numIntersection=f.numClipIntersection,_.vertexAlphas=f.vertexAlphas,_.vertexTangents=f.vertexTangents,_.toneMapping=f.toneMapping}function fr(D,f,_,M,T){f.isScene!==!0&&(f=ze),R.resetTextureUnits();const I=f.fog,N=M.isMeshStandardMaterial?f.environment:null,H=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pt,J=(M.isMeshStandardMaterial?Y:w).get(M.envMap||N),q=M.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,j=!!_.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),G=!!_.morphAttributes.position,ue=!!_.morphAttributes.normal,ge=!!_.morphAttributes.color;let ve=Mi;M.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=S.toneMapping);const Ce=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,de=Ce!==void 0?Ce.length:0,ie=Xe.get(M),Ue=g.state.lights;if(Q===!0&&(ne===!0||D!==te)){const je=D===te&&M.id===V;xe.setState(M,D,je)}let Le=!1;M.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Ue.state.version||ie.outputColorSpace!==H||T.isBatchedMesh&&ie.batching===!1||!T.isBatchedMesh&&ie.batching===!0||T.isBatchedMesh&&ie.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&ie.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&ie.instancing===!1||!T.isInstancedMesh&&ie.instancing===!0||T.isSkinnedMesh&&ie.skinning===!1||!T.isSkinnedMesh&&ie.skinning===!0||T.isInstancedMesh&&ie.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&ie.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&ie.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&ie.instancingMorph===!1&&T.morphTexture!==null||ie.envMap!==J||M.fog===!0&&ie.fog!==I||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==xe.numPlanes||ie.numIntersection!==xe.numIntersection)||ie.vertexAlphas!==q||ie.vertexTangents!==j||ie.morphTargets!==G||ie.morphNormals!==ue||ie.morphColors!==ge||ie.toneMapping!==ve||ie.morphTargetsCount!==de)&&(Le=!0):(Le=!0,ie.__version=M.version);let ct=ie.currentProgram;Le===!0&&(ct=zi(M,f,T));let At=!1,Qe=!1,st=!1;const $e=ct.getUniforms(),wt=ie.uniforms;if(Ge.useProgram(ct.program)&&(At=!0,Qe=!0,st=!0),M.id!==V&&(V=M.id,Qe=!0),At||te!==D){dt.reverseDepthBuffer?(pe.copy(D.projectionMatrix),xf(pe),yf(pe),$e.setValue(O,"projectionMatrix",pe)):$e.setValue(O,"projectionMatrix",D.projectionMatrix),$e.setValue(O,"viewMatrix",D.matrixWorldInverse);const je=$e.map.cameraPosition;je!==void 0&&je.setValue(O,Be.setFromMatrixPosition(D.matrixWorld)),dt.logarithmicDepthBuffer&&$e.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&$e.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),te!==D&&(te=D,Qe=!0,st=!0)}if(T.isSkinnedMesh){$e.setOptional(O,T,"bindMatrix"),$e.setOptional(O,T,"bindMatrixInverse");const je=T.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),$e.setValue(O,"boneTexture",je.boneTexture,R))}T.isBatchedMesh&&($e.setOptional(O,T,"batchingTexture"),$e.setValue(O,"batchingTexture",T._matricesTexture,R),$e.setOptional(O,T,"batchingIdTexture"),$e.setValue(O,"batchingIdTexture",T._indirectTexture,R),$e.setOptional(O,T,"batchingColorTexture"),T._colorsTexture!==null&&$e.setValue(O,"batchingColorTexture",T._colorsTexture,R));const bt=_.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&Ie.update(T,_,ct),(Qe||ie.receiveShadow!==T.receiveShadow)&&(ie.receiveShadow=T.receiveShadow,$e.setValue(O,"receiveShadow",T.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(wt.envMap.value=J,wt.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1),M.isMeshStandardMaterial&&M.envMap===null&&f.environment!==null&&(wt.envMapIntensity.value=f.environmentIntensity),Qe&&($e.setValue(O,"toneMappingExposure",S.toneMappingExposure),ie.needsLights&&yo(wt,st),I&&M.fog===!0&&Ee.refreshFogUniforms(wt,I),Ee.refreshMaterialUniforms(wt,M,se,z,g.state.transmissionRenderTarget[D.id]),eo.upload(O,dr(ie),wt,R)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(eo.upload(O,dr(ie),wt,R),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&$e.setValue(O,"center",T.center),$e.setValue(O,"modelViewMatrix",T.modelViewMatrix),$e.setValue(O,"normalMatrix",T.normalMatrix),$e.setValue(O,"modelMatrix",T.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){const je=M.uniformsGroups;for(let vt=0,gn=je.length;vt<gn;vt++){const li=je[vt];B.update(li,ct),B.bind(li,ct)}}return ct}function yo(D,f){D.ambientLightColor.needsUpdate=f,D.lightProbe.needsUpdate=f,D.directionalLights.needsUpdate=f,D.directionalLightShadows.needsUpdate=f,D.pointLights.needsUpdate=f,D.pointLightShadows.needsUpdate=f,D.spotLights.needsUpdate=f,D.spotLightShadows.needsUpdate=f,D.rectAreaLights.needsUpdate=f,D.hemisphereLights.needsUpdate=f}function Vn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,f,_){Xe.get(D.texture).__webglTexture=f,Xe.get(D.depthTexture).__webglTexture=_;const M=Xe.get(D);M.__hasExternalTextures=!0,M.__autoAllocateDepthBuffer=_===void 0,M.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),M.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,f){const _=Xe.get(D);_.__webglFramebuffer=f,_.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(D,f=0,_=0){P=D,F=f,U=_;let M=!0,T=null,I=!1,N=!1;if(D){const J=Xe.get(D);if(J.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(O.FRAMEBUFFER,null),M=!1;else if(J.__webglFramebuffer===void 0)R.setupRenderTarget(D);else if(J.__hasExternalTextures)R.rebindTextures(D,Xe.get(D.texture).__webglTexture,Xe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const G=D.depthTexture;if(J.__boundDepthTexture!==G){if(G!==null&&Xe.has(G)&&(D.width!==G.image.width||D.height!==G.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(D)}}const q=D.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(N=!0);const j=Xe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(j[f])?T=j[f][_]:T=j[f],I=!0):D.samples>0&&R.useMultisampledRTT(D)===!1?T=Xe.get(D).__webglMultisampledFramebuffer:Array.isArray(j)?T=j[_]:T=j,y.copy(D.viewport),A.copy(D.scissor),Z=D.scissorTest}else y.copy(ye).multiplyScalar(se).floor(),A.copy(Me).multiplyScalar(se).floor(),Z=Fe;if(Ge.bindFramebuffer(O.FRAMEBUFFER,T)&&M&&Ge.drawBuffers(D,T),Ge.viewport(y),Ge.scissor(A),Ge.setScissorTest(Z),I){const J=Xe.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+f,J.__webglTexture,_)}else if(N){const J=Xe.get(D.texture),q=f||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,J.__webglTexture,_||0,q)}V=-1},this.readRenderTargetPixels=function(D,f,_,M,T,I,N){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&N!==void 0&&(H=H[N]),H){Ge.bindFramebuffer(O.FRAMEBUFFER,H);try{const J=D.texture,q=J.format,j=J.type;if(!dt.textureFormatReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}f>=0&&f<=D.width-M&&_>=0&&_<=D.height-T&&O.readPixels(f,_,M,T,He.convert(q),He.convert(j),I)}finally{const J=P!==null?Xe.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(O.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(D,f,_,M,T,I,N){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let H=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&N!==void 0&&(H=H[N]),H){const J=D.texture,q=J.format,j=J.type;if(!dt.textureFormatReadable(q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(f>=0&&f<=D.width-M&&_>=0&&_<=D.height-T){Ge.bindFramebuffer(O.FRAMEBUFFER,H);const G=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,G),O.bufferData(O.PIXEL_PACK_BUFFER,I.byteLength,O.STREAM_READ),O.readPixels(f,_,M,T,He.convert(q),He.convert(j),0);const ue=P!==null?Xe.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(O.FRAMEBUFFER,ue);const ge=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _f(O,ge,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,G),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,I),O.deleteBuffer(G),O.deleteSync(ge),I}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,f=null,_=0){D.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),f=arguments[0]||null,D=arguments[1]);const M=Math.pow(2,-_),T=Math.floor(D.image.width*M),I=Math.floor(D.image.height*M),N=f!==null?f.x:0,H=f!==null?f.y:0;R.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,_,0,0,N,H,T,I),Ge.unbindTexture()},this.copyTextureToTexture=function(D,f,_=null,M=null,T=0){D.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),M=arguments[0]||null,D=arguments[1],f=arguments[2],T=arguments[3]||0,_=null);let I,N,H,J,q,j;_!==null?(I=_.max.x-_.min.x,N=_.max.y-_.min.y,H=_.min.x,J=_.min.y):(I=D.image.width,N=D.image.height,H=0,J=0),M!==null?(q=M.x,j=M.y):(q=0,j=0);const G=He.convert(f.format),ue=He.convert(f.type);R.setTexture2D(f,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,f.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,f.unpackAlignment);const ge=O.getParameter(O.UNPACK_ROW_LENGTH),ve=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ce=O.getParameter(O.UNPACK_SKIP_PIXELS),de=O.getParameter(O.UNPACK_SKIP_ROWS),ie=O.getParameter(O.UNPACK_SKIP_IMAGES),Ue=D.isCompressedTexture?D.mipmaps[T]:D.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,H),O.pixelStorei(O.UNPACK_SKIP_ROWS,J),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,T,q,j,I,N,G,ue,Ue.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,T,q,j,Ue.width,Ue.height,G,Ue.data):O.texSubImage2D(O.TEXTURE_2D,T,q,j,I,N,G,ue,Ue),O.pixelStorei(O.UNPACK_ROW_LENGTH,ge),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,de),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ie),T===0&&f.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(D,f,_=null,M=null,T=0){D.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_=arguments[0]||null,M=arguments[1]||null,D=arguments[2],f=arguments[3],T=arguments[4]||0);let I,N,H,J,q,j,G,ue,ge;const ve=D.isCompressedTexture?D.mipmaps[T]:D.image;_!==null?(I=_.max.x-_.min.x,N=_.max.y-_.min.y,H=_.max.z-_.min.z,J=_.min.x,q=_.min.y,j=_.min.z):(I=ve.width,N=ve.height,H=ve.depth,J=0,q=0,j=0),M!==null?(G=M.x,ue=M.y,ge=M.z):(G=0,ue=0,ge=0);const Ce=He.convert(f.format),de=He.convert(f.type);let ie;if(f.isData3DTexture)R.setTexture3D(f,0),ie=O.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)R.setTexture2DArray(f,0),ie=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,f.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,f.unpackAlignment);const Ue=O.getParameter(O.UNPACK_ROW_LENGTH),Le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ct=O.getParameter(O.UNPACK_SKIP_PIXELS),At=O.getParameter(O.UNPACK_SKIP_ROWS),Qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ve.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,J),O.pixelStorei(O.UNPACK_SKIP_ROWS,q),O.pixelStorei(O.UNPACK_SKIP_IMAGES,j),D.isDataTexture||D.isData3DTexture?O.texSubImage3D(ie,T,G,ue,ge,I,N,H,Ce,de,ve.data):f.isCompressedArrayTexture?O.compressedTexSubImage3D(ie,T,G,ue,ge,I,N,H,Ce,ve.data):O.texSubImage3D(ie,T,G,ue,ge,I,N,H,Ce,de,ve),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,At),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),T===0&&f.generateMipmaps&&O.generateMipmap(ie),Ge.unbindTexture()},this.initRenderTarget=function(D){Xe.get(D).__webglFramebuffer===void 0&&R.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?R.setTextureCube(D,0):D.isData3DTexture?R.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?R.setTexture2DArray(D,0):R.setTexture2D(D,0),Ge.unbindTexture()},this.resetState=function(){F=0,U=0,P=null,Ge.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pl?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===po?"display-p3":"srgb"}}class N0 extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class I0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new L;class xl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Nc=new L,Ic=new gt,Fc=new gt,F0=new L,Oc=new Ye,Ir=new L,Ko=new Fn,Bc=new Ye,Zo=new ir;class O0 extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ir),this.boundingBox.expandByPoint(Ir)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ir),this.boundingSphere.expandByPoint(Ir)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(s),e.ray.intersectsSphere(Ko)!==!1&&(Bc.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(Bc),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ic.fromBufferAttribute(s.attributes.skinIndex,e),Fc.fromBufferAttribute(s.attributes.skinWeight,e),Nc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Fc.getComponent(r);if(o!==0){const a=Ic.getComponent(r);Oc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(F0.copy(Nc).applyMatrix4(Oc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sh extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yl extends Dt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=kt,u=kt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=new Ye,B0=new Ye;class Ml{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:B0;kc.multiplyMatrices(a,t[r]),kc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ml(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yl(t,e,e,un,Zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sh),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class _s extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new Ye,Vc=new Ye,Fr=[],zc=new ri,k0=new Ye,Os=new Tt,Bs=new Fn;class rh extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,k0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),zc.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(zc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Bs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Vc.multiplyMatrices(n,ns),Os.matrixWorld=Vc,Os.raycast(e,Fr);for(let o=0,a=Fr.length;o<a;o++){const l=Fr[o];l.instanceId=r,l.object=this,t.push(l)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yl(new Float32Array(s*this.count),s,this.count,fo,Zt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oh extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lo=new L,co=new L,Hc=new Ye,ks=new ir,Or=new Fn,Jo=new L,Gc=new L;let Sl=class extends at{constructor(e=new Qt,t=new oh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lo.fromBufferAttribute(t,s-1),co.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Hc.copy(s).invert(),ks.copy(e.ray).applyMatrix4(Hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=p,g=v-1;x<g;x+=c){const m=u.getX(x),b=u.getX(x+1),S=Br(this,e,ks,l,m,b);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(v-1),g=u.getX(p),m=Br(this,e,ks,l,x,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=p,g=v-1;x<g;x+=c){const m=Br(this,e,ks,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=Br(this,e,ks,l,v-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Br(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(lo.fromBufferAttribute(o,s),co.fromBufferAttribute(o,r),t.distanceSqToSegment(lo,co,Jo,Gc)>n)return;Jo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Jo);if(!(l<e.near||l>e.far))return{distance:l,point:Gc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Wc=new L,Xc=new L;class V0 extends Sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wc.fromBufferAttribute(t,s),Xc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wc.distanceTo(Xc);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends Sl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ah extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new Ye,Qa=new ir,kr=new Fn,Vr=new L;class lh extends at{constructor(e=new Qt,t=new ah){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;Yc.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(Yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,x=p;v<x;v++){const g=c.getX(v);Vr.fromBufferAttribute(h,g),qc(Vr,g,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,x=p;v<x;v++)Vr.fromBufferAttribute(h,v),qc(Vr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qc(i,e,t,n,s,r,o){const a=Qa.distanceSqToPoint(i);if(a<t){const l=new L;Qa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ch extends Dt{constructor(e,t,n,s,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class eb extends ch{constructor(e,t,n,s,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=En,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tb extends ch{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Fi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class jc extends Dt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class H0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],o=[],a=new L,l=new Ye;for(let p=0;p<=e;p++){const v=p/e;s[p]=this.getTangentAt(v,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Tl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const zr=new L,Qo=new Tl,ea=new Tl,ta=new Tl;class el extends H0{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),c=zr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),Qo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,x,g),ea.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,x,g),ta.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,x,g)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ea.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ta.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Qo.calc(l),ea.calc(l),ta.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class El extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,d=new L,p=[],v=[],x=[],g=[];for(let m=0;m<=n;m++){const b=[],S=m/n;let C=0;m===0&&o===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let F=0;F<=t;F++){const U=F/t;h.x=-e*Math.cos(s+U*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+U*r)*Math.sin(o+S*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(U+C,1-S),b.push(c++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){const S=u[m][b+1],C=u[m][b],F=u[m+1][b],U=u[m+1][b+1];(m!==0||o>0)&&p.push(S,C,U),(m!==n-1||l<Math.PI)&&p.push(C,F,U)}this.setIndex(p),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vo extends ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bl extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends bl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Hr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function G0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function W0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $c(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function uh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class rr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class X0 extends rr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,a=2*t-n;break;case Gl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:o=e,l=2*n-t;break;case Gl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),x=v*v,g=x*v,m=-d*g+2*d*x-d*v,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*v+1,S=(-1-p)*g+(1.5+p)*x+.5*v,C=p*g-p*x;for(let F=0;F!==a;++F)r[F]=m*o[u+F]+b*o[c+F]+S*o[l+F]+C*o[h+F];return r}}class Y0 extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class q0 extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new X0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&G0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let v=0;v!==n;++v){const x=t[h+v];if(x!==t[d+v]||x!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=er;class Es extends Bn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Qs;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class hh extends Bn{}hh.prototype.ValueTypeName="color";class xs extends Bn{}xs.prototype.ValueTypeName="number";class j0 extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ei.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ys extends Bn{InterpolantFactoryMethodLinear(e){return new j0(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Bn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Qs;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Bn{}Ms.prototype.ValueTypeName="vector";class $0{constructor(e="",t=-1,n=[],s=zd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Z0(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=W0(l);l=$c(l,1,u),c=$c(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,v,x){if(p.length!==0){const g=[],m=[];uh(p,g,m,v),g.length!==0&&x.push(new h(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)p[d[v].morphTargets[x]]=-1;for(const x in p){const g=[],m=[];for(let b=0;b!==d[v].morphTargets.length;++b){const S=d[v];g.push(S.time),m.push(S.morphTarget===x?1:0)}s.push(new xs(".morphTargetInfluence["+x+"]",g,m))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Ms,p+".position",d,"pos",s),n(ys,p+".quaternion",d,"rot",s),n(Ms,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function K0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return hh;case"quaternion":return ys;case"bool":case"boolean":return Es;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Z0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=K0(i.type);if(i.times===void 0){const t=[],n=[];uh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class J0{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Q0=new J0;class Bi{constructor(e){this.manager=e!==void 0?e:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class e_ extends Error{constructor(e,t){super(e),this.response=t}}class wl extends Bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:s});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let x=0;const g=new ReadableStream({start(m){b();function b(){h.read().then(({done:S,value:C})=>{if(S)m.close();else{x+=C.byteLength;const F=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let U=0,P=u.length;U<P;U++){const V=u[U];V.onProgress&&V.onProgress(F)}m.enqueue(C),b()}},S=>{m.error(S)})}}});return new Response(g)}else throw new e_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{ni.add(e,c);const u=Yn[e];delete Yn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class t_ extends Bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=tr("img");function l(){u(),ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class n_ extends Bi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new yl,a=new wl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:En,o.wrapT=c.wrapT!==void 0?c.wrapT:En,o.magFilter=c.magFilter!==void 0?c.magFilter:Rt,o.minFilter=c.minFilter!==void 0?c.minFilter:Rt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Pn),c.mipmapCount===1&&(o.minFilter=Rt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class dh extends Bi{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,o=new t_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Dl extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const na=new Ye,Kc=new L,Zc=new L;class Al{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class i_ extends Al{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class s_ extends Dl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new i_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jc=new Ye,Vs=new L,ia=new L;class r_ extends Al{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),ia.copy(n.position),ia.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ia),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc)}}class o_ extends Dl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new r_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a_ extends Al{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l_ extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new a_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fh extends Qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class c_ extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(e,l),r.manager.itemStart(e)}}const Cl="\\[\\]\\.:\\/",u_=new RegExp("["+Cl+"]","g"),Rl="[^"+Cl+"]",h_="[^"+Cl.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",Rl),f_=/(WCOD+)?/.source.replace("WCOD",h_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),g_=new RegExp("^"+d_+f_+p_+m_+"$"),v_=["material","materials","bones","map"];class __{constructor(e,t,n){const s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){const t=g_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);v_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=__;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qc=new Ye;class x_{constructor(e,t,n=0,s=1/0){this.ray=new ir(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qc),this}intersectObject(e,t=!0,n=[]){return tl(e,this,n,t),n.sort(eu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)tl(e[s],this,n,t);return n.sort(eu),n}}function eu(i,e){return i.distance-e.distance}function tl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)tl(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var pn=Uint8Array,ss=Uint16Array,y_=Int32Array,ph=new pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mh=new pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),M_=new pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gh=function(i,e){for(var t=new ss(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new y_(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},vh=gh(ph,2),_h=vh.b,S_=vh.r;_h[28]=258,S_[258]=28;var T_=gh(mh,0),E_=T_.b,nl=new ss(32768);for(var St=0;St<32768;++St){var mi=(St&43690)>>1|(St&21845)<<1;mi=(mi&52428)>>2|(mi&13107)<<2,mi=(mi&61680)>>4|(mi&3855)<<4,nl[St]=((mi&65280)>>8|(mi&255)<<8)>>1}var $s=function(i,e,t){for(var n=i.length,s=0,r=new ss(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new ss(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new ss(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[nl[h]>>l]=c}else for(a=new ss(n),s=0;s<n;++s)i[s]&&(a[s]=nl[o[i[s]-1]++]>>15-i[s]);return a},or=new pn(288);for(var St=0;St<144;++St)or[St]=8;for(var St=144;St<256;++St)or[St]=9;for(var St=256;St<280;++St)or[St]=7;for(var St=280;St<288;++St)or[St]=8;var xh=new pn(32);for(var St=0;St<32;++St)xh[St]=5;var b_=$s(or,9,1),w_=$s(xh,5,1),sa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},yn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ra=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},D_=function(i){return(i+7)/8|0},A_=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new pn(i.subarray(e,t))},C_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(i,e,t){var n=new Error(e||C_[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},R_=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new pn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new pn(s*3));var c=function(ht){var et=t.length;if(ht>et){var O=new pn(Math.max(et*2,ht));O.set(t),t=O}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,v=e.d,x=e.m,g=e.n,m=s*8;do{if(!p){u=yn(i,h,1);var b=yn(i,h+1,3);if(h+=3,b)if(b==1)p=b_,v=w_,x=9,g=5;else if(b==2){var U=yn(i,h,31)+257,P=yn(i,h+10,15)+4,V=U+yn(i,h+5,31)+1;h+=14;for(var te=new pn(V),y=new pn(19),A=0;A<P;++A)y[M_[A]]=yn(i,h+A*3,7);h+=P*3;for(var Z=sa(y),K=(1<<Z)-1,ee=$s(y,Z,1),A=0;A<V;){var le=ee[yn(i,h,K)];h+=le&15;var S=le>>4;if(S<16)te[A++]=S;else{var z=0,se=0;for(S==16?(se=3+yn(i,h,3),h+=2,z=te[A-1]):S==17?(se=3+yn(i,h,7),h+=3):S==18&&(se=11+yn(i,h,127),h+=7);se--;)te[A++]=z}}var $=te.subarray(0,U),W=te.subarray(U);x=sa($),g=sa(W),p=$s($,x,1),v=$s(W,g,1)}else Mn(1);else{var S=D_(h)+4,C=i[S-4]|i[S-3]<<8,F=S+C;if(F>s){l&&Mn(0);break}a&&c(d+C),t.set(i.subarray(S,F),d),e.b=d+=C,e.p=h=F*8,e.f=u;continue}if(h>m){l&&Mn(0);break}}a&&c(d+131072);for(var ye=(1<<x)-1,Me=(1<<g)-1,Fe=h;;Fe=h){var z=p[ra(i,h)&ye],ke=z>>4;if(h+=z&15,h>m){l&&Mn(0);break}if(z||Mn(2),ke<256)t[d++]=ke;else if(ke==256){Fe=h,p=null;break}else{var Q=ke-254;if(ke>264){var A=ke-257,ne=ph[A];Q=yn(i,h,(1<<ne)-1)+_h[A],h+=ne}var pe=v[ra(i,h)&Me],_e=pe>>4;pe||Mn(3),h+=pe&15;var W=E_[_e];if(_e>3){var ne=mh[_e];W+=ra(i,h)&(1<<ne)-1,h+=ne}if(h>m){l&&Mn(0);break}a&&c(d+131072);var Be=d+Q;if(d<W){var Ve=r-W,ze=Math.min(W,Be);for(Ve+d<0&&Mn(3);d<ze;++d)t[d]=n[Ve+d]}for(;d<Be;++d)t[d]=t[d-W]}}e.l=p,e.p=Fe,e.b=d,e.f=u,p&&(u=1,e.m=x,e.d=v,e.n=g)}while(!u);return d!=t.length&&o?A_(t,0,d):t.subarray(0,d)},P_=new pn(0),U_=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Mn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Mn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Gr(i,e){return R_(i.subarray(U_(i),-4),{i:2},e,e)}var L_=typeof TextDecoder<"u"&&new TextDecoder,N_=0;try{L_.decode(P_,{stream:!0}),N_=1}catch{}class I_ extends n_{constructor(e){super(e),this.type=Qn}parse(e){const te=Math.pow(2.7182818,2.2);function y(f,_){let M=0;for(let I=0;I<65536;++I)(I==0||f[I>>3]&1<<(I&7))&&(_[M++]=I);const T=M-1;for(;M<65536;)_[M++]=0;return T}function A(f){for(let _=0;_<16384;_++)f[_]={},f[_].len=0,f[_].lit=0,f[_].p=null}const Z={l:0,c:0,lc:0};function K(f,_,M,T,I){for(;M<f;)_=_<<8|it(T,I),M+=8;M-=f,Z.l=_>>M&(1<<f)-1,Z.c=_,Z.lc=M}const ee=new Array(59);function le(f){for(let M=0;M<=58;++M)ee[M]=0;for(let M=0;M<65537;++M)ee[f[M]]+=1;let _=0;for(let M=58;M>0;--M){const T=_+ee[M]>>1;ee[M]=_,_=T}for(let M=0;M<65537;++M){const T=f[M];T>0&&(f[M]=T|ee[T]++<<6)}}function z(f,_,M,T,I,N){const H=_;let J=0,q=0;for(;T<=I;T++){if(H.value-_.value>M)return!1;K(6,J,q,f,H);const j=Z.l;if(J=Z.c,q=Z.lc,N[T]=j,j==63){if(H.value-_.value>M)throw new Error("Something wrong with hufUnpackEncTable");K(8,J,q,f,H);let G=Z.l+6;if(J=Z.c,q=Z.lc,T+G>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)N[T++]=0;T--}else if(j>=59){let G=j-59+2;if(T+G>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)N[T++]=0;T--}}le(N)}function se(f){return f&63}function $(f){return f>>6}function W(f,_,M,T){for(;_<=M;_++){const I=$(f[_]),N=se(f[_]);if(I>>N)throw new Error("Invalid table entry");if(N>14){const H=T[I>>N-14];if(H.len)throw new Error("Invalid table entry");if(H.lit++,H.p){const J=H.p;H.p=new Array(H.lit);for(let q=0;q<H.lit-1;++q)H.p[q]=J[q]}else H.p=new Array(1);H.p[H.lit-1]=_}else if(N){let H=0;for(let J=1<<14-N;J>0;J--){const q=T[(I<<14-N)+H];if(q.len||q.p)throw new Error("Invalid table entry");q.len=N,q.lit=_,H++}}}return!0}const ye={c:0,lc:0};function Me(f,_,M,T){f=f<<8|it(M,T),_+=8,ye.c=f,ye.lc=_}const Fe={c:0,lc:0};function ke(f,_,M,T,I,N,H,J,q){if(f==_){T<8&&(Me(M,T,I,N),M=ye.c,T=ye.lc),T-=8;let j=M>>T;if(j=new Uint8Array([j])[0],J.value+j>q)return!1;const G=H[J.value-1];for(;j-- >0;)H[J.value++]=G}else if(J.value<q)H[J.value++]=f;else return!1;Fe.c=M,Fe.lc=T}function Q(f){return f&65535}function ne(f){const _=Q(f);return _>32767?_-65536:_}const pe={a:0,b:0};function _e(f,_){const M=ne(f),I=ne(_),N=M+(I&1)+(I>>1),H=N,J=N-I;pe.a=H,pe.b=J}function Be(f,_){const M=Q(f),T=Q(_),I=M-(T>>1)&65535,N=T+I-32768&65535;pe.a=N,pe.b=I}function Ve(f,_,M,T,I,N,H){const J=H<16384,q=M>I?I:M;let j=1,G,ue;for(;j<=q;)j<<=1;for(j>>=1,G=j,j>>=1;j>=1;){ue=0;const ge=ue+N*(I-G),ve=N*j,Ce=N*G,de=T*j,ie=T*G;let Ue,Le,ct,At;for(;ue<=ge;ue+=Ce){let Qe=ue;const st=ue+T*(M-G);for(;Qe<=st;Qe+=ie){const $e=Qe+de,wt=Qe+ve,bt=wt+de;J?(_e(f[Qe+_],f[wt+_]),Ue=pe.a,ct=pe.b,_e(f[$e+_],f[bt+_]),Le=pe.a,At=pe.b,_e(Ue,Le),f[Qe+_]=pe.a,f[$e+_]=pe.b,_e(ct,At),f[wt+_]=pe.a,f[bt+_]=pe.b):(Be(f[Qe+_],f[wt+_]),Ue=pe.a,ct=pe.b,Be(f[$e+_],f[bt+_]),Le=pe.a,At=pe.b,Be(Ue,Le),f[Qe+_]=pe.a,f[$e+_]=pe.b,Be(ct,At),f[wt+_]=pe.a,f[bt+_]=pe.b)}if(M&j){const $e=Qe+ve;J?_e(f[Qe+_],f[$e+_]):Be(f[Qe+_],f[$e+_]),Ue=pe.a,f[$e+_]=pe.b,f[Qe+_]=Ue}}if(I&j){let Qe=ue;const st=ue+T*(M-G);for(;Qe<=st;Qe+=ie){const $e=Qe+de;J?_e(f[Qe+_],f[$e+_]):Be(f[Qe+_],f[$e+_]),Ue=pe.a,f[$e+_]=pe.b,f[Qe+_]=Ue}}G=j,j>>=1}return ue}function ze(f,_,M,T,I,N,H,J,q){let j=0,G=0;const ue=H,ge=Math.trunc(T.value+(I+7)/8);for(;T.value<ge;)for(Me(j,G,M,T),j=ye.c,G=ye.lc;G>=14;){const Ce=j>>G-14&16383,de=_[Ce];if(de.len)G-=de.len,ke(de.lit,N,j,G,M,T,J,q,ue),j=Fe.c,G=Fe.lc;else{if(!de.p)throw new Error("hufDecode issues");let ie;for(ie=0;ie<de.lit;ie++){const Ue=se(f[de.p[ie]]);for(;G<Ue&&T.value<ge;)Me(j,G,M,T),j=ye.c,G=ye.lc;if(G>=Ue&&$(f[de.p[ie]])==(j>>G-Ue&(1<<Ue)-1)){G-=Ue,ke(de.p[ie],N,j,G,M,T,J,q,ue),j=Fe.c,G=Fe.lc;break}}if(ie==de.lit)throw new Error("hufDecode issues")}}const ve=8-I&7;for(j>>=ve,G-=ve;G>0;){const Ce=_[j<<14-G&16383];if(Ce.len)G-=Ce.len,ke(Ce.lit,N,j,G,M,T,J,q,ue),j=Fe.c,G=Fe.lc;else throw new Error("hufDecode issues")}return!0}function ht(f,_,M,T,I,N){const H={value:0},J=M.value,q=Se(_,M),j=Se(_,M);M.value+=4;const G=Se(_,M);if(M.value+=4,q<0||q>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ue=new Array(65537),ge=new Array(16384);A(ge);const ve=T-(M.value-J);if(z(f,M,ve,q,j,ue),G>8*(T-(M.value-J)))throw new Error("Something wrong with hufUncompress");W(ue,q,j,ge),ze(ue,ge,f,M,G,j,N,I,H)}function et(f,_,M){for(let T=0;T<M;++T)_[T]=f[_[T]]}function O(f){for(let _=1;_<f.length;_++){const M=f[_-1]+f[_]-128;f[_]=M}}function Vt(f,_){let M=0,T=Math.floor((f.length+1)/2),I=0;const N=f.length-1;for(;!(I>N||(_[I++]=f[M++],I>N));)_[I++]=f[T++]}function tt(f){let _=f.byteLength;const M=new Array;let T=0;const I=new DataView(f);for(;_>0;){const N=I.getInt8(T++);if(N<0){const H=-N;_-=H+1;for(let J=0;J<H;J++)M.push(I.getUint8(T++))}else{const H=N;_-=2;const J=I.getUint8(T++);for(let q=0;q<H+1;q++)M.push(J)}}return M}function dt(f,_,M,T,I,N){let H=new DataView(N.buffer);const J=M[f.idx[0]].width,q=M[f.idx[0]].height,j=3,G=Math.floor(J/8),ue=Math.ceil(J/8),ge=Math.ceil(q/8),ve=J-(ue-1)*8,Ce=q-(ge-1)*8,de={value:0},ie=new Array(j),Ue=new Array(j),Le=new Array(j),ct=new Array(j),At=new Array(j);for(let st=0;st<j;++st)At[st]=_[f.idx[st]],ie[st]=st<1?0:ie[st-1]+ue*ge,Ue[st]=new Float32Array(64),Le[st]=new Uint16Array(64),ct[st]=new Uint16Array(ue*64);for(let st=0;st<ge;++st){let $e=8;st==ge-1&&($e=Ce);let wt=8;for(let je=0;je<ue;++je){je==ue-1&&(wt=ve);for(let vt=0;vt<j;++vt)Le[vt].fill(0),Le[vt][0]=I[ie[vt]++],Ge(de,T,Le[vt]),yt(Le[vt],Ue[vt]),Xe(Ue[vt]);R(Ue);for(let vt=0;vt<j;++vt)w(Ue[vt],ct[vt],je*64)}let bt=0;for(let je=0;je<j;++je){const vt=M[f.idx[je]].type;for(let gn=8*st;gn<8*st+$e;++gn){bt=At[je][gn];for(let li=0;li<G;++li){const An=li*64+(gn&7)*8;H.setUint16(bt+0*2*vt,ct[je][An+0],!0),H.setUint16(bt+1*2*vt,ct[je][An+1],!0),H.setUint16(bt+2*2*vt,ct[je][An+2],!0),H.setUint16(bt+3*2*vt,ct[je][An+3],!0),H.setUint16(bt+4*2*vt,ct[je][An+4],!0),H.setUint16(bt+5*2*vt,ct[je][An+5],!0),H.setUint16(bt+6*2*vt,ct[je][An+6],!0),H.setUint16(bt+7*2*vt,ct[je][An+7],!0),bt+=8*2*vt}}if(G!=ue)for(let gn=8*st;gn<8*st+$e;++gn){const li=At[je][gn]+8*G*2*vt,An=G*64+(gn&7)*8;for(let pr=0;pr<wt;++pr)H.setUint16(li+pr*2*vt,ct[je][An+pr],!0)}}}const Qe=new Uint16Array(J);H=new DataView(N.buffer);for(let st=0;st<j;++st){M[f.idx[st]].decoded=!0;const $e=M[f.idx[st]].type;if(M[st].type==2)for(let wt=0;wt<q;++wt){const bt=At[st][wt];for(let je=0;je<J;++je)Qe[je]=H.getUint16(bt+je*2*$e,!0);for(let je=0;je<J;++je)H.setFloat32(bt+je*2*$e,k(Qe[je]),!0)}}}function Ge(f,_,M){let T,I=1;for(;I<64;)T=_[f.value],T==65280?I=64:T>>8==255?I+=T&255:(M[I]=T,I++),f.value++}function yt(f,_){_[0]=k(f[0]),_[1]=k(f[1]),_[2]=k(f[5]),_[3]=k(f[6]),_[4]=k(f[14]),_[5]=k(f[15]),_[6]=k(f[27]),_[7]=k(f[28]),_[8]=k(f[2]),_[9]=k(f[4]),_[10]=k(f[7]),_[11]=k(f[13]),_[12]=k(f[16]),_[13]=k(f[26]),_[14]=k(f[29]),_[15]=k(f[42]),_[16]=k(f[3]),_[17]=k(f[8]),_[18]=k(f[12]),_[19]=k(f[17]),_[20]=k(f[25]),_[21]=k(f[30]),_[22]=k(f[41]),_[23]=k(f[43]),_[24]=k(f[9]),_[25]=k(f[11]),_[26]=k(f[18]),_[27]=k(f[24]),_[28]=k(f[31]),_[29]=k(f[40]),_[30]=k(f[44]),_[31]=k(f[53]),_[32]=k(f[10]),_[33]=k(f[19]),_[34]=k(f[23]),_[35]=k(f[32]),_[36]=k(f[39]),_[37]=k(f[45]),_[38]=k(f[52]),_[39]=k(f[54]),_[40]=k(f[20]),_[41]=k(f[22]),_[42]=k(f[33]),_[43]=k(f[38]),_[44]=k(f[46]),_[45]=k(f[51]),_[46]=k(f[55]),_[47]=k(f[60]),_[48]=k(f[21]),_[49]=k(f[34]),_[50]=k(f[37]),_[51]=k(f[47]),_[52]=k(f[50]),_[53]=k(f[56]),_[54]=k(f[59]),_[55]=k(f[61]),_[56]=k(f[35]),_[57]=k(f[36]),_[58]=k(f[48]),_[59]=k(f[49]),_[60]=k(f[57]),_[61]=k(f[58]),_[62]=k(f[62]),_[63]=k(f[63])}function Xe(f){const _=.5*Math.cos(.7853975),M=.5*Math.cos(3.14159/16),T=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),H=.5*Math.cos(3*3.14159/8),J=.5*Math.cos(7*3.14159/16),q=new Array(4),j=new Array(4),G=new Array(4),ue=new Array(4);for(let ge=0;ge<8;++ge){const ve=ge*8;q[0]=T*f[ve+2],q[1]=H*f[ve+2],q[2]=T*f[ve+6],q[3]=H*f[ve+6],j[0]=M*f[ve+1]+I*f[ve+3]+N*f[ve+5]+J*f[ve+7],j[1]=I*f[ve+1]-J*f[ve+3]-M*f[ve+5]-N*f[ve+7],j[2]=N*f[ve+1]-M*f[ve+3]+J*f[ve+5]+I*f[ve+7],j[3]=J*f[ve+1]-N*f[ve+3]+I*f[ve+5]-M*f[ve+7],G[0]=_*(f[ve+0]+f[ve+4]),G[3]=_*(f[ve+0]-f[ve+4]),G[1]=q[0]+q[3],G[2]=q[1]-q[2],ue[0]=G[0]+G[1],ue[1]=G[3]+G[2],ue[2]=G[3]-G[2],ue[3]=G[0]-G[1],f[ve+0]=ue[0]+j[0],f[ve+1]=ue[1]+j[1],f[ve+2]=ue[2]+j[2],f[ve+3]=ue[3]+j[3],f[ve+4]=ue[3]-j[3],f[ve+5]=ue[2]-j[2],f[ve+6]=ue[1]-j[1],f[ve+7]=ue[0]-j[0]}for(let ge=0;ge<8;++ge)q[0]=T*f[16+ge],q[1]=H*f[16+ge],q[2]=T*f[48+ge],q[3]=H*f[48+ge],j[0]=M*f[8+ge]+I*f[24+ge]+N*f[40+ge]+J*f[56+ge],j[1]=I*f[8+ge]-J*f[24+ge]-M*f[40+ge]-N*f[56+ge],j[2]=N*f[8+ge]-M*f[24+ge]+J*f[40+ge]+I*f[56+ge],j[3]=J*f[8+ge]-N*f[24+ge]+I*f[40+ge]-M*f[56+ge],G[0]=_*(f[ge]+f[32+ge]),G[3]=_*(f[ge]-f[32+ge]),G[1]=q[0]+q[3],G[2]=q[1]-q[2],ue[0]=G[0]+G[1],ue[1]=G[3]+G[2],ue[2]=G[3]-G[2],ue[3]=G[0]-G[1],f[0+ge]=ue[0]+j[0],f[8+ge]=ue[1]+j[1],f[16+ge]=ue[2]+j[2],f[24+ge]=ue[3]+j[3],f[32+ge]=ue[3]-j[3],f[40+ge]=ue[2]-j[2],f[48+ge]=ue[1]-j[1],f[56+ge]=ue[0]-j[0]}function R(f){for(let _=0;_<64;++_){const M=f[0][_],T=f[1][_],I=f[2][_];f[0][_]=M+1.5747*I,f[1][_]=M-.1873*T-.4682*I,f[2][_]=M+1.8556*T}}function w(f,_,M){for(let T=0;T<64;++T)_[M+T]=rc.toHalfFloat(Y(f[T]))}function Y(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(te,Math.abs(f)-1)}function oe(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function fe(f){const _=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),M=new Uint8Array(tt(_)),T=new Uint8Array(M.length);return O(M),Vt(M,T),new DataView(T.buffer)}function re(f){const _=f.array.slice(f.offset.value,f.offset.value+f.size),M=Gr(_),T=new Uint8Array(M.length);return O(M),Vt(M,T),new DataView(T.buffer)}function Ne(f){const _=f.viewer,M={value:f.offset.value},T=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),I=new Uint8Array(8192);let N=0;const H=new Array(f.inputChannels.length);for(let Ce=0,de=f.inputChannels.length;Ce<de;Ce++)H[Ce]={},H[Ce].start=N,H[Ce].end=H[Ce].start,H[Ce].nx=f.columns,H[Ce].ny=f.lines,H[Ce].size=f.type,N+=H[Ce].nx*H[Ce].ny*H[Ce].size;const J=ae(_,M),q=ae(_,M);if(q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(J<=q)for(let Ce=0;Ce<q-J+1;Ce++)I[Ce+J]=He(_,M);const j=new Uint16Array(65536),G=y(I,j),ue=Se(_,M);ht(f.array,_,M,ue,T,N);for(let Ce=0;Ce<f.inputChannels.length;++Ce){const de=H[Ce];for(let ie=0;ie<H[Ce].size;++ie)Ve(T,de.start+ie,de.nx,de.size,de.ny,de.nx*de.size,G)}et(j,T,N);let ge=0;const ve=new Uint8Array(T.buffer.byteLength);for(let Ce=0;Ce<f.lines;Ce++)for(let de=0;de<f.inputChannels.length;de++){const ie=H[de],Ue=ie.nx*ie.size,Le=new Uint8Array(T.buffer,ie.end*2,Ue*2);ve.set(Le,ge),ge+=Ue*2,ie.end+=Ue}return new DataView(ve.buffer)}function Ee(f){const _=f.array.slice(f.offset.value,f.offset.value+f.size),M=Gr(_),T=f.inputChannels.length*f.lines*f.columns*f.totalBytes,I=new ArrayBuffer(T),N=new DataView(I);let H=0,J=0;const q=new Array(4);for(let j=0;j<f.lines;j++)for(let G=0;G<f.inputChannels.length;G++){let ue=0;switch(f.inputChannels[G].pixelType){case 1:q[0]=H,q[1]=q[0]+f.columns,H=q[1]+f.columns;for(let ve=0;ve<f.columns;++ve){const Ce=M[q[0]++]<<8|M[q[1]++];ue+=Ce,N.setUint16(J,ue,!0),J+=2}break;case 2:q[0]=H,q[1]=q[0]+f.columns,q[2]=q[1]+f.columns,H=q[2]+f.columns;for(let ve=0;ve<f.columns;++ve){const Ce=M[q[0]++]<<24|M[q[1]++]<<16|M[q[2]++]<<8;ue+=Ce,N.setUint32(J,ue,!0),J+=4}break}}return N}function Ae(f){const _=f.viewer,M={value:f.offset.value},T=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),I={version:Ke(_,M),unknownUncompressedSize:Ke(_,M),unknownCompressedSize:Ke(_,M),acCompressedSize:Ke(_,M),dcCompressedSize:Ke(_,M),rleCompressedSize:Ke(_,M),rleUncompressedSize:Ke(_,M),rleRawSize:Ke(_,M),totalAcUncompressedCount:Ke(_,M),totalDcUncompressedCount:Ke(_,M),acCompression:Ke(_,M)};if(I.version<2)throw new Error("EXRLoader.parse: "+Vn.compression+" version "+I.version+" is unsupported");const N=new Array;let H=ae(_,M)-2;for(;H>0;){const de=nt(_.buffer,M),ie=He(_,M),Ue=ie>>2&3,Le=(ie>>4)-1,ct=new Int8Array([Le])[0],At=He(_,M);N.push({name:de,index:ct,type:At,compression:Ue}),H-=de.length+3}const J=Vn.channels,q=new Array(f.inputChannels.length);for(let de=0;de<f.inputChannels.length;++de){const ie=q[de]={},Ue=J[de];ie.name=Ue.name,ie.compression=0,ie.decoded=!1,ie.type=Ue.pixelType,ie.pLinear=Ue.pLinear,ie.width=f.columns,ie.height=f.lines}const j={idx:new Array(3)};for(let de=0;de<f.inputChannels.length;++de){const ie=q[de];for(let Ue=0;Ue<N.length;++Ue){const Le=N[Ue];ie.name==Le.name&&(ie.compression=Le.compression,Le.index>=0&&(j.idx[Le.index]=de),ie.offset=de)}}let G,ue,ge;if(I.acCompressedSize>0)switch(I.acCompression){case 0:G=new Uint16Array(I.totalAcUncompressedCount),ht(f.array,_,M,I.acCompressedSize,G,I.totalAcUncompressedCount);break;case 1:const de=f.array.slice(M.value,M.value+I.totalAcUncompressedCount),ie=Gr(de);G=new Uint16Array(ie.buffer),M.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const de={array:f.array,offset:M,size:I.dcCompressedSize};ue=new Uint16Array(re(de).buffer),M.value+=I.dcCompressedSize}if(I.rleRawSize>0){const de=f.array.slice(M.value,M.value+I.rleCompressedSize),ie=Gr(de);ge=tt(ie.buffer),M.value+=I.rleCompressedSize}let ve=0;const Ce=new Array(q.length);for(let de=0;de<Ce.length;++de)Ce[de]=new Array;for(let de=0;de<f.lines;++de)for(let ie=0;ie<q.length;++ie)Ce[ie].push(ve),ve+=q[ie].width*f.type*2;dt(j,Ce,q,G,ue,T);for(let de=0;de<q.length;++de){const ie=q[de];if(!ie.decoded)switch(ie.compression){case 2:let Ue=0,Le=0;for(let ct=0;ct<f.lines;++ct){let At=Ce[de][Ue];for(let Qe=0;Qe<ie.width;++Qe){for(let st=0;st<2*ie.type;++st)T[At++]=ge[Le+st*ie.width*ie.height];Le++}Ue++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(T.buffer)}function nt(f,_){const M=new Uint8Array(f);let T=0;for(;M[_.value+T]!=0;)T+=1;const I=new TextDecoder().decode(M.slice(_.value,_.value+T));return _.value=_.value+T+1,I}function xe(f,_,M){const T=new TextDecoder().decode(new Uint8Array(f).slice(_.value,_.value+M));return _.value=_.value+M,T}function Pe(f,_){const M=Ie(f,_),T=Se(f,_);return[M,T]}function We(f,_){const M=Se(f,_),T=Se(f,_);return[M,T]}function Ie(f,_){const M=f.getInt32(_.value,!0);return _.value=_.value+4,M}function Se(f,_){const M=f.getUint32(_.value,!0);return _.value=_.value+4,M}function it(f,_){const M=f[_.value];return _.value=_.value+1,M}function He(f,_){const M=f.getUint8(_.value);return _.value=_.value+1,M}const Ke=function(f,_){let M;return"getBigInt64"in DataView.prototype?M=Number(f.getBigInt64(_.value,!0)):M=f.getUint32(_.value+4,!0)+Number(f.getUint32(_.value,!0)<<32),_.value+=8,M};function B(f,_){const M=f.getFloat32(_.value,!0);return _.value+=4,M}function we(f,_){return rc.toHalfFloat(B(f,_))}function k(f){const _=(f&31744)>>10,M=f&1023;return(f>>15?-1:1)*(_?_===31?M?NaN:1/0:Math.pow(2,_-15)*(1+M/1024):6103515625e-14*(M/1024))}function ae(f,_){const M=f.getUint16(_.value,!0);return _.value+=2,M}function be(f,_){return k(ae(f,_))}function De(f,_,M,T){const I=M.value,N=[];for(;M.value<I+T-1;){const H=nt(_,M),J=Ie(f,M),q=He(f,M);M.value+=3;const j=Ie(f,M),G=Ie(f,M);N.push({name:H,pixelType:J,pLinear:q,xSampling:j,ySampling:G})}return M.value+=1,N}function lt(f,_){const M=B(f,_),T=B(f,_),I=B(f,_),N=B(f,_),H=B(f,_),J=B(f,_),q=B(f,_),j=B(f,_);return{redX:M,redY:T,greenX:I,greenY:N,blueX:H,blueY:J,whiteX:q,whiteY:j}}function Et(f,_){const M=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],T=He(f,_);return M[T]}function zt(f,_){const M=Ie(f,_),T=Ie(f,_),I=Ie(f,_),N=Ie(f,_);return{xMin:M,yMin:T,xMax:I,yMax:N}}function ft(f,_){const M=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],T=He(f,_);return M[T]}function Ht(f,_){const M=["ENVMAP_LATLONG","ENVMAP_CUBE"],T=He(f,_);return M[T]}function mn(f,_){const M=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],T=["ROUND_DOWN","ROUND_UP"],I=Se(f,_),N=Se(f,_),H=He(f,_);return{xSize:I,ySize:N,levelMode:M[H&15],roundingMode:T[H>>4]}}function lr(f,_){const M=B(f,_),T=B(f,_);return[M,T]}function cr(f,_){const M=B(f,_),T=B(f,_),I=B(f,_);return[M,T,I]}function kn(f,_,M,T,I){if(T==="string"||T==="stringvector"||T==="iccProfile")return xe(_,M,I);if(T==="chlist")return De(f,_,M,I);if(T==="chromaticities")return lt(f,M);if(T==="compression")return Et(f,M);if(T==="box2i")return zt(f,M);if(T==="envmap")return Ht(f,M);if(T==="tiledesc")return mn(f,M);if(T==="lineOrder")return ft(f,M);if(T==="float")return B(f,M);if(T==="v2f")return lr(f,M);if(T==="v3f")return cr(f,M);if(T==="int")return Ie(f,M);if(T==="rational")return Pe(f,M);if(T==="timecode")return We(f,M);if(T==="preview")return M.value+=I,"skipped";M.value+=I}function Cs(f,_){const M=Math.log2(f);return _=="ROUND_DOWN"?Math.floor(M):Math.ceil(M)}function ur(f,_,M){let T=0;switch(f.levelMode){case"ONE_LEVEL":T=1;break;case"MIPMAP_LEVELS":T=Cs(Math.max(_,M),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return T}function Rs(f,_,M,T){const I=new Array(f);for(let N=0;N<f;N++){const H=1<<N;let J=_/H|0;T=="ROUND_UP"&&J*H<_&&(J+=1);const q=Math.max(J,1);I[N]=(q+M-1)/M|0}return I}function Vi(){const f=this,_=f.offset,M={value:0};for(let T=0;T<f.tileCount;T++){const I=Ie(f.viewer,_),N=Ie(f.viewer,_);_.value+=8,f.size=Se(f.viewer,_);const H=I*f.blockWidth,J=N*f.blockHeight;f.columns=H+f.blockWidth>f.width?f.width-H:f.blockWidth,f.lines=J+f.blockHeight>f.height?f.height-J:f.blockHeight;const q=f.columns*f.totalBytes,G=f.size<f.lines*q?f.uncompress(f):oe(f);_.value+=f.size;for(let ue=0;ue<f.lines;ue++){const ge=ue*f.columns*f.totalBytes;for(let ve=0;ve<f.inputChannels.length;ve++){const Ce=Vn.channels[ve].name,de=f.channelByteOffsets[Ce]*f.columns,ie=f.decodeChannels[Ce];if(ie===void 0)continue;M.value=ge+de;const Ue=(f.height-(1+J+ue))*f.outLineWidth;for(let Le=0;Le<f.columns;Le++){const ct=Ue+(Le+H)*f.outputChannels+ie;f.byteArray[ct]=f.getter(G,M)}}}}}function hr(){const f=this,_=f.offset,M={value:0};for(let T=0;T<f.height/f.blockHeight;T++){const I=Ie(f.viewer,_)-Vn.dataWindow.yMin;f.size=Se(f.viewer,_),f.lines=I+f.blockHeight>f.height?f.height-I:f.blockHeight;const N=f.columns*f.totalBytes,J=f.size<f.lines*N?f.uncompress(f):oe(f);_.value+=f.size;for(let q=0;q<f.blockHeight;q++){const j=T*f.blockHeight,G=q+f.scanOrder(j);if(G>=f.height)continue;const ue=q*N,ge=(f.height-1-G)*f.outLineWidth;for(let ve=0;ve<f.inputChannels.length;ve++){const Ce=Vn.channels[ve].name,de=f.channelByteOffsets[Ce]*f.columns,ie=f.decodeChannels[Ce];if(ie!==void 0){M.value=ue+de;for(let Ue=0;Ue<f.columns;Ue++){const Le=ge+Ue*f.outputChannels+ie;f.byteArray[Le]=f.getter(J,M)}}}}}}function zi(f,_,M){const T={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");T.version=f.getUint8(4);const I=f.getUint8(5);T.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},M.value=8;let N=!0;for(;N;){const H=nt(_,M);if(H==0)N=!1;else{const J=nt(_,M),q=Se(f,M),j=kn(f,_,M,J,q);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${J}'.`):T[H]=j}}if(I&-7)throw console.error("THREE.EXRHeader:",T),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return T}function dr(f,_,M,T,I){const N={size:0,viewer:_,array:M,offset:T,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Pt};switch(f.compression){case"NO_COMPRESSION":N.blockHeight=1,N.uncompress=oe;break;case"RLE_COMPRESSION":N.blockHeight=1,N.uncompress=fe;break;case"ZIPS_COMPRESSION":N.blockHeight=1,N.uncompress=re;break;case"ZIP_COMPRESSION":N.blockHeight=16,N.uncompress=re;break;case"PIZ_COMPRESSION":N.blockHeight=32,N.uncompress=Ne;break;case"PXR24_COMPRESSION":N.blockHeight=16,N.uncompress=Ee;break;case"DWAA_COMPRESSION":N.blockHeight=32,N.uncompress=Ae;break;case"DWAB_COMPRESSION":N.blockHeight=256,N.uncompress=Ae;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const H={};for(const G of f.channels)switch(G.name){case"Y":case"R":case"G":case"B":case"A":H[G.name]=!0,N.type=G.pixelType}let J=!1;if(H.R&&H.G&&H.B)J=!H.A,N.outputChannels=4,N.decodeChannels={R:0,G:1,B:2,A:3};else if(H.Y)N.outputChannels=1,N.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(N.type==1)switch(I){case Zt:N.getter=be;break;case Qn:N.getter=ae;break}else if(N.type==2)switch(I){case Zt:N.getter=B;break;case Qn:N.getter=we}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+f.compression+".");N.columns=N.width;const q=N.width*N.height*N.outputChannels;switch(I){case Zt:N.byteArray=new Float32Array(q),J&&N.byteArray.fill(1,0,q);break;case Qn:N.byteArray=new Uint16Array(q),J&&N.byteArray.fill(15360,0,q);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let j=0;for(const G of f.channels)N.decodeChannels[G.name]!==void 0&&(N.channelByteOffsets[G.name]=j),j+=G.pixelType*2;if(N.totalBytes=j,N.outLineWidth=N.width*N.outputChannels,f.lineOrder==="INCREASING_Y"?N.scanOrder=G=>G:N.scanOrder=G=>N.height-1-G,N.outputChannels==4?(N.format=un,N.colorSpace=Pt):(N.format=fo,N.colorSpace=Kn),f.spec.singleTile){N.blockHeight=f.tiles.ySize,N.blockWidth=f.tiles.xSize;const G=ur(f.tiles,N.width,N.height),ue=Rs(G,N.width,f.tiles.xSize,f.tiles.roundingMode),ge=Rs(G,N.height,f.tiles.ySize,f.tiles.roundingMode);N.tileCount=ue[0]*ge[0];for(let ve=0;ve<G;ve++)for(let Ce=0;Ce<ge[ve];Ce++)for(let de=0;de<ue[ve];de++)Ke(_,T);N.decode=Vi.bind(N)}else{N.blockWidth=N.width;const G=Math.ceil(N.height/N.blockHeight);for(let ue=0;ue<G;ue++)Ke(_,T);N.decode=hr.bind(N)}return N}const Ps={value:0},fr=new DataView(e),yo=new Uint8Array(e),Vn=zi(fr,e,Ps),D=dr(Vn,fr,yo,Ps,this.type);return D.decode(),{header:Vn,width:D.width,height:D.height,data:D.byteArray,format:D.format,colorSpace:D.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Rt,o.magFilter=Rt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}}function tu(i,e){if(e===Hd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$a||e===Vu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===$a)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class F_ extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new z_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new tx(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=js.extractUrlBase(e);o=js.resolveURL(c,this.path)}else o=js.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yh){try{o[rt.KHR_BINARY_GLTF]=new nx(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new k_;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new ix(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new sx;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new rx;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function O_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class B_{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new l_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new o_(u),c.distance=h;break;case"spot":c=new s_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class k_{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ii}extendParams(e,t,n){const s=[];e.color=new ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(s)}}class V_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class z_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(r)}}class H_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class G_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class W_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class X_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Y_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(a[0],a[1],a[2],Pt),Promise.all(r)}}class q_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(a[0],a[1],a[2],Pt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class J_{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Q_{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ex{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class tx{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const v of h){const x=new Ye,g=new L,m=new Ei,b=new L(1,1,1),S=new rh(v.geometry,v.material,d);for(let C=0;C<d;C++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,C),l.SCALE&&b.fromBufferAttribute(l.SCALE,C),S.setMatrixAt(C,x.compose(g,m,b));for(const C in l)if(C==="_COLOR_0"){const F=l[C];S.instanceColor=new _s(F.array,F.itemSize,F.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&v.geometry.setAttribute(C,l[C]);at.prototype.copy.call(S,v),this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const yh="glTF",zs=12,nu={JSON:1313821514,BIN:5130562};class nx{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zs,r=new DataView(e,zs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===nu.JSON){const c=new Uint8Array(e,zs+o,a);this.content=n.decode(c)}else if(l===nu.BIN){const c=zs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ix{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=il[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=il[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=cs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(const v in p.attributes){const x=p.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}h(p)},a,c,Pt,d)})})}}class sx{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rx{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class Mh extends rr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,v=e*c,x=v-c,g=-2*p+3*d,m=p-d,b=1-g,S=m-d+h;for(let C=0;C!==a;C++){const F=o[x+C+a],U=o[x+C+l]*u,P=o[v+C+a],V=o[v+C]*u;r[C]=b*F+S*U+g*P+m*V}return r}}const ox=new Ei;class ax extends Mh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ox.fromArray(r).normalize().toArray(r),r}}const fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iu={9728:kt,9729:Rt,9984:Ru,9985:qr,9986:Ws,9987:Pn},su={33071:En,33648:io,10497:mt},oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lx={CUBICSPLINE:void 0,LINEAR:er,STEP:Qs},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),i.DefaultMaterial}function Pi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ux(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function hx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dx(i){let e;const t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+la(t.attributes):e=i.indices+":"+la(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+la(i.targets[n]);return e}function la(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const px=new Ye;class mx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new O_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new dh(this.options.manager):this.textureLoader=new c_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Pi(r,a,s),jn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(js.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=oa[s.type],a=cs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ot(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=oa[s.type],c=cs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let x,g;if(p&&p!==h){const m=Math.floor(d/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let S=t.cache.get(b);S||(x=new c(a,m*p,s.count*p/u),S=new I0(x,p/u),t.cache.add(b,S)),g=new xl(S,l,d%p/u,v)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),g=new Ot(x,l,v);if(s.sparse!==void 0){const m=oa.SCALAR,b=cs[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,F=new b(o[1],S,s.sparse.count*m),U=new c(o[2],C,s.sparse.count*l);a!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,V=F.length;P<V;P++){const te=F[P];if(g.setX(te,U[P*l]),l>=2&&g.setY(te,U[P*l+1]),l>=3&&g.setZ(te,U[P*l+2]),l>=4&&g.setW(te,U[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=iu[d.magFilter]||Rt,u.minFilter=iu[d.minFilter]||Pn,u.wrapS=su[d.wrapS]||mt,u.wrapT=su[d.wrapT]||mt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const g=new Dt(x);g.needsUpdate=!0,d(g)}),t.load(js.resolveURL(h,r.path),v,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),jn(h,o),h.userData.mimeType=o.mimeType||fx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ah,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new oh,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);const u=r.alphaMode||aa.OPAQUE;if(u===aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===aa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ii&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ii&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ii){const h=r.emissiveFactor;a.emissive=new ce().setRGB(h[0],h[1],h[2],Pt)}return r.emissiveTexture!==void 0&&o!==Ii&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Pi(s,h,r),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ru(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=dx(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ru(new Qt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?cx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,v=u.length;p<v;p++){const x=u[p],g=o[p];let m;const b=c[p];if(g.mode===fn.TRIANGLES||g.mode===fn.TRIANGLE_STRIP||g.mode===fn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new O0(x,b):new Tt(x,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===fn.TRIANGLE_STRIP?m.geometry=tu(m.geometry,Vu):g.mode===fn.TRIANGLE_FAN&&(m.geometry=tu(m.geometry,$a));else if(g.mode===fn.LINES)m=new V0(x,b);else if(g.mode===fn.LINE_STRIP)m=new Sl(x,b);else if(g.mode===fn.LINE_LOOP)m=new z0(x,b);else if(g.mode===fn.POINTS)m=new lh(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&hx(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),jn(m,r),g.extensions&&Pi(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Pi(s,h[0],r),h[0];const d=new ti;r.extensions&&Pi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,v=h.length;p<v;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(gf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new mo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ml(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],v=s.samplers[p.sampler],x=p.target,g=x.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,b=s.parameters!==void 0?s.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(v),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],v=h[2],x=h[3],g=h[4],m=[];for(let b=0,S=d.length;b<S;b++){const C=d[b],F=p[b],U=v[b],P=x[b],V=g[b];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const te=n._createAnimationTracks(C,F,U,P,V);if(te)for(let y=0;y<te.length;y++)m.push(te[y])}return new $0(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,px)});for(let p=0,v=h.length;p<v;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new sh:c.length>1?u=new ti:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),jn(u,r),r.extensions&&Pi(n,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ti;n.name&&(r.name=s.createUniqueName(n.name)),jn(r,n),n.extensions&&Pi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Ln||d instanceof Dt)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];gi[r.path]===gi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(gi[r.path]){case gi.weights:c=xs;break;case gi.rotation:c=ys;break;case gi.position:case gi.scale:c=Ms;break;default:switch(n.itemSize){case 1:c=xs;break;case 2:case 3:default:c=Ms;break}break}const u=s.interpolation!==void 0?lx[s.interpolation]:er,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const v=new c(l[d]+"."+gi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ys?ax:Mh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gx(i,e,t){const n=e.attributes,s=new ri;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=sl(cs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){const x=sl(cs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ru(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=il[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return pt.workingColorSpace!==Pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),jn(i,e),gx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ux(i,e.targets,t):i})}let Xt=0;const he={LOADER_PROGRESS:Xt++,MANIFEST_LOADED:Xt++,ATTACH:Xt++,DETACH:Xt++,DESTROY:Xt++,RESIZE:Xt++,AFTER_RESIZE:Xt++,SCROLL:Xt++,TICK:Xt++,RENDER:Xt++,BEFORE_TICK:Xt++,AFTER_RENDER:Xt++,POINTER_MOVE:Xt++,POINTER_UP:Xt++,POINTER_DOWN:Xt++,KEY_DOWN:Xt++},In={[Oe.HOMEPAGE]:[new ce(15265007),new ce(6058627)],[Oe.TRADING]:[new ce("#8597af"),new ce("#3c4e5f")],[Oe.CAPITAL]:[new ce("#e2e2d7"),new ce("#4fc3df")],[Oe.MARITIME]:[new ce(14869471),new ce("#6e92b8")],[Oe.FORT_ENERGY]:[new ce(4103095),new ce(528921)]},Sh={MOUNTAIN:1},vx="modulepreload",_x=function(i){return"/"+i},ou={},xx=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=_x(l),l in ou)return;ou[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":vx,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},yx="production";new URLSearchParams(window.location.search);const Th=yx==="development",au={tablet:768,desktop:1024},Mx={};let lu=!1;class ca{constructor(e,t,n,s=new Map,r,o,a){this.key=e,this.loader=n,this.loadedAssets=s,this.assetsInfos=r,this.progressCallback=o,this.isMobile=a,this.manifestEntries=t[this.key],this.add(...Object.keys(this.manifestEntries))}assetsToLoad=new Map;manifestEntries;add(...e){for(const t of e)!this.assetsToLoad.has(t)&&this.manifestEntries[t]&&this.assetsToLoad.set(t,this.manifestEntries[t])}getAsset(e){return this.loadedAssets.get(e)}getAssets(...e){return Object.fromEntries(e?[...this.loadedAssets.entries()].filter(([t])=>e.includes(t)):this.loadedAssets.entries())}async loadAsset(e){if(this.loadedAssets.has(e))return this.loadedAssets.get(e);try{const t=this.isMobile&&this.manifestEntries[e].pathMobile?this.manifestEntries[e].pathMobile:this.manifestEntries[e].path;this.manifestEntries[e].ktx2&&this.key==="models"&&await this.loadKTX2Loader(this.loader);const n=await this.loader.loadAsync(t,r=>this.assetProgress(r,e));let s;return n instanceof Dt?s=n:(s=n.scene,n?.scene?.isObject3D&&n.animations?.length&&(s.animations=n.animations)),s.userData||(s.userData={}),s.userData.path=t,s.userData.loaderKey=this.key,this.loadedAssets.set(e,s),this.manifestEntries[e].callbacks?.forEach(r=>r(this.loadedAssets.get(e))),s}catch{return}}loadAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.loadAsset(e)))}loadCriticalAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.manifestEntries[e].critical&&this.loadAsset(e)))}assetProgress(e,t){this.assetsInfos.has(t)||this.assetsInfos.set(t,{size:e.total,progress:0});const n=this.assetsInfos.get(t);n.progress=e.loaded/n.size,this.progressCallback?.()}async loadKTX2Loader(e){if(!lu){const{KTX2Loader:t}=await xx(async()=>{const{KTX2Loader:s}=await import("./KTX2Loader.DxCkVlRj.js");return{KTX2Loader:s}},__vite__mapDeps([0,1,2,3,4])),n=new t;n.setTranscoderPath("/libs/basis/"),e.setKTX2Loader(n),n.detectSupport(E.webgl.renderer),lu=!0}}}ni.enabled=!0;const Sx=new dh,Tx=new F_,Ex=new I_;class Jn{constructor(e,t,n={blockingLoad:!0,withPriority:!1,withCriticals:!1,isMobile:!1},s){this.key=e,this.manifest=t,this.params=n,this.onLoaded=s,this.loaders={textures:new ca("textures",t,Sx,Jn.loadedAssets,this.assetsInfos,this.loadingProgress,this.params.isMobile),models:new ca("models",t,Tx,Jn.loadedAssets,this.assetsInfos,this.loadingProgress,this.params.isMobile),envMaps:new ca("envMaps",t,Ex,Jn.loadedAssets,this.assetsInfos,this.loadingProgress,this.params.isMobile)}}static loadedAssets=new Map;assetsInfos=new Map;progress=0;loaders;async load(){this.params.withCriticals&&await this.loadCriticals(),this.params.blockingLoad?await this.loadAll():this.params.withPriority?this.loadInOrder():this.loadAll()}async loadAll(){await Promise.all(Object.values(this.loaders).map(e=>e.loadAssets())),E.state.emit(he.MANIFEST_LOADED,this.key),this.onLoaded?.()}loadCriticals(){return Promise.all(Object.values(this.loaders).map(e=>e.loadCriticalAssets()))}async loadInOrder(){await Promise.all(Object.values(this.loaders).map(e=>[...e.assetsToLoad.entries()].map(([t,n])=>({loader:e,key:t,priority:n.priority||0}))).flat().sort((e,t)=>e.priority-t.priority).map(({loader:e,key:t})=>e.loadAsset(t))),E.state.emit(he.MANIFEST_LOADED,this.key),this.onLoaded?.()}loadingProgress=()=>{this.progress=[...this.assetsInfos.values()].map(e=>e.progress).reduce((e,t)=>e+t,0)/this.assetsInfos.size,E.state.emit(he.LOADER_PROGRESS,this.progress)};get(...e){return e.length>1?e.map(t=>Jn.loadedAssets.get(t)):Jn.loadedAssets.get(e[0])}}Je.ticker.remove(Je.updateRoot);class bx{#e=Date.now();#t=0;#n=16;#i={et:0,dt:0};#s=!1;#r;constructor(){E.state.on(he.ATTACH,this.#o),E.state.on(he.DETACH,this.#a),E.state.on(he.DESTROY,this.#l)}#o=()=>{this.play()};#a=()=>{this.pause()};#l=()=>{E.state.off(he.ATTACH,this.#o),E.state.off(he.DETACH,this.#a),E.state.off(he.DESTROY,this.#l)};play=()=>{this.#s||(this.#s=!0,this.#c())};pause=()=>{this.#s&&(cancelAnimationFrame(this.#r),this.#s=!1)};#c=()=>{if(!this.#s)return;this.#r=window.requestAnimationFrame(this.#c);const e=Date.now();this.#n=e-this.#e,this.#t+=this.#n,this.#e=e,this.#n>60&&(this.#n=60),this.#i.et=this.#t*.001,this.#i.dt=this.#n*.001,E.state.emitThrottle(he.BEFORE_TICK,this.#i),E.state.emitThrottle(he.TICK,this.#i),E.state.emitThrottle(he.RENDER,this.#i),E.state.emitThrottle(he.AFTER_RENDER,this.#i),Je.updateRoot(this.#i.et)}}const wx=()=>{const i=new Jn("global",cd,{isMobile:E.tools.viewport.isMobileAtLaunch,blockingLoad:!0}),e=new bx;return{assetsManager:i,ticker:e}};class Dx{constructor(){E.state.on(he.ATTACH,this.#e),E.state.on(he.DETACH,this.#t),E.state.on(he.DESTROY,this.#n)}#e=()=>{document.addEventListener("keydown",this.#i)};#t=()=>{document.removeEventListener("keydown",this.#i)};#n=()=>{E.state.off(he.ATTACH,this.#e),E.state.off(he.DETACH,this.#t),E.state.off(he.DESTROY,this.#n)};#i=e=>{e.stopPropagation(),E.state.emit(he.KEY_DOWN,e.key,e)}}class Ax{constructor(){this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1,this.coordinates={webgl:new me,dom:new me},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},E.state.on(he.ATTACH,this.#e),E.state.on(he.DETACH,this.#t),E.state.on(he.DESTROY,this.#n)}#e=()=>{this.coordinates.dom.set(E.tools.viewport.width*.5,E.tools.viewport.height*.5),window.addEventListener("mousemove",this.#i),window.addEventListener("touchmove",this.#i,{passive:!0}),window.addEventListener("pointerdown",this.#r),window.addEventListener("mouseup",this.#s),window.addEventListener("touchend",this.#s),window.addEventListener("pointerleave",this.#o)};#t=()=>{window.removeEventListener("mousemove",this.#i),window.removeEventListener("touchmove",this.#i),window.removeEventListener("pointerdown",this.#r),window.removeEventListener("mouseup",this.#s),window.removeEventListener("touchend",this.#s),window.removeEventListener("pointerleave",this.#o)};#n=()=>{E.state.off(he.ATTACH,this.#e),E.state.off(he.DETACH,this.#t),E.state.off(he.DESTROY,this.#n)};#i=e=>{this.isTouch?e.touches&&e.touches.length>0&&this.#a(e.touches[0].clientX,e.touches[0].clientY):this.#a(e.clientX,e.clientY),this.isTouch||E.state.emit(he.POINTER_MOVE,this.coordinates,e)};#s=e=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,E.state.emit(he.POINTER_UP,this.coordinates,e))};#r=e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}this.#a(e.clientX,e.clientY),this.isDown=!0,E.state.emit(he.POINTER_DOWN,this.coordinates,e)}};#o=e=>{this.isTouch||(this.isDown=!1,E.state.emit(he.POINTER_UP,this.coordinates,e))};#a(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.coordinates.webgl.set(e/E.tools.viewport.width*2-1,-(t/E.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t)}}class Cx{#e;#t;constructor(){this.#e=document.createElement("canvas"),this.#e.width=this.#e.height=256,this.#t=this.#e.getContext("2d");const t=this.#t.getImageData(0,0,256,256);t.data.forEach((n,s)=>{t.data[s]=Math.round(Math.random()*255)}),this.#t.putImageData(t,0,0),this.texture=new jc(this.#e),this.texture.wrapS=this.texture.wrapT=mt,this.texture.minFilter=Rt,this.texture.magFilter=Rt,this.nearestTexture=new jc(this.#e),this.nearestTexture.wrapS=this.nearestTexture.wrapT=mt,this.nearestTexture.minFilter=kt,this.nearestTexture.magFilter=kt}}const X={uTime:{value:0},uPage:{value:0},uSlideshowProgress:{value:0},uTransition:{value:0},uLongpress:{value:0},uTransitionDirection:{value:0},uTransitionColor:{value:new ce(14408148)},uScrollProgress:{value:0},uChapter:{value:0},uAbsScrollProgress:{value:0},uDarkColor:{value:new ce(0)},uLightColor:{value:new ce(16777215)},uCapitalFog:{value:new ce(8815424)}},ut={uRatio:{value:1},uDPR:{value:1},uResolution:{value:new me},uMobile:{value:0}};class Rx{#e;#t={width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio,ratio:1,breakpoint:"mobile"};constructor(){const e=E.$wrapper.getBoundingClientRect(),t=Math.min(window.innerWidth,e.width),n=e.height;this.#r(t,n),this.#e=new ResizeObserver(this.onResize),E.state.on(he.ATTACH,this.#n),E.state.on(he.DETACH,this.#i),E.state.on(he.DESTROY,this.#s),this.isMobileAtLaunch=this.breakpoint==="mobile"}#n=()=>{this.#e.observe(E.$wrapper)};#i=()=>{this.#e.unobserve(E.$wrapper)};#s=()=>{this.#e.disconnect(),E.state.off(he.ATTACH,this.#n),E.state.off(he.DETACH,this.#i),E.state.off(he.DESTROY,this.#s)};onResize=(e=null)=>{let t,n;if(e)if(e[0].contentBoxSize){const s=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;t=s.inlineSize,n=s.blockSize}else t=e[0].contentRect.width,n=e[0].contentRect.height;else{const s=E.$wrapper.getBoundingClientRect();t=s.width,n=s.height}this.#r(t,n),E.state.emit(he.RESIZE,this.infos),E.state.emit(he.AFTER_RESIZE,this.infos)};#r(e,t){this.#t.width=e,this.#t.height=t,this.#t.dpr=Math.min(2,window.devicePixelRatio),this.#t.ratio=e/t,this.#t.breakpoint=window.innerWidth<au.tablet?"mobile":window.innerWidth<au.desktop?"tablet":"desktop",this.#o()}#o(){ut.uRatio.value=this.#t.ratio,ut.uDPR.value=this.#t.dpr,ut.uResolution.value.set(this.#t.width*this.#t.dpr,this.#t.height*this.#t.dpr),ut.uMobile.value=this.#t.breakpoint=="mobile"?1:0}get infos(){return this.#t}get width(){return this.#t.width}get height(){return this.#t.height}get dpr(){return this.#t.dpr}get ratio(){return this.#t.ratio}get breakpoint(){return this.#t.breakpoint}}const Px=()=>{const i=new Ax,e=new Rx,t=new Dx,n=new Cx;return{mouse:i,viewport:e,keyboard:t,noise:n}};let Ux=0;function Re(i,e,t){const n=()=>{};return{c:++Ux,shader:i,use:r=>{const o=r.material||r;return o[e]=i,o.needsUpdate=!0,r},unuse:n,clear:n}}const Lx=`precision highp float;

uniform sampler2D tMap, tNoise;
uniform float uTime, uChapter;

varying vec2 vUv;

void main() {

	vec4 map = texture2D(tMap, vUv);

	float smallNoise = texture2D(tNoise, vUv * 7. + vec2(- .12, .03) * uTime).r - .5;
	float antiNoise = texture2D(tNoise, vUv * 10. + vec2( .08, -.08) * uTime).r - .5;
	
	float water = smoothstep(1., .9, map.a);
	float down = smoothstep(.7, .75, vUv.y + .32 * vUv.x);
	water *= down;
	vec2 uv = vUv + .02 * (smallNoise + 0.2 * antiNoise) * water;
	map = texture2D(tMap, uv);

	/* Color Correction */
	map.rgb = mix(map.rgb, vec3(.8), .02);
	
	vec2 dUv = vUv + .3 * (texture2D(tNoise, .5 * vec2(2. , 1.) * vUv + vec2(-0.02, .01) * uTime).rg - .5);
	dUv += .05* smallNoise;
	dUv += .08 * (texture2D(tNoise, 2. * dUv + .01 * uTime).r - .5);
	float smoke = smoothstep(.15, 0., length(dUv - vec2(.68, .18)));
	smoke *= .4+ .6 * smoothstep(.15, 0., length(dUv - vec2(.6, .18)));

	map.rgb += smoothstep(0., .1, smoke) * smoothstep(.2, 0., map.a);
	map.a += .4 * smoke;

	map.rgb = mix(map.rgb, vec3(0.31,0.373,0.427), smoothstep(2.9, 3.2, uChapter));
	map.a *= smoothstep(3.3, 3., uChapter);

	if(map.a < .01) discard ;

	gl_FragColor = map;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}`,Nx=Re(Lx,"fragmentShader"),Ix=`precision highp float;

uniform float uMobile;
varying vec2 vUv;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0, oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

void main() {
    vUv = uv;
    vec3 transformed = position;

    if(uMobile == 1.) {
        mat4 rotMat = rotationMatrix(vec3(0., 1., 0.), 0.3);
        transformed = (rotMat * vec4(transformed, 1.)).xyz;
        transformed.x -= 2.7;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}`,Fx=Re(Ix,"vertexShader");class Ox extends ot{constructor(e,t){super({uniforms:{tMap:{value:e.map},tNoise:{value:E.core.assetsManager.get("noise")},uMobile:ut.uMobile,uTime:X.uTime,uChapter:X.uChapter},transparent:!0}),Fx.use(this),Nx.use(this)}}const Bx=`precision highp float;

varying vec2 vUv;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

	vUv = uv;
}`,kx=Re(Bx,"vertexShader"),Vx=`precision highp float;

uniform sampler2D tMap;
uniform float uChapter;

varying vec2 vUv;

void main() {

    vec4 map = linearToOutputTexel(texture2D(tMap, vUv));

    map.rgb = mix(map.rgb, vec3(0.00784313725490196, 0.10588235294117647, 0.17254901960784313), smoothstep(1.5, 2., uChapter) * .3);

    gl_FragColor = map;
}`,zx=Re(Vx,"fragmentShader");class Eh extends ot{constructor(e,t){super({uniforms:{tMap:{value:e.map},uChapter:X.uChapter},transparent:!0}),kx.use(this),zx.use(this)}}const Hx=`precision highp float;

uniform float uTransition, uTime;
uniform vec2 uResolution;
uniform vec3 uLightColor, uDarkColor, uTransitionColor, uCapitalFog, uSunProjected;
uniform sampler2D tNoise, tMap;
varying vec2 vUv;
varying vec3 vWorldPosition;

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
	return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
	return (near * far) / ((far - near) * invClipZ - far);
}
float computeDepth(float fragCoordZ, float near, float far) {
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, near, far);
	return viewZToOrthographicDepth(viewZ, near, far);
}
vec3 hueShift(vec3 color, float hue) {
    vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {

	vec2 sUv = gl_FragCoord.xy / uResolution;
	vec2 dUv = vUv + 0.04 * (texture2D(tNoise, vUv * 5. * vec2(1., 5.)).rg - .5);
	vec4 map = texture2D(tMap, dUv);
	
	map.rgb *= 0.3 + 0.8 * smoothstep(.8, 0.5, vUv.x + 0.3 * (texture2D(tNoise, vec2(1., 3.) * vUv).r - .5));
	map.rgb = hueShift(map.rgb, .15);
	map.rgb = adjustSaturation(map.rgb, 1.5);

	float depth = computeDepth(gl_FragCoord.z, 0.01, 120.);

	float capitalNoise = texture2D(tNoise, 0.0005 * (vWorldPosition.zy * vec2(1., 2.) + 2. * uTime)).r - .5;
	map.rgb = mix(map.rgb, mix(uLightColor, uDarkColor, 0.7), .1 * smoothstep(10., 40., vWorldPosition.y + 10. * capitalNoise));
	
	float capitalFog = smoothstep(0.2, 0.8, texture2D(tNoise, 0.001 * vec2(1., 3.) * vWorldPosition.zy - .001 * uTime).r);
	capitalFog *= smoothstep(15., -40., vWorldPosition.y + 40. * capitalNoise);
	map.rgb = mix(map.rgb, uCapitalFog, .5 * capitalFog);

	vec2 sunProjected = uSunProjected.xy * .5 + .5;
	sunProjected.y += .2;
	map.rgb = mix(map.rgb, uLightColor,0.4 *  smoothstep(0.3, 0., length(sUv - sunProjected))); 

	map.rgb = mix(map.rgb, uLightColor, depth);

	map.rgb = mix(map.rgb, uTransitionColor, smoothstep(0., 0.5, uTransition));

	map.a *= smoothstep(.8 , 0., uTransition);

	gl_FragColor = map;

	gl_FragColor = linearToOutputTexel(gl_FragColor);
}`,Gx=Re(Hx,"fragmentShader"),Wx=`precision highp float;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
	vUv = uv;
	vec4 mvPosition = modelMatrix * vec4(position, 1.0);
	vWorldPosition = mvPosition.xyz;
	gl_Position = projectionMatrix * viewMatrix * mvPosition;
}`,Xx=Re(Wx,"vertexShader");class Yx extends ot{constructor(e,t){super(),this.transparent=!0,this.envMapIntensity=1,this.uniforms.uSunProjected=E.webgl.mainScene.flares.material.uniforms.uSunProjected,this.uniforms.tMap={value:e.map},this.uniforms.uResolution=ut.uResolution,this.uniforms.uTime=X.uTime,this.uniforms.uTransition=X.uTransition,this.uniforms.uTransitionColor=X.uTransitionColor,this.uniforms.uLightColor=X.uLightColor,this.uniforms.uDarkColor=X.uDarkColor,this.uniforms.uCapitalFog=X.uCapitalFog,this.uniforms.tNoise={value:E.core.assetsManager.get("noise")},Gx.use(this),Xx.use(this)}}const qx=(i,e)=>{const t=jx(i,e);return Pl(i,e+"Transform",t),{repeat:i.params[e+"TransformRepeat"],offset:i.params[e+"TransformOffset"],center:i.params[e+"TransformCenter"],rotation:i.params[e+"TransformRotation"],matrix:t,update(){return this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y),this}}.update()},jx=(i,e)=>{const t=i.params[e],n={repeat:new me,offset:new me,center:new me,rotation:0},s=i.params[e+"TransformRepeat"],r=i.params[e+"TransformOffset"],o=i.params[e+"TransformCenter"],a=i.params[e+"TransformRotation"];return n.repeat.set(s?.x||t.repeat.x,s?.y||t.repeat.y),n.offset.set(r?.x||t.offset.x,r?.y||t.offset.y),n.center.set(o?.x||t.center.x,o?.y||t.center.y),n.rotation=a||t.rotation,i.params[e+"TransformRepeat"]=n.repeat,i.params[e+"TransformOffset"]=n.offset,i.params[e+"TransformCenter"]=n.center,i.params[e+"TransformRotation"]=n.rotation,new qe().setUvTransform(n.offset.x,n.offset.y,n.repeat.x,n.repeat.y,n.rotation,n.center.x,n.center.y)},$x=(i,e)=>e===0?(i.defines.USE_UV=1,"uv"):"uv"+e,Kx=(i,e,t=!1)=>{Object.defineProperty(i,e,{set:n=>{i[`_${e}`]=n,Pl(i,e,n,t)},get:()=>i[`_${e}`]})},Pl=(i,e,t,n=!1)=>{if(t==null)return;const s=(t?.isTexture?"t":"u")+(e.charAt(0).toUpperCase()+e.slice(1));if(i.uniforms[s])i.uniforms[s].value=t;else{if(t?.isTexture){const r="SIXTY_"+e.toUpperCase();i.defines[r]=1,n&&(i.defines[r+"_UV"]=$x(i,t.channel),i[e+"Transform"]=qx(i,e))}i.uniforms[s]={value:t},i.needsUpdate=!0}},Zx=(i,e=()=>{})=>{if(i.x!=null&&Object.defineProperty(i,"x",{get(){return this._x},set(t){this._x=t,e()}}),i.y!=null&&Object.defineProperty(i,"y",{get(){return this._y},set(t){this._y=t,e()}}),i.z!=null&&Object.defineProperty(i,"z",{get(){return this._z},set(t){this._z=t,e()}}),typeof i.copy=="function"){const t=i.copy;i.copy=function(n){const s=t.call(this,n);return e(),s}}e()},ua=new Map,Jx=(i,e,t=!1,n=!1)=>{const s=window.btoa(JSON.stringify(e.uuid+t));if(ua.get(s)&&!n)return ua.get(s);e.mapping=t?no:to;const r=new Za(i);r.compileEquirectangularShader();const o=r.fromEquirectangular(e).texture,a=o&&o?.mapping===nr?o.image.height:null;if(a===null)return null;const l=Math.log2(a)-2,c=1/a,u=1/(3*Math.max(Math.pow(2,l),7*16));return o.userData={...e.userData,...o.userData,texelWidth:u,texelHeight:c,maxMip:l},ua.set(s,o),e.dispose(),r.dispose(),o},bh=i=>{i.traverse(e=>{e.material&&(e.material.map?.dispose(),e.material.normalMap?.dispose(),e.material.alphaMap?.dispose(),e.material.aoMap?.dispose(),e.material.specularMap?.dispose(),e.material.metalnessMap?.dispose(),e.material.emissiveMap?.dispose(),e.material.dispose(),e.material.uniforms&&Object.values(e.material.uniforms).forEach(t=>{t.value?.isTexture&&t.value.dispose()}),e.userData?.uniforms&&Object.values(e.userData.uniforms).forEach(t=>{t.value?.isTexture&&t.value.dispose()})),e.geometry?.dispose()})},Qx=(i,e)=>{Object.entries(e).forEach(([t,n])=>{const s=i[t];s instanceof n||(Array.isArray(s)?i[t]=new n().fromArray(s):typeof s=="string"&&n===ce&&(i[t]=new ce(s)))})},Ks=(i,e=new L)=>{const t=i.getAttribute("position").array,n=[];for(let s=0;s<t.length;s+=3)n.push(new L(t[s],t[s+1],t[s+2]).sub(e));return n.reverse(),new el(n,!1,"catmullrom",.5)},ey=`precision highp float;

uniform vec3 uColor;

#ifdef SIXTY_MAP
	uniform sampler2D tMap;
	varying vec2 vMapUv;
#endif

uniform float uMetalness;
uniform float uRoughness;

#ifdef SIXTY_ARMMAP
	uniform sampler2D tArmMap;
	uniform float uRoughnessMapIntensity;
	uniform float uMetalnessMapIntensity;
	varying vec2 vArmMapUv;
#endif

#ifdef SIXTY_AOMAP
	uniform sampler2D tAoMap;
	varying vec2 vAoMapUv;
#endif

#if defined(SIXTY_ARMMAP) || defined(SIXTY_AOMAP)
	uniform float uAoMapIntensity;
#endif

uniform vec3 uEmissive;

uniform vec3 uAmbient;
uniform float uAmbientIntensity;

#ifdef SIXTY_EMISSIVEMAP
	uniform sampler2D tEmissiveMap;
	varying vec2 vEmissiveMapUv;
#endif

#ifdef SIXTY_NORMALMAP
	uniform sampler2D tNormalMap;
	varying vec2 vNormalMapUv;
	uniform vec2 uNormalScale;

#endif

#ifdef SIXTY_ENVMAP
	uniform sampler2D tEnvMap;
	uniform mat3 uEnvMapRotation;
	uniform float uEnvMapIntensity;
#endif

uniform float uOpacity;
#ifdef USE_ALPHATEST
	uniform float uAlphaTest;
#endif

#ifdef SIXTY_ALPHAMAP
	uniform sampler2D tAlphaMap;
#endif

#ifdef USE_UV
	varying vec2 vUv;
#endif

varying vec3 vNormal;
varying vec3 vViewPosition;

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535

#ifndef saturate
	#define saturate(a) clamp(a, 0.0, 1.0)
#endif

struct ReflectedLight {
    vec3 directDiffuse; 
    vec3 directSpecular; 
    vec3 indirectDiffuse; 
    vec3 indirectSpecular; 
};

struct PBRMaterial {
    vec3 diffuseColor;
    float roughness;
    vec3 specularColor;
    float specularF90;
};

#ifdef SIXTY_ENVMAP
	vec3 inverseTransformDirection(vec3 dir, mat4 matrix) {
		return normalize((vec4(dir, 0.0) * matrix).xyz);
	}
	
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace(vec3 direction) {
		vec3 absDirection = abs(direction);
		float face = - 1.0;
		if (absDirection.x > absDirection.z) {
			if (absDirection.x > absDirection.y)
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if (absDirection.z > absDirection.y)
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}

		return face;

	}

	vec2 getUV(vec3 direction, float face) {
		vec2 uv;
		if (face == 0.0) {
			uv = vec2(direction.z, direction.y) / abs(direction.x);
		} else if (face == 1.0) {
			uv = vec2(- direction.x, - direction.z) / abs(direction.y);
		} else if (face == 2.0) {
			uv = vec2(- direction.x, direction.y) / abs(direction.z);
		} else if (face == 3.0) {
			uv = vec2(- direction.z, direction.y) / abs(direction.x);
		} else if (face == 4.0) {
			uv = vec2(- direction.x, direction.z) / abs(direction.y);
		} else {
			uv = vec2(direction.x, direction.y) / abs(direction.z);
		}
		return 0.5 * (uv + 1.0);
	}

	vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
		float face = getFace(direction);

		float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
		mipInt = max(mipInt, cubeUV_minMipLevel);
		float faceSize = exp2(mipInt);
		highp vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
		if (face > 2.0) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		return texture2D(envMap, uv).rgb;
	}

	#define cubeUV_r0 1.0
	#define cubeUV_m0 -2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 -1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip(float roughness) {
		float mip = 0.0;

		if (roughness >= cubeUV_r1) {
			mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
		} else if (roughness >= cubeUV_r4) {
			mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
		} else if (roughness >= cubeUV_r5) {
			mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
		} else if (roughness >= cubeUV_r6) {
			mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2(1.16 * roughness);		
		}

		return mip;
	}

	vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
		float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
		float mipF = fract(mip);
		float mipInt = floor(mip);
		vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
		if((mipF == 0.0)) {
			return vec4(color0, 1.0);
		} else {
			vec3 color1 = bilinearCubeUV(envMap, sampleDir, (mipInt + 1.0));
			return vec4(mix(color0, color1, mipF), 1.0);
		}
	}

	vec3 getIBLIrradiance(const in vec3 normal, const in sampler2D envMap, const in float envMapIntensity, const in mat3 envMapRotation) {
    	vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
		vec4 envMapColor = textureCubeUV(envMap, envMapRotation * worldNormal, 1.0);
		return PI * envMapColor.rgb * envMapIntensity;

	}

	vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness, const in sampler2D envMap, const in float envMapIntensity, const in mat3 envMapRotation) {
		vec3 reflectVec = reflect(- viewDir, normal);
		reflectVec = normalize(mix(reflectVec, normal, roughness * roughness));
		reflectVec = inverseTransformDirection(reflectVec, viewMatrix);
		vec4 envMapColor = textureCubeUV(envMap, envMapRotation * reflectVec, roughness);

		return envMapColor.rgb * envMapIntensity;
	}

#endif
vec3 getAmbientLightIrradiance(vec3 ambientLightColor) {
    vec3 irradiance = ambientLightColor;
    return irradiance;
}

vec3 BRDF_Lambert(const in vec3 diffuseColor) {
	return RECIPROCAL_PI * diffuseColor;
}

void RE_IndirectDiffuse(const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in PBRMaterial pbrMaterial, inout ReflectedLight reflectedLight) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(pbrMaterial.diffuseColor);
}

vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate(dot(normal, viewDir));
	const vec4 c0 = vec4(- 1, - 0.0275, - 0.572, 0.022);
	const vec4 c1 = vec4(1, 0.0425, 1.04, - 0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(- 9.28 * dotNV)) * r.x + r.y;
	vec2 fab = vec2(- 1.04, 1.04) * a004 + r.zw;
	return fab;
}

void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
	vec2 fab = DFGApprox(normal, viewDir, roughness);
	vec3 Fr = specularColor;
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + (1.0 - Fr) * 0.047619;	vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);

	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}

void RE_IndirectSpecular(const in vec3 radiance, const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in PBRMaterial pbrMaterial, inout ReflectedLight reflectedLight) {
	vec3 singleScattering = vec3(0.);
	vec3 multiScattering = vec3(0.);

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	
	computeMultiscattering(geometryNormal, geometryViewDir, pbrMaterial.specularColor, pbrMaterial.specularF90, pbrMaterial.roughness, singleScattering, multiScattering);
	
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = pbrMaterial.diffuseColor * (1. - max(max(totalScattering.r, totalScattering.g), totalScattering.b));
	
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}

float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness) {
	return saturate(pow(dotNV + ambientOcclusion, exp2(- 16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
}

mat3 getTangentFrame(const in vec3 eyePos, const in vec3 surfaceNormal, const in vec2 uv) {
		vec3 posDx = dFdx(eyePos);
		vec3 posDy = dFdy(eyePos);

		vec2 uvDx = dFdx(uv);
		vec2 uvDy = dFdy(uv); 

		uvDx = max(uvDx, vec2(1e-2));
		uvDy = max(uvDy, vec2(1e-2));

		uvDx = min(uvDx, vec2(1.));
		uvDy = min(uvDy, vec2(1.));

		vec3 N = surfaceNormal;

		vec3 q1perp = cross(posDy, N);
		vec3 q0perp = cross(N, posDx);
		
		
		vec3 T = q1perp * uvDx.x + q0perp * uvDy.x;
		vec3 B = q1perp * uvDx.y + q0perp * uvDy.y;
		
		float det = max(dot(T, T), dot(B, B));
		float scale = (det == 0.0) ? 0.0 : inversesqrt(det);
		
		return mat3(T * scale, B * scale, N);
}

#define SIXTY_UNIFORMS_AREA

void main() {
	#define SIXTY_START_AREA

	vec4 diffuseColor = vec4(uColor, uOpacity);

	#ifdef SIXTY_MAP
		vec4 baseColorMapSample = texture2D(tMap, vMapUv);

		#ifdef SIXTY_ALPHAMAP
			diffuseColor.rgb *= baseColorMapSample.rgb;
			diffuseColor.a *= texture2D(tAlphaMap, vUv).r;
		#else
			diffuseColor *= baseColorMapSample;
		#endif

		#define SIXTY_MAP_AREA
	#endif

	#ifdef USE_ALPHATEST
		if (diffuseColor.a < uAlphaTest) discard;
	#endif

	
	vec4 armSample = vec4(1);

	#ifdef SIXTY_ARMMAP
		#ifdef SIXTY_AOMAP
			armSample.gb *= texture2D(tArmMap, vArmMapUv).gb;
		#else
			armSample.rgb *= texture2D(tArmMap, vArmMapUv).rgb;
		#endif

		armSample.gb *= vec2(uRoughnessMapIntensity, uMetalnessMapIntensity);

		#define SIXTY_ARMMAP_AREA
	#endif

	#ifdef SIXTY_AOMAP
		armSample.r *= texture2D(tAoMap, vAoMapUv).r;
	#endif

	float roughness = clamp(armSample.g * uRoughness, 0.04, 1.0);
	float metallic = clamp(armSample.b * uMetalness, 0.04, 1.0);

	vec3 nonPerturbatedNormal = vNormal;
	
	float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
	vec3 normal = normalize(vNormal);
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif

	#ifdef SIXTY_NORMALMAP
		mat3 tbn = getTangentFrame(-vViewPosition, normal, vNormalMapUv);

		#if defined(DOUBLE_SIDED)
			tbn[0] *= faceDirection;
			tbn[1] *= faceDirection;
		#endif

		vec3 nTex = texture2D(tNormalMap, vNormalMapUv).rgb * 2. - 1.;
		nTex.xy *= uNormalScale;
		normal = normalize(tbn * nTex);

		#define SIXTY_NORMALMAP_AREA
	#endif

	#define SIXTY_NORMAL_AREA

	ReflectedLight reflectedLight = ReflectedLight(vec3(0.), vec3(0.), vec3(0.), vec3(0.));

	PBRMaterial pbrMaterial = PBRMaterial(vec3(0.), 0., vec3(0.), 0.);
	pbrMaterial.diffuseColor = diffuseColor.rgb * (1. - metallic);

	vec3 dxy = max(abs(dFdx(nonPerturbatedNormal)), abs(dFdy(nonPerturbatedNormal)));
	float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);

	pbrMaterial.roughness = max(roughness, 0.0525);
	pbrMaterial.roughness += geometryRoughness;
	pbrMaterial.roughness = min(pbrMaterial.roughness, 1.0);

	pbrMaterial.specularColor = mix(vec3(0.04), diffuseColor.xyz, metallic);
	pbrMaterial.specularF90 = 1.;

	#define SIXTY_PBR_AREA

	vec3 geometryPosition = -vViewPosition;
	vec3 geometryNormal = normal;
	vec3 geometryViewDir = isOrthographic ? vec3(0., 0., 1.) : normalize(vViewPosition);

	vec3 ambientLightColor = uAmbient * uAmbientIntensity;
	
    vec3 iblIrradiance = vec3(0.);
	vec3 radiance = vec3(0.);
	vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);

	#ifdef SIXTY_ENVMAP
		iblIrradiance += getIBLIrradiance(geometryNormal, tEnvMap, uEnvMapIntensity, uEnvMapRotation);
		radiance += getIBLRadiance(geometryViewDir, geometryNormal, pbrMaterial.roughness, tEnvMap, uEnvMapIntensity, uEnvMapRotation);

		#define SIXTY_ENVMAP_AREA
	#endif

	
	RE_IndirectDiffuse(irradiance, geometryPosition, geometryNormal, geometryViewDir, pbrMaterial, reflectedLight);
	RE_IndirectSpecular(radiance, iblIrradiance, geometryPosition, geometryNormal, geometryViewDir, pbrMaterial, reflectedLight);

	#if defined(SIXTY_ARM_AS_AO) || defined(SIXTY_AOMAP)
		float occlusion = (armSample.r - 1.) * uAoMapIntensity + 1.;
		reflectedLight.indirectDiffuse *= occlusion;

		#ifdef SIXTY_ENVMAP
			float dotNV = saturate(dot(geometryNormal, geometryViewDir));
			reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, occlusion, pbrMaterial.roughness);
		#endif

		#define SIXTY_AOMAP_AREA
	#endif

	vec3 totalEmissiveRadiance = uEmissive;
	#ifdef SIXTY_EMISSIVEMAP
		totalEmissiveRadiance *= texture2D(tEmissiveMap, vEmissiveMapUv).rgb;

		#define SIXTY_EMISSIVEMAP_AREA
	#endif

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef OPAQUE
		diffuseColor.a = 1.0;
	#endif

	gl_FragColor = vec4(outgoingLight, diffuseColor.a);

	#ifdef TONE_MAPPING
		gl_FragColor.rgb = toneMapping(gl_FragColor.rgb);
	#endif

	gl_FragColor = linearToOutputTexel(gl_FragColor);

	#ifdef PREMULTIPLIED_ALPHA
		gl_FragColor.rgb *= gl_FragColor.a;
	#endif
	
	#ifdef DITHERING
		gl_FragColor.rgb = dithering(gl_FragColor.rgb);
	#endif

	#define SIXTY_END_AREA

	#define DEBUG_NONE 0
#define DEBUG_UV 1
#define DEBUG_UV1 2
#define DEBUG_UV2 3
#define DEBUG_UV3 4
#define DEBUG_NORMAL_TEXTURE 5
#define DEBUG_NORMAL_SHADING 6
#define DEBUG_NORMAL_GEOMETRY 7
#define DEBUG_TANGENT 8
#define DEBUG_BITANGENT 9
#define DEBUG_ALPHA 10
#define DEBUG_OCCLUSION 11
#define DEBUG_EMISSIVE 12
#define DEBUG_METALLIC 13
#define DEBUG_ROUGHNESS 14
#define DEBUG_BASE_COLOR 15
#define DEBUG_RADIANCE 16
#define DEBUG_IBL_IRRADIANCE 17

#ifdef DEBUG
    #if DEBUG && DEBUG != DEBUG_NONE
        gl_FragColor.a = 1.;
    #endif

    #if DEBUG == DEBUG_UV && defined(USE_UV)
        gl_FragColor.rgb = vec3(vUv, 0);
    #endif

    #if DEBUG == DEBUG_UV1 && defined(USE_UV1)
        gl_FragColor.rgb = vec3(vUv1, 0);
    #endif

    #if DEBUG == DEBUG_UV2 && defined(USE_UV2)
        gl_FragColor.rgb = vec3(vUv2, 0);
    #endif

    #if DEBUG == DEBUG_UV3 && defined(USE_UV3)

        gl_FragColor.rgb = vec3(vUv3, 0);
    #endif

    #if DEBUG == DEBUG_NORMAL_TEXTURE && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = vec3(nTex + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_NORMAL_SHADING
        gl_FragColor.rgb = vec3(normal + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_NORMAL_GEOMETRY
        gl_FragColor.rgb = vec3(geometryNormal + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_TANGENT && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = (tbn[0] + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_BITANGENT && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = (tbn[1] + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_ALPHA
        gl_FragColor.rgb = vec3(diffuseColor.a);
    #endif

    #if DEBUG == DEBUG_OCCLUSION && defined(SIXTY_AO_MAP)
        gl_FragColor.rgb = vec3(occlusion);
    #endif

    #if DEBUG == DEBUG_EMISSIVE
        gl_FragColor = linearToOutputTexel(vec4(totalEmissiveRadiance, 1.));
    #endif

    #if DEBUG == DEBUG_METALLIC
        gl_FragColor.rgb = vec3(metallic);
    #endif

    #if DEBUG == DEBUG_ROUGHNESS
        gl_FragColor.rgb = vec3(roughness);
    #endif

    #if DEBUG == DEBUG_BASE_COLOR
        gl_FragColor.rgb = diffuseColor.rgb;
    #endif

    #if DEBUG == DEBUG_RADIANCE
        gl_FragColor.rgb = radiance;
    #endif

    #if DEBUG == DEBUG_IBL_IRRADIANCE
        gl_FragColor.rgb = iblIrradiance;
    #endif
#endif
}`,ty=Re(ey,"fragmentShader"),ny=`#ifdef USE_UV
	varying vec2 vUv;
#endif

varying vec3 vNormal;
varying vec3 vViewPosition;

#ifdef SIXTY_MAP
	uniform mat3 uMapTransform;
	varying vec2 vMapUv;
#endif

#ifdef SIXTY_ARMMAP
	uniform mat3 uArmMapTransform;
	varying vec2 vArmMapUv;
#endif

#ifdef SIXTY_AOMAP
	uniform mat3 uAoMapTransform;
	varying vec2 vAoMapUv;
#endif

#ifdef SIXTY_EMISSIVEMAP
	uniform mat3 uEmissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif

#ifdef SIXTY_NORMALMAP
	uniform mat3 uNormalMapTransform;
	varying vec2 vNormalMapUv;
#endif

#define SIXTY_UNIFORMS_AREA

void main() {
	#define SIXTY_START_AREA

	#ifdef USE_UV
		vUv = uv;
	#endif

	#ifdef SIXTY_MAP
		vMapUv = (uMapTransform * vec3(SIXTY_MAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_ARMMAP
		vArmMapUv = (uArmMapTransform * vec3(SIXTY_ARMMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_AOMAP
		vAoMapUv = (uAoMapTransform * vec3(SIXTY_AOMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_EMISSIVEMAP
		vEmissiveMapUv = (uEmissiveMapTransform * vec3(SIXTY_EMISSIVEMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_NORMALMAP
		vNormalMapUv = (uNormalMapTransform * vec3(SIXTY_NORMALMAP_UV, 1.)).xy;
	#endif	

	vec3 objectNormal = normal;
	vec3 transformedNormal = objectNormal;

	#ifdef USE_INSTANCING
		mat3 im = mat3(instanceMatrix);
		transformedNormal /= vec3(dot(im[0],im[0]), dot(im[1],im[1]), dot(im[2],im[2]));
		transformedNormal = im * transformedNormal;
	#endif
	
	transformedNormal = normalMatrix * transformedNormal;

	vNormal = normalize(transformedNormal);

	vec3 transformed = position; 
	#define SIXTY_TRANSFORMED_AREA

	vec4 mvPosition = vec4(transformed, 1.);
	
	#ifdef USE_INSTANCING
		#define SIXTY_INSTANCING_START_AREA
		
		mvPosition = instanceMatrix * mvPosition;
	#endif

	mvPosition = modelViewMatrix * mvPosition;

    vViewPosition = -mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;

	#define SIXTY_END_AREA

	#define DEBUG_NONE 0
#define DEBUG_UV 1
#define DEBUG_UV1 2
#define DEBUG_UV2 3
#define DEBUG_UV3 4
#define DEBUG_NORMAL_TEXTURE 5
#define DEBUG_NORMAL_SHADING 6
#define DEBUG_NORMAL_GEOMETRY 7
#define DEBUG_TANGENT 8
#define DEBUG_BITANGENT 9
#define DEBUG_ALPHA 10
#define DEBUG_OCCLUSION 11
#define DEBUG_EMISSIVE 12
#define DEBUG_METALLIC 13
#define DEBUG_ROUGHNESS 14
#define DEBUG_BASE_COLOR 15
#define DEBUG_RADIANCE 16
#define DEBUG_IBL_IRRADIANCE 17

#ifdef DEBUG
    #if DEBUG == DEBUG_UV1 && defined(USE_UV1)
        vUv1 = uv1;
    #endif

    #if DEBUG == DEBUG_UV2 && defined(USE_UV2)
        vUv2 = uv2;
    #endif

    #if DEBUG == DEBUG_UV3 && defined(USE_UV3)
        vUv3 = uv3;
    #endif
#endif
}`,iy=Re(ny,"vertexShader"),sy=new Ye;class sn extends ot{static GENERIC_PROPS=["alphaHash","alphaTest","alphaToCoverage","blendAlpha","blendColor","blendDst","blendDstAlpha","blendEquation","blendEquationAlpha","blendSrc","blendSrcAlpha","blending","colorWrite","defines","depthFunc","depthTest","depthWrite","dithering","forceSinglePass","format","name","opacity","polygonOffset","side","stencilFail","stencilFunc","stencilFuncMask","stencilRef","stencilWrite","stencilWriteMask","stencilZFail","stencilZPass","toneMapped","transparent","userData","vertexColors","visible"];static CONFIG_TYPES_MAPPING={color:ce,emissive:ce,ambient:ce,normalScale:me,envMapRotation:Yt,mapTransformRepeat:me,mapTransformOffset:me,mapTransformCenter:me,aoMapTransformRepeat:me,aoMapTransformOffset:me,aoMapTransformCenter:me,armMapTransformRepeat:me,armMapTransformOffset:me,armMapTransformCenter:me,emissiveMapTransformRepeat:me,emissiveMapTransformOffset:me,emissiveMapTransformCenter:me,normalMapTransformRepeat:me,normalMapTransformOffset:me,normalMapTransformCenter:me};static PROPS_WITH_UV=["map","armMap","aoMap","emissiveMap","normalMap"];color;metalness;roughness;map;emissive;emissiveMap;ambient;ambientIntensity;armMap;aoMap;metalnessMapIntensity;roughnessMapIntensity;aoMapIntensity;normalScale;normalMap;envMap;envMapIntensity;envMapRotation;alphaMap;constructor(e={},t=null,n={},s=sn.CONFIG_TYPES_MAPPING,r=sn.PROPS_WITH_UV){super({...sn.filterProps(e,sn.GENERIC_PROPS)}),this.configTypesMapping=s,this.propsWithUV=r,this.#e(e),this.isPBRMaterial=!0,this.type="PBRMaterial",this.side=hn;const o={color:new ce(16777215),metalness:0,roughness:1,map:null,emissive:new ce(0),emissiveMap:null,ambient:new ce(16777215),ambientIntensity:1,armMap:null,aoMap:null,metalnessMapIntensity:1,roughnessMapIntensity:1,aoMapIntensity:1,normalScale:new me(1,1),normalMap:null,envMap:E.webgl.mainScene.environment,envMapIntensity:1,envMapRotation:new Yt,alphaMap:null,alphaTest:0,opacity:1,...n};this.defaultsParams=o,this.params=e,this.setDefaults(o),this.applyParams(sn.filterProps(e,Object.keys(o))),this.armAsAo=e.armMap?.isTexture&&e.aoMap?.isTexture&&e.armMap===e.aoMap,iy.use(this),ty.use(this),E.debug?.mapping.add(this,"PBR",1,this.name||e.name||this.type,{caller:t})}set armAsAo(e){e?this.defines.SIXTY_ARM_AS_AO=1:delete this.defines.SIXTY_ARM_AS_AO,this.needsUpdate=!0}get armAsAo(){return Object.hasOwn(this.defines,"SIXTY_ARM_AS_AO")}setDefaults(e){for(const t in e){const n=e[t],s=this.propsWithUV.includes(t);if(t==="envMapRotation"){this._envMapRotation=new qe,Pl(this,t,this._envMapRotation);const r=this;Zx(n,()=>r.uniforms.uEnvMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(n)))}else Kx(this,t,s);this[t]=n}}applyParams(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`Material: '${t}' is not a property of ${this.type}.`);continue}s?.isColor&&n?.isColor?s.set(n):s?.isVector3&&n?.isVector3||s?.isVector2&&n?.isVector2||s?.isEuler&&n?.isEuler?s.copy(n):s!==void 0&&n!=null&&(this[t]=n)}}#e(e){Qx(e,this.configTypesMapping),e.armMap=e.armMap||e.metalnessMap||e.roughnessMap||null,delete e.metalnessMap,delete e.roughnessMap}static filterProps(e,t){return Object.keys(e).filter(n=>t.includes(n)).reduce((n,s)=>(n[s]=e[s],n),{})}}let ry=0;function ws(i,e,t){const n=()=>{};return{c:++ry,chunks:i,use:r=>{const o=r.material||r;return o[e]=oy(i,o[e]),o.needsUpdate=!0,r},unuse:n,clear:n}}const oy=(i="",e="")=>(ay(i).forEach(({target:n,replace:s})=>{e=e.replace(n,s)}),e),ay=(i,e="/// #replace")=>{const t=[],n=i.trim().split(`
`);for(let s=0;s<n.length;s++){const r=n[s].trim();if(r.startsWith(e)){const o=r.replace(e,""),a=[];let l=s+1;for(;l<n.length&&!n[l].trim().startsWith(e);){const u=n[l].trim();u&&a.push(u),l++}const c=a.join(`
`);t.push({target:o.trim(),replace:c.trim()}),s=l-1}}return t},ly=`/// #replace #define SIXTY_UNIFORMS_AREA

#define SIXTY_UNIFORMS_AREA

uniform float uTime, uChapter, uTransition;
uniform vec3 uLightColor, uDarkColor, uTransitionColor, uCapitalFog;
uniform vec2 uResolution;
uniform sampler2D tReflexion, tVoronoi, tGrass, tNoiseNormal, tNoise;

varying vec3 vWorldPosition;

float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
	return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
	return (near * far) / ((far - near) * invClipZ - far);
}
float computeDepth(float fragCoordZ, float near, float far) {
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, near, far);
	return viewZToOrthographicDepth(viewZ, near, far);
}

vec2 dHdxy_fwd(sampler2D textureSampler, vec2 uv) {
	vec2 dSTdx = dFdx(vUv);
	vec2 dSTdy = dFdy(vUv);

	float Hll = .2 * texture2D(textureSampler, uv).r;
	float dBx = .2 * texture2D(textureSampler, uv + dSTdx).r - Hll;
	float dBy = .2 * texture2D(textureSampler, uv + dSTdy).r - Hll;

	return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
	vec3 vSigmaX = dFdx(surf_pos.xyz);
	vec3 vSigmaY = dFdy(surf_pos.xyz);
	vec3 vN = surf_norm;
	vec3 R1 = cross(vSigmaY, vN);
	vec3 R2 = cross(vN, vSigmaX);
	float fDet = dot(vSigmaX, R1);
	vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
	return normalize(abs(fDet) * surf_norm - vGrad);
}

vec3 hueShift(vec3 color, float hue) {
	vec3 k = vec3(0.57735, 0.57735, 0.57735);
	float cosAngle = cos(hue);
	return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

/// #replace vec4 baseColorMapSample = texture2D(tMap, vMapUv);
vec4 baseColorMapSample = texture2D(tMap, vMapUv + 0.02 * (texture2D(tNoise, vUv * 30.).rg - .5));
float depth = computeDepth(gl_FragCoord.z, 0.01, 50.);
float shadow = smoothstep(0.03, 0.07, depth);

/// #replace #define SIXTY_MAP_AREA
#define SIXTY_MAP_AREA

diffuseColor.rgb *= 1. + 1.5 * smoothstep(100., 2., vViewPosition.z);

vec2 bigNoise = texture2D(tNoise, vEmissiveMapUv).rg - .5;
vec2 lakeUv = 0.09 * (bigNoise) + vec2(.7, 1.) * vEmissiveMapUv - vec2(0.16, .38);
lakeUv += .05 * (texture2D(tNoise, 8. * vEmissiveMapUv).rg - .5) * smoothstep(.1, - 0.3, bigNoise);
float laker = length(lakeUv);
float lake = smoothstep(0.0845, 0.085, laker);
diffuseColor.a *= lake;
diffuseColor.rgb *= 1. + .7 * smoothstep(0.095, 0.08, laker);
diffuseColor.rgb *= mix(vec3(1.), 2. * vec3(.14, .28, .18), smoothstep(0.085, 0.084, laker));

vec3 flowers = vec3(1., 0.21, 0.05);

vec3 grass = texture2D(tGrass, vEmissiveMapUv * 30.).rgb;
flowers = hueShift(flowers, - 5. * bigNoise.r);
vec3 moss = mix(.3 * grass, flowers, smoothstep(0.46, 0.55, texture2D(tNoise, vUv * 8.).r) * smoothstep(0.2, 0.4, texture2D(tVoronoi, 3. * bigNoise + vEmissiveMapUv * 80.).r));

diffuseColor.rgb = adjustSaturation(diffuseColor.rgb, 0.9);
diffuseColor.rgb = hueShift(diffuseColor.rgb, bigNoise.g * 1.5);

float grassZone = smoothstep(0., .2, vEmissiveMapUv.x); 

diffuseColor.a *= smoothstep(0.35, .32, vEmissiveMapUv.x - .12 * smoothstep(0., .8, vEmissiveMapUv.y)) + smoothstep(0.5, .51, vEmissiveMapUv.x);
diffuseColor.rgb = mix(hueShift(.4 * grass, .2), diffuseColor.rgb, grassZone);

/* Mountain shadow*/
float mtnShadow = length(vEmissiveMapUv - vec2(.55, .65));
diffuseColor.rgb *= smoothstep(-0.1, .35, mtnShadow);

diffuseColor.rgb *= 1. + 0.9 * (40. * texture2D(tEmissiveMap, vEmissiveMapUv).rgb);

diffuseColor.rgb *= 1. - 3. * shadow;

/// #replace #define SIXTY_NORMAL_AREA
#define SIXTY_NORMAL_AREA

normal = mix(normal, perturbNormalArb(- vViewPosition, normal, dHdxy_fwd(tGrass, 20. * vUv)), 1.);

metallic = 1.;

/// #replace gl_FragColor = vec4(outgoingLight, diffuseColor.a);

float capitalNoise = texture2D(tNoise, 0.002 * (vWorldPosition.zy * vec2(1., 2.) + 2. * uTime)).r - .5;
outgoingLight = mix(outgoingLight, mix(uLightColor, uDarkColor, 0.7), .1 * smoothstep(10., 40., vWorldPosition.y + 10. * capitalNoise));

float capitalFog = smoothstep(0.2, 0.8, texture2D(tNoise, 0.001 * vec2(1., 3.) * vWorldPosition.zy - .001 * uTime).r);
capitalFog *= smoothstep(0., -40., vWorldPosition.y + 40. * capitalNoise);
capitalFog *= smoothstep(-200., -190., vWorldPosition.x);
outgoingLight = mix(outgoingLight, uCapitalFog, .5 * capitalFog);

diffuseColor.a += .5 * capitalFog;

outgoingLight = mix(outgoingLight, uLightColor, depth);

outgoingLight = mix(outgoingLight, uTransitionColor, smoothstep(0., 0.5, uTransition));

float mountainDistance = smoothstep(300., 100., length(vec3(-vWorldPosition.x, 0., vWorldPosition.z)));
diffuseColor.a *= smoothstep(1. , 0.9, uTransition);
diffuseColor.a *= smoothstep(2., 1.5, uChapter);

gl_FragColor = vec4(outgoingLight, diffuseColor.a);`,cy=ws(ly,"fragmentShader"),uy=`/// #replace #define SIXTY_UNIFORMS_AREA
#define SIXTY_UNIFORMS_AREA

varying vec3 vWorldPosition;

/// #replace mvPosition = modelViewMatrix * mvPosition;
mvPosition = modelMatrix * mvPosition;
vWorldPosition = mvPosition.xyz;
mvPosition = viewMatrix * mvPosition;`,hy=ws(uy,"vertexShader");class dy extends sn{constructor(e,t){super(e,t),this.needsGrass=!0,this.envMapIntensity=1,this.uniforms.uChapter=X.uChapter,this.uniforms.uTransition=X.uTransition,this.uniforms.uResolution=ut.uResolution,this.uniforms.uTime=X.uTime,this.uniforms.uTransitionColor=X.uTransitionColor,this.uniforms.uDarkColor=X.uDarkColor,this.uniforms.uLightColor=X.uLightColor,this.uniforms.uCapitalFog=X.uCapitalFog,this.uniforms.tVoronoi={value:E.core.assetsManager.get("voronoi")},this.uniforms.tVoronoi.value.wrapS=this.uniforms.tVoronoi.value.wrapT=mt,this.uniforms.tNoise={value:E.core.assetsManager.get("noise")},this.uniforms.tGrass={value:null},this.uniforms.tReflexion={value:null},this.uniforms.textureMatrix={value:null},this.transparent=!0,cy.use(this),hy.use(this)}}const fy=`precision highp float;

uniform float uTime, uRatio, uChapter, uTransition;
uniform vec3 uDarkColor, uLightColor;
uniform vec2 uSize, uResolution;
uniform sampler2D tPerlin, tNoise, tMouse;
varying float vSeed, vRatio;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
	vec2 ratioedUv = vec2(5., vRatio) * (vUv + vSeed * .1);
	vec2 resizedUv = uSize * ratioedUv;

	vec2 sUv = gl_FragCoord.xy / uResolution;
	float mouse = clamp(texture2D(tMouse, sUv + .1 * (texture2D(tNoise, 0.4 * resizedUv).g - .5)).r, 0., 1.);
	
	float time = uTime * .5 / uSize.x;
	float strength = 1.;
	vec2 dUv = vUv;
	dUv *= 1. + .03 * mouse;
	dUv += .05 * mouse;
	dUv.y += .3 * strength * (texture2D(tNoise, resizedUv * .2 + vec2(-0.004, -0.02) * time).r - .5);
	dUv.y -= .5 * strength * (texture2D(tNoise, resizedUv * .08 + vec2(0.005, 0.01) * time).r - .5);
	dUv.y *= 1. + 0.1 * strength * (texture2D(tPerlin, resizedUv * .5 - 0.01 * time).r - .5);

	float smoothness = smoothstep(.4, .7, texture2D(tNoise, resizedUv * .08 + vec2(-0.08, -0.04) * time).r);
	
	float clouds = smoothstep(.9 - .1 * smoothness, .7, dUv.y);
	clouds *= smoothstep(0., .2, dUv.y - .2 * smoothstep(.4, 1., dUv.x));

	float alpha = clouds * smoothstep(1., .9, vUv.y) * smoothstep(0., .1, vUv.y) * smoothstep(0., .1, vUv.x)  * smoothstep(1., 0.9, vUv.x) ;

	alpha += smoothstep(0.2, .3, vUv.y) * smoothstep(0.7, .6, vUv.y) * smoothstep(0.2, .3, vUv.x) * smoothstep(.9, 0.8, vUv.x);
	alpha = min(1., alpha);

	float cloudDarkness = smoothstep(.4, 1., dUv.y) + smoothstep(.4, 0., dUv.y);
	vec3 color = mix(vec3(0.82,0.86,0.88), 1.1 * vec3(0.961,0.969,0.976), cloudDarkness); 

	float whiteText = smoothstep(2.2, 2.3, uChapter);
	color *= mix(vec3(1.), vec3(.8, .85, .87), whiteText);
	
	

	vec2 guillotineUv = vec2(uRatio, 1.) * 0.4 * sUv;
	float guillotine = smoothstep(2.3, 2.2, uChapter - .3 * sUv.y + .1 * (texture2D(tNoise, guillotineUv + .02 * texture2D(tNoise, 4. * guillotineUv).r).r - .5));
	
	alpha *= guillotine;
	alpha *= smoothstep(1., 0.3, uTransition);
	alpha *= min(1., smoothstep(.88, .96, vNormal.b) + smoothstep(0.05, 0.0, uTransition)); 
	

	gl_FragColor = vec4(color, alpha);
	
}`,py=Re(fy,"fragmentShader"),my=`precision highp float;

uniform float uChapter;

varying vec2 vUv;
varying float vSeed, vRatio;
varying vec3 vNormal;

#define PI 3.141592653589793

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

void main() {
    vUv = uv;

	vec3 transformed = position;
	transformed.y += uChapter * .01;
	
	
	vec4 mvPosition =  vec4(transformed, 1.0);

	vNormal = normalize(normalMatrix * normal);

	mvPosition = instanceMatrix * mvPosition;
	
	vSeed = (instanceMatrix[3][0] + instanceMatrix[3][1]+ instanceMatrix[3][2]);
	vRatio = instanceMatrix[1][1] / instanceMatrix[0][0];
	gl_Position = projectionMatrix * modelViewMatrix * mvPosition;

}`,gy=Re(my,"vertexShader");class vy extends ot{constructor(e,t){super(),t.renderOrder=t.userData.renderOrder,this.uniforms={uSize:{value:new me(1,1)},uChapter:X.uChapter,uTime:X.uTime,uResolution:ut.uResolution,uRatio:ut.uRatio,uTransition:X.uTransition,uPage:X.uPage,uLightColor:X.uLightColor,uDarkColor:X.uDarkColor,tPerlin:{value:E.core?.assetsManager.get("perlinNoise")},tNoise:{value:E.core?.assetsManager.get("noise")}},this.depthWrite=!1,this.depthTest=!1,this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,this.side=hn,this.transparent=!0,E.state.on(he.ATTACH,this.#e),gy.use(this),py.use(this)}#e=()=>{this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture}}}const _y=`precision highp float;

uniform float uTime, uTransition;
uniform vec3 uDarkColor, uLightColor;
uniform vec2 uResolution;
uniform sampler2D tPerlin, tNoise, tMouse;
varying float vSeed;
varying vec2 vUv;
varying vec3 vNormal;

void main() {

	vec2 sUv = gl_FragCoord.xy / uResolution;
	float mouse = clamp(texture2D(tMouse, sUv + .1 * (texture2D(tNoise, 0.4 * vUv).g - .5)).r, 0., 1.);
	
	float time = uTime * .5;
	float strength = 1.;
	vec2 dUv = vUv;
	dUv += .01 * mouse;

	dUv += .2 * (texture2D(tNoise, vUv * .2 + .02 * uTime).r - .5);
	dUv += .1 * (texture2D(tNoise, vUv - .01 * uTime).r - .5);
	float cloud = smoothstep(.5, .1, length(dUv - .5));

	vec3 color = uLightColor * (.9 + .3 * cloud);

	float alpha = 1.;
	alpha *= smoothstep(1., 0.3, uTransition);
	alpha *= min(1., smoothstep(.88, .96, vNormal.b) + smoothstep(0.05, 0.0, uTransition)); 
	
	alpha = cloud;
	
	alpha *= smoothstep(0.2, 0., uTransition);

	gl_FragColor = vec4(color, alpha);
	
	
}`,xy=Re(_y,"fragmentShader"),yy=`precision highp float;

uniform float uChapter;
uniform mat3 uCameraRotation;
varying vec2 vUv;
varying float vSeed, vRatio;
varying vec3 vNormal;

#define PI 3.141592653589793

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

void main() {
    vUv = uv;

	vec3 transformed = position;
	transformed.y += uChapter * .01;
	
	
	vec4 mvPosition =  vec4(transformed, 1.0);

	vNormal = normalize(normalMatrix * normal);

	mvPosition = instanceMatrix * mvPosition;
	
	vSeed = (instanceMatrix[3][0] + instanceMatrix[3][1]+ instanceMatrix[3][2]);
	vRatio = instanceMatrix[1][1] / instanceMatrix[0][0];
	gl_Position = projectionMatrix * modelViewMatrix * mvPosition;

}`,My=Re(yy,"vertexShader");class Sy extends ot{constructor(e,t){super(),t.renderOrder=t.userData.renderOrder,this.uniforms={uCameraRotation:{value:new qe},uSize:{value:new me(1,1)},uChapter:X.uChapter,uTime:X.uTime,uResolution:ut.uResolution,uTransition:X.uTransition,uPage:X.uPage,uRatio:ut.uRatio,uLightColor:X.uLightColor,uDarkColor:X.uDarkColor,tPerlin:{value:E.core?.assetsManager.get("perlinNoise")},tNoise:{value:E.core?.assetsManager.get("noise")}},this.depthWrite=!1,this.depthTest=!1,this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,this.side=hn,this.transparent=!0,E.state.on(he.ATTACH,this.#e),E.state.on(he.TICK,this.#t),My.use(this),xy.use(this)}#e=()=>{this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture}};#t=()=>{}}const Ty=`precision highp float;

uniform float uTime;
uniform vec2 uResolution;

uniform vec3 uSeaColor, uEarthTint, uRimColor, uCloudsColor, uAmbientColor, uLightColor;

uniform vec3 uSunPosition;
uniform float uEarthShininess, uSeaShininess;
uniform float uEarthSpecular, uSeaSpecular;

uniform float uChapter;

uniform sampler2D tNoise;
uniform sampler2D tMouseComputation;
uniform sampler2D tData;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

vec2 dHdxy_fwd(vec3 baseSample, sampler2D textureSampler, vec2 uv, float strength) {
    vec2 dSTdx = dFdx(vUv);
    vec2 dSTdy = dFdy(vUv);

    float Hll = strength * baseSample.r;
    float dBx = strength * texture2D(textureSampler, uv + dSTdx).r - Hll;
    float dBy = strength * texture2D(textureSampler, uv + dSTdy).r - Hll;

    return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
    vec3 vSigmaX = dFdx(surf_pos.xyz);
    vec3 vSigmaY = dFdy(surf_pos.xyz);
    vec3 vN = surf_norm;
    vec3 R1 = cross(vSigmaY, vN);
    vec3 R2 = cross(vN, vSigmaX);
    float fDet = dot(vSigmaX, R1);
    vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
    return normalize(abs(fDet) * surf_norm - vGrad);
}

vec3 applyTint(vec3 color, vec3 tint, float weight) {
    float luminance = dot(color, vec3(0.3, 0.59, 0.11));
    weight *= 1.0 - smoothstep(0.9, 1., luminance);
    weight *= smoothstep(0.45, .3, abs(.5 - vUv.y)); 

    return mix(color, color * tint, weight);
}

vec3 adjustSaturation(vec3 color, float saturation) {
    return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

#define SEA vec3(.118, .231, .459)

void main() {
    vec2 viewportUv = gl_FragCoord.xy / uResolution;
    float mouse = texture2D(tMouseComputation, viewportUv).r;

    
    vec2 uv = vUv;
    uv.y = 1. - uv.y;

    vec3 diffuseColor = texture2D(tData, uv).rgb;

    float poles = smoothstep(0.45, .35, abs(.5 - uv.y));
    float seaMask = smoothstep(.3, .2, length(diffuseColor - SEA));

    vec3 normal = vNormal;
    normal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(diffuseColor.rgb, tData, uv, .01));

    
    vec3 lightDir = normalize(uSunPosition - vPosition);
    vec3 N = normalize(normal);
    vec3 V = normalize(vViewPosition);

    
    vec3 ambient = uAmbientColor;
    float diffuse = max(dot(N, lightDir), 0.0);

    
    vec3 halfwayDir = normalize(lightDir + V);
    float shininess = mix(uEarthShininess, uSeaShininess, seaMask) * 16.;
    float specular = pow(max(dot(N, halfwayDir), 0.0), shininess);

    
    float rim = 1.0 - max(dot(V, N), 0.0);
    float fresnel = pow(clamp(1. - dot(N, V), 0., 1.), 5.);
    vec3 rimColor = uRimColor * (fresnel + rim);

    
    float t = uTime * .00035;
    vec2 cloudsUv = vec2(uv.x - t + sin(uv.y * 50. + t * 2.) * .001, uv.y + sin(uv.x * 50. - t * 2.) * .004) * 4.;
    vec2 shadowDecay = -(normal.xz - normalize(uSunPosition.xy)) * .01;
    
    float cloudShadow = texture2D(tData, cloudsUv + shadowDecay, 5.).a * poles;

    float clouds = texture2D(tData, cloudsUv).a * poles * .5;
    vec3 cloudsColor = uCloudsColor;

    
    diffuseColor = mix(diffuseColor, uSeaColor, seaMask);
    diffuseColor = applyTint(diffuseColor, uEarthTint, (1.0 - seaMask));
    diffuseColor = adjustSaturation(diffuseColor, smoothstep(0.44, .2, abs(.5 - uv.y)));
    diffuseColor += (texture2D(tNoise, uv * vec2(2., 1.) * 20.).b - .5) * .1 * (1. - seaMask);
    diffuseColor = mix(diffuseColor, cloudsColor, clouds);
    diffuseColor = mix(diffuseColor, uRimColor, fresnel);
    diffuseColor -= cloudShadow * (1. - clouds) * .25;

    vec3 finalColor = ambient + diffuseColor * (diffuse) + specular * mix(uEarthSpecular * poles, uSeaSpecular, seaMask);

    
    
    finalColor = mix(finalColor, vec3(0.0196, 0.0745, 0.1098), smoothstep(3.99, 4.1, uChapter));

    gl_FragColor = vec4(finalColor, 1.0);
    
}`,Ey=Re(Ty,"fragmentShader"),by=`precision highp float;

uniform mat4 secondaryProjectionMatrix;
uniform mat4 secondaryViewMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

void main() {
	vec4 mvPosition = secondaryViewMatrix * modelMatrix * vec4(position, 1.0);
	gl_Position = secondaryProjectionMatrix * mvPosition;

	vPosition = position;
    vViewPosition = -mvPosition.xyz;

	mat3 normalMat = mat3(inverse(transpose(secondaryViewMatrix * modelMatrix)));
	vNormal = vec3(normalMat * normal);
	vUv = uv;
}`,wy=Re(by,"vertexShader");class wh extends ot{constructor(e={}){super(e),wy.use(this),Ey.use(this)}}const Dy=`precision highp float;

uniform vec3 uGlowColor;

uniform vec3 uSunPosition;

uniform sampler2D tNoise;
uniform sampler2D tMouseComputation;
uniform sampler2D tAlbedo, tData;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

void main() {
    vec3 lightDir = normalize(uSunPosition - vPosition);
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewPosition);

    float diffuse = max(dot(N, lightDir), 0.0);
    float d = pow(clamp(dot(N, V), 0., 1.), 2.);

    float width = .0;
    float fadeStart = .05;
    float fadeEnd = .03;
    float fresnel = smoothstep(.0, fadeStart, d) * smoothstep(fadeEnd + fadeStart + width, fadeStart + width, d) * .5;
    fresnel *= diffuse;

    vec3 color = uGlowColor;
    gl_FragColor = vec4(color, fresnel);
}`,Ay=Re(Dy,"fragmentShader"),Cy=`precision highp float;

uniform mat4 secondaryProjectionMatrix;
uniform mat4 secondaryViewMatrix;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vPosition;

void main() {
	vec4 mvPosition = secondaryViewMatrix * modelMatrix * vec4(position, 1.0);
	gl_Position = secondaryProjectionMatrix * mvPosition;

	vPosition = position;
    vViewPosition = -mvPosition.xyz;
	mat3 normalMat = mat3(inverse(transpose(secondaryViewMatrix * modelMatrix)));
	vNormal = vec3(normalMat * normal);
}`,Ry=Re(Cy,"vertexShader");class Dh extends ot{constructor(e={}){super(e),Ry.use(this),Ay.use(this)}}const Py=`precision highp float;

uniform sampler2D tNoise;
uniform vec3 uDarkColor, uLightColor;
uniform float uTime, uTransition, uTransitionDirection;

varying vec2 vUv;

void main() {
	vec3 color = uDarkColor;

	float height = vUv.y;
	height -= .6 * abs(vUv.x - .5);
	height += .6 * (texture2D(tNoise, vec2(vUv.x, .5)).r - .5);
	height += .1 * (texture2D(tNoise, vec2(6. * vUv.x, .5)).r - .5);
	float hills = smoothstep(.28, .3, height);

	color += 2. * uLightColor * height * (vUv.y + .1 * sin(uTime));
	
	color *= 1. - .5 * smoothstep(.35, .5, vUv.x) * smoothstep(.65, .5, vUv.x);

	float alpha = hills;

	alpha *= smoothstep(.1, 0., uTransition);

	gl_FragColor = vec4(color, alpha);
}`,Uy=Re(Py,"fragmentShader"),Ly=`precision highp float;

varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ny=Re(Ly,"vertexShader");class Iy extends ot{constructor(e,t){super({uniforms:{uTime:X.uTime,uTransition:X.uTransition,uTransitionDirection:X.uTransitionDirection,uLightColor:X.uLightColor,uDarkColor:X.uDarkColor,tNoise:{value:E.core.assetsManager.get("noise")}},depthTest:!1,transparent:!0}),Ny.use(this),Uy.use(this)}}const Fy=`precision highp float;

uniform sampler2D tNoise, tMouseComputation;
uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uTime, uDPR, uTransition, uTransitionDirection;
uniform float uChapter;
uniform float uLineCount, uHeadLength, uSpeed, uOpacity;
uniform int iSteps;
varying vec2 vUv;
varying vec3 vPosition, vWorldPosition, vViewPosition;

float hash(vec2 p) {
	return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float pow2(float x) {
	return x * x;
}

void main() {
	vec2 sUv = gl_FragCoord.xy / uResolution;
	float mouse = clamp(texture2D(tMouseComputation, sUv).r, 0., 1.);
	float isReflexion = smoothstep(-31.9, -32., vWorldPosition.y);
	float lines = 0.;
	float brightness = 0.;

	vec2 offset;
	vec3 color;
	float top = smoothstep(0.5, 0., vUv.y);
	float farAway = smoothstep(100., 300., length(vViewPosition));
	float aliased = farAway * smoothstep(40., 0., vPosition.y);
	float tipLength = uHeadLength * (.1 + 5. * vUv.y * pow2(vUv.y));
	
	float littleDpr = 1. - step(1.5, uDPR);

	for(int i = 0; i < iSteps; i++) {
		offset.x = (float(i) / (float(iSteps)));
		offset.y = float(i) / float(iSteps);
		vec2 linesUv = vec2(fract(vUv.x * uLineCount + offset.x), vUv.y);
		float uniqLineUv = floor(vUv.x * uLineCount + .5 + offset.x) / uLineCount;
		float line = smoothstep(0.485 - .1 * littleDpr - .1 * farAway - .12 * aliased, 0.5, abs(linesUv.x - .5)) * (1. - .7 * isReflexion);
		line *= 1. - (.5 + 0.5 * littleDpr) * aliased;
		float glow = smoothstep(0., 0.5, abs(linesUv.x - .5));
		glow *= 1. + .5 * aliased;

		float speed = uSpeed * (1. + .8 * (texture2D(tNoise, vec2(uniqLineUv, offset.y + 0.1)).r - .5)); 
		float head = 5. * (texture2D(tNoise, vec2(uniqLineUv, 0.)).r - .5);
		head = fract(head + 1. - vUv.y - uTime * speed + offset.y);

		float uniqLineIntensity = smoothstep(.4, .6, texture2D(tNoise, vec2(uniqLineUv, offset.y)).r) - .5;
		float lineBrightness = smoothstep(0.4, 1., head); /* Fade tail */
		lineBrightness *= smoothstep(1., 1. - (tipLength * .2) - 0.9 * tipLength * (1. - abs(linesUv.x - .5)), head); /* smooth head */

		lines += (0.1 + .1 * isReflexion) * glow * lineBrightness * (1. + uniqLineIntensity);

		lineBrightness += (2. + 8. * uniqLineIntensity + 4. * (1. - vUv.y)) * smoothstep(1. - tipLength, 1., head); /* Head brightness */
		lineBrightness *= smoothstep(1., 1. - (tipLength * .2) - 0.9 * tipLength * (1. - abs(linesUv.x - .5)), head); /* smooth head */
		lines += line * lineBrightness * (1. - isReflexion) * (1. + uniqLineIntensity);

	}

	lines *= smoothstep(0., .1 + .1 * littleDpr, vUv.y); /* Fade top */
	lines *= smoothstep(.65, .3, vUv.y); /* Fade bottom */

	float factor = 0.;
	factor += lines;

	/* ground glow */
	factor *= .7 + 5. * smoothstep(0., 40., vPosition.z) * smoothstep(180., 40., vPosition.z) * smoothstep(90., 120., length(vPosition.xz));

	factor *= .4 + .6 * smoothstep(350., 0., length(vViewPosition));
	factor *= uOpacity;

	factor *= 1. + mouse;

	color = uColor * clamp(factor, 0., 2.5);

	float textShadow = smoothstep(0.2, 0., abs(sUv.y - .5));
	color *= 1. - .7 * textShadow; /* Title more visible */

	float alpha = 1. - .6 * isReflexion;
	alpha *= mix(1., smoothstep(85., 100., length(vPosition.xz)) + smoothstep(80., 40., length(vPosition.xz)), isReflexion);
	alpha *= mix(1., smoothstep(120., 40., vPosition.y), isReflexion);

	float growTransition = smoothstep(0.1, 0.0, .6 * uTransition - .6 + vUv.y);
	growTransition *= smoothstep(1., 0.9, uTransition);
	float fadeTransition = smoothstep(0.2, 0., uTransition - .2 * vUv.y);
	alpha *= mix(fadeTransition, growTransition, uTransitionDirection);
	alpha *= smoothstep(1., .5, uChapter);

	

	gl_FragColor = vec4(color, alpha);
}`,Oy=Re(Fy,"fragmentShader"),By=`precision highp float;

varying vec3 vPosition, vWorldPosition, vViewPosition;
varying vec2 vUv;

void main() {
	vUv = uv;

	vPosition = position;
	vec4 mvPosition = modelMatrix * vec4(position, 1.0);
	vWorldPosition = mvPosition.xyz;
	mvPosition =  viewMatrix * mvPosition;
	vViewPosition  = mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;
}`,ky=Re(By,"vertexShader");class Vy extends ot{constructor(e,t){super({uniforms:{uTime:X.uTime,uTransition:X.uTransition,uTransitionDirection:X.uTransitionDirection,uDPR:ut.uDPR,uChapter:X.uChapter,uResolution:ut.uResolution,tNoise:{value:E.tools.noise.texture},tMouseComputation:{value:E.webgl.mouseComputation?.texture},uColor:{value:new ce(10605311)},iSteps:{value:8},uSpeed:{value:.08},uHeadLength:{value:.16},uLineCount:{value:60},uOpacity:{value:1}},side:nn,transparent:!0,blending:Ti,depthTest:!1}),this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,E.debug?.mapping.add(this,"EnergyCone",1),ky.use(this),Oy.use(this)}}const zy=`precision highp float;

varying vec2 vUv;

uniform vec3 uSunProjected;
uniform sampler2D tNoise;
uniform float uPage, uChapter, uTransition, uRatio;

vec3 hueShift(vec3 color, float hue) {
    vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

vec2 rotateUV(vec2 uv, vec2 mid, float rotation)
{
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}
vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

#include <common>

void main() {

	if (uTransition > .5) discard;
	vec3 color = vec3(1.);

	vec2 fUv = vec2(vUv.x, (vUv.y - 0.5) / uRatio + 0.5);
	fUv += 0.002 * (rand(gl_FragCoord.xy) - .5);
	vec2 sunProjected = (uSunProjected.xy * .5 + .5);
	sunProjected = mix(sunProjected, mix(sunProjected + vec2(-3., -7.6), vec2(.95, .8), .95), smoothstep(.6, 1., uChapter));
	
	float angle = length(sunProjected);
	
	float sun = length(fUv - sunProjected );
	vec3 rainbow = hueShift(vec3(1., 0., 0.), 28. * sun * 2.);
	rainbow = adjustSaturation(rainbow, 0.25);
	float sunLight = smoothstep(0.5, 0., sun);	

	vec2 rUv = rotateUV(fUv, sunProjected, 2. * angle);
	float sunAtan = atan(rUv.x - sunProjected.x, rUv.y - sunProjected.y);
	float flares = sin(sunAtan * 14.);
	flares = smoothstep(0.85, 2., flares);
	flares *= smoothstep(0.1, 0.15, sun) ;
	flares *= smoothstep(0.3, 0.15, sun) ;

	float squareFlare = smoothstep(.8, .9, sun) * smoothstep(1., .9, sun);
	squareFlare *= smoothstep(0.8, 1., sin(sunAtan * 3.));

	squareFlare += 0.1 * angle * smoothstep(.75, .78, sun) * smoothstep(.8, .79, sun) * smoothstep(0.9, 1., sin(sunAtan * 2. + .2));
	
	float offsetSun = length(fUv - sunProjected - vec2(-0.2, 0.) );
	float ghostFlare = smoothstep(0.3, 0.33, offsetSun) * smoothstep(0.5, 0.4, offsetSun);
	ghostFlare *= smoothstep(0.4 + angle * .1, 1., sin(sunAtan * 2. + 1.6));

	color = mix(color, rainbow, 0.1 * smoothstep(0., 0.05, flares) + 0.5 * squareFlare);
	float alpha = 0.3 * sunLight + 0.7 * flares + 0.2 * squareFlare;
	alpha += .08 * ghostFlare;

	
	
	alpha *= smoothstep(.7, .5, uChapter) + 0.4 * smoothstep(1., 1.6, uChapter);
	alpha *= smoothstep(0.4, 0.0, uTransition);
	
	
	gl_FragColor = vec4(color, alpha);
	

}`,Hy=Re(zy,"fragmentShader"),Gy=`precision highp float;

varying vec2 vUv;

void main() {
	vUv = uv;
	
	gl_Position = vec4(position.xy, -.1, 1.0);
}`,Wy=Re(Gy,"vertexShader");class Ah extends ot{#e=new L;constructor(e){super({uniforms:{uRatio:ut.uRatio,uChapter:X.uChapter,uTransition:X.uTransition,uTransitionColor:X.uTransitionColor,uPage:X.uPage,tNoise:{value:E.core.assetsManager.get("noise")}},dithering:!0,blending:Ti,transparent:!0,depthTest:!1,depthWrite:!1}),this.sunPosition=e.position,this.uniforms.uSunProjected={value:this.#e},E.state.on(he.TICK,this.#t),Wy.use(this),Hy.use(this)}#t=()=>{E.webgl.camera&&(E.webgl.camera.updateMatrixWorld(),this.#e.copy(this.sunPosition),this.#e.project(E.webgl.camera))}}const Xy=`precision highp float;

uniform sampler2D tNoise;
uniform vec3 uDarkColor, uLightColor;
uniform float uTime, uTransition;

varying vec3 vWorldPosition;
varying vec2 vUv;

#include <common>

void main() {

	float center = smoothstep(180., 0., length(vWorldPosition.xy + 10. * rand(gl_FragCoord.xy)));

	vec3 color = uLightColor * center * 30.;

	float alpha = .5 * center;

	alpha *= smoothstep(.15, 0., uTransition);
	
	gl_FragColor = vec4(color, alpha);
}`,Yy=Re(Xy,"fragmentShader"),qy=`precision highp float;

varying vec3 vWorldPosition;
varying vec2 vUv;

void main() {
	vUv = uv;
	vec4 mvPosition =  vec4(position, 1.0);
	mvPosition = modelMatrix * mvPosition;
	vWorldPosition = mvPosition.xyz;
	gl_Position = projectionMatrix * viewMatrix * mvPosition;

	}`,jy=Re(qy,"vertexShader");class $y extends ot{constructor(e,t){super({uniforms:{uTime:X.uTime,uTransition:X.uTransition,uLightColor:X.uLightColor,uDarkColor:X.uDarkColor},depthTest:!1,side:nn,transparent:!0,blending:Ti}),jy.use(this),Yy.use(this)}}const Ky=`precision highp float;

uniform sampler2D tMap, tNoise;
uniform float uTime, uChapter;
uniform vec3 uProjectedPos;

varying vec2 vUv;
varying vec3 vWorldPosition;

vec2 rotateUV(vec2 uv, vec2 mid, float rotation) {
	return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}

void main() {
	float frontTrees = step( 460., vWorldPosition.x);
	vec2 noiseUv = vUv + .05 * (texture2D(tNoise, .1 * vUv + vec2(.001, .001) * uTime).r - .5);
	vec4 map = texture2D(tMap, noiseUv);

	float chapter = smoothstep(4.1, 4.2, uChapter);
	map.a *= chapter;

	vec2 dUv = rotateUV(vUv, vec2(1., 0.), 0.3 + .2 * sin(4. * length(uProjectedPos - .5)));

	dUv.x += .02 * smoothstep(4.1, 5., uChapter);
	float godrays = texture2D(tNoise, vec2(4., 0.01) * dUv + vec2(-.01 * uTime, 0.)).r;
	godrays *= texture2D(tNoise, vec2(1., 0.01) * dUv + vec2(.01 * uTime, 0.)).r;
	godrays *= texture2D(tNoise, vec2(4., 0.01) * dUv + vec2(.0 * uTime, 0.01 * uTime)).r;
	godrays += godrays * godrays;

	float mainRay = abs(dUv.x - .85);
	mainRay = smoothstep(.2, 0., mainRay);
	godrays += 1. * mainRay;

	godrays *= smoothstep(0., .4, dUv.y) * smoothstep(1., .4, dUv.y);
	godrays *= vUv.x;
	godrays *= 1. - frontTrees;

	map.rgb += vec3(1., .9, .4) * 1.2 * godrays;

	if(map.a < .05)
		discard;
	
	map.rgb = mix(map.rgb, 0.6 * vec3(0.024, 0.082, 0.118), .75);
	
	
	gl_FragColor = map;

	gl_FragColor = linearToOutputTexel(gl_FragColor);
	gl_FragColor.rgb = mix(vec3(0.0196, 0.0745, 0.1098), gl_FragColor.rgb, chapter);
}`,Zy=Re(Ky,"fragmentShader"),Jy=`precision highp float;

uniform float uTime, uChapter;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
	vUv = uv;
	vec4 tmpPosition = modelMatrix * vec4(position, 1.0);
	float middleTree = step( 491., length(tmpPosition.xz)) * (1. - step( 525., length(tmpPosition.xz)));
	float frontTree = step( 525., length(tmpPosition.xz));

	float chapter = smoothstep(4.1, 5., uChapter);
	vec3 transformed = position;

	
	transformed *= 1. + (0.4 * (1. - chapter) * frontTree);

	/* Left translation - baackground & front tree */
	transformed.z += ( -.15 + .3 * chapter) * (1. - middleTree);

	/* Right translation - middle tree */
	transformed *= 1. + (1.5 + 0.8 * (1. - chapter)) * middleTree;
	
	transformed.z += (-0.5 + 0.6 * chapter) * middleTree;

	vec4 mvPosition = modelMatrix * vec4(transformed, 1.0);
	vWorldPosition = mvPosition.xyz;
	gl_Position = projectionMatrix * viewMatrix * mvPosition;
}`,Qy=Re(Jy,"vertexShader");class eM extends ot{constructor(e,t){super({uniforms:{uTime:X.uTime,uChapter:X.uChapter,tMap:{value:e.map},tNoise:{value:E.core.assetsManager.get("noise")}},transparent:!0}),Qy.use(this),Zy.use(this)}}const tM=`precision highp float;

varying vec2 vUv;
varying vec3 vPosition;

uniform sampler2D uMap, uHeight, uNoise;
uniform sampler2D tMouseComputation;
uniform vec2 uResolution;
uniform vec3 uLight;
uniform float uScrollProgress, uChapter;
uniform float uWind, uTime;

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

vec3 hueShift(vec3 color, float hue) {
	vec3 k = vec3(0.57735, 0.57735, 0.57735);
	float cosAngle = cos(hue);
	return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
	float chapterFade = smoothstep(1., 1.3, uChapter);
	float mouse = min(1., max(0., texture2D(tMouseComputation, gl_FragCoord.xy / uResolution).r)) * chapterFade;

	vec2 uv = vUv;

	float up = vPosition.y / .45;
	float time = uTime * .5 + sin(uTime + vPosition.x * .5) * .5 + sin(uTime + vPosition.z * .5) * .2 + sin(uTime + vPosition.x * .5 + (up * .5 + .5) * 10.) * .1;
	
	vec2 dUv = vUv;
	dUv.x += cos(sin(vPosition.z * .4 + time + mouse * .5) - mouse * .01) * .01 * ((up * .5 + .5) * .4 + .5);
	dUv.y += cos(sin(vPosition.x * .4 + time + mouse * .5) - mouse * .01) * .01 * ((up * .5 + .5) * .4 + .5);

	float lacunarity = (texture2D(uNoise, vUv * .5).r * .5) + .1;

	
	vec3 map = texture2D(uMap, dUv).rgb;
	float height = texture2D(uHeight, dUv, (1. - up) * 3.).r * chapterFade + mouse * .05;

	float alpha = smoothstep(up - .1, up, height);
	alpha *= smoothstep(1., 1.5, uChapter);

	vec3 color = map;
	color *= up * .5 + 1.;
	color *= height * 1.8;
	color -= length(dUv - vUv) * 15. - .12;
	

	float readabilityFactor = smoothstep(1.3, 2., uChapter);
	color = hueShift(color, -.3 + .3 * readabilityFactor);
	color = adjustSaturation(color, 1.3);

	vec2 e = vec2(1. / 2048., 0.);
	vec3 normal = vec3(0, 0., .5);
	normal.x += (texture2D(uHeight, dUv + e.xy).r - texture2D(uHeight, dUv - e.xy).r);
	normal.z += (texture2D(uHeight, dUv + e.yx).r - texture2D(uHeight, dUv - e.yx).r);
	vec3 light = uLight + vec3(-0., .0, 5.);

	float lambertian = dot(normal, light);
	color *= 1. + lambertian * .05 * vec3(1.0, 0.7, 0.0) * 2.;

	color *= 1. - .3 * readabilityFactor;
	color += .05 * readabilityFactor;

	gl_FragColor = vec4(color, alpha);
}`,nM=Re(tM,"fragmentShader"),iM=`precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uScrollProgress;
uniform float uRatio;

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
	vUv = uv;

	vec3 pos = position;
	pos.x *= uRatio;
	vUv.x *= uRatio;
	vPosition = pos;
	vPosition.z += uScrollProgress * .2;
	vUv.y -= uScrollProgress * .2;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,sM=Re(iM,"vertexShader");class Ch extends vo{constructor(e,t){const n=t.material.map,s=t.material.aoMap;n.colorSpace=Pt,E.webgl.renderer.initTexture(n),E.webgl.renderer.initTexture(s),super({uniforms:{uMap:{value:n},uNoise:{value:E.core.assetsManager.get("noise")},uHeight:{value:s},uLight:{value:e},uWind:{value:1},uTime:X.uTime,uChapter:X.uChapter,uRatio:ut.uRatio,uResolution:ut.uResolution,uScrollProgress:X.uScrollProgress,tMouseComputation:{value:E.webgl.mouseComputation?.texture}},transparent:!0,depthTest:!1}),this.uniforms.uNoise.value.wrapS=this.uniforms.uNoise.value.wrapT=mt,sM.use(this),nM.use(this)}}const rM=`precision highp float;

varying vec2 vUv;
varying vec3 vPosition;

varying float vSeed;
uniform sampler2D uMap;
uniform vec3 uLight;
uniform float uWind, uTime;

vec3 hueShift(vec3 color, float hue) {
	vec3 k = vec3(0.57735, 0.57735, 0.57735);
	float cosAngle = cos(hue);
	return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
	vec3 map = texture2D(uMap, vUv).rgb * 1.8 * (smoothstep(0., .2, vPosition.y) * .7 + .3) + .15;

	map *= mix(vec3(.8, .8, .9), vec3(.9, .9, .2), smoothstep(0., .1, vSeed));
	map = hueShift(map, -vSeed * .05);

	gl_FragColor = vec4(map, 1.);
}`,oM=Re(rM,"fragmentShader"),aM=`precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec2 uv;
attribute vec3 position;
attribute mat4 instanceMatrix;

varying float vSeed;
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform float uScrollProgress, uChapter;
uniform vec2 uMouse;

void main() {
	vUv = uv;
	vPosition = position;

	mat4 im = instanceMatrix;
	im[3][2] = fract((im[3][2] + uScrollProgress * 2.5) * .05 + .8) * 20. - 8.;

	float seed = (im * vec4(1.)).x;
	vSeed = seed;

	float scale = smoothstep(1.2, 1.5, uChapter + seed * .01);
	mat4 scaleMatrix = mat4(scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, 1.0);
	im *= scaleMatrix;

	float up = vPosition.y / .7;

	float time = uTime + sin(uTime + vPosition.x * .2 + seed) * .5 + sin(uTime + vPosition.z * .2 + seed) * .2 + sin(uTime + vPosition.x * .2 + up * 1. + seed) * .1;
	vec2 dUv = vUv;
	vPosition.x += cos(sin(vPosition.z * .4 + time + up * 5.)) * .2 * (up * .6 + .02);
	vPosition.z += cos(sin(vPosition.x * .4 + time + up * 5.)) * .2 * (up * .6 + .02);

	vec4 finalPos = projectionMatrix * modelViewMatrix * im * vec4(vPosition, 1.0);
	vec3 ndc = finalPos.xyz / finalPos.w;

	float dist = length(ndc.xy - uMouse);
	vPosition *= 1. + smoothstep(.5, .0, dist) * .1;
	vPosition.xz += smoothstep(.5, .0, dist) * .2 * vPosition.y;

	gl_Position = projectionMatrix * modelViewMatrix * im * vec4(vPosition, 1.0);
}`,lM=Re(aM,"vertexShader");class Rh extends vo{constructor(e,t){const n=t.material.map;super({uniforms:{uMap:{value:n},uLight:{value:e},uWind:{value:1},uTime:X.uTime,uChapter:X.uChapter,uMouse:{value:E.webgl.lerpedMouse},uResolution:ut.uResolution,uScrollProgress:X.uScrollProgress,tMouseComputation:{value:E.webgl.mouseComputation?.texture}},side:2,transparent:!0,depthTest:!1}),lM.use(this),oM.use(this),t.renderOrder=20}}const cM=`precision highp float;

uniform vec3 uColor, uGlowColor;

uniform float uTime;
uniform float uFade;
uniform float uDpr;
uniform vec2 uResolution;
uniform sampler2D tMap;
uniform sampler2D tNoise;
uniform sampler2D tMouse;

varying vec2 vUv;

void main() {

    vec2 sUv = gl_FragCoord.xy/uResolution;
    float mouse = clamp(texture2D(tMouse, sUv).r, 0., 1.);
    float boats = step(.62, vUv.x);
    vec4 data = texture2D(tMap, vUv);
    
    if(boats < .5){
        vec4 blur = texture2D(tMap, vUv + (1./(uResolution * uDpr)));
        data = (data + blur) * .5;
    }

    float glow = data.g;

    float factory = step(.4, vUv.y) * (1. - boats);
    float t = uTime * .005;
    float noise = texture2D(tNoise, vUv * .2 + vec2(-t * 5., -t)).r;
    noise *= texture2D(tNoise, vUv * .15 + vec2(t, 4. * t)).r;
    noise = smoothstep(0.2, 0.4, noise);
   
    float intensity =  mix(3., 1.8, boats) * data.r;
    float glowIntensity = mix(4. - 1. * factory, 3., boats);
    glowIntensity += (8. + 2. * factory) * noise;
    glowIntensity = clamp(glowIntensity, 0., 6. - 3. * boats);
    glowIntensity += (2. - boats) * mouse;
    intensity += glowIntensity * glow;
    
    

    vec3 color = intensity * mix(uColor, .5 * uGlowColor, smoothstep(1., 2., intensity));

    float alpha = smoothstep(0., .1, length(data.rgb));
    alpha *= 0.85;

    gl_FragColor = vec4(color.rgb, alpha) * smoothstep(0.2, .8, uFade + .4 * data.b);
    
}`,uM=Re(cM,"fragmentShader"),hM=`uniform float uOffset;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 transformed = position;
  transformed.x += uOffset;
  transformed.z += .5 * uOffset;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(transformed, 1.);
}`,dM=Re(hM,"vertexShader");class fM extends ot{constructor(e={},t){super({uniforms:{tMap:{value:e.map},tMouse:{value:E.webgl.mouseComputation?.texture},tNoise:{value:E.core.assetsManager.get("noise")},uMobile:ut.uMobile,uResolution:ut.uResolution,uDpr:ut.uDPR,uTime:X.uTime,uColor:{value:new ce("#8fc1e5")},uGlowColor:{value:new ce("#6BFEFF")},uFade:{value:0},uOffset:{value:0}},transparent:!0,depthTest:!1}),t.renderOrder=1/0,this.name=e.name,dM.use(this),uM.use(this),E.debug?.mapping.add(this,"Holograms",1)}}const pM=`precision highp float;

varying vec2 vUv;

uniform vec2 uResolution;
uniform sampler2D tNoise, tPerlin, tMouse;
uniform float uPage, uChapter, uTime;

vec2 rotateUV(vec2 uv, vec2 mid, float rotation)
{
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

#define PI 3.141592653589793

#include <common>

void main() {

    vec2 sUv = gl_FragCoord.xy / uResolution;
    float time = .01 * uTime;

    float amount = smoothstep(.1, 0.5, length(sUv - .5));
    float thickTransition = smoothstep(2.6, 2.9, uChapter - .2 * sUv.y);
    float globeTransition = smoothstep(3., 3.5, uChapter - .02 * sUv.y);
    float dezoom = smoothstep(2.5, 3.5, uChapter);

    vec2 uv = (vUv - vec2(.5, 1.5)) * (1. + dezoom) + vec2(.5, -1.);
    float perlin = texture2D(tPerlin, vec2(3.5, 2.) * uv + vec2(- .2 * time)).r;
    float noise = texture2D(tNoise, vec2(2., 1.) * uv + vec2(-time)).r;

    vec4 mouseSample = texture2D(tMouse, sUv + .1 * (noise - .5) + .05 * (perlin - .5));
    float mouse = clamp(mouseSample.r * .8 + mouseSample.g * .2, 0., 1.);

    uv = (uv - .5) * (1. + .01 * mouse) + .5;
    vec2 dUv = rotateUV(uv, vec2(.5), .3);
    dUv += .02 * perlin;
    dUv += .1 * noise;
    float bigNoise = texture2D(tNoise, .5 * dUv + vec2(.2 * time, 0.1 * time)).r;

    float clouds = smoothstep(.5 - .1 * amount, 1., bigNoise - .2 * globeTransition);

    vec2 rUv = rotateUV(vec2(0.2, .7) * uv - vec2(0., .3 * time), vec2(.5), -.04);
    rUv += bigNoise * .04;
    float sparse = texture2D(tNoise, rUv).r;
    sparse *= 1. + .1 * noise;
    clouds += .6 * smoothstep(.55, .8, sparse) * (1. - thickTransition);

    float fluff = texture2D(tNoise, vec2(1.2, .6) * uv + .02 * perlin + .04 * noise + vec2(time * .3)).r;
    clouds += .5 * smoothstep(mix(.5 - .2 * amount, .78, globeTransition), .8, fluff); 
	
	float count = 4.;

    vec2 fUv = uv;
	vec2 cUv = vec2(fUv.x, fUv.y * (count)) + .01 * mouse;
	float offset = 1.5 * (smoothstep(0.7 + .2 * texture2D(tNoise, fUv * 4.).r, 1., fract(cUv.y)) + floor(cUv.y));

	float cloudShape = (-.01 * abs(sin(fUv.x * 50. + offset)) - 0.03 * abs(sin(fUv.x * 15. + offset)) - 0.02 * abs(sin(fUv.x * 17. + offset))) * count;
	cUv.y += cloudShape;

	cUv += 2. * (texture2D(tNoise, fUv * .2).rg - .5) ;
	cUv *= 1. + .2 * (bigNoise - .5) ;
	cUv.y += .2 * (perlin - .5) ;
	cUv.y -= .05 * count * texture2D(tNoise, fUv * 4.).r;

	float cloudRows = fract(cUv.y);
	cloudRows += smoothstep(0.5, 0., cloudRows);
	
    cloudRows *= thickTransition;

	clouds = mix( clouds, cloudRows, cloudRows);

    float opening = smoothstep(0.2, 1., .9 * length(sUv - .5) + .3 * smoothstep(-.1, .1, (texture2D(tNoise, .2 * uv + .01 * noise+  .005 * perlin).g - .5)) + smoothstep(3.5, 2.8, uChapter));
    opening *= smoothstep(3.5, 3.4, uChapter);
    clouds *= opening;

    
	vec3 color = mix(vec3(0.737,0.773,0.8), vec3(0.961,0.969,0.976), clamp(clouds, 0., 1.));
    color *= vec3(.8, .85, .87);

    /* Godrays */
    vec2 godUv = rotateUV(vUv, vec2(.5), 0.1 + .1 * uChapter);
	float godrays = texture2D(tNoise, vec2(4., 0.01) * godUv + vec2(-.005 * uTime, 0.)).r;
    godrays *= smoothstep(.61 - .05 * (godUv.y - 1.), 1., godrays);
	godrays *= smoothstep(.4, .5, texture2D(tNoise, vec2(4., 0.01) * godUv + vec2(.005 * uTime, 0.)).r);

	godrays *= smoothstep(0., .5, sUv.y) * smoothstep(0., .6, sUv.x)  * smoothstep(1., .7, sUv.x);

	float alpha = min(1., clouds + thickTransition) * opening;

    godrays *= smoothstep(2.4, 2.7, uChapter);
    godrays *= smoothstep(3., 2.9, uChapter);
    color = mix(color, vec3(.95, 1., .9) , smoothstep(.1, 0., alpha));
    alpha += 2. * godrays * (1. - alpha);
    

    
	gl_FragColor = vec4(color, alpha);

}`,mM=Re(pM,"fragmentShader"),gM=`precision highp float;

varying vec2 vUv;

void main() {
	vUv = uv;
	
	vec4 mvPosition =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	gl_Position = mvPosition;
	
}`,vM=Re(gM,"vertexShader");class Ph extends ot{constructor(){super({uniforms:{uResolution:ut.uResolution,uTime:X.uTime,uChapter:X.uChapter,tNoise:{value:E.core.assetsManager.get("noise")},tPerlin:{value:E.core.assetsManager.get("perlinNoise")}},depthTest:!1,transparent:!0}),this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture},vM.use(this),mM.use(this)}}const _M=`/// #replace #define SIXTY_UNIFORMS_AREA
#define SIXTY_UNIFORMS_AREA
uniform float uTransition, uTime;
uniform vec2 uResolution;
uniform float uFogNear, uFogFar;
uniform vec3 uLightColor, uTransitionColor;
uniform sampler2D tMouse, tNoise, tPerlin;
varying vec3 vPosition;

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
	return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
	return (near * far) / ((far - near) * invClipZ - far);
}
float computeDepth(float fragCoordZ, float near, float far) {
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, near, far);
	return viewZToOrthographicDepth(viewZ, near, far);
}

vec2 dHdxy_fwd(sampler2D textureSampler, vec2 uv, float strength) {
	vec2 dSTdx = dFdx(vUv);
	vec2 dSTdy = dFdy(vUv);

	float Hll = strength * texture2D(textureSampler, uv).r;
	float dBx = strength * texture2D(textureSampler, uv + dSTdx).r - Hll;
	float dBy = strength * texture2D(textureSampler, uv + dSTdy).r - Hll;

	return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
	vec3 vSigmaX = dFdx(surf_pos.xyz);
	vec3 vSigmaY = dFdy(surf_pos.xyz);
	vec3 vN = surf_norm;
	vec3 R1 = cross(vSigmaY, vN);
	vec3 R2 = cross(vN, vSigmaX);
	float fDet = dot(vSigmaX, R1);
	vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
	return normalize(abs(fDet) * surf_norm - vGrad);
}

/// #replace #define SIXTY_START_AREA
#define SIXTY_START_AREA

float transition = smoothstep(0., 0.2, uTransition);

/// #replace #define SIXTY_MAP_AREA
 #define SIXTY_MAP_AREA

vec2 sUv = gl_FragCoord.xy / uResolution;
float mouse = clamp(texture2D(tMouse, sUv).r, 0., 1.);
vec3 windySnow = texture2D(tPerlin, vec2(1., 7.) * vUv + vec2(- .07 * uTime, 0.)).rgb ;
windySnow = smoothstep(.6, .8, windySnow);
windySnow *= .3 * mouse + smoothstep(.5, 1., texture2D(tNoise, vec2(1., 1.5) * vUv + vec2(-.05 * uTime, 0.)).rgb);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.), windySnow); 

/// #replace #define SIXTY_NORMAL_AREA
#define SIXTY_NORMAL_AREA

normal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(tPerlin, 6. * vUv, 2.));

/// #replace gl_FragColor = vec4(outgoingLight, diffuseColor.a);

float depth = computeDepth(gl_FragCoord.z, uFogNear, uFogFar);
depth = smoothstep(0.01, .6, depth);
depth *= 1. - transition;
outgoingLight = mix(outgoingLight, uLightColor, depth);

diffuseColor.a *= smoothstep(-.8, 1., vPosition.y);
diffuseColor.a *= 1. - transition;
gl_FragColor = vec4(outgoingLight, diffuseColor.a);`,xM=ws(_M,"fragmentShader"),yM=`/// #replace #define SIXTY_UNIFORMS_AREA
#define SIXTY_UNIFORMS_AREA

uniform float uChapter;
varying vec3 vPosition;

/// #replace #define SIXTY_TRANSFORMED_AREA
#define SIXTY_TRANSFORMED_AREA
transformed.y -= uChapter * 1.5;
vPosition = transformed;`,MM=ws(yM,"vertexShader");class SM extends sn{constructor(e,t){const n=E.webgl.mainScene.mountains;e.normalMap=n.mountainMaterial.uniforms.tRockNormal.value,e.envMapRotation.set(0,-3,0),super(e,t),this.normalScale.set(1,1),this.normalMapTransform.repeat.set(3,5),this.normalMapTransform.update(),this.envMapIntensity=.44,this.ambientIntensity=2.24,this.ambient=new ce(12703189),this.uniforms.uFogNear=n.mountainMaterial.uniforms.uFogNear,this.uniforms.uFogFar=n.mountainMaterial.uniforms.uFogFar,this.uniforms.tNoise={value:E.core.assetsManager.get("noise")},this.uniforms.tPerlin={value:E.core.assetsManager.get("perlinNoise")},this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture},this.transparent=!0,this.uniforms.uChapter=X.uChapter,this.uniforms.uTime=X.uTime,this.uniforms.uResolution=ut.uResolution,this.uniforms.uTransition=X.uTransition,this.uniforms.uTransitionColor=X.uTransitionColor,this.uniforms.uLightColor=X.uLightColor,xM.use(this),MM.use(this)}}const TM=`precision highp float;

uniform float uDotSize;
uniform float uGridSize;
uniform float uLongpress;
uniform float uChapter;
uniform float uHover;
uniform vec3 uColor;

varying float vLife;
varying float vIsLine;
varying vec2 vUv;

void main() {
	
	float linePattern = smoothstep(.1, .02, abs(vUv.x - .5));
	linePattern *= smoothstep(.5, .45, abs(vUv.y - .5));

	
	float dotPattern = smoothstep(.15, 0., length((vUv - .5) * vec2(1., 2.))) * .5;

	vec3 linesColor = vec3(0.376, 0.678, 0.816);
	vec3 dotsColor = vec3(1.);

	float alpha = mix(dotPattern, linePattern, vIsLine) * vLife * uHover;
	if(alpha <= .001)
		discard;

	vec3 color = mix(dotsColor, linesColor, vIsLine);

	gl_FragColor = vec4(color, alpha * (1. - uLongpress) * (1. - uChapter));
}`,EM=Re(TM,"fragmentShader"),bM=`precision highp float;

attribute float aType;
attribute vec3 aPosition;

varying vec2 vUv;
varying float vIsLine;
varying float vLife;

uniform float uTime;
uniform vec3 uHoverPosition;

#include <common>

void main() {
	vIsLine = step(0., aType) * (1. - step(1., aType));
	vLife = smoothstep(20., 0., length(uHoverPosition - aPosition));

	vec3 offset = aPosition;

	float seed = rand(aPosition.xy);

	vec4 mvPosition = modelViewMatrix * vec4(offset, 1.0);

	vec3 pos = position;

	const float translateY = 6.;
	pos.y += -3. + vLife * translateY;

	vec3 direction = (uHoverPosition - aPosition);
	const float tiltFactor = -0.015;
	pos.x += (direction.x * tiltFactor + seed * .2) * pos.y;
	pos.z += (direction.z * tiltFactor + seed * .2) * pos.y;

	float t = uTime * (.5 + vIsLine * .5);
	pos.y += sin(offset.x * .1 + t * 2. + seed * 5.) * .5 + .5 * (.2 + (1. - vIsLine) * 5.);
	pos.x += sin(t + seed * 10.) * (1. - vIsLine);

	mvPosition.xyz += pos;
	gl_Position = projectionMatrix * mvPosition;

	vUv = uv;
}`,wM=Re(bM,"vertexShader");class Uh extends ot{constructor(e={}){super(e),wM.use(this),EM.use(this)}}const DM=`uniform sampler2D tDiffuse, tMouse, tNoiseNormal, tNoise;
uniform float uTime, uChapter, uTransition;
uniform vec2 uResolution;
uniform vec3 uTransitionColor;

varying vec4 vReflectUv;
varying vec2 vUv;
varying vec3 vViewPosition, vNormal;

mat3 getTangentFrame(const in vec3 eyePos, const in vec3 surfaceNormal, const in vec2 uv) {
	vec3 posDx = dFdx(eyePos);
	vec3 posDy = dFdy(eyePos);

	vec2 uvDx = dFdx(uv);
	vec2 uvDy = dFdy(uv);

	uvDx = max(uvDx, vec2(1e-2));
	uvDy = max(uvDy, vec2(1e-2));

	uvDx = min(uvDx, vec2(1.));
	uvDy = min(uvDy, vec2(1.));

	vec3 N = surfaceNormal;

	vec3 q1perp = cross(posDy, N);
	vec3 q0perp = cross(N, posDx);

		
	vec3 T = q1perp * uvDx.x + q0perp * uvDy.x;
	vec3 B = q1perp * uvDx.y + q0perp * uvDy.y;

	float det = max(dot(T, T), dot(B, B));
	float scale = (det == 0.0) ? 0.0 : inversesqrt(det);

	return mat3(T * scale, B * scale, N);
}
vec2 rotateUV(vec2 uv, float rotation) {
	vec2 mid = vec2(.5);
	return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}

void main() {

	float time = uTime * .03;
	float roughness = .1;
	float mouse = clamp(texture2D(tMouse, gl_FragCoord.xy / uResolution).r, 0., 1.);

	vec3 color = vec3(.42, .8, 1.);

	color *= .6 + .5 * smoothstep(-.0, .4, length(vUv - .5));

	vec3 normal = vNormal;
	
	
	

	vec2 dUv = rotateUV(vUv, .4);
	dUv += (.05 + .05 * (mouse - .5)) * texture2D(tNoise, 6. * vUv + vec2(-.5, .2) * time).rg;
	mat3 tbn = getTangentFrame(-vViewPosition, normal, dUv);

	vec3 nTex = texture2D(tNoiseNormal, 3. * dUv + uTime * .02).rgb * 2. - 1.;
	nTex += texture2D(tNoiseNormal, 5. * dUv - uTime * .017).rgb * 2. - 1.;
	nTex.xy *= 1. + .1 * mouse;
	normal = normalize(tbn * nTex);

	vec4 reflectUv = vReflectUv;
	reflectUv.rgb += normal;

	vec4 reflexion = texture2DProj(tDiffuse, reflectUv);
	reflexion.rgb *= 1. + 2.2 * smoothstep(0.7, 0., length(reflexion.rgb));

	vec3 lightPos = vec3(10., 10., 0.);
	vec3 lightDir = normalize(lightPos - vViewPosition);
	vec3 viewDir = normalize(-vViewPosition);
	vec3 halfwayDir = normalize(lightDir + viewDir);
	float spec = pow(max(dot(normal, halfwayDir), 0.0), 1. - roughness);

	vec3 specular = (reflexion.rgb + .6) * spec;
	color = mix(color, reflexion.rgb, .5 * spec + .78);
	
	color += specular;
	

	color = mix(color, uTransitionColor, smoothstep(0., 0.5, uTransition));

	float alpha = 1.;
	alpha *= smoothstep(1. , 0.8, uTransition);
	
	gl_FragColor = vec4(color, alpha);		
}`,AM=Re(DM,"fragmentShader"),CM=`uniform mat4 textureMatrix;
uniform float uTime;

varying vec4 vReflectUv;
varying vec2 vUv;
varying vec3 vViewPosition, vNormal;

void main() {
	vec3 transformed = position;
	
	vReflectUv = textureMatrix * vec4( transformed, 1.0 );
	vUv = uv;

	vNormal = normalMatrix * normal;
	vec4 mvPosition = modelMatrix * vec4(transformed, 1.);
	mvPosition = viewMatrix * mvPosition;
    vViewPosition = -mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;
}`,RM=Re(CM,"vertexShader");class Lh extends ot{constructor(){super(),this.transparent=!0,this.depthTest=!1,this.uniforms={uTime:X.uTime,uResolution:ut.uResolution,uChapter:X.uChapter,uTransition:X.uTransition,uTransitionColor:X.uTransitionColor,tDiffuse:{value:null},textureMatrix:{value:null},tNoiseNormal:{value:E.core.assetsManager.get("noiseNormal")},tNoise:{value:E.core.assetsManager.get("noise")},tMouse:{value:E.webgl.mouseComputation?.texture}},RM.use(this),AM.use(this)}}const PM=`precision highp float;

uniform float uTime;
uniform float uFade;
uniform vec3 uColor;

varying vec2 vUv;

float createLine(vec2 lineUv, float lineWidth, float amplitude, float offset, float innerSmoothness, float outerSmoothness) {
    float t = uTime;
    float halfLineWidth = lineWidth * .5;

    lineUv.x += sin(lineUv.y * 2. + uTime * .1 + offset * 34.5) * amplitude;
    lineUv.x += sin(lineUv.y + t + cos(lineUv.y * 10. + t * 2. + offset * 123.5) * 2. + +offset * 678.5) * amplitude;
    lineUv.x -= offset;

    float absUvX = abs(lineUv.x - .5);
    float line = smoothstep(halfLineWidth + innerSmoothness, halfLineWidth - innerSmoothness, absUvX) + smoothstep(halfLineWidth + outerSmoothness, halfLineWidth - outerSmoothness, absUvX) * 2.;
    line *= smoothstep(-.9, -.2, sin(lineUv.y * 4. + offset * 10. + .4 * uTime * (1. + 10. * offset)));
    return line;
}

void main() {
    float depth = gl_FragCoord.z / gl_FragCoord.w / 120.;

    float edgeFade = smoothstep(1., .6, abs(vUv.y * 2. - 1.));
    float isLine = step(.5, vUv.x);

    vec2 lineUv = vec2(vUv.x * 2. - 1., vUv.y);
    float lines = createLine(lineUv, .001, .04, .1, .01, .1);
    lines += createLine(lineUv, .002, .01, .2, .03, .1) * .7;
    lines += createLine(lineUv, .0015, .02, -.1, .02, .1) * .8;
    lines *= edgeFade;
    lines *= isLine;

    vec2 glowUv = vec2(vUv.x * 2., vUv.y);
    float glow = createLine(glowUv, .0, .04, .1, .5, 1.) * .1;
    glow += createLine(glowUv, .0, .01, .2, .5, 1.) * .2;
    glow += createLine(glowUv, .0, .02, -.1, .5, 1.) * .3;
    glow *= .65;

    glow *= edgeFade;
    glow *= (1. - isLine);
    glow *= smoothstep(.5, .4, abs(glowUv.x - .5));

    vec3 color = uColor * (glow + lines);
    gl_FragColor = vec4(color, glow + lines) * smoothstep(.6, .0, depth) * uFade;
}`,UM=Re(PM,"fragmentShader"),LM=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
}`,NM=Re(LM,"vertexShader");let IM=class extends ot{constructor(){super({uniforms:{uTime:X.uTime,uColor:{value:new ce("#84d5ff")},uFade:{value:0}},transparent:!0}),NM.use(this),UM.use(this),E.debug?.mapping.add(this,"Line",1)}};const FM=`precision highp float;

uniform sampler2D tMap;
uniform sampler2D tLabel;
varying vec2 vUv;

void main() {
	vec4 map = texture2D(tMap, vec2(1. - vUv.x, vUv.y));
	float label = smoothstep(.5, 1., length(texture2D(tLabel, 1. - vUv)));
	gl_FragColor = mix(map, 1. - map, label);
}`,OM=Re(FM,"fragmentShader"),BM=`precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,kM=Re(BM,"vertexShader");class VM extends vo{constructor(e,t){super({uniforms:{tMap:{value:e},tLabel:{value:t}},side:2}),kM.use(this),OM.use(this)}}const zM=`precision highp float;

uniform sampler2D tMap;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
	vec4 map = texture2D(tMap, vec2(vUv.x, 1. - vUv.y));
	map.rgb *= .05 + .6 * smoothstep(.2, .9, map.rgb); 
	map.rgb *= smoothstep(30., 15., vPosition.y);
	gl_FragColor = map;
}`,HM=Re(zM,"fragmentShader"),GM=`precision highp float;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
	vUv = uv;
	vPosition = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,WM=Re(GM,"vertexShader");class Nh extends ot{constructor(e){super({uniforms:{tMap:{value:e}}}),WM.use(this),HM.use(this)}}const XM=`precision highp float;

uniform vec3 uColor;

uniform sampler2D tMap;
varying vec2 vMapUv;

uniform sampler2D tMap2;
varying vec2 vMap2Uv;

uniform float uMetalness;
uniform float uRoughness;

uniform sampler2D tArmMap;
varying vec2 vArmMapUv;

uniform vec3 uAmbient;
uniform float uAmbientIntensity;

uniform sampler2D tNormalMap;
varying vec2 vNormalMapUv;
uniform vec2 uNormalScale;

#ifdef SIXTY_ENVMAP
uniform sampler2D tEnvMap;
uniform mat3 uEnvMapRotation;
uniform float uEnvMapIntensity;
#endif

varying vec2 vUv;

uniform mat3 normalMatrix;
varying vec3 vNormal;
varying vec3 vWorldPosition, vViewPosition;

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535

#ifndef saturate
	#define saturate(a) clamp(a, 0.0, 1.0)
#endif

struct ReflectedLight {
	vec3 directDiffuse; 
	vec3 directSpecular; 
	vec3 indirectDiffuse; 
	vec3 indirectSpecular; 
};

struct PBRMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
};

#ifdef SIXTY_ENVMAP
	vec3 inverseTransformDirection(vec3 dir, mat4 matrix) {
		return normalize((vec4(dir, 0.0) * matrix).xyz);
	}
	
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace(vec3 direction) {
		vec3 absDirection = abs(direction);
		float face = - 1.0;
		if (absDirection.x > absDirection.z) {
			if (absDirection.x > absDirection.y)
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if (absDirection.z > absDirection.y)
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}

		return face;

	}

	vec2 getUV(vec3 direction, float face) {
		vec2 uv;
		if (face == 0.0) {
			uv = vec2(direction.z, direction.y) / abs(direction.x);
		} else if (face == 1.0) {
			uv = vec2(- direction.x, - direction.z) / abs(direction.y);
		} else if (face == 2.0) {
			uv = vec2(- direction.x, direction.y) / abs(direction.z);
		} else if (face == 3.0) {
			uv = vec2(- direction.z, direction.y) / abs(direction.x);
		} else if (face == 4.0) {
			uv = vec2(- direction.x, direction.z) / abs(direction.y);
		} else {
			uv = vec2(direction.x, direction.y) / abs(direction.z);
		}
		return 0.5 * (uv + 1.0);
	}

	vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
		float face = getFace(direction);

		float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
		mipInt = max(mipInt, cubeUV_minMipLevel);
		float faceSize = exp2(mipInt);
		highp vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
		if (face > 2.0) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		return texture2D(envMap, uv).rgb;
	}

	#define cubeUV_r0 1.0
	#define cubeUV_m0 -2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 -1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip(float roughness) {
		float mip = 0.0;

		if (roughness >= cubeUV_r1) {
			mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
		} else if (roughness >= cubeUV_r4) {
			mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
		} else if (roughness >= cubeUV_r5) {
			mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
		} else if (roughness >= cubeUV_r6) {
			mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2(1.16 * roughness);		
		}

		return mip;
	}

	vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
		float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
		float mipF = fract(mip);
		float mipInt = floor(mip);
		vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
		if((mipF == 0.0)) {
			return vec4(color0, 1.0);
		} else {
			vec3 color1 = bilinearCubeUV(envMap, sampleDir, (mipInt + 1.0));
			return vec4(mix(color0, color1, mipF), 1.0);
		}
	}

	vec3 getIBLIrradiance(const in vec3 normal, const in sampler2D envMap, const in float envMapIntensity, const in mat3 envMapRotation) {
    	vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
		vec4 envMapColor = textureCubeUV(envMap, envMapRotation * worldNormal, 1.0);
		return PI * envMapColor.rgb * envMapIntensity;

	}

	vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness, const in sampler2D envMap, const in float envMapIntensity, const in mat3 envMapRotation) {
		vec3 reflectVec = reflect(- viewDir, normal);
		reflectVec = normalize(mix(reflectVec, normal, roughness * roughness));
		reflectVec = inverseTransformDirection(reflectVec, viewMatrix);
		vec4 envMapColor = textureCubeUV(envMap, envMapRotation * reflectVec, roughness);

		return envMapColor.rgb * envMapIntensity;
	}

#endif
vec3 getAmbientLightIrradiance(vec3 ambientLightColor) {
    vec3 irradiance = ambientLightColor;
    return irradiance;
}

vec3 BRDF_Lambert(const in vec3 diffuseColor) {
	return RECIPROCAL_PI * diffuseColor;
}

void RE_IndirectDiffuse(const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in PBRMaterial pbrMaterial, inout ReflectedLight reflectedLight) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(pbrMaterial.diffuseColor);
}

vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate(dot(normal, viewDir));
	const vec4 c0 = vec4(- 1, - 0.0275, - 0.572, 0.022);
	const vec4 c1 = vec4(1, 0.0425, 1.04, - 0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(- 9.28 * dotNV)) * r.x + r.y;
	vec2 fab = vec2(- 1.04, 1.04) * a004 + r.zw;
	return fab;
}

void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
	vec2 fab = DFGApprox(normal, viewDir, roughness);
	vec3 Fr = specularColor;
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + (1.0 - Fr) * 0.047619;	vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);

	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}

void RE_IndirectSpecular(const in vec3 radiance, const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in PBRMaterial pbrMaterial, inout ReflectedLight reflectedLight) {
	vec3 singleScattering = vec3(0.);
	vec3 multiScattering = vec3(0.);

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	
	computeMultiscattering(geometryNormal, geometryViewDir, pbrMaterial.specularColor, pbrMaterial.specularF90, pbrMaterial.roughness, singleScattering, multiScattering);
	
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = pbrMaterial.diffuseColor * (1. - max(max(totalScattering.r, totalScattering.g), totalScattering.b));
	
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}

float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness) {
	return saturate(pow(dotNV + ambientOcclusion, exp2(- 16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
}

mat3 getTangentFrame(const in vec3 eyePos, const in vec3 surfaceNormal, const in vec2 uv) {
	vec3 posDx = dFdx(eyePos);
	vec3 posDy = dFdy(eyePos);

	vec2 uvDx = dFdx(uv);
	vec2 uvDy = dFdy(uv);

	uvDx = max(uvDx, vec2(1e-2));
	uvDy = max(uvDy, vec2(1e-2));

	uvDx = min(uvDx, vec2(1.));
	uvDy = min(uvDy, vec2(1.));

	vec3 N = surfaceNormal;

	vec3 q1perp = cross(posDy, N);
	vec3 q0perp = cross(N, posDx);

		
	vec3 T = q1perp * uvDx.x + q0perp * uvDy.x;
	vec3 B = q1perp * uvDx.y + q0perp * uvDy.y;

	float det = max(dot(T, T), dot(B, B));
	float scale = (det == 0.0) ? 0.0 : inversesqrt(det);

	return mat3(T * scale, B * scale, N);
}
#define SIXTY_UNIFORMS_AREA

vec2 rotateUV(vec2 uv, vec2 mid, float rotation) {

	return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}
uniform vec2 uResolution;
uniform vec3 uLightColor, uDarkColor, uTransitionColor, uCapitalFog;
uniform float uTransition, uTransitionDirection, uChapter, uPage, uFogNear, uFogFar, uTime;
uniform sampler2D tMixMap, tRandom, tNoise, tNoiseNormal, tPerlin, tVoronoi, tMouse, tRockNormal;

varying vec3 vPosition;

float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
	return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
	return (near * far) / ((far - near) * invClipZ - far);
}
float computeDepth(float fragCoordZ, float near, float far) {
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, near, far);
	return viewZToOrthographicDepth(viewZ, near, far);
}
vec3 hueShift(vec3 color, float hue) {
	vec3 k = vec3(0.57735, 0.57735, 0.57735);
	float cosAngle = cos(hue);
	return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

vec2 dHdxy_fwd(sampler2D textureSampler, vec2 uv, float strength) {
	vec2 dSTdx = dFdx(vUv);
	vec2 dSTdy = dFdy(vUv);

	float Hll = strength * texture2D(textureSampler, uv).r;
	float dBx = strength * texture2D(textureSampler, uv + dSTdx).r - Hll;
	float dBy = strength * texture2D(textureSampler, uv + dSTdy).r - Hll;

	return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
	vec3 vSigmaX = dFdx(surf_pos.xyz);
	vec3 vSigmaY = dFdy(surf_pos.xyz);
	vec3 vN = surf_norm;
	vec3 R1 = cross(vSigmaY, vN);
	vec3 R2 = cross(vN, vSigmaX);
	float fDet = dot(vSigmaX, R1);
	vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
	return normalize(abs(fDet) * surf_norm - vGrad);
}
vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

float createGrid(vec2 uv, float gridSize, vec2 uvDeriv, float lineWidth, float intensity) {
	vec2 targetWidth = vec2(lineWidth);
	vec2 drawWidth = clamp(vec2(targetWidth), uvDeriv, vec2(0.5));
	vec2 lineAA = uvDeriv * 1.5;

	vec2 gridUV = abs(fract(uv * gridSize + 0.5) * 2.0 - 1.0);
	vec2 grid2 = smoothstep(drawWidth + lineAA + .1, drawWidth - lineAA - .1, gridUV);

	
	vec2 diagUV = rotateUV(uv, vec2(0.), PI / 4.);
	diagUV = abs(fract(diagUV * gridSize / sqrt(2.) + 0.5) * 2.0 - 1.0);
	vec2 gridDiag = smoothstep(drawWidth + lineAA + .1, drawWidth - lineAA - .1, diagUV);

	grid2 *= saturate(targetWidth / drawWidth) * intensity;
	grid2 = mix(grid2, targetWidth, saturate(uvDeriv * 2.0 - 1.0));

	float grid = mix(grid2.x, 1.0, grid2.y);
	float diagonal = gridDiag.y * intensity;

	return max(grid, diagonal);
}

void main() {
	vec2 sUv = gl_FragCoord.xy / uResolution;

	float homepage = 1. - step(0.5, uPage);
	float trading = step(0.5, uPage) * (1. - step(1.5, uPage));
	float capital = step(1.5, uPage) * (1. - step(2.5, uPage));
	float maritime = step(2.5, uPage) * (1. - step(3.5, uPage));
	float fortEnergy = step(3.5, uPage);
	float transition = uTransition;

	transition = uTransition;
	
	float transDir = uTransitionDirection;
	

	
	float transitionSize = (.03 - 0.01 * capital - .01 * (trading)) * 2.;
	float pixelNoise = texture2D(tRandom, vUv * (2. + capital + 2. * trading + homepage)).r;
	pixelNoise *= texture2D(tRandom, vUv * (3. + capital +  2. * trading + homepage) + .5 + .01 * uTime).r;
	pixelNoise -= 1.;
	float mountainHeight = smoothstep(0., 400., length(vPosition - vec3(-20., 65., 3.4)));
	
	float basicNoise = texture2D(tNoise, vUv).r;
	mountainHeight -= .3 * (basicNoise - .5) * smoothstep(1., 0.9, transition) * smoothstep(0., 0.1, transition);
	mountainHeight += .015* pixelNoise;
	float transitionWave = smoothstep(1. - 2. * transitionSize, 1., transition + 1.8 * mountainHeight);
	
	transitionWave = mix(transitionWave, 1., smoothstep(0.99, 1., transition));
	transitionWave = mix(transitionWave, 0., smoothstep(0.01, 0., transition));

	float fadeTransition = mix(smoothstep(0., .2, transition), smoothstep(0.09, .1, transition * .13 + .2 * mountainHeight), fortEnergy);
	transitionWave = mix(fadeTransition, transitionWave, transDir);

	vec2 smallNoise = texture2D(tNoise, vUv * 45.).rg - .5;
	vec2 bigNoise = texture2D(tNoise, vUv * 5.).rg - .5;
	vec4 mouseSample = texture2D(tMouse, sUv + 0.1 * bigNoise * (1. - .8 * trading));
	float mouse = clamp(mouseSample.r, 0., 1.);

	vec4 diffuseColor = vec4(uColor, 1.);

	vec2 dMapUv = vMapUv;
	vec3 normal = normalize(vNormal);

	vec4 baseColorMapSample = vec4(.98, .98, 1., 1.);
	if(uPage > 2.5) {
		baseColorMapSample = texture2D(tMap, dMapUv);
	}

	vec4 secondColorMapSample = texture2D(tMap2, vMap2Uv);

	secondColorMapSample.rgb = mix(secondColorMapSample.rgb, mix(vec3(0.36, 0.47, 0.52), vec3(1.), secondColorMapSample.r), homepage);

	vec4 mixMapSample = texture2D(tMixMap, vec2(vUv.x, 1. - vUv.y) + 0.002 * smallNoise);

			/* HOMEPAGE & TRADING */
	vec4 hoTraSample = mix(1.3 * secondColorMapSample, baseColorMapSample, mixMapSample.r);

			/** CAPITAL **/
	vec4 capitalSample = mix(secondColorMapSample * .6, baseColorMapSample, mixMapSample.r);

	capitalSample.rgb = hueShift(capitalSample.rgb, 0.2 + 1.8 * (texture2D(tNoise, vUv * 2.2).r - .5));
	capitalSample.rgb *= 1. + .3 * smoothstep(.4, .6, texture2D(tNoise, vUv * 2.9).r);

	vec3 lilGrass = texture2D(tMap2, vUv * 8.).rgb;
	float lilFactor = smoothstep(.7, 1., texture2D(tPerlin, vUv * 5.).r);
	capitalSample.rgb = mix(capitalSample.rgb, lilGrass, lilFactor);
	vec4 moss = capitalSample * 0.6;
	vec4 flowers = vec4(1., 0.21, 0.05, 1.);
	flowers.rgb = hueShift(flowers.rgb, -5. * bigNoise.r);
	moss = mix(moss, flowers, smoothstep(0.24, 0.3, texture2D(tVoronoi, vUv * 6. + bigNoise).r) * smoothstep(0.2, 0.55 - .1 * mouse, texture2D(tVoronoi, vUv * 120.).r));
	float mossZone = mixMapSample.r + max(0., mouse);
	mossZone += smoothstep(-10., -25., vPosition.y + .1 * vPosition.z + 10. * bigNoise.r);
	capitalSample = mix(capitalSample, moss, clamp(mossZone, 0., 1.));
	float bottom = smoothstep(-18., -35., vPosition.y + .1 * vPosition.z + 10. * bigNoise.r);
	capitalSample.rgb = hueShift(capitalSample.rgb, -.5 * bottom);
	capitalSample *= 1. - .8 * bottom;
	
	capitalSample.rgb *= .5 + .8 * texture2D(tNoise, vec2(16., 1.) * vUv).r * smoothstep(.3, .5, texture2D(tNoise, 2. * vUv).r);
	capitalSample.rgb = adjustSaturation(capitalSample.rgb, 1.1);

		/** MARITIME **/
	float mixMaritime = smoothstep(-.5, .8, normal.r);
	
	vec4 maritimeSample = mix(vec4(adjustSaturation(baseColorMapSample.rgb, 2.), 1.), secondColorMapSample * vec4(.8, .7, .8, 1.), mixMaritime);
	maritimeSample.rgb *= 0.1 + .9 * smoothstep(-22., -15., vPosition.y + smallNoise.r * 5.);

	/* Maritime splashes */
	vec3 totalEmissiveRadiance = vec3(0.);
	if(maritime == 1.) {
		float splashZone = smoothstep(-23.8, -20.2, vPosition.y);
		float splasher = vPosition.z + vPosition.x;
		float splash = sin(0.4 * splasher + uTime) * sin(splasher + .1 * uTime) * smoothstep(-1., 1., sin(splasher * 0.3 + 2. * uTime));

		splash = smoothstep(-2., 1., splash);
		maritimeSample += smoothstep(-22.9 + 1.5 * splash, -23.8 + .8 * splash, vPosition.y + 2. * (texture2D(tNoise, vUv * 30. + .05 * uTime).r - .5));

		float foamFog = vPosition.y + 10. * texture2D(tNoise, 2. * vUv - .005 * uTime).r;
		foamFog = smoothstep(-14.2, -23.8, foamFog);
		totalEmissiveRadiance += .3 * foamFog;

		totalEmissiveRadiance += smoothstep(0.5, 0.1, splashZone) * (1. - transitionWave);
	}

	baseColorMapSample = mix(baseColorMapSample, hoTraSample, homepage + trading);
	baseColorMapSample = mix(baseColorMapSample, capitalSample, capital);
	baseColorMapSample = mix(baseColorMapSample, maritimeSample, maritime);

	diffuseColor *= baseColorMapSample;

	
	vec4 armSample = vec4(1);

	armSample = texture2D(tArmMap, vec2(vArmMapUv.x, 1. - vArmMapUv.y) + 0.005 * (texture2D(tNoise, vUv * 80.).rg - .5));
	vec3 capitalLightmap = armSample.rgb;
	
	capitalLightmap = mix(vec3(0.2, .2, 0.1), vec3(.97, .8, 0.5), capitalLightmap.r);
	capitalLightmap *= 1. + 2.8 * smoothstep(0.6, 1., armSample.rgb) * capital;
	

	armSample *= 3. - 2. * maritime;
	armSample += smoothstep(0.2, 0.7, armSample) * (.3 + 2.5 * maritime);

	vec3 homepageLightmap = mix(vec3(0.36, 0.47, 0.52), vec3(1.), smoothstep(0.2, .9, armSample.r));

	vec3 tradingLight = mix(vec3(1., .5, 0.2), vec3(0.35, 0.34, 0.5), smoothstep(40., 20., vPosition.y));
	vec3 tradingLightmap = armSample.rgb;
	tradingLightmap *= mix(vec3(0.05, .18, .25) * .5, tradingLight, smoothstep(.2, 1.1, armSample.r));

	armSample.rgb = mix(armSample.rgb, homepageLightmap, homepage);
	armSample.rgb = mix(armSample.rgb, capitalLightmap, capital);
	armSample.rgb = mix(armSample.rgb, tradingLightmap, trading);

	float roughness = clamp(uRoughness, 0.04, 1.0);
	float metallic = clamp(uMetalness, 0.04, 1.0);

	vec3 nonPerturbatedNormal = vNormal;

	vec3 transitionNormal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(tPerlin, vUv * 10., 5.));

		/* Rock Normal */
	mat3 tbn2 = getTangentFrame(-vViewPosition, normal, vNormalMapUv);
	vec3 nTex2 = texture2D(tRockNormal, vNormalMapUv * 30.).rgb * 2. - 1.;
	nTex2.xy *= mix((2. + (4. * trading)) * (1. - mixMapSample.r * (homepage + trading)), 0.3 + .4 * mouse, capital);
	normal = normalize(tbn2 * nTex2);

	#define SIXTY_NORMALMAP_AREA
	vec3 perturbedNormal = normal;
		/* Windy snow */
	vec2 windUv = vUv;
	windUv = rotateUV(windUv, vec2(1., 7.), 2.7 + .3 * trading);
	windUv *= vec2(1., 7.);
	
	vec3 windySnow = texture2D(tPerlin, windUv + vec2(0.03 * uTime, 0.)).rgb;
	windySnow = smoothstep(.5, 1., windySnow);
	windySnow *= mix(1., mixMapSample.r, trading);
	float snowCloud = texture2D(tNoise, vec2(.8, .3) * windUv + vec2(0.02 * uTime, -0.02 * uTime)).r;
	windySnow *= .2 * mouse + smoothstep(.45, 1., snowCloud); 
	diffuseColor.rgb += 1.1 * windySnow * (1. - transitionWave) * (1. - step(1.5, uPage));

	if(uPage < 1.5) {
		perturbedNormal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(tPerlin, vUv * 10., 2. * smoothstep(.7, .4, snowCloud)));
		if(trading == 1.) {
			perturbedNormal = perturbNormalArb(-vViewPosition, perturbedNormal, dHdxy_fwd(tPerlin, vec2(4., 12.) * vUv, 9. * (1. - mixMapSample.r)));
		}
	} else {
		perturbedNormal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(tMap2, vUv * 15., 3.5 * (1. - capital * mixMapSample.r)));
		if(maritime == 1.) {
			perturbedNormal = perturbNormalArb(-vViewPosition, perturbedNormal, dHdxy_fwd(tPerlin, vec2(1.) * vMapUv, 20.));
		}
	}

	normal = mix(perturbedNormal, transitionNormal, transitionWave);

	diffuseColor.rgb *= armSample.rgb; /* Lightmap */

	/* Transition */
	vec3 transitionColor = texture2D(tPerlin, vUv * 3.).rgb * 1.;
	transitionColor *= clamp(length(normal.rg), 0.5, 1.);
	
	diffuseColor.rgb = mix(diffuseColor.rgb, transitionColor, transitionWave);
	roughness = mix(roughness, 1., transitionWave);

	#define SIXTY_NORMAL_AREA

	ReflectedLight reflectedLight = ReflectedLight(vec3(0.), vec3(0.), vec3(0.), vec3(0.));

	PBRMaterial pbrMaterial = PBRMaterial(vec3(0.), 0., vec3(0.), 0.);
	pbrMaterial.diffuseColor = diffuseColor.rgb * (1. - metallic);

	vec3 dxy = max(abs(dFdx(nonPerturbatedNormal)), abs(dFdy(nonPerturbatedNormal)));
	float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);

	pbrMaterial.roughness = max(roughness, 0.0525);
	pbrMaterial.roughness += geometryRoughness;
	pbrMaterial.roughness = min(pbrMaterial.roughness, 1.0);

	pbrMaterial.specularColor = mix(vec3(0.04), diffuseColor.xyz, metallic);
	pbrMaterial.specularF90 = 1.;

	#define SIXTY_PBR_AREA

	vec3 geometryPosition = -vViewPosition;
	vec3 geometryNormal = normal;
	vec3 geometryViewDir = normalize(vViewPosition);

	vec3 ambientLightColor = uAmbient * uAmbientIntensity;
	ambientLightColor = mix(ambientLightColor, vec3(.3), transitionWave);
	

	vec3 iblIrradiance = vec3(0.);
	vec3 radiance = vec3(0.);
	vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);

	#ifdef SIXTY_ENVMAP
	float envMapIntensity = mix(uEnvMapIntensity, .5, transitionWave);

	mat3 envMapRotation = (uEnvMapRotation * (1.0 - transitionWave)) + (mat3(1.) * transitionWave);
	iblIrradiance += getIBLIrradiance(geometryNormal, tEnvMap, envMapIntensity, envMapRotation);
	radiance += getIBLRadiance(geometryViewDir, geometryNormal, pbrMaterial.roughness, tEnvMap, envMapIntensity, envMapRotation);

		
	RE_IndirectDiffuse(irradiance, geometryPosition, geometryNormal, geometryViewDir, pbrMaterial, reflectedLight);
	RE_IndirectSpecular(radiance, iblIrradiance, geometryPosition, geometryNormal, geometryViewDir, pbrMaterial, reflectedLight);

	float occlusion = (armSample.r - 1.) * (1. - transitionWave) + 1.;
		

	float dotNV = saturate(dot(geometryNormal, geometryViewDir));
	reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, occlusion, pbrMaterial.roughness);

	#endif

	/* Transition wave emissive */
	vec3 waveColor = mix(vec3(0.2, .4, 1.), vec3(0.5, 0.85, .85), smoothstep(.2, .7, texture2D(tNoise, vUv * 3. + .04 * uTime).r));
	waveColor = hueShift(waveColor, .2 * sin(vPosition.z * .1 + uTime));
	waveColor *= .8 + .4 * smoothstep(0.3, .9, basicNoise);
	waveColor = mix(waveColor, transitionColor, smoothstep(0., 0.5, pixelNoise + 1.));
	
	totalEmissiveRadiance += transDir * waveColor * clamp(transitionWave - smoothstep(1. - transitionSize, 1., transition + 1.8 * mountainHeight), 0., 1.);
	

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	vec3 outgoingLight = totalDiffuse + totalSpecular;

	/* Capital color correction */
	if(capital == 1.) {
		vec3 capitalOLight = outgoingLight;
		float capitalNoise = texture2D(tNoise, 0.002 * (vWorldPosition.zy * vec2(1., 2.) + 2. * uTime)).r - .5;
		capitalOLight = mix(capitalOLight, mix(uLightColor, uDarkColor, 0.7), .1 * smoothstep(10., 40., vWorldPosition.y + 10. * capitalNoise));

		float capitalFog = smoothstep(0.2, 0.8, texture2D(tNoise, 0.001 * vec2(1., 3.) * vWorldPosition.zy - .001 * uTime).r);
		capitalFog *= smoothstep(0., -40., vWorldPosition.y + 40. * capitalNoise);

		float stretchedUv = smoothstep(0.1, 0., length(vUv - vec2(.03, .65)));
		capitalOLight = mix(capitalOLight, .1 * vec3(.25, 0.3, 0.03), .7 * stretchedUv);

		capitalOLight = mix(capitalOLight, uCapitalFog, .5 * capitalFog);

		outgoingLight = mix(capitalOLight, outgoingLight, transitionWave);

	}

	/* Desaturate transition color */
	outgoingLight = adjustSaturation(outgoingLight, 1. - transitionWave);
	outgoingLight += totalEmissiveRadiance;

	float depth = computeDepth(gl_FragCoord.z, uFogNear, uFogFar);
	depth = smoothstep(0.01, .3, depth);
	depth *= 1. - transition;
	outgoingLight = mix(outgoingLight, uLightColor, depth);

	float tradingFog = .2 * smoothstep(15., -20., vPosition.y) * trading;
	outgoingLight = mix(outgoingLight, vec3(0., 0.4, .9), .2 * tradingFog);

	/* Mouse wireframe effect Trading */
	float strictTrading = max(0., trading - transition);
	float gridSize = 300.;
	float lineWidth = .03;

	vec4 uvDDXY = vec4(dFdx(sUv), dFdy(sUv));
	vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));

	float grid = createGrid(vUv, 300., uvDeriv, lineWidth * .01, 1.);
	grid = max(grid, createGrid(vUv, 600., uvDeriv, lineWidth, .2));

	vec3 tradingMouse = clamp(outgoingLight + vec3(.01, .01, .02) * 1.3 + .1 * grid, 0., 1.);

	outgoingLight = mix(outgoingLight, tradingMouse, mouseSample.b * strictTrading * (.4 + .6 * mixMapSample.r) * smoothstep(.2, .1, length(vUv - vec2(.67, .4))));

	
	outgoingLight *= (1. - strictTrading * min(1., uChapter));

	

	float alpha = mix(1., smoothstep(302., 301.5, vViewPosition.z), fortEnergy); /* backsides */
	alpha *= mix(1. - fortEnergy, 1., transitionWave);
	alpha *= 1. - smoothstep(.3, .45, length(vUv - .5)) * fortEnergy * smoothstep(.6, 0.2, uTransition);

	alpha *= smoothstep(2.5, 2.3, uChapter);
	outgoingLight *= alpha;
	
	

	
	gl_FragColor = vec4(outgoingLight, clamp(alpha, 0., 1.));

	#ifdef TONE_MAPPING
	gl_FragColor.rgb = toneMapping(gl_FragColor.rgb);
	#endif

	gl_FragColor = linearToOutputTexel(gl_FragColor);

	#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
	#endif

	#ifdef DITHERING
	gl_FragColor.rgb = dithering(gl_FragColor.rgb);
	#endif

	#define SIXTY_END_AREA

	#define DEBUG_NONE 0
#define DEBUG_UV 1
#define DEBUG_UV1 2
#define DEBUG_UV2 3
#define DEBUG_UV3 4
#define DEBUG_NORMAL_TEXTURE 5
#define DEBUG_NORMAL_SHADING 6
#define DEBUG_NORMAL_GEOMETRY 7
#define DEBUG_TANGENT 8
#define DEBUG_BITANGENT 9
#define DEBUG_ALPHA 10
#define DEBUG_OCCLUSION 11
#define DEBUG_EMISSIVE 12
#define DEBUG_METALLIC 13
#define DEBUG_ROUGHNESS 14
#define DEBUG_BASE_COLOR 15
#define DEBUG_RADIANCE 16
#define DEBUG_IBL_IRRADIANCE 17

#ifdef DEBUG
    #if DEBUG && DEBUG != DEBUG_NONE
        gl_FragColor.a = 1.;
    #endif

    #if DEBUG == DEBUG_UV && defined(USE_UV)
        gl_FragColor.rgb = vec3(vUv, 0);
    #endif

    #if DEBUG == DEBUG_UV1 && defined(USE_UV1)
        gl_FragColor.rgb = vec3(vUv1, 0);
    #endif

    #if DEBUG == DEBUG_UV2 && defined(USE_UV2)
        gl_FragColor.rgb = vec3(vUv2, 0);
    #endif

    #if DEBUG == DEBUG_UV3 && defined(USE_UV3)

        gl_FragColor.rgb = vec3(vUv3, 0);
    #endif

    #if DEBUG == DEBUG_NORMAL_TEXTURE && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = vec3(nTex + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_NORMAL_SHADING
        gl_FragColor.rgb = vec3(normal + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_NORMAL_GEOMETRY
        gl_FragColor.rgb = vec3(geometryNormal + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_TANGENT && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = (tbn[0] + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_BITANGENT && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = (tbn[1] + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_ALPHA
        gl_FragColor.rgb = vec3(diffuseColor.a);
    #endif

    #if DEBUG == DEBUG_OCCLUSION && defined(SIXTY_AO_MAP)
        gl_FragColor.rgb = vec3(occlusion);
    #endif

    #if DEBUG == DEBUG_EMISSIVE
        gl_FragColor = linearToOutputTexel(vec4(totalEmissiveRadiance, 1.));
    #endif

    #if DEBUG == DEBUG_METALLIC
        gl_FragColor.rgb = vec3(metallic);
    #endif

    #if DEBUG == DEBUG_ROUGHNESS
        gl_FragColor.rgb = vec3(roughness);
    #endif

    #if DEBUG == DEBUG_BASE_COLOR
        gl_FragColor.rgb = diffuseColor.rgb;
    #endif

    #if DEBUG == DEBUG_RADIANCE
        gl_FragColor.rgb = radiance;
    #endif

    #if DEBUG == DEBUG_IBL_IRRADIANCE
        gl_FragColor.rgb = iblIrradiance;
    #endif
#endif
}`,YM=Re(XM,"fragmentShader"),qM=`#ifdef USE_UV
	varying vec2 vUv;
#endif

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec3 vPosition;

uniform mat3 uMapTransform;
varying vec2 vMapUv;

uniform mat3 uMap2Transform;
varying vec2 vMap2Uv;

uniform mat3 uArmMapTransform;
varying vec2 vArmMapUv;

#ifdef SIXTY_AOMAP
	uniform mat3 uAoMapTransform;
	varying vec2 vAoMapUv;
#endif

#ifdef SIXTY_EMISSIVEMAP
	uniform mat3 uEmissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif

uniform mat3 uNormalMapTransform;
varying vec2 vNormalMapUv;

#define SIXTY_UNIFORMS_AREA

void main() {
	#define SIXTY_START_AREA

	#ifdef USE_UV
		vUv = uv;
	#endif

	vMapUv = (uMapTransform * vec3(SIXTY_MAP_UV, 1.)).xy;

	
    #ifdef SIXTY_MAP2
		vMap2Uv = (uMap2Transform * vec3(SIXTY_MAP2_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_ARMMAP
		vArmMapUv = (uArmMapTransform * vec3(SIXTY_ARMMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_AOMAP
		vAoMapUv = (uAoMapTransform * vec3(SIXTY_AOMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_EMISSIVEMAP
		vEmissiveMapUv = (uEmissiveMapTransform * vec3(SIXTY_EMISSIVEMAP_UV, 1.)).xy;
	#endif

	
	vNormalMapUv = (uNormalMapTransform * vec3(SIXTY_NORMALMAP_UV, 1.)).xy;

	vec3 objectNormal = normal;
	vec3 transformedNormal = objectNormal;

	#ifdef USE_INSTANCING
		mat3 im = mat3(instanceMatrix);
		transformedNormal /= vec3(dot(im[0],im[0]), dot(im[1],im[1]), dot(im[2],im[2]));
		transformedNormal = im * transformedNormal;
	#endif
	
	transformedNormal = normalMatrix * transformedNormal;

	vNormal = normalize(transformedNormal);

	vec3 transformed = position; 
	#define SIXTY_TRANSFORMED_AREA
    vPosition = transformed;

	vec4 mvPosition = vec4(transformed, 1.);
	
	#ifdef USE_INSTANCING
		#define SIXTY_INSTANCING_START_AREA
		
		mvPosition = instanceMatrix * mvPosition;
	#endif

	mvPosition = modelMatrix * mvPosition;

	vWorldPosition = mvPosition.xyz;

	mvPosition = viewMatrix * mvPosition;
    vViewPosition = -mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;

	#define SIXTY_END_AREA

	#define DEBUG_NONE 0
#define DEBUG_UV 1
#define DEBUG_UV1 2
#define DEBUG_UV2 3
#define DEBUG_UV3 4
#define DEBUG_NORMAL_TEXTURE 5
#define DEBUG_NORMAL_SHADING 6
#define DEBUG_NORMAL_GEOMETRY 7
#define DEBUG_TANGENT 8
#define DEBUG_BITANGENT 9
#define DEBUG_ALPHA 10
#define DEBUG_OCCLUSION 11
#define DEBUG_EMISSIVE 12
#define DEBUG_METALLIC 13
#define DEBUG_ROUGHNESS 14
#define DEBUG_BASE_COLOR 15
#define DEBUG_RADIANCE 16
#define DEBUG_IBL_IRRADIANCE 17

#ifdef DEBUG
    #if DEBUG == DEBUG_UV1 && defined(USE_UV1)
        vUv1 = uv1;
    #endif

    #if DEBUG == DEBUG_UV2 && defined(USE_UV2)
        vUv2 = uv2;
    #endif

    #if DEBUG == DEBUG_UV3 && defined(USE_UV3)
        vUv3 = uv3;
    #endif
#endif
}`,jM=Re(qM,"vertexShader");class $M extends sn{constructor(e,t){super(e,t,{roughness:1,normalScale:new me(1,1),map2:null,mixMap:null,fogNear:.001,fogFar:100},sn.CONFIG_TYPES_MAPPING,[...sn.PROPS_WITH_UV,"map2"]),this.blending=Du,this.uniforms.tRockNormal={value:E.core.assetsManager.get("rockNormal")},this.uniforms.tRockNormal.value.wrapS=this.uniforms.tRockNormal.value.wrapT=mt,this.uniforms.uResolution=ut.uResolution,this.uniforms.uTransition=X.uTransition,this.uniforms.uHeroTransition=X.uHeroTransition,this.uniforms.uTransitionDirection=X.uTransitionDirection,this.uniforms.uChapter=X.uChapter,this.uniforms.uPage=X.uPage,this.uniforms.uTime=X.uTime,this.uniforms.uTransitionColor=X.uTransitionColor,this.uniforms.uDarkColor=X.uDarkColor,this.uniforms.uLightColor=X.uLightColor,this.uniforms.uCapitalFog=X.uCapitalFog,this.uniforms.tNoise={value:E.core.assetsManager.get("noise")},this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,this.uniforms.tRandom={value:E.tools.noise.nearestTexture},this.uniforms.tRandom.value.wrapS=this.uniforms.tRandom.value.wrapT=mt,this.uniforms.tPerlin={value:E.core.assetsManager.get("perlinNoise")},this.uniforms.tPerlin.value.wrapS=this.uniforms.tPerlin.value.wrapT=mt,this.uniforms.tNoiseNormal={value:E.core.assetsManager.get("noiseNormal")},this.uniforms.tNoiseNormal.value.wrapS=this.uniforms.tNoiseNormal.value.wrapT=mt,this.uniforms.tVoronoi={value:E.core.assetsManager.get("voronoi")},this.uniforms.tVoronoi.value.wrapS=this.uniforms.tVoronoi.value.wrapT=mt,this.defines.SIXTY_MAP_UV="uv",this.defines.SIXTY_NORMALMAP_UV="uv",this.defines.SIXTY_ARMMAP_UV="uv",E.state.on(he.ATTACH,this.#e),YM.use(this),jM.use(this)}#e=()=>{this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture}};applyConfig(e){this.params={...this.params,...e},this.applyParams(sn.filterProps(this.params,Object.keys(this.defaultsParams))),this.mapTransform.repeat.copy(e.mapTransformRepeat),this.mapTransform.offset.copy(e.mapTransformOffset),this.mapTransform.rotation=e.mapTransformRotation,this.mapTransform.update(),this.map2Transform.repeat.copy(e.map2TransformRepeat),this.map2Transform.offset.copy(e.map2TransformOffset),this.map2Transform.rotation=e.map2TransformRotation,this.map2Transform.update()}}const KM=`varying vec2 vUv;

void main() {
	vUv = uv;

	gl_Position = vec4(position, 1.0);
}`,ZM=Re(KM,"vertexShader"),JM=`precision highp float;

uniform float uTime;
uniform vec2 uMouse, uMouseVelocity;
uniform sampler2D tNoise;

uniform sampler2D tLast;

varying vec2 vUv;

const float propagationFactor = .15;
const float remananceFactor = 0.99;
const float velocityFactor = .005;

void main() {
    vec2 uv = vUv;
    vec2 mouseUv = (uMouse * .5) + .5;
    vec2 velocityOffset = uMouseVelocity * velocityFactor;

    float distFromMouse = length(uv - mouseUv);

    float circle = smoothstep(.05, 0., distFromMouse);
    float smoothcircle = smoothstep(.1, 0., distFromMouse);
    float smoothercircle = smoothstep(.15, 0., distFromMouse);

    float noise = texture2D(tNoise, uv * .5 + uTime * .01).r * 2. - 1.;

    vec4 remanance = vec4(0.);

    remanance += texture2D(tLast, vUv + vec2(noise * propagationFactor, 0.) - velocityOffset) * .25;
    remanance += texture2D(tLast, vUv + vec2(-noise * propagationFactor, 0.) - velocityOffset) * .25;
    remanance += texture2D(tLast, vUv + vec2(0., noise * propagationFactor) - velocityOffset) * .25;
    remanance += texture2D(tLast, vUv + vec2(0., -noise * propagationFactor) - velocityOffset) * .25;
    remanance.b *= .99;

    vec4 color = vec4(0.);
    color.r = 1. * circle;
    color.g = .4 * smoothcircle;
    color.b = .07 * smoothercircle;

    color += remanance * remananceFactor;

    color.a = 1.;

    gl_FragColor = color;
}`,QM=Re(JM,"fragmentShader");class Ih extends ot{constructor(e={}){super(e),ZM.use(this),QM.use(this)}}const eS=`precision highp float;

uniform vec3 uColor;
uniform float uOpacity, uTransition, uPage, uChapter;

varying float vOpacity;

void main() {

	float homepage = 1. - step(0.5, uPage);
	float trading = step(0.5, uPage) * (1. - step(1.5, uPage));
	float transition = smoothstep(0., .5, uTransition);

	vec2 uv = ( vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	vec3 color = uColor;

	float alpha =  smoothstep(0.5, 0., length(uv - 0.5)) * vOpacity * uOpacity;
	alpha *= mix(smoothstep(1., .8, uChapter), smoothstep(4.2, 4.3, uChapter), homepage);
	alpha *= 1. - transition;
	

	gl_FragColor = vec4(color, alpha);
}`,tS=Re(eS,"fragmentShader"),nS=`precision highp float;

attribute vec3 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;

uniform float uChapter, uPage, uSize, uDpr, uTime;

#define PI 3.1415
varying float vOpacity;

void main() {

	vec3 pos = position;
	float t = 5. + uTime * .025;
	float seed = (position.x + position.y + position.z) * 20.;
	float seedNormalize = abs(sin(seed));

	float theta2 = (sin(position.y + t) + 1.) * PI + t;

	
	

	pos += vec3(cos(pos.x + t * 5. + theta2) * (pos.y * 3. + sin(seed * 36. + t) * 10.) * .05, sin(pos.z + t * 2. + theta2), sin(pos.x + t * 5. + theta2) * (pos.y * 3. + sin(seed * 36. + t) * 10.) * .2) * .5;

	
	float chapter = smoothstep(4.1, 5., uChapter) * 1. - step(0.5, uPage);
	pos.xz += 40. * (-.2 + .2 * chapter);

	vOpacity = seedNormalize;
	float size = uSize * uDpr * vOpacity;

	gl_PointSize = clamp(size * (30.0 / length(modelMatrix * vec4(pos, 1.))), size * 1.5, size * 5.);
	

	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,iS=Re(nS,"vertexShader");class Fh extends vo{constructor(e,t){super({uniforms:{uPage:X.uPage,uTransition:X.uTransition,uDpr:ut.uDPR,uResolution:ut.uResolution,uChapter:X.uChapter,uColor:{value:e},uTime:X.uTime,uSize:{value:t},uOpacity:{value:.4}},transparent:!0,blending:Ti,depthWrite:!1,forceSinglePass:!0}),iS.use(this),tS.use(this)}}const sS=`precision highp float;

uniform sampler2D tNoise;
uniform vec3 uDarkColor, uLightColor;
uniform vec2 uResolution;
uniform float uTime, uTransition, uTransitionDirection;
uniform float uChapter;

varying vec2 vUv;
varying float vSeed;

void main() {
	vec2 sUv = gl_FragCoord.xy / uResolution;
	float center = abs(vUv.x - .5);

	float tail = smoothstep(0.5, .0, vUv.y);
	float intensity = smoothstep(.05 - .025 * tail, 0., center);
	intensity += .3 * smoothstep(.5 - .4 * tail, 0., center);

	float speed = 1. + 2. * (texture2D(tNoise, vec2(vSeed, 0.)).r - .5);
	float head = fract(2. * vUv.y - uTime * .2 * speed);

	intensity *= smoothstep(1., .98, head);
	intensity *= smoothstep(0., .5, head);

	intensity *= smoothstep(1., .7, vUv.y);

	intensity *= 1. - tail;

	float brightness = .2 + .4 * smoothstep(.7, .98, head);

	intensity *= 1. + 1. * smoothstep(.25, .4, vUv.y) * smoothstep(.6, .5, vUv.y);
	vec3 color = uLightColor * clamp(brightness + intensity, 0., 1.5);

	float textShadow = smoothstep(0.2, 0., abs(sUv.y - .5));
	color *= 1. - .5 * textShadow; 

	float alpha = intensity;
	alpha *= smoothstep(.3, 0., uTransition + .1 * vUv.y);
	alpha *= smoothstep(1., 0., uChapter);

	
	
	
	

	gl_FragColor = vec4(color, alpha);
}`,rS=Re(sS,"fragmentShader"),oS=`precision highp float;

varying vec2 vUv;
varying float vSeed;

void main() {
	vUv = uv;
	vec3 transformed = position;

	vec4 mvPosition =  vec4(transformed, 1.0);

	mvPosition = instanceMatrix * mvPosition;

	vSeed = instanceMatrix[1][0] + instanceMatrix[0][0];
	gl_Position = projectionMatrix * modelViewMatrix * mvPosition;

	}`,aS=Re(oS,"vertexShader");class lS extends ot{constructor(e,t){super({uniforms:{uResolution:ut.uResolution,uTime:X.uTime,uTransition:X.uTransition,uTransitionDirection:X.uTransitionDirection,uChapter:X.uChapter,uLightColor:{value:new ce(10605311)},tNoise:{value:E.core.assetsManager.get("noise")}},side:nn,transparent:!0,blending:Ti,depthTest:!1}),aS.use(this),rS.use(this)}}const cS=`precision highp float;

varying vec2 vUv, vRealUv;
varying vec4 vReflectUv;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform float uTime, uTransition, uChapter;
uniform vec2 uResolution;
uniform vec3 uLightColor, uTransitionColor, uWaterColor;
uniform sampler2D tDiffuse, tNoiseNormal, tMap, tPerlin, tNoise, tMouse;

#define PI 3.1415926536
#define PI2 6.28318530718

vec2 dHdxy_fwd(sampler2D textureSampler, float scale, vec2 uv) {
  vec2 dSTdx = dFdx(vUv);
  vec2 dSTdy = dFdy(vUv);

  float Hll = scale * texture2D(textureSampler, uv).r;
  float dBx = scale * texture2D(textureSampler, uv + dSTdx).r - Hll;
  float dBy = scale * texture2D(textureSampler, uv + dSTdy).r - Hll;

  return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
  vec3 vSigmaX = dFdx(surf_pos.xyz);
  vec3 vSigmaY = dFdy(surf_pos.xyz);
  vec3 vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN);
  vec3 R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1);
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}
mat3 getTangentFrame(const in vec3 eyePos, const in vec3 surfaceNormal, const in vec2 uv) {
  vec3 posDx = dFdx(eyePos);
  vec3 posDy = dFdy(eyePos);

  vec2 uvDx = dFdx(uv);
  vec2 uvDy = dFdy(uv);

  uvDx = max(uvDx, vec2(1e-2));
  uvDy = max(uvDy, vec2(1e-2));

  uvDx = min(uvDx, vec2(1.));
  uvDy = min(uvDy, vec2(1.));

  vec3 N = surfaceNormal;

  vec3 q1perp = cross(posDy, N);
  vec3 q0perp = cross(N, posDx);

		
  vec3 T = q1perp * uvDx.x + q0perp * uvDy.x;
  vec3 B = q1perp * uvDx.y + q0perp * uvDy.y;

  float det = max(dot(T, T), dot(B, B));
  float scale = (det == 0.0) ? 0.0 : inversesqrt(det);

  return mat3(T * scale, B * scale, N);
}
float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
  return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
  return (near * far) / ((far - near) * invClipZ - far);
}
float computeDepth(float fragCoordZ, float near, float far) {
  float viewZ = perspectiveDepthToViewZ(fragCoordZ, near, far);
  return viewZToOrthographicDepth(viewZ, near, far);
}

vec3 adjustSaturation(vec3 color, float saturation) {
  return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

vec3 color = vec3(.5);

float speed = 1.;
float large_waveheight = 2.; 
float small_waveheight = 1.; 

float water(vec2 pos, vec2 diff) {
  float height = 0.;
  float time = 1. * uTime * speed;

  float wave;
  wave += sin(.15 * pos.x + diff.x + time) * large_waveheight;
  wave += sin(.04 * pos.y + diff.y - .1 * pos.x + diff.x + .6 * time) * large_waveheight;
  wave += sin(.1 * pos.x + diff.x - 0.2 * pos.y + diff.y - time) * 1.2 * large_waveheight;
  wave += sin(-.2 * pos.x + diff.x + .05 * pos.y + diff.y + time) * .9 * large_waveheight;

  
  

  wave += sin(1.3 * pos.x + diff.x - 2.4 * (pos.y + diff.y) + 1.2 * wave - 5. * time) * .1 * small_waveheight;
  wave += sin(1.1 * pos.x + diff.x - 1.8 * pos.y + diff.y - .9 * wave - 3. * time) * .025 * small_waveheight;

  height += wave;

  return height;
}
vec3 hueShift(vec3 color, float hue) {
  vec3 k = vec3(0.57735, 0.57735, 0.57735);
  float cosAngle = cos(hue);
  return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

#ifndef saturate
	#define saturate(a) clamp(a, 0.0, 1.0)
#endif

void main() {

  vec2 sUv = gl_FragCoord.xy / uResolution;
  float mouse = clamp(texture2D(tMouse, sUv + .12 * (texture2D(tNoise, vUv).rg - .5)).r, 0., 1.);

  vec3 color = uWaterColor;

  vec2 pos = vWorldPosition.xz;
  pos += mouse * 1.;

   
  
  
  float height = water(pos, vec2(0.));

  
  
  vec3 normal = vec3(0., 1., 0.); 

  vec2 uvCenter = vec2(.16, .05);
  vec2 dUv = (vUv - uvCenter) * (1.1 + .8 * uChapter) + uvCenter;
  float noise = 1.4 * (texture2D(tNoise, dUv * vec2(20., 10.) + .001 * uTime).r - .5);
 
  mat3 tbn = getTangentFrame(-(vViewPosition + vec3(0., height, 0.)), normal, vUv);

  vec3 nTex = (1. -texture2D(tNoiseNormal, 5. * dUv + .02 * normal.rg - uTime * .02).rgb) * 2. - 1.;
  nTex.xy *= -0.5;
  nTex += vec3(0.3) * ((1. - texture2D(tNoiseNormal, 8. * dUv + .05 * mouse + .04 * normal.rg + uTime * .01).rgb) * 2. - 1.);
  normal = normalize(tbn * nTex);

  vec3 nTex2 = (1. - texture2D(tNoiseNormal, 42. * dUv  + 0.1 * noise + .2 * normal.rg - uTime * .05).rgb) * 2. - 1.;
  mat3 tbn2 = getTangentFrame(-vViewPosition, normal, vUv);
  nTex2 += (1. - texture2D(tNoiseNormal, 28. * dUv +  0.05 * noise + .05 * mouse + .04 * normal.rg + uTime * .035).rgb) * 2. - 1.;
  nTex2.xy *= -.5;
  normal = normalize(tbn2 * nTex2);

  vec3 nTex3 = (texture2D(tNoiseNormal, 147. * dUv  + .2 * normal.rg - uTime * .25).rgb * 2. - 1.);
  mat3 tbn3 = getTangentFrame(-vViewPosition, normal, vUv);
  nTex3 += (texture2D(tNoiseNormal, 99. * dUv + .05 * mouse + .04 * normal.rg + uTime * .015).rgb * 2. - 1.);
  nTex3.xy *= .1;
  normal = normalize(tbn3 * nTex3);

  normal.y *= 1. - .5 * mouse;

  normal = normalize(normal);

  vec3 reflexion = texture2DProj(tDiffuse, vReflectUv + .8 * vec4(normal + .2 * mouse, 1.)).rgb;

  reflexion = linearToOutputTexel(vec4(reflexion, 1.)).rgb;
  reflexion += .5 * smoothstep(.5, 1., length(reflexion)) * smoothstep(1., .7, length(reflexion));
  reflexion -= .2 * smoothstep(0.9, 0., length(reflexion)); /* Darken reflexion to make it more obvious */

  vec3 lightPos = vec3(200., 20., 100.);

  vec3 lightDir = normalize(lightPos - vWorldPosition);
  vec3 viewDir = normalize(-vViewPosition);
  vec3 halfwayDir = normalize(lightDir + viewDir);
  float trans = pow(max(dot(-normal, halfwayDir), 0.0), 0.5 + uChapter);
  float spec = pow(max(dot(normal, halfwayDir), 0.), 0.8 + uChapter);

  color *= 1. - .5 * uChapter;
  color *= .8 + .4 * smoothstep(-20., 20., height);

  color -= .1 * trans;
  color *= 1. - .5 * trans;
  
  reflexion *= mix(vec3(1.), vec3(0.2, .95 - .2 * uChapter, 1.), .5 * smoothstep(0.8, 0., spec) * smoothstep(.5, 0., abs(sUv.x - .5))); /* Tint reflexion */
  color = mix(color * (.8 + .2 * reflexion), reflexion, 0.2 * spec + .08); 

  float waver = texture2D(tMap, vec2(vUv.x, 1. - vUv.y) + 0.04 * (length(normal.rb) - .06)).r;
  float waveFoam = .8 * (sin(waver * 10. + 2. * sin(.7 * uTime)) + 1.) * smoothstep(0., 0.1, waver);

  float waveFoamer = length(vUv + .5 * normal.xz - .5);
  waveFoam += .8 * smoothstep(.6, .2, waveFoamer);
  color += .35 * waveFoam;
  color += .5 * waver;

  float foamer = smoothstep(.35, 0.25, length(vUv - vec2(.5, .6) + .03 * normal.rg + .2 * (texture2D(tNoise, vUv * 2. - .01 * uTime).r )));
  color = mix(color, vec3(1.), (.5) * foamer);

  color = adjustSaturation(color, (1.2 - .0 * spec));
  color = hueShift(color, -.3 * smoothstep(0.45, .0, .001 * (vWorldPosition.z - vWorldPosition.x)));

  color = mix(uLightColor, color, smoothstep(.3, 0., uTransition - length(vUv - .5)));
  float alpha = smoothstep(.6, 0.1, uTransition - length(vUv - .5)) * smoothstep(1.7, 1.3, uChapter);

  
  alpha *= smoothstep(0., .1, vRealUv.x) * smoothstep(1., .9, vRealUv.x);
  alpha *= smoothstep(0., .1, vRealUv.y) * smoothstep(1., .9, vRealUv.y);
  vec4 finalColor = vec4(color, alpha);

  float depth = computeDepth(gl_FragCoord.z, 0.1, 30.);
  depth = smoothstep(0.01, 0.7, depth);
  finalColor.rgb = mix(finalColor.rgb, uLightColor, depth);
  
  

  gl_FragColor = finalColor;
}`,uS=Re(cS,"fragmentShader"),hS=`uniform mat4 textureMatrix;

varying vec2 vUv, vRealUv;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec4 vReflectUv;

void main() {
    vUv = (uv - .5) * 1.5 + .5;
    vRealUv = uv;

    vec4 mvPosition = modelMatrix * vec4(position, 1.);
    vWorldPosition = mvPosition.xyz;
    mvPosition = viewMatrix * mvPosition;
    vViewPosition = -mvPosition.xyz;

    vReflectUv = textureMatrix * vec4( position, 1.0 );

	  gl_Position = projectionMatrix * mvPosition;
}`,dS=Re(hS,"vertexShader");class fS extends ot{constructor(e,t){super(),this.uniforms.uWaterColor={value:new ce("#045984")},this.uniforms.tMap={value:e.map},this.uniforms.tNoiseNormal={value:E.core.assetsManager.get("waterNormal")},this.uniforms.tNoiseNormal.value.wrapS=this.uniforms.tNoiseNormal.value.wrapT=mt,this.uniforms.uTransition=X.uTransition,this.uniforms.uChapter=X.uChapter,this.uniforms.uResolution=ut.uResolution,this.uniforms.uTime=X.uTime,this.uniforms.uTransitionColor=X.uTransitionColor,this.uniforms.uLightColor=X.uLightColor,this.uniforms.tNoise={value:E.core.assetsManager.get("noise")},this.uniforms.tPerlin={value:E.tools.noise.texture},this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture},this.transparent=!0,uS.use(this),dS.use(this)}}const pS=`/// #replace #define SIXTY_UNIFORMS_AREA
#define SIXTY_UNIFORMS_AREA

uniform vec3 uLightColor, uTransitionColor;
uniform sampler2D tNoise, tPerlin;
uniform float uTransition, uFogNear, uFogFar, uTime;
varying vec3 vWorldPosition;

float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
	return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
	return (near * far) / ((far - near) * invClipZ - far);
}
float computeDepth(float fragCoordZ, float near, float far) {
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, near, far);
	return viewZToOrthographicDepth(viewZ, near, far);
}

vec2 dHdxy_fwd(sampler2D textureSampler, vec2 uv) {
	vec2 dSTdx = dFdx(vUv);
	vec2 dSTdy = dFdy(vUv);

	float Hll = 1. * texture2D(textureSampler, uv).r;
	float dBx = 1. * texture2D(textureSampler, uv + dSTdx).r - Hll;
	float dBy = 1. * texture2D(textureSampler, uv + dSTdy).r - Hll;

	return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
	vec3 vSigmaX = dFdx(surf_pos.xyz);
	vec3 vSigmaY = dFdy(surf_pos.xyz);
	vec3 vN = surf_norm;
	vec3 R1 = cross(vSigmaY, vN);
	vec3 R2 = cross(vN, vSigmaX);
	float fDet = dot(vSigmaX, R1);
	vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
	return normalize(abs(fDet) * surf_norm - vGrad);
}

/// #replace #define SIXTY_NORMAL_AREA
#define SIXTY_NORMAL_AREA

normal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(tNoise, 6. * vUv));

float wet = smoothstep(-24., -25.2, vWorldPosition.y + .3 * texture2D(tNoise, vUv * 5.).r);
roughness = mix(roughness, 0.2, wet);
diffuseColor.rgb *= 5. * (1. - wet);

float splashZone = smoothstep( -26.5, -24.8, vWorldPosition.y);
float splasher = vWorldPosition.z + vWorldPosition.x;
float splash = sin(0.4 * splasher + uTime) * sin(splasher + .1 * uTime) * smoothstep(-1., 1., sin(splasher * 0.3 + 2. * uTime));

splash = smoothstep(-2., 1., splash);
diffuseColor.rgb += smoothstep(-26.5 + 1.5 * splash, -26.8 + .8 * splash, vWorldPosition.y + 2. * (texture2D(tNoise, vUv * 8. + .05 * uTime).r - .5));

/// #replace vec3 totalEmissiveRadiance = uEmissive;
vec3 totalEmissiveRadiance = uEmissive;

totalEmissiveRadiance += smoothstep(0.7, 0.2, splashZone);

/// #replace gl_FragColor = vec4(outgoingLight, diffuseColor.a);

float depth = computeDepth(gl_FragCoord.z, uFogNear, uFogFar);
depth = smoothstep(0.01, .15, depth);

gl_FragColor = vec4(outgoingLight, diffuseColor.a);

/// #replace gl_FragColor = linearToOutputTexel(gl_FragColor);
gl_FragColor = linearToOutputTexel(gl_FragColor);

gl_FragColor.rgb = mix(gl_FragColor.rgb, uLightColor, depth);
gl_FragColor.a = mix(gl_FragColor.a, 0., smoothstep(0.3, .7, uTransition));`,mS=ws(pS,"fragmentShader"),gS=`/// #replace #define SIXTY_UNIFORMS_AREA
#define SIXTY_UNIFORMS_AREA

varying vec3 vWorldPosition;

/// #replace mvPosition = modelViewMatrix * mvPosition;
mvPosition = modelMatrix * mvPosition;
vWorldPosition = mvPosition.xyz;
mvPosition = viewMatrix * mvPosition;`,vS=ws(gS,"vertexShader");class _S extends sn{constructor(e,t){e.normalMap=E.core.assetsManager.get("rockNormal"),super(e,t),this.uniforms.uFogNear=E.webgl.mainScene.mountains.mountainMaterial.uniforms.uFogNear,this.uniforms.uFogFar=E.webgl.mainScene.mountains.mountainMaterial.uniforms.uFogFar,this.normalMapTransform.repeat.set(10,10),this.normalMapTransform.update(),this.transparent=!0,this.uniforms.tPerlin={value:E.core.assetsManager.get("perlinNoise")},this.uniforms.tPerlin.value.wrapS=this.uniforms.tPerlin.value.wrapT=mt,this.uniforms.tNoise={value:E.core.assetsManager.get("noise")},this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,this.uniforms.uTime=X.uTime,this.uniforms.uTransition=X.uTransition,this.uniforms.uTransitionColor=X.uTransitionColor,this.uniforms.uLightColor=X.uLightColor,mS.use(this),vS.use(this)}}const xS=`precision highp float;

uniform sampler2D tNoise, tNearestNoise, tMouse;
uniform vec3 uTransitionColor, uLightColor, uDarkColor;
uniform vec2 uResolution;
uniform float uTime, uPage, uTransition, uTransitionDirection, uChapter, uScrollProgress;

varying vec2 vUv;

vec2 rotateUV(vec2 uv, vec2 mid, float rotation) {
	return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}

#include <common>

void main() {
	vec2 dUv = vUv;
	vec2 sUv = gl_FragCoord.xy / uResolution;
	dUv.x += 0.01 * uTime;

	float whoWeAre = 1. - step(-0.5, uPage);
	float homepage = step(-0.5, uPage) * (1. - step(0.5, uPage));
	float trading = step(0.5, uPage) * (1. - step(1.5, uPage));
	float capital = step(1.5, uPage) * (1. - step(2.5, uPage));
	float maritime = step(2.5, uPage) * (1. - step(3.5, uPage));
	float fortEnergy = step(3.5, uPage) * (1. - step(4.5, uPage));

	vec2 aUv = vUv + vec2(-0.004 * uTime, 0.002 * uTime);
	float noise = texture2D(tNoise, dUv).r * texture2D(tNoise, aUv).r;

	vec2 dsUv = sUv + 0.5 * (noise - .25);

	float value = length(dsUv - .5) * sUv.y;

	float simpleClouds = texture2D(tNoise, vUv * 2. + vec2(-0.001 * uTime, 0.)).g;

	value = 1. - value;
	value += 0.5 * simpleClouds;

	vec2 ditheredUv = vUv + 0.002 * (rand(gl_FragCoord.xy) - .5);
	float ditheredValue = smoothstep(.2 - trading * .08, 0., length(ditheredUv - vec2(.34, .2)));
	value = mix(value, ditheredValue, trading);

	float energyValue = smoothstep(.15, .25, ditheredUv.y + 0.002 * (rand(gl_FragCoord.xy) - .5) + .03 - .1 * abs(sUv.x - .5));
	energyValue *= smoothstep(.26, .25, vUv.y);
	
	
	vec2 feUv = vUv;
	feUv.y *= 2. + .8 * pow2(abs(sUv.x - .5));
	feUv.x *= 1. + .2 * (sUv.x - .5);
	feUv *= 1. + .08 * (texture2D(tNoise, 2. * vUv + vec2(0., .007 * uTime)).r - .5);
	float feClouds = texture2D(tNoise, feUv + .2).r;
	feClouds = smoothstep(0.55, 0., feClouds);
	energyValue += feClouds;
	energyValue = min(energyValue, 1.);

	value = mix(value, energyValue, fortEnergy);

	vec3 color = mix(uDarkColor, uLightColor + .08 * homepage, clamp(value, 0., 1.));

	/* Trading lines behind mountain */
	float lines = texture2D(tNoise, vUv * vec2(8., .1) + vec2(.0, .01 * uTime)).r * .85;
	lines = smoothstep(.5 - .15 * value, .8, lines);
	lines *= smoothstep(0.5, 1., value);
	

	vec2 uv = vUv * vec2(6., -8.);
	float basic2Noise = texture2D(tNoise, uv * 2.5 * vec2(2., 1.)).r;
	float mouse = clamp(texture2D(tMouse, sUv + 0.1 * vec2(basic2Noise)).r, 0., 1.);
	
	/* Fort energy stars */

	if (fortEnergy == 1.){
		vec2 starsUv = fract(vUv * 150.); /* First layers of stars */
		vec2 starsUniqUv = floor(vUv * 150.) / 150.;
		vec3 uniqNoise = texture2D(tNearestNoise, starsUniqUv).rgb;
		float starMaker = length(starsUv - .5 + 0.4 * vec2(uniqNoise.rg - .5));
		float stars = smoothstep(.05, 0., starMaker);
		stars += .1 * smoothstep(.15, 0., starMaker); /* Glow */
		stars *= smoothstep(.7, 1., uniqNoise.b);

		starsUv = fract(vUv * 200.); /* Second layers of stars */
		starsUniqUv = floor(vUv * 200.) / 200.;
		uniqNoise = texture2D(tNearestNoise, starsUniqUv + .5).rgb;
		starMaker = length(starsUv - .5 + 0.4 * vec2(uniqNoise.rg - .5));
		float stars2 = smoothstep(.05, 0., starMaker);
		stars2 += .1 * smoothstep(.1, 0., starMaker); /* Glow */
		stars2 *= smoothstep(.7, 1., uniqNoise.b);
		
		starsUv = fract(vUv * 230.); /* Third layers of stars */
		starsUniqUv = floor(vUv * 230.) / 230.;
		uniqNoise = texture2D(tNearestNoise, starsUniqUv + .1).rgb;
		starMaker = length(starsUv - .5 + 0.4 * vec2(uniqNoise.rg - .5));
		float stars3 = smoothstep(.05, 0., starMaker);
		stars3 += .1 * smoothstep(.1, 0., starMaker); /* Glow */
		stars3 *= smoothstep(.7, 1., uniqNoise.b);

		stars += stars2;
		stars += .8 * stars3;

		stars *= smoothstep(.25, .15, vUv.y);
		stars *= smoothstep(.2, 0., feClouds);
		stars *= .8 + mouse;
		color += stars * (.4 + uLightColor) * fortEnergy;

		color = mix(color, vec3(0.), smoothstep(.5, 1., uChapter));

	}

	

	color += lines * uLightColor * vec3(.3, .7, .5) * trading;

	
	
	float transition = smoothstep(0., 0.2, uTransition);
	color = mix(color, uTransitionColor, transition);

	/* Clouds background for transition */

	float count = 4.;

	vec2 fUv = uv + vec2(0.005 * uTime, 0.) + .01 * mouse;
	vec2 cUv = vec2(uv.x, uv.y * (count)) + .01 * mouse;
	cUv.y -= 2.;
	float offset = 1.5 * (smoothstep(0.7 + .2 * texture2D(tNoise, uv * 4.).r, 1., fract(cUv.y)) + floor(cUv.y));

	float cloudShape = (-.01 * abs(sin(uv.x * 50. + offset)) - 0.03 * abs(sin(uv.x * 15. + offset)) - 0.02 * abs(sin(fUv.x * 17. + offset))) * count;
	cUv.y += cloudShape;

	cUv *= 1. + .3 * (texture2D(tNoise, fUv * .3).rg - .5);
	cUv.y += 1. * (texture2D(tNoise, fUv * .4).r - .5);
	cUv.y -= .05 * count * texture2D(tNoise, fUv * 4.).r;

	float cloudRows = fract(cUv.y);
	cloudRows += smoothstep(0.5, 0., cloudRows);

	vec2 sCUv = uv + vec2(.01 * uTime) + .2 * texture2D(tNoise, uv * 1.).r + .05 * vec2(basic2Noise) + .01 * mouse;
	float smallCloudsNoise = texture2D(tNoise, sCUv * 0.1).r;
	float offsetSmallCloudsNoise = texture2D(tNoise, sCUv * 0.1 + vec2(0., -.01)).r;
	vec2 smallClouds = vec2(smoothstep(.5, .62, offsetSmallCloudsNoise), smoothstep(.46, .5, smallCloudsNoise));

	float clouds = mix(cloudRows, smallClouds.r, smallClouds.g);
	clouds = clamp(clouds, 0., 1.);

	vec3 darkColor = vec3(0.737, 0.773, 0.8) * (1. + .13 * whoWeAre);
	vec3 cloudySkyColor = mix(darkColor, vec3(0.961, 0.969, 0.976), clouds);

	color = mix(color, cloudySkyColor, .5 * clamp(.3 * homepage + transition, 0., 1.));
	color = mix(color, cloudySkyColor, whoWeAre);

	/* Homepage chapters background */
	if(homepage == 1.) {
		vec3 seaColor = vec3(0.31, 0.373, 0.427);
		vec3 globeSky = vec3(0.0196, 0.0745, 0.1098);

		color = mix(color, seaColor, smoothstep(2.5, 2.7, uChapter + dUv.y + 0.1 * noise));
		color = mix(color, globeSky, smoothstep(4., 4.1, uChapter));
		color = mix(color, vec3(.11, 0.22, 0.26), smoothstep(4.2, 4.3, uChapter));
	} else if(trading == 1.) {
		color *= 1. - (min(1., uChapter));
	}
	
	
	gl_FragColor = vec4(color, 1.);

	
}`,yS=Re(xS,"fragmentShader"),MS=`precision highp float;

uniform float uPage, uScrollProgress;
varying vec3 vPosition;
varying vec2 vUv;

void main() {
	float whoWeAre = 1. - step(-0.5, uPage);

	vec2 wWAUv = fract(.5 * uv + vec2(0., .01 * uScrollProgress));

	vUv = mix(uv, wWAUv, whoWeAre);
	vPosition = position;
	 vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.);
  gl_Position = projectionMatrix * mvPosition;
  gl_Position.z = gl_Position.w;
}`,SS=Re(MS,"vertexShader");class TS extends ot{constructor(e,t){super(),this.caller=t,this.uniforms={uLightColor:X.uLightColor,uDarkColor:X.uDarkColor,uTransitionColor:X.uTransitionColor,uScrollProgress:X.uScrollProgress,uChapter:X.uChapter,uTransition:X.uTransition,uTransitionDirection:X.uTransitionDirection,uTime:X.uTime,uPage:X.uPage,uResolution:ut.uResolution,tNoise:{value:E.core?.assetsManager.get("noise")},tNearestNoise:{value:E.tools.noise.nearestTexture}},this.uniforms.tNoise.value.wrapS=this.uniforms.tNoise.value.wrapT=mt,this.caller.frustumCulled=!1,this.caller.renderOrder=-10,E.state.on(he.ATTACH,this.onAttach),SS.use(this),yS.use(this),E.debug?.mapping.add(this,"Sky",1)}onAttach=()=>{this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture}};onBeforeRender=(e,t,n)=>{this.caller.matrixWorld.copyPosition(n.matrixWorld)}}const ES=`precision highp float;

varying vec2 vUv;

uniform vec3 uTransitionColor;
uniform sampler2D tNoise, tMouse;
uniform float uTime, uLongpress, uTransition, uRatio, uCameraProgress;

#define PI 3.141592653589793

#include <common>

void main() {
	float longpress = max(uTransition, uLongpress);
	float fortEnergy = smoothstep(3., 4., uCameraProgress);
	vec2 resizedUv = vec2(vUv.x * uRatio, vUv.y);
	float mouse = texture2D(tMouse, vUv + .1 * (texture2D(tNoise, resizedUv * 2.).rg - .5)).g;
	vec2 camUv;
	camUv.x = resizedUv.x + uCameraProgress * PI * 2. / 5.;
	camUv.y = vUv.y;
	camUv += .08 * clamp(mouse, 0., 1.);
	camUv += 0.01 * (rand(gl_FragCoord.xy) - .5);

	vec2 dcamUv = camUv + .2 * texture2D(tNoise, camUv + .01 * uTime).rg;
	float bigClouds = texture2D(tNoise, .4 * dcamUv + vec2(0., -.01 * uTime)).r - .5;
	float clouds = texture2D(tNoise, dcamUv + vec2(0., -.01 * uTime)).r - .5;
	float antiClouds = texture2D(tNoise, .7 * camUv + vec2(.003 * uTime)).r;

	clouds *= antiClouds;

	float cloudZone = vUv.y + 3. * cos(vUv.x - .5) + 0.1 * clouds + 0.7 * bigClouds;
	cloudZone -= .06 * abs(sin(resizedUv.x * 7. + clouds));
	cloudZone = smoothstep(3.6, 3.3, cloudZone + 1. - longpress - .2 * fortEnergy);

	vec3 color = uTransitionColor;

	color += .3 * antiClouds;

	float alpha = cloudZone;

	alpha *= smoothstep(0., 0.05, longpress);

	

	gl_FragColor = vec4(color, alpha);
	

	gl_FragColor = linearToOutputTexel(gl_FragColor);

}`,bS=Re(ES,"fragmentShader"),wS=`precision highp float;

varying vec2 vUv;

void main() {
	vUv = uv;
	
	gl_Position = vec4(position.xy, -.1, 1.0);
}`,DS=Re(wS,"vertexShader");class Oh extends ot{constructor(){super({uniforms:{uRatio:ut.uRatio,uTime:X.uTime,uLongpress:X.uLongpress,uTransition:X.uTransition,uTransitionColor:X.uTransitionColor,uCameraProgress:X.uSlideshowProgress,uPage:X.uPage,tNoise:{value:E.core.assetsManager.get("noise")}},transparent:!0,depthTest:!1,depthWrite:!1}),E.state.on(he.ATTACH,this.#e),DS.use(this),bS.use(this)}#e=()=>{this.uniforms.tMouse={value:E.webgl.mouseComputation?.texture}}}const AS=`precision highp float;

uniform float uTime, uTransition;

varying vec2 vUv;
varying float vSeed;
varying vec3 vViewPosition;

void main() {
	if(uTransition < 0.01) discard;
	
	 vec3 color = vec3(1.);
	float intensity = abs(vUv.x - .5);
	float alpha = 0.8 * smoothstep(0.02, 0., intensity);
	alpha *= smoothstep(0.1, .3, vUv.y) * smoothstep(1., .9, vUv.y);
	
	alpha += (0.1 * smoothstep(0.08, 0., intensity) + .2 * smoothstep(0.5, 0., intensity)) * smoothstep(0., .1, vUv.y) * smoothstep(1., .92, vUv.y);

	alpha *= smoothstep(.1, .15 + vSeed * .2, uTransition - vUv.y + .12 * sin(.1 * vViewPosition.x));

	gl_FragColor = vec4(color, alpha);
	

}`,CS=Re(AS,"fragmentShader"),RS=`precision highp float;

#define PI 3.141592653589793

uniform float uRatio;

attribute vec3 offset;

varying vec2 vUv;
varying float vSeed;
varying vec3 vViewPosition;

highp float rand(const in vec2 uv) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);
    return fract(sin(sn) * c);
}

void main() {
    vUv = uv;

	vSeed = rand(position.xy);
	vec4 mvPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.);
	vec3 transformed = vec3(offset.x / uRatio, offset.y, 0.);
	transformed *= 4.;

	gl_Position = mvPosition + vec4(transformed, 0.);
	vViewPosition = gl_Position.xyz;
}`,PS=Re(RS,"vertexShader");class Bh extends ot{constructor(e,t){super(),this.caller=t,this.uniforms={uTime:X.uTime,uTransition:X.uTransition,uRatio:ut.uRatio},this.side=hn,this.transparent=!0,this.depthWrite=!1,PS.use(this),CS.use(this)}}const US=`precision highp float;

varying vec2 vUv;
varying vec3 vViewPosition;

uniform float uChapter;
uniform float uTime;

uniform vec2 uResolution;

uniform vec3 uWaterColor;
uniform vec3 uLightPosition;
uniform sampler2D tNoiseNormal;
uniform sampler2D tNoise;
uniform sampler2D tMap;

#define PI 3.1415926536
#define PI2 6.28318530718

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, s, -s, c);
    return m * v;
}

vec2 createRippleNormal(vec2 uv, float repeat, float offset) {
    float x = length(uv - .5) * repeat + offset;
    float ripple = fract(x);

    float angle = ripple * PI2;
    return vec2(cos(angle), sin(angle));
}

void main() {
    float t = uTime * .05;

    vec2 rippleUv = rotate(vUv - .5, PI * .25);
    rippleUv.x *= (-3. + smoothstep(0., -2., rippleUv.y));
    rippleUv.y *= (-1. + smoothstep(0., -.1, rippleUv.y));
    rippleUv /= (1. + texture2D(tNoiseNormal, vUv + t * .01).r * length(rippleUv) * 1.);

    rippleUv += .5;

    float wavesDist = smoothstep(0., 3., length(rippleUv - .5));
    vec2 rippleNormal = createRippleNormal(rippleUv, 20., t * -15.) * .2;
    rippleNormal = max(vec2(0.), rippleNormal);
    rippleNormal *= smoothstep(1., .9, length(rippleUv - .5 - vec2(0., .55)));
    rippleNormal += length((rippleUv - .5)) * texture2D(tNoise, vUv * 2. + t * 2.).r * 2.;
    rippleNormal *= smoothstep(.4, .2, length(rippleUv - .5));

    float noise = texture2D(tNoiseNormal, vUv).r * .1;

    vec2 normalUv = vUv * 3. + vec2(t * .5 + noise * .5, t * .7 + noise * .5);
    vec3 noise1 = texture2D(tNoiseNormal, normalUv).rgb;
    vec3 noise2 = texture2D(tNoiseNormal, normalUv * 2.).rgb;
    vec3 noise3 = texture2D(tNoiseNormal, normalUv * 4. - t * 5.).rgb;
    vec3 normal = (noise1 + noise2 * 0.5 + noise3 * 0.25) * .64;
    normal.rg *= 1. + rippleNormal * .4;
    normal *= smoothstep(3., .2, length(vUv - .5));

    float noisee = smoothstep(.7, .5, texture2D(tNoiseNormal, vUv * 5. + noise2.rg * .2 + t * 1.).r);
    float foam = texture2D(tMap, (vUv * (1. - vec2(sin(t * 50. + cos(t * 20. + 48952.1) * .5) * .01 * abs(vUv.x - .5) * vUv.x, sin(t * 50. + cos(t * 20. + 48952.1) * .5) * .01 * abs(vUv.y - .5) * vUv.y))) + rippleNormal * .01 + vec2(sin(-t * 300. + abs(vUv.y - .5) * 1500.) * .0005, cos(-t * 200. + abs(vUv.x - .5) * 2000.) * .0005)).r;
    foam *= (1. - smoothstep(.1, .5, abs(rippleUv.x - .42)) * noisee);
    foam *= 1.5 + noisee * .1;
    normal.rg *= 1. - foam * 2.;

    vec3 halfwayDir = normalize(uLightPosition + vViewPosition);
    float specular = pow(max(dot(normal, halfwayDir), 0.0), 10.);

    vec3 color = uWaterColor + specular * .03;
    color += (texture2D(tNoise, vUv * .1 + t * .1).r - .5) * .2;

    color += foam * 1.2;
    color = mix(color, vec3(0.00784313725490196, 0.10588235294117647, 0.17254901960784313), smoothstep(1.5, 2., uChapter) * .3);

    float alpha = smoothstep(1., 1.2, uChapter);
    

    gl_FragColor = vec4(color, alpha);
}`,LS=Re(US,"fragmentShader"),NS=`varying vec2 vUv;
varying vec3 vViewPosition;

void main() {
    vUv = uv;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
    vViewPosition = -mvPosition.xyz;

	  gl_Position = projectionMatrix * mvPosition;
}`,IS=Re(NS,"vertexShader");class kh extends ot{constructor(e={}){super(e),IS.use(this),LS.use(this)}}const FS=`precision highp float;

uniform sampler2D tMap;
uniform sampler2D tNoise;
uniform sampler2D tMouseComputation;
uniform vec2 uResolution;
uniform float uTime;
uniform float uFadeProgress;
uniform vec3 uAccentColor, uBackgroundColor;

varying vec2 vUv;
varying float vFade;

void main() {
    float mouse = max(0., texture2D(tMouseComputation, gl_FragCoord.xy / uResolution).g);
    float wireframe = texture2D(tMap, vUv).r;
    float glow = texture2D(tMap, vUv, 3.).r;

    float noise = max(0., smoothstep(.9, 0., texture2D(tNoise, vUv * .2 + uTime * .01).r) * 10. - 5.);

    vec3 color = mix(uAccentColor, uBackgroundColor, wireframe * glow) * (1. + (noise + mouse * .25) * .7);

    gl_FragColor = vec4(color, vFade * uFadeProgress);
    
}`,OS=Re(FS,"fragmentShader"),BS=`#define PI 3.1415926536
#define PI2 6.2831853072

attribute float aInstanceId;

varying vec2 vUv;
varying float vFade;

uniform float uTime;
uniform float uScrollProgress;

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0, oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

void main() {
  vUv = uv;

  float t = uTime * .1;

  vec3 transformed = position;

    #ifdef IS_METAL
  const float offset = .06;
    #else
  const float offset = .06;
    #endif

  const float radius = 7.;
  const float maxAngle = PI * .7 + offset;
  const float minAngle = -PI * .15;

  float angle = PI2 * aInstanceId * offset - t - uScrollProgress * .5;
  angle = mod(angle, maxAngle) + minAngle;

  float fadeIn = smoothstep(maxAngle + minAngle, maxAngle + minAngle - 1., angle);
  float fadeOut = smoothstep(minAngle, minAngle + 1., angle);

  vFade = fadeIn * fadeOut;

    #ifdef IS_METAL
  float depthFade = smoothstep(-2., -1., position.y);
  vFade *= depthFade;
    #endif

  float odd = mix(-1.0, 1.0, step(0.5, mod(aInstanceId, 2.0)));

    #ifdef IS_METAL
  transformed = (rotation3d(vec3(0., 1., 0.), t * 2. + odd * .5) * vec4(transformed, 0.)).xyz;
  transformed = (rotation3d(vec3(1., 0., 0.), angle * .2 * odd * -1. + PI * .25) * vec4(transformed, 0.)).xyz;
    #else
  transformed = (rotation3d(vec3(0., 1., 0.), t * -2. + odd) * vec4(transformed, 0.)).xyz;
  transformed = (rotation3d(vec3(1., 0., 0.), angle * .8) * vec4(transformed, 0.)).xyz;
    #endif

  transformed += vec3(sin(angle) * radius, 0., cos(angle) * radius);

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
  gl_Position = projectionMatrix * mvPosition;
}`,kS=Re(BS,"vertexShader");class Vh extends ot{constructor(e={}){super(e),kS.use(this),OS.use(this)}}const VS=[" ","-",/[0-9]/g,"."],cu={},zS="PBR",uu={...Mx.materials},hu=Object.fromEntries(Object.entries(Object.assign({"../Webgl/Materials/BoatHomepage/BoatHomepage.js":Ox,"../Webgl/Materials/BoatMaritime/BoatMaritime.js":Eh,"../Webgl/Materials/CapitalBackground/CapitalBackground.js":Yx,"../Webgl/Materials/CapitalForeground/CapitalForeground.js":dy,"../Webgl/Materials/Cloud/Cloud.js":vy,"../Webgl/Materials/DiffuseCloud/DiffuseCloud.js":Sy,"../Webgl/Materials/Earth/Earth.js":wh,"../Webgl/Materials/EarthGlow/EarthGlow.js":Dh,"../Webgl/Materials/EnergyBg/EnergyBg.js":Iy,"../Webgl/Materials/EnergyCone/EnergyCone.js":Vy,"../Webgl/Materials/Flares/Flares.js":Ah,"../Webgl/Materials/Glow/Glow.js":$y,"../Webgl/Materials/GovernanceBackground/GovernanceBackground.js":eM,"../Webgl/Materials/GrassGround/GrassGround.js":Ch,"../Webgl/Materials/GrassPlants/GrassPlants.js":Rh,"../Webgl/Materials/Holograms/Holograms.js":fM,"../Webgl/Materials/HomepageClouds/HomepageClouds.js":Ph,"../Webgl/Materials/HomepagePeaks/HomepagePeaks.js":SM,"../Webgl/Materials/HoverParticles/HoverParticles.js":Uh,"../Webgl/Materials/Lake/Lake.js":Lh,"../Webgl/Materials/Line/Line.js":IM,"../Webgl/Materials/MapDebug/MapDebug.js":VM,"../Webgl/Materials/MaritimeSimple/MaritimeSimple.js":Nh,"../Webgl/Materials/Mountain/Mountain.js":$M,"../Webgl/Materials/MouseComputation/MouseComputation.js":Ih,"../Webgl/Materials/PBR/PBR.js":sn,"../Webgl/Materials/Particles/Particles.js":Fh,"../Webgl/Materials/PowerLine/PowerLine.js":lS,"../Webgl/Materials/Sea/Sea.js":fS,"../Webgl/Materials/SeaRock/SeaRock.js":_S,"../Webgl/Materials/Sky/Sky.js":TS,"../Webgl/Materials/TransitionClouds/TransitionClouds.js":Oh,"../Webgl/Materials/TransitionLinesMaterial/TransitionLinesMaterial.js":Bh,"../Webgl/Materials/Water/Water.js":kh,"../Webgl/Materials/Wireframe/Wireframe.js":Vh})).map(([i,e])=>[i.split("/").pop().split(".")[0],e])),du=(i,e)=>{switch(e[0]){case"blending":i.blending=e[1],i.depthWrite=!1;break;case"visible":i.visible=e[1]!=="false";break;case"renderOrder":i.renderOrder=~~e[1];break}},ha=new Map,HS=(i,e="")=>{if(e&&(e+="-"),!i.material.isMeshStandardMaterial&&!i.material.isMeshPhysicalMaterial||i.material.userData?.keepStandard)return i.material;let t=i.material.name;const n=e+t;VS.forEach(o=>{t=t.replaceAll(o,"")}),cu[t]&&(t=cu[t]);const s=hu[t]||hu[zS];Object.assign(i.material,{...uu?.[t],...uu?.[n],name:n});const r=n+WS(i);return ha.has(r)||ha.set(r,new s(i.material,i)),i.material=ha.get(r),E.debug?.urlParams.has("materials")&&console.info("-- MATERIAL --",n),i.material},Ul=(i,e=[])=>{const t={};let n;i.traverse(s=>{n=s.name.replace(".",""),t[n]=[s],s.geometry&&!s.instanceApplied&&i.traverse(r=>{s.name===r.name||!r.geometry||r.instanceApplied||s.parent!==r.parent||s.geometry.uuid===r.geometry.uuid&&(r.instanceApplied=!0,t[n].push(r))}),t[n].length<=1&&delete t[n]});for(const s in t){const r=i.getObjectByName(s);if(typeof r<"u"&&!r.isInstancedMesh){if(e.indexOf(r.name)>=0)return;GS(r,t[s],r.parent)}}},ai=(i,e="")=>{i?.traverse(t=>{t.material?.name&&HS(t,e),t.material?.userData&&Object.entries(t.material?.userData).length>0&&Object.entries(t.material.userData).forEach(n=>{du(t.material,n)}),t.userData&&Object.entries(t.userData).length>0&&Object.entries(t.userData).forEach(n=>du(t,n))})},GS=(i,e,t)=>{const n=new rh(i.geometry,i.material,e.length);return n.material.userData=i.material?.userData,n.userData=i.userData,n.name="instance-"+i.name,e.forEach((s,r)=>{s.updateMatrixWorld(),n.setMatrixAt(r,s.matrixWorld),bh(s),s.removeFromParent()}),t.add(n),n},WS=i=>""+!!i.instanceMatrix+!!i.isSkinnedMesh+(i.material?.name||"")+(i.material?.roughnessMap?.uuid||"")+(i.material?.aoMap?.uuid||"")+(i.material?.map?.uuid||"")+(i.material?.metalnessMap?.uuid||"")+(i.material?.normalMap?.uuid||"")+(i.userData.ao?.uuid||""),rl=Math.PI/180;function Un(i,e,t){return Math.max(e,Math.min(t,i))}function fu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function uo(i,e,t){return(1-t)*i+t*e}function XS(i,e,t,n){return uo(i,e,1-Math.exp(-t*n))}function YS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pu(i){return i*rl}class wn extends at{constructor(e,t,n,s){super(),this.key=e,this.sceneKey=t,this.manifest=n,this.lazy=s,n&&(this.assetsManager=new Jn(`${t}-${e}`,n,{isMobile:E.tools.viewport.isMobileAtLaunch,blockingLoad:!0}))}assetsManager;isLoaded=!1;scrollTl;noOverlapScrollTl;scrollRange;noOverlapScrollRange;isActive=!1;async load(){this.isLoaded||(await this.assetsManager?.load(),this.loaded(),this.isLoaded=!0,this.createScrollTimelines())}createScrollTimelines(){this.scrollTl?.kill(),this.noOverlapScrollTl?.kill(),this.scrollTl=this.createScrollTimeline(),this.noOverlapScrollTl=this.createNoOverlapScrollTimeline()}loaded(){}computeScrollRange(e,t){const{height:n,top:s}=e.getBoundingClientRect();let r=s+window.scrollY;const o=r+n;r-=t?0:E.tools.viewport.height,this.scrollRange={start:r,end:o,height:n},this.noOverlapScrollRange={start:r,end:o-E.tools.viewport.height,height:n},this.applyTransforms()}enter(){E.webgl.mainScene.add(this),this.applyTransforms(),this.isActive=!0}leave(){E.webgl.mainScene.remove(this),this.isActive=!1}destroy(){this.scrollTl?.progress(0),this.noOverlapScrollTl?.progress(0),this.isActive=!1}updateScroll(e){this.noOverlapScrollRange&&this.noOverlapScrollTl?.progress(Un(fu(e,this.noOverlapScrollRange.start,this.noOverlapScrollRange.end,0,1),0,1),!1),this.scrollRange&&(this.scrollTl?.progress(Un(fu(e,this.scrollRange.start,this.scrollRange.end,0,1),0,1),!1),e>=this.scrollRange.start&&e<this.scrollRange.end?this.isActive||this.enter():this.isActive&&this.leave())}createScrollTimeline(){return Je.timeline({paused:!0})}createNoOverlapScrollTimeline(){return Je.timeline({paused:!0})}applyTransforms(){const e=E.webgl.camera.targetPosition.clone(),t=E.webgl.camera.targetLookAt.clone(),n=E.webgl.pages[this.sceneKey].chapters?.Hero;n&&(n.cameraMovement.position&&e.add(n.cameraMovement.position),n.cameraMovement.lookAt&&t.add(n.cameraMovement.lookAt)),this.position.copy(e),this.lookAt(t)}getCurve(){const e=E.core.assetsManager.get("mountains"),t=e.getObjectByName(`Path-${this.key}`)?.removeFromParent(),n=e.getObjectByName(`TargetPath-${this.key}`)?.removeFromParent();if(t&&n)return{position:Ks(t.geometry,e.getObjectByName(`Point-${this.sceneKey}`)?.position),lookAt:Ks(n.geometry,e.getObjectByName(`TargetPoint-${this.sceneKey}`)?.position)}}}class qS extends wn{constructor(e,t,n){super(e,t,n,!1)}loaded(){const e=this.assetsManager.get("grassModel");e.position.z=12,e.rotateX(-Math.PI*.5);const t=new L(0,10,0);Ul(e),e.traverse(n=>{n.material?.name==="GrassGround"&&(n.material=new Ch(t,n)),n.material?.name==="GrassPlants"&&(n.material=new Rh(t,n))}),this.grass=e,this.add(e)}createScrollTimeline(){return super.createScrollTimeline()}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.to(X.uChapter,{value:2,duration:1},0),e}}class Ds extends wn{cameraMovement;constructor(e,t,n){super(e,t,n,!1),this.cameraMovement={position:void 0,lookAt:void 0}}createScrollTimeline(){const e=super.createScrollTimeline();return this.cameraMovement.position&&e.to(E.webgl.camera.chapterPosition,{x:this.cameraMovement.position.x,y:this.cameraMovement.position.y,z:this.cameraMovement.position.z,duration:1},0),this.cameraMovement.lookAt&&e.to(E.webgl.camera.chapterLookAt,{x:this.cameraMovement.lookAt.x,y:this.cameraMovement.lookAt.y,z:this.cameraMovement.lookAt.z,duration:1},0),e}}let jS=class extends Ds{constructor(e,t,n){super(e,t,n,!1),this.cameraMovement.position=new L(-6,3,0),this.cameraMovement.lookAt=new L(0,-300,0)}enter(){super.enter(),E.webgl.mainScene.applyPreset(E.webgl.pages[this.sceneKey].preset.scene)}leave(){super.leave(),E.webgl.mainScene.applyPreset({cloudsVisible:!1,flaresVisible:!0,mountainsVisible:!1,skyVisible:!1})}createScrollTimeline(){return super.createScrollTimeline()}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.fromTo(X.uChapter,{value:0},{value:1,duration:1},0),e}};const $S=`precision highp float;

uniform float uTime;
uniform float uLineWidth, uCrossSize, uPointSize;
uniform float uGridScale;
uniform float uBackgroundNoise;
uniform float uFade, uBrightness;
uniform float uDepth;
uniform float uSpeed;
uniform vec2 uResolution;
uniform vec2 uTranslate;
uniform vec3 uLineColor, uBackgroundColor, uAccentColor, uPointColor;
uniform sampler2D tNoise;
uniform sampler2D tMouseComputation;

varying vec2 vUv;

#define saturate( a ) clamp( a, 0.0, 1.0 )

#include <common>
#include <dithering_pars_fragment>

void main() {
	float depth = gl_FragCoord.z / gl_FragCoord.w / uDepth;

	vec2 uv = vUv + uTranslate;

	vec2 mUv = gl_FragCoord.xy / uResolution;
	float mouse = clamp(texture2D(tMouseComputation, mUv).r * smoothstep(.4, 0., depth), 0., 2.);

	uv.y += uTime * uSpeed;

	float t = uTime * .01;
	float noise = texture2D(tNoise, vec2(uv.x + t * 2., uv.y + sin(t * 10.) * .05) * .2).r * .5;
	noise += texture2D(tNoise, vec2(uv.x + t, uv.y - sin(t * 5.) * .01) * .5).r * .5;

	vec2 sUv = uv;
	sUv = (sUv - .5) * uGridScale + .5;

	float lineWidth = uLineWidth + max(0., mouse * .01);

	vec4 uvDDXY = vec4(dFdx(sUv), dFdy(sUv));
	vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));

	vec2 drawWidth = clamp(vec2(lineWidth), uvDeriv, vec2(.5));
	vec2 lineAA = uvDeriv * 1.5;
	vec2 gridUV = 1.0 - abs(fract(sUv) * 2.0 - 1.0);
	vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);
	grid2 *= saturate(lineWidth / drawWidth);
	grid2 = mix(grid2, vec2(lineWidth), saturate(uvDeriv * 2. - 1.));
	float grid = mix(grid2.x, 1.0, grid2.y);

	float crossSize = uCrossSize;
	vec2 crossDrawWidth = clamp(vec2(crossSize), uvDeriv, vec2(.5));

	vec2 intersection = smoothstep(crossDrawWidth + lineAA, crossDrawWidth - lineAA, gridUV);

	float shadow1 = smoothstep(.06, 0.02, length(vUv - vec2(.33, .695)));
	float shadow2 = smoothstep(.14, 0.04, length(vUv - vec2(.34, .83)));
	float shadow3 = .8 * smoothstep(.08, 0.02, length(vUv - vec2(.2, .83)));
	float shadow4 = .7 * smoothstep(.06, 0.01, length(vUv - vec2(.24, .74)));
	float shadow = (1. - uBackgroundNoise * (shadow1 + shadow2 + shadow3 + shadow4));
	shadow = clamp(shadow, 0., 1.);
	vec3 backgroundColor = uBackgroundColor * shadow;
	
	vec3 color = mix(backgroundColor, (0.4 + 0.6 * shadow) * mix(uLineColor, uAccentColor, (intersection.x * intersection.y)), grid);

	float noiseFactor = (noise - .5) * 1.;

	float dotsNoise = max(0., smoothstep(.9, 0., texture2D(tNoise, uv * .7 + t).r) * 5. - 2.5);
	float distFromIntersection = length(gridUV);
	float dots = smoothstep(uPointSize + .1, uPointSize, distFromIntersection) + smoothstep(.5, uPointSize, distFromIntersection) * .1;

	dots = mix(dots - .01, dots + 5., (dotsNoise + mouse * .1) * dots);
	dots = min(1., dots);
	color += dots * uPointColor * shadow;

	color *= uBrightness;
	color *= 1. + .2 * mouse;

	
	float alpha = uFade;
	alpha *= smoothstep(.5, .0, depth);
	alpha *= smoothstep(.5, .3, abs(vUv.x - .5));

	gl_FragColor = vec4(color, alpha);
	#include <dithering_fragment>
}`,KS=Re($S,"fragmentShader"),ZS=`varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

    vUv = uv;
}`,JS=Re(ZS,"vertexShader");class zh extends ot{constructor({gridScale:e=100,lineWidth:t=.02,crossSize:n=.3,pointSize:s=.01,speed:r=0,backgroundNoise:o=0,brightness:a=1,backgroundColor:l=new ce("#051723"),pointColor:c=new ce().setStyle("#1D7FC8","srgb-linear"),accentColor:u=new ce().setStyle("#325977","srgb-linear"),lineColor:h=new ce().setStyle("#0c222f","srgb-linear"),depth:d=1e3}={}){super({uniforms:{uTime:X.uTime,uScrollProgress:X.uScrollProgress,tMouseComputation:{value:E.webgl.mouseComputation?.texture},uResolution:ut.uResolution,uLineColor:{value:h},uBackgroundColor:{value:l},uAccentColor:{value:u},uGridScale:{value:e},uLineWidth:{value:t},uCrossSize:{value:n},uPointSize:{value:s},uPointColor:{value:c},uBrightness:{value:a},uBackgroundNoise:{value:o},uSpeed:{value:r},uDepth:{value:d},uFade:{value:1},uTranslate:{value:new me},tNoise:{value:E.core.assetsManager.get("noise")}},depthTest:!1,dithering:!0,blending:Ti,transparent:!0}),JS.use(this),KS.use(this),E.debug?.mapping.add(this,"Grid")}}class QS extends wn{constructor(e,t,n){super(e,t,n,!0),this.wrapper=new at,this.cameralookAt=new L,this.cameraPosition=new L,this.pageProgress={value:0}}loaded(){this.model=this.assetsManager.get("energyChapter"),ai(this.model),this.grid=this.model.getObjectByName("Grid"),this.grid.material=new zh({lineWidth:.01,lineColor:new ce("#4e8399"),backgroundColor:new ce("#1a697f"),accentColor:new ce("#7a9fb6"),pointColor:new ce("#519abc"),backgroundNoise:1,brightness:1.6,crossSize:.2,gridScale:150,pointSize:0,depth:100}),this.camerasPositions=[],this.camerasLookAt=[],this.holograms=[],this.lines=[],this.model.traverse(n=>{n.isMesh&&n.material?.uniforms&&(n.frustumCulled=!1,n.material.uniforms.projectionMatrix={value:E.webgl.camera.tertiaryCamera.projectionMatrix},n.material.uniforms.viewMatrix={value:E.webgl.camera.tertiaryCamera.matrixWorldInverse},n.material.side=nn),n.isPerspectiveCamera&&this.camerasPositions.push(n),n.name.startsWith("LookAt")&&this.camerasLookAt.push(n),n.name.startsWith("Line")&&this.lines.push(n),n.name.startsWith("Hologram")&&this.holograms.push(n)}),this.camerasPositions.sort((n,s)=>parseInt(n.name.replace("Camera","")-parseInt(s.name.replace("Camera","")))),this.camerasLookAt.sort((n,s)=>parseInt(n.name.replace("LookAt","")-parseInt(s.name.replace("LookAt","")))),this.cameraPosition.copy(this.camerasPositions[0].position),this.cameralookAt.copy(this.camerasLookAt[0].position);const e=[];this.camerasPositions.forEach(n=>{e.push(n.position)}),this.camCurve=new el(e,!1,"centripetal");const t=[];this.camerasLookAt.forEach(n=>{t.push(n.position)}),this.lookAtCurve=new el(t,!1,"centripetal"),E.debug?.mapping.add(this,"FortEnergy"),this.wrapper.add(this.model)}enter(){super.enter(),E.webgl.mainScene.add(this.wrapper),E.state.on(he.TICK,this.#e)}leave(){super.leave(),E.webgl.mainScene.remove(this.wrapper),E.state.off(he.TICK,this.#e)}createScrollTimeline(){const e=super.createScrollTimeline();e.fromTo([this.grid,...this.lines].map(s=>s.material.uniforms.uFade),{value:0},{value:1,duration:.1},0),e.fromTo(this.pageProgress,{value:0},{value:1,duration:1,ease:"sine.out"},0);const t=.5,n=.3;return e.fromTo(this.holograms[0].material.uniforms.uFade,{value:0},{value:1,duration:.1},0),e.to(this.holograms[0].material.uniforms.uFade,{value:0,duration:.06},.17),e.fromTo(this.holograms[1].material.uniforms.uFade,{value:0},{value:1,duration:.08},.32),e.to(this.holograms[1].material.uniforms.uFade,{value:0,duration:.1},.5),e.to(this.grid.material.uniforms.uDepth,{value:120,duration:n},t),e.fromTo(this.holograms[2].material.uniforms.uFade,{value:0},{value:1,duration:n},t+n*.4+.1),e.fromTo(this.holograms[3].material.uniforms.uOffset,{value:0},{value:.1,duration:n*.8},t+n*.4+.2),e.fromTo(this.holograms[3].material.uniforms.uFade,{value:0},{value:1,duration:n},t+n*.4+.15),e.add(()=>{},1.2),e}#e=()=>{this.camCurve&&(this.cameraPosition=this.camCurve.getPoint(this.pageProgress.value)),this.lookAtCurve&&(this.cameralookAt=this.lookAtCurve.getPoint(this.pageProgress.value)),E.webgl.camera.tertiaryCamera.position.copy(this.cameraPosition),E.webgl.camera.tertiaryCamera.lookAt(this.cameralookAt),E.webgl.camera.parallaxTertiary(),E.webgl.camera.tertiaryCamera.updateMatrixWorld()}}let eT=class extends Ds{constructor(e,t,n){super(e,t,n,!1),this.cameraMovement.position=new L(0,0,-20),this.cameraMovement.lookAt=new L(0,-500,0)}enter(){super.enter(),E.webgl.mainScene.applyPreset(E.webgl.pages[this.sceneKey].preset.scene),E.webgl.pages[this.sceneKey].env.visible=!0}leave(){super.leave(),E.webgl.mainScene.applyPreset({cloudsVisible:!1,flaresVisible:!1,mountainsVisible:!0,skyVisible:!1,seaVisible:!1}),E.webgl.pages[this.sceneKey].env.visible=!1}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.fromTo(X.uChapter,{value:0},{value:1,duration:1,ease:"none"},0),e}createScrollTimeline(){return super.createScrollTimeline()}};const tT=(i,e)=>Math.hypot(i,e),mu=(i,e,t)=>e===0||Math.abs(e)===Number.POSITIVE_INFINITY?i**(t*5):i*e*t/(e+t*i),gu=(i,e,t,n=.15)=>n===0?Un(i,e,t):i<e?-mu(e-i,t-e,n)+e:i>t?+mu(i-t,t-e,n)+t:i,vu=()=>{},Hh={mouse:!0,touch:!0,minX:Number.NEGATIVE_INFINITY,minY:Number.NEGATIVE_INFINITY,maxX:Number.POSITIVE_INFINITY,maxY:Number.POSITIVE_INFINITY,passive:!0,rubber:!0,preventDefault:!1,cancelPointerEvents:!0},_u=i=>{const e={...Hh,...typeof i=="function"?i():i};return e.preventDefault&&(e.passive=!1),e},da=i=>"TouchEvent"in window&&i instanceof TouchEvent?{x:i.changedTouches[0].clientX,y:i.changedTouches[0].clientY}:{x:i.clientX,y:i.clientY};class nT{state={event:null,target:null,currentTarget:null,active:!1,first:!1,last:!1,delta:{x:0,y:0},direction:{x:0,y:0},pointer:{x:0,y:0},movement:{x:0,y:0},offset:{x:0,y:0},velocity:{x:0,y:0},tap:!0,canceled:!1,cancel:vu};#e=!1;#t=Hh;#n=!1;config;element;handler;constructor(e,t,n){this.element=e,this.handler=t||vu,this.config=n}drag=e=>{if(this.#e)return;this.#e=!0,this.#t.beforeStart?.(this.state),this.#t=_u(this.config);const t=this.state,n=this.#t;n.preventDefault&&e.preventDefault(),t.target=e.target,t.currentTarget=e.currentTarget,t.active=!1,t.tap=!0;const s=da(e),r={x:0,y:0},o={x:0,y:0};let a=s,l,c;n.from?.x!==void 0&&(t.offset.x=n.from.x),n.from?.y!==void 0&&(t.offset.y=n.from.y),t.currentTarget.style.userSelect="none",t.currentTarget.style.webkitUserSelect="none";const u=p=>{const v=a;if(a=da(p),t.direction.x=Math.sign(a.x-v.x),t.direction.y=Math.sign(a.y-v.y),t.active){t.event=p,t.first=!1,t.pointer=a,r.x=t.pointer.x-s.x,r.y=t.pointer.y-s.y;const x={...t.offset};t.offset.x=n.rubber?gu(o.x+r.x,n.minX,n.maxX):Un(o.x+r.x,n.minX,n.maxX),t.offset.y=n.rubber?gu(o.y+r.y,n.minY,n.maxY):Un(o.y+r.y,n.minY,n.maxY),c=p.timeStamp-l,t.velocity.x=t.delta.x/c,t.velocity.y=t.delta.y/c,t.delta.x=t.offset.x-x.x,t.delta.y=t.offset.y-x.y,t.movement.x+=t.delta.x,t.movement.y+=t.delta.y,l=p.timeStamp,this.handler(t)}else{const x=Math.abs(a.x-s.x),g=Math.abs(a.y-s.y);if(n.axis==="x"&&x<g){d();return}if(n.axis==="y"&&g<x){d();return}tT(x,g)>3&&h(p)}},h=p=>{t.event=p,t.active=!0,t.tap=!1,t.first=!0,t.last=!1,t.canceled=!1,t.delta={x:0,y:0},t.velocity={x:0,y:0},t.pointer=da(p),t.movement={x:0,y:0},o.x=t.offset.x,o.y=t.offset.y,l=p.timeStamp,this.handler(t)},d=()=>{this.#e=!1;const p=t.active;t.last=p,t.active=!1,t.offset.x=Un(t.offset.x,n.minX,n.maxX),t.offset.y=Un(t.offset.y,n.minY,n.maxY),t.currentTarget.style.userSelect="",t.currentTarget.style.webkitUserSelect="",window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d),window.removeEventListener("touchcancel",d),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",d),(p||t.tap)&&this.handler(t),n.afterEnd?.(t)};e instanceof MouseEvent?(window.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("mouseup",d,{passive:!1})):(window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d,{passive:!1}),window.addEventListener("touchcancel",d,{passive:!1})),t.cancel=()=>{t.canceled||(this.#e=!1,t.canceled=!0,setTimeout(()=>d(),0))}};click=e=>{!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())};clean=()=>{this.#n&&(this.#t.touch&&this.element?.removeEventListener("touchstart",this.drag),this.#t.mouse&&this.element?.removeEventListener("mousedown",this.drag),this.element?.removeEventListener("click",this.click,!0),this.#n=!1)};init=()=>{this.#n||(this.#t=_u(this.config),this.#t.touch&&this.element?.addEventListener("touchstart",this.drag,{passive:this.#t.passive}),this.#t.mouse&&this.element?.addEventListener("mousedown",this.drag,{passive:this.#t.passive}),this.element?.addEventListener("click",this.click,!0),this.#n=!0)}}class iT extends at{constructor(e){super(),this.options=e;const t=new El(e.radius,64,64);this.inner=new Tt(t,this.createInnerMaterial(e)),this.inner.frustumCulled=!1,this.glow=new Tt(t,this.createGlowMaterial(e)),this.glow.frustumCulled=!1,this.glow.scale.setScalar(1.02),this.add(this.inner,this.glow),this.update(),E.debug?.mapping.add(this,"Earth",1)}points;worldPosition=new L;inner;glow;createInnerMaterial(e){return e.data.wrapS=e.data.wrapT=mt,e.data.colorSpace="srgb-linear",new wh({uniforms:{tData:{value:e.data},tGrain:{value:E.tools.noise.texture},tNoise:{value:E.core.assetsManager.get("noise")},uSunPosition:{value:e.sun.position},uChapter:X.uChapter,uEarthSpecular:{value:.16},uSeaSpecular:{value:.32},uEarthShininess:{value:.1},uSeaShininess:{value:.2},uCloudsColor:{value:new ce("#ffffff")},uRimColor:{value:new ce("#8f9c9f")},uSeaColor:{value:new ce("#082233")},uEarthTint:{value:new ce("#000000")},uAmbientColor:{value:new ce("#085069")},tMouseComputation:{value:E.webgl.mouseComputation?.texture},uResolution:ut.uResolution,uTime:X.uTime,secondaryProjectionMatrix:{value:E.webgl.camera.secondyCamera.projectionMatrix},secondaryViewMatrix:{value:E.webgl.camera.secondyCamera.matrixWorldInverse}}})}createGlowMaterial(e){return new Dh({uniforms:{uSunPosition:{value:e.sun.position},uGlowColor:{value:new ce("#f4f6fb")},secondaryProjectionMatrix:{value:E.webgl.camera.secondyCamera.projectionMatrix},secondaryViewMatrix:{value:E.webgl.camera.secondyCamera.matrixWorldInverse}},transparent:!0})}coordinatesToVector3(e,t){const n=new L,s=pu(e),r=Math.PI*.5+pu(t);return n.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)),n.multiplyScalar(this.options.radius),n}update(){this.inner.getWorldPosition(this.worldPosition),this.points?.forEach(({el:e,object:t,projectedPosition:n})=>{t.getWorldPosition(n),e.classList.toggle("visible",n.distanceTo(E.webgl.camera.secondyCamera.position)<this.worldPosition.distanceTo(E.webgl.camera.secondyCamera.position)),n.project(E.webgl.camera.secondyCamera).multiplyScalar(.5).addScalar(.5),n.set(n.x*E.tools.viewport.width,(1-n.y)*E.tools.viewport.height,0),e.style.transform=`translate3d(${n.x}px, ${n.y}px, 0)`})}setPoints(e){e&&(this.points=Array.from(e).map(t=>{const n=this.coordinatesToVector3(parseFloat(t.dataset.latitude),parseFloat(t.dataset.longitude)),s=new at;return s.position.copy(n),this.inner.add(s),{el:t,object:s,projectedPosition:new L}}))}}let sT=class extends wn{constructor(e,t,n){super(e,t,n,!0),this.globeWrapper=new at,this.globeEmpty=new at,this.globeEmpty.rotation.order="ZYX",this.dragRotation=new me,this.lerpedDragRotation=new me,this.dragger=new nT(document.documentElement,this.#n,{}),this.bounds={minLng:120*rl,maxLng:250*rl},this.animatedRotation=0,this.finalRotation=new me}updateDom(e){this.points=Array.from(e.querySelectorAll("[data-point]")),this.earth?.setPoints(this.points)}loaded(){this.sun={position:new L(-100,200,150)},this.earth=new iT({sun:this.sun,data:this.assetsManager.get("earth").getObjectByName("Plane").material.map,radius:10}),this.earth.setPoints(this.points),this.earth.position.set(3,-5.8,-30),this.globeEmpty.add(this.earth),this.globeWrapper.add(this.globeEmpty)}enter(){super.enter(),E.webgl.mainScene.add(this.globeWrapper),this.dragger.init(),this.dragRotation.set(0,0),this.lerpedDragRotation.set(this.bounds.maxLng,0),this.animatedRotation=this.bounds.maxLng,this.#t(),E.state.on(he.AFTER_RENDER,this.#e)}leave(){super.leave(),E.webgl.mainScene.remove(this.globeWrapper),this.dragger.clean(),E.state.off(he.AFTER_RENDER,this.#e)}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.to(X.uChapter,{value:4,duration:1},0),e}createScrollTimeline(){const e=super.createScrollTimeline();return e.fromTo(this,{animatedRotation:this.bounds.maxLng},{animatedRotation:this.bounds.maxLng*.6,duration:1,ease:"power1.in"},0),e.to(this.earth.position,{z:-100,duration:1},0),e.to(this.earth.position,{x:-5,y:-7,duration:.5,ease:"power1.in"},.5),e.fromTo(this.sun.position,{x:-100,y:200},{x:-500,y:-150,duration:.3,ease:"power1.in"},.7),e.add(()=>{},1),e}#e=({dt:e})=>{this.#t(),this.lerpedDragRotation.lerp(this.finalRotation,e*2),this.earth&&(this.earth.update(),this.earth.rotation.x=-this.lerpedDragRotation.y,this.earth.rotation.y=this.lerpedDragRotation.x)};#t(){this.finalRotation.y=this.dragRotation.y,this.finalRotation.x=Un(this.dragRotation.x+this.animatedRotation,this.bounds.minLng,this.bounds.maxLng)}#n=({delta:e})=>{E.tools.mouse.isTouch||(this.dragRotation.y-=e.y/E.tools.viewport.height*Math.PI*2*.5,this.dragRotation.y=Un(this.dragRotation.y,-Math.PI*.1,Math.PI*.4));const t=this.dragRotation.x+e.x/E.tools.viewport.width*Math.PI*2*.5;t+this.animatedRotation>=this.bounds.minLng&&t+this.animatedRotation<=this.bounds.maxLng&&(this.dragRotation.x=t)}},rT=class extends Ds{constructor(e,t,n){super(e,t,n,!1)}enter(){super.enter()}leave(){super.leave()}createScrollTimeline(){const e=super.createScrollTimeline();return e.to(E.webgl.mainScene.mountains.mountainMaterial.uniforms.uFogFar,{value:50,duration:1,ease:"none"},0),e}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.fromTo(X.uChapter,{value:0},{value:1,duration:1,ease:"none"},0),e}};class Gh extends lh{constructor(e=200,t=new L(10,40,30),n=new ce(11993083),s=5){E.tools.viewport.breakpoint==="mobile"&&(e/=2);const r=new Qt,o=[];E.tools.viewport.breakpoint==="mobile"&&(t.z/=2);for(let l=0;l<e;l++){const c=2*t.x*Math.random()-t.x,u=2*t.y*Math.random()-t.y,h=2*t.z*Math.random()-t.z;o.push(c,u,h)}r.setAttribute("position",new Jt(o,3));const a=new Fh(n,s);super(r,a),this.frustumCulled=!1,this.position.y+=t.y*.5}}class oT extends wn{#e=new L;constructor(e,t,n){super(e,t,n,!0),this.particles=new Gh,this.forest=new at}enter(){super.enter(),E.webgl.mainScene.add(this.forest,this.particles),E.state.on(he.TICK,this.#t)}leave(){super.leave(),E.webgl.mainScene.remove(this.forest,this.particles),E.state.off(he.TICK,this.#t)}#t=()=>{E.webgl.camera&&(this.#e.copy(this.particles.position),this.#e.project(E.webgl.camera))};loaded(){const e=this.assetsManager.get("sustainability");ai(e),this.particles.position.copy(e.getObjectByName("Particles").position),this.forest.add(e),e.getObjectByName("Forest-Background").material.uniforms.uProjectedPos={value:this.#e}}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.to(X.uChapter,{value:5,duration:1,ease:"none"},0),e}}class aT extends Ds{constructor(e,t,n){super(e,t,n,!1),this.clouds=new at}enter(){super.enter(),E.webgl.mainScene.add(this.clouds),E.webgl.mainScene.applyPreset(E.webgl.pages[this.sceneKey].preset.scene)}loaded(){const e=this.assetsManager.get("topChapters");ai(e),Ul(e);const t=e.getObjectByName("SparseClouds");t.material=new Ph,e.getObjectByName("CloudSea").material.uniforms.uSize.value.set(3,2),e.renderOrder=5,this.clouds.add(e)}leave(){super.leave(),E.webgl.mainScene.remove(this.clouds),E.webgl.mainScene.applyPreset({cloudsVisible:!0,mountainsVisible:!1,seaVisible:!1,skyVisible:!0})}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline(),t=this.getCurve(),n={value:0};return e.to(n,{value:1,duration:1,onUpdate:()=>{t.position.getPoint(n.value,E.webgl.camera.chapterPosition),t.lookAt.getPoint(n.value,E.webgl.camera.chapterLookAt)}},0),e}}class lT extends wn{constructor(e,t,n){super(e,t,n,!0),this.boat=new at,this.clouds=new at}enter(){super.enter(),E.webgl.mainScene.add(this.boat)}leave(){super.leave(),E.webgl.mainScene.remove(this.boat)}loaded(){const e=this.assetsManager.get("whatWeDo");this.boat.add(e),ai(this.boat)}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.to(X.uChapter,{value:3,duration:1,ease:"none"},0),e}createScrollTimeline(){const e=super.createScrollTimeline();return e.fromTo(this.boat.position,{z:-20},{z:20,duration:1},0),e.add(()=>{},1),e}}let cT=class extends wn{constructor(e,t,n){super(e,t,n,!0)}enter(){super.enter()}loaded=()=>{};leave(){super.leave()}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.to(X.uChapter,{value:2,duration:1,ease:"none"},0),e}},uT=class extends Ds{constructor(e,t,n){super(e,t,n,!1),this.cameraMovement.position=new L(0,20,-5),this.cameraMovement.lookAt=new L(0,-300,-5)}enter(){super.enter(),E.webgl.mainScene.applyPreset(E.webgl.pages[this.sceneKey].preset.scene)}leave(){super.leave(),E.webgl.mainScene.applyPreset({cloudsVisible:!1,flaresVisible:!1,mountainsVisible:!1,skyVisible:!1})}createScrollTimeline(){return super.createScrollTimeline()}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.fromTo(X.uChapter,{value:0},{value:1,duration:1}),e}};class hT extends wn{constructor(e,t,n){super(e,t,n,!1)}loaded(){this.boat=this.assetsManager.get("boat");const e=this.boat.getObjectByName("boat");e.material=new Eh(e.material);const t=this.boat.getObjectByName("waves");t.material=new kh({uniforms:{tMap:{value:t.material.map},tNoise:{value:E.core.assetsManager.get("noise")},tNoiseNormal:{value:E.core.assetsManager.get("noiseNormal")},uLightPosition:{value:new L(80,64,-8)},uWaterColor:{value:new ce("#1a5a75")},tMouseComputation:{value:E.webgl.mouseComputation?.texture},uResolution:ut.uResolution,uChapter:X.uChapter,uTime:X.uTime},depthTest:!1,transparent:!0}),E.debug?.mapping.add(t.material,"Water"),this.boat.rotation.x=-Math.PI*.5,this.add(this.boat)}createScrollTimeline(){const e=super.createScrollTimeline();return e.fromTo(this.boat.position,{y:-50},{y:5},0),e.fromTo(this.boat.position,{z:25},{z:50},0),e.fromTo(this.boat.rotation,{y:-Math.PI*.75},{y:-Math.PI*.5,ease:"power2.inOut"},0),e.fromTo(this.boat.rotation,{x:-Math.PI*.5},{x:-Math.PI*.45},0),e}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.to(X.uChapter,{value:2,duration:1}),e}}class dT extends Tt{constructor(e){super(),this.targetMesh=e,this.raycaster=new x_,this.geometry=this.createGeometry(e.geometry),this.material=this.createMaterial()}raycaster;velocity=new L;createGeometry(e){const t=new oi(1,2).deleteAttribute("normal"),n=new fh,s=e.getAttribute("position");n.instanceCount=s.count,n.attributes=t.attributes,n.index=t.index;const r=[],o=[];for(let a=0;a<s.count;a++){const l=s.getX(a),c=s.getY(a),u=s.getZ(a);r.push(l,c,u),o[a]=YS(0,1)}return n.setAttribute("aPosition",new _s(new Float32Array(r),3)),n.setAttribute("aType",new _s(new Uint8Array(o),1)),n}createMaterial(){return new Uh({uniforms:{uTime:X.uTime,uLongpress:X.uLongpress,uChapter:X.uChapter,uHoverPosition:{value:new L},uHover:{value:0}},transparent:!0,depthWrite:!1})}update(e){if(!this.targetMesh)return;this.raycaster.setFromCamera(E.tools.mouse.coordinates.webgl,E.webgl.camera);const t=this.raycaster.intersectObject(this.targetMesh,!1);t?.[0]?(this.velocity.lerp(t[0].point.clone().sub(this.material.uniforms.uHoverPosition.value),e*50),this.material.uniforms.uHover.value=XS(this.material.uniforms.uHover.value,1,5,e)):(this.velocity.multiplyScalar(.99),this.material.uniforms.uHover.value*=.99),this.material.uniforms.uHoverPosition.value.add(this.velocity.clone().multiplyScalar(e))}}let fT=class extends Ds{constructor(e,t,n){super(e,t,n,!1),this.cameraMovement.position=new L(0,0,-20),this.cameraMovement.lookAt=new L(0,-100,0)}enter(){super.enter(),E.state.on(he.TICK,this.#e),E.webgl.mainScene.applyPreset(E.webgl.pages[this.sceneKey].preset.scene);const e=this.assetsManager.get("raycaster").getObjectByName("Raycaster");e.visible=!1,E.tools.mouse.isTouch||(this.hoverParticles=new dT(e),E.webgl.mainScene.add(this.hoverParticles))}leave(){super.leave(),E.state.off(he.TICK,this.#e),E.webgl.mainScene.applyPreset({cloudsVisible:!1,flaresVisible:!1,mountainsVisible:!1,skyVisible:!1}),this.hoverParticles&&E.webgl.mainScene.remove(this.hoverParticles)}createNoOverlapScrollTimeline(){const e=super.createNoOverlapScrollTimeline();return e.fromTo(X.uChapter,{value:0},{value:1,duration:1}),e}#e=({dt:e})=>{this.hoverParticles?.update(e)}};class Wh extends Tt{constructor(e,t,n=6){super(),this.material=new Vh({uniforms:{tMap:{value:e.material.map},tNoise:{value:E.core.assetsManager.get("noise")},uAccentColor:{value:new ce("#5797b8")},uBackgroundColor:{value:new ce("#0d3752")},uFadeProgress:{value:0},uTime:X.uTime,uScrollProgress:X.uScrollProgress,tMouseComputation:{value:E.webgl.mouseComputation?.texture},uResolution:ut.uResolution},transparent:!0,defines:{IS_OIL:t==="oil",IS_METAL:t==="metal"}}),this.geometry=new fh,this.geometry.instanceCount=n,this.geometry.attributes=e.geometry.attributes,this.geometry.index=e.geometry.index,this.geometry.setAttribute("aInstanceId",new _s(new Uint8Array(Array.from({length:n}).map((s,r)=>r)),1)),this.material.defines.COUNT=n.toFixed(2),this.frustumCulled=!1}}class pT extends wn{constructor(e,t,n){super(e,t,n,!0)}loaded(){this.group=new ti,this.group.position.set(0,-3,5),this.group.rotation.set(-.82,0,-.4);const e=this.assetsManager.get("oilMetals").getObjectByName("metal");this.instancedMesh=new Wh(e,"metal",6),this.instancedMesh.renderOrder=-1,this.add(this.group.add(this.instancedMesh))}createScrollTimeline(){const e=super.createScrollTimeline();return e.fromTo(this.instancedMesh,{visible:!1},{visible:!0,duration:.001},.2),e.fromTo(this.instancedMesh.material.uniforms.uFadeProgress,{value:0},{value:1,duration:.1},"<"),e.to(this.instancedMesh.material.uniforms.uFadeProgress,{value:0,duration:.1},.7),e.add(()=>{},1),e}}class mT extends wn{constructor(e,t,n){super(e,t,n,!0)}loaded(){this.group=new ti,this.group.position.set(0,-3,3),this.group.rotation.set(-.82,0,-.4);const e=this.assetsManager.get("oilMetals").getObjectByName("Barrel");this.instancedMesh=new Wh(e,"oil",6),this.add(this.group.add(this.instancedMesh)),E.debug?.mapping.add(this,"Oil")}createScrollTimeline(){const e=super.createScrollTimeline();return e.fromTo(this.instancedMesh.material.uniforms.uFadeProgress,{value:0},{value:1,duration:.1},0),e.to(this.instancedMesh.material.uniforms.uFadeProgress,{value:0,duration:.1},.6),e.fromTo(this.instancedMesh,{visible:!0},{visible:!1,duration:.001},">"),e.add(()=>{},1),e}}class Ll extends Tt{static quad=new oi(1,1);constructor(e={}){super(Ll.quad,new zh(e)),this.renderOrder=-10}}class gT extends wn{constructor(e,t,n){super(e,t,n,!0)}loaded(){this.grid=new Ll({lineWidth:0,backgroundColor:new ce("#123e4f"),infiniteMovement:!0,speed:.01}),this.grid2=this.grid.clone(),this.grid.rotation.set(-1.67,.3,.15),this.grid.position.set(0,-20,250),this.grid.scale.setScalar(500),this.grid2.rotation.set(1.47,-.3,-.15),this.grid2.position.set(25,100,250),this.grid2.scale.setScalar(500),this.add(this.grid,this.grid2)}enter(){super.enter()}createScrollTimeline(){const e=super.createScrollTimeline();return e.fromTo(this.grid.material.uniforms.uFade,{value:0},{value:1,duration:.05},0),e.fromTo(this.grid.material.uniforms.uTranslate.value,{y:0},{y:.5,duration:1},0),e.to(this.grid.material.uniforms.uFade,{value:0,duration:.05},">-.05"),e}leave(){super.leave()}}const vT=Object.entries(Object.assign({"../Chapters/Capital/CapitalChapter.js":qS,"../Chapters/Capital/Hero.js":jS,"../Chapters/FortEnergy/FortEnergyChapter.js":QS,"../Chapters/FortEnergy/Hero.js":eT,"../Chapters/Homepage/GlobalConnectivity.js":sT,"../Chapters/Homepage/Hero.js":rT,"../Chapters/Homepage/Sustainability.js":oT,"../Chapters/Homepage/TopChapters.js":aT,"../Chapters/Homepage/WhatWeDo.js":lT,"../Chapters/Homepage/WhoWeAre.js":cT,"../Chapters/Maritime/Hero.js":uT,"../Chapters/Maritime/MaritimeChapter.js":hT,"../Chapters/Trading/Hero.js":fT,"../Chapters/Trading/Metals.js":pT,"../Chapters/Trading/Oil.js":mT,"../Chapters/Trading/TradingChapter.js":gT})),us={};vT.forEach(([i,e])=>{const[,t,n]=i.match(/..\/Chapters\/(.+?)\/(.+?)\.js/);us[t]||(us[t]={}),us[t][n]=e});class As{constructor(e,t={}){this.key=e,this.preset=t,this.chapters=this.createChapters(e),this.chapters&&(this.chaptersArr=Object.values(this.chapters),this.resizeObserver=new ResizeObserver(this.onChapterResize)),Fl[e]&&(this.assetsManager=new Jn(e,Fl[e],{blockingLoad:!0,isMobile:E.tools.viewport.isMobileAtLaunch},()=>this.loaded?.()))}chapters;chaptersArr;chaptersElements=new Map;resizeObserver;assetsManager;isLoaded=!1;async load(){this.isLoaded||(await this.assetsManager?.load(),this.chaptersArr&&(await Promise.all(this.chaptersArr.filter(e=>!e.lazy).map(e=>e.load())),(async()=>{for(const e of this.chaptersArr.filter(t=>t.lazy))await e.load()})()),this.isLoaded=!0)}beforeEnter(e){const t=document.querySelector(`[data-scene=${this.key}]`);t&&this.chapters&&t.querySelectorAll("[data-chapter]").forEach(r=>{const o=this.chapters[r.dataset.chapter];o&&(o.updateDom?.(r),o.computeScrollRange(r,!!r.dataset.chapterFirst),this.resizeObserver.observe(r),this.chaptersElements.set(r,o))});let n=en.indexOf(this.key);n=n>-1?n:void 0,e!=="mountains"&&E.webgl.camera.applyPreset(this.preset?.camera,n),E.webgl.mainScene.applyPreset(this.preset?.scene,n),typeof n=="number"&&(X.uPage.value=n),X.uChapter.value=0,E.state.on(he.TICK,this.onUpdateScroll),this.onUpdateScroll(),this.getChaptersBeforeFirstActive()?.forEach(r=>r.leave())}afterEnter;afterLeave(){this.chaptersElements.forEach((e,t)=>{this.resizeObserver.unobserve(t),e.leave(),e.destroy()}),this.chaptersElements.clear(),E.state.off(he.TICK,this.onUpdateScroll)}createChapters(e){if(us[e])return Object.fromEntries(Object.values(ln[e]).map(t=>{if(!us[e][t])return[];const n=new us[e][t](t,e,ud[e]?.[t]);return[t,n]}).filter(([,t])=>!!t))}onUpdateScroll=()=>{this.chaptersArr?.forEach(e=>e.updateScroll(E.webgl.lerpedScrollProgress))};onChapterResize=e=>{e.forEach(t=>{const n=t.target;document.contains(n)&&this.chaptersElements.has(n)&&(this.chaptersElements.get(n).computeScrollRange(n,!!n.dataset.chapterFirst),Si.refresh())})};getChaptersBeforeFirstActive(){if(!this.chaptersArr)return;const e=this.chaptersArr.findLastIndex(t=>t.isActive);return e===-1?[]:this.chaptersArr.slice(0,e)}}class hs extends Tt{static renderTarget;#e=!1;constructor(e,t,n={}){if(!hs.renderTarget){const b=E.tools.viewport.breakpoint==="mobile"?128:256;hs.renderTarget=new si(b,b,{samples:2})}super(e),this.rotateX(Math.PI*.5),this.meshesToRender=n.meshesToRender||[],this.isReflector=!0,this.type="Reflector",this.camera=new Ft;const s=n.clipBias||0,r=new xi,o=new L,a=new L,l=new L,c=new Ye,u=new L(0,0,-1),h=new gt,d=new L,p=new L,v=new gt,x=new Ye,g=this.camera,m=hs.renderTarget;this.oldBackground=new ce,t?(this.#e=!0,this.simpleMountainMaterial=new Nh(n.lightmap),this.oldMountainMaterial=null,t.uniforms.tDiffuse={value:m.texture},t.uniforms.textureMatrix={value:x},this.material=t):(this.material=new Lh,this.material.uniforms.tDiffuse={value:m.texture},this.material.uniforms.textureMatrix={value:x},this.renderTexture=m.texture,this.reflectorTextureMatrix=x),this.onBeforeRender=(b,S,C)=>{a.setFromMatrixPosition(this.matrixWorld),l.setFromMatrixPosition(C.matrixWorld),c.extractRotation(this.matrixWorld),o.set(0,0,1),o.applyMatrix4(c),d.subVectors(a,l),d.reflect(o).negate(),d.add(a),c.extractRotation(C.matrixWorld),u.set(0,0,-1),u.applyMatrix4(c),u.add(l),p.subVectors(a,u),p.reflect(o).negate(),p.add(a),g.position.copy(d),g.up.set(0,-1,0),g.up.applyMatrix4(c),g.up.reflect(o),g.lookAt(p),g.far=C.far,g.updateMatrixWorld(),g.projectionMatrix.copy(C.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(g.projectionMatrix),x.multiply(g.matrixWorldInverse),x.multiply(this.matrixWorld),r.setFromNormalAndCoplanarPoint(o,a),r.applyMatrix4(g.matrixWorldInverse),h.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const F=g.projectionMatrix;v.x=(Math.sign(h.x)+F.elements[8])/F.elements[0],v.y=(Math.sign(h.y)+F.elements[9])/F.elements[5],v.z=-1,v.w=(1+F.elements[10])/F.elements[14],h.multiplyScalar(2/h.dot(v)),F.elements[2]=h.x,F.elements[6]=h.y,F.elements[10]=h.z+1-s,F.elements[14]=h.w,this.oldBackground.copy(S.background),this.#e&&(this.oldMountainMaterial=E.webgl.mainScene.mountains.mountain.material,E.webgl.mainScene.mountains.mountain.material=this.simpleMountainMaterial),S.background.copy(X.uLightColor.value),this.visible=!1,g.layers.disableAll(),g.layers.enable(Sh.MOUNTAIN);const U=b.getRenderTarget(),P=b.xr.enabled,V=b.shadowMap.autoUpdate;b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.setRenderTarget(m),b.state.buffers.depth.setMask(!0),b.autoClear===!1&&b.clear(),b.render(S,g),b.xr.enabled=P,b.shadowMap.autoUpdate=V,b.setRenderTarget(U);const te=C.viewport;te!==void 0&&b.state.viewport(te),this.visible=!0,S.background.copy(this.oldBackground),this.#e&&(E.webgl.mainScene.mountains.mountain.material=this.oldMountainMaterial)},this.getRenderTarget=function(){return m},this.dispose=()=>{m.dispose(),this.material.dispose()}}}let _T=class extends As{constructor(){super(Oe.CAPITAL,{camera:{withCurve:!0},scene:{cloudsVisible:!1,mountainsVisible:!0,flaresVisible:!0,skyVisible:!0}}),this.env=new at}loaded(){this.mountainsConfig={envMapIntensity:1,envMapRotation:new Yt(0,44,0),ambient:new ce(16777215),ambientIntensity:.76,roughness:.95,color:new ce(16777215),armMap:this.assetsManager.get("capitalLightmap"),map:this.assetsManager.get("snow"),mapTransformRepeat:new me(20,20),mapTransformOffset:new me(0,0),mapTransformRotation:0,map2:this.assetsManager.get("grass"),map2TransformRepeat:new me(30,30),map2TransformOffset:new me(0,0),map2TransformRotation:0,mixMap:this.assetsManager.get("snowRockMix"),fogNear:.005,fogFar:30},this.mountainsConfig.map.wrapS=this.mountainsConfig.map.wrapT=mt,this.mountainsConfig.map2.wrapS=this.mountainsConfig.map2.wrapT=mt,this.env.add(this.assetsManager.get("capital")),ai(this.env),this.env.traverse(t=>{t.material?.needsGrass&&(t.material.uniforms.tGrass.value=this.assetsManager.get("grass"))});const e=this.env.getObjectByName("capital-prairie");this.lake=new hs(new oi(60,60)),this.lake.renderOrder=-1,e.material.uniforms.tReflexion.value=this.lake.renderTexture,e.material.uniforms.textureMatrix.value=this.lake.reflectorTextureMatrix,this.lake.rotateX(Math.PI),this.lake.position.copy(this.env.getObjectByName("LakePos").position),this.env.add(this.lake)}beforeEnter(e){super.beforeEnter(e),E.webgl.mainScene.mountains.add(this.env),E.webgl.mainScene.mountains.mountainMaterial.applyConfig(this.mountainsConfig),X.uLightColor.value.copy(In[this.key][0]),X.uDarkColor.value.copy(In[this.key][1])}afterLeave(){super.afterLeave(),E.webgl.mainScene.mountains.remove(this.env)}},xT=class extends As{constructor(){super(Oe.FORT_ENERGY,{camera:{withCurve:!0},scene:{cloudsVisible:!1,mountainsVisible:!0,skyVisible:!0,flaresVisible:!1}}),this.env=new at}loaded(){const e=this.assetsManager.get("fortEnergy");ai(e),e.traverse(s=>{s.material&&(s.renderOrder=10)});const t=e.getObjectByName("EnergyCylinder");t.material.uniforms={...t.material.uniforms,iSteps:{value:2},uSpeed:{value:.08},uHeadLength:{value:.1},uLineCount:{value:30},uOpacity:{value:.5}};const n=e.getObjectByName("Reflected").clone();n.scale.y=-1,this.env.add(n),this.env.add(e)}beforeEnter(e){super.beforeEnter(e),E.webgl.mainScene.add(this.env),X.uLightColor.value.copy(In[this.key][0]),X.uDarkColor.value.copy(In[this.key][1])}afterLeave(){super.afterLeave(),E.webgl.mainScene.remove(this.env)}},yT=class extends As{constructor(){super(Oe.HOMEPAGE,{camera:{withCurve:!0},scene:{cloudsVisible:!0,mountainsVisible:!0,skyVisible:!0,flaresVisible:!1,env:"homepage"}})}loaded(){this.mountainsConfig={envMapIntensity:.33,envMapRotation:new Yt(0,-1.77,0),ambient:new ce(10992581),ambientIntensity:2.39,roughness:.4,color:new ce(16777215),armMap:this.assetsManager.get("homepageLightmap"),map:this.assetsManager.get("snow"),mapTransformRepeat:new me(10,10),mapTransformOffset:new me(0,0),mapTransformRotation:0,map2:this.assetsManager.get("snowyRock"),map2TransformRepeat:new me(1,50),map2TransformOffset:new me(0,0),map2TransformRotation:0,mixMap:this.assetsManager.get("snowRockMix"),fogNear:.01,fogFar:20},this.mountainsConfig.map.wrapS=this.mountainsConfig.map.wrapT=mt,this.mountainsConfig.map2.wrapS=this.mountainsConfig.map2.wrapT=mt,this.env=this.assetsManager.get("homepage"),Ul(this.env),ai(this.env)}beforeEnter(e){super.beforeEnter(e),E.webgl.mainScene.mountains.add(this.env),E.webgl.mainScene.mountains.mountainMaterial.applyConfig(this.mountainsConfig),X.uLightColor.value.copy(In[this.key][0]),X.uDarkColor.value.copy(In[this.key][1])}afterLeave(){super.afterLeave(),E.webgl.mainScene.mountains.remove(this.env)}},MT=class extends As{constructor(){super(Oe.MARITIME,{camera:{withCurve:!0},scene:{cloudsVisible:!1,mountainsVisible:!0,skyVisible:!0,flaresVisible:!1,env:"maritime"}})}loaded(){this.mountainsConfig={envMapIntensity:1,envMapRotation:new Yt(0,4,0),ambient:new ce(12504274),ambientIntensity:.3,roughness:1,color:new ce(9736076),armMap:this.assetsManager.get("maritimeLightmap"),map:this.assetsManager.get("rock"),mapTransformRepeat:new me(12,16),mapTransformOffset:new me(-5,-5),mapTransformRotation:190*Math.PI/180,map2:this.assetsManager.get("grass"),map2TransformRepeat:new me(10,10),map2TransformOffset:new me(0,0),map2TransformRotation:0,fogNear:.01,fogFar:35},this.env=this.assetsManager.get("maritime"),ai(this.env);const e=this.env.getObjectByName("Sea");e.removeFromParent(),this.sea=new hs(new oi(600,600),e.material,{lightmap:this.assetsManager.get("maritimeLightmap")}),this.sea.rotateX(Math.PI),this.sea.position.copy(e.position),this.env.add(this.sea),this.mountainsConfig.map.wrapS=this.mountainsConfig.map.wrapT=mt,this.mountainsConfig.map2.wrapS=this.mountainsConfig.map2.wrapT=mt}init(){}afterLeave(){super.afterLeave(),E.webgl.mainScene.mountains.remove(this.env)}beforeEnter(e){super.beforeEnter(e),E.webgl.mainScene.mountains.attach(this.env),E.webgl.mainScene.mountains.mountainMaterial.applyConfig(this.mountainsConfig),X.uLightColor.value.copy(In[this.key][0]),X.uDarkColor.value.copy(In[this.key][1])}afterEnter(){}createEnterTimeline(){return super.createEnterTimeline()}},ST=class extends As{constructor(){super(Oe.TRADING,{camera:{withCurve:!0},scene:{cloudsVisible:!1,mountainsVisible:!0,skyVisible:!0,flaresVisible:!1,env:"trading"}}),this.particles=new Gh(80,new L(50,50,10),new ce(7847632),4),this.particles.position.set(20,-10,-40)}loaded(){this.mountainsConfig={envMapIntensity:.43,envMapRotation:new Yt(0,0,0),ambient:new ce(2385036),ambientIntensity:1.2,roughness:.9,color:new ce(16777215),armMap:this.assetsManager.get("tradingLightmap"),map:this.assetsManager.get("snow"),mapTransformRepeat:new me(15,15),mapTransformOffset:new me(0,0),mapTransformRotation:0,map2:this.assetsManager.get("rock"),map2TransformRepeat:new me(30,30),map2TransformOffset:new me(0,0),map2TransformRotation:0,mixMap:this.assetsManager.get("snowRockMix"),fogNear:.01,fogFar:30},this.mountainsConfig.map.wrapS=this.mountainsConfig.map.wrapT=mt,this.mountainsConfig.map2.wrapS=this.mountainsConfig.map2.wrapT=mt}beforeEnter(e){super.beforeEnter(e),E.webgl.mainScene.mountains.mountainMaterial.applyConfig(this.mountainsConfig),X.uLightColor.value.copy(In[this.key][0]),X.uDarkColor.value.copy(In[this.key][1]),E.webgl.mainScene.mountains.add(this.particles)}afterLeave(){super.afterLeave(),E.webgl.mainScene.mountains.remove(this.particles)}},TT=class extends As{constructor(){super(Oe.WHO_WE_ARE,{camera:{withCurve:!1,lookAt:new L},scene:{cloudsVisible:!1,mountainsVisible:!1,seaVisible:!1,skyVisible:!0}})}beforeEnter(e){super.beforeEnter(e),X.uPage.value=-1}};const ET="/",bT="/trading",wT="/capital",DT="/maritime",AT="/fort-energy",CT="/who-we-are",RT={Homepage:ET,Trading:bT,Capital:wT,Maritime:DT,FortEnergy:AT,WhoWeAre:CT},cn=RT,PT=Object.fromEntries(Object.entries(cn).map(([i,e])=>[e,i])),UT=55,LT={position:new L(0,0,100),lookAt:new L(0,0,0),withCurve:!0};class NT extends Ft{orbitControls;navigating=!1;#e=0;#t=new me;#n=new L;constructor(){super(UT,E.tools.viewport.ratio,1,1e3),this.targetPosition=new L,this.targetLookAt=new L,this.navigationTargetLookAt=new L,this.chapterPosition=new L,this.chapterLookAt=new L,this.parallaxIntensity=1,this.secondyCamera=new Ft(5,E.tools.viewport.ratio,.2,200),this.tertiaryCamera=new Ft(35,E.tools.viewport.ratio,.1,500),E.state.on(he.MANIFEST_LOADED,this.#i),E.state.on(he.DETACH,this.#s),E.state.on(he.DESTROY,this.#r)}#i=e=>{if(e!=="global")return;const t=E.core.assetsManager.get("mountains"),n=t.getObjectByName("CameraPath")?.removeFromParent(),s=t.getObjectByName("TargetPath")?.removeFromParent(),r=t.getObjectByName("TargetPath-Mobile")?.removeFromParent();n&&s&&(this.curve=Ks(n.geometry),this.lookAtCurve=Ks(s.geometry),this.lookAtPoints=en.map((o,a)=>this.lookAtCurve.getPoint(a/(en.length-1))),this.lookAtCurveMobile=Ks(r.geometry),this.lookAtPointsMobile=en.map((o,a)=>this.lookAtCurveMobile.getPoint(a/(en.length-1)))),E.debug?.mapping.add(this,"Camera"),E.state.on(he.RESIZE,this.#a),E.state.on(he.TICK,this.#o)};#s=()=>{E.debug?.mapping.remove(this),E.state.off(he.RESIZE,this.#a),E.state.off(he.TICK,this.#o)};#r=()=>{E.state.off(he.ATTACH,this.#i),E.state.off(he.DETACH,this.#s),E.state.off(he.DESTROY,this.#r)};#o=({dt:e})=>{this.orbitControls||(this.position.copy(this.targetPosition).add(this.chapterPosition),this.position.y+=X.uLongpress.value*20,this.lookAt(this.#n.addVectors(this.navigating?this.navigationTargetLookAt:this.targetLookAt,this.chapterLookAt)),!E.tools.mouse.isTouch&&(this.#t.lerp(E.tools.mouse.coordinates.webgl,e*.5),this.translateX(this.#t.x*.1*this.parallaxIntensity),this.translateY(this.#t.y*.2*this.parallaxIntensity),this.rotateY(-this.#t.x*.05*this.parallaxIntensity),this.rotateX(this.#t.y*.05*this.parallaxIntensity),this.secondyCamera.updateMatrixWorld()))};parallaxTertiary(){this.tertiaryCamera.translateX(this.#t.x*.1*this.parallaxIntensity),this.tertiaryCamera.translateY(this.#t.y*.2*this.parallaxIntensity),this.tertiaryCamera.rotateY(-this.#t.x*.05*this.parallaxIntensity),this.tertiaryCamera.rotateX(this.#t.y*.05*this.parallaxIntensity)}getNavigationLookAt(e){return(E.tools.viewport.breakpoint==="mobile"?this.lookAtPointsMobile:this.lookAtPoints)[e]}#a=({ratio:e})=>{this.aspect=e,this.updateProjectionMatrix(),this.secondyCamera.aspect=e,this.secondyCamera.updateProjectionMatrix(),this.tertiaryCamera.aspect=e,this.tertiaryCamera.updateProjectionMatrix()};applyPreset(e={},t){e={...LT,...e},this.chapterPosition.setScalar(0),this.chapterLookAt.setScalar(0),e.withCurve&&typeof t=="number"?this.curveProgress=t:(this.targetPosition=e.position,this.targetLookAt=e.lookAt)}set curveProgress(e){this.#e=e,this.curve?.getPoint(e/4,this.targetPosition);const t=this.getNavigationLookAt(Math.floor(e)),n=this.getNavigationLookAt(Math.floor(e)+1)||t;this.targetLookAt.lerpVectors(t,n,e%1)}get curveProgress(){return this.#e}}class IT extends at{constructor(e){super(),this.mountain=e.getObjectByName("Mountain"),this.mountain.layers.enable(Sh.MOUNTAIN),this.mountainMaterial=this.mountain.material,this.mountain.renderOrder=0,this.add(this.mountain)}}class FT extends Tt{constructor(e){const t=[],n=[],s=[],r=new L(1,40,0);e.children.forEach(l=>{for(let c=0;c<6;c++)t.push(l.position.x,l.position.y+80,l.position.z);n.push(-r.x,-r.y,0),n.push(r.x,r.y,0),n.push(-r.x,r.y,0),n.push(-r.x,-r.y,0),n.push(r.x,-r.y,0),n.push(r.x,r.y,0),s.push(0,0),s.push(1,1),s.push(0,1),s.push(0,0),s.push(1,0),s.push(1,1)});const o=new Qt;o.setAttribute("position",new Ot(new Float32Array(t),3)),o.setAttribute("offset",new Ot(new Float32Array(n),3)),o.setAttribute("uv",new Ot(new Float32Array(s),2));const a=new Bh;super(o,a),this.renderOrder=-10}}const OT={cloudsVisible:!1,mountainsVisible:!0,seaVisible:!1,skyVisible:!0,flaresVisible:!1};class ho extends N0{static quadGeometry=new oi(2,2).deleteAttribute("normal");constructor(){super(),E.state.on(he.MANIFEST_LOADED,this.#e),E.state.on(he.DETACH,this.#t),E.state.on(he.DESTROY,this.#n),this.background=new ce(0)}#e=e=>{if(e!=="global")return;E.debug?.mapping.add(this,"Outliner",2),this.environment=Jx(E.webgl.renderer,E.core.assetsManager.get("envMap"));const t=E.core?.assetsManager.get("mountains");ai(t),this.mountains=new IT(t),this.initialMountainsPosition=this.mountains.position.clone(),this.sun=t.getObjectByName("CapitalSun"),this.sky=t.getObjectByName("Skybox"),this.flares=new Tt(ho.quadGeometry,new Ah(this.sun)),this.flares.renderOrder=1/0,this.flares.frustumCulled=!1,this.transitionClouds=new Tt(ho.quadGeometry,new Oh),this.transitionClouds.renderOrder=1/0,this.transitionClouds.frustumCulled=!1,this.clouds=t.getObjectByName("Clouds"),this.transitionLines=new FT(t.getObjectByName("TransitionLines")),this.add(this.mountains,this.flares,this.transitionClouds,this.transitionLines,this.sky,this.clouds)};#t=()=>{E.debug?.mapping.remove(this)};#n=()=>{E.state.off(he.ATTACH,this.#e),E.state.off(he.DETACH,this.#t),E.state.off(he.DESTROY,this.#n),bh(this)};applyPreset(e={},t){e={...OT,...e},this.mountains.visible=e.mountainsVisible,this.clouds.visible=e.cloudsVisible,this.sky.visible=e.skyVisible,this.flares.visible=e.flaresVisible,typeof t=="number"&&(X.uPage.value=t)}}class BT{camera;mesh;renderTarget1;renderTarget2;frameIndex=0;previousRt;realVelocity=new me;rtBlade;constructor(e=new me(512,512)){this.mesh=this.createMesh(),this.camera=new mo(-1,1,1,-1,0,1),this.renderTarget1=this.createRenderTarget(e.x,e.y),this.renderTarget2=this.createRenderTarget(e.x,e.y),E.debug?.mapping.add(this,"MouseComputation")}createMesh(){const e=new Qt().setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new Jt([0,2,0,0,2,0],2)),t=new Ih({uniforms:{tLast:{value:null},uMouse:{value:E.tools.mouse.coordinates.webgl.clone()},uMouseVelocity:{value:new me},tNoise:{value:E.core.assetsManager.get("noise")},uTime:X.uTime},dithering:!0});return new Tt(e,t)}createRenderTarget(e,t){return new si(e,t,{type:Zt})}update(e){const t=this.mesh.material.uniforms.uMouse.value,n=E.tools.mouse.coordinates.webgl;this.realVelocity.subVectors(n,t),this.mesh.material.uniforms.uMouseVelocity.value.lerp(this.realVelocity,e*2),this.mesh.material.uniforms.uMouse.value.lerp(n,e*3),this.previousRt=E.webgl.renderer.getRenderTarget(),this.frameIndex++%2===0?(E.webgl.renderer.setRenderTarget(this.renderTarget1),this.mesh.material.uniforms.tLast.value=this.renderTarget2.texture):(E.webgl.renderer.setRenderTarget(this.renderTarget2),this.mesh.material.uniforms.tLast.value=this.renderTarget1.texture),E.webgl.renderer.clear(),E.webgl.renderer.render(this.mesh,this.camera),E.webgl.renderer.setRenderTarget(this.previousRt),this.rtBlade?.update(E.webgl.renderer,this.camera)}get texture(){return this.renderTarget1.texture}get renderTarget(){return this.renderTarget2}}class kT extends L0{constructor(){super({antialias:!1,powerPreference:"high-performance",canvas:E.$canvas}),pt.enabled=!0,this.autoClear=!1,this.debug.checkShaderErrors=Th,this.setClearColor(new ce(16777215),0),E.state.on(he.ATTACH,this.#e),E.state.on(he.DETACH,this.#t),E.state.on(he.DESTROY,this.#n)}#e=()=>{E.state.on(he.RESIZE,this.#i),E.debug?.mapping.add(this,"Renderer")};#t=()=>{E.state.off(he.RESIZE,this.#i),E.debug?.mapping.remove(this)};#n=()=>{E.state.off(he.ATTACH,this.#e),E.state.off(he.DETACH,this.#t),E.state.off(he.DESTROY,this.#n),this.dispose()};#i=({width:e,height:t,dpr:n})=>{this.setSize(e,t),this.setPixelRatio(n)}}class VT{drag;transitionHero;transitionHeroInner;hero;loadingTimeout;SHOW_SPINNER_DELAY=250;transitionTl;closestIndex=0;currentIndex=0;attached=!1;longpressTl;navigating=!1;constructor(){this.drag={min:0,max:en.length-1,multiplier:1.5,friction:.9,invertInertia:1,snapSpeed:2,last:new me,pos:new me,lerpedPos:new me,velocity:new me,active:!1},this.transitionHero=document.querySelector(".hero-transition"),this.transitionHeroInner=document.querySelector(".hero-transition .inner")}init(){this.transitionTl=this.createTransitionTimeline();const e=en.indexOf(E.webgl.getPage(window.location.pathname)?.key);e>-1&&(this.currentIndex=this.closestIndex=e,this.hero=document.querySelector(".hero"),this.progress=e,this.attach(),this.longpressTl=this.createLongpressTimeline())}beforePreparation(){this.navigating=!0}beforeSwap(e,t){const n=en.indexOf(E.webgl.getPage(e.to.pathname)?.key);if(n>-1){if(this.currentIndex=this.closestIndex=n,this.hero=e.newDocument.querySelector(".hero"),t||(this.hero.style.opacity="0"),e.info==="drag")return;this.progress=n,this.attach()}else this.detach()}beforeEnter(e){if(this.attached){const t=this.transitionHero;this.transitionHero=document.querySelector(".hero-transition"),this.transitionHeroInner=document.querySelector(".hero-transition .inner"),this.transitionHero?.addEventListener("mousedown",this.onPointerDown),this.transitionHero?.addEventListener("touchstart",this.onPointerDown,{passive:!0}),clearTimeout(this.loadingTimeout),this.transitionHero?.querySelector(`.title:nth-child(${this.currentIndex+1}) .spinner`)?.classList.remove("loading"),this.navigating=!1,this.longpressTl?.kill(),this.longpressTl=this.createLongpressTimeline(),e||this.longpressTl?.progress(1).reverse(),this.transitionHero!==t&&(this.transitionTl?.kill(),this.transitionTl=this.createTransitionTimeline())}}attach(){this.attached||(this.attached=!0,this.transitionHero?.addEventListener("mousedown",this.onPointerDown),this.transitionHero?.addEventListener("touchstart",this.onPointerDown,{passive:!0}),window.addEventListener("mousemove",this.onPointerMove),window.addEventListener("touchmove",this.onPointerMove,{passive:!1}),window.addEventListener("mouseup",this.onPointerUp),window.addEventListener("touchend",this.onPointerUp),E.state.on(he.TICK,this.onTick))}detach(){this.attached&&(this.attached=!1,this.transitionHero?.removeEventListener("mousedown",this.onPointerDown),this.transitionHero?.removeEventListener("touchstart",this.onPointerDown),window.removeEventListener("mousemove",this.onPointerMove),window.removeEventListener("touchmove",this.onPointerMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchend",this.onPointerUp),E.state.off(he.TICK,this.onTick))}onPointerDown=e=>{if(e instanceof MouseEvent&&e.buttons!==1||(this.drag.active=!0,this.navigating))return;window.scrollY===0&&this.longpressTl?.play();let t,n;e instanceof MouseEvent?(t=e.clientX,n=e.clientY):(t=e.targetTouches[0].clientX,n=e.targetTouches[0].clientY),e.targetTouches||Nn.scrollManager.lenis.stop(),this.drag.last.x=t/E.tools.viewport.width*this.drag.multiplier,this.drag.last.y=n};onPointerMove=e=>{if(!this.drag.active||window.scrollY>0)return;let t,n;e instanceof MouseEvent?(t=e.clientX,n=e.clientY):(t=e.targetTouches[0].clientX,n=e.targetTouches[0].clientY),t=t/E.tools.viewport.width*this.drag.multiplier;const s=t-this.drag.last.x,r=n-this.drag.last.y;if(e.targetTouches)if(Math.abs(r)<10&&Math.abs(s)>0&&window.scrollY===0)Nn.scrollManager.lenis.stop(),e.preventDefault();else return;this.drag.pos.x-=s,this.drag.velocity.x=s,this.drag.last.x=t,this.drag.last.y=n};onPointerUp=()=>{this.drag.active=!1,this.closestIndex=Math.round(this.drag.pos.x),this.closestIndex===this.currentIndex&&(this.longpressTl?.reverse(),Nn.scrollManager.lenis.start())};onTick=({dt:e})=>{this.drag.active||(this.drag.pos.x-=this.drag.velocity.x,this.drag.pos.x=uo(this.drag.pos.x,this.closestIndex,e*this.drag.snapSpeed),this.drag.velocity.x*=this.drag.friction,this.closestIndex=Math.round(this.drag.pos.x),this.closestIndex!==this.currentIndex&&!this.longpressTl?.isActive()&&this.longpressTl?.play(),this.closestIndex!==this.currentIndex&&Math.abs(this.drag.lerpedPos.x-this.closestIndex)<.01&&!this.navigating&&(this.navigating=!0,this.loadingTimeout=setTimeout(()=>{this.transitionHero?.querySelector(`.title:nth-child(${this.closestIndex+1}) .spinner`)?.classList.add("loading")},this.SHOW_SPINNER_DELAY),ad(cn[en[this.closestIndex]],{info:"drag"}))),this.drag.pos.x=Un(this.drag.pos.x,this.drag.min,this.drag.max),this.drag.lerpedPos.x=uo(this.drag.lerpedPos.x,this.drag.pos.x,e*this.drag.invertInertia),this.transitionTl?.time(this.drag.lerpedPos.x),window.scrollY>0&&!this.longpressTl?.reversed()&&this.longpressTl?.reverse()};createTransitionTimeline(){if(!this.transitionHero||!this.transitionHeroInner)return;const e=Array.from(this.transitionHeroInner.querySelectorAll(".title"))||[];Je.set(e[0],{opacity:1}),Je.set(e.slice(1),{opacity:.5});const t=Je.timeline({paused:!0});return t.fromTo(E.webgl.camera,{curveProgress:0},{curveProgress:1,duration:1,ease:"none"},0),t.fromTo(this.transitionHero,{"--slide-progress":0},{"--slide-progress":1,duration:1,ease:"none"},0),t.fromTo(X.uSlideshowProgress,{value:0},{value:1,duration:1,ease:"none"},0),en.slice(1).forEach((n,s)=>{en[s+1]&&(t.to(E.webgl.camera,{curveProgress:s+2,duration:1,ease:"none"},s+1),t.to(this.transitionHero,{"--slide-progress":s+2,duration:1,ease:"none"},s+1),t.to(X.uSlideshowProgress,{value:s+2,duration:1,ease:"none"},s+1),t.to(e[s],{opacity:.5,duration:.5,ease:"power1.out"},s+.5),t.to(e[s+1],{opacity:1,duration:.5,ease:"power1.out"},s))}),t}createLongpressTimeline(){if(!this.transitionHero||!this.transitionHeroInner||!this.hero)return;const e=Je.timeline({paused:!0});return e.fromTo(X.uTransitionDirection,{value:1},{value:0,duration:.001},0),e.fromTo(X.uTransition,{value:0},{value:1,duration:3,ease:"power2.inOut"},0),e.fromTo(X.uLongpress,{value:0},{value:1,duration:2,ease:"power1.inOut"},0),e.fromTo(this.hero,{opacity:1},{opacity:0,duration:.5},0),e.fromTo(this.transitionHero,{opacity:0},{opacity:1,duration:.7},">"),e.add(()=>{e.reversed()&&(X.uTransitionDirection.value=1)},3),e}createNavigationTimeline(e){const t=Je.timeline(),n=Math.max(5,Math.abs(this.currentIndex-e)*2);this.longpressTl&&(!this.longpressTl.isActive()||this.longpressTl?.reversed())&&this.longpressTl.play();const s=E.webgl.camera.targetLookAt,r=E.webgl.camera.getNavigationLookAt(e);return t.set(E.webgl.camera,{navigating:!0},0),t.fromTo(E.webgl.camera.navigationTargetLookAt,{x:s.x,y:s.y,z:s.z},{x:r.x,y:r.y,z:r.z,duration:n,ease:"power1.inOut"},0),t.to(this,{progress:e,duration:n,ease:"power2.inOut"},0),t.add(()=>{this.loadingTimeout=setTimeout(()=>{this.transitionHero?.querySelector(`.title:nth-child(${e+1}) .spinner`)?.classList.add("loading")},this.SHOW_SPINNER_DELAY)}),t.set(E.webgl.camera,{navigating:!1}),t}set progress(e){this.drag.pos.x=e,this.drag.lerpedPos.x=e}get progress(){return this.drag.lerpedPos.x}}const zT=Object.assign({"./Pages/Capital.js":_T,"./Pages/FortEnergy.js":xT,"./Pages/Homepage.js":yT,"./Pages/Maritime.js":MT,"./Pages/Trading.js":ST,"./Pages/WhoWeAre.js":TT});class HT{constructor(){this.lerpedMouse=new me,this.renderer=new kT,this.mainScene=new ho,this.transitionSlideshow=new VT,this.pages=Object.fromEntries(Object.entries(zT).map(([n,s])=>[n.split("/").pop()?.split(".").shift(),s]).map(([n,s])=>[n,new s(n)]));const e=Object.keys(cn);this.currentPage=this.getPage(window.location.pathname);const t=e[e.indexOf(this.currentPage?.key)+1];this.nextPage=t?this.pages[t]:null,this.camera=new NT,E.state.on(he.ATTACH,this.#t),E.state.on(he.MANIFEST_LOADED,this.#e),E.state.on(he.DETACH,this.#n),E.state.on(he.DESTROY,this.#i)}#e=e=>{e==="global"&&(E.state.off(he.MANIFEST_LOADED,this.#e),E.tools.mouse.isTouch||(this.mouseComputation=new BT))};#t=()=>{this.lerpedMouse.copy(E.tools.mouse.coordinates.webgl),Object.values(this.pages).forEach(e=>e.init?.()),this.scrollProgress=this.lerpedScrollProgress=window.scrollY,this.currentPage?.beforeEnter(),this.currentPage?.afterEnter?.(),this.transitionSlideshow.init(),E.$wrapper.prepend(this.renderer.domElement),E.state.on(he.RESIZE,this.#s),E.state.on(he.BEFORE_TICK,this.#r),E.state.on(he.RENDER,this.onRender)};#n=()=>{this.renderer.domElement.remove(),E.state.off(he.RESIZE,this.#s),E.state.off(he.BEFORE_TICK,this.#r),E.state.off(he.RENDER,this.onRender)};#i=()=>{E.state.off(he.ATTACH,this.#t),E.state.off(he.DETACH,this.#n),E.state.off(he.DESTROY,this.#i)};#s=()=>{this.onRender()};#r=({et:e,dt:t})=>{X.uTime.value=e,this.lerpedMouse.lerp(E.tools.mouse.coordinates.webgl,t*3),this.scrollProgress=Math.max(0,window.scrollY),Math.abs(this.scrollProgress-this.lerpedScrollProgress)>1e-4&&(this.lerpedScrollProgress=uo(this.lerpedScrollProgress,this.scrollProgress,t*2));const n=this.scrollProgress-(this.previousScrollProgress||this.scrollProgress);this.absoluteScrollProgress=(this.absoluteScrollProgress||0)+Math.abs(n),this.previousScrollProgress=this.scrollProgress,X.uScrollProgress.value=this.lerpedScrollProgress/E.tools.viewport.height,X.uAbsScrollProgress.value=this.absoluteScrollProgress/E.tools.viewport.height,this.mouseComputation?.update(t)};onRender=()=>{this.currentPage&&(E.debug?.stats.instance.begin(),this.renderer.clear(),this.renderer.render(this.mainScene,this.camera),E.debug?.stats.instance.end(),E.debug?.stats.instance.update())};getPage(e){let t=e.replace(/^\/experiment_monica_clinic_website(?=\/|$)/,"").replace(/\/$/,"");t===""&&(t="/");const n=PT[t];return this.pages[n]}setNextPage(e){const t=this.getPage(e);return this.nextPage=t,t}afterSwap(){this.currentPage=this.nextPage,this.nextPage=null,this.currentPage?E.$wrapper.prepend(this.renderer.domElement):this.renderer.domElement.remove(),this.scrollProgress=this.lerpedScrollProgress=window.scrollY}}let Bt=null;const Xh="on";class Yh{#e=new Map;#t={fps:1/0};constructor(e={}){const t=Object.fromEntries(Object.entries(e).map(([n,s])=>[s,`${Xh}${n.toLowerCase().split("_").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join("")}`]));this.eventsMapValues=Object.values(t),this.eventsMapKey=Object.fromEntries(Object.entries(t).map(n=>[n[1],parseInt(n[0])]))}register(e,t={}){xu(e).forEach(n=>{this.eventsMapValues.includes(n)&&this.on(this.eventsMapKey[n],e[n],t,e)})}unregister(e){xu(e).forEach(t=>{this.eventsMapValues.includes(t)&&this.off(this.eventsMapKey[t],e[t],e)})}on(e,t,n={},s=this){this.#e.has(e)||this.#e.set(e,new Set),this.#e.get(e).add({fn:t,options:{...this.#t,...n},instance:s,lastUpdateEt:0})}off(e,t,n=this){if(this.#e.has(e))for(Bt of this.#e.get(e))Bt.fn===t&&Bt.instance===n&&this.#e.get(e).delete(Bt)}emit(e,...t){if(this.#e.has(e))for(Bt of this.#e.get(e))Bt.fn.call(Bt.instance,...t)}emitThrottle(e,t,...n){if(this.#e.has(e))for(Bt of this.#e.get(e))Bt.options?.fps&&Bt.options.fps!==1/0?t.et-Bt.lastUpdateEt>=1/Bt.options.fps&&(Bt.fn.call(Bt.instance,t,...n),Bt.lastUpdateEt=t.et):Bt.fn.call(Bt.instance,t,...n)}}const GT=(i,e)=>!("get"in Object.getOwnPropertyDescriptor(i,e))&&typeof i[e]=="function",xu=(i,e=!1)=>{const t=Object.getOwnPropertyNames(i);let n=Object.getPrototypeOf(i);const s=Object.getPrototypeOf({});for(;n&&(e||n!==s);){for(const r of Object.getOwnPropertyNames(n))t.indexOf(r)===-1&&GT(n,r)&&t.push(r);n=Object.getPrototypeOf(n)}return t.filter(r=>r.startsWith(Xh))};class qh{#e;#t;constructor(){this.#e=new Map,this.#t=new Map}get(e){return this.#e.get(e)}set(e,t){return t!==this.#e.get(e)&&(this.#e.set(e,t),this.#t.get(e)?.forEach(n=>n.call(this,t))),this.get(e)}watch(e,t){this.#t.has(e)?this.#t.get(e).add(t):this.#t.set(e,new Set().add(t))}stopWatch(e,t){if(!this.#t.has(e))return;this.#t.get(e).delete(t)}watching(e){return this.#t.has(e)}}let WT=class jh{static instance;resolveLoading;state;store;loading;$wrapper;$canvas;tools;core;webgl;debug;constructor(){this.state=new Yh(he),this.store=new qh,this.loading=new Promise(e=>{this.resolveLoading=e})}async init(e,t){this.$wrapper=e,this.$canvas=t,this.tools=Px(),this.core=wx(),this.webgl=new HT,this.beforeLoad(),await this.load(),this.resolveLoading()}beforeLoad(){this.debug?.mapping.add(this.state,"State"),this.debug?.mapping.add(this.store,"Store")}async load(){await this.core.assetsManager.load(),await this.webgl.currentPage?.load()}static getInstance(){return this.instance||(this.instance=new jh),this.instance}};const E=WT.getInstance();class qt{constructor(e,t){this.el=e,this.params=t,this.open=this.open?.bind(this),this.close=this.close?.bind(this),this.timeline=this.timeline?.bind(this),this.resize=this.resize.bind(this)}st;openTl;closeTl;attach(){this.createScrollTrigger(),E.state.on(he.RESIZE,this.resize)}detach(){E.state.off(he.RESIZE,this.resize),this.st?.kill(),this.openTl?.revert().kill(),this.closeTl?.revert().kill()}open(e=!1){this.openTl?.revert().kill();const t=Je.timeline();return this.openTl=t,t}close(e=!1){this.closeTl?.revert().kill();const t=Je.timeline();return this.closeTl=t,t}resize(){this.st?.refresh()}refresh(){this.st?.refresh()}createScrollTrigger(){this.st?.kill(),this.st=new Si({trigger:this.el,onEnter:this.open?.bind(this,!1),onLeave:this.close?.bind(this,!1),start:this.params?.start,end:this.params?.end,once:!!this.params?.once,scrub:!!this.params?.scrub,animation:this.timeline?.(),markers:Th})}}/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var XT=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function $h(i){var e=i.nodeType,t="";if(e===1||e===9||e===11){if(typeof i.textContent=="string")return i.textContent;for(i=i.firstChild;i;i=i.nextSibling)t+=$h(i)}else if(e===3||e===4)return i.nodeValue;return t}/*!
 * SplitText: 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rs,ol,Kh,Hs,Zh,_o,YT=/(?:\r|\n|\t\t)/g,qT=/(?:\s\s+)/g,jT=" ",Jh=function(e){rs=document,ol=window,Hs=Hs||e||ol.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),Hs&&(_o=Hs.utils.toArray,Zh=Hs.core.context||function(){},Kh=1)},Qh=function(e){return ol.getComputedStyle(e)},Nl=function(e){return e.position==="absolute"||e.absolute===!0},$T=function(e,t){for(var n=t.length,s;--n>-1;)if(s=t[n],e.substr(0,s.length)===s)return s.length},KT=" style='position:relative;display:inline-block;'",yu=function(e,t){e===void 0&&(e="");var n=~e.indexOf("++"),s=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+KT+(e?" class='"+e+(n?s++:"")+"'>":">")}},ed=function i(e,t,n){var s=e.nodeType;if(s===1||s===9||s===11)for(e=e.firstChild;e;e=e.nextSibling)i(e,t,n);else(s===3||s===4)&&(e.nodeValue=e.nodeValue.split(t).join(n))},fa=function(e,t){for(var n=t.length;--n>-1;)e.push(t[n])},Mu=function(e,t,n){for(var s;e&&e!==t;){if(s=e._next||e.nextSibling,s)return s.textContent.charAt(0)===n;e=e.parentNode||e._parent}},ZT=function i(e){var t=_o(e.childNodes),n=t.length,s,r;for(s=0;s<n;s++)r=t[s],r._isSplit?i(r):s&&r.previousSibling&&r.previousSibling.nodeType===3?(r.previousSibling.nodeValue+=r.nodeType===3?r.nodeValue:r.firstChild.nodeValue,e.removeChild(r)):r.nodeType!==3&&(e.insertBefore(r.firstChild,r),e.removeChild(r))},Cn=function(e,t){return parseFloat(t[e])||0},JT=function(e,t,n,s,r,o,a){var l=Qh(e),c=Cn("paddingLeft",l),u=-999,h=Cn("borderBottomWidth",l)+Cn("borderTopWidth",l),d=Cn("borderLeftWidth",l)+Cn("borderRightWidth",l),p=Cn("paddingTop",l)+Cn("paddingBottom",l),v=Cn("paddingLeft",l)+Cn("paddingRight",l),x=Cn("fontSize",l)*(t.lineThreshold||.2),g=l.textAlign,m=[],b=[],S=[],C=t.wordDelimiter||" ",F=t.tag?t.tag:t.span?"span":"div",U=t.type||t.split||"chars,words,lines",P=r&&~U.indexOf("lines")?[]:null,V=~U.indexOf("words"),te=~U.indexOf("chars"),y=Nl(t),A=t.linesClass,Z=~(A||"").indexOf("++"),K=[],ee=l.display==="flex",le=e.style.display,z,se,$,W,ye,Me,Fe,ke,Q,ne,pe,_e;for(Z&&(A=A.split("++").join("")),ee&&(e.style.display="block"),se=e.getElementsByTagName("*"),$=se.length,ye=[],z=0;z<$;z++)ye[z]=se[z];if(P||y)for(z=0;z<$;z++)W=ye[z],Me=W.parentNode===e,(Me||y||te&&!V)&&(_e=W.offsetTop,P&&Me&&Math.abs(_e-u)>x&&(W.nodeName!=="BR"||z===0)&&(Fe=[],P.push(Fe),u=_e),y&&(W._x=W.offsetLeft,W._y=_e,W._w=W.offsetWidth,W._h=W.offsetHeight),P&&((W._isSplit&&Me||!te&&Me||V&&Me||!V&&W.parentNode.parentNode===e&&!W.parentNode._isSplit)&&(Fe.push(W),W._x-=c,Mu(W,e,C)&&(W._wordEnd=!0)),W.nodeName==="BR"&&(W.nextSibling&&W.nextSibling.nodeName==="BR"||z===0)&&P.push([])));for(z=0;z<$;z++){if(W=ye[z],Me=W.parentNode===e,W.nodeName==="BR"){P||y?(W.parentNode&&W.parentNode.removeChild(W),ye.splice(z--,1),$--):V||e.appendChild(W);continue}if(y&&(Q=W.style,!V&&!Me&&(W._x+=W.parentNode._x,W._y+=W.parentNode._y),Q.left=W._x+"px",Q.top=W._y+"px",Q.position="absolute",Q.display="block",Q.width=W._w+1+"px",Q.height=W._h+"px"),!V&&te)if(W._isSplit)for(W._next=se=W.nextSibling,W.parentNode.appendChild(W);se&&se.nodeType===3&&se.textContent===" ";)W._next=se.nextSibling,W.parentNode.appendChild(se),se=se.nextSibling;else W.parentNode._isSplit?(W._parent=W.parentNode,!W.previousSibling&&W.firstChild&&(W.firstChild._isFirst=!0),W.nextSibling&&W.nextSibling.textContent===" "&&!W.nextSibling.nextSibling&&K.push(W.nextSibling),W._next=W.nextSibling&&W.nextSibling._isFirst?null:W.nextSibling,W.parentNode.removeChild(W),ye.splice(z--,1),$--):Me||(_e=!W.nextSibling&&Mu(W.parentNode,e,C),W.parentNode._parent&&W.parentNode._parent.appendChild(W),_e&&W.parentNode.appendChild(rs.createTextNode(" ")),F==="span"&&(W.style.display="inline"),m.push(W));else W.parentNode._isSplit&&!W._isSplit&&W.innerHTML!==""?b.push(W):te&&!W._isSplit&&(F==="span"&&(W.style.display="inline"),m.push(W))}for(z=K.length;--z>-1;)K[z].parentNode.removeChild(K[z]);if(P){for(y&&(ne=rs.createElement(F),e.appendChild(ne),pe=ne.offsetWidth+"px",_e=ne.offsetParent===e?0:e.offsetLeft,e.removeChild(ne)),Q=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(ke=C===" "&&(!y||!V&&!te),z=0;z<P.length;z++){for(Fe=P[z],ne=rs.createElement(F),ne.style.cssText="display:block;text-align:"+g+";position:"+(y?"absolute;":"relative;"),A&&(ne.className=A+(Z?z+1:"")),S.push(ne),$=Fe.length,se=0;se<$;se++)Fe[se].nodeName!=="BR"&&(W=Fe[se],ne.appendChild(W),ke&&W._wordEnd&&ne.appendChild(rs.createTextNode(" ")),y&&(se===0&&(ne.style.top=W._y+"px",ne.style.left=c+_e+"px"),W.style.top="0px",_e&&(W.style.left=W._x-_e+"px")));$===0?ne.innerHTML="&nbsp;":!V&&!te&&(ZT(ne),ed(ne," "," ")),y&&(ne.style.width=pe,ne.style.height=W._h+"px"),e.appendChild(ne)}e.style.cssText=Q}y&&(a>e.clientHeight&&(e.style.height=a-p+"px",e.clientHeight<a&&(e.style.height=a+h+"px")),o>e.clientWidth&&(e.style.width=o-v+"px",e.clientWidth<o&&(e.style.width=o+d+"px"))),ee&&(le?e.style.display=le:e.style.removeProperty("display")),fa(n,m),V&&fa(s,b),fa(r,S)},QT=function(e,t,n,s){var r=t.tag?t.tag:t.span?"span":"div",o=t.type||t.split||"chars,words,lines",a=~o.indexOf("chars"),l=Nl(t),c=t.wordDelimiter||" ",u=function(y){return y===c||y===jT&&c===" "},h=c!==" "?"":l?"&#173; ":" ",d="</"+r+">",p=1,v=t.specialChars?typeof t.specialChars=="function"?t.specialChars:$T:null,x,g,m,b,S,C,F,U,P=rs.createElement("div"),V=e.parentNode;for(V.insertBefore(P,e),P.textContent=e.nodeValue,V.removeChild(e),e=P,x=$h(e),F=x.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(x=x.replace(qT," ").replace(YT,"")),F&&(x=x.split("<").join("{{LT}}")),S=x.length,g=(x.charAt(0)===" "?h:"")+n(),m=0;m<S;m++)if(C=x.charAt(m),v&&(U=v(x.substr(m),t.specialChars)))C=x.substr(m,U||1),g+=a&&C!==" "?s()+C+"</"+r+">":C,m+=U-1;else if(u(C)&&!u(x.charAt(m-1))&&m){for(g+=p?d:"",p=0;u(x.charAt(m+1));)g+=h,m++;m===S-1?g+=h:x.charAt(m+1)!==")"&&(g+=h+n(),p=1)}else C==="{"&&x.substr(m,6)==="{{LT}}"?(g+=a?s()+"{{LT}}</"+r+">":"{{LT}}",m+=5):C.charCodeAt(0)>=55296&&C.charCodeAt(0)<=56319||x.charCodeAt(m+1)>=65024&&x.charCodeAt(m+1)<=65039?(b=((x.substr(m,12).split(XT)||[])[1]||"").length||2,g+=a&&C!==" "?s()+x.substr(m,b)+"</"+r+">":x.substr(m,b),m+=b-1):g+=a&&C!==" "?s()+C+"</"+r+">":C;e.outerHTML=g+(p?d:""),F&&ed(V,"{{LT}}","<")},eE=function i(e,t,n,s){var r=_o(e.childNodes),o=r.length,a=Nl(t),l,c;if(e.nodeType!==3||o>1){for(t.absolute=!1,l=0;l<o;l++)c=r[l],c._next=c._isFirst=c._parent=c._wordEnd=null,(c.nodeType!==3||/\S+/.test(c.nodeValue))&&(a&&c.nodeType!==3&&Qh(c).display==="inline"&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,i(c,t,n,s));t.absolute=a,e._isSplit=!0;return}QT(e,t,n,s)},ki=function(){function i(t,n){Kh||Jh(),this.elements=_o(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=n||{},Zh(this),this.split(n)}var e=i.prototype;return e.split=function(n){this.isSplit&&this.revert(),this.vars=n=n||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var s=this.elements.length,r=n.tag?n.tag:n.span?"span":"div",o=yu(n.wordsClass,r),a=yu(n.charsClass,r),l,c,u;--s>-1;)u=this.elements[s],this._originals[s]={html:u.innerHTML,style:u.getAttribute("style")},l=u.clientHeight,c=u.clientWidth,eE(u,n,o,a),JT(u,n,this.chars,this.words,this.lines,c,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var n=this._originals;if(!n)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(s,r){s.innerHTML=n[r].html,s.setAttribute("style",n[r].style||"")}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},i.create=function(n,s){return new i(n,s)},i}();ki.version="3.12.7";ki.register=Jh;const td=[new FontFace("Century Gothic","url('/assets/fonts/CenturyGothic.woff2')",{weight:"400"}),new FontFace("Century Gothic","url('/assets/fonts/CenturyGothic-Bold.woff2')",{weight:"700"}),new FontFace("Josefin Sans","url('/assets/fonts/JosefinSans-Light.woff2')",{weight:"300"})];td.forEach(i=>document.fonts.add(i));const xo=Promise.all(td.map(i=>i.load()));class tE extends qt{splitText;constructor(e,t){super(e,t)}attach(){this.resize(),super.attach()}detach(){super.detach(),this.splitText?.revert()}async resize(){this.splitText?.revert(),await xo,this.splitText=new ki(this.el.querySelector(".title"),{type:"lines, chars"}),super.resize()}open(){const e=super.open(),t=this.el.querySelectorAll(".image-container img"),n=this.el.querySelectorAll(".fs-s2"),s=this.el.querySelectorAll(".address"),r=this.el.querySelectorAll(".left-container ul li, .bottom .fs-body-s"),o=this.el.querySelector(".line"),a=this.el.querySelectorAll(".items-contact-container");return this.splitText&&e.fromTo(this.splitText.chars,{opacity:0},{opacity:1,duration:1,ease:"linear",stagger:.1},0),e.fromTo(t,{scale:1.1},{scale:1,duration:1.6,ease:"immg.zoomOut",stagger:.15},.4),e.fromTo(n,{y:20},{y:0,duration:1.6,ease:"power2.out",stagger:.15},.6),e.fromTo(n,{opacity:0},{opacity:1,duration:1,ease:"linear",stagger:.15},1),e.fromTo(s,{y:20},{y:0,duration:1.6,ease:"power2.out",stagger:.15},.7),e.fromTo(s,{opacity:0},{opacity:1,duration:1,ease:"linear",stagger:.15},1.2),e.fromTo(o,{scaleX:0},{scaleX:1,duration:1.6,ease:"power2.inOut"},.7),e.fromTo(r,{opacity:0},{opacity:1,duration:1,ease:"linear",stagger:.15},.9),e.fromTo(a,{opacity:0},{opacity:1,duration:1,ease:"linear",stagger:.15},1.8),e}}class nE extends qt{constructor(e,t){t.scrub="true",super(e,t)}open(){if(window.innerWidth<768)return;const e=super.open();return e.fromTo(this.el,{y:"1.4em"},{y:0,ease:"power2.out",duration:1.6},.1),e.fromTo(this.el,{opacity:0},{opacity:1,duration:.8},"<"),e}}class iE extends qt{title;points;constructor(e,t){t.scrub="true",super(e,t),this.points=this.el.querySelectorAll("[data-point]"),this.title=this.el.querySelector("h2")}timeline(){const e=Je.timeline();return e.fromTo(this.points,{opacity:0},{opacity:1,stagger:{amount:.1},duration:.1},0),e.fromTo(this.title,{color:"#ffff"},{color:"#00263F",duration:.3},.7),e.to(this.points,{opacity:0,stagger:{amount:.1},duration:.1},.6),e}}class sE extends qt{logoMb;logoDk;logoPathsDk;scrollDownCta;scrollDownCtaInner;isOpen=!1;constructor(e,t){t.scrub="true",t.start="top 1px",super(e,t),this.logoDk=this.el.querySelector(".logo-dk"),this.logoPathsDk=Array.from(this.el.querySelectorAll(".logo-dk>path, .logo-dk>g")||[]).sort((n,s)=>{const r=n.getBoundingClientRect(),o=s.getBoundingClientRect();return r.left-o.left}),this.logoMb=this.el.querySelector(".logo-mb"),this.scrollDownCta=this.el.querySelector(".scroll-to-cta"),this.scrollDownCtaInner=this.el.querySelector(".scroll-to-cta-inner")}open(){if(this.isOpen)return;const e=super.open();return this.logoPathsDk&&e.fromTo(this.logoPathsDk,{opacity:0,y:"1em"},{opacity:1,y:0,ease:"immg.posIn",stagger:.075,duration:1.5},0),this.logoMb&&e.fromTo(this.logoMb,{opacity:0},{opacity:1,ease:"linear",duration:1},0),e.fromTo(this.scrollDownCta,{opacity:0},{opacity:1,duration:.5},.7),this.isOpen=!0,e}timeline(){const e=Je.timeline({paused:!0});return this.logoDk&&e.fromTo(this.logoDk,{opacity:1},{opacity:0,duration:.2},0),this.logoMb&&e.fromTo(this.logoMb,{opacity:1},{opacity:0,duration:.2},0),e.fromTo(this.scrollDownCtaInner,{opacity:1},{opacity:0,duration:.2},.1),e.add(()=>{},1),e}}class rE extends qt{constructor(e,t){super(e,t)}open(){const e=super.open(),t=this.el.querySelectorAll("img");return t.length>0&&e.fromTo(t,{scale:1.1},{scale:1,duration:1.2,ease:"immg.zoomOut",stagger:.02}),e}}class oE extends qt{constructor(e,t){super(e,t)}open(){if(window.innerWidth<768)return;const e=super.open();return e.fromTo(this.el,{scaleX:0},{scaleX:1,ease:"immg.posIn",duration:2},.1),e}}class aE extends qt{constructor(e,t){t.scrub="true",super(e,t)}open(){if(window.innerWidth<768)return;const e=this.el.querySelectorAll("li"),t=super.open();return t.fromTo(e,{y:40},{y:0,duration:1.5,ease:"power2.out",stagger:.15},0),t.fromTo(e,{opacity:0},{autoAlpha:1,duration:.8,stagger:.15},"<"),t}}class lE extends qt{constructor(e,t){super(e,t)}open(){if(window.innerWidth<768)return;const e=super.open(),t=this.el.querySelectorAll("button, div");return e.fromTo(t,{opacity:0},{opacity:1,duration:1,stagger:.1}),e}}class cE extends qt{constructor(e,t){super(e,t)}open(){const e=super.open(),t=this.el.querySelectorAll(".article-item");return e.fromTo(t,{y:40},{y:0,duration:1.5,ease:"power2.out",stagger:.15},0),e.fromTo(t,{opacity:0},{autoAlpha:1,duration:.8,stagger:.15},"<"),e}}class uE extends qt{constructor(e,t){super(e,t)}open(){if(window.innerWidth<768)return;const e=super.open(),t=this.el.querySelectorAll(".fs-h2"),n=this.el.querySelector(".image-container img");return e.fromTo(t,{y:40},{y:0,duration:1.6,ease:"power2.out"},0),e.fromTo(t,{opacity:0},{opacity:1,duration:1,ease:"linear"},"<"),e.fromTo(n,{scale:1.1},{scale:1,duration:1.6,ease:"immg.zoomOut"},"<"),e}}class hE extends qt{constructor(e,t){t.scrub="true",super(e,t)}open(){return super.open()}timeline(){const e=Je.timeline({paused:!0});return e.fromTo(this.el,{yPercent:5},{yPercent:-5,duration:1},0),e.add(()=>{},1),e}}class $n extends qt{static chapterReadMore=new Map;static chapterOverflows=new Map;noMargin=!1;expanded=!1;scrollHeight;offsetHeight;innerHeight;chapter;inner;content;button;constructor(e,t){t.scrub="true",super(e,t),this.noMargin=e.dataset.noMargin!==void 0,this.chapter=e.closest("[data-chapter]"),this.inner=e.querySelector(".content .inner"),this.content=e.querySelector(".content"),this.button=e.querySelector("button"),$n.chapterReadMore.has(this.chapter)||$n.chapterReadMore.set(this.chapter,new Set),$n.chapterReadMore.get(this.chapter).add(this)}resize(){if(Math.round(this.inner.scrollHeight)===Math.round(this.scrollHeight))return;Je.set(this.content,{clearProps:"all"}),Je.set(this.chapter,{clearProps:"--expanding"}),this.el.classList.remove("expanded"),this.expanded=!1,this.inner.classList.add("clamp"),this.offsetHeight=this.content.offsetHeight,this.scrollHeight=Array.from(this.inner.children).reduce((t,n)=>t+n.scrollHeight,0),this.el.classList.toggle("expandable",this.offsetHeight!==this.scrollHeight);const e=[...$n.chapterReadMore.get(this.chapter).values()].filter(t=>!t.noMargin).reduce((t,n)=>Math.max(t,n.scrollHeight-n.offsetHeight),0);e!==$n.chapterOverflows.get(this.chapter)&&($n.chapterOverflows.set(this.chapter,e),this.chapter.style.setProperty("--overflow",`${e+20}px`),Si.refresh()),super.resize()}open(){if(window.innerWidth<768)return;const e=super.open();return e.fromTo(this.el,{y:"1.4em"},{y:0,ease:"immg.posIn",duration:1.6},.1),e.fromTo(this.el,{opacity:0},{opacity:1,duration:.8},"<"),e}toggle=()=>{[...$n.chapterReadMore.get(this.chapter)?.values()||[]].filter(r=>r.expanded&&r!==this).forEach(r=>r.toggle()),this.expanded=this.el.classList.toggle("expanded");const e=Array.from(this.chapter.querySelectorAll("[data-animation]")).map(r=>Nn.animationManager.instances.get(r)),t=e.slice(e.indexOf(this)),n=Je.timeline({onUpdate:()=>t.forEach(r=>r?.refresh())}),s=1.5;return n.to(this.content,{height:this.expanded?this.scrollHeight:this.offsetHeight,duration:s,ease:"power3.out"},0),n.to(this.chapter,{"--expanding":this.expanded?this.scrollHeight-this.offsetHeight:0,overwrite:"auto",duration:s,ease:"power3.out"},0),n.add(()=>{this.inner.classList.toggle("clamp",!this.expanded)},this.expanded?0:s),n};attach(){this.resize(),super.attach(),this.button.addEventListener("click",this.toggle)}detach(){this.button.removeEventListener("click",this.toggle)}}class dE extends qt{splitText;constructor(e,t){super(e,t)}attach(){this.resize(),super.attach()}detach(){super.detach(),this.splitText?.revert()}async resize(){this.splitText?.revert(),!(window.innerWidth<768)&&(await xo,this.splitText=new ki(this.el,{type:"lines"}),super.resize())}open(){if(window.innerWidth<768)return;const e=super.open();return this.splitText&&this.splitText.lines.length>0&&(e.fromTo(this.splitText.lines,{y:"0.6em"},{y:0,duration:1.2,ease:"power2.out",stagger:{each:.15}},0),e.fromTo(this.splitText.lines,{opacity:0},{opacity:1,duration:.8,stagger:{each:.15}},"<")),e}}class fE extends qt{splitText;constructor(e,t){super(e,t)}attach(){this.resize(),super.attach()}detach(){super.detach(),this.splitText?.revert()}async resize(){if(this.splitText?.revert(),window.innerWidth<768)return;const e=this.el.querySelectorAll("p");await xo,this.splitText=new ki(e,{type:"lines"}),super.resize()}open(){if(window.innerWidth<768)return;const e=super.open();return this.splitText&&this.splitText.lines.length>0&&(e.fromTo(this.splitText.lines,{y:"0.6em"},{y:0,duration:1.2,ease:"immg.expoOut",stagger:{each:.15}},0),e.fromTo(this.splitText.lines,{opacity:0},{opacity:1,duration:.8,stagger:{each:.15}},"<")),e}}class pE extends qt{splitText;constructor(e,t){t.scrub="true",super(e,t)}attach(){this.resize(),super.attach()}detach(){super.detach(),this.splitText?.revert()}async resize(){this.splitText?.revert(),!(window.innerWidth<768)&&(await xo,this.splitText=new ki(this.el,{type:"lines, chars, words"}),this.createScrollTrigger())}open(){if(window.innerWidth<768)return;const e=super.open();return this.splitText&&this.splitText.lines.length>0&&(e.fromTo(this.splitText.lines,{y:"0.4em"},{y:0,duration:1.2,ease:"power2.out",stagger:{each:.15}},0),e.fromTo(this.splitText.lines,{opacity:0},{opacity:1,duration:.8,stagger:{each:.15}},"<")),e}timeline(){const e=Je.timeline({paused:!0});return this.splitText&&this.splitText.lines.length>0&&e.to(this.splitText.chars,{color:this.params.color||"#2d628c",stagger:{amount:.3}},0),e.add(()=>{},1),e}}class ar{constructor(e){this.el=e}}class mE extends ar{mouse;lerpedMouse;lastMouse;triggers;currentConfig="default";currentTheme="light";isFirstMove=!0;constructor(e){super(e),this.mouse=new me,this.lerpedMouse=new me,this.lastMouse=new me}async attach(){E.state.on(he.TICK,this.onTick),window.addEventListener("mousemove",this.onWindowMouseMove),window.addEventListener("mousedown",this.onWindowMouseToggle.bind(this,!0)),window.addEventListener("mouseup",this.onWindowMouseToggle.bind(this,!1)),document.addEventListener("mouseenter",this.onWindowEnter),document.addEventListener("mouseleave",this.onWindowLeave),document.addEventListener("astro:after-swap",()=>this.updateSections()),document.addEventListener("astro:before-preparation",this.onPageUnload),this.updateSections()}onTick=({dt:e})=>{this.lerpedMouse.lerp(this.mouse,e*5);const t=this.lerpedMouse.x-this.lastMouse.x,n=1+Math.min(.3,this.lerpedMouse.distanceTo(this.lastMouse)*.007);this.el.style.transform=`translate3d(${this.lerpedMouse.x}px, ${this.lerpedMouse.y}px, 0) rotate(${t*1}deg) scale(${n})`,this.lastMouse.copy(this.lerpedMouse)};onMouseEnter=e=>{const t=e.currentTarget,n=t.tagName==="BUTTON"||t.tagName==="A";this.currentConfig=t.dataset.cursor??(n?"clickable":"default"),this.currentTheme=t.dataset.theme??"light",this.el.dataset.config=this.currentConfig,this.el.dataset.theme=this.currentTheme};onMouseMove=e=>{this.isFirstMove=!1,this.lastMouse.copy(this.lerpedMouse.copy(this.mouse.set(e.clientX,e.clientY)));const t=e.currentTarget,n=t.tagName==="BUTTON"||t.tagName==="A";this.currentConfig=t.dataset.cursor??(n?"clickable":"default"),this.currentTheme=t.dataset.theme??"light",this.el.dataset.config!==this.currentConfig&&(this.el.dataset.config=this.currentConfig),this.el.dataset.theme!==this.currentTheme&&(this.el.dataset.theme=this.currentTheme),this.el.classList.add("visible"),this.triggers?.forEach(s=>s.removeEventListener("mousemove",this.onMouseMove))};onMouseLeave=()=>{this.currentConfig="default",this.currentTheme="light",this.el.dataset.config=this.currentConfig,this.el.dataset.theme=this.currentTheme};onMouseDown=e=>{const t=e.currentTarget;this.currentConfig=t.dataset.cursorDown,this.el.dataset.config=this.currentConfig};onMouseUp=e=>{const t=e.currentTarget;this.currentConfig=t.dataset.cursor,this.el.dataset.config=this.currentConfig};updateSections(){this.triggers=document.querySelectorAll("[data-cursor], [data-theme], button, a"),this.triggers.forEach(e=>{this.isFirstMove&&e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseenter",this.onMouseEnter),e.addEventListener("mouseleave",this.onMouseLeave),e.dataset.cursorDown&&(e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("mouseup",this.onMouseUp))})}onPageUnload=()=>{this.triggers?.forEach(e=>{e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mouseenter",this.onMouseEnter),e.removeEventListener("mouseleave",this.onMouseLeave),e.dataset.cursorDown&&(e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("mouseup",this.onMouseUp))})};onWindowMouseMove=e=>{this.mouse.set(e.clientX,e.clientY)};onWindowEnter=()=>{this.el.classList.add("visible")};onWindowLeave=()=>{this.el.classList.remove("visible")};onWindowMouseToggle=(e=!1)=>{this.el.classList.toggle("down",e)}}let gE=0;const vE={},nd={MENU_TOGGLE:gE++};class _E extends ar{currentTheme="dark";isMenuToggle=!1;isMenuBtnHover=!1;isFadeHeader=!1;isHeaderTop=!1;lastScrollY=window.scrollY;scrollThreshold=1;fadeTimeoutDuration=1500;fadeTimeout;navList;links;navbar;menuBtn;activeLink;newsCount;tl=null;tlNav=null;tlMenuBtn=null;themes={[cn[Oe.HOMEPAGE]]:"dark",[cn[Oe.TRADING]]:"light",[cn[Oe.CAPITAL]]:"light",[cn[Oe.MARITIME]]:"light",[cn[Oe.FORT_ENERGY]]:"light","/contact":"light","/news":"dark"};constructor(e){super(e),this.navList=e.querySelector("#header .container-menu ul"),this.links=e.querySelectorAll("#header nav ul .nav-link"),this.navbar=e.querySelector("#header nav .navbar"),this.menuBtn=e.querySelector("#header .menu-cta"),this.newsCount=e.querySelector("#header .counter .number"),document.addEventListener("astro:page-load",this.onPageLoad),document.addEventListener("astro:before-preparation",this.onPageUnload)}onPageLoad=()=>{this.links.forEach(e=>{e.addEventListener("mouseenter",this.onLinkHover),e.addEventListener("mouseleave",this.onLinkUnhover)}),this.menuBtn?.addEventListener("click",this.toggleMenu),this.menuBtn?.addEventListener("mouseenter",this.onMenuBtnHover),this.menuBtn?.addEventListener("mouseleave",this.onMenuBtnUnhover),window.addEventListener("resize",this.onInitNavbar),window.addEventListener("scroll",this.handleScroll),this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mouseleave",this.onMouseLeave),this.activeLink=this.el.querySelector("#header .nav-link.active span")||this.links[0]?.querySelector("span"),this.updateThemeFromPath(),this.onInitNavbar(),this.updateNewsCount()};onPageUnload=e=>{this.isMenuToggle&&this.toggleMenu(),this.isHeaderTop=!1,this.el.classList.remove("top"),document.querySelector("#header .nav-link.active")?.classList.remove("active"),this.links.forEach(t=>{if(new URL(t.href)?.pathname.replace(/\/$/,"")===e.to.pathname.replace(/\/$/,""))return t.classList.add("active")}),this.links.forEach(t=>{t.removeEventListener("mouseenter",this.onLinkHover),t.removeEventListener("mouseleave",this.onLinkUnhover)}),this.menuBtn?.removeEventListener("click",this.toggleMenu),this.menuBtn?.removeEventListener("mouseenter",this.onMenuBtnHover),this.menuBtn?.removeEventListener("mouseleave",this.onMenuBtnUnhover),window.removeEventListener("resize",this.onInitNavbar),window.removeEventListener("scroll",this.handleScroll),this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("mouseleave",this.onMouseLeave)};onMouseEnter=()=>{clearTimeout(this.fadeTimeout)};onMouseLeave=()=>{clearTimeout(this.fadeTimeout),this.isHeaderTop&&(this.fadeTimeout=setTimeout(()=>this.toggleFadeHeader(!0),this.fadeTimeoutDuration))};updateThemeFromPath(){const e=window.location.pathname.replace(/^\/experiment_monica_clinic_website(?=\/|$)/,"").replace(/\/$/,"");this.setTheme(this.themes[e]||"dark",!0)}setTheme(e,t=!0){this.el.dataset.theme=e,t&&(this.currentTheme=e)}toggleMenu=()=>{if(!this.menuBtn)return;this.isMenuToggle=!this.isMenuToggle;const e=this.isMenuToggle?"Close":"Menu";this.menuBtn.classList.toggle("close",this.isMenuToggle),this.onNavToggle(this.isMenuToggle),Nn.store.set(nd.MENU_TOGGLE,this.isMenuToggle),this.setTheme(this.isMenuToggle||this.isHeaderTop?"dark":this.currentTheme,!1),this.el.classList.toggle("menu-open",this.isMenuToggle),this.tlMenuBtn?.kill(),this.tlMenuBtn=Je.timeline(),this.tlMenuBtn.add(()=>this.setPointerEvents("none"),0),this.tlMenuBtn.add(()=>this.setPointerEvents("all"),1),this.isMenuBtnHover?(this.tlMenuBtn.add(()=>{this.menuBtn.querySelectorAll("span")[0].innerHTML=e},0),this.tlMenuBtn.add(()=>{this.menuBtn.querySelectorAll("span")[1].innerHTML=e},1)):(this.tlMenuBtn.to(this.menuBtn.querySelectorAll("span")[0],{opacity:0,duration:.4},0),this.tlMenuBtn.add(()=>{this.menuBtn.querySelectorAll("span").forEach(t=>t.innerHTML=e)},.4),this.tlMenuBtn.to(this.menuBtn.querySelectorAll("span")[0],{opacity:1,duration:.4},.4))};handleScroll=()=>{const e=window.scrollY,t=e>this.lastScrollY,n=e<20;t||this.toggleHeaderTop(!n),n?this.isFadeHeader&&this.toggleFadeHeader(!1):Math.abs(e-this.lastScrollY)>this.scrollThreshold&&this.toggleFadeHeader(t),this.lastScrollY=e};toggleFadeHeader(e){this.isFadeHeader!==e&&(this.isFadeHeader=e,!this.isMenuToggle&&(this.el.classList.toggle("fade",this.isFadeHeader),clearTimeout(this.fadeTimeout),this.isHeaderTop&&(this.fadeTimeout=setTimeout(()=>this.toggleFadeHeader(!0),this.fadeTimeoutDuration))))}toggleHeaderTop(e){this.isHeaderTop!==e&&(this.isHeaderTop=e,!this.isMenuToggle&&(this.el.classList.toggle("top",this.isHeaderTop),this.setTheme(this.isHeaderTop?"dark":this.currentTheme,!1),this.isHeaderTop||clearTimeout(this.fadeTimeout)))}setPointerEvents(e){this.menuBtn&&(this.menuBtn.style.pointerEvents=e)}onLinkHover=e=>{const t=e.currentTarget;t!==this.activeLink&&this.animateNavbar(t.querySelector("span"))};onLinkUnhover=()=>{this.activeLink&&this.animateNavbar(this.activeLink)};animateNavbar(e){const{left:t,width:n}=e.getBoundingClientRect(),s=this.navList?this.navList.getBoundingClientRect().left:0,r=n/(this.navbar?.offsetWidth||1);this.tl?.kill(),this.tl=Je.timeline(),this.tl.to(this.navbar,{x:t-s,scaleX:r,duration:.6,ease:"power2.out"})}onNavToggle(e){this.tlNav?.kill(),this.tlNav=Je.timeline(),this.tlNav.set(this.navList,{pointerEvents:e?"none":"all"},0),this.tlNav.to(this.links,{opacity:e?0:"",duration:e?.4:.8,stagger:e?0:.1},e?0:.4),this.tlNav.add(()=>{this.navbar?.classList.toggle("hidden",e)},e?0:.8)}onMenuBtnHover=()=>{this.isMenuBtnHover=!0};onMenuBtnUnhover=()=>{this.isMenuBtnHover=!1};onInitNavbar=()=>{this.activeLink&&(Je.to(this.navbar,{opacity:1,duration:.8,delay:.6}),this.animateNavbar(this.activeLink))};updateNewsCount(){const e=this.newsCount?.dataset.totalCount;if(!this.newsCount||!e)return;const t=ld().length;let n=parseInt(e)-t;n<0&&(n=0),this.newsCount.parentElement?.classList.toggle("no-unread",n===0),this.newsCount.innerText=n.toString()}}class xE extends ar{navListItems;links;overlay;sound;oldSoundTheme;tl;constructor(e){super(e),this.navListItems=this.el.querySelectorAll("ul li"),this.links=this.el.querySelectorAll("ul .nav-link"),this.overlay=this.el.querySelector(".overlay"),this.sound=document.querySelector(".buttons-container"),this.oldSoundTheme=this.sound.dataset.theme||""}attach(){Nn.store.watch(nd.MENU_TOGGLE,this.onToggle),document.addEventListener("astro:before-preparation",this.onPageUnload)}onPageUnload=e=>{document.querySelector(".montfort-menu ul .nav-link.active")?.classList.remove("active"),this.links.forEach(t=>{if(new URL(t.href)?.pathname.replace(/\/$/,"")===e.to.pathname.replace(/\/$/,""))return t.classList.add("active")})};onToggle=e=>{this.el.classList.toggle("active",e),e?this.onOpen():this.onClose()};onOpen=()=>{this.oldSoundTheme=this.sound.dataset.theme||"",Nn.componentManager.instances.get(this.sound).setTheme("dark",!1),this.tl?.kill(),this.tl=Je.timeline(),this.tl.set(this.el,{display:"block"},0),this.tl.fromTo(this.overlay,{opacity:0},{opacity:1,duration:.4},0),this.tl.fromTo(this.navListItems,{opacity:0},{opacity:1,duration:.65,stagger:.1},.1),this.tl.fromTo(this.navListItems,{y:20},{y:0,duration:.8,ease:"power2.out",stagger:.1},.1)};onClose=()=>{Nn.componentManager.instances.get(this.sound).setTheme(this.oldSoundTheme,!1),this.tl?.kill(),this.tl=Je.timeline(),this.tl.to(this.navListItems,{opacity:0,duration:.4,stagger:-.075},0),this.tl.to(this.overlay,{opacity:0,duration:.4},this.navListItems.length*.075+.2),this.tl.set(this.el,{display:"none"},this.navListItems.length*.075+.6)}}class yE extends ar{currentTheme="dark";canvas=null;sound;footer;audioContext=null;audioBuffer=null;source=null;gainNode=null;fadeDuration=.5;startTime=0;pauseTime=0;loading;animationPaused=!1;soundTl=null;resolveLoading;audioState="stopped";volume=.5;canvasParams={stroke:1.5*window.devicePixelRatio,amplitude:0,length:.25/window.devicePixelRatio,strokeColor:"#fff",phase:0};_isPlaying=!1;get isPlaying(){return this._isPlaying}set isPlaying(e){this._isPlaying=e,this.soundTl?.kill(),this.soundTl=Je.timeline(),e?(this.soundTl.add(()=>{this.playSound(),this.animationPaused=!1}),this.soundTl.to(this.canvasParams,{amplitude:4,duration:.5,ease:"power1.out"})):(this.soundTl.add(()=>{this.stopSound()}),this.soundTl.to(this.canvasParams,{amplitude:0,duration:.5,ease:"power1.out"}),this.soundTl.add(()=>{this.animationPaused=!0}))}themes={[cn[Oe.HOMEPAGE]]:"dark",[cn[Oe.TRADING]]:"light",[cn[Oe.CAPITAL]]:"light",[cn[Oe.MARITIME]]:"light",[cn[Oe.FORT_ENERGY]]:"light","/contact":"light","/news":"dark"};constructor(e){super(e),this.sound=e.querySelector(".sound"),this.canvas=e.querySelector("#sound-canvas"),this.footer=document.querySelector("footer"),this.canvas.width=this.canvas.width*window.devicePixelRatio,this.canvas.height=this.canvas.height*window.devicePixelRatio,this.loading=new Promise(t=>{this.resolveLoading=t}),this.initSound(),this.sound.addEventListener("click",this.toggleSound),document.body.addEventListener("click",()=>this.isPlaying=!0,{once:!0}),document.addEventListener("astro:page-load",this.onPageLoad),document.addEventListener("visibilitychange",this.handleVisibility),Si.create({trigger:this.footer,start:"top bottom",end:"bottom bottom",onEnter:this.fadeElement,onLeaveBack:this.showElement}),E.state.on(he.TICK,this.draw)}fadeElement=()=>{Je.to(this.el,{opacity:0,duration:.5,ease:"linear",pointerEvents:"none"})};showElement=()=>{Je.to(this.el,{opacity:1,duration:.5,ease:"linear",pointerEvents:"auto"})};draw=({et:e})=>{const t=this.canvas?.getContext("2d");!t||this.animationPaused||(this.canvasParams.phase=e*4,t.clearRect(0,0,this.canvas.width,this.canvas.height),t.save(),this.drawCurve(t),t.restore())};drawCurve=e=>{e.beginPath(),e.lineWidth=this.canvasParams.stroke,e.strokeStyle=this.canvasParams.strokeColor,e.lineCap="round",e.lineJoin="round";for(let t=0;t<this.canvas.width;t++){const n=this.canvas.height/2+this.canvasParams.amplitude*Math.sin(t*this.canvasParams.length+this.canvasParams.phase);e.lineTo(t,n)}e.stroke()};async initSound(){try{this.audioContext=new AudioContext,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination);const t=await(await fetch("/assets/sounds/sound.mp3")).arrayBuffer();this.audioBuffer=await this.audioContext.decodeAudioData(t),this.resolveLoading()}catch(e){console.error("Sound Loading Error:",e)}}async playSound(){if(!this.audioContext||await this.loading||!this.gainNode)return;this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.source&&(this.source.stop(),this.source.disconnect()),this.source=this.audioContext.createBufferSource(),this.source.buffer=this.audioBuffer,this.source.loop=!0,this.source.connect(this.gainNode);const e=this.audioContext.currentTime;this.gainNode.gain.setValueAtTime(0,e),this.gainNode.gain.linearRampToValueAtTime(this.volume,e+this.fadeDuration);const t=this.pauseTime%(this.audioBuffer?.duration??0);this.startTime=e-t,this.source?.start(0,t),this.audioState="playing"}stopSound(){if(!this.audioContext||!this.gainNode||!this.source)return;const e=this.audioContext.currentTime;this.pauseTime=e-this.startTime,this.gainNode.gain.linearRampToValueAtTime(0,e+this.fadeDuration),this.audioState="stopped",setTimeout(()=>{this.source&&(this.source.stop(),this.source.disconnect(),this.source=null)},this.fadeDuration*1e3)}toggleSound=()=>{this.isPlaying=!this.isPlaying};updateThemeFromPath(){const e=window.location.pathname.replace(/^\/experiment_monica_clinic_website(?=\/|$)/,"").replace(/\/$/,"");this.setTheme(this.themes[e]||"dark",!0)}setTheme(e,t=!0){this.el.dataset.theme=e,t&&(this.currentTheme=e),this.animationPaused=!1,e==="dark"?Je.to(this.canvasParams,{strokeColor:"#2d628c",duration:.5,ease:"linear"}):Je.to(this.canvasParams,{strokeColor:"#fff",duration:.5,ease:"linear"})}onPageLoad=()=>{this.updateThemeFromPath()};handleVisibility=()=>{document.hidden?this.audioState==="playing"&&(this.stopSound(),this.audioState="paused"):this.audioState==="paused"&&this.playSound()}}class Su{constructor(e,t){this.dataKey=e,this.selector=`[data-${e}]`,this.components=Object.fromEntries(Object.entries(t).map(([n,s])=>[n.split("/").pop().split(".").shift(),s]))}instances=new Map;components;selector;init(){this.afterSwap()}afterSwap(){this.instances.forEach(t=>{t.el.compareDocumentPosition(document.body)&Node.DOCUMENT_POSITION_CONTAINS||(t.detach?.(),this.instances.delete(t.el))}),document.querySelectorAll(this.selector).forEach(t=>{if(this.instances.has(t))return;const n=Object.fromEntries(Object.entries(t.dataset).filter(([r])=>r.startsWith(this.dataKey)&&r!==this.dataKey).map(([r,o])=>{let a=r.replace(this.dataKey,"");return a=a.charAt(0).toLowerCase()+a.slice(1),[a,o]})),s=new this.components[t.dataset[this.dataKey]](t,n);this.instances.set(t,s),s.attach?.()})}}var ME="1.1.19-dev.5";function id(i,e,t){return Math.max(i,Math.min(e,t))}function SE(i,e,t){return(1-t)*i+t*e}function TE(i,e,t,n){return SE(i,e,1-Math.exp(-t*n))}function EE(i,e){return(i%e+e)%e}var bE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const t=id(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=TE(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function wE(i,e){let t;return function(...n){let s=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(s,n)},e)}}var DE=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=i,this.content=e,t&&(this.debouncedResize=wE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},sd=class{events={};emit(i,...e){let t=this.events[i]||[];for(let n=0,s=t.length;n<s;n++)t[n]?.(...e)}on(i,e){return this.events[i]?.push(e)||(this.events[i]=[e]),()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}},Tu=100/6,vi={passive:!1},AE=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vi),this.element.addEventListener("touchstart",this.onTouchStart,vi),this.element.addEventListener("touchmove",this.onTouchMove,vi),this.element.addEventListener("touchend",this.onTouchEnd,vi)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new sd;on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,vi),this.element.removeEventListener("touchstart",this.onTouchStart,vi),this.element.removeEventListener("touchmove",this.onTouchMove,vi),this.element.removeEventListener("touchend",this.onTouchEnd,vi)}onTouchStart=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const s=n===1?Tu:n===2?this.window.width:1,r=n===1?Tu:n===2?this.window.height:1;e*=s,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},CE=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new bE;emitter=new sd;dimensions;virtualScroll;constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=U=>Math.min(1,1.001-Math.pow(2,-10*U)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:p=1,wheelMultiplier:v=1,autoResize:x=!0,prevent:g,virtualScroll:m,overscroll:b=!0,autoRaf:S=!1,anchors:C=!1,__experimental__naiveDimensions:F=!1}={}){window.lenisVersion=ME,(!i||i===document.documentElement)&&(i=window),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:p,wheelMultiplier:v,autoResize:x,prevent:g,virtualScroll:m,overscroll:b,autoRaf:S,anchors:C,__experimental__naiveDimensions:F},this.dimensions=new DE(i,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new AE(t,{touchMultiplier:p,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const t=i.composedPath().find(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href")?.startsWith("#"));if(t){const n=t.getAttribute("href");if(n){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(n,s)}}};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const s=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||s&&g.hasAttribute?.("data-lenis-prevent-touch")||r&&g.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const p=s&&this.options.syncTouch,x=s&&n.type==="touchend"&&Math.abs(d)>5;x&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...p?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}raf=i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let d;if(typeof i=="string"?d=document.querySelector(i):i instanceof HTMLElement&&i?.nodeType&&(d=i),d){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?v.left:v.top}const p=d.getBoundingClientRect();i=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=e,i=Math.round(i),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):i=id(0,i,this.limit),i===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=i),this.animate.fromTo(this.animatedScroll,i,{duration:s,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),p||this.emit(),p&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?EE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};class RE{lenis;anchorLinks=[];scrollTopBtn;constructor(){this.lenis=new CE({anchors:!0}),this.scrollTopBtn=document.querySelector("#scroll-top"),this.scrollTopBtn.addEventListener("click",()=>{this.lenis.scrollTo(0)}),Si.create({start:`${window.innerHeight} top`,end:"max",onEnter:()=>Je.to(this.scrollTopBtn,{opacity:1,pointerEvents:"auto",duration:.3}),onLeaveBack:()=>Je.to(this.scrollTopBtn,{opacity:0,pointerEvents:"none",duration:.3})})}init(){E.state.on(he.AFTER_RENDER,({et:e})=>this.lenis.raf(e*1e3)),Je.ticker.lagSmoothing(0),this.lenis.on("scroll",Si.update),this.afterSwap()}beforePreparation(){this.anchorLinks.forEach(e=>e.removeEventListener("click",this.onLinkClick))}afterSwap(){const e=[...document.querySelectorAll("a[href]")];this.anchorLinks=e.filter(t=>t.href.includes("/#")),this.anchorLinks.forEach(t=>{t.addEventListener("click",this.onLinkClick)})}onLinkClick=e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.button===1)return;const t=e.currentTarget,[n,s]=t.href.split("#");(new URL(n).pathname.replace(/\/$/,"")===window.location.pathname.replace(/\/$/,"")||n==="")&&(e.preventDefault(),s?(this.lenis.scrollTo(`#${s}`),window.location.hash=s):this.lenis.scrollTo(0))}}class PE{mainSelector="body main";headerSelector="body header";footerSelector="body footer";webglLoading;leaveTl;enterTl;transitionType;isDragNavigation;beforePreparation(e,t,n){if(this.leaveTl?.kill(),this.enterTl?.kill(),Nn.scrollManager.lenis.stop(),this.transitionType=this.getTransitionType(t,n,e),this.isDragNavigation=e.info==="drag",this.webglLoading=n?.load(),this.leaveTl=Je.timeline(),E.webgl.transitionSlideshow.beforePreparation(),this.transitionType==="mountains"){if(!this.isDragNavigation){const r=en.indexOf(n.key);this.leaveTl.add(E.webgl.transitionSlideshow.createNavigationTimeline(r),0)}}else this.leaveTl.to([E.webgl.renderer.domElement,this.headerSelector,this.footerSelector],{opacity:0,duration:.5},0);this.leaveTl.to(this.mainSelector,{opacity:0,duration:.5},0);const s=e.loader;e.loader=async()=>{await s(),await this.leaveTl.then(),E.core.ticker.pause()}}beforeSwap(e){const t=[document.getElementById("CookieConsentStateDisplayStyles"),document.getElementById("CookiebotDialogStyle"),document.getElementById("CybotCookiebotDialog")].filter(Boolean);e.newDocument.body.prepend(...t),e.newDocument.body.classList.add("loaded");const n=e.newDocument.querySelector(this.mainSelector);n.style.opacity="0",E.webgl.transitionSlideshow.beforeSwap(e,this.transitionType==="fade")}async afterSwap(e,t,n){E.core.ticker.play(),this.enterTl?.kill(),await this.leaveTl?.then(),await this.webglLoading,t?.afterLeave(),n?.beforeEnter(this.transitionType),this.transitionType==="fade"&&n?.afterEnter?.(),Nn.scrollManager.lenis.start(),this.enterTl=Je.timeline(),E.webgl.transitionSlideshow.beforeEnter(this.transitionType==="fade"),this.transitionType!=="mountains"&&this.enterTl.to([E.webgl.renderer.domElement,this.headerSelector,this.footerSelector],{opacity:1,duration:.5,onComplete:function(){Je.set(this.targets(),{clearProps:"all"})}},0),this.enterTl?.fromTo(this.mainSelector,{opacity:0},{opacity:1,duration:.5},0),await this.enterTl.then(),this.transitionType==="mountains"&&n?.afterEnter?.()}getTransitionType(e,t,n){return window.scrollY===0&&E.webgl.lerpedScrollProgress<.001&&!history.state?.scrollY&&t&&e&&en.includes(t.key)&&en.includes(e.key)&&!n.to.hash?"mountains":"fade"}}/*!
 * paths 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var UE=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,LE=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,NE=Math.PI/180,Wr=Math.sin,Xr=Math.cos,Zs=Math.abs,Gs=Math.sqrt,IE=function(e){return typeof e=="number"},Eu=1e5,_i=function(e){return Math.round(e*Eu)/Eu||0};function FE(i,e,t,n,s,r,o){for(var a=i.length,l,c,u,h,d;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+r,l[u+1]=h*t+d*s+o;return i._dirty=1,i}function OE(i,e,t,n,s,r,o,a,l){if(!(i===a&&e===l)){t=Zs(t),n=Zs(n);var c=s%360*NE,u=Xr(c),h=Wr(c),d=Math.PI,p=d*2,v=(i-a)/2,x=(e-l)/2,g=u*v+h*x,m=-h*v+u*x,b=g*g,S=m*m,C=b/(t*t)+S/(n*n);C>1&&(t=Gs(C)*t,n=Gs(C)*n);var F=t*t,U=n*n,P=(F*U-F*S-U*b)/(F*S+U*b);P<0&&(P=0);var V=(r===o?-1:1)*Gs(P),te=V*(t*m/n),y=V*-(n*g/t),A=(i+a)/2,Z=(e+l)/2,K=A+(u*te-h*y),ee=Z+(h*te+u*y),le=(g-te)/t,z=(m-y)/n,se=(-g-te)/t,$=(-m-y)/n,W=le*le+z*z,ye=(z<0?-1:1)*Math.acos(le/Gs(W)),Me=(le*$-z*se<0?-1:1)*Math.acos((le*se+z*$)/Gs(W*(se*se+$*$)));isNaN(Me)&&(Me=d),!o&&Me>0?Me-=p:o&&Me<0&&(Me+=p),ye%=p,Me%=p;var Fe=Math.ceil(Zs(Me)/(p/4)),ke=[],Q=Me/Fe,ne=4/3*Wr(Q/2)/(1+Xr(Q/2)),pe=u*t,_e=h*t,Be=h*-n,Ve=u*n,ze;for(ze=0;ze<Fe;ze++)s=ye+ze*Q,g=Xr(s),m=Wr(s),le=Xr(s+=Q),z=Wr(s),ke.push(g-ne*m,m+ne*g,le+ne*z,z-ne*le,le,z);for(ze=0;ze<ke.length;ze+=2)g=ke[ze],m=ke[ze+1],ke[ze]=g*pe+m*Be+K,ke[ze+1]=g*_e+m*Ve+ee;return ke[ze-2]=a,ke[ze-1]=l,ke}}function BE(i){var e=(i+"").replace(LE,function(te){var y=+te;return y<1e-4&&y>-1e-4?0:y}).match(UE)||[],t=[],n=0,s=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,h,d,p,v,x,g,m,b,S,C,F,U,P,V=function(y,A,Z,K){b=(Z-y)/3,S=(K-A)/3,x.push(y+b,A+S,Z-b,K-S,Z,K)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(F=p,isNaN(e[c])?(p=e[c].toUpperCase(),v=p!==e[c]):c--,h=+e[c+1],d=+e[c+2],v&&(h+=n,d+=s),c||(g=h,m=d),p==="M")x&&(x.length<8?t.length-=1:a+=x.length),n=g=h,s=m=d,x=[h,d],t.push(x),c+=2,p="L";else if(p==="C")x||(x=[0,0]),v||(n=s=0),x.push(h,d,n+e[c+3]*1,s+e[c+4]*1,n+=e[c+5]*1,s+=e[c+6]*1),c+=6;else if(p==="S")b=n,S=s,(F==="C"||F==="S")&&(b+=n-x[x.length-4],S+=s-x[x.length-3]),v||(n=s=0),x.push(b,S,h,d,n+=e[c+3]*1,s+=e[c+4]*1),c+=4;else if(p==="Q")b=n+(h-n)*r,S=s+(d-s)*r,v||(n=s=0),n+=e[c+3]*1,s+=e[c+4]*1,x.push(b,S,n+(h-n)*r,s+(d-s)*r,n,s),c+=4;else if(p==="T")b=n-x[x.length-4],S=s-x[x.length-3],x.push(n+b,s+S,h+(n+b*1.5-h)*r,d+(s+S*1.5-d)*r,n=h,s=d),c+=2;else if(p==="H")V(n,s,n=h,s),c+=1;else if(p==="V")V(n,s,n,s=h+(v?s-n:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(h=g,d=m,x.closed=!0),(p==="L"||Zs(n-h)>.5||Zs(s-d)>.5)&&(V(n,s,h,d),p==="L"&&(c+=2)),n=h,s=d;else if(p==="A"){if(U=e[c+4],P=e[c+5],b=e[c+6],S=e[c+7],u=7,U.length>1&&(U.length<3?(S=b,b=P,u--):(S=P,b=U.substr(2),u-=2),P=U.charAt(1),U=U.charAt(0)),C=OE(n,s,+e[c+1],+e[c+2],+e[c+3],+U,+P,(v?n:0)+b*1,(v?s:0)+S*1),c+=u,C)for(u=0;u<C.length;u++)x.push(C[u]);n=x[x.length-2],s=x[x.length-1]}else console.log(l);return c=x.length,c<6?(t.pop(),c=0):x[0]===x[c-2]&&x[1]===x[c-1]&&(x.closed=!0),t.totalPoints=a+c,t}function kE(i){IE(i[0])&&(i=[i]);var e="",t=i.length,n,s,r,o;for(s=0;s<t;s++){for(o=i[s],e+="M"+_i(o[0])+","+_i(o[1])+" C",n=o.length,r=2;r<n;r++)e+=_i(o[r++])+","+_i(o[r++])+" "+_i(o[r++])+","+_i(o[r++])+" "+_i(o[r++])+","+_i(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn,rd,od=function(){return tn||typeof window<"u"&&(tn=window.gsap)&&tn.registerPlugin&&tn},bu=function(){tn=od(),tn?(tn.registerEase("_CE",Dn.create),rd=1):console.warn("Please gsap.registerPlugin(CustomEase)")},VE=1e20,Yr=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},zE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,HE=/[cLlsSaAhHvVtTqQ]/g,GE=function(e){var t=e.length,n=VE,s;for(s=1;s<t;s+=6)+e[s]<n&&(n=+e[s]);return n},WE=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var s=+e[0]*-1,r=-n,o=e.length,a=1/(+e[o-2]+s),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?GE(e)+r:+e[o-1]+r),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+s)*a,e[c+1]=(+e[c+1]+r)*l},XE=function i(e,t,n,s,r,o,a,l,c,u,h){var d=(e+n)/2,p=(t+s)/2,v=(n+r)/2,x=(s+o)/2,g=(r+a)/2,m=(o+l)/2,b=(d+v)/2,S=(p+x)/2,C=(v+g)/2,F=(x+m)/2,U=(b+C)/2,P=(S+F)/2,V=a-e,te=l-t,y=Math.abs((n-a)*te-(s-l)*V),A=Math.abs((r-a)*te-(o-l)*V),Z;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:U,y:P}),(y+A)*(y+A)>c*(V*V+te*te)&&(Z=u.length,i(e,t,d,p,b,S,U,P,c,u,h),i(U,P,C,F,g,m,a,l,c,u,h+1+(u.length-Z))),u},Dn=function(){function i(t,n,s){rd||bu(),this.id=t,this.setData(n,s)}var e=i.prototype;return e.setData=function(n,s){s=s||{},n=n||"0,0,1,1";var r=n.match(zE),o=1,a=[],l=[],c=s.precision||1,u=c<=1,h,d,p,v,x,g,m,b,S;if(this.data=n,(HE.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(r=BE(n)[0]),h=r.length,h===4)r.unshift(0,0),r.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[h-2]!=1)&&WE(r,s.height,s.originY),this.segment=r,v=2;v<h;v+=6)d={x:+r[v-2],y:+r[v-1]},p={x:+r[v+4],y:+r[v+5]},a.push(d,p),XE(d.x,d.y,+r[v],+r[v+1],+r[v+2],+r[v+3],p.x,p.y,1/(c*2e5),a,a.length-1);for(h=a.length,v=0;v<h;v++)m=a[v],b=a[v-1]||m,(m.x>b.x||b.y!==m.y&&b.x===m.x||m===b)&&m.x<=1?(b.cx=m.x-b.x,b.cy=m.y-b.y,b.n=m,b.nx=m.x,u&&v>1&&Math.abs(b.cy/b.cx-a[v-2].cy/a[v-2].cx)>2&&(u=0),b.cx<o&&(b.cx?o=b.cx:(b.cx=.001,v===h-1&&(b.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(v--,1),h--);if(h=1/o+1|0,x=1/h,g=0,m=a[0],u){for(v=0;v<h;v++)S=v*x,m.nx<S&&(m=a[++g]),d=m.y+(S-m.x)/m.cx*m.cy,l[v]={x:S,cx:x,y:d,cy:0,nx:9},v&&(l[v-1].cy=d-l[v-1].y);g=a[a.length-1],l[h-1].cy=g.y-d,l[h-1].cx=g.x-l[l.length-1].x}else{for(v=0;v<h;v++)m.nx<v*x&&(m=a[++g]),l[v]=m;g<a.length-1&&(l[v-1]=a[a.length-2])}return this.ease=function(C){var F=l[C*h|0]||l[h-1];return F.nx<C&&(F=F.n),F.y+(C-F.x)/F.cx*F.cy},this.ease.custom=this,this.id&&tn&&tn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,s,r){return new i(n,s,r).ease},i.register=function(n){tn=n,bu()},i.get=function(n){return tn.parseEase(n)},i.getSVGData=function(n,s){s=s||{};var r=s.width||100,o=s.height||100,a=s.x||0,l=(s.y||0)+o,c=tn.utils.toArray(s.path)[0],u,h,d,p,v,x,g,m,b,S;if(s.invert&&(o=-o,l=0),typeof n=="string"&&(n=tn.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)u=kE(FE([n.segment],r,0,0,-o,a,l));else{for(u=[a,l],g=Math.max(5,(s.precision||1)*200),p=1/g,g+=2,m=5/g,b=Yr(a+p*r),S=Yr(l+n(p)*-o),h=(S-l)/(b-a),d=2;d<g;d++)v=Yr(a+d*p*r),x=Yr(l+n(d*p)*-o),(Math.abs((x-S)/(v-b)-h)>m||d===g-1)&&(u.push(b,S),h=(x-S)/(v-b)),b=v,S=x;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},i}();Dn.version="3.12.7";Dn.headless=!0;od()&&tn.registerPlugin(Dn);Je.registerPlugin(Dn);Je.registerPlugin(ki);Je.registerPlugin(Si);Si.config({autoRefreshEvents:"visibilitychange,DOMContentLoaded,load,resize"});Je.config({force3D:!0});Dn.create("immg.zoomIn","0.9, 0.0, 0.4, 1.0");Dn.create("immg.zoomOut","0.4, 0.0, 0.1, 1.0");Dn.create("immg.posIn","0.4, 0.0, 0.1, 1.0");Dn.create("immg.posOut","0.9, 0.0, 0.4, 1.0");Dn.create("immg.expoOut","0.14, 1.0, 0.34, 1.0");Dn.create("immg.expoIn","0.66, 0.0, 0.86, 0.0");function YE(){if(sessionStorage.getItem("is-ios-webview")==="true")return!0;if(window?.webkit?.messageHandlers)return console.log("detected webkit messageHandlers"),!0;let e=!1;const t=document.createElement("div");return t.style.cssText="width: 100%; height: 100lvh;position: fixed; top: 0; left: 0;visibility: hidden;",document.body.appendChild(t),t.offsetHeight===window.innerHeight&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&(e=!0),t.remove(),sessionStorage.setItem("is-ios-webview",`${e}`),e}const qE=YE(),jE=115;class Il{static instance;lvh=0;svh=0;isWebview=!1;state;store;transitionManager;scrollManager;animationManager;componentManager;constructor(){if(this.isWebview=qE,this.isWebview){const e=sessionStorage.getItem("webview-lvh");this.lvh=e?parseInt(e):window.innerHeight+jE,document.documentElement.style.setProperty("--lvh",`${this.lvh*.01}px`);const t=sessionStorage.getItem("webview-svh");this.svh=t?parseInt(t):document.documentElement.clientHeight,sessionStorage.setItem("webview-svh",this.svh.toString()),document.documentElement.style.setProperty("--svh",`${this.svh*.01}px`)}this.state=new Yh(vE),this.store=new qh,this.transitionManager=new PE,this.scrollManager=new RE,this.animationManager=new Su("animation",Object.assign({"./animations/Animation.ts":qt,"./animations/Contact.ts":tE,"./animations/FadeIn.ts":nE,"./animations/GlobalConnectivity.ts":iE,"./animations/Hero.ts":sE,"./animations/ImagesContainer.ts":rE,"./animations/Line.ts":oE,"./animations/List.ts":aE,"./animations/Navigation.ts":lE,"./animations/NewsListing.ts":cE,"./animations/NewsSingle.ts":uE,"./animations/Parallax.ts":hE,"./animations/ReadMore.ts":$n,"./animations/SplitBlock.ts":dE,"./animations/TextBlock.ts":fE,"./animations/Title.ts":pE})),this.componentManager=new Su("component",Object.assign({"./components/Component.ts":ar,"./components/Cursor.ts":mE,"./components/Header.ts":_E,"./components/Menu.ts":xE,"./components/Sound.ts":yE}))}init(){this.onWindowResize(),this.scrollManager.init(),this.animationManager.init(),this.componentManager.init(),document.addEventListener("astro:before-preparation",this.onBeforePreparation),document.addEventListener("astro:before-swap",this.onBeforeSwap),document.addEventListener("astro:after-swap",this.onAfterSwap),window.addEventListener("resize",this.onWindowResize)}onBeforePreparation=e=>{const t=E.webgl.currentPage,n=E.webgl.setNextPage(e.to.pathname);this.scrollManager.beforePreparation(),this.transitionManager.beforePreparation(e,t,n)};onBeforeSwap=e=>{this.transitionManager.beforeSwap(e)};onAfterSwap=e=>{const t=E.webgl.currentPage,n=E.webgl.nextPage;E.webgl.afterSwap(),this.transitionManager.afterSwap(e,t,n),this.scrollManager.afterSwap(),this.onWindowResize(),E.tools.viewport.onResize(),this.componentManager.afterSwap(),this.animationManager.afterSwap()};onWindowResize=()=>{if(this.isWebview||(this.svh=document.documentElement.clientHeight),this.isWebview){const e=window.innerHeight;e>this.lvh&&(this.lvh=e,sessionStorage.setItem("webview-lvh",this.lvh.toString())),document.documentElement.style.setProperty("--lvh",`${this.lvh*.01}px`)}document.documentElement.style.setProperty("--vw",`${document.documentElement.clientWidth*.01}px`),document.documentElement.style.setProperty("--dvh",`${window.innerHeight*.01}px`),document.documentElement.style.setProperty("--svh",`${this.svh*.01}px`)};static getInstance(){return this.instance||(this.instance=new Il),this.instance}}const Nn=Il.getInstance();export{tb as C,pl as D,he as E,wl as F,Nn as G,Qn as H,Bi as L,Kn as N,Na as R,Kt as S,ii as U,E as a,eb as b,ch as c,Rt as d,Pn as e,Pt as f,po as g,Ra as h,fo as i,Bu as j,un as k,Zt as l,yl as m,wf as n,$r as o,Ta as p,Aa as q,Da as r,Zr as s,ba as t,Ca as u,Jr as v};
