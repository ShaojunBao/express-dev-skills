const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controller/skills');


// All actual paths start with "/skills"

// Get/skills
router.get('/', skillsCtrl.index);
//GET/skills/new
router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);
// POST /todos
router.post('/', skillsCtrl.create); 
// DELETE/skills
router.delete('/:id', skillsCtrl.delete);




module.exports = router;