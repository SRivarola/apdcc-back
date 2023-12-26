import server from "./app.js";
import program from "./config/arguments.js";
// import cluster from "cluster";

const port = program.p;
const environment = program.mode;

const PORT = process.env.PORT || port;
const ready = () => {
    console.log("mode: " + environment)
    console.log("server ready on port: " + PORT)
};

if (cluster.isPrimary) {
  for (let n = 1; n <= 4; n++) {
    cluster.fork();
  }
} else {
    server.listen(PORT, ready);
}