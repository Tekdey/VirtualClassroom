const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const userSchema = new Schema({
  role: {
    type: SchemaTypes.String,
    default: 'User',
    enum: {
      values: ["User", "Admin"],
    },
  },
  username: {
    type: SchemaTypes.String,
    unique: true,
    required: [true, "Username cannot be empty"]
  },
  first_name: {
    type: SchemaTypes.String,
    trim: true,
    required: [true, "First name cannot be empty"]
  },
  last_name: {
    type: SchemaTypes.String,
    trim: true,
    required: [true, "Last name cannot be empty"]
  },
  password: {
    type: SchemaTypes.String,
    required: [true, "Password cannot be empty"]
  },
  comments: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Comment'
      }
  ],
  subscription: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'User'
      }
  ],
  contact: {
    type: SchemaTypes.Object,
    email: {
      type: SchemaTypes.String,
      trim: true,
      unique: true,
      required: [true, "Email cannot be empty"]
    },
    phone_number: {
      type: SchemaTypes.String,
      validate: {
        validator: function (number) {
          return /\d{3}-\d{3}-\d{4}/.test(number);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    social: {
      type: SchemaTypes.Object,
      github: SchemaTypes.String,
      twitter: SchemaTypes.String,
      youtube: SchemaTypes.String,
      linkedin: SchemaTypes.String,
    },
  },
  updated_at: {
    type: SchemaTypes.Date,
    default: SchemaTypes.Date.now,
  },
  created_at: {
    type: SchemaTypes.Date,
    default: SchemaTypes.Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
