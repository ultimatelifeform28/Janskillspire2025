from flask import Flask, render_template, request, redirect, jsonify
from  flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///clients.db'

db = SQLAlchemy(app)

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    short_term_goal = db.Column(db.String(200), nullable=False)
    long_term_goal = db.Column(db.String(200), nullable=False)
    current_weight = db.Column(db.Float, nullable=False)
    target_weight = db.Column(db.Float, nullable=False)
    height = db.Column(db.Float, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    activity_level = db.Column(db.String(50), nullable=False)
    diet_type = db.Column(db.String(50), nullable=False)
    allergies = db.Column(db.String(200), nullable=True)
    medical_conditions = db.Column(db.String(200), nullable=True)
    meal_plan = db.Column(db.String(500), nullable=True)
    workout_plan = db.Column(db.String(500), nullable=True)
    progress = db.Column(db.String(500), nullable=True)
    date_created = db.Column(db.DateTime, server_default=db.func.now())


@app.route('/clients')
def index():
    clients = Client.query.all()
    all_clients = []
    for client in clients:
        client_data = {
            'id': client.id,
            'name': client.name,
            'email': client.email,
            'phone': client.phone,
            'gender': client.gender,
            'short_term_goal': client.short_term_goal,
            'long_term_goal': client.long_term_goal,
            'current_weight': client.current_weight,
            'target_weight': client.target_weight,
            'height': client.height,
            'age': client.age,
            'activity_level': client.activity_level,
            'diet_type': client.diet_type,
            'allergies': client.allergies,
            'medical_conditions': client.medical_conditions,
            'meal_plan': client.meal_plan,
            'workout_plan': client.workout_plan,
            'progress': client.progress,
            'date_created': client.date_created.isoformat() if client.date_created else None
        }
        all_clients.append(client_data)
    return jsonify(all_clients)

@app.route('/clients/<int:id>', methods=['GET'])
def get_client_by_id(id):
    client = Client.query.get_or_404(id)
    return jsonify({
        'id': client.id,
        'name': client.name,
        'email': client.email,
        'phone': client.phone,
        'gender': client.gender,
        'short_term_goal': client.short_term_goal,
        'long_term_goal': client.long_term_goal,
        'current_weight': client.current_weight,
        'target_weight': client.target_weight,
        'height': client.height,
        'age': client.age,
        'activity_level': client.activity_level,
        'diet_type': client.diet_type,
        'allergies': client.allergies,
        'medical_conditions': client.medical_conditions,
        'meal_plan': client.meal_plan,
        'workout_plan': client.workout_plan,
        'progress': client.progress,
        'date_created': client.date_created.isoformat() if client.date_created else None
    })


@app.route('/AddClient', methods=['GET','POST'])
def AddClient():
    if request.method == 'POST':
        print("Received POST request to add client")
        data = request.json
        new_client = Client(
            name=data['name'],
            email=data['email'],
            phone=data['phone'],
            gender=data['gender'],
            short_term_goal=data['short_term_goal'],
            long_term_goal=data['long_term_goal'],
            current_weight=data['current_weight'],
            target_weight=data['target_weight'],
            height=data['height'],
            age=data['age'],
            activity_level=data['activity_level'],
            diet_type=data['diet_type'],
            allergies=data.get('allergies', ''),
            medical_conditions=data.get('medical_conditions', ''),
            meal_plan=data.get('meal_plan', ''),
            workout_plan=data.get('workout_plan', ''),
            progress=data.get('progress', '')
        )
        db.session.add(new_client)

        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            print(f"Error adding client: {e}")
            return jsonify({'error': 'Failed to add client'}), 500
    return jsonify({'message': 'Client added successfully'}), 201

@app.route('/clients/<int:id>', methods=['PUT'])
def update_client(id):
    data = request.json
    client = Client.query.get_or_404(id)
    
    client.name = data['name']
    client.email = data['email']
    client.phone = data['phone']
    client.gender = data['gender']
    client.short_term_goal = data['short_term_goal']
    client.long_term_goal = data['long_term_goal']
    client.current_weight = data['current_weight']
    client.target_weight = data['target_weight']
    client.height = data['height']
    client.age = data['age']
    client.activity_level = data['activity_level']
    client.diet_type = data['diet_type']
    client.allergies = data.get('allergies', '')
    client.medical_conditions = data.get('medical_conditions', '')
    client.meal_plan = data.get('meal_plan', '')
    client.workout_plan = data.get('workout_plan', '')
    client.progress = data.get('progress', '')
    db.session.commit()

    return jsonify({'message': 'Client updated successfully'}), 200

@app.route('/deleteclients/<int:id>', methods=['DELETE'])
def delete_client(id):
    client = Client.query.get_or_404(id)
    db.session.delete(client)
    try:
        db.session.commit()
    except Exception as e:
        print(f"Error deleting client: {e}")
        db.session.rollback()
        return jsonify({'error': 'Failed to delete client'}), 500
    return jsonify({'message': 'Client deleted successfully'}), 200


@app.route('/')
def show_clients():
    clients = Client.query.all()
    return render_template('client_list.html', clients=clients)




if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(debug=True, port = 5002)

    