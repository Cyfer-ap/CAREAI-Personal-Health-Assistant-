# CareAI: Personal Health Assistant

CareAI is an AI-powered personal health assistant designed to help patients organize medical records, understand reports, track health changes, receive medicine and checkup reminders, and find the right type of doctor to consult.

> **Disclaimer**: CareAI is designed to provide information and assist with health organization. It does **not** diagnose diseases, prescribe medicine, or replace professional medical advice. Always consult a qualified healthcare professional for medical decisions.

## Core Features

- **Dashboard**: A comprehensive view of your health profile, recent health trends, and today's schedule.
- **Medical Records**: Upload blood reports, prescriptions, or discharge summaries. The system provides a simple summary and highlights abnormal values using clear color-coded badges.
- **Reminders**: Keep track of medicine doses and upcoming health checkups/appointments.
- **Consult & Care**: Describe your symptoms (e.g., "chest pain"), and CareAI will suggest the appropriate specialist (e.g., Cardiologist), avoiding unverified AI diagnoses.
- **Emergency Mode**: A high-contrast, easily accessible screen containing emergency numbers (e.g., 911), critical warning symptoms, and direct links to nearby hospitals.

## Tech Stack

This project was built with a modern web stack focusing on performance and a premium user experience:

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Custom Design System with modern aesthetics, glassmorphism, and micro-animations)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cyfer-ap/CAREAI-Personal-Health-Assistant-.git
   cd CAREAI-Personal-Health-Assistant-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- `src/pages/`: Contains the main feature views (Dashboard, Records, Reminders, Specialist, Emergency).
- `src/components/`: Reusable UI components like the navigation Layout.
- `src/index.css`: The core design system including CSS variables, utility classes, and layout rules.
- `src/App.tsx`: Routing configuration.

## MVP Scope

This version is an MVP (Minimum Viable Product). The AI explanations, data persistence, and doctor appointments are simulated for demonstration purposes. Future updates can introduce backend integrations, robust user authentication, and more comprehensive data analysis.

---
*Built as a personal health management concept.*
