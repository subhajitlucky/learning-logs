const express = require("express"); //importing the express library
const app = express(); //creating an instance of express
const port = 3000; //defining the port where the server will listen

//Defining a simple route for the root URL
// app.get('/',(req,res) => {
//     res.send("Hello World");
// });



//Middleware function to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

//Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({extended:true}));

//Serve static files from the public directory
app.use(express.static("public"));

//Root route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.post("/submit", (req, res) => {
//   const { name, email } = req.body;
//   console.log(`Name: ${name}, Email: ${email}`);
//   res.send(`Thank you, ${name}! Your email (${email}) has been received.`);
// });

// //Route for the /about URL
// app.get("/about", (req, res) => {
//   res.send("This the about page");
// });

// //Route for the /contact URL
// app.get("/contact", (req, res) => {
//   res.send("This the contact page");
// });

//importing and using routers
const routes = require('./routes/index');
app.use('/', routes);


// 404 Error Handler
// app.use((req, res, next) => {
//     res.status(404).send('Sorry, page not found!');
//   });

  // General Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
//   });

  app.use(
    (req,res,next) => {
        res.status(404).sendFile(__dirname + '/public/404.html');
    }
  );

//Starting the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
