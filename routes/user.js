const { Router, response, request } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    msj: 'Get usuarios'
  });
});

router.post('/', (req=request, res=response) => {
  res.status(201).json({
    ok: true,
    status: 201,
    msj: 'usuario creado con exito',
    user: req.body
  });
});


module.exports = router;