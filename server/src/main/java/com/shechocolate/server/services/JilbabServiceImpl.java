package com.shechocolate.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.JilbabDao;
import com.shechocolate.server.model.Jilbab;

@Service
public class JilbabServiceImpl implements JilbabService {

    @Autowired
    JilbabDao jilbabDao;

    @Override
    public List<Jilbab> getJilbabs() {
        return jilbabDao.findAll();
    }

    @Override
    public Jilbab jilbabQuickView(int id) {
        Jilbab jilbab = jilbabDao.findById(id).get();
        return jilbab;
    }
    
}
