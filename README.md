Deployed Link - https://knowledgebase-lilac-eight.vercel.app/
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
4. Open the `localhost` link provided in your terminal (`http://localhost:5173`)!

---

## Screenshots of UI 

<img width="1908" height="957" alt="Screenshot 2026-04-06 140632" src="https://github.com/user-attachments/assets/1ebef9ef-6377-402b-9084-31230739848a" />
<img width="1919" height="873" alt="Screenshot 2026-04-06 140645" src="https://github.com/user-attachments/assets/8a8062e4-7602-4683-989e-a01a09a90321" />
<img width="1919" height="880" alt="Screenshot 2026-04-06 140850" src="https://github.com/user-attachments/assets/c1a24434-cd3c-4b00-901b-7f1b1bea08ef" />
<img width="1912" height="869" alt="Screenshot 2026-04-06 140915" src="https://github.com/user-attachments/assets/26a92a3a-6f07-49c5-8390-1273c121cc5d" />
<img width="1910" height="889" alt="Screenshot 2026-04-06 141016" src="https://github.com/user-attachments/assets/7c78556b-b878-4842-9a92-1afe730ae43f" />
<img width="1914" height="853" alt="Screenshot 2026-04-06 141107" src="https://github.com/user-attachments/assets/4c4e8290-8c73-42ad-9ae8-c80ab6a1348b" />
<img width="1919" height="878" alt="Screenshot 2026-04-06 141131" src="https://github.com/user-attachments/assets/2cde8490-c49e-4267-9d71-fc796f8c5f97" />

## Technical Highlights

### 1. Separation of Concerns (Custom Hooks)
I completely decoupled the data layer from the presentation layer. 
- **`src/hooks/useKnowledgeBase.jsx`**: This custom hook acts as the state machine. It abstracts all array mutations (creating, updating, and deleting cards) and complex logic entirely away from the views. This guarantees the root `App.jsx` remains incredibly clean, acting only to pass props downward.

### 2. Custom Design System (Reusable UI Components)
Instead of hard-coding raw HTML tags repetitively, I extracted the UI fragments into standard, highly reusable primitives inside the `src/components/ui/` folder:
- ** `<Modal>`**: A dynamic wrapper that handles its own backdrop layouts, rendering headers, content blocks, and footer actions gracefully.
- ** `<Input>` & `<Select>`**: Extracted form primitives that universally manage dynamic labels, formatting required asterisks, error outlines, and injected SVG chevrons.
- ** `<Button>`**: A scalable layout component managing its own click interactions, colors, and transitions.
- ** `<Pagination>`**: Reusable mathematical page controller.

### 3. Dynamic State & CRUD Flows
The UI isn't just a static markup mockup—it flawlessly simulates a live database interaction layer:
- **Create & Edit Processing**: Clicking `+ Create New` opens a functional modal. Additionally, if you choose to **Edit** an existing card via the 3-dots menu, the same exact modal is recycled but pre-filled with the data, seamlessly locking down the Title input as a read-only parameter.
- **Safe Deletions**: Deleting a card prompts a beautiful, custom-built confirmation layer utilizing `react-hot-toast`. This protects users from accidental clicks directly within the layout, completely avoiding outdated, ugly native browser popups.
- **Live Search & Filtering**: The primary search bar works in real-time. Typing instantly recalculates the data flow, filtering the active grid by both Title and Description.
- **Mathematical Pagination**: The pagination component mathematically calibrates based on the active dataset length. If you add new items, it accurately calculates grid subsets, updates the row counts, and unlocks the "next page" arrows only when mathematically applicable.

### 4. UI
- Styling maps precisely to the provided Figma documentation, strictly utilizing the exact requested design hex codes (Primary `#4F46E5`, Secondary `#1E1B4B`) set natively into the Tailwind theme configuration.
- The UI is unconditionally fluid. As the browser shrinks to mobile specifications, the flex columns scale downward into a 1-column grid, and the sidebar seamlessly transitions into a responsive, toggle-able background drawer to restore whitespace.
