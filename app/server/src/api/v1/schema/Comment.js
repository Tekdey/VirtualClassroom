const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const commentSchema = new Schema({
  title: {
    type: SchemaTypes.String,
    maxLength: 50,
    required: [true, 'Title is required'],
  },
  body: {
    type: SchemaTypes.String,
    maxLength: 250,
    required: [true, 'Body is required'],
  },
  star: {
    type: SchemaTypes.Number,
    min: [0, 'Min star is 5, got {VALUE}'],
    max: [5, 'Max star is 5, got {VALUE}'],
    required: [true, 'Star is required'],
  },
  author: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: [true, 'Author is required'],
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
