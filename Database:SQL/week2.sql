-- Part 1: Working with tasks
-- Write the following sql queries:

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
-- Change the title of a task
-- Change a task due date
-- Change a task status
-- Mark a task as complete
-- Delete a task
-- In all the above queries, you choose which is the task that you will modify/delete.

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Test Task', 'This is a test task', NOW(), NOW(), '2022-02-22', 1, 1);

UPDATE task title
SET title = 'Test Task 2'
WHERE title = 'Test Task';

UPDATE task status_id
SET status_id = 1
WHERE title = 'Test Task 2';

UPDATE task due_date
SET due_date = '2022-02-22'
WHERE title = 'Test Task 2';

UPDATE task status_id
SET status_id = 3
WHERE title = 'Test Task 2';

DELETE FROM task
WHERE title = 'Test Task 2';
