import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

export class Viajes extends Model {}

Viajes.init({
    titulo: DataTypes.STRING,
    precio: DataTypes.STRING,
    fecha_ida: DataTypes.DATE,
    fecha_vuelta: DataTypes.DATE,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    disponibles: DataTypes.STRING,
    slug: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'viajes',
    tableName: 'viajes', // Opcional si el nombre coincide
    timestamps: false // si no usas createdAt y updatedAt
});
