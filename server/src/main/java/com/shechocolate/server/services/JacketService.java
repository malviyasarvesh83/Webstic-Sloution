package com.shechocolate.server.services;

import java.util.List;

import com.shechocolate.server.model.Jacket;

public interface JacketService {
    
    public List<Jacket> getJackets();

    public Jacket jacketQuickView(int id);
}