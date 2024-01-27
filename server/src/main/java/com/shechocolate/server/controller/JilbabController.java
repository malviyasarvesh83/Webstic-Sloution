package com.shechocolate.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Jilbab;
import com.shechocolate.server.services.JilbabService;

@RestController
@CrossOrigin
public class JilbabController {

    @Autowired
    JilbabService jilbabService;
    
    @GetMapping("/jilbab")
    public List<Jilbab> getJilbabs() {
        return this.jilbabService.getJilbabs();
    }

    @GetMapping("/jilbab/quickView/{id}")
    public Jilbab jilbabQuickView(@PathVariable String id) {
        return this.jilbabService.jilbabQuickView(Integer.parseInt(id));
    }
}