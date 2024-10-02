# SNAP-lab
For the digitized SNAP benefits system, you will be building up an increasingly complex for loop. At the end, you should have one for loop that goes through the entire applicants array and runs your conditional IN THE LOOP to approve or deny the applications.

## Instructions
1. Write a for loop that goes through the applicants array. For each application, use string formatting to print "Application: [name]"
    - e.g. Applicant: John Doe
    - The loop should print 10 names
2. In the for loop, under the console log, add a conditional statement that checks if the applicant's state is not Indiana ("IN"). If so, console log an appropriate message directing them to the food stamps application in their state.
    - Look through the applications to confirm how many should get this message
    - At this point, commit your changes with an appropriate message but do not push!
3. Add an else if statement to check for the basic conditions for approval. All these applicants should be automatically approved. Else, console log an temporary application denied message.
    - Look through the applications to confirm how many should be instantly approved
    - The conditions are:
        - number of dependents is greater than 0 AND
        - number in household is greater then 2 AND
        - month income is less than 1000
    - At this point, commit your changes with an appropriate message but do not push!
4. Currently, the conditions are really strict and people who might need food stamps are being denied. Add at least 2 more else if statements that should send the case to a case worker for additional review
    - Think back to the conditionals we discussed in class yesterday
5. Modify the application denied message to provide more information about the requirements needed for approval. 
    - At this point, commit your changes with an appropriate message and push your code
6. (Extra Credit) Inside the else statement for denial, add conditionals that specify the exact reason that application was denied. There are 3 possible reasons so your conditional should consider all 3 separately.
    
## Rubric (12 pts)
- Tasks (10 pts)
    - Task 1: 2 pts
    - Task 2: 2 pts
    - Task 3: 3 pts
    - Task 4: 2 pts
    - Task 5: 1 pt
- Git (2 pts)
    - Number of commits: 1 pt
    - Appropriate commit messages: 1 pt