import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initializeDatabase() {
    if (Capacitor.getPlatform() === 'web') {
      console.log('Inicializando SQLite para la plataforma web...');
      await this.sqlite.initWebStore(); 
    }
  
    this.db = await this.sqlite.createConnection('citasDB', false, 'no-encryption', 1, false); 
    if (this.db) {
      await this.db.open(); 
      await this.createTables(); 
    } else {
      console.error('No se pudo establecer la conexión con la base de datos.');
    }
  }

  private async createTables() {
    const query = `
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        texto TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `;
    await this.db?.execute(query);
  }

  async addCita(texto: string, autor: string) {
    const query = `
      INSERT INTO citas (texto, autor) VALUES (?, ?);
    `;
    await this.db?.run(query, [texto, autor]);
  }

  async getCitas(): Promise<{ id: number; texto: string; autor: string }[]> {
    const query = `SELECT * FROM citas;`;
    const result = await this.db?.query(query);
    return result?.values || [];
  }

  async deleteCita(id: number) {
    const query = `DELETE FROM citas WHERE id = ?;`;
    await this.db?.run(query, [id]);
  }

  async deleteAllCitas() {
    const query = `DELETE FROM citas;`;
    await this.db?.execute(query);
  }
}
