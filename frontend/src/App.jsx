import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  BarChart3,
  Info,
  Menu,
  X,
  TrendingUp,
  UserMinus,
  Activity,
  Target,
  Moon,
  Sun,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Predict from "./pages/Predict";
import Analytics from "./pages/Analytics";
import ModelAnalysis from "./pages/ModelAnalysis";
import About from "./pages/About";


function App() {

  // =====================================================
  // STATE
  // =====================================================

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activePage, setActivePage] = useState("Dashboard");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("churniq-theme") === "dark";
  });


  // =====================================================
  // DARK MODE
  // =====================================================

  useEffect(() => {

    localStorage.setItem(
      "churniq-theme",
      darkMode ? "dark" : "light"
    );

    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

  }, [darkMode]);


  // =====================================================
  // DASHBOARD DATA
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


  const COLORS = [
    "#2563eb",
    "#ef4444",
  ];


  // =====================================================
  // NAVIGATION
  // =====================================================

  const navigation = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Predict Churn",
      icon: BrainCircuit,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    {
      name: "Model Analysis",
      icon: Activity,
    },
    {
      name: "About",
      icon: Info,
    },
  ];


  const handleNavigation = (page) => {

    setActivePage(page);

    setSidebarOpen(false);

  };


  // =====================================================
  // DASHBOARD
  // =====================================================

  const Dashboard = () => {

    return (

      <div className="space-y-6">


        {/* =================================================
            HERO
        ================================================= */}

        <section>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-xl sm:p-8 lg:p-10">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 right-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />


            <div className="relative z-10 max-w-4xl">

              <div className="mb-4 flex items-center gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">

                  <TrendingUp size={19} />

                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Customer Churn Analytics
                </p>

              </div>


              <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

                Understand customer risk
                <span className="text-blue-400">
                  {" "}before they leave.
                </span>

              </h1>


              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">

                ChurnIQ uses machine learning to identify customers
                who may be at risk of leaving and provides
                data-driven churn insights.

              </p>


              <div className="mt-7 flex flex-wrap gap-3">

                <button
                  onClick={() => handleNavigation("Predict Churn")}
                  className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                >

                  <BrainCircuit size={18} />

                  Predict Customer Risk

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>


                <button
                  onClick={() => handleNavigation("Analytics")}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >

                  <BarChart3 size={18} />

                  View Analytics

                </button>

              </div>


              {/* HERO MINI STATS */}

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">

                  <p className="text-xs text-slate-400">
                    Customers
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    7,043
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">

                  <p className="text-xs text-slate-400">
                    Churn Rate
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    26.54%
                  </p>

                </div>


                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:col-span-1">

                  <p className="text-xs text-slate-400">
                    Model ROC-AUC
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    84.16%
                  </p>

                </div>

              </div>

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

                <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  7,043
                </h3>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  Customers in dataset
                </p>

              </div>


              <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:scale-105 dark:bg-blue-950 dark:text-blue-400">

                <Users size={21} />

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

                <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  1,869
                </h3>

                <p className="mt-3 text-xs text-red-500">
                  26.54% of customers
                </p>

              </div>


              <div className="rounded-xl bg-red-50 p-3 text-red-600 transition group-hover:scale-105 dark:bg-red-950 dark:text-red-400">

                <UserMinus size={21} />

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

                <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  26.54%
                </h3>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  Historical dataset rate
                </p>

              </div>


              <div className="rounded-xl bg-amber-50 p-3 text-amber-600 transition group-hover:scale-105 dark:bg-amber-950 dark:text-amber-400">

                <BarChart3 size={21} />

              </div>

            </div>

          </div>


          {/* ROC AUC */}

          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Model ROC-AUC
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  84.16%
                </h3>

                <p className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
                  Logistic Regression
                </p>

              </div>


              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 transition group-hover:scale-105 dark:bg-emerald-950 dark:text-emerald-400">

                <Activity size={21} />

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            CHARTS
        ================================================= */}

        <section className="grid gap-6 xl:grid-cols-2">


          {/* CHURN DISTRIBUTION */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">

            <div className="mb-4">

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Customer Churn Distribution
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Overall customer retention status
              </p>

            </div>


            <div className="h-72">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={churnData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={105}
                    paddingAngle={3}
                    dataKey="value"
                  >

                    {churnData.map((entry, index) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index]}
                      />

                    ))}

                  </Pie>

                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                      border: darkMode
                        ? "1px solid #475569"
                        : "1px solid #e2e8f0",
                      borderRadius: "12px",
                      color: darkMode ? "#f8fafc" : "#0f172a",
                    }}
                  />

                </PieChart>

              </ResponsiveContainer>

            </div>


            <div className="flex flex-wrap justify-center gap-5">

              <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-blue-600" />

                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Stayed 73.46%
                </span>

              </div>


              <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-red-500" />

                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Churned 26.54%
                </span>

              </div>

            </div>

          </div>


          {/* CONTRACT CHART */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">

            <div className="mb-4">

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Churn by Contract Type
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Churned customers by contract category
              </p>

            </div>


            <div className="h-72">

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
                    stroke={darkMode ? "#334155" : "#e2e8f0"}
                  />

                  <XAxis
                    dataKey="name"
                    tick={{
                      fontSize: 11,
                      fill: darkMode ? "#cbd5e1" : "#475569",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    tick={{
                      fontSize: 11,
                      fill: darkMode ? "#cbd5e1" : "#475569",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                      border: darkMode
                        ? "1px solid #475569"
                        : "1px solid #e2e8f0",
                      borderRadius: "12px",
                      color: darkMode ? "#f8fafc" : "#0f172a",
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
            KEY INSIGHTS
        ================================================= */}

        <section className="grid gap-4 md:grid-cols-3">


          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">

            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">

              <Users size={19} />

            </div>

            <h3 className="font-semibold text-blue-950 dark:text-blue-300">
              Customer Base
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-800 dark:text-blue-400">
              The dataset contains 7,043 customer records used for
              churn analysis and machine learning.
            </p>

          </div>


          <div className="rounded-2xl border border-red-100 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/40">

            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400">

              <UserMinus size={19} />

            </div>

            <h3 className="font-semibold text-red-950 dark:text-red-300">
              Churn Overview
            </h3>

            <p className="mt-2 text-sm leading-6 text-red-800 dark:text-red-400">
              1,869 customers are classified as churned, representing
              26.54% of the dataset.
            </p>

          </div>


          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">

            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">

              <ShieldCheck size={19} />

            </div>

            <h3 className="font-semibold text-emerald-950 dark:text-emerald-300">
              ML Model
            </h3>

            <p className="mt-2 text-sm leading-6 text-emerald-800 dark:text-emerald-400">
              Logistic Regression is connected to the FastAPI
              prediction backend with an ROC-AUC of 84.16%.
            </p>

          </div>

        </section>


        {/* =================================================
            MODEL STATUS
        ================================================= */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-950 dark:text-blue-400">

                  <Target size={18} />

                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Machine Learning System
                </h3>

              </div>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Logistic Regression model connected to FastAPI backend.
              </p>

            </div>


            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

              API Ready

            </div>

          </div>

        </section>

      </div>

    );

  };


  // =====================================================
  // PAGE ROUTING
  // =====================================================

  const renderPage = () => {

    switch (activePage) {

      case "Dashboard":
        return <Dashboard />;

      case "Predict Churn":
        return <Predict />;

      case "Analytics":
        return <Analytics />;

      case "Model Analysis":
        return <ModelAnalysis />;

      case "About":
        return <About />;

      default:
        return <Dashboard />;

    }

  };


  // =====================================================
  // MAIN UI
  // =====================================================

  return (

    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {sidebarOpen && (

        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />

      )}


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-72
          border-r
          border-slate-200
          bg-white
          transition-transform
          duration-300
          dark:border-slate-700
          dark:bg-slate-900
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >


        {/* LOGO */}

        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6 dark:border-slate-700">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">

              <TrendingUp size={22} />

            </div>


            <div>

              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">

                Churn
                <span className="text-blue-600">
                  IQ
                </span>

              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Customer Intelligence
              </p>

            </div>

          </div>


          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >

            <X size={20} />

          </button>

        </div>


        {/* NAVIGATION */}

        <div className="px-4 py-6">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>


          <nav className="space-y-1">

            {navigation.map((item) => {

              const Icon = item.icon;

              const active = activePage === item.name;


              return (

                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.name)}
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    transition-all
                    ${
                      active
                        ? "bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-950 dark:text-blue-400"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    }
                  `}
                >

                  <Icon size={19} />

                  <span>
                    {item.name}
                  </span>

                </button>

              );

            })}

          </nav>

        </div>


        {/* MODEL CARD */}

        <div className="absolute bottom-6 left-4 right-4">

          <div className="rounded-2xl bg-slate-900 p-5 text-white dark:bg-slate-800">

            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">

              <Target size={18} />

            </div>

            <h3 className="font-semibold">
              ML Model
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Logistic Regression
            </p>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-slate-400">
                ROC-AUC
              </span>

              <span className="font-semibold text-blue-400">
                84.16%
              </span>

            </div>

          </div>

        </div>

      </aside>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="min-w-0 lg:ml-72">


        {/* TOP BAR */}

        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90 sm:px-6 lg:px-8">


          {/* LEFT */}

          <div className="flex items-center gap-3">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
            >

              <Menu size={23} />

            </button>


            <div>

              <p className="text-xs font-medium text-slate-400">
                Customer Churn Intelligence
              </p>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {activePage}
              </h2>

            </div>

          </div>


          {/* RIGHT */}

          <div className="flex items-center gap-3">


            {/* SYSTEM STATUS */}

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-700 dark:bg-slate-800 sm:flex">

              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                ML System Online
              </span>

            </div>


            {/* DARK MODE */}

            <button
              onClick={() => setDarkMode((previous) => !previous)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              title={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >

              {darkMode ? (

                <>
                  <Sun size={18} />

                  <span className="hidden sm:inline">
                    Light
                  </span>
                </>

              ) : (

                <>
                  <Moon size={18} />

                  <span className="hidden sm:inline">
                    Dark
                  </span>
                </>

              )}

            </button>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <div className="min-w-0 overflow-x-hidden p-4 sm:p-6 lg:p-8">

          {renderPage()}

        </div>


      </main>

    </div>

  );

}


export default App;