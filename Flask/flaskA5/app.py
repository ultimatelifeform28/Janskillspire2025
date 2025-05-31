from flask import Flask, render_template, request, session

app = Flask(__name__)
app.secret_key = "secret key"

valid_login = {
    'firstname': 'Jacorey',
    'lastname': 'Lasane',
    'email': 'lasanejacorey@gmail.com',
    'home_address': '820 Sumner Dr',
    'city': 'Fayetteville',
    'state': 'North Carolina',  
    'zip_code': '28303',
}

@app.route('/')
def home():
    user = session.get('user')
    if user:
        return f"Welcome back, {user['firstname']} {user['lastname']}!"
    return render_template("user.html")

@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        firstname = request.form.get('firstname', '')
        lastname = request.form.get('lastname', '')  # Fixed key name
        email = request.form.get('email', '')
        home_address = request.form.get('home_address', '')
        city = request.form.get('city', '')
        state = request.form.get('state', '')
        zip_code = request.form.get('zip_code', '')

        if (firstname == valid_login['firstname']
            and lastname == valid_login['lastname']
            and email == valid_login['email']
            and home_address == valid_login['home_address']
            and city == valid_login['city']
            and state == valid_login['state']
            and zip_code == valid_login['zip_code']):
            session['user'] = {
                'firstname': firstname,
                'lastname': lastname,
                'email': email,
                'home_address': home_address,
                'city': city,
                'state': state,
                'zip_code': zip_code
            }
            return "Login successful"
        else:
            return "Login failed"

    return "valid request method"

if __name__ == '__main__':
    app.run(debug=True)

