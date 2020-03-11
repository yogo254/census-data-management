package com.kioko.knbs.excetions;

/**
 * UserExistsException
 */
public class UserExistsException extends RuntimeException {

    public UserExistsException(String message) {
        super(message);
    }

}