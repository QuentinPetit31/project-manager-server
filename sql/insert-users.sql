-- Ajouter dans un users les valeurs Titi pour name_users,
-- pour titi@mail.com pour email_users, titi1234 pour password_users

INSERT INTO `users`( `name_users`, `email_users`, `password_users`)
VALUE('Titi', 'titi@mail.com', 'titi1234');

-- Insérez plusieurs données à la fois
INSERT INTO `users`( `name_users`, `email_users`, `password_users`)
VALUE('Titi', 'titi@mail.com', 'password1234'),
('John', 'john@yahoo.fr', 'password1234'),
('Jane', 'jane@hotmail.com','password1234'),
('Sebastien', 'sebastien@orange.fr','password1234'),
('Emilie', 'emilie@gmail.com','password1234');
