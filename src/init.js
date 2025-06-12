import dotenv from "dotenv";
import "./db";
import "./models/video";
import "./models/user";
import app from "./server";

dotenv.config();
const port = 4000;

const handleListening = () =>
  console.log(`✅ Server Listening On Port http://localhost:${port} 🚀`);
app.listen(port, handleListening);
