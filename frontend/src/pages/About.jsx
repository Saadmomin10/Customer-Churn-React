import {
  BrainCircuit,
  Database,
  BarChart3,
  Server,
  Code2,
  CheckCircle2,
  Workflow,
  Target,
  Users,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function About() {
  const technologies = [
    {
      icon: Code2,
      name: "Python",
      description: "Machine Learning",
    },
    {
      icon: BrainCircuit,
      name: "Scikit-learn",
      description: "Model Training",
    },
    {
      icon: Server,
      name: "FastAPI",
      description: "Backend API",
    },
    {
      icon: Workflow,
      name: "React",
      description: "Frontend Interface",
    },
    {
      icon: BarChart3,
      name: "Recharts",
      description: "Data Visualization",
    },
    {
      icon: Database,
      name: "Pandas",
      description: "Data Processing",
    },
  ];

  const workflow = [
    "Data Collection",
    "Data Preprocessing",
    "Exploratory Data Analysis",
    "Feature Engineering",
    "Data Splitting",
    "Model Training",
    "Model Testing",
    "Performance Evaluation",
  ];

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <section>
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
          <Sparkles size={16} />
          CUSTOMER CHURN INTELLIGENCE
        </div>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          About ChurnIQ
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          ChurnIQ is a customer churn prediction and risk analysis
          application powered by machine learning.
        </p>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-xl sm:p-8">

        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-900/40">
            <BrainCircuit size={32} />
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-blue-300">
              <ShieldCheck size={16} />
              MACHINE LEARNING PROJECT
            </div>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Customer Churn Prediction & Risk Analysis
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              The system analyzes customer information and predicts whether a
              customer is likely to churn. It also provides churn probability
              and risk level.
            </p>
          </div>

        </div>
      </section>

      {/* Problem + Objective */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* Problem */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <Target size={22} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Project Foundation
              </p>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Problem Statement
              </h2>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Customer churn can affect business revenue and customer
            retention. This project uses machine learning to analyze customer
            attributes and predict potential churn.
          </p>
        </div>

        {/* Objective */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Project Goal
              </p>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Project Objective
              </h2>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            The objective is to build an end-to-end machine learning
            application covering data preprocessing, model training,
            evaluation, visualization, and customer risk prediction.
          </p>
        </div>

      </section>

      {/* Technology Stack */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">

        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Layers3
                size={20}
                className="text-blue-600 dark:text-blue-400"
              />

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Technology Stack
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Technologies used to build ChurnIQ.
            </p>
          </div>

          <span className="hidden rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 sm:block">
            6 Technologies
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:bg-slate-950"
              >
                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm dark:bg-slate-800 dark:text-blue-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {technology.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {technology.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ML Workflow */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">

        <div className="mb-6">
          <div className="flex items-center gap-2">
            <Workflow
              size={20}
              className="text-blue-600 dark:text-blue-400"
            />

            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Machine Learning Workflow
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Main stages followed in this project.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {workflow.map((step, index) => (
            <div
              key={step}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:bg-slate-950"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white shadow-sm">
                  {index + 1}
                </div>

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {step}
                </span>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Project Statistics */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Dataset */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <Database size={24} />
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Dataset
          </p>

          <h3 className="mt-1 font-bold text-slate-900 dark:text-white">
            IBM Telco Customer Churn
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Customer churn dataset used for analysis and model development.
          </p>
        </div>

        {/* Customers */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
            <Users size={24} />
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Customers
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            7,043
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Customer records analyzed.
          </p>
        </div>

        {/* Model */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
            <BrainCircuit size={24} />
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Final Model
          </p>

          <h3 className="mt-1 font-bold text-slate-900 dark:text-white">
            Logistic Regression
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            ROC-AUC: <span className="font-semibold">84.16%</span>
          </p>
        </div>

      </section>

      {/* Project Result */}
      <section className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 dark:border-emerald-900 dark:from-emerald-950/40 dark:to-teal-950/30">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />

        <div className="relative flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Final Outcome
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              Project Result
            </h2>

            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-700 dark:text-slate-300">
              ChurnIQ provides an end-to-end customer churn prediction
              system with a React frontend, FastAPI backend, and trained
              machine learning model. The application generates a churn
              prediction, probability, and customer risk level from customer
              information.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                React Frontend
              </span>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                FastAPI Backend
              </span>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                ML Prediction
              </span>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                Risk Analysis
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;