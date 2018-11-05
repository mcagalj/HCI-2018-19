# Styling your Gatsby application

<!-- markdownlint-disable MD033 -->

Gatsby podržava razne CSS opcije; za više detalja pogledajte _[Introduction to Using CSS in Gatsby](https://www.gatsbyjs.org/tutorial/part-two/)_. Ako nemate prethodnog iskustva s CSS-om, naš prijedlog je da koristite **[CSS Modules](https://www.javascriptstuff.com/css-modules-by-example/)**. Navažnije svojstvo CSS modula je to da sva imena CSS klasa imaju **lokalni opseg** (eng. _local scope_), osim ako eksplicitno ne kažemo drugačije. Kao što možda znate, regularne CSS klase imaju globalni opseg, što može uzrokovati dosta problema kako veličina vaše apliakcije raste.

U nastavku ćemo pokazati primjenu CSS modula na vašoj _Hello, World_ aplikaciji.

> <span style="color: orange">VAŽNO!</span>  
> Ove upute pretpostavljaju da ste uspješno postavili razvojno okruženje kako je to opisano u uputama [First Gatsby application](../first-gatsby-app/README.md).

## Styling your Hello, World application

> NAPOMENA:  
> Način organiziranja koda u nastavku, posebno React komponenti, specifičan je za profesore. Vi ste slobodni kod oranizirati kod na _svoj_ način.

### Kreiramo React komponentu _SiteContainer_

1. U _Visual Studio Code (VSC)_-u, otvorite prethodno kreiran direktorij `\hci-project`. Uđite u `\hci-project\src` i kreirajte direktorij `components`.

2. U direktoriju `\hci-project\src\components` kreirajte datoteku `index.js`. Za sada je ostavite praznu.

3. U `\hci-project\src\components` također kreirajte direktorij `SiteContainer`.

4. Unutar direktorija `\hci-project\src\components\SiteContainer` kreirajte datoteke `index.js`, i `styles.module.css` (`.module.` je obavezan).

   Trenutna struktura `\hci-project\src` direktorija:

   ```console
   \hci-project\src
   ├── components
   |  ├── SiteContainer
   |  |  ├── index.js
   |  |  └── styles.module.css
   |  └── index.js
   └── pages
      └── index.js
   ```

5. Editirajte datoteku `SiteContainer\styles.module.css` kako slijedi:

   ```css
   .Container {
     display: flex;
     flex-direction: column;
     min-height: 100vh;
     margin: 0 auto;
   }
   ```

6. Editirajte datoteku `SiteContainer\index.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import styles from "./styles.module.css";

    export default ({ children }) => (
        <div className={styles.Container}>
            {children}
        </div>
    );
   ```

7. Editirajte datoteku `components\index.js` kako slijedi:

   ```JavaScript
   export { default as SiteContainer } from "./SiteContainer";
   ```

8. Konačno, ažurirajte datoteku `pages\index.js`:

   ```JavaScript
    import React from "react";
    import { SiteContainer } from "../components";

    export default () => (
        <SiteContainer>
            <h1>My first Gatsby app</h1>
            <p>Hello, World!</p>
        </SiteContainer>
    );
   ```

### Kreiramo komponentu _Container_

```console
 \hci-project\src
 ├── components
 |  ├── Container
 |  |  ├── index.js
 |  |  └── styles.module.css
 |  ├── index.js
 |  └── SiteContainer
 |     ...
 └── pages
    └── index.js
```

1. Editirajte `Container\styles.module.css` kako slijedi:

   ```css
   .Container {
     margin: 0 auto;
     max-width: 1000px;
     width: 90%;
   }
   ```

   Primjetite da nam CSS Modules omogućava korištenje istog imena CSS klase bez opasnosti od kolizija (u našem slučaju CSS klasa `.Container` se pojavljuje u dvije različite `.css` datoteke).

2. Editirajte `Container\index.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import styles from "./styles.module.css";

    export default ({ children }) => (
        <div className={styles.Container}>
            {children}
        </div>
    );
   ```

3. Editirajte `components\index.js` kako slijedi:

   ```JavaScript
    export { default as SiteContainer } from "./SiteContainer";
    export { default as Container } from "./Container";
   ```

4. Konačno, ažurirajte datoteku `pages\index.js`:

   ```JavaScript
    import React from "react";
    import { SiteContainer, Container } from "../components";

    export default () => (
        <SiteContainer>
            <header>Here comes a logo and navigation links</header>
            <Container>
                <h1>My first Gatsby app</h1>
                <p>Hello, World!</p>
            </Container>
        </SiteContainer>
    );
   ```

### Kreiramo komponentu _Header_

```console
\hci-project\src
├── components
|  ├── Container
|  |  ...
|  |
|  ├── Header
|  |  ├── index.js
|  |  ├── Nav.js
|  |  ├── NavLink.js
|  |  └── styles.module.css
|  ├── index.js
|  └── SiteContainer
|     ...
|
├── pages
|  └── index.js
└── styles
   └── index.css
```

1. Editirajte `Header\index.js`:

   ```JavaScript
    import React from "react";
    import Container from "../Container";
    import Nav from "./Nav";
    import NavLink from "./NavLink";
    import styles from "./styles.module.css";

    export default () => (
        <header className={styles.Header}>
            <Container className={styles.Container}>
                <span className={styles.Logo}>Gatsby</span>
                <Nav>
                    <NavLink to="/" exact="true">Home</NavLink>
                    <NavLink to="/second-page/">Second page</NavLink>
                    <NavLink to="/about/">About</NavLink>
                </Nav>
            </Container>
        </header>
    );
   ```

2. Ažurirajte `Container\index.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import cn from "classnames";
    import styles from "./styles.module.css";

    export default ({ className, children }) => (
        <div className={cn(className, styles.Container)}>
            {children}
        </div>
    );
   ```

   > VAŽNO:  
   > Primjetite da koristimo _package_ `classnames`. Prethodno ga je potrebno instalirati. U terminalu izvršite `npm i classnames`.

3. Editirajte `Header\Nav.js`:

   ```JavaScript
    import React from "react";
    import styles from "./styles.module.css";

    export default ({ children }) => <nav className={styles.Nav}>{children}</nav>;
   ```

4. Editirajte `Header\NavLink.js`:

   ```JavaScript
    import React from "react";
    import { Link } from "gatsby";
    import styles from "./styles.module.css";

    export default ({ children, ...rest }) => (
        <Link
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
            {...rest}
        >
            {children}
        </Link>
    );
   ```

5. Editirajte `Header\styles.module.css` kako slijedi:

   ```css
   .Header {
     top: 0;
     left: 0;
     right: 0;
     z-index: 10;
     background: #fff;
     border-bottom: 1px solid var(--color-grey, #000);
     margin-bottom: 40px;
   }

   .Container {
     display: flex;
     justify-content: space-between;
     align-items: center;
     flex: 1;
   }

   .Logo {
     color: var(--color-gold, orange);
     font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
   }

   .Nav {
     display: flex;
     flex-direction: row;
     align-items: stretch;
     overflow-x: auto;
     overflow-y: hidden;
   }

   .NavLink {
     display: inline-block;
     padding: 5px 10px;
     margin-left: 10px;
     text-transform: uppercase;
     cursor: pointer;
     white-space: nowrap;
     font-size: 14px;
     font-weight: normal;
     color: var(--color-primary, #000000);
     border-top: 3px solid transparent;
     border-bottom: 3px solid transparent;
     transition: all 0.25s linear;
   }

   .NavLink:first-child {
     margin-left: 10px;
   }

   .NavLink__active,
   .NavLink:hover {
     color: var(--color-gold, orange);
     border-bottom: 3px solid var(--color-gold, orange);
   }
   ```

6. U direktoriju `\hci-project\src` kreirajte direktorij `styles` i u njemu datoteku `index.css`. U ovoj `.css` datoteci definirati ćemo globalne css varijable i stilove.

   ```console
   \hci-project\src
   ├── components
   |  ├── Container
   |  ├── Header
   |  └── SiteContainer
   ├── pages
   └── styles
      └── index.css
   ```

7. Editirajte datoteku `\hci-project\src\styles\index.css`:

   ```css
   :root {
     --color-primary: #494949;
     --color-grey: #eeeeee;
     --color-gold: #e67700;
   }

   html {
     box-sizing: border-box;
     font-family: "Spectral", -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
       "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
       sans-serif;
     font-weight: 400;
     font-style: normal;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     font-size: 17px;
     line-height: 1.7;
   }

   body {
     overflow-x: hidden;
     position: relative;
   }

   * {
     margin: 0;
     padding: 0;
   }

   *,
   *::before,
   *::after {
     box-sizing: inherit;
   }

   a {
     color: inherit;
     text-decoration: none;
     outline: 0;
   }
   ```

8. Konačno, ažurirajte datoteku `pages\index.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import { SiteContainer, Container, Header } from "../components";
    // eslint-disable-next-line
    import _ from "../styles/index.css";

    export default () => (
        <SiteContainer>
            <Header />
            <Container>
                <h1>My first Gatsby app</h1>
                <p>Hello, World!</p>
            </Container>
        </SiteContainer>
    );
   ```

## Adding missing pages

Prethodno smo kreirali navigacijsku traku s linkovima na nepostojeće stranice `second-page` i `about`. U nastavku ćemo dodati ove stranice. Također želimo da sve stranice (`home`, `second-page` i `about`) dijele isti _header_ i navigacijsku traku. Stoga ćemo djelomično refaktorirati prethodni kod.

### Kreiramo komponentu _Layout_

```console
hci-project\src
├── components
| ├── Container
| ...
| ├── Header
| ...
| ├── index.js
| ├── Layout
| |  └── index.js
| └── SiteContainer
| ...
├── pages
|  └── index.js
└── styles
   └── index.css
```

1. U `\hci-project\src\components` kreirajte direktorij `Layout` i u direktoriju datoteku `index.js`.

2. Editirajte `Layout\index.js`:

   ```JavaScript
    import React from "react";
    import SiteContainer from "../SiteContainer";
    import Container from "../Container";
    import Header from "../Header";
    // eslint-disable-next-line
    import _ from "../../styles/index.css";

    export default ({ children }) => (
        <SiteContainer>
            <Header />
            <Container>{children}</Container>
        </SiteContainer>
    );
   ```

3. Ažurirajte datoteku `components\index.js` kako slijedi:

   ```JavaScript
    export { default as SiteContainer } from "./SiteContainer";
    export { default as Container } from "./Container";
    export { default as Header } from "./Header";
    export { default as Layout } from "./Layout";
   ```

4. Ažurirajte datoteku `pages\index.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import { Layout } from "../components";

    export default () => (
        <Layout>
            <h1>My first Gatsby app</h1>
            <p>Hello, World!</p>
        </Layout>
    );
   ```

### Kreiramo stranice _Second page_ i _About_

1. U direktoriju `\hci-project\src\pages` kreirajte datoteke `second-page.js` i `about.js`.

   ```console
   hci-project\src
   ├── components
   ...
   ├── pages
   |  ├── about.js
   |  ├── index.js
   |  └── second-page.js
   └── styles
   └── index.css
   ```

2. Editirajte `pages\second-page.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import { Layout } from "../components";

    export default () => (
        <Layout>
            <h1>Second page</h1>
        </Layout>
    );
   ```

3. Editirajte `pages\about.js` kako slijedi:

   ```JavaScript
    import React from "react";
    import { Layout } from "../components";

    export default () => (
        <Layout>
            <h1>About</h1>
        </Layout>
    );
   ```

Enjoy styled Gatsby application!
