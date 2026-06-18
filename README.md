# MediQueue

MediQueue is a modern tutoring session booking platform where students can discover tutors, book sessions, and manage their bookings. Tutors can create, update, and manage their tutoring services through an intuitive dashboard.

## Live Website

🔗 Live Site: https://mediqueue-client-alpha.vercel.app/

## Features

* User Authentication with Better Auth
* Secure JWT Protected Routes
* Browse and Search Tutors
* Add New Tutors
* Update Tutor Information
* Delete Tutor Information
* Book Tutor Sessions
* Manage Booked Sessions
* Cancel Bookings
* Responsive Design for Mobile, Tablet, and Desktop
* Dark/Light Theme Toggle
* Interactive UI with HeroUI
* Toast Notifications
* Dynamic Routing
* MongoDB Database Integration

## Technologies Used

### Frontend

* Next.js 16
* React 19
* Tailwind CSS 4
* HeroUI
* React Icons
* Lucide React
* React Hot Toast
* React Toastify
* Lottie React

### Backend

* Node.js
* Express.js
* MongoDB

### Authentication

* Better Auth
* JWT Authorization

## NPM Packages Used

### Client Side

```bash
npm install @heroui/react
npm install next-themes
npm install react-hot-toast
npm install react-toastify
npm install react-icons
npm install lucide-react
npm install lottie-react
```

### Server Side

```bash
npm install express
npm install mongodb
npm install cors
npm install dotenv
npm install jsonwebtoken
```

## Installation

### Clone Repository

```bash
git clone <client-repository-url>
```

### Navigate to Project

```bash
cd mediqueue-client
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SERVER_URL=your_server_url
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=your_auth_url
```

### Run Development Server

```bash
npm run dev
```

## Project Structure

```txt
src
│
├── app
├── components
├── providers
├── lib
├── hooks
├── assets
└── public
```

## Pages

* Home
* Tutors
* Tutor Details
* Add Tutor
* My Tutors
* My Booked Sessions
* Login
* Register
* Profile

## Security

* Protected Routes
* JWT Verification
* User-based Data Access
* Secure Authentication Flow

## Future Improvements

* Tutor Reviews and Ratings
* Payment Gateway Integration
* Real-Time Notifications
* Tutor Availability Calendar
* Advanced Filtering and Sorting

## Author

**Mahedi Hasan**

GitHub: https://github.com/Mahedi-5g
