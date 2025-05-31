from flask import Flask, render_template

app = Flask(__name__)



@app.route('/')
def printInfo():
    return render_template('index.html')

@app.route('/user')
def user_info():
    user = {
        "first_name": "Jacorey",
        "last_name": "Lasane",
        "favorite_food": "Pizza",   
        "favorite_vacation_destination": "Hawaii",
    }
    return render_template('index.html', 
                           first_name=user["first_name"], 
                           last_name=user["last_name"], 
                           favorite_food=user["favorite_food"], 
                           favorite_vacation_destination=user["favorite_vacation_destination"])

if __name__ == '__main__':
    app.run(debug=True)