# TrackPacker

TrackPacker is a React-based parcel tracking application that allows users to view their deliveries, inspect parcel details, and visualize pickup or delivery locations on an interactive map.

## Features

* View a list of parcels and their current status
* Open parcel details in a modal window
* Display parcel locations on an interactive map
* Responsive design for desktop and mobile devices
* Integration with OpenStreetMap through React Leaflet

## Technologies Used

* React
* Vite
* React Leaflet
* OpenStreetMap
* CSS3

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v18 or later recommended)
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd trackpacker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:5173
```

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── Modal.jsx
├── Modal.css
├── MarkLocation.jsx
├── MarkLocation.css
├── main.jsx
└── index.css
```

## Components

### App

The main application component that contains the parcel data and renders the list of available shipments.

### Modal

Displays detailed information about a selected parcel, including status, estimated arrival date, and location.

### MarkLocation

Renders an interactive map using React Leaflet and OpenStreetMap, showing the parcel's coordinates with a marker.

## Parcel Information

Each parcel contains information such as:

* Sender
* Parcel ID
* Delivery status
* Estimated arrival date
* Last updated timestamp
* Geographic coordinates
* Pickup or delivery location

## Future Improvements

Potential enhancements for future versions:

* Fetch parcel data from a backend API
* Search and filter functionality
* User authentication
* Real-time parcel tracking updates
* Dark/light theme toggle
* Push notifications for status changes

## License

This project was created for educational and demonstration purposes.
