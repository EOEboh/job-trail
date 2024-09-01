import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  getSingleJob,
  createAJob,
  editAJob,
  deleteAJob,
} from "../controllers/jobControllers.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

// add validateJobInput to the controllers that require a body request! (POST & PATCH)
router.route("/").get(getAllJobs).post(validateJobInput, createAJob);
router
  .route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(validateJobInput, validateIdParam, editAJob)
  .delete(validateIdParam, deleteAJob);

export default router;
