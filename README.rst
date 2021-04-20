Problem with storybook and npm 7 workspaces
===========================================

I created a npm7 environment with two workspaces.

my-module contains a vue.js component called GreenBlock.

my-app contains a vue.js component called RedBlock.

Both contains scss.

Solution
--------

The solution was to remove this line::

    include: path.resolve(__dirname, '../'),

Setup
-----

Install npm7.

clone the repository.

In the root folder run::

    npm install

In the root folder run::

    npm run serve --workspace my-app

Storybook
---------

The storybook configuration won't build the component in the my-module package (Green Block).

In the root folder run::

    npm run storybook --workspace my-app

If you remove the GreenBlock story, the RedBlock story works fine.


