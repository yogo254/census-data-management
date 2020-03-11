package com.kioko.knbs.util.auth;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.sql.Date;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;

import com.auth0.jwt.interfaces.DecodedJWT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * JwtUtil
 */
@Service
public class JwtUtil {

    @Autowired
    private Algorithm algorithm;

    public String getToken(Login login) {

        String token = JWT.create().withClaim("email", login.getEmail()).withIssuedAt(Date.valueOf(LocalDate.now()))
                .withExpiresAt(
                        Date.from(LocalDateTime.now().plusMinutes(45).atZone(ZoneId.systemDefault()).toInstant()))
                .sign(algorithm);

        return token;

    }

    public Login getLogin(String token) {

        JWTVerifier verifier = JWT.require(algorithm).build();

        DecodedJWT decodedJWT = verifier.verify(token);
        Login login = new Login();
        login.setEmail(decodedJWT.getClaim("email").asString());

        return login;

    }

}