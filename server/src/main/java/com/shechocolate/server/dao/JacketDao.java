package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Jacket;

public interface JacketDao extends JpaRepository<Jacket, Integer> {
    
}