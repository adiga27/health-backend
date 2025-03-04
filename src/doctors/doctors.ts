import Doctor from "../doctorModel";
import { Request, Response, NextFunction } from "express";
import catchAsync from "../util/catchAsync";

import { DoctorType } from "../type";

// const Doctor = [
//   {
//     id: 1,
//     firstName: "Neha",
//     lastName: "Kapoor",
//     specialist: "Gynecologist",
//     location: "Chennai, India",
//     experience: 9,
//     about:
//       "Experienced gynecologist specializing in maternal care, reproductive health, and infertility treatments. Committed to providing compassionate and personalized care.",
//     workingTime: "11:00AM",
//     education: "Madras Medical College, Chennai",
//   },
//   {
//     id: 2,
//     firstName: "Rachel",
//     lastName: "Fernandez",
//     specialist: "Neurologist",
//     location: "Mumbai, India",
//     experience: 8,
//     about:
//       "Passionate neurologist with a keen interest in neurodegenerative diseases. Dedicated to providing top-notch patient care and cutting-edge treatments.",
//     workingTime: "10:00AM",
//     education: "St. John's Medical College, Mumbai",
//   },
//   {
//     id: 3,
//     firstName: "Amit",
//     lastName: "Verma",
//     specialist: "Dermatologist",
//     location: "Delhi, India",
//     experience: 6,
//     about:
//       "Expert in skin treatments, including acne, eczema, and cosmetic dermatology. Committed to helping patients achieve healthy and glowing skin.",
//     workingTime: "3:00PM",
//     education: "AIIMS, New Delhi",
//   },
//   {
//     id: 4,
//     firstName: "Sophia",
//     lastName: "Nair",
//     specialist: "Pediatrician",
//     location: "Kochi, India",
//     experience: 7,
//     about:
//       "Dedicated pediatrician with years of experience in child healthcare. Focused on preventive medicine and holistic child development.",
//     workingTime: "9:00AM",
//     education: "CMC, Vellore",
//   },
//   {
//     id: 5,
//     firstName: "Karan",
//     lastName: "Sharma",
//     specialist: "Orthopedic Surgeon",
//     location: "Pune, India",
//     experience: 10,
//     about:
//       "Specialized in joint replacement surgeries and sports injuries. Striving to improve mobility and quality of life for patients.",
//     workingTime: "5:00PM",
//     education: "Grant Medical College, Pune",
//   },
// ];

export const getAllDoctors = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const doctors = await Doctor.find();

  if (!doctors) {
    return res.status(500).json({
      status: "error",
      message: "error fetching doctors",
    });
  }

  res.status(200).json({
    status: "success",
    message: {
      doctors,
    },
  });
});

export const getOneDoctor = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "id not found",
    });
  }

  const doctor = await Doctor.findById(id);

  res.status(200).json({
    status: "success",
    message: {
      doctor,
    },
  });
});

export const createDoctor = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: DoctorType = req.body;

  if (
    !data.firstName ||
    !data.lastName ||
    !data.image ||
    !data.specialist ||
    !data.location ||
    !data.about ||
    !data.education ||
    !data.experience ||
    !data.workingTime
  ) {
    return res.status(400).json({
      status: "error",
      message: "data insufficient",
    });
  }

  const doctor = await Doctor.create({
    firstName: data.firstName,
    lastName: data.lastName,
    image: data.image,
    specialist: data.specialist,
    location: data.location,
    experience: data.experience,
    about: data.about,
    workingTime: data.workingTime,
    education: data.education,
  });

  if (!doctor) {
    return res.status(500).json({
      status: "error",
      message: "Internal Error",
    });
  }
  return res.status(201).json(doctor);
});
