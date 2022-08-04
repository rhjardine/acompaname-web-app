from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), unique=False, nullable=False)
#     email = db.Column(db.String(50), unique=True, nullable=False)
#     password = db.Column(db.String(50), unique=False, nullable=False)

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             "name": self.name,
#             # do not serialize the password, its a security breach
#         }

    # def __init__(self, name, email, password):
    #     self.name=name
    #     self.email=email
    #     self.password=password

    #     db.session.add(self)
    #     db.session.commit()

class Cuidador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
   

    def __repr__(self):
        return f'<Cuidador {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Paciente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)

    blood = db.Column(db.String(50), unique=True, nullable=False)



    def __repr__(self):
        return f'<Paciente {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Age_Biological(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fumador = db.Column(db.Boolean(), nullable = False)
    masa_corporal = db.Column(db.Boolean(), nullable = False)
    vida_sexual = db.Column(db.Boolean(), nullable = False)
    paciente_id = db.Column(db.Integer(), db.ForeignKey("paciente.id" ), nullable = False) 
