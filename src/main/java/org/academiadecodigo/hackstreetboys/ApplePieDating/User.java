package org.academiadecodigo.hackstreetboys.ApplePieDating;

import java.util.LinkedList;

public class User {
    private String name;
    private String email;
    private LinkedList<Integer> preferences;
    private LinkedList<String> matches;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LinkedList<Integer> getPreferences() {
        return preferences;
    }

    public void setPreferences(LinkedList<Integer> preferences) {
        this.preferences = preferences;
    }

    public LinkedList<String> getMatches() {
        return matches;
    }

    public void setMatches(LinkedList<String> matches) {
        this.matches = matches;
    }
}
