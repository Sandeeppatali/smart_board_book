// backend/seed/seedFaculties.js
import mongoose from "mongoose";
import Faculty from "../models/Faculty.js";
import fs from "fs";
import bcrypt from "bcryptjs";

// ❌ Hardcoded URI (direct Atlas connection)
const MONGODB_URI =
  process.env.MONGODB_URI;

async function run() {
  try {
    // ✅ Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      dbName: "smart_book", // use your actual DB name
    });
    console.log("✅ MongoDB connected");

    // ✅ Load faculty JSON file
    const raw = JSON.parse(
      fs.readFileSync("./backend/seed/faculty_cleaned.json", "utf8")
    );

    // ✅ Prepare documents
    const docs = raw.map((x) => ({
      facultyId: x.facultyId,
      name: x.name,
      branch: x.branch
        .replace("AI & ML", "AIML")
        .replace("Basic Science ", "Basic Science"),
      email: x.email.trim().toLowerCase(),
      phone: x.phone || "",
      role: "faculty",
      passwordHash: bcrypt.hashSync("Sahyadri@123", 10), // default password
    }));

    // ✅ Reset + insert
    await Faculty.deleteMany({});
    await Faculty.insertMany(docs);

    console.log(`🎉 Seeded faculties: ${docs.length}`);
  } catch (err) {
    console.error("❌ Error seeding faculties:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  }
}

// Run the script
run();
