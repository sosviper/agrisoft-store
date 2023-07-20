import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { id_producto, descripcion, tipo, id_linea, id_unidad } = req.body;
  let { costo } = req.body;
  let { tc, parametro, stock_min, presupuesto, igv, anaquel, pbruto, pneto, precio } = req.body;

  // validating
  if (id_producto == null || descripcion == null || tipo == null || id_linea == null || id_unidad == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (costo == null) costo = 1;
  if (tc == null) tc = 1;
  if (parametro == null) parametro = 0;
  if (stock_min == null) stock_min = 1;
  if (presupuesto == null) presupuesto = 0;
  if (igv == null) igv = 1;
  if (anaquel == null) anaquel = 10;
  if (pbruto == null) pbruto = 1;
  if (pneto == null) pneto = 1;
  if (precio == null) precio = 1;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id_producto", sql.VarChar, id_producto)
      .input("descripcion", sql.VarChar, descripcion)
      .input("costo", sql.Float, costo)
      .input("tipo", sql.VarChar, tipo)
      .input("tc", sql.Int, tc)
      .input("id_linea", sql.VarChar, id_linea)
      .input("parametro", sql.Int, parametro)
      .input("id_unidad", sql.VarChar, id_unidad)
      .input("stock_min", sql.Float, stock_min)
      .input("presupuesto", sql.Int, presupuesto)
      .input("igv", sql.Int, igv)
      .input("anaquel", sql.Float, anaquel)
      .input("pbruto", sql.Float, pbruto)
      .input("pneto", sql.Float, pneto)
      .input("precio", sql.Float, precio)
      .query(querys.addNewProduct);

    res.json({ id_producto, descripcion, costo, id_linea, id_unidad });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_producto", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_producto", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  const { descripcion, tipo, id_linea, id_unidad } = req.body;

  // validating
  if (descripcion == null || tipo == null || id_linea == null || id_unidad == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }


  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("descripcion", sql.VarChar, descripcion)
      .input("tipo", sql.VarChar, tipo)
      .input("id_linea", sql.VarChar, id_linea)
      .input("id_unidad", sql.VarChar, id_unidad)
      .input("id_producto", req.params.id)
      .query(querys.updateProductById);
    res.json({ descripcion, tipo, id_linea, id_unidad });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};