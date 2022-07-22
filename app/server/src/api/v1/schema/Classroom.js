const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const classroomSchema = new Schema({
    status: {
        type: SchemaTypes.String,
        enum: {
            values: ["live", "pause", "offline"],
        },
    },
    title: {
        type: SchemaTypes.String,
        maxLength: 50,
    },
    teacher: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    helper: [{
        type: SchemaTypes.ObjectId,
        ref: 'User',
        validate: [2, '{PATH} exceeds the limit of 2']
    }], // user object id max 2
    student: [{
        type: SchemaTypes.ObjectId,
        ref: 'User',
        validate: [100, '{PATH} exceeds the limit of 100']
    }],
    message: [{
        body: {
            type: SchemaTypes.String,
            maxLength: 250,
            required: [true, 'Body is required'],
        },
        author: {
            type: SchemaTypes.ObjectId,
            required: [true, 'Author is required'],
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Classroom", classroomSchema);
