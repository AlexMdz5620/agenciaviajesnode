import { Viajes } from '../models/Viaje.js';
import { Testimoniales } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    const promiseDB = [];
    promiseDB.push(Viajes.findAll({limit: 3}));
    promiseDB.push(Testimoniales.findAll({limit: 3}));
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1],
        });
    } catch (error) {
        console.error(error);
    }

}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar DB
    const viajes = await Viajes.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.error(error);
    }
    
}

// Mostrar un viaje por su Slug
const paginaDetalleViajes = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viajes.findOne({where: { slug }});

        res.render('viaje', {
            pagina: 'Información del Viaje',
            viaje
        })
    } catch (error) {
        console.error(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes,
}