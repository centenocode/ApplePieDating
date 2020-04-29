package org.academiadecodigo.hackstreetboys.ApplePieDating.controller;

@RestController
@RequestMapping("/api")
public class RestIndexController {

    /**
     * Retrieves the API name and version
     *
     * @return the response
     */
    @RequestMapping(method = RequestMethod.GET, path = {"/", ""})
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
