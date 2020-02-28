package com.kioko.knbs.util;

/**
 * GenericMessage
 */
public class GenericMessage {
    private int code;
    private String message;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public GenericMessage() {
    }

    public GenericMessage(int code, String message) {
        this.code = code;
        this.message = message;
    }

}