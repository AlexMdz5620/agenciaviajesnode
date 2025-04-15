import { Testimoniales } from "../models/Testimonial.js";

// Guardar Testimoniales
const guardarTestimonial = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    }
    if(correo === ''){
        errores.push({mensaje: 'El corre está vacío'});
    }
    if(mensaje === ''){
        errores.push({mensaje: 'El mensaje está vacío'});
    }
    
    if(errores.length > 0){
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Almacenar en la base de datos
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.error(error);
        }
    }
}

export {
    guardarTestimonial,
}