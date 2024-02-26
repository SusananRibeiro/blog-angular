import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="" // deixa a imagem dinâmica
  @Input()
  cardTitle:string= "" // deixa o título dinâmico
  @Input()
  cardDescription:string ="" // deixa a descrição dinâmica
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
