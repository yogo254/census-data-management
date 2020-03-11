package com.kioko.knbs.util;

import java.util.Random;

/**
 * UtilityFunctions
 */
public class UtilityFunctions {
    public static String getRandomString() {
        String randomString = "";
        final String alphabet = "0123456789ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        final int N = alphabet.length();

        Random r = new Random();

        for (int i = 0; i < 50; i++) {
            randomString += String.valueOf(alphabet.charAt(r.nextInt(N)));
        }

        return randomString;
    }

}