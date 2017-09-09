##Before starting do the next:
`npm install -g @angular/cli@latest`

App created by the following command: <br/>
`ng new {APP_NAME}  --skip-tests --style=scss`.<br/>

## Build
Run `npm run build:dev` to build the project.<br/>
Run `npm run build:prod` for a production build.<br/>
The build artifacts will be stored in the `../public/angular_general/` directory. <br/>

## Development server
Run `npm run start`.<br/>
The app will automatically reload if you change any of the source files.

##Generate new component
###will generate the following component:
`{APP_NAME}/src/app/components/{componentName}`<br/>

`ng g component components/{componentName} --spec=false`

##Generate new pipe
###will generate the following pipe:
`{APP_NAME}/src/app/pipes/{pipeName}`<br/>

`ng g pipe pipes/{pipeName} --spec=false`
