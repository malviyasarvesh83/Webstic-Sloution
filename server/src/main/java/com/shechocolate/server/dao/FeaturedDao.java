package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Featured;

public interface FeaturedDao extends JpaRepository<Featured, Integer> {
    
}