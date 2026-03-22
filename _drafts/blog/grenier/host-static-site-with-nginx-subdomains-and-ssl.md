---
layout: post
lang: en
title: "Host a static site with Nginx subdomains and SSL"
date: 2022-04-13T14:00:00Z
description: "This is the beginning of a new series in which I will incrementally evolve an accessible and green static website. In order to optimize costs, save up energy and memory, we will mutualize hosting of several static sites on the same server. To do so we will configure nginx to host the static sites on different (sub)domains and secure them with SSL."
tags:
- Accessibility
- GreenIt
- Nginx
- Html
- Dns
- Hosting
- SelfHosting
- Certbot
- LetsEncrypt
- CiCd
- StaticSite
- IndieWeb
- FullStack
- Linux
- Makefile

---

This is the beginning of a new series in which I will incrementally evolve an accessible and green static website.
In order to optimize costs, save up energy and memory, we will mutualize hosting of several static sites on the same server.
To do so we will configure nginx to host the static sites on different (sub)domains and secure them with SSL.

Also, having this kind of knowledge is a first step to own our own content and later, be able to create and [IndieWeb](https://indieweb.org/) site.

## Why?

In this series, I will migrate my own website (https://baldir.fr) to a fresh new site (https://next.baldir.fr).
I will later switch "next" to the main domain when the new site is ready.

I want to create a frugal website (following the [115 Green-IT best practices](https://collectif.greenit.fr/ecoconception-web/115-bonnes-pratiques-eco-conception_web.html)).
I also want to make it accessible (following [RGAA recommendations](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/kit/#contenu)).

Since I want to learn Green IT and web accessibility, I think that ["eating my own dogfood"](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) is one of the best way to proceed.
Beginning from scratch and moving incrementally in baby steps will help me not to be overwhelmed.

Also, I believe that making internet accessible and frugal as fast as we can is a way to help reaching the objectives of [Paris Climate Aggrements](https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement).
This should be at reach for anyone with a few development skills.

*Accessibility and Green IT should be accessible.*

## Series

- 01 - Host a static site with Nginx subdomains and SSL

## Preamble

In this example my host provider is [Linode](https://cloud.linode.com/).
Nevertheless, the content of this article is mostly true for any linux based hosting machine (even a RaspberyPi).

If you want to do the same thing, you will need to fulfill some pre-requisites:

- buy a domain
- have ssh and sudo access to a linux machine (hosting service or self-hosted is OK)
- `git`, `make`, `certbot` and Nginx service installed on the hosting machine

## HTML content

I first created an initial basic index.html page.
Later in the series, we may generate html files and perhaps have a few dynamic pages for specific purposes.

`next/src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Baldir</title>
</head>
<body>
<h1>Baldir</h1>
<p>Hello World</p>
</body>
</html>

```

## Deployment tasks with Makefile

To deploy this site will be very simple for now, we will just copy `next/src/index.html` to `next/dist/index.html`.

I update of the Makefile to "deploy" our simplistic site.
I my current case, I just copy an `index.html` file in the location where the subdomain will lookup ofr html files.

Why do I use an old technology such as `Makefile`?
It is commonly present in any linux machine.
It can automate almost anything.
It can hide multiple package managers and build commands(npm, maven, dotnet ...) behind a single entrypoint.

`Makefile`

```makefile
all: build next_deploy
# added next_build

changes=git diff-index --quiet HEAD
changes_detected=0

fetch:
  git fetch

detect_changes: fetch
  $(shell ${changes})
ifneq (0,$?)
  @echo changes detected
else
  @echo no changes detected
endif

checkout: detect_changes
  $(shell ${changes})
ifneq (0,$?)
  git reset --hard origin/master
endif

# added
next_clean:
  rm -rf next/dist

# added
next_deploy: next_clean
  mkdir -p next/dist
  cp -r next/src/index.html next/dist/index.html

install:
  npm install

build: install
  npm run build

clean:
  rm -rf node_modules

```

## Deployment shell entry point

I use a runner bash script in order to
- change directory to a specific folder
- checkout latest git version and reset hard to HEAD of the main branch
- build and deploy the main site (in my case baldir.fr)
- deploy the next site (in my case next.baldir.fr)

Why this command?
It allows to run predefined command with arguments from the CI/CD tool (in my case Gitlab).
It hides the implementation details of the build and deploy commands (they are hidden in both `deploy_command.sh` and `Makefile`)

`deploy_command.sh`

```shell
#!/bin/bash
this_command_path=$(realpath $0)
this_folder=$(dirname $this_command_path)
cd $this_folder
make checkout
make build
# added here
make next_build
```

## Hosting Dns configuration

Now we have some content, we want to host it online.
I order to be found on the internet our site need to have an URL.

Setup multiple sites in the same host using nginx and subdomains.

Thanks to [this article](https://adamtheautomator.com/nginx-subdomain/), I configured my DNS entries and Nginx virtual hosts.

Let's see what it looks like.

## DNS Records

In the Dns panel of my domain provider, I added entries to match the IP adresses of the hosting machine to my main domain and a subdomain.

### A/AAAA Records

First you need to know the public IP address of the hosting machine.
In this example say the IP v4 is 999.999.999.999 and the IP v6 is xxxx:xxxx::xxxx:xxxx:xxxx:xxxx.

Your A/AAAA Dns entries may look like this:

| Hostname  | IP Address                     | Note  |
|-----------|--------------------------------|-------|
| baldir.fr | 999.999.999.999                | ip v4 |
| baldir.fr | xxxx:xxxx::xxxx:xxxx:xxxx:xxxx | ip v6 |
| next      | 999.999.999.999                | ip v4 |
| next      | xxxx:xxxx::xxxx:xxxx:xxxx:xxxx | ip v6 |

### CAA Records

See [DNS Certification Authority Authorization](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization).

In this entries I specify the authority to provide SSL certificates.
In this case, wa are using [Let’s Encrypt](https://letsencrypt.org/).
If like me you love using this service, [consider making a donation](https://letsencrypt.org/donate/) to make the web safer and more secure for everyone.

| Name      | Tag   | Value                |
|-----------|-------|----------------------|
| baldir.fr | issue | letsencrypt.org      |
| next      | issue | letsencrypt.org      |

## HTTP Server with Nginx

In my case, I use nginx to expose HTML content through HTTP. Since I use a subdomain, I need to configure it accordingly.

In this article I assume Nginx is already installed and runs as a service (`sudo service nginx start|stop|restart`).

Nginx static site with LetsEncrypt SSL certificate configuration file template.

`infra/nginx/static-site-ssl-lets-encrypt.nginx.conf.mustache`

```
server {
    server_name  {{server_name}};

    root   {{root_path}};
    index  index.html index.htm;

    location / {
       try_files $uri $uri/ =404;
    }

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/{{root_cert_common_name}}/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/{{root_cert_common_name}}/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = {{server_name}}) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    server_name {{server_name}};
    listen 80;
    listen [::]:80;
    return 404; # managed by Certbot
}

```

**Option 1**: Replace manually `{{server_name}}` `{{root_cert_common_name}}` and `{{root_path}}` values with your own depending on your hosting.

**Option 2** : Mustache compatible template engine

You can use a template engine [such as mustache](https://mustache.github.io/) to automatically replace variable with actual value from a json or yml file.
Example of values for the template variables:

`infra/nginx/baldir.fr.json`

```json
{
  "server_name": "example.org",
  "root_path": "/path/to/baldir/dist",
  "root_cert_common_name": "example.org"
}
```

`infra/nginx/next.baldir.fr.json`

```json
{
  "server_name": "next.example.org",
  "root_path": "/path/to/next/baldir/dist",
  "root_cert_common_name": "example.org"
}
```

In my case both example.org and next.example.org sites are static sites.
I can generate 2 configuration files from the same template but with different values for `{{server_name}}` and `{{root_path}}`.

I chose a python implementation of [the mustache templating engine](https://mustache.github.io/) called [Chevron](https://github.com/noahmorrison/chevron).

```shell
chevron -d infra/nginx/baldir.fr.json infra/nginx/static-site-ssl-lets-encrypt.nginx.conf.mustache > /tmp/baldir.fr.conf
chevron -d infra/nginx/next.baldir.fr.json infra/nginx/static-site-ssl-lets-encrypt.nginx.conf.mustache > /tmp/next.baldir.fr.conf
```

I also create a "catch all" configuration for when a wrong subdomain is queried.

`/etc/nginx/conf.d/00-catch-all.conf`

```
server {
    listen 80 default_server;

    server_name _;

    return 410;
}
```

Moving generated nginx configuration files to nginx configuration folders.

```bash
sudo cp /tmp/baldir.fr.conf /etc/nginx/conf.d/01-example.org.conf
sudo cp /tmp/next.baldir.fr.conf /etc/nginx/conf.d/02-next.example.org.conf

# verify nginx configuration
sudo nginx -t

# expected result:
#
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful

sudo service nginx restart
```

You can go to both http://example.org and http://next.example.org (to be replaced with your own domain).
The content is visible, but the page is not secured.

## Configure Let's Encrypt SLL certifiates with certbot

In order to be secured, you sites need to rely on a valid SSL certificate to secure the connection with HTTPS.

Don't worry, some smart people have made really cool tools to make it very simple.

[Certbot](https://certbot.eff.org/) command automates and simplifies configuration of SSL certificates from [LetsEncrypt](https://letsencrypt.org/fr/).
Please refer to [installation instructions of certbot](https://certbot.eff.org/instructions) to install the command line.

The first time you may configure your sites for nginx automatically with `sudo certbot --nginx`.
Then you add or revoke certificates, you may use `sudo certbot`.

In my case I already have run `sudo certbot --nginx` once, so I will use `sudo certbot`.

The command and results should look like this.

```
sudo certbot

Saving debug log to /var/log/letsencrypt/letsencrypt.log

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: example.org
2: next.example.org
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel):
Requesting a certificate for next.example.fr

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/example.org/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/example.org/privkey.pem
This certificate expires on 2022-07-11.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for next.example.org to /etc/nginx/conf.d/01-example.org.conf
Congratulations! You have successfully enabled HTTPS on https://example.org

Successfully deployed certificate for next.example.org to /etc/nginx/conf.d/02-next.example.org.conf
Congratulations! You have successfully enabled HTTPS on https://next.example.org


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

You can now visit both https://example.org and https://next.example.org (replace with your own domain name).
The sites should be secured in your browser.

## Conclusion

- We created very basic HTML content so that we can have a very simple baseline to be compliant with Accessibility and Green IT;
- We used Makefile and bash to provide a 1 command deployment process that can be used in a CI/CD pipeline;
- We set up DNS records for main domain and subdomain
- We created an Nginx configuration template that can help generate static site virtual hosts on subdomains;
- We made it customizable with mustache template engine
- We promoted HTTP to HTTPS using certbot to add Let's Encrypt SSL certificate for our sites;

Sources are [available here](https://gitlab.com/marc-bouvier/baldir-fr/-/tree/9a5020747ce711a449656cfe08edac38508b280b).

This is far from perfect but should be enough for our current needs.
Next time, before we go to far, we will make an initial Accessibility audit of both https://baldir.fr and https://next.baldir.fr.
It will be an occasion to play with [Frago](https://github.com/DISIC/frago) an [Hugo](https://github.com/gohugoio/hugo) theme by [Bertrand Keller](https://github.com/bertrandkeller) focused on automating the presentation of RGAA audit reports.
