import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonToggle, IonButton, IonContent, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { SQLiteService } from '../sqlite.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonTitle, IonToolbar, IonHeader, CommonModule, FormsModule, IonContent, IonButton],
})
export class ConfiguracionPage implements OnInit {
  constructor(private sqliteService: SQLiteService) {}

  ngOnInit() {}

  async eliminarTodasLasCitas() {
    await this.sqliteService.deleteAllCitas();
    console.log('Todas las citas han sido eliminadas.');
  }
}