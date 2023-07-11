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

  module.exports = {
    getAll,
    getOne
  }