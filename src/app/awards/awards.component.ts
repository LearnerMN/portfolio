import { Component, OnInit } from '@angular/core';

declare interface AwardInfo {
  title: string;
  bio: string;
  description: string;
  color: string;
}
export const AWARDS: AwardInfo[] = [
  { title: '1st place', color: "green", bio: 'ROBOCODE Mongolia Cup, 2013',  description: 'Robocode is a programming game where the goal is to code a robot to compete against other robots in a battle arena. ' },
  { title: 'Best Product', color: "green", bio: 'National Creation App Contest, 2015',  description: 'developed IQ game that to solve boat and matches problem in the multi platform using Cocos2d-x game engine.' },
  { title: '2nd place', color: "green", bio: 'Unimedia Smartphone Apps Contest, 2014',  description: 'I teamed up with two people. We developed board game, called Pill Heals using Cocos2d-x game Engine for iOS and Android platform.' },
  { title: 'Special Prize', color: "green", bio: 'NAPROCK 6th International programming contest',  description: 'Participated the Naprock programming contest 2014 in Japan and won Special Prize.' },
  { title: 'Smart Mongolia App Contest', color: "green", bio: '3rd place, Dec 2014, Mongolia',  description: 'Created board game in Android platform using Cocos2d-x Game Engine.' },
  { title: 'Special Prize', color: "green", bio: 'NAPROCK 5th International programming contest',  description: 'Participated the Naprock 5th international programming contest 2013 in the Japan and won Special Prize.' },
  { title: '3rd place with team', color: "green", bio: 'National Programming Contest, 2013',  description: 'National programming contest is the premiere global programming competition conducted by and for the mongolian universities.' },
  { title: 'Got student scholarship', color: "green", bio: 'Altain khuder LLC, 2014',  description: 'Altain Khuder is a Mongolian registered mining and mineral exploration company.' },
  { title: 'Got student scholarship ', color: "green", bio: 'Toyota-Must, 2014',  description: '“Toyota – MUST” study fund founded by the donation of Toyota Motor Corp. and it awards to outstanding students to promote their academic achievements. https://goo.gl/9sLHHV' },
];


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})

export class AwardsComponent implements OnInit {

  awards: any[];

  constructor() { }

  ngOnInit() {
    this.awards = AWARDS.filter(item => item);
  }

}
