import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

import {Machinery} from '../shared/machinery';
import {MachineryService} from '../services/machinery.service';

@Component({
  selector: 'app-maquinary-form',
  templateUrl: './maquinary-form.component.html',
  styleUrls: ['./maquinary-form.component.scss']
})
export class MaquinaryFormComponent implements OnInit {
  formControl = new FormControl('', [
    Validators.required
  ]);
  constructor(public dialogRef: MatDialogRef<MaquinaryFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Machinery,
              public projectService: MachineryService) { }

  ngOnInit() {
  }

}
