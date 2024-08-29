const http = require("http");
const url = require("url");
const greetings = require("./greetings");
const connectDB = require("./db");
const User = require("./User");

const hostname = "127.0.0.1";
const port = 3000;

connectDB();   // Connect to the database

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET") {
    if (pathname === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.write(greetings.sayHello("Visitor") + "\n");
      res.end();
    } else if (pathname === "/about") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("This is the About page");
    } else if (pathname === "/users") {
      // Retrieve all users
      try {
        const users = await User.find(); // Await the result
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(users));
      } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal Server Error.\n");
      }
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Page not found!");
    }
  } else if (req.method === 'POST' && pathname === '/users') {
    // Create a new user
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString(); // Convert Buffer to String
    });
    req.on('end', async () => {
      try {
        const { name, email } = JSON.parse(body);
        const user = new User({ name, email });
        await user.save();
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(user));
      } catch (error) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Bad Request.\n");
      }
    });
  } else if (req.method === 'PUT' && pathname.startsWith('/users/')){

    //Extract userID from the URL
    const userId = pathname.split('/')[2];
    let body='';

    req.on('data', chunk => {
      body +=chunk.toString();   //Convert Buffer to String

    });

    req.on('end', async() => {
      try{
        const {name, email} = JSON.parse(body);
        const updatedUser = await User.findByIdAndUpdate(userId, {name, email}, {new:true});
        if(updatedUser){
          res
        }
      }
    })

  }


   else {
    res.statusCode = 405;
    res.setHeader("Content-Type", "text/plain");
    res.end("Method not allowed.");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
