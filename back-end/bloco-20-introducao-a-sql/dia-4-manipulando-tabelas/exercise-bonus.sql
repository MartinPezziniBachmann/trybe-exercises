SELECT * FROM Pixar.BoxOffice;

UPDATE Pixar.BoxOffice
	SET rating = 9
    WHERE domestic_sales > 300000000;
    
UPDATE Pixar.BoxOffice
	SET rating = 6
    WHERE international_sales BETWEEN 200000000 AND 300000000;

SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice
	WHERE movie_id IN (SELECT id FROM Pixar.Movies WHERE length_minutes < 100);

DELETE FROM Pixar.Movies
	WHERE length_minutes < 100;
