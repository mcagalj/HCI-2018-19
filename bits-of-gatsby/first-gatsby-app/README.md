# First Gatsby application

<!-- markdownlint-disable MD033 -->

> NAPOMENA:  
> Detaljne informacije i brojne _tutorial_-e možete naći na [Gatsby tutorials](https://www.gatsbyjs.org/tutorial/part-zero/).

1. Provjerite u terminalu imate li instaliran [Node.js](https://nodejs.org/en/) i _package manager_ `npm`.

   ```shell
   >node --version
   v8.12.0

   >npm --version
   6.4.1
   ```

   > NAPOMENA:  
   > Ako instalirate Node.js prvi put, koristite LTS (_Long Term Support_) verziju (ne _Current_).

2. Po potrebi instalirajte [Git](https://git-scm.com/downloads).

3. Instalirajte `gatsby-cli` (_Gatsby command-line interface_) kako slijedi (_flag_ `-g` označava globalnu instalaciju).

   ```shell
   >npm install -g gatsby-cli

   # A quick check
   >gatsby --version
   2.4.4
   ```

   > <span style="color: orange">VAŽNO!</span>  
   > U slučaju grešaka prilikom pokretanja gatsby dev servera (`gatsby develop`), moguće je da niste instalirali adekvatnu/zadnju verziju GatsbyJS-a.

4. **Hello, World!**

   Kreirajte vlastiti direktorij, npr. `C:>Users\A507\HCI\mcagalj` ako radite na laboratorijskim računalima. Otvorite terminal, uđite u vaš direktorij i izvršite sljedeću naredbu:

   ```shell
    >gatsby new hci-project https://github.com/gatsbyjs/gatsby-starter-hello-world

    # Enter hci-project
    >cd hci-project

    # Finally, start the gatsby dev server
    >gatsby develop

    # Alternatively, you can use npm
    >npm start

    # You can now view gatsby-starter-hello-world in the browser:
    # http://localhost:8000/
   ```
