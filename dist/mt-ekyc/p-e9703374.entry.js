import{r as t,c as i,h as o}from"./p-50c2c255.js";const s=":host{display:block}video{width:100%;height:200px;border-radius:8px}img{width:100%;border-radius:8px}";const a=class{constructor(o){t(this,o);this.photoTaked=i(this,"photoTaked",7);this.test="hello"}componentDidLoad(){this.play()}async play(){const t=await navigator.mediaDevices.getUserMedia({video:{aspectRatio:1.7777777778,facingMode:"environment"}});this.camera.srcObject=t;await this.camera.play()}takePhoto(){const t=document.createElement("canvas");t.width=this.camera.videoWidth;t.height=this.camera.videoHeight;t.getContext("2d").drawImage(this.camera,0,0);const i=t.toDataURL("image/webp");this.photo.src=i;this.photoTaked.emit(i)}render(){return o("div",null,o("video",{ref:t=>this.camera=t}),o("img",{ref:t=>this.photo=t}),o("button",{onClick:()=>this.takePhoto()},"Take photo"))}};a.style=s;export{a as camera_preview};
//# sourceMappingURL=p-e9703374.entry.js.map