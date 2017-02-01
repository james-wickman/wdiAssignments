CREATE TABLE users (
	id integer PRIMARY KEY AUTOINCREMENT,
	fname varchar(50),
	lname varChar(50),
	likes varChar(50)
);


CREATE TABLE posts (
	id integer PRIMARY KEY AUTOINCREMENT,
	user_id integer,
	content varChar(180),
	dateCreated timestamp DEFAULT current_timestamp

);

CREATE TABLE comments (
	id integer PRIMARY KEY AUTOINCREMENT,
	post_id integer,
	user_id integer,
	content varChar(100),
	dateCreated timestamp DEFAULT current_timestamp

);


INSERT INTO users(fname, lname, likes) VALUES ('John', 'Willams', 'shooting, biking, and hiking');
INSERT INTO users(fname, lname, likes) VALUES ('Steve', 'Lone', 'snowboarding');
INSERT INTO users(fname, lname, likes) VALUES ('Parry', 'Cox', 'woodworking, and electronics');

INSERT INTO posts(user_id, content) VALUES (1, 'Here is my post');
INSERT INTO posts(user_id, content) VALUES (2, 'Here is my 2nd post');


INSERT INTO comments(post_id, user_id, content) VALUES (3, 2, 'Here is my comment');
INSERT INTO comments(user_id, user_id, content) VALUES (1, 3, 'Here is my post');





