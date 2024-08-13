import { nanoid } from "nanoid";

let jobs = [
  {
    id: nanoid(),
    company: "Apple",
    position: "frontend",
  },
  {
    id: nanoid(),
    company: "Google",
    position: "backend",
  },
];

const getAllJobs = async (req, res) => {
  res.status(200).json({
    jobs,
  });
};

const createAJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({
      msg: "Please provide a valid body",
    });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: "job not found" });
  }

  res.status(200).json({
    job,
  });
};

const editAJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
};

const deleteAJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: "No job with this id" });
  }
  const updatedJobs = jobs.filter((job) => job.id !== id);

  jobs = updatedJobs;

  res.status(200).json({ msg: "job deleted", updatedJobs });
};

export { getAllJobs, getSingleJob, createAJob, editAJob, deleteAJob };
