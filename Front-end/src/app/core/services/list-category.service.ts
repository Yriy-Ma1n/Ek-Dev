import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCategoryService {

  private dataCategory = [
    {
      Gadgets:[
        { img: './header-list/Gadgets/iphone-svg.svg', name: "Смартфони" }, 
        { img: './header-list/Gadgets/iphone-box.svg', name: "Чохли" },
        { img: './header-list/Gadgets/head-set.svg', name: "Навушники" },
        { img: './header-list/Gadgets/smart-watch.svg', name: "Смартгодинники і браслети" },
        { img: './header-list/Gadgets/power-bank.svg', name: "Повербанки" },
        { img: './header-list/Gadgets/chargeGudget.svg', name: "Зарядки для гаджетів" },
        { img: './header-list/Gadgets/speakers.svg', name: "Портативні колонки" },
        { img: './header-list/Gadgets/Action-camera.svg', name: "Action камери" },
        { img: './header-list/Gadgets/Quadcoper.svg', name: "Квадробери" }
      ],
      Computers:[
         { img: './header-list/Computers/laptop.svg', name: "Ноутбуки" }, 
         { img: './header-list/Computers/tablet.svg', name: "Планшети" }, 
         { img: './header-list/Computers/console.svg', name: "Приставки" },
         { img: './header-list/Computers/monitor.svg', name: "Монітори" }, 
         { img: './header-list/Computers/Pc.svg', name: "Пк" }, 
         { img: './header-list/Computers/components-pc.svg', name: "Комплектуючі" }, 
         { img: './header-list/Computers/Printing.svg', name: "Друк" }, 
         { img: './header-list/Computers/Wi-Fi.svg', name: "Wi-Fi" }, 
         { img: './header-list/Computers/Mouse-Keyboard.svg', name: "Клавіатури та мишки" }, 
      ],
      Photo:[
         { img: './header-list/Photo/Cameras.svg', name: "Фотоапарати" }, 
         { img: './header-list/Photo/Objectivs.svg', name: "Обє'ктиви" }, 
         { img: './header-list/Photo/Flashes', name: "Фотоспалахи" }, 
         { img: './header-list/Photo/ActionCamera.svg', name: "Action камери" }, 
         { img: './header-list/Photo/Memory-card.svg', name: "Карти пам'яті" }, 
         { img: './header-list/Photo/Lenses.svg', name: "Штативи" }, 
         { img: './header-list/Photo/Steadicams.svg', name: "Стедіками" }, 
         { img: './header-list/Photo/Charge.svg', name: "Акумулятори" }, 
         { img: './header-list/Photo/Studio-light.svg', name: "Студійне світло" }, 
      ],
      Tv:[
         { img: './header-list/TV/Tv.svg', name: "Телевізори" }, 
         { img: './header-list/TV/Monitors.svg', name: "Монітори" }, 
         { img: './header-list/TV/Fastening.svg', name: "Кріплення й тумби" }, 
         { img: './header-list/TV/MediaPlayers.svg', name: "Медіаплеєри" }, 
         { img: './header-list/TV/Projectors.svg', name: "Проєктори" }, 
         { img: './header-list/TV/SoundPad.svg', name: "Саундбари" }, 
         { img: './header-list/TV/console.svg', name: "Приставки" }, 
         { img: './header-list/TV/VROculus.svg', name: "VR окуряли" }, 
         { img: './header-list/TV/Cabel.svg', name: "Кабелі" }, 
      ],
      Audio:[],
      HomeTechnik:[],
      Climat:[],
      Home:[],
      ChildTovar:[],
      Cars:[],
      Tools:[],
      Tourism:[],
      Sport:[],
      FashionBeauti:[]
    }
  ]

}
