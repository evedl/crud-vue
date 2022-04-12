import express from 'express';
import req from 'express/lib/request';
const router = express.Router();

//importar el modelo nota
import PrimerBd from '../models/primerBd';

//Agregar una registro
router.post('/nuevo-registro', async(req,res)=>{
    const body= req.body;

    try {
        const PrimerDB = await PrimerBd.create(body);
        res.status(200).json(PrimerDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// busca todos los registros
router.get('/buscarTodo',async(req,res)=>{

    try {
        const PrimerDb= await PrimerBd.find();
        res.json(PrimerDb);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//busca con parametro
router.get('/buscarParametro/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const PrimerDb = await PrimerBd.findOne({_id});
        res.json(PrimerDb);
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en la busqueda',
            error
        })
        
    }
});

// Delete eliminar un usuario
router.delete('/eliminar/:id',async(req,res)=>{
    const _id = req.params.id;
    try {
        const PrimerDb = await PrimerBd.findByIdAndDelete({_id});
        if(!PrimerDb){
            return res.status(400).json({
                mensaje: 'No se econtro el usuario',
                error
            })
        }
        res.json(PrimerDb);   
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio un error al borrar al usuario'
        })     
    }
});

//Put actualizar 
router.put('/edit/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const PrimerDB = await PrimerBd.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(PrimerDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })  
    }
});
//Exportar la configuracion de express para realizar las peticiones
module.exports=router;