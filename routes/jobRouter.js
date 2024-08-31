import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  getSingleJob,
  createAJob,
  editAJob,
  deleteAJob,
} from "../controllers/jobControllers.js";

router.route("/").get(getAllJobs).post(createAJob);
router.route("/:id").get(getSingleJob).patch(editAJob).delete(deleteAJob);

export default router;
