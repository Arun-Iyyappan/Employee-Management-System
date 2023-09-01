package com.example.examportal.controller;

import com.example.examportal.Exception.ResourceNotFoundException;
import com.example.examportal.entity.Employee;
import com.example.examportal.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
       Employee employee = employeeRepository.findById(id).orElseThrow( () ->
           new ResourceNotFoundException("Employee not exist with id :" + id));

           return ResponseEntity.ok(employee);
       }

       // update employee api
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id , @RequestBody Employee empDet){
        Employee emp = employeeRepository.findById(id).orElseThrow( () ->
                new ResourceNotFoundException("Employee not exist with id :" + id));

        emp.setFirstname(empDet.getFirstname());
        emp.setLastname(empDet.getLastname());
        emp.setEmailId(empDet.getEmailId());

        Employee updatedEmployee = employeeRepository.save(emp);
        return ResponseEntity.ok(updatedEmployee);
    }

    // delete employee rest api
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String , Boolean>> deleteEmployee(@PathVariable Long id){
        Employee emp = employeeRepository.findById(id).orElseThrow( () ->
                new ResourceNotFoundException("Employee not exist with id :" + id));

        employeeRepository.delete(emp);
        Map<String , Boolean> response = new HashMap<>();
        response.put("Deleted" , Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
