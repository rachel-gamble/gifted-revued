import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftApi } from "./AxiosService.js"


class GiftsService {
    async getGifts() {
        const res = await giftApi.get('api/gifts')
        logger.log('[Got Gifts]', res.data)
        AppState.gifts = res.data
    }

    async openGift(giftId) {
        let gift = AppState.gifts.find(g => g.id == giftId)
        if (gift.opened == false) {
            gift.opened = true
            const res = await giftApi.put('api/gifts/' + giftId, gift)
            console.log(res.data)
            let giftIndex = AppState.gifts.findIndex(g => g.id == giftId)
            AppState.gifts.splice(giftIndex, 1, res.data)
        }
    }

    // async submitGift(formData) {

    // }
}

export const giftsService = new GiftsService()