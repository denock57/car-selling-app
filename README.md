# car-selling-app
# Car Selling Web Application

This web application allows users to buy and sell cars. It includes features such as user authentication, a contact form, and responsive design.
![Screenshot (167)](https://github.com/denock57/car-selling-app/assets/145377931/8cdf6056-85f1-4435-a65e-38160aae9426)
![Screenshot (168)](https://github.com/denock57/car-selling-app/assets/145377931/3548b403-125f-49ef-b6d8-a9a71de19a73)
![Screenshot (169)](https://github.com/denock57/car-selling-app/assets/145377931/b75df1b0-1d06-47ed-99aa-f91c9a732144)

## Backend (Node.js and Express)

### Installation

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Clone the repository: `git clone https://github.com/your-username/car-selling-app.git`
3. Navigate to the backend folder: `cd car-selling-app/backend`
4. Install dependencies: `npm install`
5. Create a `.env` file based on `.env.example` and configure your MongoDB connection string.
6. Start the server: `npm start`

### API Endpoints

- Authentication:
  - `POST /api/signup`: Register a new user.
  - `POST /api/login`: Log in an existing user.
  - `GET /api/logout`: Log out the current user.

- Contact Form:
  - `POST /api/contact`: Submit a contact form.

## Frontend

### Installation

1. Navigate to the frontend folder: `cd car-selling-app/frontend`
2. Install `live-server`: `npm install -g live-server`
3. Start the development server: `npm start`

### Usage

- Open `http://localhost:8080` in your web browser.

## Contributing

Feel free to contribute to the project. Submit issues or pull requests to improve the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
