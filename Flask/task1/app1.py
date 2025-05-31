from flask import Flask, render_template

app = Flask(__name__)

app.route('/home') #http://127.0.0.1/:5000/home
def home():
    return render_template('home.html')

@app.route('/about') #http://127.0.0.1:5000/about
def about():
    return render_template('about.html')


if __name__ == "__main__":
    app.run(debug=True)
