const skills = [
    {id: 125223, skill: 'HTML', versed: true},
    {id: 127904, skill: 'Express', versed: false},
    {id: 139608, skill: 'JavaScript', versed: true},
    {id: 139672, skill: 'Angular', versed: false},
    {id: 124567, skill: 'CSS', versed: true}
  ];

  function getAll(){
    return skills;
  }

  function getOne(id){
    id = parseInt(id);
    return  skills.find(skill => skill.id === id);
  }

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.versed = false;
    skills.push(skill);
  }

  function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx,1);
  }


  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  }