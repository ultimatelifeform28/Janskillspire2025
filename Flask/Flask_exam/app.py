'''
Define a Flask route ("/") that renders an HTML page with a welcome message.
Create a separate route ("/about") that renders an HTML page with information about Flask. 
(You can find this info on the web)
'''

from flask import Flask, render_template, request, session, redirect

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')

'''Create an HTML template called "index.html" that displays a welcome message with the user's first name (Look at next step to retrieve user's name).
Define a Flask route ("/greet/<name>") that takes a name parameter and renders the "index.html" template with the provided name.'''

@app.route('/greet/<name>')
def greet(name):
    return render_template('index.html', name=name)

'''
Create a Flask route ("/contact") that renders a contact form HTML page.
Implement form validation to ensure all fields are filled out before submission.
The form should contain the fields firstname, lastname, phone number, street address, state, and zip code.
Handle form submission using a separate route ("/submit_contact") and display the submitted data on a confirmation page.
'''
@app.route('/contact', methods=['GET'])
def contact():
    return render_template('contact.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    data = {
        'firstname': request.form.get('firstname'),
        'lastname': request.form.get('lastname'),
        'phone': request.form.get('phone'),
        'street': request.form.get('street'),
        'state': request.form.get('state'),
        'zip_code': request.form.get('zip_code')
    }

    if not all(data.values()):
        error = "All fields are required. Please fill out the entire form."
        return render_template('contact.html', error=error)

    return render_template('confirmation.html', data=request.form)

'''
Implement a Flask route ("/login") that renders a login form HTML page.
Upon successful login (username: "admin", password: "password"), store the user's login status in a Flask session.
Create a route ("/admin") that checks the user's login status using the Flask session and renders an admin panel HTML page. 
This page should just display whether or not the user is logged in based off of the data in session.
'''
@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        if username == 'admin' and password == 'password':
            session['logged_in'] = True
            return redirect('/admin')
        else:
            return render_template('login.html', error='Invalid credentials. Please try again.')
    return render_template('login.html')

@app.route('/admin')
def admin():
    logged_in = session.get('logged_in', False)
    return render_template('admin.html', logged_in=logged_in)

if __name__ == '__main__':
    app.run(debug=True)







