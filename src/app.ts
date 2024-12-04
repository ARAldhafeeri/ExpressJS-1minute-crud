import express, {Application} from "express";
import UserRouter from "./routes/user";


const App : Application = express();

App.use("/user", UserRouter);

export default App;