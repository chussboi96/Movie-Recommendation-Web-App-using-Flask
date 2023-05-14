Place css, img js, vendor ALL INSIDE static folder.
Then place Static, templates and model folder along with app.py in one folder.
Run the model.ipynb to get the vectors.pkl because it wasnot included in the model folder due to github's upload size limitations.
Place the vectors.pkl in model folder and run app.py to get your recommendations.


The movie recommendation system uses content-based filtering which is focused on movie attributes (genre, cast etc) to generate recommendations and is imited to only suggesting movies from the dataset used to train the model. The pplication is built using the Flask framework in Python and is deployed locally on the ser’s system. It utilizes libraries such as Pandas and scikit-learn for data processing nd ML algorithms. The movie recommendation engine takes user input and generates elevant movie suggestions by using a similarity matrix to find similar movies.

The GUI is really aesthetically pleasing, just check it out!

Methodology:
1. Data cleaning & preprocessing
2. EDA
3. Feature Engineering
4. Machine Learning
5. Integration of ML Model in GUI (sing Flask & Jinja)


About Dataset:
(TMDB 5000 movie dataset & TMDB 5000 credits dataset)
The dataset contains information about the movies' title, genre, budget, release date, nd popularity, among other features.
More details: https:/ www.kaggle.com/datasets/tmdb/tmdb-movie-metadat
