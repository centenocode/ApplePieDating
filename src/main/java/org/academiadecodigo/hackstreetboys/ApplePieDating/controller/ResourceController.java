package org.academiadecodigo.hackstreetboys.ApplePieDating.controller;

import org.academiadecodigo.hackstreetboys.ApplePieDating.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
    @RequestMapping("/api")
public class ResourceController {

    /**
     * Retrieves the API name and version
     *
     * @return the response
     */
    @RequestMapping(method = RequestMethod.GET, path = {"/api", ""})
    @ResponseBody
    protected ApiVersion showVersion() {

        ApiVersion version = new ApiVersion();
        version.setName("ApplePieDating API");
        version.setVersion("v0.1");

        return version;



    }

    private static class ApiVersion {

        private String name;
        private String version;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getVersion() {
            return version;
        }

        public void setVersion(String version) {
            this.version = version;
        }
    }
}
