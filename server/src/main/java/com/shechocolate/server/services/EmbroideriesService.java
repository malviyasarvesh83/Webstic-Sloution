package com.shechocolate.server.services;

import java.util.List;

import com.shechocolate.server.model.Embroideries;

public interface EmbroideriesService {
    
    public List<Embroideries> getEmbroideries();

    public Embroideries getQuickView(int id);
}
