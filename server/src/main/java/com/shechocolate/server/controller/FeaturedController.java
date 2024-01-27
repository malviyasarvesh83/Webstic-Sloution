package com.shechocolate.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Featured;
import com.shechocolate.server.services.FeaturedService;

@RestController
@CrossOrigin
public class FeaturedController {

    @Autowired
    FeaturedService featuredService;
    
    @GetMapping("/featuredCollection")
    public List<Featured> getFeatured() {
        return this.featuredService.getFeatured();
    }

    @GetMapping("/quickView/{id}")
    public Featured quickViewFeatured(@PathVariable String id) {
        return this.featuredService.quickViewFeatured(Integer.parseInt(id));
    }
}
