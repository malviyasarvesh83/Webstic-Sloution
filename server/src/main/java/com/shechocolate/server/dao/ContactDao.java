package com.shechocolate.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shechocolate.server.model.Contact;

public interface ContactDao extends JpaRepository<Contact, Integer> {
    
}