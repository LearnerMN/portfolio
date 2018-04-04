import { Component, OnInit } from '@angular/core';


declare interface SkillItem{
  name: string;
  img: string;
}
declare interface SkillInfo {
  title: string;
  icon: string;
  list: Array<SkillItem>;
}

export const SKILLS: SkillInfo[] = [
  { 
    title: "Languages",
    icon: "fa fa-globe",
    list:[ 
      { name: "C++", img:"./assets/img/logos/c-plus-plus-logo.png" }, 
      { name: "Java", img:"./assets/img/logos/java.png" },
      { name: "JavaScript", img:"./assets/img/logos/js-logo.png" },
      { name: "TypeScript", img:"./assets/img/logos/typescript.png" },
      { name: "PHP", img:"./assets/img/logos/php.png" },
      { name: "Swift", img:"./assets/img/logos/swift.png" },
      { name: "Obj-C", img:"./assets/img/logos/objC.png" },
      { name: "Ruby", img:"./assets/img/logos/ruby.png" },
      { name: "Python", img:"./assets/img/logos/python.png" },
      { name: "HTML5", img:"./assets/img/logos/html5.png" },
      { name: "CSS3", img:"./assets/img/logos/css3.png" },
      { name: "SQL", img:"./assets/img/logos/sql.png" },
    ]
  },
  { 
    title: "Android", 
    icon: "fa fa-android",
    list:[ 
      { name: "Android Studio", img:"./assets/img/logos/android_studio.png" },
      { name: "Dagger 2", img:"./assets/img/logos/dagger.png" },
      { name: "Event Bus", img:"./assets/img/logos/event-bus.png" },
      { name: "RxJava", img:"./assets/img/logos/rx-java.png" },
      { name: "Retrofit", img:"./assets/img/logos/retrofit.png" },
      { name: "Glide", img:"./assets/img/logos/glide.png" },
      { name: "Butterknife", img:"./assets/img/logos/butterknife.png" },
      { name: "Espresso", img:"./assets/img/logos/espresso.png" }, 
      { name: "Firebase", img:"./assets/img/logos/firebase.png" },
      { name: "Realm", img:"./assets/img/logos/realm.png" },
      { name: "SQLite", img:"./assets/img/logos/sqlite.png" },
      { name: "Leak Canary", img:"./assets/img/logos/leakcanary.png" },
      { name: "MVVM Data Binding", img:"./assets/img/logos/data-binding.png" },
      { name: "Architecture Component", img:"./assets/img/logos/arch_comp.png" },
      { name: "MVP Architecture", img:"./assets/img/logos/mvp.png" },
    ]
  },
  { 
    title: "iOS", 
    icon: "fa fa-apple",
    list:[ 
      { name: "XCode", img:"./assets/img/logos/xcode.png" },
      { name: "CocoaPods", img:"./assets/img/logos/cocoapods.png" }, 
      { name: "XCTest", img:"./assets/img/logos/xctest.png" },
      { name: "Alamofire", img:"./assets/img/logos/alamofire.png" },
      { name: "AFNetworking", img:"./assets/img/logos/afn.png" },
      { name: "Core Data", img:"./assets/img/logos/core-data.png" },
      { name: "Realm", img:"./assets/img/logos/realm.png" },
      { name: "SQLite", img:"./assets/img/logos/sqlite.png" },
    ]
  },
  { 
    title: "Frameworks", 
    icon: "fa fa-briefcase",
    list:[ 
      { name: "Angular 5", img:"./assets/img/logos/angular.png" },
      { name: "Redux", img:"./assets/img/logos/redux.png" },
      { name: "Express", img:"./assets/img/logos/express.png" }, 
      { name: "Laravel", img:"./assets/img/logos/laravel.png" },
      { name: "Ruby on Rails", img:"./assets/img/logos/rails.png" },
      { name: "Node.js", img:"./assets/img/logos/nodejs.png" },
      { name: "Bootstrap", img:"./assets/img/logos/bootstrap.png" },
      { name: "Materialize", img:"./assets/img/logos/materialize.png" },
      { name: "Foundation", img:"./assets/img/logos/foundation.png" },
      { name: "UIKit", img:"./assets/img/logos/uikit.png" },
    ]
  },
  { 
    title: "Game Engine", 
    icon: "fa fa-gamepad",
    list:[ 
      { name: "Cocos2d-x", img:"./assets/img/logos/cocos2d-x.png" },
      { name: "Cocos", img:"./assets/img/logos/cocos.png" },
      { name: "Cocos Studio", img:"./assets/img/logos/cocos-studio.png" }
    ]
  },
  { 
    title: "Tools", 
    icon: "fa fa-wrench",
    list:[ 
      { name: "Vagrant", img:"./assets/img/logos/vagrant.png" },
      { name: "Laravel Homestead", img:"./assets/img/logos/homestead.png" }, 
      { name: "Redmine", img:"./assets/img/logos/redmine.png" },
      { name: "Git", img:"./assets/img/logos/git.png" },
      { name: "Appium", img:"./assets/img/logos/appium.png" },
    ]
  },
  { 
    title: "Libraries", 
    icon: "fa fa-th-list",
    list:[ 
      { name: "jQuery", img:"./assets/img/logos/jquery.png" },
      { name: "FabricJS", img:"./assets/img/logos/fabric.png" },
      { name: "Rspec", img:"./assets/img/logos/rspec.png" },
      { name: "Capybara", img:"./assets/img/logos/capybara.png" },
      { name: "Selenium", img:"./assets/img/logos/selenium.png" }
    ]
  },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Array<SkillInfo>;
  constructor() { }

  ngOnInit() {
    this.skills = SKILLS.filter(item => item);
  }

}
