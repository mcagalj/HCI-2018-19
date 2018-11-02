# Creating a blog in Gatsby <!-- omit in toc -->

<!-- markdownlint-disable MD007 -->

- [Overview](#overview)
- [Struktura projekta](#struktura-projekta)
- [Želim samo pokrenuti demo](#Želim-samo-pokrenuti-demo)

## Overview

<!-- markdownlint-disable MD033 -->
<p align="center">
    <img src="../../img/gatsby_blog_final.gif" width="auto" height="auto"/>
    <br><br>
    <em>A simple blog in Gatsby - final result</em>
</p>

Kod za prikazanu web stranicu možete naći u direktoriju [hello-blog](hello-blog). Na labovima ćemo prokomentirati važne aspekte ovog koda. Ovo uključuje:

- Što je uloga `gatsby-config.js` i `gatsby-node.js` skripti
- Kako instalirati i koristiti Gatsby _plugin_-ove (npr. za čitanje i parsiranje postova, za optimiranje slika, automatsko generiranje _responsive_ verzija slika)
- Kako kreirati _template_ stranice za postove
- Kako automatizirati generiranje odgovarajućih podstranice (npr. `/blog/post-one`, `/blog/post-two`)
- Kako raditi s GraphQL-om, odnosno razumjeti (donekle :-) sljedeći kod:

  ```JavaScript
  export const query = graphql`
    query BlogPostQuery($slug: String!) {
            markdownRemark(frontmatter: { slug: { eq: $slug } }) {
                html
                frontmatter {
                    date
                    slug
                    title
                }
            }
    }
  `;
  ```

> <span style="color: orange">**U SLUČAJU PANIKE:**</span>  
> Na prvi pogled sve ovo navedeno može izgledati _zastrašujuće_. U osnovi, panici nema mjesta. Gatsby uvelike olakšava implementaciju bloga, a tu su i profesori koji će vas voditi kroz cijeli postupak.

## Struktura projekta

U nastavku samo kratko komentiramo strukturu direktorija u kojem su pohranjeni _blog postovi_. Struktura `\hci-project` direktorija:

```console
\hci-project
├── content
├── gatsby-config.js
├── gatsby-node.js
├── package-lock.json
├── package.json
├── public
├── src
└── static
```

U direktoriju `\hci-project\content` spremljen je sadržaj _blog post_-ova: tekst u _Markdown_ formatu (`index.md`) i odgovarajuće slike. Sadržaj `\hci-project\content` direktorija:

```console
\hci-project\content
└── posts
   ├── 01-11-2018--post-3
   ├── 02-11-2018--post-4
   ├── 03-11-2018--post-5
   ├── 30-10-2018--hello-world
   └── 31-10-2018--post-2
```

Postovi su organiziranu u direktorije odgovarajućeg naziva. Sadržaj direktorija jednog posta (`\hci-project\content\posts\01-11-2018--post-3`):

```console
...\01-11-2018--post-3
├── images
|  ├── geran-de-klerk-136351-unsplash.jpg
|  └── nathan-anderson-443540-unsplash.jpg
└── index.md
```

Direktorije možete imenovati proizvoljno. Sadržaj bloga pišemo u _Markdown_ jeziku. Sintaksa ovog jezika vrlo je jednostavna a koristi se npr. za formatiranje teksta na GitHub-u.

```markdown
---
date: "2018-11-01"
title: "Post 3"
slug: post-three
---

<!-- markdownlint-disable MD033 -->

# [Lorem Ipsum](https://www.lipsum.com/)

<figure class="figure">
    <img src="./images/geran-de-klerk-136351-unsplash.jpg" alt="Title"/>
    <figcaption class="figure__caption">Title</figcaption>
</figure>

## What is Lorem Ipsum

Lorem Ipsum is simply dummy text ...
```

## Želim samo pokrenuti demo

1. Klonirajte cijeli HCI-2018-19 repozitorij na lokalno računalo.

   ```console
   > git clone https://github.com/mcagalj/HCI-2018-19
   ```

2. Uđite u direktorij `HCI-2018-19/bits-of-gatsby/creating-blog/hello-blog`.

3. Instalirajte potrebne module:

   ```console
   > npm install
   ```

4. Konačno, u istom direktoriju, pokrenite _development_ server:

   ```console
   > npm start
   ```

   Alternativno:

   ```console
   > gatsby develop
   ```

Voilà!
