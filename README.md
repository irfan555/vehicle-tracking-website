# Vehicle Tracking System

This is a Vehicle Tracking System application built with React.js. The app allows users to track vehicle locations in real-time, displaying the routes on a map.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).
- A Google Maps API key. You can get it from the [Google Cloud Console](https://console.cloud.google.com/).
- Cloud Functions base URL for your backend API.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/irfan555/vehicle-tracking-web.git
   cd vehicle-tracking-web
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Update the Google Maps API key:**

   Create a `.env` file in the root of the project and add your Google Maps API key:

   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   REACT_APP_BASE_URL=your-backend-cloud-function-baseurl-endpoint
   ```
   
2. **Ensure your backend APIs are deployed and accessible.**

## Running the App

1. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Project Structure

```
vehicle-tracking-system/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── LeftSideBar.js
│   │   ├── VehicleForm.js
│   │   ├── VehicleList.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
│
├── .env
├── package.json
├── README.md
└── ...
```

## Technologies Used

- **React.js:** For building the user interface.
- **Google Maps API:** For displaying the map and routes.
- **Google Cloud Pub/Sub:** For handling real-time data updates.
- **Google Cloud Functions:** For serverless backend functions.
- **MongoDB:** For storing vehicle data.

## Additional Notes

- Ensure you have set the correct permissions and billing settings for your Google Cloud project to use the Maps API and Cloud Functions.
- For production deployment, consider using environment variables and a secrets management service to secure your API keys and other sensitive information.

---

Follow these steps to set up and run the Vehicle Tracking System application locally. If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

Happy tracking! 🚗🗺️

---

You can copy the above content and save it in a file named `README.md` in the root directory of your project. This will guide users on how to set up and run the application locally.
