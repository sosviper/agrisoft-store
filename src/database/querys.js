export const querys = {
  getAllProducts: "SELECT TOP(500) * FROM [bdagroincaServer].[dbo].[PRODUCTOS]",
  getProducById: "SELECT * FROM PRODUCTOS WHERE id_producto = @id_producto",
  addNewProduct: "INSERT INTO [bdagroincaServer].[dbo].[PRODUCTOS] (id_producto, Descripcion, costo, tipo, TC, id_linea, Parametrodelsistema, id_unidad, Stock_min, Presupuesto, chkigv, Vanaquel, PBruto, PNeto, precio_venta) VALUES (@id_producto,@descripcion,@costo,@tipo,@tc,@id_linea,@parametro,@id_unidad,@stock_min,@presupuesto,@igv,@anaquel,@pbruto,@pneto,@precio);",
  deleteProduct: "DELETE FROM [bdagroincaServer].[dbo].[PRODUCTOS] WHERE id_producto = @id_producto",
  getTotalProducts: "SELECT COUNT(*) FROM bdagroincaServer.dbo.PRODUCTOS",
  updateProductById: "UPDATE [bdagroincaServer].[dbo].[PRODUCTOS] SET Descripcion = @descripcion, tipo = @tipo, id_linea = @id_linea, id_unidad = @id_unidad WHERE id_producto = @id_producto",
};