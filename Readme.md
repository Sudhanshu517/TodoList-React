# 📝 iTask - Todo List App

A simple, responsive, and feature-rich Todo List application built with **React**, **Tailwind CSS**, and **React Icons**. iTask helps users add, edit, delete, and mark tasks as complete — with persistent storage using **LocalStorage**.

## 🌟 Features

- ✅ Add new todos  
- ✏️ Edit existing todos  
- ❌ Delete todos  
- 📦 Persistent storage using `localStorage`  
- 🗂️ Toggle visibility of completed tasks  
- 🎨 Responsive UI with **Tailwind CSS**  
- 🔄 Instant updates with React Hooks (`useState`, `useEffect`)  

## 🚀 Tech Stack

- **React**
- **Tailwind CSS**
- **React Icons**
- **UUID** (for generating unique IDs)
- **LocalStorage** (for data persistence)

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx         # Top navigation bar
├── App.jsx                # Main component
├── index.js               # React entry point
```

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sudhanshu517/TodoList-using-React-Tailwind-and-React-Icons
cd your-repo-name
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

> Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## 🧠 How It Works

- The app uses `useState` to manage local component state.
- Todos are stored as objects with `{ id, todo, isCompleted }`.
- On app load (`useEffect`), it fetches todos from `localStorage`.
- Any changes to the todos array are synced to `localStorage` for persistence.

## Video Demo

Watch a video demo of the working Twitter(X) UI clone:<br>

[https://drive.google.com/file/d/1Ww-5umm3Tje7SLsSliQ8IlxNyPEfujq-/view?usp=sharing](https://drive.google.com/file/d/1qONh5z7CW-adVMqzIoj2TdjvUvxdnAAQ/view?usp=sharing)

## 📌 Upcoming Improvements

- Add due dates and categories
- Task filtering and search
- Dark mode toggle
- Backend integration for multi-device sync


## 🙌 Acknowledgements

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- UI styling with [Tailwind CSS](https://tailwindcss.com/)

---

Feel free to ⭐ the repo if you find it useful!
