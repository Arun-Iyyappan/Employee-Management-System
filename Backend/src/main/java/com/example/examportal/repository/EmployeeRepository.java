package com.example.examportal.repository;

import com.example.examportal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee , Long> {
}
