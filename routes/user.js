const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    msj: 'Get usuarios'
  });
})


module.exports = router;