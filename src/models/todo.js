const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
},
{
    timestamps: true,
}
);

const todoModel = mongoose.model('todo', todoSchema);

async function createTODO(title, description) {
const todo = await todoModel.create({
    title,
    description,
});
  return todo;
}

async function deleteTODO(_id) {
    const deleteResp = await todoModel.deleteOne({_id});
    return deleteResp;
}   

async function updateTODO(_id, title, description) {
    const updated = await todoModel.updateOne({
        _id
    },{
        title,
        description,
    });
    return updated;
}

async function listTODO(skip, limit){
    return await todoModel.find({}).skip(skip).limit(limit).sort({createdAt: -1})

}

module.exports = {
    createTODO,
    deleteTODO,
    updateTODO,
    listTODO,
};