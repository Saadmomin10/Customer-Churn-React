import {
  BarChart3,
  TrendingUp,
  Users,
  UserX,
  DollarSign,
  Clock3,
  Activity,
  Wifi,
  FileText,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";


function Analytics() {

  // =====================================================
  // DATA
  // =====================================================

  const churnData = [
    {
      name: "Stayed",
      value: 5174,
    },
    {
      name: "Churned",
      value: 1869,
    },
  ];


  const contractData = [
    {
      name: "Month-to-month",
      churn: 1655,
    },
    {
      name: "One year",
      churn: 166,
    },
    {
      name: "Two year",
      churn: 48,
    },
  ];


  const internetData = [
    {
      name: "Fiber optic",
      churn: 1297,
    },
    {
      name: "DSL",
      churn: 459,
    },
    {
      name: "No Internet",
      churn: 113,
    },
  ];


  const financialData = [
    {
      name: "Stayed",
      monthlyCharges: 61.27,
    },
    {
      name: "Churned",
      monthlyCharges: 74.44,
    },
  ];


  const tenureData = [
    {
      name: "Stayed",
      tenure: 37.57,
    },
    {
      name: "Churned",
      tenure: 17.98,
    },
  ];


  // =====================================================
  // COLORS
  // =====================================================

  const pieColors = [
    "#2563eb",
    "#ef4444",
  ];


  // =====================================================
  // COMMON CHART SETTINGS
  // =====================================================

  const chartCard =
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6";


  return (

    <div className="space-y-6">


      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <section>

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

            <BarChart3 size={24} />

          </div>


          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Customer Churn Intelligence
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Analytics
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Explore customer behavior and churn patterns from the
              Telco Customer Churn dataset.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          KPI CARDS
      ================================================= */}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">


        {/* TOTAL CUSTOMERS */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Total Customers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                7,043
              </h2>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Dataset records
              </p>

            </div>


            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:scale-105 dark:bg-blue-950 dark:text-blue-400">

              <Users size={23} />

            </div>

          </div>

        </div>


        {/* CHURNED CUSTOMERS */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Churned Customers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-red-600 dark:text-red-400">
                1,869
              </h2>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Customers who left
              </p>

            </div>


            <div className="rounded-xl bg-red-50 p-3 text-red-600 transition group-hover:scale-105 dark:bg-red-950 dark:text-red-400">

              <UserX size={23} />

            </div>

          </div>

        </div>


        {/* CHURN RATE */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Churn Rate
              </p>

              <h2 className="mt-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                26.54%
              </h2>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Overall churn
              </p>

            </div>


            <div className="rounded-xl bg-orange-50 p-3 text-orange-600 transition group-hover:scale-105 dark:bg-orange-950 dark:text-orange-400">

              <TrendingUp size={23} />

            </div>

          </div>

        </div>


        {/* MONTHLY CHARGES */}

        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Avg. Monthly Charges
              </p>

              <h2 className="mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                $64.76
              </h2>

              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Across all customers
              </p>

            </div>


            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 transition group-hover:scale-105 dark:bg-emerald-950 dark:text-emerald-400">

              <DollarSign size={23} />

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CHART ROW 1
      ================================================= */}

      <section className="grid gap-6 xl:grid-cols-2">


        {/* CUSTOMER CHURN DISTRIBUTION */}

        <div className={chartCard}>

          <div className="mb-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

                <Activity size={19} />

              </div>

              <div>

                <h2 className="font-semibold text-slate-900 dark:text-white">
                  Customer Churn Distribution
                </h2>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Customers who stayed versus customers who churned.
                </p>

              </div>

            </div>

          </div>


          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={churnData}
                  cx="50%"
                  cy="50%"
                  innerRadius={72}
                  outerRadius={105}
                  paddingAngle={4}
                  dataKey="value"
                >

                  {churnData.map((entry, index) => (

                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index]}
                    />

                  ))}

                </Pie>


                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--tooltip-bg)",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                  }}
                />


                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>


          <div className="mt-2 grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-950/50">

              <p className="text-xs text-blue-600 dark:text-blue-400">
                Stayed
              </p>

              <p className="mt-1 text-lg font-bold text-blue-700 dark:text-blue-300">
                73.46%
              </p>

            </div>


            <div className="rounded-xl bg-red-50 p-3 dark:bg-red-950/50">

              <p className="text-xs text-red-600 dark:text-red-400">
                Churned
              </p>

              <p className="mt-1 text-lg font-bold text-red-700 dark:text-red-300">
                26.54%
              </p>

            </div>

          </div>

        </div>


        {/* CONTRACT CHURN */}

        <div className={chartCard}>

          <div className="mb-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">

                <FileText size={19} />

              </div>

              <div>

                <h2 className="font-semibold text-slate-900 dark:text-white">
                  Churn by Contract Type
                </h2>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Number of churned customers by contract.
                </p>

              </div>

            </div>

          </div>


          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={contractData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />


                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 11,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                  }}
                />


                <Bar
                  dataKey="churn"
                  fill="#2563eb"
                  radius={[7, 7, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>


      {/* =================================================
          CHART ROW 2
      ================================================= */}

      <section className="grid gap-6 xl:grid-cols-2">


        {/* INTERNET SERVICE */}

        <div className={chartCard}>

          <div className="mb-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600 dark:bg-violet-950 dark:text-violet-400">

                <Wifi size={19} />

              </div>

              <div>

                <h2 className="font-semibold text-slate-900 dark:text-white">
                  Churn by Internet Service
                </h2>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Churned customers grouped by internet service.
                </p>

              </div>

            </div>

          </div>


          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={internetData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />


                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 11,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                  }}
                />


                <Bar
                  dataKey="churn"
                  fill="#8b5cf6"
                  radius={[7, 7, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* MONTHLY CHARGES */}

        <div className={chartCard}>

          <div className="mb-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">

                <DollarSign size={19} />

              </div>

              <div>

                <h2 className="font-semibold text-slate-900 dark:text-white">
                  Monthly Charges Comparison
                </h2>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Average monthly charges for each customer group.
                </p>

              </div>

            </div>

          </div>


          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={financialData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -10,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />


                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <Tooltip
                  formatter={(value) => [
                    `$${Number(value).toFixed(2)}`,
                    "Monthly Charges",
                  ]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                  }}
                />


                <Bar
                  dataKey="monthlyCharges"
                  fill="#10b981"
                  radius={[7, 7, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>


      {/* =================================================
          TENURE ANALYSIS
      ================================================= */}

      <section className={chartCard}>

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-xl bg-amber-50 p-3 text-amber-600 dark:bg-amber-950 dark:text-amber-400">

            <Clock3 size={22} />

          </div>


          <div>

            <h2 className="font-semibold text-slate-900 dark:text-white">
              Customer Tenure Analysis
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Average tenure of customers who stayed and churned.
            </p>

          </div>

        </div>


        <div className="grid gap-5 lg:grid-cols-[1fr_260px]">

          <div className="h-[300px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={tenureData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />


                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                />


                <YAxis
                  tick={{
                    fontSize: 11,
                    fill: "#64748b",
                  }}
                  axisLine={false}
                  tickLine={false}
                  label={{
                    value: "Months",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#64748b",
                  }}
                />


                <Tooltip
                  formatter={(value) => [
                    `${value} months`,
                    "Average Tenure",
                  ]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                  }}
                />


                <Bar
                  dataKey="tenure"
                  fill="#f59e0b"
                  radius={[7, 7, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>


          {/* TENURE SUMMARY */}

          <div className="grid content-center gap-3">

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">

              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                Stayed
              </p>

              <p className="mt-1 text-2xl font-bold text-blue-700 dark:text-blue-300">
                37.57
              </p>

              <p className="text-xs text-blue-600 dark:text-blue-400">
                average months
              </p>

            </div>


            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">

              <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                Churned
              </p>

              <p className="mt-1 text-2xl font-bold text-amber-700 dark:text-amber-300">
                17.98
              </p>

              <p className="text-xs text-amber-600 dark:text-amber-400">
                average months
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          KEY INSIGHTS
      ================================================= */}

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40 sm:p-6">

        <div className="flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">

            <BarChart3 size={20} />

          </div>


          <div className="min-w-0">

            <h2 className="font-bold text-slate-900 dark:text-white">
              Key Analytics Insights
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Important patterns observed in the customer dataset.
            </p>


            <div className="mt-5 grid gap-3 sm:grid-cols-2">


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <div className="flex gap-3">

                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Month-to-month customers represent the largest
                    group of churned customers.
                  </p>

                </div>

              </div>


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <div className="flex gap-3">

                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Churned customers have a lower average tenure
                    than customers who stayed.
                  </p>

                </div>

              </div>


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <div className="flex gap-3">

                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Churned customers have higher average monthly
                    charges than customers who stayed.
                  </p>

                </div>

              </div>


              <div className="rounded-xl border border-blue-100 bg-white/70 p-4 dark:border-blue-900 dark:bg-slate-900/40">

                <div className="flex gap-3">

                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Fiber optic customers account for a large
                    proportion of observed churn cases.
                  </p>

                </div>

              </div>


            </div>

          </div>

        </div>

      </section>


    </div>

  );

}


export default Analytics;