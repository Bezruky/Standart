from flask import Flask, render_template
from config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from models import Cities, Products, Reviews

products = Products.query.all()
reviews = Reviews.query.all()


@app.route('/')
@app.route('/msk')
def index_msk():
    city = Cities.query.get(1)
    title = 'Москва'
    street = 'ул. Ленинина, д. 25'
    return render_template('base.html', title = title, products = products, reviews = reviews, city = city,
                           street = street)


@app.route('/vol')
def index_vol():
    city = Cities.query.get(2)
    title = 'Вологда'
    street = 'Пошехонское ш., д. 20'
    return render_template('base.html', title = title, products = products, reviews = reviews, city = city,
                           street = street)


@app.route('/spb')
def index_spb():
    city = Cities.query.get(3)
    title = 'Санкт-Петербург'
    street = 'ул.Касимовская, д.5 - Б'
    return render_template('base.html', title = title, products = products, reviews = reviews, city = city,
                           street = street)


@app.route('/kns')
def index_kns():
    city = Cities.query.get(4)
    title = 'Краснодар'
    street = 'Карасунский внутригородской округ, ул. Бородинская, д. 156H'
    return render_template('base.html', title = title, products = products, reviews = reviews, city = city,
                           street = street)


if __name__ == '__main__':
    app.run()
