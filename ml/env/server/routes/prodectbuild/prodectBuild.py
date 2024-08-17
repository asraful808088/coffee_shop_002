from server.app.app import app
from server.pyloadScm.prodectModel.prodectModel import ProdectItems
from server.handler.prodectitemsHandler.prodectItemshandlers import prodect_items_extractor
from server.handler.modelBuilder.builder import prodectModel
@app.post("/similar/")
async def read_item(prodect_data:ProdectItems):
    data =  prodect_items_extractor(prodect_data)
    result = prodectModel(data)
    if result:
        return {"success": True}
    else:
        return {"success": False}