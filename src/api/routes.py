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


@api.route("/user", methods=["POST"])
def handle_users():
    body = request.json
    name=body.get('name',None)
    email=body.get('email',None)
    password=body.get('password',None)
    if email is None or password is None: return jsonify(
        "Error en la solicitud"
    ), 400
    new_user=User(name,email,password)
    auth=create_access_token(identity=new_user.id)
    return jsonify({
        "token":auth,
        "user":new_user.serialize()}), 201

@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):

    request_body_user = request.get_json()
    user1 = User.query.get(user_id)
    if user1 is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(user1)
    db.session.commit()
    return jsonify(request_body_user), 200

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