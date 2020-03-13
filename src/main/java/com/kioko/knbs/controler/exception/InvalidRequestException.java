package com.kioko.knbs.controler.exception;

/**
 * InvalidRequestException
 */
public class InvalidRequestException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public InvalidRequestException(String message) {
        super(message);
    }

}