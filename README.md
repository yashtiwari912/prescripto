# 💊 Prescripto – Smart Doctor Appointment Booking System  

**Prescripto** is a modern **MERN Stack healthcare platform** designed to simplify the process of booking doctor appointments online. It offers patients a seamless way to schedule consultations, while providing doctors with tools to manage availability, appointments, and patient information.  

---

## 🚀 Overview  

- 🏥 **Patient-Friendly Portal** – Browse doctors, check availability, and book appointments with ease.  
- 👨‍⚕️ **Doctor Dashboard** – Manage schedules, view bookings, and update availability in real time.  
- 🔐 **Secure Authentication** – User accounts for patients & doctors with JWT-based login and role-based access.  
- 📊 **Admin Panel** – Centralized control for verifying doctors, managing users, and monitoring platform activity.  
- 📅 **Smart Booking System** – Prevents double bookings and ensures smooth scheduling.  
- 📱 **Responsive UI** – Optimized with **TailwindCSS** for mobile and desktop experiences.  

---

## ✨ Key Features  

### 👩‍⚕️ For Patients  
- Register/Login securely.  
- Search and filter doctors by specialization.  
- Book and manage appointments.  
- View doctor profiles and availability.  

### 🧑‍⚕️ For Doctors  
- Profile creation with specialization, fees, and availability slots.  
- Accept or reject patient appointment requests.  
- Manage schedules and update availability dynamically.  

### 🛠️ For Admins  
- Verify & approve registered doctors.  
- Manage all users (patients/doctors).  
- Monitor platform analytics and activity.  

---

## 🛠️ Tech Stack  

- **Frontend:** React.js, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, bcrypt for password hashing  
- **Other Integrations:** Cloudinary (doctor profile images), Zod (validation)  

---

## 🚀 Getting Started

Follow these steps to set up Prescripto locally on your machine.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **Git**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Cloudinary** account (for image storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/prescripto.git
   cd prescripto
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   # Currency Configuration
   CURRENCY=INR
   
   # JWT Secret for authentication
   JWT_SECRET=your_jwt_secret_here
   
   # Admin Panel Credentials
   ADMIN_EMAIL=admin@prescripto.com
   ADMIN_PASSWORD=your_admin_password
   
   # MongoDB Setup (required)
   MONGODB_URI=mongodb://localhost:27017/prescripto
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prescripto
   
   # Cloudinary Setup (required)
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   
   # Payment Integration (optional)
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

3. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Set up the Admin Panel**
   ```bash
   cd ../admin
   npm install
   ```

   Create a `.env` file in the admin directory:
   ```env
   VITE_CURRENCY=₹
   VITE_BACKEND_URL=http://localhost:4000
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # Server will run on http://localhost:4000
   ```

2. **Start the Frontend (Patient Portal)**
   ```bash
   cd frontend
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

3. **Start the Admin Panel**
   ```bash
   cd admin
   npm run dev
   # Admin panel will run on http://localhost:5174
   ```

### Environment Variables Guide

#### Required Services Setup

1. **MongoDB**
   - **Local:** Install MongoDB locally and use `mongodb://localhost:27017/prescripto`
   - **Cloud:** Create a MongoDB Atlas account and get your connection string

2. **Cloudinary** (Required for image uploads)
   - Sign up at [Cloudinary](https://cloudinary.com/)
   - Get your Cloud Name, API Key, and API Secret from the dashboard

3. **Payment Gateways** (Optional)
   - **Razorpay:** Sign up at [Razorpay](https://razorpay.com/) for Indian payments
   - **Stripe:** Sign up at [Stripe](https://stripe.com/) for international payments

### Default Admin Credentials

- **Email:** `admin@prescripto.com`
- **Password:** `your_admin_password` (as set in your .env file)

---

## 📊 Engineering Highlights  

- Built a **role-based multi-user platform** (Admin, Doctor, Patient) with **secure JWT authentication**.  
- Designed a **smart booking algorithm** preventing appointment conflicts and enabling real-time availability management.  
- Integrated **Cloudinary** for storing and managing doctor profile images.  
- Developed an **admin dashboard** to approve doctors, manage users, and oversee bookings.  
- Implemented **Zod validation** across forms ensuring secure and error-free data entry.  
- Responsive UI/UX with **TailwindCSS** for a clean and modern interface.  

---

## 🤝 Contributing  

We welcome contributions from the community! 🚀 Here's how you can get involved:

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this repository

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/prescripto.git
   cd prescripto
   ```

3. **Set up Development Environment**
   - Follow the [Getting Started](#-getting-started) guide above
   - Make sure all services are running correctly

4. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

5. **Make Your Changes**
   - Write clean, well-documented code
   - Follow existing code style and conventions
   - Add tests if applicable

6. **Test Your Changes**
   - Ensure all existing tests pass
   - Test your new feature thoroughly
   - Verify the application runs without errors

7. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add amazing feature: detailed description"
   ```

8. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

9. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a clear description of your changes
   - Link any relevant issues

### Contribution Guidelines

- **Code Style:** Follow existing patterns and use meaningful variable names
- **Commits:** Write clear, concise commit messages
- **Documentation:** Update README and comments for significant changes
- **Testing:** Ensure your code doesn't break existing functionality
- **Issues:** Feel free to open issues for bugs or feature requests

### Development Tips

- Use the provided environment variables structure
- Test across all three applications (frontend, admin, backend)
- Ensure responsive design for mobile compatibility
- Follow security best practices, especially for authentication

### Areas for Contribution

- 🐛 Bug fixes and improvements
- ✨ New features (payment gateways, notifications, etc.)
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Testing and quality assurance
- 🔧 Performance optimizations

---

## 📄 License  

Distributed under the **MIT License**. See `LICENSE` for details.  

---

## 🌟 Support  

If you find **Prescripto** useful, please ⭐ this repo and share it!  

For questions, feedback, or collaboration:
- 📧 **Email:** [contactyashtiwari912@gmail.com](mailto:contactyashtiwari912@gmail.com)
- 💼 **LinkedIn:** [Connect with Developer](https://www.linkedin.com/in/yash-tiwari-237312287/)
- 🐛 **Issues:** [Report bugs or request features](https://github.com/yashtiwari912/prescripto/issues)

---

## 📝 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [React.js Documentation](https://reactjs.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
