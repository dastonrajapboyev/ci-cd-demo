import React, { useState } from "react";

const App: React.FC = () => {
  const [deployCount, setDeployCount] = useState(0);
  const [version] = useState("v1.0.0");
  const [lastDeploy, setLastDeploy] = useState(
    new Date().toLocaleTimeString("uz-UZ")
  );
  const [isDeploying, setIsDeploying] = useState(false);

  const handleTestDeploy = () => {
    setIsDeploying(true);

    setTimeout(() => {
      setDeployCount((prev) => prev + 1);
      setLastDeploy(new Date().toLocaleTimeString("uz-UZ"));
      setIsDeploying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-2 text-center">
        {/* Header */}
        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb">
            CI/CD Test App
          </h1>
          <p className="text-gray-600">
            GitHub Actions bilan deploy test loyihasi
          </p>
        </div>

        {/* Status Cards */}
        <div className="space-y-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-800 font-semibold">
                Deploy Status
              </span>
            </div>
            <p className="text-green-700">✅ Muvaffaqiyatli deploy qilindi</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-blue-800 font-semibold">Version:</span>
              <span className="text-blue-600 font-mono bg-blue-100 px-2 py-1 rounded">
                {version}
              </span>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-purple-800 font-semibold">
                Test Deploys:
              </span>
              <span className="text-purple-600 font-bold text-xl">
                {deployCount}
              </span>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-yellow-800 font-semibold">
                Last Deploy:
              </span>
              <span className="text-yellow-600 text-sm">{lastDeploy}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleTestDeploy}
          disabled={isDeploying}
          className={`w-full font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 shadow-lg ${
            isDeploying
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:scale-105"
          }`}>
          {isDeploying ? "Deploying... ⏳" : "Deploy Test 🚀"}
        </button>

        {/* Tech Stack */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Tech Stack:</p>
          <div className="flex justify-center space-x-2 text-xs flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              TypeScript
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              Vite
            </span>
            <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
              Tailwind
            </span>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
              GitHub Actions
            </span>
          </div>
        </div>

        {/* Build Info */}
        <div className="mt-4 text-xs text-gray-400">
          Build: {new Date().toLocaleString("uz-UZ")}
        </div>

        {/* Environment Info */}
        <div className="mt-2 text-xs text-blue-400">
          Environment:{" "}
          {import.meta.env.MODE === "development"
            ? "Development"
            : "Production"}
        </div>
      </div>
    </div>
  );
};

export default App;
