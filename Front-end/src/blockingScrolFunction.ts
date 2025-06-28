 export function blockingScrol(NgIf:boolean){
    if(NgIf){
      return document.body.style.overflowY = "hidden";
    }else{
      return document.body.style.overflowY = "auto";
    }
  }