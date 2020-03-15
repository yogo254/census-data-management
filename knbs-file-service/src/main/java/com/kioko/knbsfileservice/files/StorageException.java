package com.kioko.knbsfileservice.files;

public class StorageException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 2591852008352411034L;

    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
