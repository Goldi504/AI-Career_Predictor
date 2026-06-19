import User from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";

// GENERATE ACCESS + REFRESH
export const generateTokens =
async(userId)=>{

const user = await User.findById(userId);

if(!user){

throw new ApiError(404,"User not found");
}
const accessToken = user.generateAccessToken();
const refreshToken = user.generateRefreshToken();
user.refreshToken = refreshToken;

await user.save({ validateBeforeSave:false });
return { accessToken,refreshToken };

};


// CLEAR TOKENS
export const clearUserTokens =
async(userId)=>{ 
    await User.findByIdAndUpdate(
    userId,

{ 
    $unset:{ refreshToken:1 }
},
{
new:true
}
)};
// VERIFY STORED TOKEN
export const verifyStoredRefreshToken =
async( user,incomingToken )=>{
if(user.refreshToken !== incomingToken)
{ 
    throw new ApiError(401,"Invalid refresh token");
}

return true;
};
