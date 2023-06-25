import mysql from "mysql2/promise";
import { config } from "../data/config";

export const query = async (sql, params) => {
  let results = [];
  try {
    console.log(config.db);
    const connection = await mysql.createPool(config.db);
    [results] = await connection.execute(sql, params);
  } catch (e) {
    console.log(e);
  } finally {
    return results;
  }
};
