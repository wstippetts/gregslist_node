import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class HousesService {
  async getHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house) {
      throw new BadRequest('could not find that house!')
    }
    return house
  }
  async buildHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }
  async editHouse(houseId, houseData) {
    const foundHouse = await this.getHouseById(houseId)
    foundHouse.price = houseData.price || foundHouse.price
    foundHouse.description = houseData.description || foundHouse.description
    foundHouse.squarefeet = houseData.squarefeet || foundHouse.squarefeet
    await foundHouse.save()
    return foundHouse
  }

  async razeHouse(houseId) {
    const house = await this.getHouseById(houseId)
    await house.remove()
    return house
  }
}
export const housesService = new HousesService()