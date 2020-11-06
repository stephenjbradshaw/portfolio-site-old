---
path: gatsby-first-impressions
date: 2020-10-20T14:27:24.317Z
title: First Impressions of Gatsby
description: Some thoughts about my experience using Gatsby for the first time
featuredImage: ../assets/gatsby-starter.png
featuredImageAlt: Screenshot of a Gatsby Starter site
---
A few weeks ago, having just finished the [Northcoders](www.northcoders.com) coding bootcamp, I was looking to make a portfolio site – a place to introduce myself and to host a blog. I'd seen a few similar portfolio sites made with a JavaScript framework called Gatsby, which I hadn't hadn't come across before. The [documentation](https://www.gatsbyjs.com/) heavily emphasised speed of development and developer experience, and as I was looking to get up and running quickly, I decided to jump in and give it a go! In this post I share some of my experiences of getting started with Gatsby and some of the challenges I faced.

## What is Gatsby?

Gatsby is a static site generator. What this means is that ahead of the site being delivered, it is built into static HTML, JavaScript and CSS files. These can then be served up to the client from a hosting provider (e.g. [Netlify](www.netlify.com)). There are a few [advantages to this approach](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/):
 - **Speed**: because the HTML is generated ahead of time, there is no server-side rendering or server-client communication, both of which are time-expensive. Plus, if the site is hosted on a Content Deliver Network (CDN) like Netlify, visitors will be more likely to be geographically close to the server – meaning faster load times.
- **Security:** the fact that there is no server means that there is less potential for security vulnerabilities
- **SEO:** static sites tend to be ranked more highly by search engines. This is because they are easy to index (the content is all there in the HTML files and can be easily parsed), and they load quickly, which is a big advantage from the perspective of a search engine.
 
Another important thing to note about Gatsby is that the static HTML files it creates are ['hydrated'](https://www.gatsbyjs.com/docs/react-hydration/) by React on the client side. This means that Gatsby sites are fully-fledged React apps, allowing the possibility of complex interactive UIs. There are some significant differences to working in a purely react environment, however, which I'll touch on below.

## Impressions

For the most part, getting started with Gatsby was relatively straightforward coming from React, which I'd focussed on during the bootcamp. I worked through the [tutorial](https://www.gatsbyjs.com/tutorial/) in the docs, and I can really recommend doing this. It introduces key Gatsby concepts, for example:
- How the framework works with GraphQL to pull data into your React components from various sources
- Transforming your data using plugins
- Programatically creating pages (e.g. for blog posts)

One thing I liked straight away was that Gatsby manages page routing for you out of the box. All components in the `pages` directory are turned into routes based on their filenames, making navigation very quick to set up. What's more, Gatsby uses [Reach Router](https://reach.tech/router/) under the hood, which provides accessible navigation by default.

Another thing I've found really useful and intuitive is the `gatsby-image` [plugin](https://www.gatsbyjs.com/plugins/gatsby-image/). It automates lazy loading of images (e.g. a blurred-out placeholder while the image is loading) and provides lots of other out-of-the-box image optimisation features. The plugin exposes all of your image assets on your site's GraphQL schema, meaning you can configure how the image loads and appears simply by editing that page's GraphQL query. For example, this query looks up the file `my-image.png` and uses the `...GatsbyImageSharpFluid` fragment to indicate that we want an image that can change size according to the width of the container.

```javascript
export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "my-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
```

We then have access to the image in the data injected into the component by Gatsby, and it can be rendered using the provided `Img` component.

```javascript
import React from "react"
import Img from "gatsby-image"

const ComponentUsingImage = ({data}) => {
  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="Alt text" />
  );
};

export default ComponentUsingImage;
 
```

## Maintaining state when navigating

One somewhat disconcerting thing, coming from 'vanilla' React, was that there is no top-level component (e.g. App.js) from which to manage top-level state. This added a learning curve when trying to implement a dark mode on my site. Each page in the site is wrapped in a `<Layout />` component which renders things like the nav bar and footer. I first tried keeping the light/dark setting in state in state in the this component, but I found that the state did not persist when switching between pages. What I initially didn't realise, is that by default in Gatsby **all components are unmounted on each route transition**. This meant that my layout component was being unmounted and remounted on every navigation between pages, destroying the state stored in the component!

After doing some digging, I found out that one solution to this problem is to use the `wrapRootElement` API [provided by Gatsby](https://www.gatsbyjs.com/docs/browser-apis/#wrapRootElement). This allows you to create components which are not unmounted on page changes. Following this [tutorial]() I used a combination of `wrapRootElement` and the [React context API](https://reactjs.org/docs/context.html) to manage the dark mode state globally:

```javascript
// src/components/theme-context.js
import React, { useState } from "react"

export const themeContext = React.createContext()

const Provider = props => {
  const [isDark, setTheme] = useState(false)

  return (
    <themeContext.Provider
      value={{
        isDark,
        changeTheme: () => setTheme(!isDark),
      }}
    >
      {props.children}
    </themeContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
```

The whole app can then be wrapped in this Provider component. This is done via an export in `gatsby-browser.js` and `gatsby-ssr.js` in the root of the project. It is important to use both, so that the same behaviour happens on the server (build-time) side and the client side. 

```javascript
// gatsby-browser.js AND gatsby-ssr.js
import Provider from "./src/components/theme-context"

export const wrapRootElement = Provider
```

## Will I keep using Gatsby?

I'd definitely like to keep developing my understanding of Gatsby. I've found it really nice to use, and the usage of GraphQL to manage data injection feels really intuitive. One thing I would definitely do differently next time would be to start from a blank canvas and build up, rather than using a template. For this site, I started using a the `personal-starter-blog` template – which was helpful at first in learning how everything worked, but it came with a lot of bloat that I didn't really need. I ended up wasting a lot of time stripping out lots of plugins and example pages and getting the code the way I wanted it, which wouldn't have happened had I started from a clean slate.

I picked Gatsby this time mainly because I was intrigued and wanted to try it, but I'd like to learn more about which use cases it is best suited for, and when it should be avoided. For example, in the case of a site with very limited interactivity, turning this into a fully-fledged React app via Gatsby seems like overkill, and must come at a performance cost. I'd also like to try out other static site generators for comparison, for example `Next.js`, which can also carry out server-side rendering. Of course my portfolio site will need updating and expanding, so I'm looking forward to discovering more about Gatsby as I do this!