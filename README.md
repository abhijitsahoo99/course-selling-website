# Course Selling Website 

This repository contains the source code for the admin dashboard of a Course Selling Website. The dashboard is built using React for the frontend and Node.js with Express for the backend. MongoDB is used as the database to manage course information. The repository is structured into two main components: the frontend and the backend.

## Frontend (admin-client)
The frontend of the Course Selling Website's admin dashboard is built with React. It provides a user-friendly interface for administrators to manage courses, add courses, edit courses. For administrators, the interface also includes signup, signin, and logout options.

### Prerequisites
Before running the frontend, ensure you have Node.js and npm (Node Package Manager) installed on your system.

### Setup and Usage

#### 0. Open terminal and make sure you are in the right directory:
```ruby
git clone https://github.com/abhijitsahoo99/course-selling-website.git
```
#### 1. Navigate to the admin-client directory:
```ruby
cd admin-client
```
#### 2. Install the required dependencies:
```ruby
npm install
```
#### 3. Start the development server:
```ruby
npm run dev
```
This will start the development server and open the admin dashboard in your default web browser.

## Backend (Server)
The backend of the Course Selling Website is built using Node.js and Express. It provides API endpoints for managing courses and user accounts, as well as authentication middleware for secure access using JWT.

### Prerequisites
Before running the backend, ensure you have Node.js and MongoDB installed on your system. The mongoDB connection is on the cloud, DON'T MISUSE IT.

### Setup and Usage

#### 0. Navigate to the server directory:
```ruby
cd server
```
#### 1. Install the required dependencies:
```ruby
npm install
```
#### 2. Start the server:
```ruby
node index.js
```
The server will start running at http://localhost:3000

## Project Structure
- server/db : Mongoose Schema Defined.
- server/middleware : Contains authentication middleware using JWT.
- server/routes/admin : Defines the API routes for signup, login, post courses, editing courses, getting a particular course, and getting all courses.
- server/routes/user : Defines the API routes for signup, login, getting all courses which are published, buying a particular course, and getting all purchased courses.

## API Endpoints - admin.js
| Method  | End-Point           | Description                            |
| --------| ------------        | -----------------------                |  
| `GET`   | `/me`               | Check _Admin_ exist & get Username     |
| `POST`  | `/signup`           | _Signup_ as a new admin                |
| `POST`  | `/login`            | _login_ as existing admin              |
| `POST`  | `/courses`          | Create a specific _course_             |
| `PUT`   | `/courses/:courseId`| Edit existing _course_                 |
| `GET`   | `/courses`          | List all _course_                      |
| `GET`   | `/course/:courseId` | List specific _course_                 |

## API Endpoints - user.js
| Method  | End-Point           | Description                            |
| --------| ------------        | -----------------------                |         
| `POST`  | `/signup`           | _Signup_ as a new user                 |
| `POST`  | `/login`            | _login_ as existing user               |
| `GET`   | `/courses`          | Get all published _course_             |
| `POST`  | `/courses/:courseId`| Purchase a specific _course_           |
| `GET`   | `/purchasedCourses` | List all purchased _course_            |

Feel free to contribute to this project, report issues, or suggest improvements. Happy coding!
