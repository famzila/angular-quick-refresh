import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { Gist } from 'ngx-highlightjs/plus';

// import * as template from "./assets/templates/heigh-level.template.html";

@Component({
  selector: 'app-guide-content',
  templateUrl: './guide-content.component.html',
  styleUrls: ['./guide-content.component.scss']
})
export class GuideContentComponent implements OnInit {
  contentTitle: string='';
  example1 !: string;
  example2 !: string;
  example3 !: string;

  gist!: Gist;

  codeUrl = 'https://raw.githubusercontent.com/MurhafSousli/ngx-highlightjs/master/README.md';

  // Gist id
  gistId = '6fd1b8fe940ded9f792335addb60c809';

  // Themes
  theme = 'androidstudio';
  styles = [
    'vs',
    'rainbow',
    'dracula',
    'androidstudio',
    'agate',
    'zenburn',
    'agate',
    'color-brewer',
    'atom-one-dark',
    'atom-one-light',
    'github',
    'solarized-light',
    'solarized-dark',
    'railscasts',
    'tomorrow',
    'monokai-sublime',
    'mono-blue',
    'default',
  ];
  
  constructor(private route: ActivatedRoute, private hljsLoader: HighlightLoader) { 
  }

  ngOnInit(): void {
    this.example1= `"build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/angular-starter",
        "index": "src/index.html",
        "main": "src/main.ts",
        "polyfills": "src/polyfills.ts",
        "tsConfig": "tsconfig.app.json",
        "aot": false,
        "assets": [
          "src/favicon.ico",
          "src/assets"
        ],
        "styles": [
          "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
          "src/style.css"
        ]
      }
    }`;
    this.example2 = `import { enableProdMode } from '@angular/core';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { AppModule } from './app/app.module';
    import { environment } from './environments/environment';
    if (environment.production) {
    
    
    enableProdMode();
    }
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));`;
    this.route.params.subscribe( params => {
      this.contentTitle = params['name'];
    });


  }

  changeTheme() {
    this.hljsLoader.setTheme(`assets/styles/${ this.theme }.css`);
  }

}
