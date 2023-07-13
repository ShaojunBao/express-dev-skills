const Skills = require('../models/skills');


function index(req,res){
    res.render('skills/index', {
        skills: Skills.getAll(),
        title: 'All skills'
    });
}

function show(req,res){
    res.render('skills/show',{
        skill: Skills.getOne(req.params.id),
        title:  'Skills Detials'
    })
}

function newSkill(req,res){
    res.render('skills/new',{
        title: 'New Skill'
    })
}

function create(req,res){
    Skills.create(req.body);
    res.redirect('/skills');
    
}

function deleteSkill(req,res){
    Skills.deleteOne(req.params.id)
    res.redirect('/skills')
}


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

