from flask import Flask, render_template

app = Flask(__name__)


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

if __name__ == '__main__':
    app.run()
