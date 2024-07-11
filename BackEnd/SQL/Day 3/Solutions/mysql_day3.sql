-- =========================================================
-- 1. Report:
-- How many rows do we have in each table in the employees database?
-- =========================================================
-- SELECT TABLE_NAME, TABLE_ROWS
-- FROM INFORMATION_SCHEMA.TABLES
-- WHERE TABLE_SCHEMA = 'employees';

-- OUTPUT:
-- 'departments', 9
-- 'dept_emp', 331143
-- 'dept_manager', 24
-- 'employees', 298892
-- 'salaries', 2564297
-- 'titles', 442724

SELECT COUNT(*) FROM `departments`
UNION
SELECT COUNT(*) FROM `dept_emp`
UNION
SELECT COUNT(*) FROM `dept_manager`
UNION
SELECT COUNT(*) FROM `employees`
UNION
SELECT COUNT(*) FROM `salaries`
UNION
SELECT COUNT(*) FROM `titles`;
-- OUTPUT:
-- 9
-- 331603
-- 24
-- 300024
-- 2844047
-- 443308

-- =========================================================
-- 2. Report:
-- How many employees with the first name "Mark" 
-- do we have in our company? (ever)
-- =========================================================
SELECT COUNT(*) FROM `employees` WHERE first_name = "Mark";
-- OUTPUT:
-- 230

-- display them:
SELECT * FROM `employees` WHERE first_name = "Mark";

-- =========================================================
-- 3. Report:
-- How many employees with the first name "Eric" and 
-- the last name beginning with "A" do we have in our company? (ever)
-- =========================================================
SELECT COUNT(*) FROM `employees` WHERE first_name = "Eric" AND last_name LIKE "A%";
-- OUTPUT:
-- 13

-- display them:
SELECT * FROM `employees` WHERE first_name = "Eric" AND last_name LIKE "A%";

-- =========================================================
-- 4. Report:
-- How many employees do we have that are working for us 
-- since 1985 until now and who are they?
-- =========================================================
SELECT COUNT(*) FROM employees
WHERE hire_date LIKE "1985%"
AND emp_no IN (
	SELECT emp_no FROM salaries
    WHERE to_date > NOW()
);
-- OUTPUT:
-- 28291

-- display them:
SELECT * FROM employees
WHERE hire_date LIKE "1985%"
AND emp_no IN (
	SELECT emp_no FROM salaries
    WHERE to_date > NOW()
);

-- =========================================================
-- 5. Report:
-- How many employees got hired from 1990 until 1997 and who are they? 
-- (still in the company or not)
-- =========================================================
SELECT COUNT(*) FROM employees
WHERE hire_date BETWEEN "1990-01-01" AND "1997-12-31";
-- OUTPUT: 129545

-- display them:
SELECT * FROM employees
WHERE hire_date BETWEEN "1990-01-01" AND "1997-12-31";

-- =========================================================
-- 6. Report:
-- How many employees have (had, if not working anymore) 
-- salaries higher than EUR 70 000,00 and who are they?
-- =========================================================
SELECT COUNT(*) FROM employees
WHERE emp_no IN (
    SELECT emp_no FROM salaries
    WHERE salary > 70000
);
-- OUTPUT: 135631

-- display them:
SELECT * FROM employees
WHERE emp_no IN (
    SELECT emp_no FROM salaries
    WHERE salary > 70000
);

-- =========================================================
-- 7. Report:
-- How many employees do we have in the Research Department, 
-- who are working there since 1992 until now and who are they?
-- TIP: You can use the CURRENT_DATE() FUNCTION to access today's date
-- =========================================================
SELECT COUNT(*) FROM dept_emp
WHERE dept_no = (
	SELECT dept_no FROM departments
	WHERE dept_name = "Research"
)
AND from_date LIKE "1992%"
AND to_date > NOW();
-- OUTPUT: 924

