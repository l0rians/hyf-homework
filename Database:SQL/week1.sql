-- 1. Find out how many tasks are in the task table
-- 2. Find out how many tasks in the task table do not have a valid due date
-- 3. Find all the tasks that are marked as done
-- 4. Find all the tasks that are not marked as done
-- 5. Get all the tasks, sorted with the most recently created first
-- 6. Get the single most recently created task
-- 7. Get the title and due date of all tasks where the title or description contains database
-- 8. Get the title and status (as text) of all tasks
-- 9. Get the name of each status, along with a count of how many tasks have that status
-- 10. Get the names of all statuses, sorted by the status with most tasks first

-- 1 task. Selects all tasks from task table
SELECT COUNT(*) FROM task -- 35 tasks

-- 2 task. Selects all tasks from task table where due_date is null
SELECT COUNT(*) FROM task WHERE due_date IS NULL -- 8 tasks

-- 3 task. Selects all tasks from task table where status_id is 3(Done)
SELECT * FROM task WHERE status_id = 3 -- 12 tasks

-- 4 task. Selects all tasks from task table where status_id is not 3(Done)
SELECT * FROM task WHERE status_id != 3 -- 23 tasks

-- 5 task. Selects all tasks from task table where created is the most recent
SELECT * FROM task ORDER BY created ASC -- 35 tasks

-- 6 task. Selects the single most recently created task
SELECT * FROM task ORDER BY created ASC LIMIT 1; -- 1 task

-- 7 task. Selects all tasks from task table where title or description contains database
SELECT * FROM task WHERE title LIKE '%database%' OR description LIKE '%database%'; -- 5 tasks

-- 8 task. Gets the title and status (as text) of all tasks
SELECT title, status.name FROM task JOIN status ON task.status_id = status.id; -- 35 tasks

-- 9 task. Gets the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name; -- 3 statuses

-- 10 task. Gets the names of all statuses, sorted by the status with most tasks first
SELECT status.name FROM task JOIN status ON task.status_id = status.id GROUP BY status.name ORDER BY COUNT(*) DESC; -- 3 statuses
