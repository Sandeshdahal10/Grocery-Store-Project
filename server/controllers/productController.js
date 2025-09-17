import  {v2 as cloudinary} from "cloudinary";
import Product from "../models/product.js";
//Add product : api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;

    let imgesUrl = await Promise.all(images.map(async (item)=>{
      let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
      return result.secure_url;
    }))
    await Product.create({...productData, image: imagesUrl});

    res.json({success: true, message: "Product added successfully"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

//Get Product : /api/product/list
export const productList = async (req, res) => {

}

//Get Product by id : /api/product/id
export const productById = async (req, res) => {

}
//Change Product insStock : /api/product/stock
export const changeStock = async (req, res) => {

}

