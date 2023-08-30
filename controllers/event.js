const getAllEvent = async (req,res) => {
    res.status(200).json({msg:"All Events"});
}

const getAllEventTesting = async (req,res) => {
    res.status(200).json({msg:"All Events Testing"});
}

module.exports  = { getAllEvent , getAllEventTesting};