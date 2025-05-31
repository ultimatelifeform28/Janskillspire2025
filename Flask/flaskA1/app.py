from flask import Flask

app = Flask(__name__)

@app.route('/')
def user_info():
    first_name = 'Jacorey'
    last_name = 'Lasane'
    favorite_food = 'Pizza'
    favorite_vacation = 'Miami'

    return f'Hello, my name is {first_name} {last_name}. My favorite food is {favorite_food} and my favorite vacation spot is {favorite_vacation}.'

if __name__ == '__main__':
    app.run(debug=True) 
    
