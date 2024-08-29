const express = require("express");
const router = express.Router();

//Root route
router.get("/", (req, res) => {
  res.send("Hello World");
});

//About route
router.get("/about", (req, res) => {
  res.send("This is the about page");
});

//Contact route
router.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

//Handle form submission
router.post('/submit',
    (req,res) => {
        const {name, email} =req.body;
        console.log(`Name: ${name}, Email: ${email}`);
        res.send(`Thank you, ${name}! Your email (${email}) has been received.`);
    }
);
module.exports = router;