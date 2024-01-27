package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Jilbab;

public interface JilbabDao extends JpaRepository<Jilbab, Integer> {
    
}