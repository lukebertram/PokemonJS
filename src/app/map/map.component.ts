import { Component, OnInit, AfterViewInit, ViewChild, Directive, ElementRef } from '@angular/core';
import { Map } from '../map.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(){}

  @ViewChild('areaMap') areaMap: ElementRef;

  map = new Map(
    64, //tile size of 64px
    'location of tilset image',
    10, //number of cols in the map
    10, //number of rows in the map
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
  );

  constructor() { }

  ngAfterViewInit() {
    let ctx: CanvasRenderingContext2D = this.areaMap.nativeElement.getContext('2d');

    ctx.clearRect(0, 0, 640, 640);
    let tileSet = new Image();
    tileSet.onload = function(){
      ctx.drawImage(tileSet,16,0,16,16,0,0,64,64);
    }
    tileSet.src = './../../assets/images/tilesetz.png';
    // ctx.fillStyle = 'rgb(150, 150, 150)';
    // ctx.fillRect(0, 0, 640, 640);
    // ctx.drawImage(tileSet, 32, 0, 16, 16, 0, 0, 64, 64);
    ctx.drawImage(tileSet, 0, 0);
  }

}
