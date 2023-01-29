const db = require("../models");
const prestamo = db.prestamo;

const PrestamoControllers = {};

PrestamoControllers.createPrestamo = async (req, res) => {
    
    try {
        let data = req.body;

    let resp = await prestamo.create({
        fechaprestamo: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        userId: data.id_user,
        libroId: data.id_libro
    })
    res.status(200).json({
        resp,
        user: data.id_user,
        message: "Done"
    })

    } catch (error) {
        res.json({message: "Error"})
    }
    
    
}

module.exports = PrestamoControllers;