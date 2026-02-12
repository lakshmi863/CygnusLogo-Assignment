 Live Demo: https://cygnuslogo-jobcard.onrender.com
 
 Features
 Search & Discovery
 
Real-time Search: Update results instantly as you type job titles or company names in the top navbar.
Advanced View Toggle: Switch between Jobs, Companies, and Services using the primary navigation.

 Professional Filters (Sidebar)
 
Accordion Interface: Sections (Work Mode, Exp, Location, Department) can be expanded or collapsed to save space.
Dynamic Counter: Each filter option displays the current number of available jobs matching that category.
Multi-Select Logic: Filter by multiple cities or work modes simultaneously.
Experience Range: A custom slider allows filtering from "Fresher" to "Senior" (0-10 Years).

 High-End UI/UX
 
Independent Scroll Layout: The filter sidebar remains fixed on the screen while the job cards section scrolls independently.
Responsive Grid: Job cards automatically adapt to 1, 2, or 3 columns depending on the user's screen size.
Custom Scrollbar: Slim, modern scrollbar design for a cleaner desktop look.
Pagination: Results are split into manageable pages (6 jobs per page) for better performance.

Tech Stack

Framework: React 19
Build Tool: Vite
Styling: CSS3 (Flexbox, CSS Grid, Custom Media Queries)
Icons: Initial SVG Logo & Emojis
Deployment: Render

 Project Structure
 
src/
├── assets/             # Branding and icons
├── components/
│   ├── Filter/         # Sidebar accordion and logic
│   ├── Footer/         # Naukri-style professional footer
│   ├── JobCard/        # Individual job display component
│   ├── JobList/        # Container for mapping cards
│   ├── Navbar/         # Navigation & Search integration
│   ├── Pagination/     # Page-switch navigation
│   └── data/           # jobs.js (Mock Database with 30 entries)
├── App.jsx             # Main Logic and state management
├── App.css             # Main styling & responsive rules
└── main.jsx            # Entry point

 Getting Started
 
Prerequisites

Node.js (Version 16 or higher)
npm or yarn
Installation
Clone the repository:
code
Bash
git clone https://github.com/YOUR_USERNAME/cygnus-job-board.git
Navigate to the project folder:
code
Bash
cd cygnus-job-board
code
Code

3.  **Install dependencies:**
  ```bash
  npm install
  ```
4.  **Start the development server:**
  ```bash
  npm run dev
  ```

---

##  Deployment Notes (Render.com)

This project is deployed as a **Static Site** on Render with the following configurations:
*   **Build Command:** `npm install; npm run build`
*   **Publish Directory:** `dist`
*   **Rewrite Rule:** 
  *   *Source:* `/*` 
  *   *Destination:* `/index.html` 
  *   *Action:* `Rewrite`

---

## Credits
This project was developed as part of the **Cygnus Assignment**.

---

##  Author
**Your Name**  
[GitHub Profile](https://github.com/YOUR_USERNAME) | [LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

***

###  How to add this to your GitHub:
1.  Go to your project folder.
2.  Create a file named **`README.md`**.
3.  Paste the code above into that file.
4.  Replace **`YOUR_USERNAME`** and **`YOUR_PROFILE`** with your actual links.
5.  `git add README.md`, `git commit`, and `git push` to your GitHub.
