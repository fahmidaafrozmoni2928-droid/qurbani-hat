# 🐄 Qurbani Hat

A modern **Qurbani Hat** web application built with **Next.js**.
The platform allows users to explore Qurbani animals, view animal details, and securely register or log in to use user-specific features.

## 🚀 Features

* 🏠 Home page with attractive Qurbani Hat interface
* 🐄 Browse Qurbani animals
* 🐑 Animal categories such as Cow, Goat, Sheep, etc.
* 📄 View detailed information about animals
* 👤 User Registration
* 🔐 User Login
* 🔒 Protected user-specific features
* 🎨 Modern UI using Tailwind CSS and DaisyUI

## 🔐 Authentication Requirements

Users need to create an account and log in to access authenticated features.

### Registration

The registration system requires:

*  Name
* Email Address
* Password
* Profile Image (if applicable)


### Login

Users can log in using:

* Email
* Password





## 🛡️ Authentication & Authorization

The application separates:

* **Authentication** — verifies the user's identity.
* **Session Management** — maintains the user's logged-in state.
* **Authorization** — controls access to protected features.

Protected pages/features should verify the user's authentication status before allowing access.

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **Tailwind CSS**
* **DaisyUI**
* **JavaScript**
* **MongoDB**
* **Node.js**
* **Express.js**
* **Authentication System**

## 📁 Project Structure

```text
qurbani-hat/
├── app/
│   ├── login/
│   ├── register/
│   ├── animals/
│   ├─
│   └── ...
├── components/
├── lib/
├── 
├── package.json
└── README.md
```

Live link: