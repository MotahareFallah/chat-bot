
const cleverbot = require("cleverbot-free")
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/messages", async (req, res) => {
   
  try {

      console.log("Making axios call");

      const { message } = req.body;
       
      const response = await cleverbot(message);
      console.log(response);
      res.status(200).json({
        response: response,
      });
   
      } catch (err) {
 
      console.log(err);
      res.status(500).json({ msg: "something bad has occurred." });

     }
  });


const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`listening on ${port}...`));