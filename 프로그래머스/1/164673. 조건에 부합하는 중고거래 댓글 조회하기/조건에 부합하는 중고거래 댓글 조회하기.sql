-- 코드를 입력하세요
SELECT 
    B.TITLE, 
    B.BOARD_ID, 
    R.REPLY_ID, 
    R.WRITER_ID, 
    R.CONTENTS, 
    DATE_FORMAT(R.CREATED_DATE, '%Y-%m-%d') AS CREATED_DATE
FROM used_goods_board B
JOIN used_goods_reply R ON B.board_id = R.board_id
WHERE B.created_date >= '2022-10-01'
AND B.created_date <= '2022-10-31'
ORDER BY R.created_date ASC, B.title ASC;