import express from "express";
import { getMultiple } from "../services/programmingLanguages";

export const getRouter = () => {
  const router = express.Router();

  /* GET programming languages. */
  router.get("/", async (req, res, next) => {
    try {
      res.json(await getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  return router;
};
