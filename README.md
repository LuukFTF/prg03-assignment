# prg03-assignment
Programmeren 3 Opdracht - Portfolio  
Projecten Overzicht

Backend: PHP
Frontend: Javascript, HTML & SCSS

Vagrant

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

## Video Demo

https://youtu.be/xLco97-zMg0

Timestamps Beoordelingspunten:
0:00 Introductie
1:04 Punt 1: PHP JSON Webservice Code
2:02 Punt 2: PHP JSON Webservice Frontend
2:30 Overzichtpagina
4:05 Punt 3: Clickevent
4:51 Punt 4: Detailweergave
5:25 Punt 5: Localstorage Save
7:23 Punt 6: Localstorage Unsave
8:18 Bonuspunt: SCSS

## Requirements

- [x] 1. Je applicatie bevat eigen toegevoegde data in de JSON van de PHPwebservice zoals beschreven in opdracht 1 op Github. {1}
- [x] 2. Je JSON output is getest via de JSON plugin zoals beschreven in opdracht 1 op Github. {1}
- [x] 3. Je applicatie van bevat een werkend click event zoals beschreven in opdracht 3 op Github. {1}
- [x] 4. Je applicatie maakt nieuwe elementen aan in de detailweergave zoals beschreven in opdracht 3 op Github. {1}
- [x] 5. Je applicatie maakt gebruik van de localstorage Web API om favorieten op te slaan zoals vermeld in opdracht 4 op Github. {1}
- [x] 6. Je applicatie maakt gebruik van de localstorage Web API om favorieten te verwijderen zoals beschreven in opdracht 4 op Github. {1}
- [-] 7. Je applicatie maakt gebruik van AJAX om de initiële data in je applicatie te tonen zoals beschreven in opdracht 5 op Github. {1}
- [-] 8. Je applicatie maakt gebruik van AJAX om de data uit je detailweergave in je applicatie te tonen zoals beschreven in opdracht 5 op Github. {1}
- [x] 9&10. Je applicatie is voorzien van iets EXTRA’S. Je kunt maximaal 2 extra punten verdienen dus licht in jouw video toe wat je hebt gedaan wat in jouw ogen extra punt(en) waard is. (Bijvoorbeeld door 2 onderdelen uit opdracht 6 te hebben uitgevoerd) {2}