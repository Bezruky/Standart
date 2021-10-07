from flask import Flask, render_template
from config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from models import Cities, Products, Reviews

# cities = Cities.query.all()
# for p in cities:
#     print(p.id, p.author.username, p.body)


@app.route('/')
@app.route('/msk')
def index_msk():
    return render_template('index.html', title = 'Москва')


@app.route('/vol')
def index_vol():
    return render_template('index.html', title = 'Вологда')


@app.route('/spb')
def index_spb():
    return render_template('index.html', title = 'Санкт-Петербург')


@app.route('/kns')
def index_kns():
    return render_template('index.html', title = 'Краснодар')

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('base.html')

if __name__ == '__main__':
    app.run()
