NovaNews 

About the Project

NovaNews is a simple React project where users can view latest news, search for news, and save articles. I built this project to understand how React works with APIs and basic features like login and saving data.

---

Features

- Simple login page (username & password)
- Fetch latest news using News API
- Search news by keyword
- Show short summary of articles
- Save articles and view them later

---

Technologies Used

- React.js
- Axios
- CSS
- localStorage (to save articles)

---

How to Run the Project

1. Download or clone the repository

2. Open the project folder in VS Code

3. Install dependencies:

npm install

4. Run the project:

npm run dev

5. Open browser and go to:

http://localhost:5173

---

API Used

This project uses News API to get news data.

You need to:

- Create an account in https://newsapi.org/
- Get your API key
- Replace it in the code

Example:

apiKey=YOUR_API_KEY

---

How It Works

- First, user logs in
- Then news is fetched from API
- News articles are displayed using map()
- Summary button shows short text (using JavaScript)
- Save button stores articles in browser using localStorage
- Saved articles are shown below

---

What I Learned

- useState and useEffect in React
- How to fetch data using Axios
- How to handle events (onClick, onChange)
- How to store data in localStorage

---

Future Improvements

- Add real AI summary
- Add database
- Improve UI design

---

Author

Pavithra K

---
