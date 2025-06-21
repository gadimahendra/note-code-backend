const asyncHandler = require("express-async-handler");

const { v4: uuidv4 } = require('uuid')

const Snippet = require('../models/note.models')

const post = asyncHandler(async (req, res) => {
    try {
        let body = req.body;
        body.id = uuidv4()
        let snippet = new Snippet(body);
        await snippet.save();
        res.status(201).json({ message: 'Snippet created', data: snippet });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create snippet', details: error });
    }
})


const getAll = asyncHandler(async (req, res) => {
    try {
        let data = await Snippet.find()
        res.status(200).json({ message: 'Records fetched successfully 78', data: data })
    } catch (error) {
        console.log('error', error)
        res.status(500).send(error)
    }
})

const getById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        console.log('----id', id)
        const snippet = await Snippet.findById(id)
        res.status(200).json({ data: snippet, message: 'Record fetched succussfully' })

    } catch (error) {
        res.status(500).send(error)

    }
})

const updateSnippet = asyncHandler(async (req, res) => {

    try {
        let { id } = req.params
        let body = req.body

        const updatedSnippet = await Snippet.findByIdAndUpdate(id, body, { new: true });

        if (!updatedSnippet) {
            return res.status(400).json({ message: 'Snippet not found' })
        }
        res.status(200).json({ message: 'Snippet updated successfully', data: updatedSnippet });

    } catch (error) {
        res.status(500).json({ message: 'Failed to update snippet', error: error.message });
    }

})

module.exports = { post, getAll, getById, updateSnippet }