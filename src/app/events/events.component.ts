import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  discription!: string;
  constructor() { }

  ngOnInit(): void {
    const data = ' Since 2003, more than 20,000 motorcyclists from all over the world have chosen the Ducati experience to improve their riding.Very high-level teaching and instructors, prestigious locations, the entire latest Ducati range, and lots of fun have always been the characteristics that make each DRE course a unique offer.Four experiences suitable for every style Rookie: dedicated to young motorcyclists and to those who use weakened motorcycles. Perfect for those who want to ride a Ducati!Road: a course designed both for beginners who want to increase their awareness, improving the level of driving safely and for all those who wish to test the Ducati range (excluding the Panigale family) and make the most of the advantages offered by new technologies.Adventure: aimed at lovers of on and off-road adventure in the splendid setting of the Tuscan countryside!Racetrack: an experience for those who want to feel the thrill of the track. For each course, Ducati will provide its fleet of motorcycles for each participant, the possibility of renting technical clothing and purchasing their photo-video service.For any need or request for information, contact the DRE office at dre@ducati.com'

    this.discription = data
  }

}
