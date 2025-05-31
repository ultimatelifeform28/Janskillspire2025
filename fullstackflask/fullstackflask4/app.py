from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime  # Import datetime for UTC timestamp

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with a strong secret key

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)  # Fixed datetime default

@app.route("/users")
def users():
    all_users = User.query.all()
    return render_template('users.html', users=all_users)

@app.route('/users/new')
def new_user():
    return render_template('new_user.html')

@app.route('/users/create', methods=["POST"])
def create_user():
    name = request.form.get('name')
    email = request.form.get('email')

    if not name or not email:
        flash("Name and email are required", "error")
        return redirect(url_for('new_user'))

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        flash("Email already exists", "error")
        return redirect(url_for('new_user'))

    new_user = User(name=name, email=email)
    db.session.add(new_user)
    db.session.commit()

    flash("User created successfully", "success")
    return redirect(url_for('users'))

@app.route('/users/<int:id>')
def show_user(id):
    user = User.query.get_or_404(id)
    return render_template('show_user.html', user=user)

@app.route('/users/<int:id>/edit')
def edit_user(id):
    user = User.query.get_or_404(id)
    return render_template('edit_user.html', user=user)

@app.route('/users/<int:id>/update', methods=["POST"])
def update_user(id):
    user = User.query.get_or_404(id)

    name = request.form.get("name")
    email = request.form.get("email")

    if not name or not email:
        flash("Name and email are required", "error")
        return redirect(url_for('edit_user', id=id))

    existing_user = User.query.filter(User.email == email, User.id != id).first()
    if existing_user:
        flash("Email already exists", "error")
        return redirect(url_for('edit_user', id=id))

    user.name = name
    user.email = email
    db.session.commit()

    flash("User updated successfully", "success")
    return redirect(url_for('users'))

@app.route('/users/<int:id>/delete', methods=["POST"])
def delete_user(id):
    user = User.query.get_or_404(id)

    db.session.delete(user)
    db.session.commit()

    flash("User deleted successfully", "success")
    return redirect(url_for('users'))

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        print("Database created")
    app.run(debug=True)


