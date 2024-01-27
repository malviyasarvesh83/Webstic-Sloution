package com.shechocolate.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.EmbroideriesDao;
import com.shechocolate.server.model.Embroideries;

@Service
public class EmbroideriesServiceImpl implements EmbroideriesService {

    @Autowired
    EmbroideriesDao embroideriesDao;

    @Override
    public List<Embroideries> getEmbroideries() {
        return embroideriesDao.findAll();
    }

    @Override
    public Embroideries getQuickView(int id) {
        Embroideries embroideries = embroideriesDao.findById(id).get();
        return embroideries;
    }
    
}
