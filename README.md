## Getting Started

To get the project running locally, just follow these quick steps:

1. Make sure you have Node.js installed, then navigate into the project folder.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the `localhost` link provided in your terminal (usually `http://localhost:5173`)!

## What's Working (Features)

The UI isn't just a static mockup—I built in some actual functionality to demonstrate how the components handle state:

- Interactive "Create New" Flow: The primary action button actually works. Clicking `+ Create New` opens a fully functional modal. If you fill out the required fields and hit create, it immediately adds your new item to the main grid!
- Live Search & Filtering: The search bar in the Knowledge Base area works in real-time. Typing will instantly filter the visible cards based on their titles and descriptions.
- Dynamic Pagination: The pagination at the bottom isn't just hardcoded text. It mathematically adjusts based on the active dataset. If you create enough items through the modal, the pagination will automatically slice them into pages, update the row counts, and unlock the "next page" arrows.
- 100% Mobile Responsive: The entire layout is fluid. On smaller devices, the sidebar gracefully hides away into a toggleable hamburger menu, and the grid scales down to a single-column stack so everything remains highly usable on a phone screen.

## Project Architecture


- `src/components/ui/`: This directory acts as my internal design system. It stores the purely reusable, generic layout primitives like `<Button>`, `<Input>`, `<Select>`, `<Modal>`, and `<Pagination>`.
- Feature Folders (`Header/`, `Sidebar/`, `KnowledgeBase/`): Specific chunks of the UI get their own folders to keep the logic isolated and easy to read. 
- `App.jsx`: Acts as the single source of truth/orchestrator handling the state management (active tabs, card data, search queries) and passing props downward.

All styling strictly follows the documented design requirements relying on Tailwind CSS and the exact hex codes requested (Primary `#4F46E5`, Secondary `#1E1B4B`).

