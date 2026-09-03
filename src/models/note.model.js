import mongoose from mongoose;

const notesSchema = new mongoose.Schema({
    name: String,
    Description: String,
},{ timestamps:true })

export const notesModel = mongoose.model("notes", notesSchema);

