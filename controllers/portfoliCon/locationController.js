const Location=require('../../model/Portfolio/Location')


const AddLocation=async(req,res)=>{
    const{location}=req.body
    console.log("Received location in backend:", location);
    try {
        const saved = new Location({ location });
        await saved.save()

        return res.status(201).json({success:"location created"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'server error'})
    }
}


module.exports={AddLocation}