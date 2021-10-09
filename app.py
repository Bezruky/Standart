from flask import Flask, render_template, redirect, url_for, request, session
from config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from models import Cities, Products, Reviews

products = Products.query.all()
reviews = Reviews.query.all()


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
        return redirect(url_for('index_msk'))


@app.route('/msk')
def index_msk():
    current_city()
    city = Cities.query.get(1)
    return render_template('base.html', products = products, reviews = reviews, city = city)


@app.route('/vol')
def index_vol():
    current_city()
    city = Cities.query.get(2)
    return render_template('base.html', products = products, reviews = reviews, city = city)


@app.route('/spb')
def index_spb():
    current_city()
    city = Cities.query.get(3)
    return render_template('base.html', products = products, reviews = reviews, city = city)


@app.route('/krs')
def index_kns():
    current_city()
    city = Cities.query.get(4)
    return render_template('base.html', products = products, reviews = reviews, city = city)


if __name__ == '__main__':
    app.run()
