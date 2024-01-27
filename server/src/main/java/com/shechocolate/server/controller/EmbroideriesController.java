package com.shechocolate.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Embroideries;
import com.shechocolate.server.services.EmbroideriesService;

@RestController
@CrossOrigin
public class EmbroideriesController {

    @Autowired
    EmbroideriesService embroideriesService;
    
    @GetMapping("/embroideries")
    public List<Embroideries> getEmbroideries() {
        return this.embroideriesService.getEmbroideries();
    }

    @GetMapping("/embroideries/quickView/{id}")
    public Embroideries getQuickView(@PathVariable String id) {
        return this.embroideriesService.getQuickView(Integer.parseInt(id));
    }
}
