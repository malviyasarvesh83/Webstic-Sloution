package com.shechocolate.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Order;
import com.shechocolate.server.services.OrderService;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;
    
    @PostMapping("/payment/checkout")
    public Order addOrder(@RequestBody Order order) {

        return this.orderService.addOrder(order);
    }
}
