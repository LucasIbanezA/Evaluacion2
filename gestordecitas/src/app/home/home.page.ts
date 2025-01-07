import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButtons, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone'
import { NgIf } from '@angular/common';
import { SQLiteService } from '../sqlite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonButton, IonIcon, IonFabButton, IonFab, IonContent, IonTitle, IonToolbar, IonHeader,NgIf,IonButtons],
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  citas: { id: number; texto: string; autor: string }[] = [];
  eliminarHabilitado = false;

  constructor(private sqliteService: SQLiteService, private router: Router) {}

  async ngOnInit() {
    await this.sqliteService.initializeDatabase();
    await this.cargarCitas();
  }

  async ionViewWillEnter() {
    await this.cargarCitas();
  }

  async cargarCitas() {
    this.citas = await this.sqliteService.getCitas();
  }

  async eliminarCita(id: number) {
    await this.sqliteService.deleteCita(id);
    await this.cargarCitas();
  }

  navegarAGestionar() {
    this.router.navigate(['/gestionar']);
  }

  navegarAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }
}

