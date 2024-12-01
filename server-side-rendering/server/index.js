import express from "express";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import fs from "fs";
import App from "../src/app";

const port = process.env.PORT || 3000; // for cloud provider

//special react component only meant to be rendered on server , body of html, common ways of doing it.

const html = fs.readFileSync("dist/frontend/index.html").toString(); // not recommended readFileSync
// just for starting up here


const parts = html.split("not rendered"); // usually <--break here-->

const app = express();
app.use("/frontend", express.static("dist/frontend"));
app.use((req, res)=> {
  const reactMarkup = //goes thru parcel, so ok to use jsx
    (<StaticRouter location={req.url}>
      <App />
    </StaticRouter>);
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]); // can use template string ``
  res.end();
})
console.log(`Listening on http://localhost:${port}`);
app.listen(port);
