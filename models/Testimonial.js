import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

export class Testimoniales extends Model {}

Testimoniales.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    mensaje: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: 'testimoniales',
    tableName: 'testimoniales', // Opcional si el nombre coincide
    timestamps: false // si no usas createdAt y updatedAt
});
