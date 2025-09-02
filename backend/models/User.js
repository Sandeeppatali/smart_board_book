import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true,
      trim: true
    },
    email: { 
      type: String, 
      required: true, 
      unique: true,    // already ensures index
      lowercase: true,
      trim: true
    },
    password: { 
      type: String, 
      required: true,
      minlength: 6
    },
    branch: { 
      type: String, 
      required: true,
      trim: true,
      uppercase: true
    },
    phone: { 
      type: String,
      trim: true
    },
    role: { 
      type: String, 
      enum: ['faculty', 'admin'], 
      default: 'faculty' 
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastLogin: {
      type: Date
    }
  },
  { 
    timestamps: true
  }
);

// 🔹 Compare password directly (plain text check)
UserSchema.methods.comparePassword = function(candidatePassword) {
  return candidatePassword === this.password;
};

// 🔹 Remove password from JSON output
UserSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

// 🔹 Indexes for performance
// ❌ remove duplicate email index
UserSchema.index({ branch: 1 });   // keep branch index if you query by branch often

export default mongoose.model("User", UserSchema);
