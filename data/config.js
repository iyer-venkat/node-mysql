import dotenv from "dotenv";
dotenv.config();

export const config = {
  db: {
    connectionLimit: 20,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB,
  },
  listPerPage: 10,
};
