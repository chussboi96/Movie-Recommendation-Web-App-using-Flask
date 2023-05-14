import pickle
import pandas as pd
from flask import Flask, render_template, request

# loading models
with open(r"C:\Users\HAMMAD\OneDrive\Desktop\HammadJavaid_i211661_DS4_M_ITER3_MLGUI_Test\model\vectors.pkl", 'rb') as file:
    similarity = pickle.load(file)
print(similarity)
with open(r"C:\Users\HAMMAD\OneDrive\Desktop\HammadJavaid_i211661_DS4_M_ITER3_MLGUI_Test\model\popular.pkl", 'rb') as file:
    popular = pickle.load(file)
with open(r"C:\Users\HAMMAD\OneDrive\Desktop\HammadJavaid_i211661_DS4_M_ITER3_MLGUI_Test\model\movies.pkl", 'rb') as file:
    movies = pickle.load(file)
movies_df = pd.DataFrame(movies)

with open(r"C:\Users\HAMMAD\OneDrive\Desktop\HammadJavaid_i211661_DS4_M_ITER3_MLGUI_Test\model\choice.pkl", 'rb') as file:
    choice = pickle.load(file)
select = choice[['movie_id', 'title', 'genres', 'cast', 'popularity']]
select = select.sort_values('popularity', ascending=False)


def recommend(movie_title):
    movie_title = movie_title.lower()  # Convert the user input to lowercase

    # Check if the movie title exists in the dataset (case-insensitive)
    if not movies_df['title'].apply(lambda x: x.lower()).isin([movie_title]).any():
        print(f"Movie '{movie_title}' not found in the dataset.")
        return f"Movie '{movie_title}' not found in the dataset."

    # Get the movie_index using the case-insensitive comparison
    movie_index = movies_df[movies_df['title'].apply(lambda x: x.lower()) == movie_title].index[0]
    similar_movies = list(enumerate(similarity[movie_index]))
    sorted_similar_movies = sorted(similar_movies, key=lambda x: x[1], reverse=True)
    top_15_movies = [movies_df.iloc[i[0]]['title'] for i in sorted_similar_movies[1:6]]

    return top_15_movies


app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


def byYear(year):
    counter = 0
    L = []
    for row in popular.iterrows():
        if str(row[1].release_date)[:4] == year:
            if counter != 5:
                L.append(row[1].title)
                counter += 1
            else:
                break
    return L


@app.route('/year_recommendations', methods=['GET', 'POST'])
def year_recommendations():
    recommendations_year = []
    year = ""

    if request.method == 'POST':
        year = request.form['year']
        recommendations_year = byYear(year)

    return render_template('recommendations.html', year=year, recommendations_year=recommendations_year)


def byGenre(genre):
    counter = 0
    L = []
    for row in popular.iterrows():
        if counter != 6:
            for gen in row[1].genres:
                if gen == genre:
                    L.append(row[1].title)
                    counter += 1
                    break
        else:
            break
    return L


@app.route('/genre_recommendations', methods=['GET', 'POST'])
def genre_recommendations():
    recommendations = []
    genre = ""

    if request.method == 'POST':
        genre = request.form['genre']
        recommendations = byGenre(genre)

    return render_template('recommendations.html', genre=genre, recommendations_genre=recommendations)


def byChoice(genres, castList, obj):
    choice = obj.copy()

    def byChoiceCast():
        cast_fre = []
        for row in choice.iterrows():
            castFre = 0
            for cast in row[1]['cast']:
                if cast == castList[0] or cast == castList[1] or cast == castList[2] or cast == castList[3] or cast == \
                        castList[4]:
                    castFre += 1
            cast_fre.append(castFre)
        return cast_fre

    choice['cast_fre'] = byChoiceCast()
    choice = choice[choice['cast_fre'] != 0]

    def byChoiceGenre():
        gen_fre = []
        for row in choice.iterrows():
            genFre = 0
            for gen in row[1].genres:
                if gen == genres[0] or gen == genres[1] or gen == genres[2]:
                    genFre += 1
            gen_fre.append(genFre)
        return gen_fre

    choice['gen_fre'] = byChoiceGenre()
    choice = choice[choice['gen_fre'] != 0]
    choice = choice.sort_values('cast_fre', ascending=False)
    choice_movies = []
    counter = 0
    for mov in choice.iterrows():
        if counter != 3:
            choice_movies.append(mov[1].title)
            counter += 1
        else:
            break
    return choice_movies


@app.route('/recommendations_by_choice', methods=['GET', 'POST'])
def recommendations_by_choice():
    genre_names = ['Comedy', 'Action', 'Thriller', 'Fantasy', 'Crime', 'Drama']
    cast_names = ["Robert De Niro", "Tom Cruise", "Samuel L. Jackson", "Bruce Willis", "Matt Damon", "Leonardo DiCaprio"]

    if request.method == 'POST':
        # Retrieve the selected genres and cast list from the form data
        genre_names = [request.form.get('genre-checkbox-1'), request.form.get('genre-checkbox-2'), request.form.get('genre-checkbox-3')]
        cast_names = [request.form.get('cast-checkbox-1'), request.form.get('cast-checkbox-2'), request.form.get('cast-checkbox-3'), request.form.get('cast-checkbox-4'), request.form.get('cast-checkbox-5')]
        # Get the recommendations based on the selected genres and cast list
        recommendations = byChoice(genre_names, cast_names, select)
    else:
        # No form data submitted yet, so set recommendations to an empty list
        recommendations = []
    # Debug print statements
    print(f"Genres: {genre_names}")
    print(f"Cast names: {cast_names}")

    # Pass the lists of genres and cast names to the template
    return render_template('choices.html', genres=genre_names, cast_list=cast_names, recommendations=recommendations)


@app.route('/recommend', methods=['GET', 'POST'])
def recommend_page():
    recommendations = []
    movie_title = ""
    if request.method == 'POST':
        movie_title = request.form['movie_title']
        recommendations = recommend(movie_title)

    return render_template('recommendations.html', movie_title=movie_title, recommendations=recommendations)


if __name__ == '__main__':
    app.run(debug=True)
