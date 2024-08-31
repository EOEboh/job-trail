import jobModel from "../models/jobModel.js";
import { NotFoundError } from "../errors/customErrors.js";
import { StatusCodes } from "http-status-codes";

const getAllJobs = async (req, res) => {
  const allJobs = await jobModel.find({});
  res.status(200).json({ allJobs });
};

const createAJob = async (req, res) => {
  const job = await jobModel.create(req.body);
  res.status(201).json({ job });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const singleJob = await jobModel.findById(id);
  if (!singleJob) throw new NotFoundError(`no job with id: ${id}`);

  res.status(StatusCodes.OK).json({
    singleJob,
  });
};

const editAJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await jobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) throw new NotFoundError(`no job with id: ${id}`);

  res.status(200).json({ msg: "job modified", updatedJob });
};

const deleteAJob = async (req, res) => {
  const { id } = req.params;

  const deletedJob = await jobModel.findByIdAndDelete(id);
  if (!deleteAJob) throw new NotFoundError(`no job with id: ${id}`);

  res.status(200).json({ msg: "job deleted", deletedJob });
};

export { getAllJobs, getSingleJob, createAJob, editAJob, deleteAJob };
