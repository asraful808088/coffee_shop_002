import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np
from server.utility.save_and_load.model import save_model
def prodectModel(data):
    items_data = {
        'id': [],
        'description': []
    }
    for item in data:
        items_data['id'].append(item.id)
        items_data['description'].append(f'''{item.header} {item.aiDescription} {item.aiDescription}''')
    df = pd.DataFrame(items_data)
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(items_data['description'])
    save_model(vectorizer, tfidf_matrix)
    return True






