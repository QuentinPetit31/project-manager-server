-- utilisation de la BDD project_manager
USE project_manager;
-- créer une table user
CREATE TABLE users(
-- identifiant unique qui est utilisé comme clé primaire et qui n’est pas null
id_users INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
-- nom, email et mot de passe des users en 50 caractères max qui ne sont pas null
name_users VARCHAR(50) NOT NULL,
email_users VARCHAR(50) NOT NULL,
password_users VARCHAR(50) NOT NULL)
