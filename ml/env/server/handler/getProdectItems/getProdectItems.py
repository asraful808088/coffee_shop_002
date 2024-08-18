from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
def getProdectItems(prodect,query,n=10)-> None | dict:
    try:
         prodectData = {}
         for item in prodect:
             prodectData[item.id]=f'''{item.header} {item.aiDescription} {item.description}'''
         items = []
         keys = []
         for i in prodectData:
                 items.append(prodectData[i])
                 keys.append(i)
         vectorizer = TfidfVectorizer()
         all_sentences = items + [query]
         tfidf_matrix = vectorizer.fit_transform(all_sentences)
         similarity_matrix = cosine_similarity(tfidf_matrix)
         calcItem = similarity_matrix[len(items)][:-1]
         
         return {"value":calcItem.tolist()}
    except:
         return None
    
    
    