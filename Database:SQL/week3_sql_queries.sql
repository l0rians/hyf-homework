-- 1. Meal
-- Queries to write
-- Get all meals
-- Add a new meal
-- Get a meal with any id, fx 1
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a meal with any id, fx 1

SELECT * FROM Meal;

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Spaghetti', 'Spaghetti with meat sauce', 'Copenhagen', '2022-02-01 10:00:00', 10, 10.00, '2022-01-01 10:00:00');

SELECT * FROM Meal WHERE id = 1;

UPDATE Meal SET title = 'Fish',  
description = 'Fish with sauce',
price = 20.00
WHERE id = 1;

DELETE FROM Meal WHERE id = 1

------------------------------
-- 2. Reservation
-- Queries to write
-- Get all reservations
-- Add a new reservation
-- Get a reservation with any id, fx 1
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a reservation with any id, fx 1

SELECT * FROM Reservation;

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 1, '2024-01-01 10:00:00', '12345678', 'John Doe', 'blabla@example.com');

SELECT * FROM Reservation WHERE id = 1;

UPDATE Reservation SET number_of_guests = 2,
contact_name = 'Jane Doe'
WHERE id = 1;

DELETE FROM Reservation WHERE id = 1
------------------------------
-- 3. Review
-- Queries to write
-- Get all reviews
-- Add a new review
-- Get a review with any id, fx 1
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a review with any id, fx 1

SELECT * FROM Review;

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Great food', 'I love this food', 1, 5, '2023-01-01 12:00:00');

SELECT * FROM Review WHERE id = 1;

UPDATE Review SET title = 'Bad food',  
description = 'I hate this food',
stars = 1
WHERE id = 1;

DELETE FROM Review WHERE id = 1;
------------------------------
-- 4. Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
-- Get meals that still has available reservations
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- Get meals that has been created between two dates
-- Get only specific number of meals fx return only 5 meals
-- Get the meals that have good reviews
-- Get reservations for a specific meal sorted by created_date
-- Sort all meals by average number of stars in the reviews

INSERT INTO `Meal` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES
  ('Spaghetti', 'Rice with meat sauce', 'Copenhagen', '2022-02-01 10:00:00', 10, 10.00, '2022-01-01 10:00:00'),
  ('Fish', 'Fish with sauce', 'Copenhagen', '2023-02-01 10:00:00', 10, 20.00, '2022-01-01 10:00:00'),
  ('Salad', 'Salad with cheese', 'Copenhagen', '2024-02-01 10:00:00', 10, 30.00, '2022-01-01 10:00:00');

INSERT INTO `Reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (2, 2, '2024-01-01 10:00:00', '12345678', 'Nick Doe', 'blabla@example.com');

INSERT INTO `Review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('Super great food', 'Best food ever', 1, 5, '2024-05-11 12:00:00');

SELECT * FROM `Meal` WHERE `price` < 15;

SELECT * FROM `Meal` WHERE `max_reservations` > 0;

SELECT * FROM `Meal` WHERE `title` LIKE '%Rice%';

SELECT * FROM `Meal` WHERE `created_date` BETWEEN '2022-01-01' AND '2024-01-01';

SELECT * FROM `Meal` LIMIT 5;

SELECT meal.*
FROM Meal meal
JOIN Review review ON meal.id = review.meal_id
WHERE review.stars > 3;

SELECT * FROM `Reservation` ORDER BY `created_date` ASC;

SELECT AVG(stars) FROM Review WHERE meal_id = 1