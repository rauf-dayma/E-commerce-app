import { login, signup } from "../Controller/auth.controller.js";
import {
  loginValidation,
  registrationValidation,
} from "../Middleware/authmiddelware.js";

export function AuthRouter(app) {
  app.post("/api/login", loginValidation, login); // Fixed path to lowercase
  app.post("/api/signup", registrationValidation, signup); // Fixed the typo
}
