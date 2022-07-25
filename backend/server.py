from flask import Flask,render_template, flash, redirect, url_for, request
from flask_cors import CORS
from pymongo import MongoClient
from flask import jsonify
from flask_mail import Mail,Message
from flasgger import Swagger
from flasgger import swag_from
import magic
from flask_mongoengine import MongoEngine
from classes import *
from bson.binary import Binary
from werkzeug.utils import secure_filename
import os


client = MongoClient('localhost:27017')
db1 = client.abc
# Initializing flask app
app = Flask(__name__)
CORS(app)
db = MongoEngine()
app.config['MONGODB_SETTINGS'] = {
    'db': 'imagedb',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app) 
app.secret_key = "caircocoders-ednalan-2020"
# Route for seeing a data
@app.route('/data')
def get_time():    
    # Returning an api for showing in  reactjs
    return {
        "Name":"geek", 
        "Age":"22",
        "programming":"python"
        }
  
# @app.route("/add", methods=["POST"], strict_slashes=False)
# def add_articles():
#     title = request.json['title']
#     body = request.json['body']

#     db.articles.insert_one({
#         "title" : title,
#         "body" : body
#         }
#     )

#     # db.session.add(article)
#     # db.session.commit()

    # return "all ok"

    
# @app.route('/result', methods = ['POST'])
# def result():
#     player_id = request.json
#     if player_id:
#        data = get_player(player_id)
#        name = str(data['name'][0])
#        return jsonify(name)

# Running app

 

UPLOAD_FOLDER = 'static/img'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
   
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
 return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


class User(db.Document):
    name = db.StringField()
    email = db.StringField()
    profile_pic = db.StringField()

@app.route('/im')
def index():
    return render_template('upload.html')


# @app.route('/upload', methods=['POST'])
# def upload():
    
    # file = request.files['inputFile']
    # rs_username = request.form['txtusername']
    # inputEmail = request.form['inputEmail']
    # filename = secure_filename(file.filename)
   
    # if file and allowed_file(file.filename):
    #    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    #    usersave = User(name=rs_username, email=inputEmail, profile_pic=file.filename)
    #    usersave.save()
    #    flash('File successfully uploaded ' + file.filename + ' to the database!')
    #    return redirect('/im')
    # else:
    #    flash('Invalid Upload only txt, pdf, png, jpg, jpeg, gif') 
    # return redirect('/im')    



      
# @app.route('/add', methods = ['POST'])
# def get_query_from_react():
#     # print(request.form['mail_subject'])

#     print(request.files)
    
#     # filename = secure_filename(file.filename)
#     # print(filename)
#     # db1.something.insert_one(request.get_json())


#     # file = (request.get_json())[mail_attach]
   
#     return "ok"


@app.route('/alag', methods = ['POST'])
def get_query_from_react():
    # print(request.form['mail_subject'])
    print(request.files)
    file = request.files['inputFile']
    # rs_username = request.form['txtusername']
    # inputEmail = request.form['inputEmail']
    filename = secure_filename(file.filename)
   
    if file and allowed_file(file.filename):
       file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
       usersave = User(profile_pic=file.filename)
       usersave.save()
       flash('File successfully uploaded ' + file.filename + ' to the database!')
    return "ok"

if __name__ == '__main__':
    app.run(debug=True)