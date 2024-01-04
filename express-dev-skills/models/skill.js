const skills = [
    {id: 1 , firstSkill: "HTML" , learn: true},
    {id: 2, firstSkill: "CSS" , learn: true},
    {id: 3, firstSkill: "JavaScript" , learn: false}

]

module.exports = {
getAll, 
getOne
}

function getAll (){
    return skills
}

function getOne (id){
    id = parseInt(id)
    return skills.find(firstSkill=> firstSkill.id === id)
}