import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput, IonIcon, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SQLiteService } from '../sqlite.service';
@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.page.html',
  styleUrls: ['./gestionar.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonIcon, CommonModule,FormsModule,ReactiveFormsModule,IonContent,IonHeader,IonTitle,IonToolbar,IonItem,IonLabel,IonButton,IonInput],
})

export class GestionarPage implements OnInit {
  formularioCita: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sqliteService: SQLiteService,
    private router: Router
  ) {
    this.formularioCita = this.fb.group({
      texto: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {}

  async agregarCita() {
    if (this.formularioCita.valid) {
      const { texto, autor } = this.formularioCita.value;
      await this.sqliteService.addCita(texto, autor);
      this.formularioCita.reset();
      this.router.navigate(['/home']);
    }
  }
}