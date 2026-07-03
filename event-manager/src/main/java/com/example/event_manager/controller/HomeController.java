package com.example.event_manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/schedule")
    public String schedule() {
        return "schedule";
    }

    @GetMapping("/speakers")
    public String speakers() {
        return "speakers";
    }

    @GetMapping("/registration")
    public String registration() {
        return "registration";
    }

}