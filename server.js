const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const db = require("./models");

const uriString =
  process.env.MONGODB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost/chatBot";

  mongoose.connect(uriString, function(err, res) {
    if (err) {
      console.log("ERROR connecting to: " + uriString + ". " + err);
    } else {
      console.log("Succeeded connected to: " + uriString);
      return { useNewUrlParser: true };
    }
  });
 
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === "production") {
  console.log("we are inside the production build ladies and gentlemen");
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
app.post('/mongoAdd', (req,res) => {
  db.Information.create({
    name: "javascript",
    language:
      'JavaScript: Initial learning curve: Easy Barrier to mastery: High  Being a very permissive programming language with little to no boilerplate code required, JavaScript is a go-to language for many beginners. To the untrained programmer, its dynamic, weak type system and implicit conversions seem to make perfect sense, such as the complete absence of distinction between integral values and floating-point values (after all, numbers are just numbers - why should 1 be any different from 1.0?) or the implicit conversions between numbers and numerical strings seen so often in both directions, e.g. 3 - "2" is 1 and "The number is: " + 42 is just "The number is: 42". Its prototype-based object model is also very simple and intuitive at first glance and offers a lot of freedom - you can practice classical inheritance with it or mix-and-match, adding properties and methods to objects on the fly as well as relating different objects in ways perhaps not available through plain classical OOP. However, mastering JavaScript is another question entirely. First of all, its dynamic, weak type system means that almost all errors are delegated to runtime so a valid JavaScript program can always go wrong at any moment. Secondly, the vast amounts of implicit coercion means that even seasoned JavaScript programmers could be surprised by seemingly nonsensical behavior, e.g. "" == false and false == " " but "" != " " (namely, JavaScript\'s loose equality operator == is non-transitive (and non-reflexive on NaN!), meaning it doesn\'t accurately describe an equivalence relation). Finally, the concept of prototypal inheritance is inherently difficult to master precisely because it offers so much freedom - the exact reason why ES6 and later versions were "forced" to introduce Java-like class syntactical sugar to hide the monster that is prototypal OOP beneath it (and cause even more confusion regarding Java/JavaScript as a result :p).'
  })
  res.send('done')
})
app.post('/mongoRetrieve', (req,res) =>{
  db.Information.findOne({name: 'javascript'})
      .then(x => {
        console.log(x)
          res.send(x)
      }).catch(err => {
          console.log(err)
      })
})

app.post("/payment", (req, res) => {
  console.log('yoo')
  try{
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  })}
  catch(error) {    
    res.send('sheee')
  }
});
