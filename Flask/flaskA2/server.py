from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/display-name/<name>') #http://127.0.0.1:5000/display-name/Jacorey
def display_name(name):
    return render_template ('display_name.html', name=name)

@app.route('/display-food/<food>') #http://127.0.0.1:5000/display-food/<food>
def display_food(food):
    return render_template('display_food.html', food=food)

@app.route('/display-vacation/<vacation>')#http://127.0.0:5000/display-vacation/<vacation>
def display_vacation(vacation):
    return render_template('display_vacation.html', vacation=vacation)

if __name__ == "__main__":
    app.run(debug=True)

