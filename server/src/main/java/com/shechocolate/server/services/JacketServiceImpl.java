package com.shechocolate.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.JacketDao;
import com.shechocolate.server.model.Jacket;

@Service
public class JacketServiceImpl implements JacketService {

    @Autowired
    JacketDao jacketDao;

    @Override
    public List<Jacket> getJackets() {
        return jacketDao.findAll();
    }

    @Override
    public Jacket jacketQuickView(int id) {
        Jacket jacket = jacketDao.findById(id).get();
        return jacket;
    }
    
}
