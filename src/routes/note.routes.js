const express = require('express')

const router = express.Router()

const { getAll, getById, post, updateSnippet } = require('../controller/note.controller')

router.post('/', post)

router.get('/', getAll)

router.get('/:id', getById)

router.patch('/:id', updateSnippet)



module.exports = router;