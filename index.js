import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();


const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
function check(req,res,next){
    const one = req.body["password"];
    if(one === "ILoveProgramming"){
        next();
    }else {
        res.status(403).send("Access Denied: Incorrect Password");
    }
}
// app.use(check);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
app.post("/check",check,(req,res)=>{
    res.sendFile(__dirname + "/public/secret.html");
});

