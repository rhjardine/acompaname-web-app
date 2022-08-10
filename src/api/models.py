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
    password = db.Column(db.String(50), unique=False, nullable = False)

    def __init__(self, name, email, password):

        self.name=name
        self.email=email
        self.password=password

        db.session.add(self)
        db.session.commit()
    
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
    biological_ages = db.relationship ("Biological_Age", back_populates = "paciente")
# =======
#     blood = db.Column(db.String(50), nullable = False)
#     biological_ages = db.relationship ("Age_Biological", backref = "paciente")

    def __init__(self, name, email, password):
        
        self.name=name
        self.email=email
        self.password=password

        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f'<Paciente {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Biological_Age(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    sexo_genero = db.Column(db.String(30), unique=False, nullable = False)
    edad_chrono = db.Column(db.Integer(), nullable = False)
    raza_etni = db.Column(db.String(30), unique=False, nullable = False)
    longev_hist = db.Column(db.String(30), unique=False, nullable = False)
    frec_vida_sexual = db.Column(db.String(), nullable = False)
    agudeza_visual = db.Column(db.String(), nullable = False)
    peso_corporal = db.Column(db.String(), nullable = False)
    med_cintura = db.Column(db.Integer(), nullable = False)
    med_ante_brazo = db.Column(db.Integer(), nullable = False)
    ta_cardio = db.Column(db.String(), nullable = False)
    colest_ldl = db.Column(db.String(), nullable = False)
    colest_hdl = db.Column(db.String(), nullable = False)
    fumador = db.Column(db.String(), nullable = False)
    i_masa_corporal = db.Column(db.String(), nullable = False)
    result_telomeros = db.Column(db.String(), nullable = False)
    albumina = db.Column(db.String(), nullable = False)
    creatinina = db.Column(db.String(), nullable = False)
    glucosa = db.Column(db.String(), nullable = False)
    Porct_linfoc = db.Column(db.String(), nullable = False)
    MCV = db.Column(db.String(), nullable = False)
    AD_glób_Red = db.Column(db.String(), nullable = False)
    fosfatasa_alc = db.Column(db.String(), nullable = False)
    globulos_bl = db.Column(db.String(), nullable = False)
    PC_React = db.Column(db.String(), nullable = False)
    paciente = db.relationship ("Paciente", back_populates = "biological_ages")
    paciente_id = db.Column(db.Integer(), db.ForeignKey("paciente.id"), nullable = False)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # do not serialize the password, its a security breach
        }


    # class perfil_epigenetico(db.model):


    
    



