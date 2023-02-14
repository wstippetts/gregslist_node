import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
      .post('', this.buildHouse)
      .put('/:houseId', this.editHouse)
      .delete('/:houseId', this.razeHouse)
  }

  async getHouses(req, res, next) {
    try {
      const query = req.query
      const houses = await housesService.getHouses(query)
      res.send(houses)
    } catch (error) {
      next(error)

    }
  }
  async getHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.getHouseById(houseId)
      res.send(house)
    } catch (error) {
      next(error)

    }
  }
  async buildHouse(req, res, next) {
    try {
      const houseData = req.body
      const house = housesService.buildHouse(houseData)
      res.send(house)
    } catch (error) {
      next(error)

    }
  }
  async editHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      const houseData = req.body
      const updatedHouse = await housesService.editHouse(houseId, houseData)
      res.send(updatedHouse)
    } catch (error) {
      next(error)

    }
  }
  async razeHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.razeHouse(houseId)

      res.send(house)
    } catch (error) {
      next(error)

    }
  }
}