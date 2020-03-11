package com.kioko.knbs;

import com.auth0.jwt.algorithms.Algorithm;
import com.kioko.knbs.repos.auth.RolesRepo;
import com.kioko.knbs.models.auth.Permission;
import com.kioko.knbs.models.auth.Role;
import com.kioko.knbs.repos.auth.PermissionRepo;
import com.kioko.knbs.util.UtilityFunctions;
import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class KnbsApplication {
	@Autowired
	private RolesRepo rolesRepo;
	@Autowired
	private PermissionRepo permissionRepo;

	public static void main(String[] args) {
		SpringApplication.run(KnbsApplication.class, args);
	}

	@Bean
	public Algorithm getAlgoritm() {
		return Algorithm.HMAC512(UtilityFunctions.getRandomString());
	}

	@Bean
	public Logger log() {
		return LoggerFactory.getLogger(this.getClass());
	}

	@Bean
	public ApplicationRunner runner() {

		return args -> {
			rolesRepo.existsByName("admin").subscribe(b -> {
				if (!b) {
					permissionRepo.save(new Permission("***")).subscribe();

					permissionRepo.findByName("***").subscribe(p -> {
						rolesRepo.save(new Role("admin", Arrays.asList(p))).subscribe();
					});

				}

			});

		};

	}

}
