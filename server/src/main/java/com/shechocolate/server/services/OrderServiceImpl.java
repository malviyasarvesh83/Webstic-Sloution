package com.shechocolate.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.OrderDao;
import com.shechocolate.server.model.Order;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    public Order addOrder(Order order) {
        orderDao.save(order);
        return order;
    }
    
}
