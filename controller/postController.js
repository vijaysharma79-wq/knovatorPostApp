// const UserModel = require('../model/User.model')
const { postmodel } = require('../model/postModel')

const createpost = async (req, res) => {
    try {
        console.log(req.body)
        const user = await postmodel.create(req.body)
        res.status(201).send({ success: true, message: 'Post Created', data: user })
    } catch (error) {
        res.status(500).send({ success: false, message: 'server crashed' })

    }

}

const allpost = async (req, res) => {
    try {
        let allpost = await postmodel.find()
        if (allpost.length == 0) { return res.status(404).send({ success: false, message: 'post not found' }) }
        res.status(200).send({ success: true, message: 'all post are ready', Posts: allpost.length, data: allpost })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Server is Crashed', error: error.message });
    }
}

const postUpdate = async (req, res) => {
    try {
        let post = await postmodel.findOne({ _id: req.params.id })
        if (!post) { return res.status(409).send({ success: false, message: 'Post  not exist' }) }
        let updatepost = await postmodel.updateOne({ _id: req.params.id }, { title: title, body: body });
        res.status(200).send({ success: true, message: 'new Post Updated', data: updatepost })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Server Crashed', error: error.message });
    }
}

const postDelete = async (req, res) => {
    try {
        let post = await postmodel.findById(req.params.id)
        if (!post) { return res.status(409).send({ success: false, message: 'Post Does not exist' }) }
        await postmodel.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, message: 'Post Deleted' })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Server Crashed', error: error.message });
    }
}

module.exports = { createpost, allpost, postUpdate, postDelete }