-- display them:
SELECT * FROM employees
WHERE emp_no IN (
    SELECT emp_no FROM dept_emp
    WHERE dept_no = (
        SELECT dept_no FROM departments
        WHERE dept_name = "Research"
    )
    AND from_date LIKE "1992%"
    AND to_date > NOW()
);

-- =========================================================
-- 8. Report:
-- How many employees do we have in the Finance Department, 
-- who are working for us since 1985 (in any department) until now 
-- and who have salaries higher than EUR 75 000,00 - who are they?
-- =========================================================
SELECT COUNT(*) FROM employees
WHERE hire_date LIKE "1985%"
AND emp_no IN (
    SELECT emp_no FROM dept_emp
    WHERE dept_no = (
        SELECT dept_no FROM departments
        WHERE dept_name = "Finance"
    )
    AND to_date > NOW()
)
AND emp_no IN (
	SELECT emp_no FROM salaries
    WHERE salary > 75000
    AND to_date > NOW()
);
-- OUTPUT: 1061

-- display them:
SELECT * FROM employees
WHERE hire_date LIKE "1985%"
AND emp_no IN (
    SELECT emp_no FROM dept_emp
    WHERE dept_no = (
        SELECT dept_no FROM departments
        WHERE dept_name = "Finance"
    )
    AND to_date > NOW()
)
AND emp_no IN (
	SELECT emp_no FROM salaries
    WHERE salary > 75000
    AND to_date > NOW()
);

-- =========================================================
-- 9. Report:
-- We need a table with employees, who are working for us at this moment:
-- first and last name, date of birth, gender, hire_date, title and salary.
-- =========================================================
SELECT em.first_name, em.last_name, em.birth_date, em.gender, em.hire_date, ti.title, sa.salary
FROM employees as em
JOIN salaries as sa ON sa.emp_no = em.emp_no
JOIN titles as ti ON ti.emp_no = em.emp_no
WHERE sa.to_date > NOW()
AND ti.to_date > NOW();

-- count them:
SELECT COUNT(DISTINCT em.emp_no)
FROM employees as em
JOIN salaries as sa ON sa.emp_no = em.emp_no
JOIN titles as ti ON ti.emp_no = em.emp_no
WHERE sa.to_date > NOW();
-- OUTPUT: 240124

-- =========================================================
-- 10. Report:
-- We need a table with managers, who are working for us at this moment:
-- first and last name, date of birth, gender, hire_date, title, department name and salary.
-- =========================================================
SELECT em.first_name, em.last_name, em.birth_date, em.gender, em.hire_date, ti.title, de.dept_name, sa.salary
FROM employees as em
JOIN salaries as sa ON sa.emp_no = em.emp_no
JOIN titles as ti ON ti.emp_no = em.emp_no
JOIN dept_manager as dm ON dm.emp_no = em.emp_no
JOIN departments as de ON de.dept_no = dm.dept_no
WHERE ti.to_date > NOW()
AND ti.title = "Manager"
AND sa.to_date > NOW();

-- count them:
SELECT COUNT(DISTINCT em.emp_no)
FROM employees as em
JOIN salaries as sa ON sa.emp_no = em.emp_no
JOIN titles as ti ON ti.emp_no = em.emp_no
JOIN dept_manager as dm ON dm.emp_no = em.emp_no
JOIN departments as de ON de.dept_no = dm.dept_no
WHERE ti.to_date > NOW()
AND ti.title = "Manager"
AND sa.to_date > NOW();
-- OUTPUT: 8

-- =========================================================
-- Bonus query:
-- Create a query that will join all tables and show all data from all tables.
-- =========================================================
SELECT * FROM employees
JOIN salaries ON employees.emp_no = salaries.emp_no
JOIN titles ON employees.emp_no = titles.emp_no
JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
JOIN dept_manager ON employees.emp_no = dept_manager.emp_no
JOIN departments ON dept_emp.dept_no = departments.dept_no