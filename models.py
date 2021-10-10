from app import db


class Cities(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    city_name = db.Column(db.String(50))
    tel_num = db.Column(db.String(15))
    address = db.Column(db.String(255))
    coords = db.Column(db.String(50))
    url = db.Column(db.String(20))
    flag = db.Column(db.Boolean)

    def __repr__(self):
        return '<Cities {}>'.format(self.city_name)


class Products(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    product_name = db.Column(db.String(150))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    flag = db.Column(db.Boolean)

    def __repr__(self):
        return '<Products {}>'.format(self.product_name)


class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    author_name = db.Column(db.String(150))
    review_text = db.Column(db.Text)
    photo = db.Column(db.String(70))
    flag = db.Column(db.Boolean)

    def __repr__(self):
        return '<Reviews {}>'.format(self.author_name)
