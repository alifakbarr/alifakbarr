// import model
const Note = require("../models/Note")

module.exports = {
    // View Note
    viewNote:async (req,res) => {
        try {
            const notes = await Note.find()

        res.render("./notes/index", {
            notes,
        })
        } catch (error) {
            res.redirect("/notes")
        }
    },
    createNote: async(req,res) => {
        try {
            await res.render("./notes/create")
        } catch (error) {
            res.redirect("/notes")
        }
    },
    addNote: async(req,res) => {
        try {
            const {title, content} = req.body

            await Note.create({title,content})
            res.redirect("/notes")
        }catch (error) {
            res.redirect("/notes")
        }
    },
    editNote: async(req,res)=>{
        try{
            let id = req.params.id
            const note = await Note.findOne({_id:id}) 
            
            res.render("./notes/edit",{
                note
            })
        } catch (error){
            res.redirect("/notes")
        }
    },
    updateNote: async(req,res)=>{
        try{
            await Note.findByIdAndUpdate(req.params.id,{
                $set:{
                    title:req.body.title,
                    content:req.body.content
                }
            }) 
            res.redirect("/notes")
        } catch (error) {
            res.redirect("/notes")
        }
    },
    deleteNote: async(req,res) => {
        try{
            await Note.findByIdAndDelete(req.params.id)
            res.redirect("/notes")
        }catch(error){
            res.redirect("/notes")
        }
    }
}