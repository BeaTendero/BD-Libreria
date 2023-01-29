const { user} = require ('../models/index');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const authConfig = require ('../config/auth');
const {log} = require ('wiston');

const AuthController = {};//Create the object controller

//-------------------------------------------------------------------------------------
//Login  with database
//get user
AuthController.signIn = (req, res) =>{
        let { email, password } = req.body;
        // Buscar usuario
        user.findOne({ where: { email: email }
        }).then(user => {
            if (!user) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    // Creamos el token
                    let token = jwt.sign({ user: user }, authConfig.secret);

                    res.json({
                        user: user,
                        token: token
                    })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTER new user in database
//create user
AuthController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        const passwordCrypted = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
        // console.log('--------------------------------------');
        console.log(passwordCrypted);
        // console.log('--------------------------------------');

        // Crear un usuario
        user.create({
            name: req.body.name,
            email: req.body.email,
            password: passwordCrypted
        }).then(user => {

            // Creamos el token
            let token = jwt.sign({user: user}, authConfig.secret);

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err.message);
        });
    };

module.exports = AuthController;

