# My Website `dmitriy.sevkovych.com`, Version 3

## Technical notes

### UI Component Library

The project uses `shadcn/ui`. See [installation instructions here.](https://ui.shadcn.com/docs/installation/next)

#### Styling

##### Colors

Theme colors are managed in [`tailwind.config.ts`](./tailwind.config.ts) and [`globals.css`](./src/styles/globals.css) and are given in HSL

-   Helpful HSL color picker: https://hslpicker.com/

### Blog

The Next.js + MDX blog leans heavily on [this tutorial by Ebenezer Don](https://www.youtube.com/watch?v=WCGopHwXnic). It uses [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) to combine MDX and matter metadata.
