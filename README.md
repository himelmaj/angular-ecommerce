# Angular + FastAPI CRUD Application

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built using Angular for the frontend and FastAPI for the backend. It demonstrates how to create, retrieve, update, and delete records through a web interface.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- Python 3.7+ installed on your machine
- Angular CLI installed globally using `npm install -g @angular/cli`
- FastAPI dependencies installed using `pip install fastapi uvicorn`

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/himelmaj/angular-ecommerce.git
    cd angular-ecommerce
    ```

2. **Backend Setup:**

    - Navigate to the `backend` directory:
      
      ```sh
      cd backend
      ```

    - Create and activate a virtual environment (optional but recommended):

      ```sh
      python -m venv venv
      source venv/bin/activate  # On Windows use `venv\Scripts\activate`
      ```

    - Install the required dependencies:

      ```sh
      pip install -r requirements.txt
      ```

3. **Frontend Setup:**

    - Navigate to the `frontend` directory:

      ```sh
      cd ../frontend
      ```

    - Install the required dependencies:

      ```sh
      npm install
      ```

## Running the Application

1. **Start the Backend Server:**

    - Navigate to the `backend` directory and run the FastAPI application using Uvicorn:

      ```sh
      python main.py # or uvicorn server.app:app --reload
      ```

    - The backend server will start at `http://127.0.0.1:8000` to see enpoints use `http://127.0.0.1:8000/docs`

2. **Start the Frontend Server:**

    - Navigate to the `frontend` directory and start the Angular development server:

      ```sh
      ng serve
      ```

    - The frontend server will start at `http://localhost:4200`.
