const Location=require('../../model/Portfolio/Location')


const AddLocation=async(req,res)=>{
    const{location}=req.body
    console.log("Received location in backend:", location);
    try {
        const saved = await Location.create({ location });
    console.log("✅ Location saved:", saved);
    return res.status(201).json({ success: "Location created", saved });
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'server error'})
    }
}


module.exports={AddLocation}