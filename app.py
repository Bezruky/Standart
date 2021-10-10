from flask import Flask, render_template, redirect, url_for, request, session
from config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from models import Cities, Products, Reviews

products = Products.query.all()
reviews = Reviews.query.all()
city = Cities.query.all()

city_menu = []
for c in city:
    if c.flag:
        city_menu.append([c.city_name, c.url])


def current_city():
    session.permanent = True
    current_location = request.base_url
    session['cur-loc'] = current_location
    session.modified = True


@app.route('/')
def index():
    if 'cur-loc' in session:
        return redirect(session['cur-loc'])
    else:
        return redirect('/' + city[0].url)


@app.route('/<location>/')
def index_city(location):
    for c in city:
        if location == c.url:
            current_city()
            return render_template('base.html', products = products, reviews = reviews, city_menu = city_menu, city = c)


if __name__ == '__main__':
    app.run()
