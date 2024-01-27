package com.shechocolate.server.services;

import java.util.List;

import com.shechocolate.server.model.Featured;

public interface FeaturedService {
    
    public List<Featured> getFeatured();

    public Featured quickViewFeatured(int id);
}
