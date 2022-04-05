SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
    _id serial PRIMARY KEY,
    user_name VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE public.header (
    _id serial PRIMARY KEY,
    header VARCHAR NOT NULL, 
    user_id INT NOT NULL REFERENCES public.users (_id)
);

CREATE TABLE public.tasks (
    _id serial PRIMARY KEY,
    header_id INT NOT NULL REFERENCES public.header (_id),
    task VARCHAR NOT NULL, 
    task_order INT NOT NULL,
    progress VARCHAR NOT NULL
);