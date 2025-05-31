from flask import Flask, request, render_template, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Initialize the Flask application
app = Flask(__name__)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///new_course.db'

# Initialize the database
db = SQLAlchemy(app)

# Set a secret key for session management and flash messages
app.secret_key = 'your secret key'

# Define the Course model
class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Primary key for the course
    course_name = db.Column(db.String(100), nullable=False)  # Course name (required)
    description = db.Column(db.Text, nullable=False)  # Course description (required)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)  # Timestamp for when the course was added

# Route for the home page
@app.route('/')  # Home page
def new_course():
    all_courses = Course.query.all()  # Query all courses from the database
    return render_template('new_course.html', all_courses=all_courses)  # Render the template with all courses

# Route to add a new course
@app.route('/add_course', methods=["POST"])  # POST request
def add_course():
    course_name = request.form.get("course_name")  # Get course name from the form
    description = request.form.get("description")  # Get description from the form

    # Validate that both course name and description are provided
    if not course_name or not description:
        flash("Course name and description are required!", "error")  # Flash an error message
        return redirect(url_for("new_course"))  # Redirect to the home page

    # Create a new course instance
    course = Course(course_name=course_name, description=description)
    db.session.add(course)  # Add the course to the database session
    db.session.commit()  # Commit the session to save the course in the database
    return redirect(url_for("new_course"))  # Redirect to the home page

# Route to confirm deletion of a course
@app.route("/courses/delete/confirm/<int:course_id>", methods=["GET"])
def confirm_delete(course_id):
    course = Course.query.get(course_id)  # Query the course by ID
    if not course:
        flash("Course not found", "error")  # Flash an error message if the course is not found
        return redirect(url_for("new_course"))  # Redirect to the home page
    return render_template("delete.html", course=course)  # Render the confirmation page

# Route to delete a course
@app.route("/courses/delete/<int:course_id>", methods=["POST"])
def delete_course(course_id):
    course = Course.query.get(course_id)  # Query the course by ID
    if not course:
        flash("Course not found", "error")  # Flash an error message if the course is not found
        return redirect(url_for("new_course"))  # Redirect to the home page
    db.session.delete(course)  # Delete the course from the database
    db.session.commit()  # Commit the session to save the changes
    flash("Course deleted successfully!", "success")  # Flash a success message
    return redirect(url_for("new_course"))  # Redirect to the home page

# Main entry point of the application
if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create all database tables
        print("Database created")  # Print confirmation that the database was created
    app.run(debug=True)  # Run the Flask application in debug mode
