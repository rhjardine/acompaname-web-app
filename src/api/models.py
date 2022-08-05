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
    name = db.Column(db.String(50), unique=False, nullable = False)
    email = db.Column(db.String(50), unique=True, nullable = False)
    password = db.Column(db.String(50), unique=False, nullable = False)
    blood = db.Column(db.String(50), unique=True, nullable = False)
    biological_ages = db.relationship ("Age_Biological", backref = "paciente")



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
    id = db.Column(db.Integer, primary_key = True)
    fumador = db.Column(db.Boolean(), nullable = False)
    i_masa_corporal = db.Column(db.Boolean(), nullable = False)
    vida_sexual = db.Column(db.Boolean(), nullable = False)
    etnia = db.Column(db.String(30), unique=False, nullable = False)
    agudeza_visual = db.Column(db.Boolean(), nullable = False)
    peso_corporal = db.Column(db.Boolean(), nullable = False)
    med_cintura = db.Column(db.Integer(), nullable = False)
    med_ante_brazo = db.Column(db.Integer(), nullable = False)
    paciente_id = db.Column(db.Integer(), db.ForeignKey("paciente.id" ), nullable = False) 
    result_telomeros = db.Column(db.Boolean(), nullable = False)

    # class perfil_epigenetico(db.model):


    
    



