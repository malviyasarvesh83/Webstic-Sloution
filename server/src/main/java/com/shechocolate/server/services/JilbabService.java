package com.shechocolate.server.services;

import java.util.List;

import com.shechocolate.server.model.Jilbab;

public interface JilbabService {
    
    public List<Jilbab> getJilbabs();

    public Jilbab jilbabQuickView(int id);
}