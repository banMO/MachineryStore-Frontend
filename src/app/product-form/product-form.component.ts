import { Component, Inject, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../shared/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor (public productService: ProductService) {

   }
  // productService: ProductService;

  product: Product = {
              nombre: '',
              descripcion: '',
              stock: 0,
              modelo: '',
              marca: '',
              disponible: true,
              idTipoMaquinaria: 0
            };
  // images: [];

  ngOnInit() {
  }

  saveProduct(): void {
   console.log('Repo', this.product);
   const currentStock = this.product.stock;
   const currentTipo = this.product.idTipoMaquinaria;
   this.product.stock = Number(currentStock);
   this.product.idTipoMaquinaria = Number(currentTipo);
   console.log('Product', this.product);
   const act = this.productService.crearProducto(this.product).subscribe(any => console.log('Value', any));
   console.log('ACTUAL', act);
  }

  selectFile(event): void {
    // const images = files;
    // console.log('IMAGE', images.length);
    // const file = images[0];
    // var preview = document.querySelector('img');
    //   var reader  = new FileReader();
    //   reader.onloadend = function () {
    //     preview.src = reader.result.toString();
    //   }
    //   if (file) {
    //     reader.readAsDataURL(file);
    //     console.log('result',reader.readAsDataURL(file));
    //   }
    // console.log('image', file);

    // let files = event.target.files;
    // if (files) {
    //   for (let file of files) {
    //     let reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       this.images.push(e.target.result);
    //     }
    //     reader.readAsDataURL(file);
    //   }
    // }
  }
  }

//   previewFile(file): void {
//     var preview = document.querySelector('img');
//     // var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();

//     reader.onloadend = function () {
//       console.log('RESULYADO',reader.result );
//       var imagen = reader.result.toString();
//       console.log('VALUE', imagen);
//       // var image = new Image();
//       // image.src = imagen ;
//       // document.body.appendChild(image);
//     }
//     if (file) {
//       reader.readAsDataURL(file);
//     } else {
//       preview.src = "";
//     }
// }
