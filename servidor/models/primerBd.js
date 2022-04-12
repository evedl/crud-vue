import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const userSchema= new Schema({
    nombre:{type: String, required:[true,'Nombre de usuario obligatorio']},
    especie: String,
    apellidos:{type: String, required:[true,'Los apellidos son obligatorios']},
    especie: String,    
    correo:String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const db= mongoose.model('db',userSchema);
export default db;