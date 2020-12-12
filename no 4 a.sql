SELECT * FROM users_tb AS u
JOIN skill_tb AS s ON s.users_id = u.id;

INSERT INTO `users_tb` ( `name` , `photo` )
VALUES (
'Rimuru', 'https://rerollcdn.com/SDSGC/portraits/portrait_69.png'
)

SELECT u.id, u.name, u.photo, s.name AS skill_name
FROM users_tb AS u
JOIN skill_tb AS s ON s.users_id = u.id
WHERE s.name = 'PHP';

SELECT u.id, u.name, u.photo, s.name AS skill_name
FROM users_tb AS u
JOIN skill_tb AS s ON s.users_id = u.id
WHERE u.name = 'Nunchaku';