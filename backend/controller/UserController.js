import User from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";

export const getUser = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Tidak berhasil mengambill data users" });
    }
};

export const register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) {
        return res
        .status(400)
        .json({message : "Password dan confirm password tidak cocok"});
    }

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(Password, salt);
        await User.create({
            name,
            email,
            password: hashedPassword
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Tidak berhasil register"});
    }
};

export const login = async(req, res) => {
    try {
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        })
        
    } catch (error) {
        res.status(404).json({message: "Email tidak di temukan"})
    }
}



// export const getUser = async (req, res) => {
//     try {
//         const users = await User.findAll();
//         // ({
//         //     attributes: ['id', 'name', 'email']
//         // });
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//         // res.status(500).json({ message: "Tidak berhasil mengambill data users" });
//     }
// };

// export const register = async (req, res) => {
//     const { name, email, password, confPassword } = req.body;
//     if (password !== confPassword) {
//         return res
//         .status(400)
//         .json({message : "Password dan confirm password tidak cocok"});
//     }

//     try {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(Password, salt);
//         await User.create({
//             name,
//             email,
//             password: hashedPassword
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "Tidak berhasil register"});
//     }
// };