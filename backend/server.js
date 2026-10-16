const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

app.get("/", (req, res) => {
  res.send("Meghana's portfolio backend is running!");
});

// Receive contact form messages
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide your name, email, and message.",
      });
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    console.log("Contact message saved to MongoDB!");

    res.status(201).json({
      success: true,
      message: "Your message was saved successfully!",
    });
  } catch (error) {
    console.error("Error saving contact message:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again later.",
    });
  }
});

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "meghanaPortfolio",
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
