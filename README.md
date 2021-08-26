## Instructions

Clone the repository with:

``` git clone https://github.com/matezito/wordpress-headless.git ```

Then ``` cd wordpress-headless ``` or access to cloned folder.

### Install

Run:

``` npm install ```

and then rename .env.local.example to .env.local and configure with your own data (GraphQL URL and site domain).

In your WordPress instalation create a plugin with this code: https://gist.github.com/matezito/3f357454a3daf7a03dd8ceed58a0ffeb (remember, your WP installation must have installed the WPGraphQL plugin https://wordpress.org/plugins/wp-graphql/. Also the installation must have a logo and favicon image added)

Good! Now run:

``` npm run dev ``` or ``` npm run build & npm start ```

Thanks for your download :) and so sorry for my ugly english...