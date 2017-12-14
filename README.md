# etest
start mongodb

Step 0: install server dependencies
        npm install

Step 1: Dump csv data to mongodb
        node csvdump.js

Step 2: Build frontend application      
        nav to ./public

        npm install
        ng build --prod

Step 3: Start server
        node .   