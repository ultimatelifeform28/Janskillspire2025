from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///appointments.db'
app.config['SECRET_KEY'] = 'secret_key'

db = SQLAlchemy(app)

# Define the Appointment model
class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(20), nullable=False)
    time = db.Column(db.String(10), nullable=False)
    patient_name = db.Column(db.String(100), nullable=False)
    complaint = db.Column(db.Text, nullable=False)

# Home route to display all appointments
@app.route("/")
def home():
    appointments = Appointment.query.all()
    return render_template("doctor_appt.html", appointments=appointments)

# Route to display the form for creating a new appointment
@app.route("/new_appointment")
def new_appointment():
    return render_template("new_appointment.html")

# Route to handle the form submission for creating a new appointment
@app.route("/add_appointment", methods=["POST"])
def add_appointment():
    date = request.form.get("date")
    time = request.form.get("time")
    patient_name = request.form.get("patient_name")
    complaint = request.form.get("complaint")

    # Check if all fields are filled
    if not date or not time or not patient_name or not complaint:
        return "All fields are required!", 400

    # Create a new appointment and add it to the database
    new_appt = Appointment(date=date, time=time, patient_name=patient_name, complaint=complaint)
    db.session.add(new_appt)
    db.session.commit()
    
    return redirect(url_for("home"))

# Route to handle the cancellation of an appointment
@app.route("/cancel/<int:id>", methods=["POST"])
def cancel_appointment(id):
    appt = Appointment.query.get(id)
    if appt:
        db.session.delete(appt)
        db.session.commit()
    return redirect(url_for("new_appointment"))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        print("Database created")
    app.run(debug=True)