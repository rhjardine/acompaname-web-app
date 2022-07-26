"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,  jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that from flask_jwt_extended import create_access_token,  jwt_required, get_jwt_identityfrom flask_jwt_extended import create_access_token,  jwt_required, get_jwt_identitycame from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def get_users():

    # this is how you can use the Family datastructure by calling its methods
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users),200

@api.route('/user', methods=['POST'])
def add_user():
    id = request.json.get("id")
    first_name = request.json.get("first_name")
    age = request.json.get("age")
    new_user = {
        "id": id,
        "first_name": first_name,
        "last_name": last_name,
        "age": age,
    }
    all_users.add_user(new_user)
    return jsonify(first_name),200


@api.route("/user", methods=["POST"])
def handle_users():
    body = request.json
    email=body.get('email',None)
    password=body.get('password',None)
    if email is None or password is None: return jsonify(
        "revise el payload de su solicitud..."
    ), 400
    new_user=User(email,password)
    return jsonify(new_user.serialize()), 201

# @/api/finanzas
@api.route("/token", methods=["POST"])
def handle_token():
    body = request.json
    email=body.get('email',None)
    password=body.get('password',None)
    if email is None or password is None: return jsonify(
        "revisar de nuevo"
    ), 400
    user=User.query.filter_by(email=email).one_or_none()
    if user is None:
        return jsonify("no existe usuario"), 404
    if password!=user.password:
        return jsonify ("password incorrecto"), 400
    auth=create_access_token(identity=user.id)
    return jsonify ({
        "token": auth
    }), 200

    return jsonify(user.serialize()), 201

@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200