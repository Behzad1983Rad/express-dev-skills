const Skill = require('../models/skill')

function index(req, res) {
    res.render({
       skill: Skill.getAll()
    })

}

function show(req, res){
    res.render({
       skill: Skill.getOne(req.params.id) 
    })
    
}




module.exports = {
    index, 
    show
}