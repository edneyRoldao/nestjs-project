# nestjs-project

 - install nestjs:<br>
    npm i -g @nestjs/cli

- create a new project:<br> 
    nest new project-name

- create a new module<br>
    nest g module module-name

- create a controller<br>
    nest g controller controller-name --no-spec

- create a service<br>
    nest g service service-name --no-spec

- install uuid (id generator) <br>
    npm i uuid --save

- There are 3 levels Pipes <br>
    - parameter level
    - handler level
    - global

- Install class validator and class transformer <br>
    - npm i class-validator class-transformer --save
    - https://github.com/typestack/class-validator
    - class-validator provide us a bunch of decorators that will be used by nestjs built-in pipes
      to validate our resources.

- About Pipes
    - We use pipes to validate our DTOs 
    - nestjs built-in pipes provide us httpErrorHandlers
    - class-validator and pipes workes together.

- About Exceptions
    - we can throw nestjs exception to manage some requests, it give us a frendly way to treat httpErrors
        - NotFoundException

- TypeORM (working with database)
    - documentation: http://typeorm.io
    - npm i --save @nestjs/typeorm typeorm mysql
    - useful link: https://medium.com/@shaibenshimol/nestjs-and-mysql-in-10-minutes-711e02ec1dab

