import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

export const uploadonCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null

       const res= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("File successfully uploaded",res.url)
        return res
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove locally saved temp file
        console.log("Error while uploading a file" ,error)
        return null
    }
}