DROP TABLE IF EXISTS truths CASCADE;
DROP TABLE IF EXISTS dares CASCADE;
DROP TABLE IF EXISTS wyrs CASCADE;
DROP TABLE IF EXISTS nhies CASCADE;
DROP TABLE IF EXISTS paranoias CASCADE;


CREATE TABLE truths (
    id SERIAL PRIMARY KEY,
    type VARCHAR(250),
    question VARCHAR(250)
);

CREATE TABLE dares (
   id SERIAL PRIMARY KEY,
   type VARCHAR(250),
    question VARCHAR(250)
);

CREATE TABLE wyrs (
   id SERIAL PRIMARY KEY,
   type VARCHAR(250),
   question VARCHAR(250)
);

CREATE TABLE nhies (
   id SERIAL PRIMARY KEY,
   type VARCHAR(250),
   question VARCHAR(250)
);

CREATE TABLE paranoias (
   id SERIAL PRIMARY KEY,
   type VARCHAR(250),
   question VARCHAR(250)
);

-- psql twitch-app -f seed.sql 