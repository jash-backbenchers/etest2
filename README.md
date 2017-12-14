# etest

Step 0: start mongodb
       
Step 1: install server dependencies

        cd/etest2
        npm install

Step 2: Dump csv data to mongodb

        node csvdump.js

Step 3: Build frontend application    

        cd public        (etest2/public)

        npm install
        ng build --prod

Step 4: Start server

        node .   

step 5: Browse application

        http://localhost:3000

implemented

1.category listings with number of products
2.products page
3.product edit,delete
4.product create

Pending

1.Authentication
2.Test
