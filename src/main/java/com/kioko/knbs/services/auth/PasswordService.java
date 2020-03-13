package com.kioko.knbs.services.auth;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Random;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

/**
 * PasswordService
 */

public class PasswordService {

    private static final Random RANDOM = new SecureRandom();
    private static final String ALPHABET = "0123456789ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    private static final int ITERATIONS = 10000;
    private static final int KEY_LENGHT = 256;

    public static String getSalt(int lenght) {
        StringBuilder sBuilder = new StringBuilder(lenght);
        for (int i = 0; i < lenght; ++i)
            sBuilder.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length())));

        return new String(sBuilder);

    }

    public static byte[] hash(char[] password, byte[] salt) {
        PBEKeySpec spec = new PBEKeySpec(password, salt, ITERATIONS, KEY_LENGHT);
        Arrays.fill(password, Character.MIN_VALUE);
        try {
            SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            return skf.generateSecret(spec).getEncoded();

        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            throw new AssertionError("Error while hashing a password: " + e.getMessage(), e);
        } finally {
            spec.clearPassword();
        }
    }

    public static String generateSecurePassword(String password, String salt) {
        String retunValue = null;
        byte[] securePassword = hash(password.toCharArray(), salt.getBytes());
        retunValue = Base64.getEncoder().encodeToString(securePassword);
        return retunValue;
    }

    public static boolean verifyUserPassword(String providedPassword, String securePassword, String salt) {

        String newSecurePassword = generateSecurePassword(providedPassword, salt);

        return newSecurePassword.equalsIgnoreCase(securePassword);

    }

}