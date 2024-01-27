package com.shechocolate.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Jacket;
import com.shechocolate.server.services.JacketService;

@RestController
@CrossOrigin
public class JacketController {

    @Autowired
    JacketService jacketService;
    
    @GetMapping("/jacket")
    public List<Jacket> getJackets() {
        return this.jacketService.getJackets();
    }

    @GetMapping("/jacket/quickView/{id}")
    public Jacket jacketQuickView(@PathVariable String id) {
        return this.jacketService.jacketQuickView(Integer.parseInt(id));
    }
}