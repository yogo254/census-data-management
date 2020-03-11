package com.kioko.knbs.controler.exception;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.kioko.knbs.excetions.UserExistsException;
import com.kioko.knbs.services.auth.InvalidCredencialException;
import com.kioko.knbs.util.GenericMessage;

import org.slf4j.Logger;

/**
 * ExceptionControler
 */
@RestControllerAdvice
public class ExceptionControler {

    @Autowired
    private Logger logger;

    @ExceptionHandler(UserExistsException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public GenericMessage handeException(UserExistsException e) {
        logger.debug("{} was thrown", e.getClass(), e);

        return new GenericMessage(403, e.getMessage());
    }

    @ExceptionHandler(InvalidCredencialException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public GenericMessage handeException(InvalidCredencialException e) {
        logger.debug("{} was thrown", e.getClass(), e);

        return new GenericMessage(403, e.getMessage());
    }

    @ExceptionHandler(InvalidRequestException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public GenericMessage handeException(InvalidRequestException e) {
        logger.debug("{} was thrown", e.getClass(), e);

        return new GenericMessage(403, e.getMessage());
    }

}