const mongoose = require('mongoose');
const dbURI = "mongodb+srv://bergus:rugbymad123@cluster0.hhhm6.mongodb.net/BoardReviews?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');