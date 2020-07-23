SELECT * FROM staff_types;

insert into staff_types(
	type, name, created_at, updated_at
) values(
	'lecturer', '강사', now(), now()
);

insert into staff_types(
	type, name, created_at, updated_at
) values(
	'manager', '매니저', now(), now()
);

insert into staff_types(
	type, name, created_at, updated_at
) values(
	'owner', '스튜디오 오너', now(), now()
);