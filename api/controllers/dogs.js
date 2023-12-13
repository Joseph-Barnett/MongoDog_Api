const mongoose = require('mongoose')

const Dog = require('../model/dog')

const index = async (req, res) => {
    const dogs = await Dog.find({}).sort({ createdAt: -1 })
    return res.status(200).json(dogs)
}

const show = async (req, res) => {
    const { name } = req.params
    if (!mongoose.Types.ObjectId.isValid(name)) {
        return res.status(404).json({ error: 'No dog here' })
    }

    const dog = await Dog.findByName(name)
    if (!dog) {
        return res.status(404).json({ error: 'No dog here' })
    }
    res.status(200).json(dog)
}

const create = async (req, res) => {
    const { name, breed } = req.body
    try {
        const dog = await Dog.create({ name, breed })
        return res.status(201).json(dog)
    } catch (error) {
        res.status(500).json({ error })
    }
}


const update = async (req, res) => {
    const { name } = req.params
    if (!mongoose.Types.ObjectId.isValid(name)) {
        return res.status(404).json({ error: 'No dog here' })
    }
    const dog = await Dog.findOneAndUpdate({ _name: name }, {
        ...req.body
    })
    if (!dog) {
        return res.status(404).json({ error: 'No dog here' })
    }
    res.status(200).json(dog)
}

const destroy = async (req, res) => {
    const { name } = req.params
    if (!mongoose.Types.ObjectId.isValid(name)) {
        return res.status(404).json({ error: 'No dog here' })
    }
    const dog = await Dog.findOneAndDelete({ _name: name })
    if (!dog) {
        return res.status(404).json({ error: 'No dog here' })
    }
    res.status(200).json(dog)
}

module.exports = { index, create, show, destroy, update }
