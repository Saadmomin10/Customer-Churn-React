from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd


# Create FastAPI application
app = FastAPI()


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
	"https://customer-churn-react.vercel.app",

    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load ML files
model = joblib.load("churn_model.pkl")
scaler = joblib.load("scaler.pkl")
feature_columns = joblib.load("feature_columns.pkl")


# Home route
@app.get("/")
def home():
    return {
        "message": "Customer Churn Prediction API is running"
    }


# Prediction route
@app.post("/predict")
def predict(data: dict):

    # Convert input to DataFrame
    input_data = pd.DataFrame([data])

    # Remove fields that are not needed
    input_data = input_data.drop(
        columns=["prediction", "churn_probability", "risk"],
        errors="ignore"
    )

    # Convert categorical variables to dummy variables
    input_data = pd.get_dummies(
        input_data,
        drop_first=True
    )

    # Make sure all required columns exist
    input_data = input_data.reindex(
        columns=feature_columns,
        fill_value=0
    )

    # Scale data
    input_scaled = scaler.transform(input_data)

    # Prediction
    prediction = model.predict(input_scaled)[0]

    # Probability
    probability = model.predict_proba(input_scaled)[0][1]

    # Risk level
    if probability >= 0.70:
        risk = "High"
    elif probability >= 0.40:
        risk = "Medium"
    else:
        risk = "Low"

    return {
        "prediction": "Churn" if prediction == 1 else "No Churn",
        "churn_probability": round(float(probability * 100), 2),
        "risk": risk
    }