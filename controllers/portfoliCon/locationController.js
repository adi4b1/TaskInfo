const Location=require('../../model/Portfolio/Location')


const AddLocation=async(req,res)=>{
    const{locationname}=req.body

    try {
        const location=new Location({
            locationname,
        })
        location.save()

        return res.status(201).json({success:"location created"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'server error'})
    }
}


module.exports={AddLocation}