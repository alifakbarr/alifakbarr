module.exports = {
    viewProject:async (req,res) => {
        try{
            await res.render("project")
        } catch (error) {
            res.redirect("/")
        }
    } 
}