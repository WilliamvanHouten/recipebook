const recipes = [
    {
      id: 1,
      title: 'Rib Steak served with Roast Veg',
      description: 'Rich and succulent flavours of a perfectly grilled Rib steak, accompanied by a medley of beautifully roasted seasonal vegetables.',
      ingredients: [
        'For the Rib Steak:',

        'Ribeye steak (bone-in or boneless, depending on your preference)',
        'Salt',
        'Pepper',
        'Olive oil or vegetable oil',
        'Optional: garlic, rosemary, thyme, or your preferred steak seasoning for additional flavor',
        'For the Roasted Vegetables:',
        
        'Assorted vegetables (choose your favorites; popular choices include potatoes, carrots, bell peppers, onions, zucchini, and asparagus)',
        'Olive oil',
        'Salt',
        'Pepper',
        'Optional: garlic, fresh herbs (such as rosemary, thyme, or parsley), balsamic vinegar, or grated Parmesan for extra flavor',
        ],
        steps: [
          // Step 1: Preheat the oven
          "Preheat the Oven: Preheat your oven to around 400°F (200°C). This temperature is suitable for both roasting the vegetables and finishing the steak.",
          
  
          // Step 2: Prepare veggies
          "Prepare the Vegetables:", "Wash, peel (if needed), and cut the vegetables into uniform-sized pieces. This ensures even cooking.",
          "Place the vegetables in a large mixing bowl.",
  
          // Step 3: Season veggies
          "Season the Vegetables: ", "Drizzle olive oil over the vegetables and toss them to ensure even coating.",
          "Season the vegetables with salt, pepper, and any optional herbs or spices you prefer. Toss again to distribute the seasoning.",
  
          // Step 4: Roast veggies
          "Roast the Vegetables:","Spread the seasoned vegetables in a single layer on a baking sheet or roasting pan.",
          "Roast the vegetables in the preheated oven for about 25-35 minutes, or until they are tender and golden brown. You may want to stir them once or twice during cooking for even browning.",
          
  
          // Step 5: Prep Steak
          "Prepare the Steak:","While the vegetables are roasting, you can prepare the ribeye steak.",
          "Season both sides of the steak with salt, pepper, and any optional seasonings you like",
  
          // Step 6: Cook Steak
          "Cook the Steak:", "Heat a skillet or grill pan over medium-high heat. Add a bit of oil to prevent sticking.",
          "Cook the steak for a few minutes on each side, depending on your desired level of doneness. Use a meat thermometer to ensure your steak reaches your preferred internal temperature (145°F / 63°C for medium-rare, 160°F / 71°C for medium, and 170°F / 77°C for well-done).",

          // Step 7: Rest Steak
          "Rest the Steak:", "Once the steak is cooked to your liking, remove it from the heat and let it rest for a few minutes. This allows the juices to redistribute, resulting in a more flavourful and tender steak.",
          
          // Step 8: Serve
          "Serve:", "Arrange the cooked rib steak on a plate.",
          "Serve with the roasted vegetables on the side."
        ],
        imageUrl: '/rib-steak.jpg',
        time: '60 - 75 minutes',
      },
      {
        id: 2,
        title: 'Chocolate Brownie',
        description: 'Rich chocolate brownies, a delectable treat that is sure to satisfy your sweet cravings',
        ingredients: [
          '1/2 cup (1 stick) unsalted butter, melted',
          '1 cup granulated sugar',
          '2 large eggs',
          '1 teaspoon vanilla extract',
          '1/3 cup unsweetened cocoa powder',
          '1/2 cup all-purpose flour',
          '1/4 teaspoon salt',
          '1/4 teaspoon baking powder',
          
        ],
        steps: [
          // Step 1: Preheat oven
          'Preheat your oven to 350°F (175°C). Grease or line an 8-inch(20cm) square baking pan with parchment paper, leaving some overhang on the sides for easy removal.',
          
  
          // Step 2: Melt butter
          'In a microwave-safe bowl, melt the butter in the microwave or on the stovetop until fully melted. Allow it to cool slightly.',
          
          
          // Step 3: Mix eggs & sugar
          'In a mixing bowl, whisk together the granulated sugar and eggs until well combined.',
          
  
          // Step 4: Add Vanilla and melted butter
          'Stir in the vanilla extract and the melted butter, mixing until the batter is smooth.',

          // Step 5: Incorporate dry ingredients
          'Sift in the unsweetened cocoa powder, all-purpose flour, salt, and baking powder into the wet mixture. Gently fold the dry ingredients into the wet until just combined. Be careful not to overmix, as this can make the brownies tough.',

          // Step 6: Pour and spread batter
          'Pour the brownie batter into the prepared baking pan. Use a spatula to spread the batter evenly.',

          // Step 7: Bake
          'Place the pan in the preheated oven and bake for approximately 20-25 minutes. The brownies are done when a toothpick or cake tester inserted into the center comes out with a few moist crumbs (not wet batter).',

          // Step 8: Cool & cut
          'Allow the brownies to cool in the pan for about 10-15 minutes, then use the parchment paper overhang to lift them out of the pan. Transfer to a wire rack to cool completely. Once fully cooled, cut the brownies into squares.'
          
        ],
        imageUrl: '/chocolate-brownie.jpg',
        time: '40 - 45 minutes',
        
      },
      {
        id: 3,
        title: 'Pizza',
        description: 'Crispy pizza crust adorned with vibrant Mediterranean flavors',
        ingredients: [
          '1 pound (450g) pizza dough (store-bought or homemade)',
          '1/2 cup tomato sauce or pizza sauce',
          '1 1/2 cups shredded mozzarella cheese',
          '1/2 cup crumbled feta cheese',
          '1/4 cup sliced black olives',
          '1/4 cup sliced Kalamata olives',
          '1/4 cup sliced red onion',
          '1/4 cup sliced sun-dried tomatoes (packed in oil, drained)',
          '2 tablespoons chopped fresh basil',
          '1 tablespoon chopped fresh oregano',
          '2 tablespoons extra-virgin olive oil',
          'Salt and pepper to taste'
        ],
        steps: [
          // Step 1: Preheat oven
          "Preheat your oven to the temperature specified on the pizza dough packaging (usually around 425-450°F or 220-230°C).",
  
          // Step 2: Prepare toppings
          "If using store-bought pizza dough, follow the package instructions for rolling out the dough and preparing it for baking.",
          "If using homemade dough, roll it out on a lightly floured surface to your desired thickness.",
  
          // Step 3: Assemble Pizza
          "Spread the tomato or pizza sauce evenly over the prepared pizza dough, leaving a small border around the edges for the crust.",
          "Sprinkle about half of the shredded mozzarella cheese over the sauce.",
  
          // Step 4: Add toppings
          "Scatter the crumbled feta cheese, sliced black olives, sliced Kalamata olives, sliced red onion, and sliced sun-dried tomatoes over the pizza.",
          
          // Step 5: Season & bake
          "Sprinkle the chopped fresh basil and oregano over the toppings.",
          "Drizzle the extra-virgin olive oil over the pizza.",
          "Season the pizza with a pinch of salt and a sprinkle of black pepper, to taste.", 

          // Step 6: Bake Pizza
          "Place the assembled pizza on a pizza stone, baking sheet, or pizza pan.",
          "Bake in the preheated oven for about 12-15 minutes, or until the crust is golden brown, and the cheese is melted and bubbly.",
          
          // Step 7: Serve
          "Once the pizza is baked to your liking, remove it from the oven and let it cool for a minute or two.",
          "Slice the Mediterranean pizza into wedges and serve hot."
        ],
        imageUrl: '/pizza.jpg',
        time: '25 - 35 minutes',
    },
      {
        id: 4,
        title: 'Seafood Pasta',
        description: 'A delightful fusion of tender seafood and al dente pasta, elegantly tossed in a luscious sauce.',
        ingredients: [
          '8 ounces (about 225g) of pasta (e.g., linguine, spaghetti, fettuccine)',
          '1/2 pound (about 225g) of mixed seafood (shrimp, scallops, mussels, or other favorites)',
          '3 cloves of garlic, minced',
          '1/4 cup white wine (optional)',
          '1/2 cup dry white wine',
          '2 tablespoons extra-virgin olive oil',
          '1 cup cherry tomatoes, halved',
          '1/4 cup fresh chopped parsley',
          'Salt and black pepper to taste',
          'Red pepper flakes (optional, for some heat)',
          'Grated Parmesan cheese for serving'
        ],
        steps: [
          // Step 1: Cook pasta
          'Bring a large pot of salted water to a boil. Add the pasta and cook according to the package instructions until it is al dente (firm to the bite). Drain the pasta, but reserve about 1 cup of the pasta cooking water. Set the cooked pasta aside.',
          
  
          // Step 2: Prepare seafood & ingredients
          'Rinse the mixed seafood thoroughly, and pat dry with paper towels.',
          'In a large skillet, heat the olive oil over medium heat. Add the minced garlic and sauté for about 1 minute, until fragrant.',
        
  
          // Step 3: Saute the seafood
          'Add the mixed seafood to the skillet. If using shrimp, they should turn pink and opaque, scallops should brown slightly, and mussels should open. This usually takes about 3-5 minutes, but the exact time will depend on the size and type of seafood you are using.',
          'If desired, deglaze the skillet with white wine, letting it cook off slightly.',
  
          // Step 4: Add tomatoes & seasoning
          'Add the halved cherry tomatoes to the skillet and cook for an additional 2 minutes, just until they start to soften.',
          'Season the mixture with salt, black pepper, and red pepper flakes if you like a bit of heat.',
          
  
          // Step 5: Combine pasta & seafood mixture
          'Add the cooked pasta to the skillet with the seafood mixture.',
          'Toss everything together gently, adding a bit of the reserved pasta cooking water to create a silky sauce that coats the pasta.',
          
  
          // Step 6: Serve
          'Stir in the fresh chopped parsley, and cook for an additional 1-2 minutes to meld the flavors.',
          'Taste and adjust the seasoning as needed.',
          'Serve the seafood pasta hot, garnished with grated Parmesan cheese.'
        ],
        imageUrl: '/seafood-pasta.jpg',
        time: '25 - 30 minutes', 
    },
      {
        id: 5,
        title: 'Flapjacks',
        description: 'Fluffy flapjack stack with golden honey and hearty oats infused with vibrant flavors',
        ingredients: [
          '1 cup (about 227g) unsalted butter',
          '1 cup (about 200g) soft light brown sugar',
          '2 tablespoons golden syrup (you can use honey or maple syrup as an alternative)',
          '3 cups (about 300g) rolled oats',
          'Optional: add-ins like raisins, chocolate chips, chopped nuts, or dried fruits',
          
        ],
        steps: [
          // Step 1: Preheat Oven and Prep the Baking Pan
          'Preheat your oven to 350°F (175°C).',
          'Grease a square or rectangular baking pan (about 8x8 inches or 9x9 inches) or line it with parchment paper.',
          
  
          // Step 2: Melt the Butter and Sugar
          'In a saucepan, melt the butter over medium heat.',
          'Stir in the soft light brown sugar and golden syrup. Keep stirring until the sugar has dissolved and the mixture is smooth.',
  
          // Step 3: Combine with Rolled Oats
          'Remove the saucepan from the heat.',
          'Stir in the rolled oats, mixing thoroughly until the oats are completely coated with the buttery sugar mixture.',
          'If you are adding any optional ingredients (raisins, chocolate chips, nuts, dried fruits, etc.), fold them into the mixture at this point.',
  
          // Step 4: Press into the Baking Pan
          'Transfer the flapjack mixture to the prepared baking pan.',
          'Press the mixture down firmly and evenly using the back of a spoon or spatula. This helps compact the flapjacks.',
  
          // Step 5: Bake
          'Place the baking pan in the preheated oven and bake for about 20-25 minutes or until the flapjacks are golden brown on top.',
  
          // Step 6: Cool and Cut
          'Once baked, remove the flapjacks from the oven and let them cool in the pan for a few minutes.',
          'While the flapjacks are still warm, use a knife to score the top (this helps with clean cutting later).',
          'Allow the flapjacks to cool completely in the pan before cutting them into squares or rectangles along the scored lines.',

        ],
        imageUrl: '/flapjacks.jpg',
        time: '30 - 35 minutes' 
      },
      {
        id: 6,
        title: 'Crispy Roast Chicken',
        description: 'Roast Chicken with golden skin that encases tender, succulent meat, creating a mouthwatering symphony of flavors and textures.',
        ingredients: [
          '1 whole chicken (about 4-5 pounds or 1.8-2.3 kg)',
          '2-3 tablespoons of olive oil or melted butter',
          'Salt and black pepper to taste',
          'Optional seasonings: garlic powder, onion powder, paprika, thyme, rosemary, or your preferred herbs and spices',
          
        ],
        steps: [
          // Step 1: Preheat the Oven
          'Preheat your oven to 425°F (220°C).',
  
          // Step 2: Prepare the Chicken
          'Make sure the chicken is clean and pat it dry with paper towels.',
          'If desired, you can truss the chicken (tie the legs together with kitchen twine) for more even cooking.',
  
          // Step 3: Season the Chicken
          'Rub the entire chicken with olive oil or melted butter. This helps create a crispy skin and adds flavor.',
          'Season the chicken generously with salt, black pepper, and any optional seasonings you prefer. You can also sprinkle the seasonings inside the cavity.',
  
          // Step 4: Roast the Chicken
          'Place the seasoned chicken on a roasting rack in a roasting pan or a baking dish. Elevating the chicken on a rack allows the hot air to circulate, resulting in a crispier skin all around.',
          'Roast the chicken in the preheated oven for about 1 to 1 1/2 hours, or until the internal temperature of the thickest part of the thigh reaches 165°F (74°C) when measured with a meat thermometer.',
  
          // Step 5: Baste the Chicken
          'If you like, you can baste the chicken with the juices from the pan every 20-30 minutes. This adds moisture and enhances the flavor.',
          
  
          // Step 6: Rest and Serve
          'Once the chicken is fully cooked, remove it from the oven.',
          'Let the chicken rest for about 10-15 minutes before carving. This allows the juices to redistribute, resulting in a juicier bird.',
          'Carve the chicken into pieces, such as legs, thighs, breasts, and wings, and serve.',

        ],
        imageUrl: '/roast-chicken.jpg',
        time: '60 - 90 minutes'
        
      },
      {
        id: 7,
        title: 'Mexicana Nachos',
        description: 'Crispy tortilla chips with a spicy 100% minced beef topped with the finest cheddar and mozarella cheese.',
        ingredients: [
          'Tortilla chips (enough to cover a serving platter)',
          '1 1/2 cups shredded cheese (cheddar, Monterey Jack, or a blend)',
          '1/2 cup cooked and seasoned ground beef (or substitute with cooked shredded chicken or vegetarian protein',
          '1/4 cup sliced jalapeños (adjust to your spice preference)',
          '1/4 cup diced tomatoes',
          '1/4 cup diced red onion',
          '1/4 cup chopped fresh cilantro',
          '1/4 cup sour cream',
          '1/4 cup guacamole',
          '1/4 cup salsa (optional)',
          'Salt and pepper to taste'
        ],
        steps: [
          // Step 1: Preheat the Oven
          'Preheat your oven to 350°F (175°C).',
  
          // Step 2: Arrange the Tortilla Chips
          'Spread the tortilla chips in a single layer on a large oven-safe serving platter or baking sheet.',
            
          // Step 3: Add the Cheese
          'Sprinkle the shredded cheese evenly over the tortilla chips. Make sure the cheese covers the chips, as this will help hold the nachos together.',
            
          // Step 4: Layer the Toppings
          'Evenly distribute the seasoned ground beef (or other protein), sliced jalapeños, diced tomatoes, and diced red onion over the cheese-covered chips.',
    
  
          // Step 5: Bake the Nachos
          'Place the nachos in the preheated oven and bake for about 10-15 minutes, or until the cheese is melted and bubbly, and the toppings are heated through.',
          
  
          // Step 6: Add Fresh Ingredients
          'Remove the nachos from the oven and immediately sprinkle the chopped fresh cilantro over the top.',

          // Step 7: Serve the Nachos
          'Drizzle sour cream and guacamole over the nachos.',
          'If desired, add a dollop of salsa for extra flavor and kick.'

        ],
        imageUrl: '/nachos.jpg',
        time: '15 - 20 minutes'
        
      },
      {
        id: 8,
        title: 'Beef Burger',
        description: 'Pure ground beef patty plated on a freshly baked bun mixed with farm fresh tomatoes, onions, pickles and lettuce topped with a ranch sauce.',
        ingredients: [
          '1 pound (about 450g) ground beef (80/20 blend recommended for juicy burgers)',
          'Salt and black pepper to taste',
          '4 hamburger buns',
          'Optional toppings: lettuce, tomato slices, onion slices, cheese (such as cheddar or American), pickles, ketchup, mustard, mayonnaise, etc.',
          
        ],
        steps: [
          // Step 1: Preheat the Grill or Stovetop
          'Preheat a grill or stovetop griddle over medium-high heat.',
  
          // Step 2: Shape the Patties
          'Divide the ground beef into 4 equal portions. Gently shape each portion into a patty, about 1/2 to 3/4 inch thick. Press a slight indentation in the center of each patty with your thumb (this helps prevent the burger from puffing up during cooking)',
          
  
          // Step 3: Season the Patties
          'Season both sides of each patty generously with salt and black pepper.',
          
  
          // Step 4: Grill or Cook the Patties
          'Place the patties on the preheated grill or griddle. Cook for about 3-4 minutes on the first side without pressing down on the patties (to keep the juices inside).',
          'Flip the patties and cook for an additional 3-4 minutes on the second side, or until the internal temperature reaches 160°F (71°C) for medium-well burgers. If adding cheese, place a slice on each patty during the last minute of cooking and close the lid (if using a grill) to melt the cheese.',
  
          // Step 5: Toast the Buns
          'While the patties are cooking, you can toast the hamburger buns on the grill or in a toaster until lightly golden.',
          
  
          // Step 6: Assemble the Burgers
          'Place the cooked patties on the bottom halves of the toasted hamburger buns.',
          'Add your desired toppings, such as lettuce, tomato, onion, pickles, ketchup, mustard, or mayonnaise.',
          
          // Step 7: Top and serve
          'Place the top halves of the buns on the assembled burgers.',
          'Serve the beef burgers hot, accompanied by your favorite side dishes.'
        ],
        imageUrl: '/burger.jpg',
        time: '10 - 12 minutes'
        
      },
    ];
  
  export default recipes;