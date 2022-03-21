# prg03-assignment
Programmeren 3 Opdracht - Portfolio

## Commands

Install
```bash
choco install virtualbox vagrant
vagrant plugin install vagrant-hostmanager
vagrant plugin install nugrant
npm install -g sass
```

Setup
```bash
./_scripts/create_vagrantuser_file.sh
```
in the `.vagrantuser` file change the value for local_git_path: from `"/c/...."` to `"c:/...."`


Build
```bash
sass src/scss/style.scss public/css/style.css
```

Watch
```bash
sass --watch src/scss/style.scss public/css/style.css
```

Start
```bash
vagrant up
```

## Resources

Vagrant: https://github.com/LuukFTF/php-vagrant/tree/main