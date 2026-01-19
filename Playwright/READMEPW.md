<h1 style="color:red;">Assumptions</h1>

Class names and selectors are assumed:
- **`.freelancer-card`** for freelancer cards
- **`.job-item`** for job entries
- **`.comment-item`** for comments
- Button text like **`View portfolio`** and **`Show comments`**
- Finished job counts are assumed to be shown as **`Finished Jobs: X`**, where `X` is a number parsed in tests


Only the first job’s comments are validated in **`portfolio.ts`**.

Navigation flow goes from **`dashboard` → `portfolio`**.

Live filtering on the dashboard is triggered by typing input (**no search button**).
