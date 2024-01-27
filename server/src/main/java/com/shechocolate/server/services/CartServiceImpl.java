package com.shechocolate.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.CartDao;
import com.shechocolate.server.dao.EmbroideriesDao;
import com.shechocolate.server.dao.FeaturedDao;
import com.shechocolate.server.dao.JacketDao;
import com.shechocolate.server.dao.JilbabDao;
import com.shechocolate.server.model.Cart;
import com.shechocolate.server.model.Embroideries;
import com.shechocolate.server.model.Featured;
import com.shechocolate.server.model.Jacket;
import com.shechocolate.server.model.Jilbab;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    CartDao cartDao;

    @Autowired
    FeaturedDao featuredDao;

    @Autowired
    EmbroideriesDao embroideriesDao;

    @Autowired
    JacketDao jacketDao;

    @Autowired
    JilbabDao jilbabDao;

    @Override
    public Cart getProduct(int id, int count) {
        Optional<Featured> featuredOptional = featuredDao.findById(id);

        if (featuredOptional.isPresent()) {
            // Step 2: Create a new Cart object and populate it with data from FeaturedDao
            Featured featured = featuredOptional.get();
            Cart cart = new Cart();
            cart.setUrl(featured.getUrl());
            cart.setText(featured.getText());
            cart.setAmount(featured.getAmount());
            cart.setProdId(featured.getProdId());
            cart.setQuantity(count);
            // Add other properties as needed

            // Step 3: Save the populated Cart object into CartDao
            cartDao.save(cart);

            // Step 4: Return the Cart object if needed
            return cart;
        } else {
            // Handle the case where the Featured data with the provided ID is not found
            return null;
        }
    }

    @Override
    public List<Cart> getAllProduct() {
        return cartDao.findAll();
    }

    @Override
    public Cart casualGetProduct(int id, int count) {
       Optional<Embroideries> embroideriesOptional = embroideriesDao.findById(id);

        if (embroideriesOptional.isPresent()) {
            // Step 2: Create a new Cart object and populate it with data from FeaturedDao
            Embroideries embroideries = embroideriesOptional.get();
            Cart cart = new Cart();
            cart.setUrl(embroideries.getUrl());
            cart.setText(embroideries.getText());
            cart.setAmount(embroideries.getAmount());
            cart.setProdId(embroideries.getProdId());
            cart.setQuantity(count);
            // Add other properties as needed

            // Step 3: Save the populated Cart object into CartDao
            cartDao.save(cart);

            // Step 4: Return the Cart object if needed
            return cart;
        } else {
            // Handle the case where the Featured data with the provided ID is not found
            return null;
        }
    }

    @Override
    public Cart jacketGetProduct(int id, int count) {
        Optional<Jacket> jacketOptional = jacketDao.findById(id);

        if (jacketOptional.isPresent()) {
            // Step 2: Create a new Cart object and populate it with data from FeaturedDao
            Jacket jacket = jacketOptional.get();
            Cart cart = new Cart();
            cart.setUrl(jacket.getUrl());
            cart.setText(jacket.getText());
            cart.setAmount(jacket.getAmount());
            cart.setProdId(jacket.getProdId());
            cart.setQuantity(count);
            // Add other properties as needed

            // Step 3: Save the populated Cart object into CartDao
            cartDao.save(cart);

            // Step 4: Return the Cart object if needed
            return cart;
        } else {
            // Handle the case where the Featured data with the provided ID is not found
            return null;
        }
    }

    @Override
    public Cart jilbabGetProduct(int id, int count) {
        Optional<Jilbab> jilbabOptional = jilbabDao.findById(id);

        if (jilbabOptional.isPresent()) {
            // Step 2: Create a new Cart object and populate it with data from FeaturedDao
            Jilbab jilbab = jilbabOptional.get();
            Cart cart = new Cart();
            cart.setUrl(jilbab.getUrl());
            cart.setText(jilbab.getText());
            cart.setAmount(jilbab.getAmount());
            cart.setProdId(jilbab.getProdId());
            cart.setQuantity(count);
            // Add other properties as needed

            // Step 3: Save the populated Cart object into CartDao
            cartDao.save(cart);

            // Step 4: Return the Cart object if needed
            return cart;
        } else {
            // Handle the case where the Featured data with the provided ID is not found
            return null;
        }
    }

    @Override
    public Cart deleteCartItem(int id) {
        Cart cart = cartDao.findById(id).get();
        cartDao.delete(cart);
        return cart;
    }

    @Override
    public Cart increaseQty(int id, int qty) {
        Cart cart = cartDao.findById(id).get();
        cart.setQuantity(qty);
        cartDao.save(cart);
        return cart;
    }

    @Override
    public Cart decreaseQty(int id, int qty) {
        Cart cart = cartDao.findById(id).get();
        cart.setQuantity(qty);
        cartDao.save(cart);
        return cart;
    }
}
