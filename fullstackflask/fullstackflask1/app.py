from flask import Flask, render_template, request, redirect, url_for, session

from flask_sqlalchemy import SQLAlchemy

from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.data.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def hello():
    all_users = User.query.all() #// [User1, User2, User3]

    print("All users:", all_users)

    return render_template('user.data.html', all_users=all_users)

@app.route('/login/', methods = ["GET", "POST"])
def login():
    if request.method == "POST":
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("email")
        username = request.form.get("username")
        password = request.form.get("password")

        user = User(first_name=first_name, last_name=last_name, email=email, username=username, password=password)

        db.session.add(user)
        db.session.commit() #// save the user to the database

        return redirect(url_for("display_user", user_id=user.id))
    return render_template('user.data.html')

@app.route('/user/<int:user_id>')
def display_user(user_id):
    user = User.query.get(user_id)
    all_users = User.query.all()  # Query all users here
    return render_template('display.html', user=user, all_users=all_users)      

if __name__ == '__main__':
 with app.app_context():
     db.create_all()
     print("Database created")
 app.run(debug=True)

