import MongoEntitiesRepository from './infraestructure/MongoEntitiesRepository'
import getEntity from './application/getEntity'
import getAllEntities from './application/getAllEntities'
import createEntity from './application/createEntity'
import updateEntity from './application/updateEntity'
import deleteEntity from './application/deleteEntity'
const EntitiesRepository = new MongoEntitiesRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

export const getOneEntity = async (req, res, next) => {
  try {
    const query = getEntity({ EntitiesRepository: EntitiesRepository })
    const entity = await query(req.params)
    if (entity == null) res.status(200).json({message: 'nose encontro nada'})
    res.status(200).json({
      data: entity,
      message: 'listo',
    })
  } catch (e) {
    next(e)
  }
}

export const getEntities  = async (_, res, next) => {
  try {
    const query = getAllEntities ({ EntitiesRepository: EntitiesRepository })
    const entities = await query()
    res.status(200).json({
      data: entities,
      message: 'enlistadas',
    })
  } catch (e) {
    next(e)
  }
}

export const newEntity = async (req, res, next) => {
  try {
    const query = createEntity({ EntitiesRepository: EntitiesRepository })
    const entity = await query(req.body)
    res.status(201).json({
      data: entity,
      message: 'se creo',
    })
  } catch (e) {
    next(e)
  }
}
export const updaEntity = async (req, res, next) => {
  try {
    const query = updateEntity({ EntitiesRepository: EntitiesRepository })
    const entity = await query(req.params,req.body)
    res.status(201).json({
      data: entity,
      message: 'actualizado',
    })
  } catch (e) {
    next(e)
  }
}

export const deleEntity = async (req, res, next) => {
  try {
    const query = deleteEntity({ EntitiesRepository: EntitiesRepository })
    const id = await query(req.params)
    res.status(201).json({
      id: id,
      message: 'eliminada',
    })
  } catch (e) {
    next(e)
  }
}