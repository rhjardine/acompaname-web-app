"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Paciente, Cuidador
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,  jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that from flask_jwt_extended import create_access_token,  jwt_required, get_jwt_identityfrom flask_jwt_extended import create_access_token,  jwt_required, get_jwt_identitycame from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/pacientes', methods=['GET'])
def get_pacientes():

    # this is how you can use the Family datastructure by calling its methods
    pacientes = Paciente.query.all()
    all_pacientes = list(map(lambda x: x.serialize(), pacientes))

    return jsonify(all_pacientes),200

@api.route('/cuidadores', methods=['GET'])
def get_cuidadores():

    # this is how you can use the Family datastructure by calling its methods
    cuidadores = Cuidador.query.all()
    all_cuidadores = list(map(lambda x: x.serialize(), cuidadores))

    return jsonify(all_cuidadores),200


# @api.route("/user", methods=["POST"])
# def handle_users():
#     body = request.json
#     name=body.get('name',None)
#     email=body.get('email',None)
#     password=body.get('password',None)
#     if email is None or password is None: return jsonify(
#         "Error en la solicitud"
#     ), 400
#     new_user=User(name,email,password)
#     auth=create_access_token(identity=new_user.id)
#     return jsonify({
#         "token":auth,
#         "user":new_user.serialize()}), 201

@api.route("/<string:naturaleza>",methods=["POST"])
def handle_users(naturaleza):
    if naturaleza=="paciente":
        body = request.json
        name=body.get('name',None)
        email=body.get('email',None)
        password=body.get('password',None)
        new_paciente=Paciente(name,email,password)
        token = create_access_token(identity=email)
        return jsonify({
                "paciente":new_paciente.serialize(),
                "token": token
                }), 201
    else:

        body = request.json
        name=body.get('name',None)
        email=body.get('email',None)
        password=body.get('password',None)
        new_cuidador= Cuidador(name,email,password)
        return jsonify({
                "cuidador":new_cuidador.serialize()}), 201
    
        
        






@api.route('/paciente/<int:paciente_id>', methods=['DELETE'])
def delete_user(user_id):

    request_body_user = request.get_json()
    # # user1 = User.query.get(user_id)
    # if user1 is None:
        # raise APIException('User not found', status_code=404)
    # db.session.delete(user1)
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

# endpoint de login
@api.route("/login", methods=["POST"])
def handleLogin():
    if request.method == "POST":
        email= request.json.get("email", None)
        password= request.json.get("password", None)
        print(request.json)
        user= Paciente.query.filter_by(email=email).one_or_none()
        if user is None:
            user = Cuidador.query.filter_by(email = email).one_or_none()
            if user is None:
                return jsonify("Usuario no existe"), 404
            token = create_access_token(identity = user.id)
            return jsonify({
                "token": token
            })
        token = create_access_token(identity=user.id)
        return jsonify({
            "token": token
        })
        
