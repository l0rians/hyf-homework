-- Part 3: More queries
-- You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again.

-- Get all the tasks assigned to users whose email ends in @spotify.com
-- Get all the tasks for 'Donald Duck' with status 'Not started'
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

USE hyfDB;

SELECT * FROM task WHERE user_id IN (SELECT id FROM user WHERE email LIKE '%@spotify.com');

SELECT * FROM task WHERE user_id IN (SELECT id FROM user WHERE name = 'Donald Duck') AND status_id = 'Not started';

SELECT task.* FROM task INNER JOIN user ON task.user_id = user.id 
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9

SELECT MONTH(created), COUNT(*) FROM task GROUP BY MONTH(created);
