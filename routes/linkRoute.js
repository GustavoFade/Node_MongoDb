const express = require('express');
const linkController = require('../controllers/linkControler');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Hello World");
});

router.post('/', linkController.addLink);

router.put('/:id', linkController.editLink);

router.get('/:title', linkController.redirect);
module.exports = router;