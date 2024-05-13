import { Pool } from "pg";
import config from "../../config";
import crypto from "crypto";

function uuid() {
  return crypto.randomBytes(16).toString("hex").replace(/-/g, "");
}

const postpres = config.database;

class PostgresRepository {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: postpres.host,
      port: postpres.port,
      database: postpres.name,
      user: postpres.user,
      password: postpres.password,
    });
  }

  public async createTable() {
    const query = `CREATE TABLE IF NOT EXISTS orders (
      id VARCHAR(255) PRIMARY KEY,
      order_title VARCHAR(255) NOT NULL,
      order_description VARCHAR(255) NOT NULL
    )`;
    await this.pool.query(query);
  }

  public async createOrder() {
    const query = `
        INSERT INTO orders (id, order_title, order_description)
        VALUES 
        (${uuid()}, 'Test Onder', 'Test Onder Beschrijving')
      `;

    await this.pool.query(query);
  }

  public async testConnection() {
    try {
      await this.createTable();

      await this.createOrder();

      const result = await this.pool.query("SELECT * FROM orders");

      if (result.rowCount == null || result.rowCount > 0) return console.log("Connection successful");

      throw new Error("Connection failed");
    } catch (error) {
      console.log("Failed connection: ", error);
    }
  }
}

export default PostgresRepository;
