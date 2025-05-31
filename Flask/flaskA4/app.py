from flask import Flask, render_template, request

app = Flask(__name__)

f
@app.route('/submit' , methods = ["GET", "POST"])
def user_data():
    user_data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'address': request.form['address'],
        'city': request.form['city'],
        'state': request.form['state'],
        'zip_code': request.form['zip']
    }
    return render_template("userdata.html", user_data=user_data)



if __name__ == '__main__':
    app.run(debug=True)
