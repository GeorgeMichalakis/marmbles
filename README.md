# Farmer's store eCommerce Platform

> eCommerce platform built with the MERN stack & Redux. 
This is possible through the following course by Brad Traversy and my sincere thanks to him. I wish you explore his github repo (https://github.com/bradtraversy/proshop_mern) and support community through your apps. (https://www.udemy.com/course/mern-ecommerce). 

#### Please support our Kandiyur-Pillor irrigation 🌊 water movement by signing our cause in the change.org platform.(http://chng.it/HWrFtTLb7x)

## Live URL : (https://farmer-store.herokuapp.com)

## Note to Farmers, FIG and FPO leaders

This pandemic has ravaged lives. Nevertheless it has brought us closer to one another and amplified our sense of belonging. You are welcome to use this repo for deploying websites to service your local communities. We appreciate your conservative measures to thwart Corona spread. Your digital presence just requires two steps 
1. a Heroku account and 
2. a MongoDB cloud account


## Features
Following features are only a subset of Brad Traversky's repo. We encourage interested souls to explore MERN stack and extend new features.
- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page


### Heroku and MongoDB
1. Please sign up for Mongo Atlas cloud account and follow steps in Instructions -app deployment PDF.
2. Please sign up for Heroku account and deploy the app.
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Nishanthkumarchandrasekaran/farmer-store)

### Env Variables

1. Click your App deployed on Heroku and choose settings tab
2. Select Reveal Config Vars and plug in relevant values.
```
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

farmer@example.com (Admin)
123

pegasus@example.com (Customer)
1234

```

## License

The MIT License

Acknowledgements and Copyright (c) 2020 Traversy Media https://traversymedia.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
