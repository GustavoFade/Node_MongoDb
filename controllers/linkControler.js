const Link = require('../models/Link');

const redirect = async(req, res)=>{
    let title = req.params.title;
    try{
        let doc = await Link.findOne({ title });
        res.redirect(doc.url);
    } catch (error){
        res.send(error);
    }
}
const addLink = async(req, res)=>{
    let link = new Link(req.body);
    try{
        let doc = await link.save();
        res.send(doc);
    } catch (error){
        res.send(error);
    }
}
const allLinks = async(req, res)=>{
    try{
        let links = await Link.find({});
        res.send(links);
    } catch (error){
        res.send(error);
    }
}
const deleteLink = async(req,res)=>{
    let id = req.params.id;
    try {
        res.send(await Link.findByIdAndDelete(id));
        // Link.deleteOne({_id: id});
    } catch (error) {
        res.send(error);
    }
}
const editLink = async(req,res)=>{
    let {title, description, url, id} = req.fields;
    let link = {title,description,url};

    if(!id){
        id = req.params.id;
    }
    try {
        let doc = await Link.findByIdAndUpdate(id, link);
        res.redirect("/")
    } catch (error) {
        res.send(error);
    }
}
module.exports = {redirect, addLink, allLinks, deleteLink, editLink};