--je veut visualiser toute les projects sans exception
SELECT * FROM `project`;

-- afin de voir qui posséde l'id 3 dans project je tape
SELECT * FROM `project` WHERE id = 3;

-- afin de voir qui posséde le nom de  project "toto" dans project je tape
SELECT * FROM `project` WHERE `name` = 'toto';
