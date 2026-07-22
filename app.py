from flask import Flask, render_template
import config

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", user="thanuja.k")

if __name__ == "__main__":
    app.run(debug=True)
