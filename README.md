# 🛠️ Still under Development 🛠️
# 3DHomieSpace

This is a 3D remodel web application built with **Three.js** that allows users to add, move, view models, and create custom rooms. The app provides an intuitive interface for designing and visualizing 3D spaces.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
  - [Model Not Displaying Correctly](#model-not-displaying-correctly)
  - [Async Model Loading](#async-model-loading)
- [Future Features](#future-features)
- [Contribution](#contribution)
- [License](#license)

## Features
- **Add and Move 3D Models**: Users can import models, move them around, and position them within the 3D space.
- **Room Creation**: Create custom rooms and arrange objects as desired.
- **Model Scaling**: Resize models to fit them better within rooms.
- **Sidebar Interface**: A user-friendly sidebar allows easy access to functions like moving models, scaling, and room creation.

## Technologies Used
- **Three.js**: 3D rendering library used to create and manipulate the 3D environment.
- **JavaScript**: Application logic and interaction handling.
- **HTML/CSS**: Structure and styling of the web interface.
- **GLTFLoader**: For loading 3D models in GLTF format.
- **Flask** (for backend): JSON API for handling requests and managing data.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **Python** (for Flask backend)
- **Flask**

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/3d-remodel-app.git
    cd 3d-remodel-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. If using Flask as a backend for handling APIs, install the required Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Start the development server:
    ```bash
    npm run start
    ```

5. If you are using the Flask backend, start the Flask server:
    ```bash
    flask run
    ```

6. Open your browser and navigate to `http://localhost:3000` to access the 3D remodel application.

## Usage
- Use the sidebar to select functions for manipulating models (e.g., move, scale).
- Add new models by importing files into the app.
- Create custom rooms by selecting the "Create Room" option in the sidebar.
- Adjust model positions and sizes by clicking and dragging within the 3D space.
- Save your design to continue later or export it for use elsewhere.

## Troubleshooting

### Model Not Displaying Correctly
If you encounter black textures after loading a model with **GLTFLoader**:
- Ensure that the materials are properly configured.
- Make sure lighting is set up correctly in the scene.

### Async Model Loading
We recommend using `loader.loadAsync` for a cleaner, promise-based approach to loading models.

## Future Features
- **User authentication**: Enable users to save designs.
- **Real-time collaboration**: Allow multiple users to work on the same design simultaneously.
- **Additional 3D file formats**: Support for more file types in future updates.

## Contribution
Feel free to contribute to this project by submitting a pull request or opening an issue.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
