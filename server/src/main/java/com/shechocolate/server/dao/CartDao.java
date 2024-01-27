package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {
    
}