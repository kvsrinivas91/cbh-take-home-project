# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### Given:

Tables:
- Table 1) Facility
- Table 2) Agent
- Table 3) Shifts

### Functions:
- getShiftsByFacility(facilityId){}
- generateReport(shiftsList){}

### Goal: 
- Create a unique for each agent from the internal databaseId.
- GroupBy the facility data by agentId.
- Return each agent's total hours worked.


### Feature break-down:

```
-> Ticket 1: Add the ability for a company to add an id to each agent

Ticket details: Add the ability for each company to add an id to the agent which will be successfully saved into the database. Change the data schema accordingly.

Acceptance criteria: The data is correctly saved in the database. All companies are able to save custom ids to their agents.

-> Ticket 2: Fetching the shift information from the database

Ticket details: Give the ability for companies to fetch shift information which should include the custom agent ids.

Acceptance criteria: the shift information is same as before but adds the agent information. 

-> Ticket 3: Calculate and create shift reports

Ticket details: Generate report information with ids and create a pdf

Acceptance criteria: All the companies should be able to generate pdfs. Custom agent ids along with shifts must also be present in the report.
```