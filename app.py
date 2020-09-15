from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

db = SQLAlchemy(app)

#class User(db.model):
#    id = db.Column(db.Integer, primary_key=True, nullable=False)
#    email = db.Column(db.String(20), unique=True, nullable=False)
#    password = db.Column(db.String(20), nullable=False)

#class Booklist(db.model):
    #id = db.Column(db.Integer, primary_key=True, nullable=False)
#    Book = db.Column(db.String(20), nullable=False)
#    Author = db.Column(db.String(20), nullable=False)
#    Rating = db.Column(db.Integer, nullable=False)


@app.route("/createuser")
def createuser():
    return render_template("createuser.html")

@app.route("/bookshelf")
def bookshelf():
    return render_template("bookshelf.html")

@app.route("/index")
def index():


@app.route("/handle_data", methods=["GET"])
def handle_data():
    print(request.form['title'])
    if request.form:
        Book = Book(title=request.form.get("title"))
        Author = Author(title=request.form.get("author"))
        Rating = Rating(title=request.form.get("rating"))
        db.session.add(book)
        db.session.commit()
