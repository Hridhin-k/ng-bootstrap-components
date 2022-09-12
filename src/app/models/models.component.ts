import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'https://images.ctfassets.net/x7j9qwvpvr5s/4tmKYOko7WVs6lt7ryhWrR/2311750e74833d0584c60a2d11e75d11/Model-Menu-MY20-Diavel-1260-Dark-Stealth.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/2OBs5O43R9pYIWwupQZpcO/9885cb2b65e7b6efb2508397e0448f17/MY-22-Panigale-V4-S-Model-Blocks-630x390-V06.png',
    'https://images.carandbike.com/bike-images/big/ducati/monster-797/ducati-monster-797.jpg?v=16',
    'https://www.motorcycle.com/blog/wp-content/uploads/2022/08/080422-ducati-2023-Monster-SP-f.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/2MZbyd86DTCveTRxVvkwNX/1cd516e19a89650c1447214d1999db39/Model-Menu-MY22-MTS-V2S-Rd-v06.png',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
