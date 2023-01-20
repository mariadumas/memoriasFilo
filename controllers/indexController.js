const indexController = {
    
    home: (req,res) => {
        res.render("index", {title: "Home"})
    },
    institutos: (req, res) => {
        res.render("institutos", {title: "Institutos"})
    } 


}

module.exports = indexController;