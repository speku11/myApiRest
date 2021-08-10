const { Router } = require('express')
const router = Router()

router.get('/test', (req,res)=>{
    const data = {
        "name": "Speku",
    }
    res.json(data)
})


module.exports = router