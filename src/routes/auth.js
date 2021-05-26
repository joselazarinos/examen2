import express from 'express';
import { getOneEntity, getEntities, newEntity, updaEntity, deleEntity } from '../components/entities/controller';
import validationHandler from '../utils/middlewares/validationHandler';
import {getDelEntitySchema,createEntitySchema,updateEntitySchema} from '../components/entities/domain/entity';

const router = express.Router();

router.get('/api/entidad/:id',validationHandler(getDelEntitySchema),getOneEntity);
router.get('/api/entidad',validationHandler(getDelEntitySchema),getEntities);
router.post('/api/entidad',validationHandler(createEntitySchema),newEntity);
router.put('/api/entidad/:id',validationHandler(updateEntitySchema),updaEntity);
router.delete('/api/entidad/:id',validationHandler(getDelEntitySchema),deleEntity);

export default router; 