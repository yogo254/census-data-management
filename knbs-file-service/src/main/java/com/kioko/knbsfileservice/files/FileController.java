package com.kioko.knbsfileservice.files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/files")
public class FileController {

        @Autowired
        private FileSystemStorageService storageService;

        @GetMapping
        @CrossOrigin
        public List<String> listAllFiles() {

                List<String> files = storageService.loadAll()
                                .map(path -> ServletUriComponentsBuilder.fromCurrentContextPath().path("/download/")
                                                .path(path.getFileName().toString()).toUriString())
                                .collect(Collectors.toList());

                return files;
        }

        @GetMapping("/download/{filename:.+}")
        @CrossOrigin
        public ResponseEntity<Resource> downloadFile(@PathVariable String filename, HttpServletRequest request) {

                Resource resource = storageService.loadAsResource(filename);
                String contentType = null;
                try {
                        contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
                } catch (Exception ex) {
                        ex.printStackTrace();
                }
                if (contentType == null) {
                        contentType = "application/octet-stream";
                }

                return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
                                .header(HttpHeaders.CONTENT_DISPOSITION,
                                                "attachment; filename=\"" + resource.getFilename() + "\"")
                                .body(resource);
        }

        @PostMapping("/upload/{username}")
        @CrossOrigin
        public FileResponse uploadFile(@PathVariable("username") String username,
                        @RequestParam("file") MultipartFile file) {

                storageService.setUsername(username);
                String name = storageService.store(file);

                String uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("api/files/download/").path(name)
                                .toUriString();

                return new FileResponse(name, uri, file.getContentType(), file.getSize());
        }

}