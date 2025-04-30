from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Stay hungry, stay foolish. – Steve Jobs",
    "The only limit to our realization of tomorrow is our doubts of today. – FDR",
]

@app.route("/quote")
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=True)
