import Document, {Head, Html, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
                        integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
                        crossOrigin=""
                    />

                    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
                        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
                        crossOrigin="" async>
                    </script>

                    <link href="//db.onlinewebfonts.com/c/066ce24dae3730ed6c648b09efaea93a?family=Acumin+Variable+Concept" rel="stylesheet" type="text/css"/>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}