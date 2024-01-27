package com.shechocolate.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shechocolate.server.dao.ContactDao;
import com.shechocolate.server.model.Contact;

@Service
public class ContactServiceImpl implements ContactService {
    
    @Autowired
    private ContactDao contactDao;

    @Override
    public Contact addContact(Contact contact) {
        contactDao.save(contact);
        return contact;
    }
}
