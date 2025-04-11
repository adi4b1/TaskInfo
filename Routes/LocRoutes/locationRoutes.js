const express=require('express')

const locationController=require('../../controllers/portfoliCon/locationController')


const router=express.Router()


router.post('/add-location',locationController.AddLocation)


module.exports=router