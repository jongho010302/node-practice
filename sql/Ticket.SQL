SELECT * FROM tickets;

INSERT INTO tickets (
	lesson_type, lesson_count, title, available_period, price, is_selling, created_at, updated_at
) VALUES (
	'그룹', 10, '3:1 그룹 체험권 10회', 30, 0, 1, NOW(), NOW()
);

INSERT INTO tickets (
	lesson_type, lesson_count, title, available_period, price, is_selling, created_at, updated_at
) VALUES (
	'그룹', 50, '3:1 그룹 체험권 50회', 240, 1500000, 1, NOW(), NOW()
);