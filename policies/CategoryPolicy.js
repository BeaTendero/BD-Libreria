const { user } = require('../models/index');

module.exports = {

    getAll(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta publicacion" });
        }
    },

    create(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta publicacion" });
        }
    },

    update(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta publicacion" });
        }
    },

    deleteAll(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

    delete(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

}