# SlotSense Complete Project

React + TypeScript + Vite frontend prototype with browser Local Storage. All courses, teacher names, and timetables are illustrative demo data, not official college records.

## Windows setup
1. Extract this ZIP to a new folder.
2. Open the extracted folder in VS Code.
3. Choose Terminal → New Terminal. If PowerShell blocks npm, choose Command Prompt in the terminal dropdown.
4. Run `npm install`
5. Run `npm run dev`
6. Open the localhost URL printed by Vite (commonly http://localhost:5173).

## Login
Use the “Use demo login” button. The form is a frontend demo, not secure authentication.

## Modules
Dashboard; timetable CRUD; sample courses/teachers/rooms; CSV import/export; clash detection; rule-based draft auto-scheduler; room disruption and alternative suggestions; what-if slot check; exam planner; attendance; syllabus; assignments and marks; question bank; teaching materials; notices; tasks; analytics; version snapshots; settings and print/PDF.

## Limitations
No backend, secure auth, shared multi-device data, actual SMS/WhatsApp/push notifications, AI API or live room sensors. Local Storage is per browser. Attendance/marks and all sample names are fictional demo records. Auto-scheduling and recovery are prototypes and require human review. Do not store real sensitive student records in this demo.

## Added teacher and campus workflow tools
- **Faculty Cover Desk:** record an absence, see possible timetable-based cover candidates, and track coordinator approval.
- **Lesson Plan Studio:** make a lesson outline with objectives, activity flow and assessment; download it as a text file.
- **Student Support Tracker:** track academic follow-ups using a student ID/roll number, action and status. Use only approved minimal data.
- **Campus Digital Twin (schedule-based):** inspect rooms by day and see booked versus apparently free slots from the saved timetable.
- **SlotSense Copilot (rule-based):** ask for clash checks, free rooms or possible cover candidates using simple natural-language commands.
- **JSON backup/restore:** export workspace records and restore them in the same browser or another browser.

## Important before real college deployment
This version is suitable for a local pilot or demonstration on one computer/browser. It is **not yet a shared college-wide system**: different teachers' browsers will not sync, login is not secure, and records are not centrally backed up. Before entering actual attendance, marks, or identifiable student information, the college should approve a secure shared backend, staff accounts/roles, backups, privacy rules and a deployment owner. Room availability and cover suggestions are timetable-based only and must be confirmed by the coordinator.
