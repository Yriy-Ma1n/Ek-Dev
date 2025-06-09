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
        { img: './header-list/Gadgets/iphone-box.svg', name: "Чохли" },
        { img: './header-list/Gadgets/head-set.svg', name: "Навушники" },
        { img: './header-list/Gadgets/smart-watch.svg', name: "Смартгодинники і браслети" },
        { img: './header-list/Gadgets/power-bank.svg', name: "Повербанки" },
        { img: './header-list/Gadgets/chargeGudget.svg', name: "Зарядки для гаджетів" },
        { img: './header-list/Gadgets/speakers.svg', name: "Портативні колонки" },
        { img: './header-list/Gadgets/Action-camera.svg', name: "Action камери" },
        { img: './header-list/Gadgets/Quadcoper.svg', name: "Квадрокоптери" }
      ],
      Computers: [
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
      photo: [
        { img: './header-list/Photo/Cameras.svg', name: "Фотоапарати" },
        { img: './header-list/Photo/Objectivs.svg', name: "Обє'ктиви" },
        { img: './header-list/Photo/Flashes.svg', name: "Фотоспалахи" },
        { img: './header-list/Photo/ActionCamera.svg', name: "Action камери" },
        { img: './header-list/Photo/Memory-card.svg', name: "Карти пам'яті" },
        { img: './header-list/Photo/Lenses.svg', name: "Штативи" },
        { img: './header-list/Photo/Steadicams.svg', name: "Стедіками" },
        { img: './header-list/Photo/Charge.svg', name: "Акумулятори" },
        { img: './header-list/Photo/Studio-light.svg', name: "Студійне світло" },
      ],
      TV: [
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
      Audio: [
        { img: './header-list/Audio/head-set.svg', name: "Навушники" },
        { img: './header-list/Audio/Headsets.svg', name: "Гарнітури" },
        { img: './header-list/Audio/speakers.svg', name: "Портативні колонки" },
        { img: './header-list/Audio/AudioSystem.svg', name: "Аудіосистеми" },
        { img: './header-list/Audio/Computer-speaker.svg', name: "Комп'ютерні колонки" },
        { img: './header-list/Audio/Acustic.svg', name: "Акустика" },
        { img: './header-list/Audio/HiFiHiEnd.svg', name: "Hi-Fi/Hi-End" },
        { img: './header-list/Audio/Cabel.svg', name: "Кабелі" },
        { img: './header-list/Audio/MusInstrument.svg', name: "Муз інструменти" },
      ],
      HomeTechnik: [
        { img: './header-list/Home-technik/Include-technik.svg', name: "Вбудованя техніка" },
        { img: './header-list/Home-technik/Small-build.svg', name: "Дрібна побутова" },
        { img: './header-list/Home-technik/washingCar.svg', name: "Пральні машини" },
        { img: './header-list/Home-technik/Refigerator.svg', name: "Холодильники" },
        { img: './header-list/Home-technik/Plate.svg', name: "Плити" },
        { img: './header-list/Home-technik/Oven.svg', name: "Духовки" },
        { img: './header-list/Home-technik/Vacuum-cleaner.svg', name: "Пилососи" },
        { img: './header-list/Home-technik/DryerHair.svg', name: "Гігієна" },
        { img: './header-list/Home-technik/WithoutEnergy.svg', name: "Автономне живлення" },
      ],
      Climat: [
        { img: './header-list/Climat/air-conditioner.svg', name: "Кондеціонери" },
        { img: './header-list/Climat/Water-heaters.svg', name: "Водонагрівачі" },
        { img: './header-list/Climat/Heaters.svg', name: "Обігрівачі" },
        { img: './header-list/Climat/Boilers.svg', name: "Котли" },
        { img: './header-list/Climat/Heatpumps.svg', name: "Теплові насоси" },
        { img: './header-list/Climat/Radiators.svg', name: "Радіатори" },
        { img: './header-list/Climat/Humidifiers.svg', name: "Зволожувачі" },
        { img: './header-list/Climat/PumpsWaterSupply.svg', name: "Насоси та водопостачання" },
        { img: './header-list/Climat/Camins.svg', name: "Каміни" },
      ],
      Home: [
        { img: './header-list/Home/Plumbing.svg', name: "Сантехніка" },
        { img: './header-list/Home/Repair.svg', name: "Ремонт" },
        { img: './header-list/Home/Dishes.svg', name: "Посуд" },
        { img: './header-list/Home/FurnitureIhome.svg', name: "Меблі" },
        { img: './header-list/Home/WithoutEnergy.svg', name: "Автономне живлення" },
        { img: './header-list/Home/AlarmsCamerasIhome.svg', name: "Сигналізації та відеокамери" },
        { img: './header-list/Home/HealthIhome.svg', name: "Медицина" },
        { img: './header-list/Home/CosmeticAccessoriesIhome.svg', name: "Косметичне приладдя" },
        { img: './header-list/Home/PetsIhome.svg', name: "Зоотовари" },
      ],
      ChildTovar: [
        { img: './header-list/Child-tovar/PushchairsIkids&toys.svg', name: "Візочки" },
        { img: './header-list/Child-tovar/CribsIKIDS.svg', name: "Ліжечка" },
        { img: './header-list/Child-tovar/HighChairsIkids.svg', name: "Стільчики для годування" },
        { img: './header-list/Child-tovar/DiapersIkids.svg', name: "Підгузки" },
        { img: './header-list/Child-tovar/kidcarseatsIkids.svg', name: "Автокрісла" },
        { img: './header-list/Child-tovar/SchoolIkids.svg', name: "Школа" },
        { img: './header-list/Child-tovar/Child-Bysicle.svg', name: "Велосипеди" },
        { img: './header-list/Child-tovar/Toys&Entertainmentlkids.svg', name: "Іграшки й розваги" },
        { img: './header-list/Child-tovar/RCToysIkids.svg', name: "РК моделі" },
      ],

      Car: [
        { img: './header-list/cars/TyresICars.svg', name: "Шини" },
        { img: './header-list/cars/RimsICars.svg', name: "Диски" },
        { img: './header-list/cars/kidCarSeatsICars.svg', name: "Дитячі крісла" },
        { img: './header-list/cars/DashcamsIcars.svg', name: "Реєстратори" },
        { img: './header-list/cars/SoundAndElectronicsICars.svg', name: "Звук та електроніка" },
        { img: './header-list/cars/BatteriesIcars.svg', name: "Акумулятори" },
        { img: './header-list/cars/EngineOilsIcars.svg', name: "Моторні мастила" },
        { img: './header-list/cars/PressureWashesICars.svg', name: "Автомийки" },
        { img: './header-list/cars/MotoICars.svg', name: "Мото" },
      ],
      Tool: [
        { img: './header-list/Tools/Tools.svg', name: "Інструмент" },
        { img: './header-list/Tools/ToolKits.svg', name: "Набори інструментів" },
        { img: './header-list/Tools/HandTools.svg', name: "Ручний інструмент" },
        { img: './header-list/Tools/Construction.svg', name: "Садова техніка" },
        { img: './header-list/Tools/GardenTools.svg', name: "Садовий інструмент" },
        { img: './header-list/Tools/MeasuringInstruments.svg', name: "Вимірювальні прилади" },
        { img: './header-list/Tools/GardenEquipment.svg', name: "Автономне живлення" },
        { img: './header-list/Tools/welders.svg', name: "Зварювальні апарати" },
      ],
      Tourism: [
        { img: './header-list/Tourism/BackpacksITourism.svg', name: "Рюкзаки" },
        { img: './header-list/Tourism/SuitcasesITourism.svg', name: "Валізи" },
        { img: './header-list/Tourism/TentsITourism.svg', name: "Намети" },
        { img: './header-list/Tourism/SleepingBagsITourism.svg', name: "Спальники" },
        { img: './header-list/Tourism/FlashlightsITourism.svg', name: "Ліхтарики" },
        { img: './header-list/Tourism/ThermosesITourism.svg', name: "Термоси" },
        { img: './header-list/Tourism/BurnersITourism.svg', name: "Пальники" },
        { img: './header-list/Tourism/BBQs&BrazierITourism.svg', name: "Мангали" },
        { img: './header-list/Tourism/FishingITourism.svg', name: "Риболовля" },
      ],
      Sport: [
        { img: './header-list/Sport/Bysicle.svg', name: "Велосипеди" },
        { img: './header-list/Sport/ActiveRest.svg', name: "Активний відпочинок" },
        { img: './header-list/Sport/gameTypeStoprt.svg', name: "Ігрові види спорту" },
        { img: './header-list/Sport/WaterTypeSport.svg', name: "Водні види спорту" },
        { img: './header-list/Sport/WinterTypeSport.svg', name: "Зимові види спорту" },
        { img: './header-list/Sport/Action-camera.svg', name: "Action камери" },
        { img: './header-list/Sport/ExerciseMachines.svg', name: "Тренажери" },
        { img: './header-list/Sport/FitnesAndAerobics.svg', name: "Фітнес та аеробіка" },
        { img: './header-list/Sport/SportFood.svg', name: "Спортивне харчування" },


      ],
      Fashion: [
        { img: './header-list/Fashion/Watch.svg', name: "Годинник" },
        { img: './header-list/Fashion/smart-watch.svg', name: "Смартгодинники і браслети" },
        { img: './header-list/Fashion/Juvelir-Fashion.svg', name: "Ювелірні прикраси" },
        { img: './header-list/Fashion/Bags.svg', name: "Сумочки та галантерея" },
        { img: './header-list/Fashion/Beautifuls.svg', name: "Краса та догляд" },
        { img: './header-list/Fashion/hygiene.svg', name: "Гігієна" },
        { img: './header-list/Fashion/Cosmetics.svg', name: "Косметика і парфюм" },
        { img: './header-list/Fashion/umbrella.svg', name: "Парасольки" }
      ]
    }
  ]
  private arrDo = [
    {
      name: 'TV',
      do: ()=>{console.log('Телевизор'); this.NavigateToPage('Телевизор')}
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
       do: ()=>{console.log('Холодильник'); this.NavigateToPage('Холодильник')}
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
