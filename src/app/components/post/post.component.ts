import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  //Propiedad para el Pipe
  filterPost: string = '';

  //Arreglo de objetos traidos desde un Back, para este ejemplo me sirve en Firebase
  //Lo vamos a pintar en la tabla
  posts = [
    {
      id: 1,
      title: 'La Carreta',
      date: '02/04/2023'
    },
    {
      id: 2,
      title: 'Paragón Plaza',
      date: '02/04/2022'
    },
    {
      id: 3,
      title: 'Carne a la Llanera',
      date: '02/04/2021'
    },
    {
      id: 4,
      title: 'Otro restaurant',
      date: '02/04/2020'
    },
    {
      id: 5,
      title: 'Ultima búsqueda',
      date: '02/04/2019'
    }
  ]

}
