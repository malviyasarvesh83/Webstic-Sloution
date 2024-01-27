package com.shechocolate.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Cart;
import com.shechocolate.server.services.CartService;

@RestController
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;
    
    @GetMapping("/addToCart/{id}")
    public Cart getProduct(@PathVariable String id, @RequestParam(required = false) Integer count) {
        return this.cartService.getProduct(Integer.parseInt(id), count);
    }

    @GetMapping("/casualAddToCart/{id}")
    public Cart casualGetProduct(@PathVariable String id, @RequestParam(required = false) Integer count) {
        return this.cartService.casualGetProduct(Integer.parseInt(id), count);
    }

    @GetMapping("/jacketAddToCart/{id}")
    public Cart jacketGetProduct(@PathVariable String id, @RequestParam(required = false) Integer count) {
        return this.cartService.jacketGetProduct(Integer.parseInt(id), count);
    }

    @GetMapping("/jilbabAddToCart/{id}")
    public Cart jilbabGetProduct(@PathVariable String id, @RequestParam(required = false) Integer count) {
        return this.cartService.jilbabGetProduct(Integer.parseInt(id), count);
    }

    @GetMapping("/getAllProducts")
    public List<Cart> getAllProducts() {
        return this.cartService.getAllProduct();
    }

    @DeleteMapping("/removeCartItem/{id}")
    public Cart deleteCartItem(@PathVariable String id) {
        return this.cartService.deleteCartItem(Integer.parseInt(id));
    }

    @GetMapping("/increaseQty/{id}")
    public Cart increaseQty(@PathVariable String id, @RequestParam(required = false) Integer qty) {
        return this.cartService.increaseQty(Integer.parseInt(id), qty);
    }

    @GetMapping("/decreaseQty/{id}")
    public Cart decreaseQty(@PathVariable String id, @RequestParam(required = false) Integer qty) {
        return this.cartService.decreaseQty(Integer.parseInt(id), qty);
    }
}
