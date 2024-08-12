import express from "express";
import { networkInterfaces } from "os";

const app = express();

const network = networkInterfaces();
console.log(network);

const PORT = Number(process.env.PORT) || 3044;

app.listen(PORT, () => {
  console.log(`Server listeon on localhost:${PORT}`);
});
for (const iface in network) {
  for (const alias of network[iface]!) {
    if (alias.family === "IPv4" && !alias.internal) {
      app.listen(PORT, alias.address, () => {
        console.log(`Server listeon on ${alias.address}:${PORT}`);
      });
    }
  }
}

app.use((req, res, next) => {
  console.log(new Date().toISOString(), ": ", req.method, req.url);
  next();
});
app.get("/", (req, res) => {
  res.send();
});
