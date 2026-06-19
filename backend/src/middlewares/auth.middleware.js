import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// AUTHENTICATION
export const protect =
    asyncHandler(async (req, res, next) => {
        let token;

        // TOKEN FROM HEADER

        if (req.headers.authorization && req.headers.authorization.startsWith(
            "Bearer"
        )) {
            token = req.headers.authorization.split(" ")[1];

        }
        // TOKEN FROM COOKIE
        else if (req.cookies?.accessToken) {

            token = req.cookies.accessToken;

        }
        // NO TOKEN
        if (!token) {
            throw new ApiError(401, "Unauthorized request");

        }
        // VERIFY TOKEN
        let decoded;

        try {
            decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch(error) {
            throw new ApiError(401, "Invalid or expired token");
            // FIND USER
        }
        const user = await User.findById(decoded.id).select("-password -refreshToken");
         if(!user){throw new ApiError(404,"User not found");

        }
        // ACCOUNT BLOCK

        if(!user.isActive){throw new ApiError(403,"Account disabled");

       }
       // ATTACH USER

        req.user = user;
      next();

   });
   // ROLE AUTHORIZATION
   export const authorize =(...roles)=>{return(req,res,next)=>{
    if(!roles.includes(req.user.role)){
     throw new ApiError(403,"Access denied");

    }
    next();
   };
   };
// OPTIONAL AUTH
   export const optionalAuth =asyncHandler(async(req,res,next)=>{

  try
  {
    let token;
    if(req.cookies?.accessToken)
    {

   token = req.cookies.accessToken;

}
if(token){

const decoded =jwt.verify(token,process.env.JWT_ACCESS_SECRET);
req.user = await User.findById(decoded.id).select("-password");

}
next();

}catch(error){

next();
}

}

);
// SELF ACCESS
export const isOwner =(param="id")=>
(req,res,next)=>{

if(req.user._id.toString()!==req.params[param] && req.user.role !== "admin"){

throw new ApiError(403,"Not allowed");

}
next();

};


      