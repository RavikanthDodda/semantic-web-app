package com.team3.smarttour;

import org.apache.http.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

@Autowired
FusekiService fusekiService;

    @GetMapping("/artworks/{room}")
    public void getArtworks(@PathVariable String room){
            //handle request
        System.out.println(room);
         fusekiService.getArtworkDetails(room);

    }

    @GetMapping("/artworks/recommended/{artworkId}")
    public void getRecommendedArtworks(@PathVariable String artworkId){
        //handle request


    }

}
