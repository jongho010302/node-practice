SELECT * FROM staff_types;

insert into staff_types(
	type, name, created_at, updated_at
) values(
	'lecturer', '����', now(), now()
);

insert into staff_types(
	type, name, created_at, updated_at
) values(
	'manager', '�Ŵ���', now(), now()
);

insert into staff_types(
	type, name, created_at, updated_at
) values(
	'owner', '��Ʃ��� ����', now(), now()
);