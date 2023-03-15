# :eyes: Secret

Secreto-like anonymous messaging app.<br>
This project was bootstrapped with [SvekteKit (JavaScript)](https://kit.svelte.dev/) and powered by [Supabase](https://supabase.io/).

<details>
  <summary><b>Indonesian</b></summary>
    Pengirim pesan anonim mirip <a href="https://secreto.site/">secreto</a>.
    Aplikasi ini menggunakan framework <a href="https://kit.svelte.dev/">SvelteKit (JavaScript)</a> yang didukung basisdata <a href="https://supabase.io/">Supabase</a>.
    Proyek ini terinspirasi dari <a href="https://github.com/sooluh/secret"><code>@sooluh/secret</code></a>, dan orisinal milik <a href="https://github.com/Reynadi531/secret-message"><code>@Reynadi531/secret-message</code></a>.
</details>

> This project or documentation not completely finished, please post an issue to make any improvement.

## Setup Project

### GitHub

```bash
# GitHub HTTPS
git clone https://github.com/sofaemha/rahasia.git
```
```bash
# GitHub SSH
git clone git@github.com:sofaemha/rahasia.git
```
> Or directly download from GitHub.

### Installation

```bash
# Installing package
npm install
```

### Supabase

Query to create table `messages` :

```sql
CREATE TABLE messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY NOT NULL,
  message TEXT DEFAULT '' NOT NULL,
  owner BOOL DEFAULT FALSE NOT NULL,
  active BOOL DEFAULT TRUE NOT NULL,
  parent BIGINT NULL,
  created TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  deleted TIMESTAMP WITH TIME ZONE DEFAULT NULL NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (parent) REFERENCES messages (id)
);
```
> You need to create account first, the easiest way is sign-in using github account. Then create a new database project, copy code above into integrated terminal, and done.

## App Development

### Environment ( .env )
Environment variable needed :

```
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=

PUBLIC_APPLICATION_NAME=
```

<details>
  <summary><b>Optional environment variable</b></summary>
  <br>

  ```
  PUBLIC_APPLICATION_TITLE=
  PUBLIC_META_APPLICATION_DESCRIPTION=
  PUBLIC_META_APPLICATION_KEYWORD=

  PUBLIC_APPLICATION_DESCRIPTION=
  PUBLIC_APPLICATION_ANALYTICS=
  ```

</details>

> Don't forget to use single or double quote for HTML preview.

### Build and Deploy

To run local server use :
```bash
npm run dev -- --open
```

To check problem in all file on every folder :
```bash
# One time only
npm run check
```
```bash
# Continue watching a problem
npm run check:watch
```

To build the website :
```bash
npm run build
```

To preview production build locally :
```bash
npm run preview
```

> **WARNING** <br>
> This project NOT generate static file (SSG), you need to download adapter-static and setup some file. For further information please visit [official documentation](https://kit.svelte.dev/docs/adapter-static).

## License
Originally this project belonged to :<br>
[Reynadi531/secret-message](https://github.com/Reynadi531/secret-message).<br>

Modified by [sooluh/secret](https://github.com/sooluh/secret).<br>
Rebuilt by [Sofa eMHa](https://github.com/sofaemha).<br>
With an [MIT License](./LICENSE).


