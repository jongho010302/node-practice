SELECT * FROM lectures;

INSERT INTO lectures(
	lecture_name, lecture_date, attended_count, total_count, start_time, end_time, created_at, updated_at, lecture_type_id, staff_id
) VALUES(
	'기구 필라테스', '2020/03/05', 1, 3, '09:00', '09:50', NOW(), NOW(), 1, 8
);