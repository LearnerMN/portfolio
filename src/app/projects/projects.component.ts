import { Component, OnInit } from '@angular/core';


declare interface LinkInfo {
  path: string;
  icon: string;
  color: string;
}

declare interface ProjectInfo {
  title: string;
  img: string;
  description: string;
  links: Array<LinkInfo>;
  technologies: Array<string>;
}

export const PROJECT: ProjectInfo[] = [
  { 
    title: "Crowdjob",
    img: "crowdjob.png",
    description: "Participated development of crowd working platform at Unimedia.",
    links: [
      {
        path: "https://www.crowd-job.com/",
        icon: "fa fa-external-link",
        color: "btn-warning"
      }
    ],
    technologies:["Ruby on Rails", "MySQL", "AWS"]
  },
  { 
    title: "Choimado",
    img: "choimado.png",
    description: "Small window based, easy to use, feature rich floating browser, at Unimedia",
    links: [
      {
        path: "https://play.google.com/store/apps/details?id=jp.unimedia.browser",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["Android", "AWS", "Ads", "Google analytics"]
  },
  { 
    title: "Just a bit",
    img: "justabit.png",
    description: "Mobile apps for a client of Data Input side in crowdsourcing system, at Unimedia",
    links: [
      {
        path: "#",
        icon: "fa fa-apple",
        color: "btn-info"
      },
      {
        path: "#",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["Android", "iOS", "Ruby on Rails", "AWS"]
  },
  { 
    title: "Naishyoku Admin",
    img: "android_naishyoku_admin.png",
    description: "Business management service Aedes provided by the job market, at Unimedia",
    links: [
      {
        path: "https://itunes.apple.com/jp/app/%E5%BA%97%E8%88%97%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEaedes-admin/id1154430899?l=en",
        icon: "fa fa-apple",
        color: "btn-info"
      },
      {
        path: "https://play.google.com/store/apps/details?id=jp.aedes.store",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["Android", "iOS", "Web-based", "QRCode"]
  },
  { 
    title: "Naishyoku Member",
    img: "naishyoku_user.png",
    description: "For the members of Aedes, employer to connect employee, at Unimedia",
    links: [
      {
        path: "https://itunes.apple.com/cz/app/aedes%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B8-%E5%86%85%E8%81%B7%E3%81%8C%E3%82%82%E3%81%A3%E3%81%A8%E6%A5%BD%E3%81%97%E3%81%8F-%E3%82%82%E3%81%A3%E3%81%A8%E4%BE%BF%E5%88%A9%E3%81%AB/id1156018178",
        icon: "fa fa-apple",
        color: "btn-info"
      },
      {
        path: "https://play.google.com/store/apps/details?id=jp.aedes.member",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["Android", "iOS", "Firebase Notification", "Web-based"]
  },
  { 
    title: "Trump Wall Game",
    img: "trump_wall.png",
    description: "Trump wall is arcade game for iOS and Android platform, at Unimedia",
    links: [
      {
        path: "#",
        icon: "fa fa-apple",
        color: "btn-info"
      },
      {
        path: "https://play.google.com/store/apps/details?id=mn.unimedia.TrumpsWalld",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["Cocos2d-x", "iOS", "Android", "FB API"]
  },
  { 
    title: "Nba Fantasy",
    img: "nba_fantasy.png",
    description: "I teamed up with GB. We innovated NBA daily fantasy.",
    links: [
      {
        path: "https://github.com/LearnerMN/nba_fantasy/tree/master/fan_nba_android",
        icon: "fa fa-android",
        color: "btn-danger"
      },
      {
        path: "https://github.com/LearnerMN/nba_fantasy",
        icon: "fa fa-github",
        color: "btn-default"
      },
    ],
    technologies:["Laravel", "Angular 2+", "Android", "MySQL", "Vagrant"]
  },
  {
    title: "Chaton",
    img: "chaton.png",
    description: "Teamed up with Muugii and developed online chating application.",
    links: [
      {
        path: "https://github.com/CS572-MWA/",
        icon: "fa fa-github",
        color: "btn-default"
      },
      {
        path: "http://chaton.gq/",
        icon: "fa fa-external-link",
        color: "btn-warning"
      }
    ],
    technologies:["Angular 5", "Redux", "Express", "MongoDB", "Socket.io"]
  },
  { 
    title: "Pill Heals",
    img: "pill-heals.png",
    description: "Teamed up with 2 people. We developed board game for the iOS and Android.",
    links: [
      {
        path: "#",
        icon: "fa fa-apple",
        color: "btn-info"
      },
      {
        path: "#",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["Cocos2d-x", "Android", "iOS", "PHP", "MySQL"]
  },
  { 
    title: "Negj",
    img: "negj.png",
    description: "The free Quiz App to win real prizes such as $, discount cards for iOS and Android.",
    links: [
      {
        path: "#",
        icon: "fa fa-apple",
        color: "btn-info"
      },
      {
        path: "#",
        icon: "fa fa-android",
        color: "btn-danger"
      }
    ],
    technologies:["iOS", "Android", "Ruby on Rails", "MySQL", "AWS"]
  },
  { 
    title: "Evaluation Analyzer",
    img: "ea.png",
    description: "For mine engineers to design, evaluate and maintain daily mine operations.",
    links: [
      {
        path: "http://gamemine.mn/",
        icon: "fa fa-external-link",
        color: "btn-warning"
      }
    ],
    technologies:["WPF", "MySQL", ".NET", "DevExpress"]
  },
  { 
    title: "Library System",
    img: "library.png",
    description: "Implemented an android app to provide the functionality of a library system.",
    links: [
      {
        path: "#",
        icon: "fa fa-github",
        color: "btn-default"
      }
    ],
    technologies:["Android", "Firebase Realtime Database"]
  },
  { 
    title: "Puzzle Game",
    img: "puzzle.png",
    description: "Clone IQ game of boat and matches problems on the cross platform.",
    links: [
      {
        path: "https://github.com/LearnerMN/puzzle_game",
        icon: "fa fa-github",
        color: "btn-default"
      }
    ],
    technologies:["Cocos2d-x", "Android", "iOS", "Desktop"]
  },
  
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<ProjectInfo>;

  constructor() { }

  ngOnInit() {
    this.projects = PROJECT.filter(item => item);
  }

}