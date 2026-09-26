import { useState } from "react";

import {
  User,
  ShieldCheck,
  Wifi,
  CreditCard,
  BrainCircuit,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Activity,
} from "lucide-react";


function Predict() {

  // =====================================================
  // PREDICTION STATE
  // =====================================================

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({

    gender: "Male",
    SeniorCitizen: 0,
    Partner: "Yes",
    Dependents: "No",

    tenure: 12,

    PhoneService: "Yes",
    MultipleLines: "No",
    InternetService: "Fiber optic",
    OnlineSecurity: "No",
    OnlineBackup: "No",
    DeviceProtection: "No",
    TechSupport: "No",
    StreamingTV: "Yes",
    StreamingMovies: "Yes",

    Contract: "Month-to-month",
    PaperlessBilling: "Yes",
    PaymentMethod: "Electronic check",

    MonthlyCharges: 80.5,
    TotalCharges: 966.0,

  });


  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {

    const { name, value, type } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "number" ? Number(value) : value,
    }));

  };


  // =====================================================
  // SEND DATA TO FASTAPI
  // =====================================================

  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);
    setError("");
    setResult(null);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      if (!response.ok) {

        throw new Error(
          `Prediction failed with status ${response.status}`
        );

      }


      const data = await response.json();

      console.log("Prediction Result:", data);

      setResult(data);


    } catch (error) {

      console.error("Prediction Error:", error);

      setError(
        "Unable to connect to the prediction server. Make sure FastAPI is running."
      );

    } finally {

      setLoading(false);

    }

  };


  // =====================================================
  // COMMON INPUT STYLE
  // =====================================================

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400";


  const labelClass =
    "text-sm font-medium text-slate-700 dark:text-slate-300";


  const sectionClass =
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6";


  // =====================================================
  // RISK HELPERS
  // =====================================================

  const getRiskIcon = () => {

    if (!result) return Activity;

    if (result.risk === "High") {
      return XCircle;
    }

    if (result.risk === "Medium") {
      return AlertTriangle;
    }

    return CheckCircle2;

  };


  const getRiskStyles = () => {

    if (!result) {
      return {
        container:
          "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900",
        icon:
          "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
        text:
          "text-slate-900 dark:text-white",
      };
    }


    if (result.risk === "High") {

      return {
        container:
          "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40",

        icon:
          "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",

        text:
          "text-red-600 dark:text-red-400",
      };

    }


    if (result.risk === "Medium") {

      return {
        container:
          "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",

        icon:
          "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400",

        text:
          "text-amber-600 dark:text-amber-400",
      };

    }


    return {
      container:
        "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",

      icon:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",

      text:
        "text-emerald-600 dark:text-emerald-400",
    };

  };


  // =====================================================
  // PAGE
  // =====================================================

  return (

    <div className="space-y-6">


      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <section>

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

            <BrainCircuit size={25} />

          </div>


          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Machine Learning Prediction
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Predict Customer Churn
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Enter customer information to estimate churn probability
              and identify the customer's risk level.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          INFORMATION BANNER
      ================================================= */}

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40 sm:p-5">

        <div className="flex gap-3">

          <div className="mt-0.5 shrink-0 rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900 dark:text-blue-400">

            <ShieldCheck size={20} />

          </div>


          <div>

            <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
              AI-powered churn prediction
            </p>

            <p className="mt-1 text-xs leading-5 text-blue-700 dark:text-blue-400">
              The prediction uses the trained Logistic Regression model
              developed from the Telco Customer Churn dataset.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          FORM
      ================================================= */}

      <form onSubmit={handleSubmit}>


        {/* =================================================
            PERSONAL INFORMATION
        ================================================= */}

        <section className={sectionClass}>

          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-violet-50 p-3 text-violet-600 dark:bg-violet-950 dark:text-violet-400">

              <User size={20} />

            </div>

            <div>

              <h2 className="font-semibold text-slate-900 dark:text-white">
                Personal Information
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Basic customer information
              </p>

            </div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


            {/* Gender */}

            <div>

              <label className={labelClass}>
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Male">Male</option>
                <option value="Female">Female</option>

              </select>

            </div>


            {/* Senior Citizen */}

            <div>

              <label className={labelClass}>
                Senior Citizen
              </label>

              <select
                name="SeniorCitizen"
                value={formData.SeniorCitizen}
                onChange={handleChange}
                className={inputClass}
              >

                <option value={0}>No</option>
                <option value={1}>Yes</option>

              </select>

            </div>


            {/* Partner */}

            <div>

              <label className={labelClass}>
                Partner
              </label>

              <select
                name="Partner"
                value={formData.Partner}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Yes">Yes</option>
                <option value="No">No</option>

              </select>

            </div>


            {/* Dependents */}

            <div>

              <label className={labelClass}>
                Dependents
              </label>

              <select
                name="Dependents"
                value={formData.Dependents}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Yes">Yes</option>
                <option value="No">No</option>

              </select>

            </div>

          </div>

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <section className={`${sectionClass} mt-6`}>

          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400">

              <Wifi size={20} />

            </div>

            <div>

              <h2 className="font-semibold text-slate-900 dark:text-white">
                Services
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Customer subscription and service information
              </p>

            </div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


            {/* Tenure */}

            <div>

              <label className={labelClass}>
                Tenure (months)
              </label>

              <input
                type="number"
                name="tenure"
                min="0"
                max="100"
                value={formData.tenure}
                onChange={handleChange}
                className={inputClass}
              />

            </div>


            {/* Phone Service */}

            <div>

              <label className={labelClass}>
                Phone Service
              </label>

              <select
                name="PhoneService"
                value={formData.PhoneService}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Yes">Yes</option>
                <option value="No">No</option>

              </select>

            </div>


            {/* Multiple Lines */}

            <div>

              <label className={labelClass}>
                Multiple Lines
              </label>

              <select
                name="MultipleLines"
                value={formData.MultipleLines}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No phone service">
                  No phone service
                </option>

              </select>

            </div>


            {/* Internet Service */}

            <div>

              <label className={labelClass}>
                Internet Service
              </label>

              <select
                name="InternetService"
                value={formData.InternetService}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="DSL">DSL</option>
                <option value="Fiber optic">Fiber optic</option>
                <option value="No">No</option>

              </select>

            </div>


            {/* Online Security */}

            <div>

              <label className={labelClass}>
                Online Security
              </label>

              <select
                name="OnlineSecurity"
                value={formData.OnlineSecurity}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">
                  No internet service
                </option>

              </select>

            </div>


            {/* Online Backup */}

            <div>

              <label className={labelClass}>
                Online Backup
              </label>

              <select
                name="OnlineBackup"
                value={formData.OnlineBackup}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">
                  No internet service
                </option>

              </select>

            </div>


            {/* Device Protection */}

            <div>

              <label className={labelClass}>
                Device Protection
              </label>

              <select
                name="DeviceProtection"
                value={formData.DeviceProtection}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">
                  No internet service
                </option>

              </select>

            </div>


            {/* Tech Support */}

            <div>

              <label className={labelClass}>
                Tech Support
              </label>

              <select
                name="TechSupport"
                value={formData.TechSupport}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="No internet service">
                  No internet service
                </option>

              </select>

            </div>


            {/* Streaming TV */}

            <div>

              <label className={labelClass}>
                Streaming TV
              </label>

              <select
                name="StreamingTV"
                value={formData.StreamingTV}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="No internet service">
                  No internet service
                </option>

              </select>

            </div>


            {/* Streaming Movies */}

            <div>

              <label className={labelClass}>
                Streaming Movies
              </label>

              <select
                name="StreamingMovies"
                value={formData.StreamingMovies}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="No internet service">
                  No internet service
                </option>

              </select>

            </div>

          </div>

        </section>


        {/* =================================================
            ACCOUNT & BILLING
        ================================================= */}

        <section className={`${sectionClass} mt-6`}>

          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">

              <CreditCard size={20} />

            </div>

            <div>

              <h2 className="font-semibold text-slate-900 dark:text-white">
                Account & Billing
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Contract and payment information
              </p>

            </div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


            {/* Contract */}

            <div>

              <label className={labelClass}>
                Contract
              </label>

              <select
                name="Contract"
                value={formData.Contract}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Month-to-month">
                  Month-to-month
                </option>

                <option value="One year">
                  One year
                </option>

                <option value="Two year">
                  Two year
                </option>

              </select>

            </div>


            {/* Paperless Billing */}

            <div>

              <label className={labelClass}>
                Paperless Billing
              </label>

              <select
                name="PaperlessBilling"
                value={formData.PaperlessBilling}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Yes">Yes</option>
                <option value="No">No</option>

              </select>

            </div>


            {/* Payment Method */}

            <div>

              <label className={labelClass}>
                Payment Method
              </label>

              <select
                name="PaymentMethod"
                value={formData.PaymentMethod}
                onChange={handleChange}
                className={inputClass}
              >

                <option value="Electronic check">
                  Electronic check
                </option>

                <option value="Mailed check">
                  Mailed check
                </option>

                <option value="Bank transfer (automatic)">
                  Bank transfer (automatic)
                </option>

                <option value="Credit card (automatic)">
                  Credit card (automatic)
                </option>

              </select>

            </div>


            {/* Monthly Charges */}

            <div>

              <label className={labelClass}>
                Monthly Charges
              </label>

              <input
                type="number"
                name="MonthlyCharges"
                step="0.01"
                min="0"
                value={formData.MonthlyCharges}
                onChange={handleChange}
                className={inputClass}
              />

            </div>


            {/* Total Charges */}

            <div>

              <label className={labelClass}>
                Total Charges
              </label>

              <input
                type="number"
                name="TotalCharges"
                step="0.01"
                min="0"
                value={formData.TotalCharges}
                onChange={handleChange}
                className={inputClass}
              />

            </div>

          </div>

        </section>


        {/* =================================================
            PREDICT BUTTON
        ================================================= */}

        <div className="mt-6 flex justify-end">

          <button
            type="submit"
            disabled={loading}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >

            <BrainCircuit
              size={19}
              className={loading ? "animate-pulse" : "transition-transform group-hover:scale-110"}
            />

            {loading
              ? "Analyzing..."
              : "Predict Churn"
            }

          </button>

        </div>


        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">

            <div className="flex items-center gap-3">

              <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />

              <div>

                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                  Analyzing customer information...
                </p>

                <p className="mt-1 text-xs text-blue-700 dark:text-blue-400">
                  Sending customer data to the machine learning model.
                </p>

              </div>

            </div>

          </div>

        )}


        {/* =================================================
            ERROR
        ================================================= */}

        {error && (

          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/40">

            <div className="flex items-start gap-3">

              <XCircle
                size={20}
                className="mt-0.5 shrink-0 text-red-600"
              />

              <div>

                <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                  Prediction Error
                </p>

                <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                  {error}
                </p>

              </div>

            </div>

          </div>

        )}


        {/* =================================================
            PREDICTION RESULT
        ================================================= */}

        {result && (

          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">


            {/* RESULT HEADER */}

            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-700 dark:bg-slate-900">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

                  <Activity size={20} />

                </div>

                <div>

                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Customer Risk Result
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Prediction generated by Logistic Regression
                  </p>

                </div>

              </div>

            </div>


            <div className="p-6">


              {/* RESULT CARDS */}

              <div className="grid gap-4 sm:grid-cols-3">


                {/* PREDICTION */}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Prediction
                  </p>

                  <p
                    className={`mt-3 text-2xl font-bold ${
                      result.prediction === "Churn"
                        ? "text-red-600 dark:text-red-400"
                        : "text-emerald-600 dark:text-emerald-400"
                    }`}
                  >
                    {result.prediction}
                  </p>

                </div>


                {/* PROBABILITY */}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Churn Probability
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                    {Number(result.churn_probability).toFixed(2)}%
                  </p>

                </div>


                {/* RISK */}

                <div
                  className={`rounded-2xl border p-5 ${getRiskStyles().container}`}
                >

                  <div className="flex items-center justify-between">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Risk Level
                    </p>

                    {(() => {

                      const RiskIcon = getRiskIcon();

                      return (
                        <RiskIcon
                          size={20}
                          className={getRiskStyles().text}
                        />
                      );

                    })()}

                  </div>

                  <p
                    className={`mt-3 text-2xl font-bold ${getRiskStyles().text}`}
                  >
                    {result.risk}
                  </p>

                </div>

              </div>


              {/* PROBABILITY */}

              <div className="mt-7">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Churn Risk
                  </span>

                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {Number(result.churn_probability).toFixed(2)}%
                  </span>

                </div>


                <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">

                  <div
                    className={`
                      h-full rounded-full
                      transition-all duration-1000 ease-out
                      ${
                        result.risk === "High"
                          ? "bg-red-500"
                          : result.risk === "Medium"
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                      }
                    `}
                    style={{
                      width: `${Math.min(
                        Math.max(
                          Number(result.churn_probability),
                          0
                        ),
                        100
                      )}%`,
                    }}
                  />

                </div>


                <div className="mt-2 flex justify-between text-[11px] text-slate-400">

                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>

                </div>

              </div>


              {/* RECOMMENDED ACTION */}

              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">

                <div className="flex items-start gap-3">

                  <div className="rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

                    <ShieldCheck size={19} />

                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Recommended Action
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">

                      {result.risk === "High"

                        ? "This customer shows a high predicted churn risk. Consider proactive retention offers, personalized support, or contract incentives."

                        : result.risk === "Medium"

                        ? "This customer shows a moderate predicted churn risk. Consider monitoring engagement and offering targeted support."

                        : "This customer currently shows a low predicted churn risk. Continue regular engagement and service monitoring."

                      }

                    </p>

                  </div>

                </div>

              </div>


              {/* RESULT SUMMARY */}

              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-4 dark:border-slate-600">

                <p className="text-center text-xs text-slate-500 dark:text-slate-400">

                  Prediction generated using the ChurnIQ machine learning system.

                </p>

              </div>

            </div>

          </div>

        )}

      </form>

    </div>

  );

}


export default Predict;