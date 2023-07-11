const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controller/skills');


// All actual paths start with "/skills"

// Get/skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);



module.exports = router;