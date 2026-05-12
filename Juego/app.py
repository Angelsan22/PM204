from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "super_secret_key"  # Necesario para sesiones

# Contenido de las secciones
sections = {
    "reglas": {
        "title": " La Cámara de las Reglas",
        "content": [
            "Debes tener 80% de asistencia.",
            "El plagio implica reprobar la materia.",
            "No se aceptan tareas fuera de tiempo."
        ],
        "questions": [
            {"q": "¿Cuál es el mínimo de asistencia requerido?", "a": "80"},
            {"q": "¿Qué pasa si plagias un trabajo?", "a": "reprobar"}
        ]
    },
    "evaluacion": {
        "title": " El Oráculo de las Notas",
        "content": [
            "Evidencia de conocimiento: 40% en 1P y 2P.",
            "Proyecto integrador: 50% en 3P.",
            "Producto: 30% en cada parcial."
        ],
        "questions": [
            {"q": "¿Qué porcentaje vale el proyecto integrador en el 3P?", "a": "50"},
            {"q": "¿Cuánto vale la evidencia de conocimiento en el 1P?", "a": "40"}
        ]
    },
    "skills": {
        "title": " Skills a desbloquear",
        "content": [
            "Objetivo general: Desarrollar aplicaciones móviles.",
            "Objetivo particular: Diseñar, programar y publicar apps."
        ],
        "questions": [
            {"q": "¿Cuál es el objetivo general de la materia?", "a": "desarrollar aplicaciones móviles"},
            {"q": "¿Cuál es el objetivo particular?", "a": "diseñar, programar y publicar apps"}
        ]
    },
    "timeline": {
        "title": " La Línea del Tiempo",
        "content": [
            "1er Parcial: 01-06-26",
            "2do Parcial: 06-07-26",
            "3er Parcial: 10-08-26",
            "Final: 17-08-26"
        ],
        "questions": [
            {"q": "¿Cuándo es el 2do Parcial?", "a": "06-07-26"},
            {"q": "¿Cuándo es el examen final?", "a": "17-08-26"}
        ]
    }
}

@app.route("/")
def index():
    return render_template("index.html", sections=sections, unlocked=session.get("unlocked", []))

@app.route("/section/<name>", methods=["GET", "POST"])
def section(name):
    if name not in sections:
        return redirect(url_for("index"))

    unlocked = session.get("unlocked", [])

    if request.method == "POST":
        answers = request.form.getlist("answer")
        correct = 0
        for i, q in enumerate(sections[name]["questions"]):
            if answers[i].strip().lower() == q["a"].lower():
                correct += 1

        if correct >= 2 and request.form.get("commit") == "on":
            if name not in unlocked:
                unlocked.append(name)
                session["unlocked"] = unlocked
            return redirect(url_for("index"))

    return render_template("section.html", section=sections[name], unlocked=unlocked)

if __name__ == "__main__":
    app.run(debug=True)

