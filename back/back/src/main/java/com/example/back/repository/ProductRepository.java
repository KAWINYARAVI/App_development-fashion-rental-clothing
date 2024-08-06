package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.back.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}