from server.app.app import app
from server.pyloadScm.getProdect.getProdect import GetProdectItems
from server.handler.prodectitemsHandler.prodectItemshandlers import prodect_items_extractor
from server.handler.modelBuilder.builder import prodectModel
from sklearn.metrics.pairwise import cosine_similarity
@app.post("/getProdect/")
async def get_prodect_item(prodect_data:GetProdectItems):
    query =  prodect_items_extractor(prodect_data)
    prodects =  prodect_items_extractor(prodect_data,name="prodects")
    print(query)
    print(prodects)
    # result = prodectModel(data)
    # if result:
    #     return {"success": True}
    # else:
    #     return {"success": False}
    
    return {"success": True}