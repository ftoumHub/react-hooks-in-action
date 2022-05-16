package fr.maif.iard.sinistresdeclarationpaefrontend.infrastructure;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("app")
public class FrontendConfiguration {

    private String name;
    private String version;
    private String env;
    private String title;
    private String darwinId;

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

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDarwinId() {
        return darwinId;
    }

    public void setDarwinId(String darwinId) {
        this.darwinId = darwinId;
    }
}
