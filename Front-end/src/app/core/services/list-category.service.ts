import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListCategoryService {
  router = inject(Router)

  private dataCategory = [
    {
      Gadgets: [
        { img: './header-list/Gadgets/iphone-svg.svg', name: "Смартфони" },
        { img: './header-list/Gadgets/iphone-box.svg', name: "Чохли", additional:'not working'},
        { img: './header-list/Gadgets/head-set.svg', name: "Навушники", additional:'not working' },
        { img: './header-list/Gadgets/smart-watch.svg', name: "Смартгодинники і браслети", additional:'not working' },
        { img: './header-list/Gadgets/power-bank.svg', name: "Повербанки", additional:'not working' },
        { img: './header-list/Gadgets/chargeGudget.svg', name: "Зарядки для гаджетів", additional:'not working' },
        { img: './header-list/Gadgets/speakers.svg', name: "Портативні колонки", additional:'not working' },
        { img: './header-list/Gadgets/Action-camera.svg', name: "Action камери", additional:'not working' },
        { img: './header-list/Gadgets/Quadcoper.svg', name: "Квадрокоптери",additional:'not working' }
      ],
      Computers: [
        { img: './header-list/Computers/laptop.svg', name: "Ноутбуки", additional:'not working' },
        { img: './header-list/Computers/tablet.svg', name: "Планшети" },
        { img: './header-list/Computers/console.svg', name: "Приставки", additional:'not working' },
        { img: './header-list/Computers/monitor.svg', name: "Монітори", additional:'not working' },
        { img: './header-list/Computers/Pc.svg', name: "Пк", additional:'not working' },
        { img: './header-list/Computers/components-pc.svg', name: "Комплектуючі", additional:'not working' },
        { img: './header-list/Computers/Printing.svg', name: "Друк", additional:'not working' },
        { img: './header-list/Computers/Wi-Fi.svg', name: "Wi-Fi", additional:'not working' },
        { img: './header-list/Computers/Mouse-Keyboard.svg', name: "Клавіатури та мишки", additional:'not working' },
      ],
      photo: [
        { img: './header-list/Photo/Cameras.svg', name: "Фотоапарати", additional:'not working' },
        { img: './header-list/Photo/Objectivs.svg', name: "Обє'ктиви", additional:'not working' },
        { img: './header-list/Photo/Flashes.svg', name: "Фотоспалахи", additional:'not working' },
        { img: './header-list/Photo/ActionCamera.svg', name: "Action камери",additional:'not working' },
        { img: './header-list/Photo/Memory-card.svg', name: "Карти пам'яті", additional:'not working' },
        { img: './header-list/Photo/Lenses.svg', name: "Штативи", additional:'not working' },
        { img: './header-list/Photo/Steadicams.svg', name: "Стедіками", additional:'not working' },
        { img: './header-list/Photo/Charge.svg', name: "Акумулятори", additional:'not working' },
        { img: './header-list/Photo/Studio-light.svg', name: "Студійне світло", additional:'not working' },
      ],
      TV: [
        { img: './header-list/TV/Tv.svg', name: "Телевізори" },
        { img: './header-list/TV/Monitors.svg', name: "Монітори", additional:'not working' },
        { img: './header-list/TV/Fastening.svg', name: "Кріплення й тумби", additional:'not working' },
        { img: './header-list/TV/MediaPlayers.svg', name: "Медіаплеєри", additional:'not working' },
        { img: './header-list/TV/Projectors.svg', name: "Проєктори", additional:'not working' },
        { img: './header-list/TV/SoundPad.svg', name: "Саундбари", additional:'not working' },
        { img: './header-list/TV/console.svg', name: "Приставки", additional:'not working'},
        { img: './header-list/TV/VROculus.svg', name: "VR окуряли", additional:'not working' },
        { img: './header-list/TV/Cabel.svg', name: "Кабелі", additional:'not working' },
      ],
      Audio: [
        { img: './header-list/Audio/head-set.svg', name: "Навушники", additional:'not working' },
        { img: './header-list/Audio/Headsets.svg', name: "Гарнітури", additional:'not working' },
        { img: './header-list/Audio/speakers.svg', name: "Портативні колонки", additional:'not working' },
        { img: './header-list/Audio/AudioSystem.svg', name: "Аудіосистеми", additional:'not working' },
        { img: './header-list/Audio/Computer-speaker.svg', name: "Комп'ютерні колонки", additional:'not working' },
        { img: './header-list/Audio/Acustic.svg', name: "Акустика", additional:'not working' },
        { img: './header-list/Audio/HiFiHiEnd.svg', name: "Hi-Fi/Hi-End", additional:'not working' },
        { img: './header-list/Audio/Cabel.svg', name: "Кабелі", additional:'not working' },
        { img: './header-list/Audio/MusInstrument.svg', name: "Муз інструменти", additional:'not working' },
      ],
      HomeTechnik: [
        { img: './header-list/Home-technik/Include-technik.svg', name: "Вбудованя техніка", additional:'not working' },
        { img: './header-list/Home-technik/Small-build.svg', name: "Дрібна побутова", additional:'not working' },
        { img: './header-list/Home-technik/washingCar.svg', name: "Пральні машини", additional:'not working' },
        { img: './header-list/Home-technik/Refigerator.svg', name: "Холодильники" },
        { img: './header-list/Home-technik/Plate.svg', name: "Плити", additional:'not working' },
        { img: './header-list/Home-technik/Oven.svg', name: "Духовки", additional:'not working' },
        { img: './header-list/Home-technik/Vacuum-cleaner.svg', name: "Пилососи", additional:'not working' },
        { img: './header-list/Home-technik/DryerHair.svg', name: "Гігієна", additional:'not working' },
        { img: './header-list/Home-technik/WithoutEnergy.svg', name: "Автономне живлення", additional:'not working' },
      ],
      Climat: [
        { img: './header-list/Climat/air-conditioner.svg', name: "Кондеціонери", additional:'not working' },
        { img: './header-list/Climat/Water-heaters.svg', name: "Водонагрівачі", additional:'not working' },
        { img: './header-list/Climat/Heaters.svg', name: "Обігрівачі", additional:'not working' },
        { img: './header-list/Climat/Boilers.svg', name: "Котли", additional:'not working' },
        { img: './header-list/Climat/Heatpumps.svg', name: "Теплові насоси", additional:'not working' },
        { img: './header-list/Climat/Radiators.svg', name: "Радіатори", additional:'not working' },
        { img: './header-list/Climat/Humidifiers.svg', name: "Зволожувачі", additional:'not working' },
        { img: './header-list/Climat/PumpsWaterSupply.svg', name: "Насоси та водопостачання", additional:'not working' },
        { img: './header-list/Climat/Camins.svg', name: "Каміни", additional:'not working' },
      ],
      Home: [
        { img: './header-list/Home/Plumbing.svg', name: "Сантехніка", additional:'not working' },
        { img: './header-list/Home/Repair.svg', name: "Ремонт", additional:'not working' },
        { img: './header-list/Home/Dishes.svg', name: "Посуд", additional:'not working' },
        { img: './header-list/Home/FurnitureIhome.svg', name: "Меблі", additional:'not working' },
        { img: './header-list/Home/WithoutEnergy.svg', name: "Автономне живлення", additional:'not working' },
        { img: './header-list/Home/AlarmsCamerasIhome.svg', name: "Сигналізації та відеокамери", additional:'not working' },
        { img: './header-list/Home/HealthIhome.svg', name: "Медицина", additional:'not working' },
        { img: './header-list/Home/CosmeticAccessoriesIhome.svg', name: "Косметичне приладдя", additional:'not working' },
        { img: './header-list/Home/PetsIhome.svg', name: "Зоотовари", additional:'not working' },
      ],
      ChildTovar: [
        { img: './header-list/Child-tovar/PushchairsIkids&toys.svg', name: "Візочки", additional:'not working' },
        { img: './header-list/Child-tovar/CribsIKIDS.svg', name: "Ліжечка", additional:'not working' },
        { img: './header-list/Child-tovar/HighChairsIkids.svg', name: "Стільчики для годування", additional:'not working' },
        { img: './header-list/Child-tovar/DiapersIkids.svg', name: "Підгузки", additional:'not working' },
        { img: './header-list/Child-tovar/kidcarseatsIkids.svg', name: "Автокрісла", additional:'not working' },
        { img: './header-list/Child-tovar/SchoolIkids.svg', name: "Школа", additional:'not working' },
        { img: './header-list/Child-tovar/Child-Bysicle.svg', name: "Велосипеди", additional:'not working' },
        { img: './header-list/Child-tovar/Toys&Entertainmentlkids.svg', name: "Іграшки й розваги", additional:'not working' },
        { img: './header-list/Child-tovar/RCToysIkids.svg', name: "РК моделі", additional:'not working' },
      ],

      Car: [
        { img: './header-list/cars/TyresICars.svg', name: "Шини", additional:'not working' },
        { img: './header-list/cars/RimsICars.svg', name: "Диски", additional:'not working' },
        { img: './header-list/cars/kidCarSeatsICars.svg', name: "Дитячі крісла", additional:'not working' },
        { img: './header-list/cars/DashcamsIcars.svg', name: "Реєстратори", additional:'not working' },
        { img: './header-list/cars/SoundAndElectronicsICars.svg', name: "Звук та електроніка", additional:'not working' },
        { img: './header-list/cars/BatteriesIcars.svg', name: "Акумулятори", additional:'not working' },
        { img: './header-list/cars/EngineOilsIcars.svg', name: "Моторні мастила", additional:'not working' },
        { img: './header-list/cars/PressureWashesICars.svg', name: "Автомийки", additional:'not working' },
        { img: './header-list/cars/MotoICars.svg', name: "Мото", additional:'not working' },
      ],
      Tool: [
        { img: './header-list/Tools/Tools.svg', name: "Інструмент", additional:'not working' },
        { img: './header-list/Tools/ToolKits.svg', name: "Набори інструментів", additional:'not working' },
        { img: './header-list/Tools/HandTools.svg', name: "Ручний інструмент", additional:'not working' },
        { img: './header-list/Tools/Construction.svg', name: "Садова техніка", additional:'not working' },
        { img: './header-list/Tools/GardenTools.svg', name: "Садовий інструмент", additional:'not working' },
        { img: './header-list/Tools/MeasuringInstruments.svg', name: "Вимірювальні прилади", additional:'not working' },
        { img: './header-list/Tools/GardenEquipment.svg', name: "Автономне живлення", additional:'not working' },
        { img: './header-list/Tools/welders.svg', name: "Зварювальні апарати", additional:'not working' },
      ],
      Tourism: [
        { img: './header-list/Tourism/BackpacksITourism.svg', name: "Рюкзаки", additional:'not working' },
        { img: './header-list/Tourism/SuitcasesITourism.svg', name: "Валізи", additional:'not working' },
        { img: './header-list/Tourism/TentsITourism.svg', name: "Намети", additional:'not working' },
        { img: './header-list/Tourism/SleepingBagsITourism.svg', name: "Спальники", additional:'not working' },
        { img: './header-list/Tourism/FlashlightsITourism.svg', name: "Ліхтарики", additional:'not working' },
        { img: './header-list/Tourism/ThermosesITourism.svg', name: "Термоси", additional:'not working' },
        { img: './header-list/Tourism/BurnersITourism.svg', name: "Пальники", additional:'not working' },
        { img: './header-list/Tourism/BBQs&BrazierITourism.svg', name: "Мангали", additional:'not working' },
        { img: './header-list/Tourism/FishingITourism.svg', name: "Риболовля", additional:'not working' },
      ],
      Sport: [
        { img: './header-list/Sport/Bysicle.svg', name: "Велосипеди", additional:'not working' },
        { img: './header-list/Sport/ActiveRest.svg', name: "Активний відпочинок", additional:'not working' },
        { img: './header-list/Sport/gameTypeStoprt.svg', name: "Ігрові види спорту", additional:'not working' },
        { img: './header-list/Sport/WaterTypeSport.svg', name: "Водні види спорту", additional:'not working' },
        { img: './header-list/Sport/WinterTypeSport.svg', name: "Зимові види спорту", additional:'not working' },
        { img: './header-list/Sport/Action-camera.svg', name: "Action камери", additional:'not working' },
        { img: './header-list/Sport/ExerciseMachines.svg', name: "Тренажери", additional:'not working' },
        { img: './header-list/Sport/FitnesAndAerobics.svg', name: "Фітнес та аеробіка", additional:'not working' },
        { img: './header-list/Sport/SportFood.svg', name: "Спортивне харчування", additional:'not working' },


      ],
      Fashion: [
        { img: './header-list/Fashion/Watch.svg', name: "Годинник", additional:'not working' },
        { img: './header-list/Fashion/smart-watch.svg', name: "Смартгодинники і браслети", additional:'not working' },
        { img: './header-list/Fashion/Juvelir-Fashion.svg', name: "Ювелірні прикраси", additional:'not working' },
        { img: './header-list/Fashion/Bags.svg', name: "Сумочки та галантерея", additional:'not working' },
        { img: './header-list/Fashion/Beautifuls.svg', name: "Краса та догляд", additional:'not working' },
        { img: './header-list/Fashion/hygiene.svg', name: "Гігієна", additional:'not working' },
        { img: './header-list/Fashion/Cosmetics.svg', name: "Косметика і парфюм", additional:'not working' },
        { img: './header-list/Fashion/umbrella.svg', name: "Парасольки", additional:'not working' }
      ]
    }
  ]
  private arrDo = [
    {
      name: 'TV',
      do: ()=>{console.log('Телевизор'); this.NavigateToPage('Телевізор')}
    },
    {
      name: 'TabletAccessories',
       do: ()=>{console.log('Планшет'); this.NavigateToPage('Планшет')}
    },
    {
      name: 'Telephone',
       do: ()=>{console.log('Телефон'); this.NavigateToPage('Телефон')}
    },
    {
      name: 'Tablet',
       do: ()=>{console.log('Планшет'); this.NavigateToPage('Планшет')}
    },
    {
      name: 'Fridge',
       do: ()=>{console.log('Холодильник'); this.NavigateToPage('Холодільник')}
    }
  ]
  private changeData = [
    {
      name:"Gadgets",
    },
    {
      name:"Computers"
    },
    {
      name:"photo"
    },
    {
      name:"TV"
    },
    {
      name:"HomeTechnik"
    },
    {
      name:"Climat"
    },
    {
      name:"Home"
    },
    {
      name:"ChildTovar"
    },
    {
      name:"Car"
    },
    {
      name:"Tool"
    },
    {
      name:"Tourism"
    },
    {
      name:"Sport"
    },
    {
      name:"Fashion"
    },
    {
      name:"Audio"
    }
  ]
  get dataCategoryes() {
    return [...this.dataCategory]
  }
  get getArrDo(){
    return [...this.arrDo]
  }
  get getChangeData(){
    return [...this.changeData]
  }

  NavigateToPage(page: string) {
    console.log('navigate')
    this.router.navigate(['/tovarList'], { queryParams: { q: page } })
  }

}
