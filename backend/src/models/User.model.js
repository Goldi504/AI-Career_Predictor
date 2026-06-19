import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(

{
   // BASIC INFORMATION

   fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50
   },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 20
   },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
   },

   password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
   },
   avatar: {
      type: String,
      default: ""
   },
    bio: {
      type: String,
      default: "",
      maxlength: 300
   },
   // EDUCATION
   education: {

      degree: {
         type: String,
         default: ""
      },
       college: {
         type: String,
         default: ""
      },
      graduationYear: {
         type: Number
      }
   },
   // EXPERIENCE
    experienceLevel: {
      type: String,

      enum: [
         "Beginner",
         "Intermediate",
         "Advanced"
      ],
      default: "Beginner"
    },
     yearsOfExperience: {
      type: Number,
      default: 0
   },
 // SKILLS
 skills: [
      {
         type: String,
         trim: true
      }
   ],

   interests: [
      {
         type: String,
         trim: true
      }
   ],
   certifications: [
      {
         title: String,
         issuer: String,
         issueDate: Date
      }
   ],
 // RESUME
  resume: {

      resumeUrl: {
         type: String,
         default: ""
      },

      extractedSkills: [
         {
            type: String
         }
      ],

      uploadedAt: {
         type: Date
      }
   },
    // AI ANALYTICS
    aiProfile: {

      predictedCareer: {
         type: String,
         default: ""
      },

      careerMatchScore: {
         type: Number,
         default: 0
      },
      missingSkills: [
         {
            type: String
         }
      ],
      recommendedRoadmap: [
         {
            week: String,
            topic: String
         }
      ]
   },
   // AUTHENTICATION
    refreshToken: {
      type: String,
      default: ""
   },
emailVerificationToken: {
      type: String
   },

   isEmailVerified: {
      type: Boolean,
      default: false
   },

   passwordResetToken: {
      type: String
   },

   passwordResetExpiry: {
      type: Date
   },
   // ACCOUNT STATUS
   role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
   },

   isActive: {
      type: Boolean,
      default: true
   },

   lastLogin: {
      type: Date
   },
    //dashboard model
    roadmapProgress:{

   completedTasks: {
      type: Number,
      default: 0
   },

   totalTasks: {
      type: Number,
      default: 0
   }
},
// progress status
skillProgress: [
  {
    skill: {
      type: String,
      required: true
    },

    completed: {
      type: Boolean,
      default: false
    },

    completedAt: {
      type: Date
    }
  }
],
// streack progress
streak: {
  current: {
    type: Number,
    default: 0
  },

  longest: {
    type: Number,
    default: 0
  },

  lastActivity: {
    type: Date
  }
},

},
{
    timestamps:true
}
);

// PASSWORD HASHING

userSchema.pre("save", async function(next){

   if(!this.isModified("password")){

      return ;
   }

   this.password = await bcrypt.hash(
      this.password,
      12
   );
    
});
// PASSWORD COMPARISON
userSchema.methods.comparePassword =
async function(password){

   return await bcrypt.compare(
      password,
      this.password
   );
};

// ACCESS TOKEN
userSchema.methods.generateAccessToken =
function(){

   return jwt.sign(

      {
         id: this._id,
         role: this.role
      },

      process.env.JWT_ACCESS_SECRET,

      {
         expiresIn:
            process.env.ACCESS_TOKEN_EXPIRY
      }
   );
};
// REFRESH TOKEN
userSchema.methods.generateRefreshToken =
function(){

   return jwt.sign(

      {
         id: this._id
      },

      process.env.JWT_REFRESH_SECRET,

      {
         expiresIn:
            process.env.REFRESH_TOKEN_EXPIRY
      }
   );
};
// REMOVE SENSITIVE DATA
userSchema.methods.toJSON = function(){

   const userObject = this.toObject();

   delete userObject.password;

   delete userObject.refreshToken;

   delete userObject.passwordResetToken;

   delete userObject.emailVerificationToken;

   return userObject;
};
// INDEXING

userSchema.index({ skills: 1 });

userSchema.index({
   "aiProfile.predictedCareer": 1
});
const User = mongoose.model(
   "User",
   userSchema
);

export default User;