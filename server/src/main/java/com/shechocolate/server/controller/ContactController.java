package com.shechocolate.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shechocolate.server.model.Contact;
import com.shechocolate.server.services.ContactService;

@RestController
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;
    
    @PostMapping("/contact")
    public Contact addContact(@RequestBody Contact contact) {

        return this.contactService.addContact(contact);
    }
}
