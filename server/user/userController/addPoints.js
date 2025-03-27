import { User } from "../userModel/user.model.js";

export const addPoints = async (req,res)=>{
    try {
        const { pointsToAdd } = req.body;
        const username= req.params.username
        const updatedUser = await User.findOneAndUpdate(
            { username: username }, // Filter: Benutzername
            { $inc: { points: pointsToAdd } }, // Punkte erhöhen
            { new: true } // Aktualisiertes Dokument zurückgeben
        )
        res.json({ message: "Punktestand aktualisiert", user: updatedUser });    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}