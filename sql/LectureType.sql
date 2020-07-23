SELECT * FROM lecture_type;

INSERT INTO lecture_type (
	type, name, created_at, updated_at
) VALUES (
	'group', '그룹', NOW(), NOW()
);

INSERT INTO lecture_type (
	type, name, created_at, updated_at
) VALUES (
	'private', '프라이빗', NOW(), NOW()
);
