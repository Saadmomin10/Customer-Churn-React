import {
  BrainCircuit,
  Target,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Activity,
  GitCompare,
  Crosshair,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


function ModelAnalysis() {

  // =====================================================
  // MODEL DATA
  // =====================================================

  const modelData = [
    {
      name: "Logistic Regression",
      Accuracy: 80.70,
      Precision: 65.84,
      Recall: 56.68,
      F1: 60.92,
      ROC_AUC: 84.16,
    },
    {
      name: "Random Forest",
      Accuracy: 79.21,
      Precision: 69.12,
      Recall: 49.73,
      F1: 55.94,
      ROC_AUC: 82.59,
    },
    {
      name: "Decision Tree",
      Accuracy: 79.42,
      Precision: 62.96,
      Recall: 54.55,
      F1: 58.45,
      ROC_AUC: 82.84,
    },
  ];


  // =====================================================
  // CONFUSION MATRIX
  // =====================================================

  const confusionMatrix = [
    {
      label: "Predicted No Churn",
      actualNo: 925,
      actualYes: 162,
    },
    {
      label: "Predicted Churn",
      actualNo: 110,
      actualYes: 212,
    },
  ];


  // =====================================================
  // COMMON CARD STYLE
  // =====================================================

  const cardClass =
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6";


  return (

    <div className="space-y-6">


      {/* =================================================
          HEADER
      ================================================= */}

      <section>

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

            <BrainCircuit size={24} />

          </div>


          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Customer Churn Intelligence
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Model Analysis
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Compare machine learning models used for customer churn
              prediction and review their evaluation performance.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          SELECTED MODEL
      ================================================= */}

      <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-6 shadow-sm dark:border-blue-900 dark:from-blue-950/50 dark:via-indigo-950/40 dark:to-slate-900 sm:p-7">

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />


        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


          {/* MODEL INFORMATION */}

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">

              <BrainCircuit size={28} />

            </div>


            <div>

              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Selected Final Model
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Logistic Regression
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Logistic Regression was selected as the final model
                based on its overall evaluation performance across
                the tested metrics.
              </p>

            </div>

          </div>


          {/* ROC-AUC */}

          <div className="rounded-2xl border border-white/70 bg-white/80 px-6 py-5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

                <Activity size={19} />

              </div>

              <div>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  ROC-AUC
                </p>

                <p className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                  84.16%
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          METRIC CARDS
      ================================================= */}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">


        {/* ACCURACY */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Accuracy
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                80.70%
              </h3>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Overall predictions
              </p>

            </div>


            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:scale-105 dark:bg-blue-950 dark:text-blue-400">

              <Target size={22} />

            </div>

          </div>

        </div>


        {/* PRECISION */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Precision
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                65.84%
              </h3>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Positive predictions
              </p>

            </div>


            <div className="rounded-xl bg-purple-50 p-3 text-purple-600 transition group-hover:scale-105 dark:bg-purple-950 dark:text-purple-400">

              <ShieldCheck size={22} />

            </div>

          </div>

        </div>


        {/* RECALL */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Recall
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                56.68%
              </h3>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Churn cases detected
              </p>

            </div>


            <div className="rounded-xl bg-amber-50 p-3 text-amber-600 transition group-hover:scale-105 dark:bg-amber-950 dark:text-amber-400">

              <BarChart3 size={22} />

            </div>

          </div>

        </div>


        {/* F1 */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                F1 Score
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                60.92%
              </h3>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Balanced performance
              </p>

            </div>


            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 transition group-hover:scale-105 dark:bg-emerald-950 dark:text-emerald-400">

              <CheckCircle2 size={22} />

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          MODEL COMPARISON
      ================================================= */}

      <section className={cardClass}>

        <div className="mb-5">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">

              <GitCompare size={19} />

            </div>


            <div>

              <h2 className="font-semibold text-slate-900 dark:text-white">
                Model Performance Comparison
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Evaluation metrics for the three trained classification
                models.
              </p>

            </div>

          </div>

        </div>


        <div className="h-[380px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={modelData}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 55,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />


              <XAxis
                dataKey="name"
                angle={-10}
                textAnchor="end"
                tick={{
                  fontSize: 11,
                  fill: "#64748b",
                }}
                axisLine={false}
                tickLine={false}
              />


              <YAxis
                domain={[0, 100]}
                tick={{
                  fontSize: 11,
                  fill: "#64748b",
                }}
                axisLine={false}
                tickLine={false}
              />


              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                }}
              />


              <Legend />


              <Bar
                dataKey="Accuracy"
                fill="#2563eb"
                radius={[5, 5, 0, 0]}
              />

              <Bar
                dataKey="Precision"
                fill="#8b5cf6"
                radius={[5, 5, 0, 0]}
              />

              <Bar
                dataKey="Recall"
                fill="#f59e0b"
                radius={[5, 5, 0, 0]}
              />

              <Bar
                dataKey="F1"
                fill="#10b981"
                radius={[5, 5, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </section>


      {/* =================================================
          MODEL TABLE
      ================================================= */}

      <section className={cardClass}>

        <div className="mb-5">

          <h2 className="font-semibold text-slate-900 dark:text-white">
            Detailed Model Metrics
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Performance results obtained during model evaluation.
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px] text-sm">


            <thead>

              <tr className="border-b border-slate-200 dark:border-slate-700">

                <th className="px-4 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                  Model
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                  Accuracy
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                  Precision
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                  Recall
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                  F1 Score
                </th>

                <th className="px-4 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                  ROC-AUC
                </th>

              </tr>

            </thead>


            <tbody>

              {modelData.map((model, index) => (

                <tr
                  key={model.name}
                  className="border-b border-slate-100 last:border-0 dark:border-slate-700/60"
                >

                  <td className="px-4 py-4 font-medium text-slate-900 dark:text-white">

                    <div className="flex items-center gap-2">

                      {index === 0 && (

                        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                          Selected
                        </span>

                      )}

                      {model.name}

                    </div>

                  </td>


                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                    {model.Accuracy}%
                  </td>


                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                    {model.Precision}%
                  </td>


                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                    {model.Recall}%
                  </td>


                  <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                    {model.F1}%
                  </td>


                  <td className="px-4 py-4 font-semibold text-blue-600 dark:text-blue-400">
                    {model.ROC_AUC}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* =================================================
          CONFUSION MATRIX
      ================================================= */}

      <section className={cardClass}>

        <div className="mb-6">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600 dark:bg-violet-950 dark:text-violet-400">

              <Crosshair size={20} />

            </div>


            <div>

              <h2 className="font-semibold text-slate-900 dark:text-white">
                Logistic Regression Confusion Matrix
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Results obtained on the test dataset.
              </p>

            </div>

          </div>

        </div>


        <div className="overflow-x-auto">

          <div className="grid min-w-[620px] max-w-3xl grid-cols-3 gap-2">


            {/* EMPTY CORNER */}

            <div />


            {/* PREDICTED NO */}

            <div className="flex items-center justify-center rounded-xl bg-slate-100 p-4 text-center text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">

              Predicted
              <br />
              No Churn

            </div>


            {/* PREDICTED YES */}

            <div className="flex items-center justify-center rounded-xl bg-slate-100 p-4 text-center text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">

              Predicted
              <br />
              Churn

            </div>


            {/* ACTUAL NO */}

            <div className="flex items-center justify-center rounded-xl bg-slate-100 p-4 text-center text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">

              Actual
              <br />
              No Churn

            </div>


            {/* TRUE NEGATIVE */}

            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-950/40">

              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                True Negative
              </p>

              <p className="mt-2 text-3xl font-bold text-emerald-700 dark:text-emerald-300">
                925
              </p>

              <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                Correct No Churn
              </p>

            </div>


            {/* FALSE POSITIVE */}

            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950/40">

              <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                False Positive
              </p>

              <p className="mt-2 text-3xl font-bold text-red-700 dark:text-red-300">
                110
              </p>

              <p className="mt-1 text-[11px] text-red-600 dark:text-red-400">
                Incorrect Churn
              </p>

            </div>


            {/* ACTUAL CHURN */}

            <div className="flex items-center justify-center rounded-xl bg-slate-100 p-4 text-center text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">

              Actual
              <br />
              Churn

            </div>


            {/* FALSE NEGATIVE */}

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 text-center dark:border-orange-900 dark:bg-orange-950/40">

              <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                False Negative
              </p>

              <p className="mt-2 text-3xl font-bold text-orange-700 dark:text-orange-300">
                162
              </p>

              <p className="mt-1 text-[11px] text-orange-600 dark:text-orange-400">
                Missed Churn
              </p>

            </div>


            {/* TRUE POSITIVE */}

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-900 dark:bg-blue-950/40">

              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                True Positive
              </p>

              <p className="mt-2 text-3xl font-bold text-blue-700 dark:text-blue-300">
                212
              </p>

              <p className="mt-1 text-[11px] text-blue-600 dark:text-blue-400">
                Correct Churn
              </p>

            </div>

          </div>

        </div>


        {/* MATRIX LEGEND */}

        <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">

          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            True Negative

          </div>


          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

            True Positive

          </div>


          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

            False Positive

          </div>


          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

            False Negative

          </div>

        </div>

      </section>


      {/* =================================================
          EVALUATION SUMMARY
      ================================================= */}

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40 sm:p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">

            <BrainCircuit size={20} />

          </div>


          <div>

            <h2 className="font-bold text-slate-900 dark:text-white">
              Model Evaluation Summary
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Summary of the reported model evaluation results.
            </p>


            <div className="mt-5 grid gap-3 sm:grid-cols-2">


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Logistic Regression achieved an accuracy of
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {" "}80.70%
                  </span>
                  {" "}and ROC-AUC of
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {" "}84.16%
                  </span>
                  {" "}on the test dataset.
                </p>

              </div>


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Random Forest achieved the highest precision among
                  the three evaluated models at
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {" "}69.12%
                  </span>.
                </p>

              </div>


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Decision Tree achieved an accuracy of
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {" "}79.42%
                  </span>
                  {" "}with a ROC-AUC of
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {" "}82.84%
                  </span>.
                </p>

              </div>


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Logistic Regression was selected as the final model
                  based on its overall evaluation results across the
                  reported metrics.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


    </div>

  );

}


export default ModelAnalysis;