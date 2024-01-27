package com.shechocolate.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.FeaturedDao;
import com.shechocolate.server.model.Featured;

@Service
public class FeaturedServiceImpl implements FeaturedService {

    @Autowired
    FeaturedDao featuredDao;

    @Override
    public List<Featured> getFeatured() {
        return featuredDao.findAll();
    }

    @Override
    public Featured quickViewFeatured(int id) {
        Featured featured = featuredDao.findById(id).get();
        return featured;
    }
    
}
