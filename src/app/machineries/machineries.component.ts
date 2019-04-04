import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

import {Machinery} from '../shared/machinery';
import {MachineryService} from '../services/machinery.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-machineries',
  templateUrl: './machineries.component.html',
  styleUrls: ['./machineries.component.scss']
})

export class MachineriesComponent implements OnInit {
  machinaries: MachinaryDataSource | null;
  displayedColumns: string[] = ['position', 'name', 'description', 'stock', 'model', 'brand', 'type', 'actions'];
  constructor(public machineryService: MachineryService, public dialog: MatDialog) {
    this.getMachinariesList();
  }

  ngOnInit(): void {
  }

  createMachinaryHandler(machinery: Machinery) {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {machinery: machinery }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('maquinarias', )
      if (result === 1) {
        this.getMachinariesList();
      }
    });
  }

  getMachinariesList = () => {
    this.machinaries = new MachinaryDataSource(this.machineryService);
  }

  delete = (id: Number) => {
    this.machineryService.deleteMachinery(id).subscribe(
      any => {console.log(any); this.getMachinariesList(); }
    );
  }
}

export class MachinaryDataSource extends DataSource<Machinery> {
  machinaryService: MachineryService;
  constructor(machineryService: MachineryService) {
    super();
    this.machinaryService = machineryService;
  }

  connect(): Observable<Machinery[]> {
    return this.machinaryService.getMachineries();
  }

  disconnect(): void {
  }
}


