package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Embroideries;

public interface EmbroideriesDao extends JpaRepository<Embroideries, Integer> {
    
}