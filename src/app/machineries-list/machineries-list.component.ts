import { Component, OnInit } from '@angular/core';
import { Machinery } from '../shared/machinery';
import { DataSource } from '@angular/cdk/collections';
import { MachineryService } from '../services/machinery.service';
import {CategoryService} from '../services/category.service';
import {TipoService} from '../services/tipo.service';
import {Categoria} from '../shared/category';
import {Tipo} from '../shared/tipo';

@Component({
  selector: 'app-machineries-list',
  templateUrl: './machineries-list.component.html',
  styleUrls: ['./machineries-list.component.scss']
})
export class MachineriesListComponent implements OnInit {
  // machineryList: MachineryDataSource | null;
  constructor(public machineryService: MachineryService,
    private categoryService: CategoryService,
    private tipoService: TipoService,) {
    // this.getMachinariesList();
  }
  categories: Categoria[];
  machineries: Machinery[];
  tipos: Tipo[];
  tipoMaquinaria={id: 1};
  brandProperty='';
  modelProperty='';
  capacityProperty='';
  // dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.machineryService.getMachineries().subscribe(list => {
      console.log(list); this.machineries = list;
    });
    // this.machineries.forEach(maquinaria => {

    // })
    this.categoryService.getCategories().subscribe(categories => {
      console.log(categories); this.categories = categories;
    });
    this.tipoService.getTipos().subscribe(tipos => {
      console.log(tipos); this.tipos = tipos;
    });
  }

  selected(eventvalue) {
    this.categories = eventvalue;
    const property = [];
    for (let i = 0; i < this.machineries.length; i++) {
      const currentMachinery = this.machineries[i];
      if (!property.find(element => currentMachinery[eventvalue] === element)) {
        property.push(currentMachinery[eventvalue]);
      }
    }

    let res = [];
    let bigArray = [];
    property.forEach(propertyE => {
      res = [];
      this.machineries.forEach((element) => {
        if (element[eventvalue] === propertyE) {
          res.push(element);
        }
      });
      console.log('RES', res);
      bigArray.push(res);
    });
    console.log('BIG', bigArray);
  }
  delete = (id: Number) => {
    this.machineryService.deleteMachinery(id).subscribe(
      any => {console.log(any); this.getData(); }
    );
  }
  getData = () => {
    this.machineryService.getMachineries().subscribe(list => {
      console.log(list); this.machineries = list;
    });
  }

  filterByType()
  {
    const property = [];
    for (let i = 0; i < this.machineries.length; i++) {
      const currentMachinery = this.machineries[i];
      if (currentMachinery.idTipoMaquinaria === this.tipoMaquinaria.id) {
        property.push(currentMachinery);
      }
    }
  }
}

