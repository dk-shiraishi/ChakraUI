import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    globalCss: {
        "body": {
            bg: "gray.100",
            color: "gray.800"
        }
    }
});

const theme = createSystem(defaultConfig, config);

export default theme;