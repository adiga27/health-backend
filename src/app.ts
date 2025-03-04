import express from "express";
import cors from "cors";
import { createDoctor, getAllDoctors, getOneDoctor } from "./doctors/doctors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/doctors", getAllDoctors);
app.get("/doctors/:id", getOneDoctor);
app.post("/doctors", createDoctor);

export default app;
