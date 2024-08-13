import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  getSingleJob,
  createAJob,
  editAJob,
  deleteAJob,
} from "../controllers/jobControllers.js";
