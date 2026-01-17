# README.md

# Test Scenarios & Test Cases

This file includes all test scenarios and detailed test cases prepared for the assessment

## 1. Dashboard Test Scenarios

S1: Dashboard should display the freelancer list on initial load  
S2: Each freelancer card should display Name Email Phone Photo Finished Job Count and City  
S3: User should be able to search by Name with live typing filter  
S4: User should be able to search by City with live typing filter  
S5: User should be able to filter by Finished Job Count using an X–Y range  
S6: Finished Job Count range should handle reverse empty edge negative invalid inputs properly  
S7: Finished Job Count should be calculated as the number of posts for the freelancer  
S8: When search filters are cleared the full list should be shown again (live filter behavior)  
S9: Saved freelancers filter button should work correctly  
S10: Save Freelancer button should support correct save unsave behavior on the dashboard cards  
S11: User should be able to navigate from a freelancer card to the Portfolio Page  

## 2. Portfolio Page Test Scenarios

S12: Freelancer details should be displayed correctly (Name Phone Website Address)  
S13: Freelancer past jobs should be loaded using the /posts endpoint  
S14: Each job should show comment count calculated using the /comments endpoint  
S15: Show Comments button should open the comments  
S16: Comments should be closable  
S17: Hire Freelancer button should open the hire popup  

## 3. Hire Freelancer Popup Test Scenarios

S18: Popup should show Name Subject and Message fields when opened  
S19: Submission should be simulated without sending data to backend  
S20: After submission popup should close and UI should show a feedback message  

## 4. Light Dark Mode Test Scenarios

S21: Light Dark toggle should be visible  
S22: Theme should switch correctly when toggle is used  

## 5. Saved Freelancer Feature Test Scenarios

S23: Each freelancer should have a Save Freelancer button  
S24: Saved state should persist after saving a freelancer  
S25: When saved filter is active only saved freelancers should be displayed  

## 6. Non-Functional Test Scenarios

### User Experience

S26: The application should be responsive on different screen sizes (mobile tablet desktop) without layout issues  
S27: The application should work properly across different devices  
S28: UI should show a clear no results message instead of a blank screen when search returns nothing  
S29: UI elements should be clear and labeled  

### Performance

S30: Navigation between Dashboard and Portfolio should be smooth and performant  
S31: Live search filtering should not lag while typing  

### Accessibility & Styling

S32: Light and Dark mode should have readable contrast (not causing eye strain)  
S33: If /users /posts or /comments fail the application should show a clear error message and should not break  
S34: Button styles fonts colors and spacing should be consistent across Dashboard and Portfolio pages  

# Detailed Test Cases

## Test Case 1 — Saved Freelancer  

ID: SAVE-TC-01  
Title: Verify save unsave saved filter and local persistence behavior  
Priority: High  
  
Preconditions  
- Dashboard page is open  
- Freelancer list is loaded  
- At least 3 freelancers are available  
- No freelancer is saved at the beginning (if needed clear storage before starting)  

Test Steps  
1- Check that all freelancer cards have a Save Freelancer button  
2- Click Save Freelancer for Freelancer A  
3- Activate the Saved Only filter and check the list  
4- Disable the filter and click Save Freelancer for Freelancer B and Freelancer C  
5- Activate the Saved Only filter again and check the list  
6- With filter active click Unsave on Freelancer B  
7- Refresh the page (F5) with Saved Only filter still active  
8- While filter is active unsave the remaining saved freelancers  
9- Observe the list  

Expected Results
- After step 1 all cards show a Save Freelancer button  
- After saving Freelancer A button changes to saved state (icon color label)  
- With filter active only saved freelancers are shown  
- After saving A B C filter shows all saved freelancers (A B C)  
- After unsaving B with filter active B disappears from the list immediately  
- After page refresh saved freelancers (A C) still appear → saved state persists  
- After unsaving all saved freelancers list is empty and shows a clear No saved freelancers message  

## Test Case 2 — Search Live Filter  

ID: SEARCH-TC-01  
Title: Verify live search behavior empty results and case insensitive matching  
Priority: High  

Preconditions  
- Dashboard page is open  
- Freelancer list is loaded  
- Example data exists such as  
  - Freelancer A Name Alptuğ Topalhan City Adana   
- Name and City inputs are empty  
  
Test Steps  
1- Observe the initial list count  
2- Type Alp in Name search input  
3- Complete typing Alptuğ  
4- Clear Name input and type alptuğ  
5- Clear Name input and type ALPTUĞ  
6- Clear Name input and type xyz123  
7- Clear Name and City inputs  
8- Type Adan in City search input  
9- Complete typing Adana  
10- Clear City input and type adana  
11- Clear City input and type ADANA  
12- Clear City input and type NoCity  
13- Clear all filters again  
  
Expected Results  
- Initial list shows all freelancers  
- Alp Alptuğ alptuğ ALPTUĞ → only freelancer with name Alptuğ Topalhan is shown  
- Search is case insensitive (results do not change based on letter case)  
- xyz123 → no results and a clear No results message is shown  
- Adan Adana adana ADANA → only freelancers from Adana are shown  
- NoCity → no results and a clear No results message is shown  
- After clearing both fields → full list is shown again (reset behavior)  
