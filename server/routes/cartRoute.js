import { updateCart } from "../controllers/cartController.js";
import authUser from "../middlewares/authUser.js";
import mongoose from "mongoose";


const cartRouter = mongoose.Router();

cartRouter.post('/update', authUser, updateCart);

export default cartRouter;