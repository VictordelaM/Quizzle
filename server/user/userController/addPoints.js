import {User} from '../userModel/userModel.js'

export const addPoints = async(req,res) =>{
    try{
        const {winners} = req.body
        const winnerlist = []
        winners.forEach(async(winner) => {
            
            const user = await User.findOne({username:winner.username})
            const addetPoints = Number(await user?.points)+Number(winner.points)
            const newUser = await User.findOneAndUpdate(
                {username:winner.username},
                {$set: {points:Number(addetPoints)}}, 
                {new: true}
                )
            winnerlist.push(newUser)
        });
        res.send(winnerlist)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }

    
}