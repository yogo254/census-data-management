package com.kioko.knbs.services.auth;

public class InvalidCredencialException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public InvalidCredencialException(String message) {
        super(message);
    }

}
