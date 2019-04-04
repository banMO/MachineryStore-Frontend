import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {Imagens} from '../shared/imagens';
import {MachineryService} from '../services/machinery.service';
import {CategoryService} from '../services/category.service';
import {TipoService} from '../services/tipo.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Machinery} from '../shared/machinery';
import {Categoria} from '../shared/category';
import {Tipo} from '../shared/tipo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imagesContainer: Imagens[] = [];
  currentImage: ImageSnippet;
  media = {image : '', nombreMedia: null, maquinaria:'' };
  response: Machinery;
  categories: Categoria[];
  tipos: Tipo[];
  categoria={id:1};
  tipo={id:1};

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Machinery,
    public machineryService: MachineryService,
    private categoryService: CategoryService,
    private tipoService: TipoService,
    ) {
      console.log("DATA", data);
  }

  ngOnInit():void {
    this.categoryService.getCategories().subscribe(categories => {
      console.log(categories); this.categories = categories;
    });
    this.tipoService.getTipos().subscribe(tipos => {
      console.log(tipos); this.tipos = tipos;
    });
  }

  onSubmit() {
    this.dialogRef.close();
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveMachinery(): void {
    console.log('data', this.data);
    console.log('Container', this.imagesContainer);
    const idTypo = this.data.idTipoMaquinaria;
    this.data.idTipoMaquinaria = Number(this.tipo.id);
    console.log('value', this.data.idTipoMaquinaria);
    this.data.disponible = true;
    this.data.idCategoria = Number(this.categoria.id);
    console.log('value', this.data.idCategoria);
    this.data.idTipoGasto = 4;
      console.log('data3', this.data);
      var response = this.machineryService.createMachinery(this.data).subscribe( machinary => {
        const id = machinary.id;
        console.log('id ', id);
      });
      console.log('RESPONSE', this.response);
  }

  saveImage = (imageInput: any) => {
    console.log('image', imageInput);

    const file: File = imageInput.files[0];
    const reader = new FileReader();
    let image :Imagens = new Imagens();
    reader.addEventListener('load', (event: any) => {
      this.currentImage = new ImageSnippet(event.target.result, file);
      console.log(event);
      console.log(event.target);
      console.log(event.target.result);
      image.data = event.target.result.split(',')[1];
      image.imageName = file.name;
      console.log('SecondValue', image);
    });

    reader.readAsDataURL(file);
    this.imagesContainer.push(image);
    console.log('Container', this.imagesContainer);
  }
}
class ImageSnippet {
  constructor(public src: string, public file: File){

  }
}

