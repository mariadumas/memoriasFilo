const indexController = {
    
    home: (req,res) => {
        res.render("index", {title: "Home"})
    } 


}

module.exports = indexController;