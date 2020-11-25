# MEAN Deployment

## Get Prepared

1. Setup Amazon Web Services account and Sign In
2. Setup a GitHub account
3. Git initialize the project to Deploy, and Upload to GitHub

## Setup AWS Instance

1. Login to AWS
2. Click launch new instance
3. Select Ubuntu Server 20.04 LTS (HVM), SSD Volume Type
4. Select t2.micro
5. Click Review and launch

## Setup Security Groups

- Edit Security Groups:
  - SSH: 0.0.0.0, (Anywhere or myIP -- note, myIP is most secure but
won't be accessible if outside of the network you set it up on)
  - HTTP: 0.0.0.0 (Anywhere)
  - HTTPS: 0.0.0.0 (Anywhere, or don't set it)

## Setup PEM Key

1. Create new PEM key
2. Download and place somewhere SAFE
3. Navigate to Directory of PEM key in terminal
4. Change user permission on PEM via: 

```bash
chmod 400 {{mypem}}.pem
```

## Connect to Created Cloud Server

1. Navigate to the folder where your .pem file is!
(you can use the ‘connect’ button on Amazon AWS to get the next line of code.
Find `connect` by going to 'View Instances' and then right-clicking on the instance, and clicking `Connect`)

2. `ssh -i {{mypem}}.pem ubuntu@{{yourAWS.ip}}`
(you can get this exact line of code from Connect on AWS.

## Setup Ubuntu Box for JS Server

1. In the ubuntu terminal, update Ubuntu and install some additions:
`sudo apt-get update`
`sudo apt-get install -y build-essential openssl libssl-dev pkg-config`

2. Install node and npm onto box and clear cache aftr (will have to confirm Y):
`sudo apt-get install nodejs && sudo apt-get install npm && sudo npm cache clean -f`
(The cache clean -f, forcibly cleans the cache.  This will give an interesting comment:))

3. In the ubuntu terminal: These install the node package manager n and updated node.
`sudo npm install -g n`
`sudo n stable` (or whichever node version you want e.g. 5.9.0)
`node -v` should give you the stable version of node, or the version that you just installed.

4. Install Nodemon:
`sudo npm install nodemon`

5. Install NGINX and git:
`sudo apt-get install nginx && sudo apt-get install git`

6. Go to WWW folder:
`cd /var/www` (or `sudo mkdir /var/www` if does not exist)

7. Clone your project:
`sudo git clone {{your project file path on github/bitbucket}}`

8. At this point, you should be able to change directories into your project and run your server. It will error out, because of not having mongod running and missing dependencies. However, you can `npm start` now to test (within the folder containing server.js), if you wanted.

## Setup ENV Variables and Secrets

- Check your .gitignore file locally for any .env files you may need to re-create on the server
- Also look for other config files, e.g, such as for session or cookies

## Setup NGINX

1. Go to nginx’s sites-available directory. Close your running node app (if running),
and navigate out of your project folder into 'www$' and type:
`cd /etc/nginx/sites-available`

2. Enter vim:
`sudo vim {{project_name}}`
Note: vim is a terminal-based text editor for more info see: vim-adventures.com/ or other vim learning tools. The key commands for us
are `i` which allows us to type, `esc` which turns off insert and then after esc `:wq` which says write and quit.

3. Paste and modify the following code into vim after hitting `i`: ```bash
server {
    listen 80;
    location / {
        proxy_pass http://{{PRIVATE-IP}}:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}```
This code says: have the reverse proxy server (nginx) listen at port 80. When going to root /, listen for http requests as though you were
actually `http://{your-private-ip}` and the port your server is listening e.g 8000
NOTE: Learn more from nginx: `http://nginx.org/en/docs/http/ngx_http_proxy_module.html`

4. Exit VI by typing `:wq` (:w writes and :q quits - so this is save and quit).
Note: If you can't write the file above, be sure that you ran VI as sudo

5. Remove the defaults from /etc/nginx/sites-available:
`sudo rm default`

6. Create a symbolic link from sites-enabled to sites available:
`sudo ln -s /etc/nginx/sites-available/{{project_name}} /etc/nginx/sites-enabled/{{project_name}}`

7. Remove the defaults from /etc/nginx/sites-enabled/
`cd /etc/nginx/sites-enabled/`
`sudo rm default`

## Setup Project Dependencies and PM2


1. Navigate back into your Project Directory
`cd /var/www/{{project_folder}}`

2. Install pm2 globally [PM2 Docs at NPM](https://www.npmjs.com/package/pm2). NOTE: This is a production process manager that allows us to run node processes in the background. If we didn't install PM2, we'd have to run our server and have it manually running in our Ubuntu terminal, without any management assistance and would be less reliable.
`sudo npm install pm2 -g`

3. Try some stuff with pm2!
`cd /var/www/{{project_name}}`
`pm2 start server.js`  // note, if modularized, it may be, `pm2 start server/server.js` (be sure to navigate to the right directory)
`pm2 stop 0`
`pm2 restart 0`
`sudo service nginx reload && sudo service nginx restart`
Note: You'll still need to install your dependencies and setup mongod

4. You might have some components that you still need to install: (get your dependencies from npm (assuming your git project has a package.json))
`cd /server` (go into server folder)
`npm install`
NOTE: You really don't ever want to use `sudo` when installing NPM, because packages will have root access.
If you're having EACCESS issues try this:  `sudo chown -R $USER /var/www/` will allow your user write access to WWW.
NOTE: I'm still not sure about this because may be grating malicious npm packages root access now too since running as your user...you can try using `nvm` to install, but I still haven't sorted that yet either.
Now try `npm install`
You can also install `nvm` via:
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash`. **ADDITIONAL NOTE** If your node_modules are not installing, make sure that you've updated your project title in your `package.json` and `bower.json`files, and add this `repository` property to your `package.json`: ```json
"repository": {
    "type": "git",
    "url": "https://github.com/{{user}}/{{repoName}}.git"
}```

5. IF USING BOWER (assuming you have a bower.json)
`sudo npm install bower -g && sudo bower install --allow-root`
NOTE: This could still give write permissions to malicious packages

## Setup MongoDB

**Refer to MongoDB Docs here* Because this process changes so much, just follow directions at the official docs for [installing mongodb on ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

Be sure after setting up key, to:

- Reupdate to integrate mongo: `sudo apt-get update`
- Install mongo: `sudo apt-get install -y mongodb-org`
- Start mongo (probably already started): `sudo systemctl start mongod`
- Restart your pm2 project and make sure the nginx config’s are working:

```bash
pm2 stop 0
pm2 restart 0
sudo service nginx reload && sudo service nginx restart
```

## View Online

1. At this point, the nginx commands should have shown 2 OKs and you should be off and running.
2. Go to the AWS public IP and see your site live!

## Troubleshooting

1. Check your pm2 log:
`pm2 show 0 && pm2 logs server --lines 100`

2. Check your nginx log:
`vim /var/log/nginx/error.log`

3. EACCESS Issues: // TODO