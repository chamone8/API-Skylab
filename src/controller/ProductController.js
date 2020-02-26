const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('product');

module.exports ={
    //metodo com paginação 
    async index(req,res) {
        const {page = 1} = req.query;
        const produts = await Product.paginate({},{page, limit: 5});

        return res.json(produts);
    },

    async store(req,res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);    
    },

    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id,  req.body, {new: true});
        return res.json(product);
    },

    async destroy(req,res){
        const product = await Product.findByIdAndDelete(req.params.id);

        return res.send("destroido com sucesso");
    }



}