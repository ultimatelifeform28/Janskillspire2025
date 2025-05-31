from flask import Flask, render_template, request, redirect, url_for, session, flash

from flask_sqlalchemy import SQLAlchemy

from datetime import datetime

app = Flask(__name__)
app.secret_key = 'your secret key'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.data.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    Date_created = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def hello():
    all_users = User.query.all() 


    return render_template('login.html', all_users=all_users)

@app.route('/login/', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        user = User.query.filter_by(username=username).first()
        print("user-info", user)

        if user and user.password == password:
            session['user'] = user.username
            return redirect(url_for("welcome"))
        else:
            flash("Invalid username or password")
            return redirect(url_for("login"))

    return render_template('login.html')

@app.route('/welcome/')
def welcome():
    if 'user' in session:
        username = session['user']
        return render_template('welcome.html', username=username)
    else:
        return redirect(url_for("login"))

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