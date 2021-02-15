create table users (
    id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null
);

create table items (
    id serial primary key,
    name varchar(50) not null,
    main text,
    sub text,
    quantity integer
)