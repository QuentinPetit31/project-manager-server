USE project_manager;
CREATE TABLE project(
id_project INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name_project VARCHAR(50) NOT NULL,
description_project VARCHAR(500) NOT NULL,
start_date_project VARCHAR(50) NOT NULL,
end_date_project VARCHAR(50) NOT NULL,
personnes_project VARCHAR(50) NOT NULL)