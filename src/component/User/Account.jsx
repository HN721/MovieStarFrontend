import React from "react";
import Footer from "../../pages/Fotter";

export default function Account() {
  return (
    <>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="bg-white w-96 rounded-lg shadow-lg p-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">David Robinson</h2>
              <p className="text-gray-500 text-sm">Joined 1 year ago</p>
            </div>
          </div>

          {/* Menu Section */}
          <div className="mt-8">
            <div className="space-y-6">
              {/* Profile Menu */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9M3 9h18m-4.5 0v9.75a2.25 2.25 0 01-2.25 2.25h-3a2.25 2.25 0 01-2.25-2.25V9m4.5 0h-6"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">Manage user</span>
                </div>
                <span>&gt;</span>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 12a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0zM15.75 12a6.75 6.75 0 10-13.5 0 6.75 6.75 0 0013.5 0zM19.5 20.25V20a8.25 8.25 0 10-16.5 0v.25m16.5 0h-16.5m16.5 0a8.25 8.25 0 01-16.5 0"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">
                    Notifications
                  </span>
                </div>
                <span>&gt;</span>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3.75A8.25 8.25 0 1120.25 12c0 2.621-1.163 4.933-3 6.375"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">Dark Mode</span>
                </div>
                <span>&gt;</span>
              </div>
            </div>
          </div>

          {/* Sign Out Button */}
          <div className="mt-8">
            <button className="w-full bg-red-500 text-white py-2 rounded-md shadow-md hover:bg-red-600">
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
