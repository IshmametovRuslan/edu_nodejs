const { Router } = require("express");
const { TwitService } = require("./twit.service");

const router = Router

const twitService = new TwitService()

router.post('/', (req, res) => {
    const twit = twitService.createTwit(req, res)
    res.status(201).json(twit)
})

export const twitRouter = router