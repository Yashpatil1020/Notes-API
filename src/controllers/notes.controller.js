import { notesModel } from "../models/note.model.js";

export async function createNotes(req,res){
    const { Name, Description}=  req.body;

    const Note = await notesModel.create({
        Name,
        Description
    })
    res.status(201).json({
        message: "Note Created Successfully",
        Note:{
            Name:Note.Name,
            Description:Note.Description
        }
        
    })
}

export async function getNotes(req,res){
    const data = await notesModel.find();
    res.status(200).json({
        message:"Notes Fetched Successfully",
        data
    })
}
export async function deleteNotes(req,res){
    const id = req.params.id;
    await notesModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Note Deleted Successfully"
    })
}
export async function updateNotes(req,res){
    const id = req.params.id;
    const Description = req.body.Description;

    await notesModel.findOneAndUpdate({_id:id},{Description:Description})
    res.status(200).json({
        message:"Note Updated Successfully"
    })
}