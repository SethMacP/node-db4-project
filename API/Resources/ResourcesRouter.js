const express = require('express')
const model = require('./ResourcesModel.js')
const router = express.Router()

//get all recipes
router.get("/recipes", async (req,res,next) => {
    try{
        const recipes = await model.getRecipes()
        res.status(200).json(recipes)
    }catch(err){
        next(err)
    }
})
// get all ingredients for a recipe
router.get("/recipes/:id/ingredients",async(req,res,next)=>{
    try{
        const ingredients = await model.getShoppingList(req.params.id)
        res.status(200).json(ingredients)
    }catch(err){
        next(err)
    }
})
//get all steps for a recipe
router.get("/recipes/:id/steps",async(req,res,next)=>{
    try{
        const steps = await model.getInstructions(req.params.id)
        res.status(200).json(steps)
    }catch(err){
        next(err)
    }
})

module.exports=router;