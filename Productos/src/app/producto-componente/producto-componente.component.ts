import { Component, OnInit } from '@angular/core';
import { producto } from './productos';


@Component({
  selector: 'app-producto',
  templateUrl: './producto-componente.component.html',
  styleUrls: ['./producto-componente.component.css']
})
export class ProductoComponenteComponent implements OnInit {

  tituloPagina: string = 'Lista de Productos'
  mostrarImagenes: boolean = false;

  private _filtrarProductos: string = '';
  get filtrarProductos(): string {
    return this._filtrarProductos;
  }

  set filtrarProductos(value: string){
    this._filtrarProductos = value;
    console.log(value);

    this.productosFiltrados = this.filtroProductos(value);
    //console.log(this.productosFiltrados);
  }

  productosFiltrados: producto[]=[]

  toggleImagenes(): void{
    this.mostrarImagenes = !this.mostrarImagenes;
  }
  Productos: producto[]= [
    {
      id:1,
      nombre:"Audifonos Buletooth",
      codigo:"BL-50",
      disponibilidad: false,
      precio: 999.99,
      rating: 4.2,
      imagenURL: '../assets/Contenido/Cajita.png'
    },
    {
      id:2,
      nombre:"Macbook Pro",
      codigo:"MAC-50",
      disponibilidad: false,
      precio: 12000,
      rating: 3.5,
      imagenURL: '../assets/Contenido/Cajita.png'
    },
    {
      id:3,
      nombre:"IPhone XS",
      codigo:"iPhone-CS398",
      disponibilidad: true,
      precio: 5000,
      rating: 4.5,
      imagenURL: '../assets/Contenido/Cajita.png'
    },
    {
      id:4,
      nombre:"Macbook Air de 13 Pulgadas",
      codigo:"MAC-13",
      disponibilidad: true,
      precio: 12000,
      rating: 1.5,
      imagenURL: '../assets/Contenido/Cajita.png'
    },
    {
      id:5,
      nombre:"Laptop HP",
      codigo:"HP-200",
      disponibilidad: false,
      precio: 8500.50,
      rating: 3,
      imagenURL: '../assets/Contenido/Cajita.png'
    },
    {
      id:6,
      nombre:"Samsung Galaxy S3",
      codigo:"SS-3",
      disponibilidad: false,
      precio: 12000,
      rating: 5,
      imagenURL: '../assets/Contenido/Cajita.png'
    },
    {
      id:7,
      nombre:"Headsets Dell",
      codigo:"DELL-50",
      disponibilidad: true,
      precio: 300,
      rating: 5,
      imagenURL: '../assets/Contenido/Cajita.png'
    }
  ]
 
  constructor() { }

filtroProductos(filtrarPor:string): producto[]{
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.Productos.filter((productos: producto) =>
  productos.nombre.toLocaleLowerCase().includes(filtrarPor))
}


  ngOnInit(): void {
    this.filtrarProductos = '';
  }

}
