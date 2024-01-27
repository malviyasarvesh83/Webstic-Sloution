package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {
    
}