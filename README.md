# Next.js Multi-Vendor E-Commerce Auth & Dashboard

This is a basic authentication system and dashboard built with **Next.js 14**, **MySQL**, and **Tailwind CSS**. It includes user signup, login, vendor onboarding, and a simple personalized dashboard.

---

## Features

- User registration with validation  
- Secure login with hashed passwords (bcrypt)  
- JWT-based authentication using cookies  
- Vendor onboarding flow  
- Protected dashboard for authenticated users

---

## Tech Stack

- **Framework:** Next.js 14
- **Database:** MySQL
- **Styling:** Tailwind CSS
- **Auth:** bcrypt + JWT
- **ORM:** None (Raw SQL queries)

---

## Project Structure
my-nextjs-app/
├── db/ # SQL scripts and database backup
│ ├── schema.sql # SQL to create the users table
│ └── backup.sql # Full database backup
├── report/ # Assignment report in PDF
├── src/ # Source code (Next.js app)
│ ├── app/ # Pages and components
│ └── lib/ # DB connection & auth functions
├── .env.local # Local environment variables
├── README.md # This file


---

## Report

Find the detailed report here:  
 `report/nextjs_assignment.pdf`

Includes:
- Overview of the project
- Steps to set up and run
- Features and code structure
- Screenshots of the UI

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/my-nextjs-app.git
cd my-nextjs-app
```

## 2. Install dependencies
npm install

## 3. Create .env.local
bash
Copy code
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=nextjs_db
JWT_SECRET=your_secret_key

## 4. Import the Database
You can use the backup file:
mysql -u your_username -p nextjs_db < db/backup.sql

### Or run your own schema using:

mysql -u your_username -p nextjs_db < db/tables.sql

## 5. Run the development server
npm run dev
Visit http://localhost:3000 in your browser.